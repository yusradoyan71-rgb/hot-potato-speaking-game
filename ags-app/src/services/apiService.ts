import { supabase, isLiveSupabaseConfigured } from './supabaseClient';
import type {
  Subject,
  Unit,
  Topic,
  TopicContent,
  Question,
  MiniExam,
  MockExam,
  UserQuestionAnswer,
  UserExamAttempt,
  DashboardStats,
  TopicProgressDetail,
  WeakTopicItem,
} from '../types/database';
import {
  AGS_SUBJECTS,
  AGS_UNITS,
  AGS_TOPICS,
  AGS_TOPIC_CONTENTS,
  AGS_QUESTIONS,
  AGS_MINI_EXAMS,
  AGS_MOCK_EXAMS,
} from '../data/curriculumData';

const STORAGE_PREFIX = 'ags_db_v2_';

class ApiService {
  private getLocal<T>(key: string, defaultVal: T): T {
    try {
      const data = localStorage.getItem(STORAGE_PREFIX + key);
      return data ? JSON.parse(data) : defaultVal;
    } catch {
      return defaultVal;
    }
  }

  private setLocal<T>(key: string, val: T): void {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }

  // ==========================================
  // CURRICULUM HIERARCHY
  // ==========================================
  async getSubjects(): Promise<Subject[]> {
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('subjects')
          .select('*')
          .order('order_index', { ascending: true });
        if (!error && data && data.length > 0) return data as Subject[];
      } catch (err) {
        console.warn('Supabase fetch error, fallback to seed:', err);
      }
    }
    const custom = this.getLocal<Subject[]>('subjects', []);
    return [...AGS_SUBJECTS, ...custom];
  }

  async getUnitsBySubject(subjectId: string): Promise<Unit[]> {
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('units')
          .select('*')
          .eq('subject_id', subjectId)
          .order('order_index', { ascending: true });
        if (!error && data && data.length > 0) return data as Unit[];
      } catch (err) {
        console.warn('Supabase fetch units error:', err);
      }
    }
    const customUnits = this.getLocal<Unit[]>('units', []);
    const all = [...AGS_UNITS, ...customUnits];
    return all.filter((u) => u.subject_id === subjectId);
  }

  async getTopicsByUnit(unitId: string): Promise<Topic[]> {
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('topics')
          .select('*')
          .eq('unit_id', unitId)
          .order('order_index', { ascending: true });
        if (!error && data && data.length > 0) return data as Topic[];
      } catch (err) {
        console.warn('Supabase fetch topics error:', err);
      }
    }
    const customTopics = this.getLocal<Topic[]>('topics', []);
    const all = [...AGS_TOPICS, ...customTopics];
    return all.filter((t) => t.unit_id === unitId);
  }

  async getTopicContent(topicId: string): Promise<TopicContent | null> {
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('topic_contents')
          .select('*')
          .eq('topic_id', topicId)
          .single();
        if (!error && data) return data as TopicContent;
      } catch (err) {
        console.warn('Supabase fetch topic content error:', err);
      }
    }
    const customContents = this.getLocal<Record<string, TopicContent>>('topic_contents', {});
    if (customContents[topicId]) return customContents[topicId];
    return AGS_TOPIC_CONTENTS[topicId] || null;
  }

  // ==========================================
  // 3-COMPONENT TOPIC PROGRESS (RLS Protected)
  // ==========================================
  async getUserTopicProgress(userId: string): Promise<Record<string, TopicProgressDetail>> {
    if (!userId) return {};
    const store = this.getLocal<Record<string, Record<string, TopicProgressDetail>>>('user_topic_progress_v2', {});
    return store[userId] || {};
  }

  async updateTopicProgressComponent(
    userId: string,
    topicId: string,
    component: 'content_read' | 'mini_test' | 'questions_solved',
    value: boolean
  ): Promise<TopicProgressDetail> {
    const store = this.getLocal<Record<string, Record<string, TopicProgressDetail>>>('user_topic_progress_v2', {});
    if (!store[userId]) store[userId] = {};
    const current = store[userId][topicId] || {
      is_content_read: false,
      is_mini_test_done: false,
      is_questions_solved: false,
      percentage: 0,
      last_updated: new Date().toISOString(),
    };

    if (component === 'content_read') current.is_content_read = value;
    if (component === 'mini_test') current.is_mini_test_done = value;
    if (component === 'questions_solved') current.is_questions_solved = value;

    let pct = 0;
    if (current.is_content_read) pct += 33;
    if (current.is_mini_test_done) pct += 33;
    if (current.is_questions_solved) pct += 34;
    current.percentage = Math.min(100, pct);
    current.last_updated = new Date().toISOString();

    store[userId][topicId] = current;
    this.setLocal('user_topic_progress_v2', store);

    if (isLiveSupabaseConfigured()) {
      try {
        await supabase.from('user_topic_progress').upsert({
          user_id: userId,
          topic_id: topicId,
          is_completed: current.percentage === 100,
          completed_at: new Date().toISOString(),
        });
      } catch (err) {
        console.warn('Supabase progress save error:', err);
      }
    }

    return current;
  }

  // ==========================================
  // QUESTIONS & ANSWERS (RLS Protected)
  // ==========================================
  async getQuestions(filters?: {
    subjectId?: string;
    unitId?: string;
    topicId?: string;
    isPastExam?: boolean;
    pastExamYear?: number;
    difficulty?: string;
    sourceType?: 'cikmis' | 'ozgun';
  }): Promise<Question[]> {
    if (isLiveSupabaseConfigured()) {
      try {
        let query = supabase.from('questions').select('*, options:question_options(*)');
        if (filters?.subjectId) query = query.eq('subject_id', filters.subjectId);
        if (filters?.unitId) query = query.eq('unit_id', filters.unitId);
        if (filters?.topicId) query = query.eq('topic_id', filters.topicId);
        if (filters?.isPastExam !== undefined) query = query.eq('is_past_exam', filters.isPastExam);
        if (filters?.pastExamYear) query = query.eq('past_exam_year', filters.pastExamYear);
        if (filters?.difficulty) query = query.eq('difficulty', filters.difficulty);

        const { data, error } = await query;
        if (!error && data && data.length > 0) return data as Question[];
      } catch (err) {
        console.warn('Supabase fetch questions error:', err);
      }
    }
    const customQuestions = this.getLocal<Question[]>('questions', []);
    let list = [...AGS_QUESTIONS, ...customQuestions];

    if (filters?.subjectId) list = list.filter((q) => q.subject_id === filters.subjectId);
    if (filters?.unitId) list = list.filter((q) => q.unit_id === filters.unitId);
    if (filters?.topicId) list = list.filter((q) => q.topic_id === filters.topicId);
    if (filters?.isPastExam !== undefined) list = list.filter((q) => q.is_past_exam === filters.isPastExam);
    if (filters?.pastExamYear) list = list.filter((q) => q.past_exam_year === filters.pastExamYear);
    if (filters?.difficulty) list = list.filter((q) => q.difficulty === filters.difficulty);
    if (filters?.sourceType) list = list.filter((q) => q.source_type === filters.sourceType);

    return list;
  }

  async recordQuestionAnswer(answer: UserQuestionAnswer): Promise<void> {
    if (isLiveSupabaseConfigured()) {
      try {
        await supabase.from('user_question_answers').insert(answer);
      } catch (err) {
        console.warn('Supabase answer error:', err);
      }
    }
    const key = `user_answers_${answer.user_id}`;
    const list = this.getLocal<UserQuestionAnswer[]>(key, []);
    list.unshift(answer);
    this.setLocal(key, list.slice(0, 500));
  }

  async getUserAnswers(userId: string): Promise<UserQuestionAnswer[]> {
    if (!userId) return [];
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('user_question_answers')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });
        if (!error && data) return data as UserQuestionAnswer[];
      } catch (err) {
        console.warn('Supabase answers error:', err);
      }
    }
    return this.getLocal<UserQuestionAnswer[]>(`user_answers_${userId}`, []);
  }

  // ==========================================
  // EXAMS & ATTEMPTS
  // ==========================================
  async getMiniExamByUnit(unitId: string): Promise<MiniExam | null> {
    const list = [...AGS_MINI_EXAMS, ...this.getLocal<MiniExam[]>('mini_exams', [])];
    const exam = list.find((e) => e.unit_id === unitId);
    if (!exam) {
      const unitQuestions = (await this.getQuestions({ unitId })).slice(0, 5);
      if (unitQuestions.length > 0) {
        return {
          id: `dyn-mini-${unitId}`,
          unit_id: unitId,
          title: 'Ünite Tarama Mini Sınavı',
          description: 'Bu ünitenin kazanımlarını ölçen 5 soruluk tarama testi.',
          duration_minutes: 10,
          passing_score: 70,
          questions: unitQuestions,
        };
      }
      return null;
    }
    return exam;
  }

  async getMockExams(): Promise<MockExam[]> {
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.from('mock_exams').select('*');
        if (!error && data && data.length > 0) return data as MockExam[];
      } catch (err) {
        console.warn('Supabase mock exams error:', err);
      }
    }
    const custom = this.getLocal<MockExam[]>('mock_exams', []);
    return [...AGS_MOCK_EXAMS, ...custom];
  }

  async getMockExamById(id: string): Promise<MockExam | null> {
    const all = await this.getMockExams();
    return all.find((m) => m.id === id) || null;
  }

  async recordExamAttempt(attempt: UserExamAttempt): Promise<void> {
    if (isLiveSupabaseConfigured()) {
      try {
        await supabase.from('user_exam_attempts').insert(attempt);
      } catch (err) {
        console.warn('Supabase attempt error:', err);
      }
    }
    const key = `user_attempts_${attempt.user_id}`;
    const list = this.getLocal<UserExamAttempt[]>(key, []);
    list.unshift(attempt);
    this.setLocal(key, list.slice(0, 100));
  }

  async getUserAttempts(userId: string): Promise<UserExamAttempt[]> {
    if (!userId) return [];
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('user_exam_attempts')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });
        if (!error && data) return data as UserExamAttempt[];
      } catch (err) {
        console.warn('Supabase get attempts error:', err);
      }
    }
    return this.getLocal<UserExamAttempt[]>(`user_attempts_${userId}`, []);
  }

  // ==========================================
  // DASHBOARD & WEAK TOPIC REVIEW CALCULATIONS
  // ==========================================
  async getDashboardStats(userId: string): Promise<DashboardStats> {
    const subjects = await this.getSubjects();
    const progressMap = await this.getUserTopicProgress(userId);
    const answers = await this.getUserAnswers(userId);
    const attempts = await this.getUserAttempts(userId);

    const customTopics = this.getLocal<Topic[]>('topics', []);
    const allTopics = [...AGS_TOPICS, ...customTopics];
    const totalTopicsCount = allTopics.length;

    // Total learning activities = totalTopics * 3 (Lesson + Mini test + Questions)
    const totalActivitiesCount = totalTopicsCount * 3;
    let completedActivitiesCount = 0;
    let completedTopicsCount = 0;

    allTopics.forEach((t) => {
      const p = progressMap[t.id];
      if (p) {
        if (p.is_content_read) completedActivitiesCount++;
        if (p.is_mini_test_done) completedActivitiesCount++;
        if (p.is_questions_solved) completedActivitiesCount++;
        if (p.percentage === 100) completedTopicsCount++;
      }
    });

    const overallProgressPercent = totalActivitiesCount > 0
      ? Math.round((completedActivitiesCount / totalActivitiesCount) * 100)
      : 0;

    const solvedQuestionsCount = answers.length;
    const correctAnswersCount = answers.filter((a) => a.is_correct).length;
    const incorrectAnswersCount = solvedQuestionsCount - correctAnswersCount;
    const accuracyRate = solvedQuestionsCount > 0
      ? Math.round((correctAnswersCount / solvedQuestionsCount) * 100)
      : 0;

    const completedMiniExamsCount = attempts.filter((a) => a.exam_type === 'mini').length;
    const completedMockExamsCount = attempts.filter((a) => a.exam_type === 'mock').length;

    // Subject breakdown
    const customUnits = this.getLocal<Unit[]>('units', []);
    const allUnits = [...AGS_UNITS, ...customUnits];

    const subjectProgress = subjects.map((subj) => {
      const unitsInSubj = allUnits.filter((u) => u.subject_id === subj.id);
      const unitIds = new Set(unitsInSubj.map((u) => u.id));
      const topicsInSubj = allTopics.filter((t) => unitIds.has(t.unit_id));

      let compInSubj = 0;
      topicsInSubj.forEach((t) => {
        if (progressMap[t.id]?.percentage === 100) compInSubj++;
      });
      const totCount = topicsInSubj.length;
      const pct = totCount > 0 ? Math.round((compInSubj / totCount) * 100) : 0;

      return {
        subject_id: subj.id,
        subject_title: subj.title,
        completed_topics: compInSubj,
        total_topics: totCount,
        percentage: pct,
        unit_count: unitsInSubj.length,
      };
    });

    // Determine Continue Topic
    let continueTopic: DashboardStats['continue_topic'] = null;
    for (const subj of subjects) {
      const unitsInSubj = allUnits.filter((u) => u.subject_id === subj.id);
      for (const unit of unitsInSubj) {
        const topicsInUnit = allTopics.filter((t) => t.unit_id === unit.id);
        for (const topic of topicsInUnit) {
          const prog = progressMap[topic.id];
          if (!prog || prog.percentage < 100) {
            continueTopic = {
              subject_id: subj.id,
              subject_title: subj.title,
              unit_id: unit.id,
              unit_title: unit.title,
              topic_id: topic.id,
              topic_title: topic.title,
            };
            break;
          }
        }
        if (continueTopic) break;
      }
      if (continueTopic) break;
    }

    // Determine Weak Topics / "Tekrar Etmem Gerekenler"
    const topicErrorMap: Record<string, { total: number; incorrect: number }> = {};
    const allQuestions = await this.getQuestions();

    answers.forEach((ans) => {
      const q = allQuestions.find((item) => item.id === ans.question_id);
      if (q && q.topic_id) {
        if (!topicErrorMap[q.topic_id]) {
          topicErrorMap[q.topic_id] = { total: 0, incorrect: 0 };
        }
        topicErrorMap[q.topic_id].total++;
        if (!ans.is_correct) topicErrorMap[q.topic_id].incorrect++;
      }
    });

    const weakTopics: WeakTopicItem[] = [];
    Object.entries(topicErrorMap).forEach(([tId, stat]) => {
      if (stat.total >= 1 && (stat.incorrect / stat.total) >= 0.4) {
        const tObj = allTopics.find((t) => t.id === tId);
        const uObj = allUnits.find((u) => u.id === tObj?.unit_id);
        const sObj = subjects.find((s) => s.id === uObj?.subject_id);

        if (tObj && uObj && sObj) {
          weakTopics.push({
            topic_id: tId,
            topic_title: tObj.title,
            unit_id: uObj.id,
            unit_title: uObj.title,
            subject_id: sObj.id,
            subject_title: sObj.title,
            incorrect_count: stat.incorrect,
            total_attempted: stat.total,
            accuracy_rate: Math.round(((stat.total - stat.incorrect) / stat.total) * 100),
            reason: 'repeated_errors',
          });
        }
      }
    });

    // If student has no weak topics from errors yet, surface incomplete topics
    if (weakTopics.length === 0) {
      allTopics.slice(0, 3).forEach((t) => {
        const prog = progressMap[t.id];
        if (!prog || prog.percentage < 100) {
          const uObj = allUnits.find((u) => u.id === t.unit_id);
          const sObj = subjects.find((s) => s.id === uObj?.subject_id);
          if (uObj && sObj) {
            weakTopics.push({
              topic_id: t.id,
              topic_title: t.title,
              unit_id: uObj.id,
              unit_title: uObj.title,
              subject_id: sObj.id,
              subject_title: sObj.title,
              incorrect_count: 0,
              total_attempted: 0,
              accuracy_rate: prog ? prog.percentage : 0,
              reason: 'incomplete_study',
            });
          }
        }
      });
    }

    return {
      overall_progress_percent: overallProgressPercent,
      total_activities_count: totalActivitiesCount,
      completed_activities_count: completedActivitiesCount,
      completed_topics_count: completedTopicsCount,
      total_topics_count: totalTopicsCount,
      solved_questions_count: solvedQuestionsCount,
      correct_answers_count: correctAnswersCount,
      incorrect_answers_count: incorrectAnswersCount,
      accuracy_rate: accuracyRate,
      completed_mini_exams_count: completedMiniExamsCount,
      completed_mock_exams_count: completedMockExamsCount,
      recent_attempts: attempts.slice(0, 5),
      weak_topics: weakTopics.slice(0, 4),
      subject_progress: subjectProgress,
      continue_topic: continueTopic,
    };
  }

  // ==========================================
  // ADMIN ACTIONS
  // ==========================================
  async createSubject(subject: Subject): Promise<void> {
    const current = this.getLocal<Subject[]>('subjects', []);
    current.push(subject);
    this.setLocal('subjects', current);
  }

  async createUnit(unit: Unit): Promise<void> {
    const current = this.getLocal<Unit[]>('units', []);
    current.push(unit);
    this.setLocal('units', current);
  }

  async createTopic(topic: Topic, content?: TopicContent): Promise<void> {
    const currentTopics = this.getLocal<Topic[]>('topics', []);
    currentTopics.push(topic);
    this.setLocal('topics', currentTopics);

    if (content) {
      const currentContents = this.getLocal<Record<string, TopicContent>>('topic_contents', {});
      currentContents[topic.id] = content;
      this.setLocal('topic_contents', currentContents);
    }
  }

  async createQuestion(question: Question): Promise<void> {
    const current = this.getLocal<Question[]>('questions', []);
    current.push(question);
    this.setLocal('questions', current);
  }
}

export const apiService = new ApiService();
