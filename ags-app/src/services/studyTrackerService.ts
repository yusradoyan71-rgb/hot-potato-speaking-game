import { supabase, isLiveSupabaseConfigured } from './supabaseClient';
import { AGS_STUDY_PLANS } from '../data/studyTrackerData';
import type { SubjectStudyPlan } from '../types/database';

const TRACKER_STORAGE_PREFIX = 'ags_tracker_v3_';

export interface SubjectProgressDetail {
  subjectId: string;
  title: string;
  shortTitle: string;
  weightPercentage: number;
  questionCount: number;
  icon: string;
  totalTasks: number;
  completedTasks: number;
  percentage: number;
  weightedContribution: number;
  totalVideos: number;
  completedVideos: number;
  totalExams: number;
  completedExams: number;
}

export interface OverallTrackerStats {
  weightedProgress: number; // 0 to 100 based on official AGS weights
  totalTasks: number;
  completedTasks: number;
  overallPercentage: number; // raw total completed / total
  totalVideos: number;
  completedVideos: number;
  totalExams: number;
  completedExams: number;
  subjects: SubjectProgressDetail[];
}

export interface SubjectUserNote {
  subjectId: string;
  note: string;
  targetQuestions: number;
  solvedQuestions: number;
  updatedAt: string;
}

class StudyTrackerService {
  private getStorageKey(userId: string): string {
    return `${TRACKER_STORAGE_PREFIX}tasks_${userId || 'guest'}`;
  }

  private getNotesStorageKey(userId: string): string {
    return `${TRACKER_STORAGE_PREFIX}notes_${userId || 'guest'}`;
  }

  // Get all plans
  getStudyPlans(): SubjectStudyPlan[] {
    return AGS_STUDY_PLANS;
  }

  // Get plan by subject id
  getPlanBySubject(subjectId: string): SubjectStudyPlan | undefined {
    return AGS_STUDY_PLANS.find(
      (p) => p.subject_id === subjectId || p.id === subjectId || p.short_title.toLowerCase() === subjectId.toLowerCase()
    );
  }

  // Load completed task IDs for a user
  async getCompletedTaskIds(userId: string): Promise<Set<string>> {
    const localKey = this.getStorageKey(userId);
    let localSet = new Set<string>();

    try {
      const stored = localStorage.getItem(localKey);
      if (stored) {
        const arr = JSON.parse(stored);
        if (Array.isArray(arr)) localSet = new Set(arr);
      }
    } catch (e) {
      console.error('Error reading local checklist progress:', e);
    }

    if (isLiveSupabaseConfigured() && userId) {
      try {
        const { data, error } = await supabase
          .from('user_study_progress')
          .select('task_id')
          .eq('user_id', userId);

        if (!error && data && data.length > 0) {
          const remoteSet = new Set(data.map((r: any) => r.task_id));
          // Merge local and remote
          const merged = new Set([...localSet, ...remoteSet]);
          localStorage.setItem(localKey, JSON.stringify(Array.from(merged)));
          return merged;
        }
      } catch (err) {
        console.warn('Supabase fetch user_study_progress error, using local:', err);
      }
    }

    return localSet;
  }

  // Toggle a single task
  async toggleTask(userId: string, taskId: string, completed: boolean): Promise<Set<string>> {
    const current = await this.getCompletedTaskIds(userId);

    if (completed) {
      current.add(taskId);
    } else {
      current.delete(taskId);
    }

    // Save locally
    const localKey = this.getStorageKey(userId);
    localStorage.setItem(localKey, JSON.stringify(Array.from(current)));

    // Save to Supabase if live
    if (isLiveSupabaseConfigured() && userId) {
      try {
        if (completed) {
          await supabase
            .from('user_study_progress')
            .upsert({ user_id: userId, task_id: taskId, completed_at: new Date().toISOString() });
        } else {
          await supabase
            .from('user_study_progress')
            .delete()
            .eq('user_id', userId)
            .eq('task_id', taskId);
        }
      } catch (err) {
        console.warn('Supabase toggleTask error:', err);
      }
    }

    return new Set(current);
  }

