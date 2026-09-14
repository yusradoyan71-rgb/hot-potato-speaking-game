export type UserRole = 'student' | 'admin';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  target_score: number;
  avatar_url?: string;
  created_at?: string;
}

export interface Subject {
  id: string;
  title: string;
  icon: string;
  description: string;
  order_index: number;
  total_topics_count?: number;
  completed_topics_count?: number;
}

export interface Unit {
  id: string;
  subject_id: string;
  title: string;
  description: string;
  order_index: number;
}

export interface Topic {
  id: string;
  unit_id: string;
  title: string;
  order_index: number;
  estimated_minutes: number;
}

export interface TopicSection {
  title: string;
  content: string;
  subsections?: { subtitle: string; content: string }[];
}

export interface TopicContent {
  id: string;
  topic_id: string;
  overview: string;
  key_concepts: { term: string; definition: string; icon?: string }[];
  structured_sections: TopicSection[];
  exam_tips: { tip: string; importance: 'high' | 'medium' | 'critical' }[];
  summary: string;
}

export interface QuestionOption {
  id: string;
  question_id: string;
  option_key: 'A' | 'B' | 'C' | 'D' | 'E';
  option_text: string;
  is_correct: boolean;
}

export interface Question {
  id: string;
  subject_id: string;
  unit_id?: string;
  topic_id?: string;
  question_text: string;
  explanation: string;
  difficulty: 'kolay' | 'orta' | 'zor';
  is_past_exam: boolean;
  past_exam_year?: number;
  past_exam_source?: string;
  options: QuestionOption[];
}

export interface MiniExam {
  id: string;
  unit_id: string;
  title: string;
  description: string;
  duration_minutes: number;
  passing_score: number;
  questions?: Question[];
}

export interface MockExam {
  id: string;
  title: string;
  description: string;
  total_questions: number;
  duration_minutes: number;
  difficulty: 'kolay' | 'orta' | 'zor';
  questions?: Question[];
}

export interface UserTopicProgress {
  id?: string;
  user_id: string;
  topic_id: string;
  is_completed: boolean;
  completed_at: string;
}

export interface UserQuestionAnswer {
  id?: string;
  user_id: string;
  question_id: string;
  selected_option_key: string;
  is_correct: boolean;
  context_type: 'topic' | 'mini_exam' | 'past_question' | 'mock_exam' | 'practice';
  created_at: string;
}

export interface UserExamAttempt {
  id?: string;
  user_id: string;
  exam_id: string;
  exam_title?: string;
  exam_type: 'mini' | 'mock';
  score: number;
  net_score: number;
  correct_count: number;
  incorrect_count: number;
  blank_count: number;
  duration_seconds: number;
  answers_json: Record<string, string>; // questionId -> selectedOptionKey
  created_at: string;
}

export interface DashboardStats {
  overall_progress_percent: number;
  completed_topics_count: number;
  total_topics_count: number;
  solved_questions_count: number;
  correct_answers_count: number;
  incorrect_answers_count: number;
  accuracy_rate: number;
  completed_mini_exams_count: number;
  completed_mock_exams_count: number;
  recent_attempts: UserExamAttempt[];
  subject_progress: {
    subject_id: string;
    subject_title: string;
    completed_topics: number;
    total_topics: number;
    percentage: number;
    unit_count: number;
  }[];
  continue_topic?: {
    subject_id: string;
    subject_title: string;
    unit_id: string;
    unit_title: string;
    topic_id: string;
    topic_title: string;
  } | null;
}
