export type UserRole = 'student';

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

export interface ComparisonTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface SelfCheckQuestion {
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D' | 'E'; text: string; isCorrect: boolean }[];
  explanation: string;
}

export interface TopicSection {
  title: string;
  content: string;
  subsections?: { subtitle: string; content: string }[];
}

export interface TopicExample {
  title: string;
  scenario: string;
  analysis: string;
  domain?: string;
}

export interface CommonConfusion {
  wrong_belief: string;
  correct_distinction: string;
  tip?: string;
}

export interface SubTopicDetail {
  id: string;
  number: string;
  title: string;
  content: string;
  key_takeaway?: string;
}

export interface TopicContent {
  id: string;
  topic_id: string;
  title?: string;
  overview?: string;
  why_it_matters?: string; // 2. "Neden Öğrenmeliyim?"
  learning_objectives: string[]; // 3. Öğrenme Hedefleri
  core_explanation?: string; // 4. Konu Anlatımı
  key_concepts: { term: string; definition: string; practical_meaning?: string; icon?: string }[]; // 5. Temel Kavramlar & Tanımlar
  subtopics?: SubTopicDetail[]; // 6. Alt Başlıklar
  examples?: TopicExample[]; // 7. Örnekler & Sınıf/Uygulama Vakaları
  comparison_tables?: ComparisonTable[]; // 8. Karşılaştırma Tabloları
  common_confusions?: CommonConfusion[]; // 9. Karıştırılan Noktalar
  exam_tips: { tip: string; importance: 'high' | 'medium' | 'critical' }[]; // 10. AGS'DE DİKKAT
  mnemonics?: { title: string; memory_trick: string; description: string }[]; // 11. Hatırlama İpucu
  summary: string; // 12. Özet
  what_to_remember: string[]; // 12. "Bu Konudan Ne Bilmeliyim?"
  self_check_questions?: SelfCheckQuestion[]; // 13. Kendini Dene (5 soru)
  structured_sections?: TopicSection[];
}

export type QuestionType =
  | 'scenario'
  | 'conceptual'
  | 'knowledge'
  | 'interpretation'
  | 'comparison'
  | 'application';

export type SourceType = 'cikmis' | 'ozgun';

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
  explanation_why_wrong?: Record<string, string>;
  difficulty: 'kolay' | 'orta' | 'zor';
  question_type?: QuestionType;
  source_type: SourceType; // 'cikmis' or 'ozgun'
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

export type MockDifficulty = 'temel' | 'orta' | 'orta-zor' | 'zor';

export interface MockExam {
  id: string;
  title: string;
  description: string;
  total_questions: number;
  duration_minutes: number;
  difficulty: MockDifficulty;
  tier_name: string; // e.g., 'Deneme 1 — Temel Seviye'
  questions?: Question[];
}

export interface TopicProgressDetail {
  is_content_read: boolean; // 33%
  is_mini_test_done: boolean; // 33%
  is_questions_solved: boolean; // 34%
  percentage: number; // 0 - 100
  last_updated: string;
}

export interface UserTopicProgress {
  id?: string;
  user_id: string;
  topic_id: string;
  is_content_read: boolean;
  is_mini_test_done: boolean;
  is_questions_solved: boolean;
  percentage: number;
  completed_at?: string;
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

export interface WeakTopicItem {
  topic_id: string;
  topic_title: string;
  unit_id: string;
  unit_title: string;
  subject_id: string;
  subject_title: string;
  incorrect_count: number;
  total_attempted: number;
  accuracy_rate: number;
  reason: 'low_quiz_score' | 'repeated_errors' | 'incomplete_study';
}

export interface DashboardStats {
  overall_progress_percent: number;
  total_activities_count: number;
  completed_activities_count: number;
  completed_topics_count: number;
  total_topics_count: number;
  solved_questions_count: number;
  correct_answers_count: number;
  incorrect_answers_count: number;
  accuracy_rate: number;
  completed_mini_exams_count: number;
  completed_mock_exams_count: number;
  recent_attempts: UserExamAttempt[];
  weak_topics: WeakTopicItem[];
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
