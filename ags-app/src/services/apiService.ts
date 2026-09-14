import { supabase, isLiveSupabaseConfigured } from './supabaseClient';
import {
  UserProfile,
  Subject,
  Unit,
  Topic,
  TopicContent,
  Question,
  MiniExam,
  MockExam,
  UserTopicProgress,
  UserQuestionAnswer,
  UserExamAttempt,
  DashboardStats,
} from '../types/database';
import {
  INITIAL_SUBJECTS,
  INITIAL_UNITS,
  INITIAL_TOPICS,
  INITIAL_TOPIC_CONTENTS,
  INITIAL_QUESTIONS,
  INITIAL_MINI_EXAMS,
  INITIAL_MOCK_EXAMS,
} from '../data/initialData';

// Local storage keys for persistent simulation when not connected to a live custom Supabase instance
const STORAGE_PREFIX = 'ags_db_';

class ApiService {
  // Helper to get local data
  private getLocal<T>(key: string, defaultVal: T): T {
    try {
      const data = localStorage.getItem(STORAGE_PREFIX + key);
      return data ? JSON.parse(data) : defaultVal;
    } catch {
      return defaultVal;
    }
  }

  // Helper to set local data
  private setLocal<T>(key: string, val: T): void {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }

  // ==========================================
  // CURRICULUM
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
    return [...INITIAL_SUBJECTS, ...custom];
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
        console.warn('Supabase fetch error:', err);
      }
    }
    const customUnits = this.getLocal<Unit[]>('units', []);
    const all = [...INITIAL_UNITS, ...customUnits];
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
        console.warn('Supabase fetch error:', err);
      }
    }
    const customTopics = this.getLocal<Topic[]>('topics', []);
    const all = [...INITIAL_TOPICS, ...customTopics];
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
        console.warn('Supabase fetch error:', err);
      }
    }
    const customContents = this.getLocal<Record<string, TopicContent>>('topic_contents', {});
    if (customContents[topicId]) return customContents[topicId];
    return INITIAL_TOPIC_CONTENTS[topicId] || null;
  }

  // ==========================================
  // PROGRESS (RLS Protected)
  // ==========================================
  async getUserTopicProgress(userId: string): Promise<Record<string, boolean>> {
    if (!userId) return {};
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase
          .from('user_topic_progress')
          .select('topic_id, is_completed')
          .eq('user_id', userId);
        if (!error && data) {
          const map: Record<string, boolean> = {};
          data.forEach((row) => {
            map[row.topic_id] = row.is_completed;
          });
          return map;
        }
      } catch (err) {
        console.warn('Supabase progress error:', err);
      }
    }
    const store = this.getLocal<Record<string, Record<string, boolean>>>('user_progress', {});
    return store[userId] || {};
  }

  async setTopicCompletion(userId: string, topicId: string, completed: boolean): Promise<boolean> {
    if (!userId) return false;
    if (isLiveSupabaseConfigured()) {
      try {
        const { error } = await supabase.from('user_topic_progress').upsert({
          user_id: userId,
          topic_id: topicId,
          is_completed: completed,
          completed_at: new Date().toISOString(),
        });
        if (error) console.error('Supabase save error:', error);
      } catch (err) {
        console.warn('Supabase progress save error:', err);
      }
    }
    // Save to local user-keyed storage for instant reactivity & offline resilience
    const store = this.getLocal<Record<string, Record<string, boolean>>>('user_progress', {});
    if (!store[userId]) store[userId] = {};
    store[userId][topicId] = completed;
    this.setLocal('user_progress', store);
    return true;
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
    let list = [...INITIAL_QUESTIONS, ...customQuestions];

    if (filters?.subjectId) list = list.filter((q) => q.subject_id === filters.subjectId);
    if (filters?.unitId) list = list.filter((q) => q.unit_id === filters.unitId);
    if (filters?.topicId) list = list.filter((q) => q.topic_id === filters.topicId);
    if (filters?.isPastExam !== undefined) list = list.filter((q) => q.is_past_exam === filters.isPastExam);
    if (filters?.pastExamYear) list = list.filter((q) => q.past_exam_year === filters.pastExamYear);
    if (filters?.difficulty) list = list.filter((q) => q.difficulty === filters.difficulty);

    return list;
  }

  async recordQuestionAnswer(answer: UserQuestionAnswer): Promise<void> {
    if (isLiveSupabaseConfigured()) {
      try {
        await supabase.from('user_question_answers').insert({
          user_id: answer.user_id,
          question_id: answer.question_id,
          selected_option_key: answer.selected_option_key,
          is_correct: answer.is_correct,
          context_type: answer.context_type,
          created_at: answer.created_at,
        });
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
  // EXAMS & ATTEMPTS (RLS Protected)
  // ==========================================
  async getMiniExamByUnit(unitId: string): Promise<MiniExam | null> {
    const list = [...INITIAL_MINI_EXAMS, ...this.getLocal<MiniExam[]>('mini_exams', [])];
    const exam = list.find((e) => e.unit_id === unitId);
    if (!exam) {
      // Auto-generate a dynamic mini-exam from questions if not explicitly created
      const unitQuestions = (await this.getQuestions({ unitId })).slice(0, 5);
      if (unitQuestions.length > 0) {
        return {
          id: `dyn-mini-${unitId}`,
          unit_id: unitId,
          title: 'Ünite Tarama Mini Sınavı',
          description: 'Bu ünitenin kazanımlarını ölçen 5 soruluk değerlendirme testi.',
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
    return [...INITIAL_MOCK_EXAMS, ...custom];
  }

  async getMockExamById(id: string): Promise<MockExam | null> {
    const all = await this.getMockExams();
    return all.find((m) => m.id === id) || null;
  }

  async recordExamAttempt(attempt: UserExamAttempt): Promise<void> {
    if (isLiveSupabaseConfigured()) {
      try {
        await supabase.from('user_exam_attempts').insert({
          user_id: attempt.user_id,
          exam_id: attempt.exam_id,
          exam_type: attempt.exam_type,
          score: attempt.score,
          net_score: attempt.net_score,
          correct_count: attempt.correct_count,
          incorrect_count: attempt.incorrect_count,
          blank_count: attempt.blank_count,
          duration_seconds: attempt.duration_seconds,
          answers_json: attempt.answers_json,
          created_at: attempt.created_at,
        });
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
  // DASHBOARD CALCULATIONS (REAL DB DRIVEN)
  // ==========================================
  async getDashboardStats(userId: string): Promise<DashboardStats> {
    const subjects = await this.getSubjects();
    const progressMap = await this.getUserTopicProgress(userId);
    const answers = await this.getUserAnswers(userId);
    const attempts = await this.getUserAttempts(userId);

    const customTopics = this.getLocal<Topic[]>('topics', []);
    const allTopics = [...INITIAL_TOPICS, ...customTopics];
    const totalTopicsCount = allTopics.length;

    let completedTopicsCount = 0;
    allTopics.forEach((t) => {
      if (progressMap[t.id]) {
        completedTopicsCount++;
      }
    });

    const overallProgressPercent = totalTopicsCount > 0
      ? Math.round((completedTopicsCount / totalTopicsCount) * 100)
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
    const allUnits = [...INITIAL_UNITS, ...customUnits];

    const subjectProgress = subjects.map((subj) => {
      const unitsInSubj = allUnits.filter((u) => u.subject_id === subj.id);
      const unitIds = new Set(unitsInSubj.map((u) => u.id));
      const topicsInSubj = allTopics.filter((t) => unitIds.has(t.unit_id));

      const compCount = topicsInSubj.filter((t) => progressMap[t.id]).length;
      const totCount = topicsInSubj.length;
      const pct = totCount > 0 ? Math.round((compCount / totCount) * 100) : 0;

      return {
        subject_id: subj.id,
        subject_title: subj.title,
        completed_topics: compCount,
        total_topics: totCount,
        percentage: pct,
        unit_count: unitsInSubj.length,
      };
    });

    // Determine Continue Topic (the first topic that is NOT completed)
    let continueTopic: DashboardStats['continue_topic'] = null;
    for (const subj of subjects) {
      const unitsInSubj = allUnits.filter((u) => u.subject_id === subj.id);
      for (const unit of unitsInSubj) {
        const topicsInUnit = allTopics.filter((t) => t.unit_id === unit.id);
        for (const topic of topicsInUnit) {
          if (!progressMap[topic.id]) {
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

    return {
      overall_progress_percent: overallProgressPercent,
      completed_topics_count: completedTopicsCount,
      total_topics_count: totalTopicsCount,
      solved_questions_count: solvedQuestionsCount,
      correct_answers_count: correctAnswersCount,
      incorrect_answers_count: incorrectAnswersCount,
      accuracy_rate: accuracyRate,
      completed_mini_exams_count: completedMiniExamsCount,
      completed_mock_exams_count: completedMockExamsCount,
      recent_attempts: attempts.slice(0, 5),
      subject_progress: subjectProgress,
      continue_topic: continueTopic,
    };
  }

  // ==========================================
  // ADMIN ACTIONS (Subjects, Units, Topics, Questions)
  // ==========================================
  async createSubject(subject: Subject): Promise<void> {
    if (isLiveSupabaseConfigured()) {
      await supabase.from('subjects').insert(subject);
    }
    const current = this.getLocal<Subject[]>('subjects', []);
    current.push(subject);
    this.setLocal('subjects', current);
  }

  async createUnit(unit: Unit): Promise<void> {
    if (isLiveSupabaseConfigured()) {
      await supabase.from('units').insert(unit);
    }
    const current = this.getLocal<Unit[]>('units', []);
    current.push(unit);
    this.setLocal('units', current);
  }

  async createTopic(topic: Topic, content?: TopicContent): Promise<void> {
    if (isLiveSupabaseConfigured()) {
      await supabase.from('topics').insert(topic);
      if (content) {
        await supabase.from('topic_contents').insert(content);
      }
    }
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
    if (isLiveSupabaseConfigured()) {
      const { data: qData, error: qErr } = await supabase.from('questions').insert({
        id: question.id,
        subject_id: question.subject_id,
        unit_id: question.unit_id,
        topic_id: question.topic_id,
        question_text: question.question_text,
        explanation: question.explanation,
        difficulty: question.difficulty,
        is_past_exam: question.is_past_exam,
        past_exam_year: question.past_exam_year,
        past_exam_source: question.past_exam_source,
      }).select().single();

      if (!qErr && qData && question.options) {
        await supabase.from('question_options').insert(
          question.options.map((opt) => ({
            id: opt.id,
            question_id: question.id,
            option_key: opt.option_key,
            option_text: opt.option_text,
            is_correct: opt.is_correct,
          }))
        );
      }
    }
    const current = this.getLocal<Question[]>('questions', []);
    current.push(question);
    this.setLocal('questions', current);
  }
}

export const apiService = new ApiService();
