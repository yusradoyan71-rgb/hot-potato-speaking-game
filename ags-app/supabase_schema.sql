-- =========================================================
-- AGS (Akademi Giriş Sınavı) Veritabanı Şeması & RLS Politikaları
-- =========================================================

-- 1. PROFILES (Kullanıcı Profilleri)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT DEFAULT 'AGS Adayı',
    role TEXT DEFAULT 'student' CHECK (role IN ('student', 'admin')),
    target_score NUMERIC DEFAULT 85,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. SUBJECTS (Dersler - örn: Eğitim Bilimleri, Genel Yetenek, Genel Kültür, Mevzuat)
CREATE TABLE IF NOT EXISTS public.subjects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    icon TEXT DEFAULT 'BookOpen',
    description TEXT,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. UNITS (Üniteler)
CREATE TABLE IF NOT EXISTS public.units (
    id TEXT PRIMARY KEY,
    subject_id TEXT NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TOPICS (Konular)
CREATE TABLE IF NOT EXISTS public.topics (
    id TEXT PRIMARY KEY,
    unit_id TEXT NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    order_index INT DEFAULT 0,
    estimated_minutes INT DEFAULT 25,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TOPIC_CONTENTS (Konu İçerikleri & Açıklamaları)
CREATE TABLE IF NOT EXISTS public.topic_contents (
    id TEXT PRIMARY KEY,
    topic_id TEXT UNIQUE NOT NULL REFERENCES public.topics(id) ON DELETE CASCADE,
    overview TEXT NOT NULL,
    key_concepts JSONB DEFAULT '[]'::jsonb,
    structured_sections JSONB DEFAULT '[]'::jsonb,
    exam_tips JSONB DEFAULT '[]'::jsonb,
    summary TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. QUESTIONS (Sorular: Konu Soruları, Çıkmış Sorular & Deneme Soruları)
CREATE TABLE IF NOT EXISTS public.questions (
    id TEXT PRIMARY KEY,
    subject_id TEXT NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
    unit_id TEXT REFERENCES public.units(id) ON DELETE SET NULL,
    topic_id TEXT REFERENCES public.topics(id) ON DELETE SET NULL,
    question_text TEXT NOT NULL,
    explanation TEXT,
    difficulty TEXT DEFAULT 'orta' CHECK (difficulty IN ('kolay', 'orta', 'zor')),
    is_past_exam BOOLEAN DEFAULT FALSE,
    past_exam_year INT,
    past_exam_source TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. QUESTION_OPTIONS (Soru Şıkları)
CREATE TABLE IF NOT EXISTS public.question_options (
    id TEXT PRIMARY KEY,
    question_id TEXT NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    option_key TEXT NOT NULL CHECK (option_key IN ('A', 'B', 'C', 'D', 'E')),
    option_text TEXT NOT NULL,
    is_correct BOOLEAN DEFAULT FALSE
);

-- 8. MINI_EXAMS (Ünite Mini Denemeleri)
CREATE TABLE IF NOT EXISTS public.mini_exams (
    id TEXT PRIMARY KEY,
    unit_id TEXT NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    duration_minutes INT DEFAULT 15,
    passing_score NUMERIC DEFAULT 70,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. MINI_EXAM_QUESTIONS
CREATE TABLE IF NOT EXISTS public.mini_exam_questions (
    id TEXT PRIMARY KEY,
    mini_exam_id TEXT NOT NULL REFERENCES public.mini_exams(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    order_index INT DEFAULT 0
);

-- 10. MOCK_EXAMS (Genel AGS Denemeleri)
CREATE TABLE IF NOT EXISTS public.mock_exams (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    total_questions INT DEFAULT 80,
    duration_minutes INT DEFAULT 100,
    difficulty TEXT DEFAULT 'orta',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. MOCK_EXAM_QUESTIONS
CREATE TABLE IF NOT EXISTS public.mock_exam_questions (
    id TEXT PRIMARY KEY,
    mock_exam_id TEXT NOT NULL REFERENCES public.mock_exams(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    order_index INT DEFAULT 0
);

-- 12. USER_TOPIC_PROGRESS (Öğrenci Konu Tamamlama - RLS)
CREATE TABLE IF NOT EXISTS public.user_topic_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    topic_id TEXT NOT NULL REFERENCES public.topics(id) ON DELETE CASCADE,
    is_completed BOOLEAN DEFAULT TRUE,
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, topic_id)
);

-- 13. USER_QUESTION_ANSWERS (Öğrenci Soru Cevapları - RLS)
CREATE TABLE IF NOT EXISTS public.user_question_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    selected_option_key TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    context_type TEXT DEFAULT 'practice' CHECK (context_type IN ('topic', 'mini_exam', 'past_question', 'mock_exam', 'practice')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. USER_EXAM_ATTEMPTS (Öğrenci Deneme & Mini Sınav Girişimleri - RLS)
CREATE TABLE IF NOT EXISTS public.user_exam_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    exam_id TEXT NOT NULL,
    exam_type TEXT NOT NULL CHECK (exam_type IN ('mini', 'mock')),
    score NUMERIC NOT NULL,
    net_score NUMERIC NOT NULL DEFAULT 0,
    correct_count INT NOT NULL DEFAULT 0,
    incorrect_count INT NOT NULL DEFAULT 0,
    blank_count INT NOT NULL DEFAULT 0,
    duration_seconds INT NOT NULL DEFAULT 0,
    answers_json JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topic_contents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mini_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mini_exam_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_exam_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_topic_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_question_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_exam_attempts ENABLE ROW LEVEL SECURITY;

-- Helper function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 1. Profiles Policies
CREATE POLICY "Users can read own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- 2. Curriculum Tables (Public Read, Admin Write)
CREATE POLICY "Public read subjects" ON public.subjects FOR SELECT USING (true);
CREATE POLICY "Admin write subjects" ON public.subjects FOR ALL USING (public.is_admin());

CREATE POLICY "Public read units" ON public.units FOR SELECT USING (true);
CREATE POLICY "Admin write units" ON public.units FOR ALL USING (public.is_admin());

CREATE POLICY "Public read topics" ON public.topics FOR SELECT USING (true);
CREATE POLICY "Admin write topics" ON public.topics FOR ALL USING (public.is_admin());

CREATE POLICY "Public read topic_contents" ON public.topic_contents FOR SELECT USING (true);
CREATE POLICY "Admin write topic_contents" ON public.topic_contents FOR ALL USING (public.is_admin());

CREATE POLICY "Public read questions" ON public.questions FOR SELECT USING (true);
CREATE POLICY "Admin write questions" ON public.questions FOR ALL USING (public.is_admin());

CREATE POLICY "Public read question_options" ON public.question_options FOR SELECT USING (true);
CREATE POLICY "Admin write question_options" ON public.question_options FOR ALL USING (public.is_admin());

CREATE POLICY "Public read mini_exams" ON public.mini_exams FOR SELECT USING (true);
CREATE POLICY "Admin write mini_exams" ON public.mini_exams FOR ALL USING (public.is_admin());

CREATE POLICY "Public read mini_exam_questions" ON public.mini_exam_questions FOR SELECT USING (true);
CREATE POLICY "Admin write mini_exam_questions" ON public.mini_exam_questions FOR ALL USING (public.is_admin());

CREATE POLICY "Public read mock_exams" ON public.mock_exams FOR SELECT USING (true);
CREATE POLICY "Admin write mock_exams" ON public.mock_exams FOR ALL USING (public.is_admin());

CREATE POLICY "Public read mock_exam_questions" ON public.mock_exam_questions FOR SELECT USING (true);
CREATE POLICY "Admin write mock_exam_questions" ON public.mock_exam_questions FOR ALL USING (public.is_admin());

-- 3. User Progress & Attempts Policies (Strictly User Isolated)
CREATE POLICY "User progress access own" ON public.user_topic_progress
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "User answers access own" ON public.user_question_answers
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "User exam attempts access own" ON public.user_exam_attempts
    FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Automatic Profile Creation Trigger on Auth Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'role', 'student')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