  // Calculate comprehensive statistics based on completed tasks
  calculateStats(completedTaskIds: Set<string>): OverallTrackerStats {
    let grandTotalTasks = 0;
    let grandCompletedTasks = 0;
    let totalVideosCount = 0;
    let completedVideosCount = 0;
    let totalExamsCount = 0;
    let completedExamsCount = 0;

    let totalWeightedSum = 0; // Sum of (subject_pct * (weight / 100))

    const subjectDetails: SubjectProgressDetail[] = AGS_STUDY_PLANS.map((plan) => {
      // 1. Calculate section tasks
      const allSectionTasks = plan.sections.flatMap((s) => s.tasks);
      const sectionTotal = allSectionTasks.length;
      const sectionCompleted = allSectionTasks.filter((t) => completedTaskIds.has(t.id)).length;

      // 2. Calculate video tasks
      const videoTotal = plan.videos.length;
      const videoCompleted = plan.videos.filter((v) => completedTaskIds.has(v.taskId)).length;

      // 3. Calculate exam tasks
      const examTotal = plan.exams.length;
      const examCompleted = plan.exams.filter((e) => completedTaskIds.has(e.taskId)).length;

      // Subject totals
      // For Sözel Yetenek, progress is strictly 5 tasks = 100% (1/5=20%, 2/5=40%, 3/5=60%, 4/5=80%, 5/5=100%)
      const isSozel = plan.subject_id === 'sozel-yetenek';
      const subjectTotalTasks = isSozel ? 5 : (sectionTotal + videoTotal + examTotal);
      const subjectCompletedTasks = isSozel ? sectionCompleted : (sectionCompleted + videoCompleted + examCompleted);

      const subjectPercentage =
        subjectTotalTasks > 0 ? Math.round((subjectCompletedTasks / subjectTotalTasks) * 100) : 0;

      const weightedContribution = (subjectPercentage * plan.weight_percentage) / 100;
      totalWeightedSum += weightedContribution;

      grandTotalTasks += subjectTotalTasks;
      grandCompletedTasks += subjectCompletedTasks;
      totalVideosCount += videoTotal;
      completedVideosCount += videoCompleted;
      totalExamsCount += examTotal;
      completedExamsCount += examCompleted;

      return {
        subjectId: plan.subject_id,
        title: plan.title,
        shortTitle: plan.short_title,
        weightPercentage: plan.weight_percentage,
        questionCount: plan.question_count_in_ags,
        icon: plan.icon,
        totalTasks: subjectTotalTasks,
        completedTasks: subjectCompletedTasks,
        percentage: subjectPercentage,
        weightedContribution: Number(weightedContribution.toFixed(2)),
        totalVideos: videoTotal,
        completedVideos: videoCompleted,
        totalExams: examTotal,
        completedExams: examCompleted,
      };
    });

    const overallPercentage =
      grandTotalTasks > 0 ? Math.round((grandCompletedTasks / grandTotalTasks) * 100) : 0;

    return {
      weightedProgress: Number(Math.min(100, Math.max(0, totalWeightedSum)).toFixed(1)),
      totalTasks: grandTotalTasks,
      completedTasks: grandCompletedTasks,
      overallPercentage,
      totalVideos: totalVideosCount,
      completedVideos: completedVideosCount,
      totalExams: totalExamsCount,
      completedExams: completedExamsCount,
      subjects: subjectDetails,
    };
  }

  // Get / Save subject user notes and question targets
  getUserSubjectNote(userId: string, subjectId: string): SubjectUserNote {
    const key = this.getNotesStorageKey(userId);
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        const dict = JSON.parse(stored);
        if (dict[subjectId]) return dict[subjectId];
      }
    } catch {}
    return {
      subjectId,
      note: '',
      targetQuestions: 500,
      solvedQuestions: 0,
      updatedAt: new Date().toISOString(),
    };
  }

  saveUserSubjectNote(userId: string, note: SubjectUserNote): void {
    const key = this.getNotesStorageKey(userId);
    try {
      const stored = localStorage.getItem(key);
      const dict = stored ? JSON.parse(stored) : {};
      dict[note.subjectId] = { ...note, updatedAt: new Date().toISOString() };
      localStorage.setItem(key, JSON.stringify(dict));
    } catch (e) {
      console.error('Error saving subject note:', e);
    }
  }
}

export const studyTrackerService = new StudyTrackerService();
