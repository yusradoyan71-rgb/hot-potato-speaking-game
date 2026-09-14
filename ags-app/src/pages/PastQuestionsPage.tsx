import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { Question, Subject, Unit, UserQuestionAnswer } from '../types/database';
import {
  FileQuestion,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  HelpCircle,
  RotateCcw,
  Search,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface PastQuestionsPageProps {
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const PastQuestionsPage: React.FC<PastQuestionsPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string, { selected: string; isCorrect: boolean }>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadInitial = async () => {
      setLoading(true);
      const subjs = await apiService.getSubjects();
      setSubjects(subjs);

      const qs = await apiService.getQuestions({ isPastExam: true });
      setQuestions(qs);

      if (user) {
        const answers = await apiService.getUserAnswers(user.id);
        const map: Record<string, { selected: string; isCorrect: boolean }> = {};
        answers.forEach((a) => {
          map[a.question_id] = { selected: a.selected_option_key, isCorrect: a.is_correct };
        });
        setUserAnswers(map);
      }
      setLoading(false);
    };

    loadInitial();
  }, [user]);

  const handleSelectOption = async (question: Question, optionKey: string) => {
    if (!user) return;
    const correctOpt = question.options.find((o) => o.is_correct);
    const isCorr = correctOpt?.option_key === optionKey;

    setUserAnswers((prev) => ({
      ...prev,
      [question.id]: { selected: optionKey, isCorrect: isCorr },
    }));

    setRevealedSolutions((prev) => ({
      ...prev,
      [question.id]: true,
    }));

    await apiService.recordQuestionAnswer({
      user_id: user.id,
      question_id: question.id,
      selected_option_key: optionKey,
      is_correct: isCorr,
      context_type: 'past_question',
      created_at: new Date().toISOString(),
    });
  };

  const filteredQuestions = questions.filter((q) => {
    if (selectedSubject !== 'all' && q.subject_id !== selectedSubject) return false;
    if (selectedYear !== 'all' && q.past_exam_year?.toString() !== selectedYear) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const solvedCount = filteredQuestions.filter((q) => !!userAnswers[q.id]).length;
  const correctCount = filteredQuestions.filter((q) => userAnswers[q.id]?.isCorrect).length;

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <FileQuestion size={22} color="var(--primary)" />
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Çıkmış Sorular Bankası</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          ÖSYM ve MEB tarafından daha önce yayımlanan geçmiş yıllara ait AGS & Eğitim Bilimleri soruları.
        </p>
      </div>

      {/* Filter Bar & Progress Stats */}
      <div
        className="card"
        style={{
          marginBottom: '24px',
          padding: '18px 22px',
          backgroundColor: 'var(--bg-card)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Filter size={16} />
            <span>Filtrele:</span>
          </div>

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            style={{ fontSize: '0.85rem', padding: '6px 12px' }}
          >
            <option value="all">Tüm Dersler</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>

          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            style={{ fontSize: '0.85rem', padding: '6px 12px' }}
          >
            <option value="all">Tüm Yıllar</option>
            <option value="2024">2024 AGS / ÖSYM</option>
            <option value="2023">2023 ÖSYM</option>
            <option value="2022">2022 ÖSYM</option>
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            style={{ fontSize: '0.85rem', padding: '6px 12px' }}
          >
            <option value="all">Tüm Zorluklar</option>
            <option value="kolay">Kolay</option>
            <option value="orta">Orta</option>
            <option value="zor">Zor</option>
          </select>
        </div>

        {/* Quick solve counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge badge-blue">
            {solvedCount} / {filteredQuestions.length} Soru Çözüldü
          </span>
          {solvedCount > 0 && (
            <span className="badge badge-emerald">
              {correctCount} Doğru (%{Math.round((correctCount / solvedCount) * 100)})
            </span>
          )}
        </div>
      </div>

      {/* Questions List */}
      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
          Sorular yükleniyor...
        </div>
      ) : filteredQuestions.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
          Seçtiğiniz filtrelere uygun soru bulunamadı.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredQuestions.map((q, idx) => {
            const userAns = userAnswers[q.id];
            const isRevealed = revealedSolutions[q.id] || !!userAns;

            return (
              <div key={q.id} className="card" style={{ padding: '26px' }}>
                {/* Header tags */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-blue">Soru #{idx + 1}</span>
                    {q.past_exam_year && (
                      <span className="badge badge-amber">{q.past_exam_year} Çıkmış Soru</span>
                    )}
                    {q.past_exam_source && (
                      <span className="badge badge-slate">{q.past_exam_source}</span>
                    )}
                  </div>

                  {userAns && (
                    <span className={userAns.isCorrect ? 'badge badge-emerald' : 'badge badge-rose'}>
                      {userAns.isCorrect ? '✓ Doğru Cevaplandı' : '✗ Yanlış Cevaplandı'}
                    </span>
                  )}
                </div>

                {/* Question text */}
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line',
                    marginBottom: '20px',
                    fontWeight: 500,
                  }}
                >
                  {q.question_text}
                </div>

                {/* Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  {q.options.map((opt) => {
                    const isSelected = userAns?.selected === opt.option_key;
                    const isCorrectOpt = opt.is_correct;

                    let optBg = 'var(--bg-input)';
                    let optBorder = 'var(--border-subtle)';
                    let optColor = 'var(--text-primary)';

                    if (isRevealed) {
                      if (isCorrectOpt) {
                        optBg = 'rgba(16, 185, 129, 0.15)';
                        optBorder = '#10b981';
                        optColor = '#34d399';
                      } else if (isSelected && !isCorrectOpt) {
                        optBg = 'rgba(244, 63, 94, 0.15)';
                        optBorder = '#f43f5e';
                        optColor = '#fb7185';
                      }
                    }

                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectOption(q, opt.option_key)}
                        className="card"
                        style={{
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          backgroundColor: optBg,
                          borderColor: optBorder,
                          color: optColor,
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        <div
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            border: '1px solid currentColor',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            flexShrink: 0,
                          }}
                        >
                          {opt.option_key}
                        </div>
                        <div style={{ fontSize: '0.9rem', lineHeight: 1.4, flex: 1 }}>
                          {opt.option_text}
                        </div>
                        {isRevealed && isCorrectOpt && <CheckCircle2 size={18} color="#10b981" />}
                        {isRevealed && isSelected && !isCorrectOpt && <XCircle size={18} color="#f43f5e" />}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                {isRevealed && q.explanation && (
                  <div
                    style={{
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.825rem', color: '#60a5fa', marginBottom: '4px' }}>
                      💡 Soru Çözümü & Açıklaması:
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {q.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
