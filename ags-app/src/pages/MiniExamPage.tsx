import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { MiniExam, Question, UserExamAttempt } from '../types/database';
import {
  FileQuestion,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Award,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NavigationTab } from '../components/Sidebar';

interface MiniExamPageProps {
  unitId: string;
  unitTitle?: string;
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const MiniExamPage: React.FC<MiniExamPageProps> = ({
  unitId,
  unitTitle,
  onNavigate,
}) => {
  const { user } = useAuth();
  const [exam, setExam] = useState<MiniExam | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [attemptResult, setAttemptResult] = useState<UserExamAttempt | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes default
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadExam = async () => {
      setLoading(true);
      const data = await apiService.getMiniExamByUnit(unitId);
      if (data) {
        setExam(data);
        const qList = data.questions && data.questions.length > 0
          ? data.questions
          : await apiService.getQuestions({ unitId });
        setQuestions(qList);
        setTimeLeft(data.duration_minutes * 60);
      }
      setLoading(false);
    };

    loadExam();
  }, [unitId]);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || loading || questions.length === 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted, loading, questions]);

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === optionKey ? '' : optionKey,
    }));
  };

  const handleSubmitExam = async () => {
    if (isSubmitted || !user || questions.length === 0) return;

    let correct = 0;
    let incorrect = 0;
    let blank = 0;

    questions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      if (!selected) {
        blank++;
      } else {
        const correctOpt = q.options.find((o) => o.is_correct);
        if (correctOpt && correctOpt.option_key === selected) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    const netScore = Math.max(0, Number((correct - incorrect * 0.25).toFixed(2)));
    const scorePct = Math.round((correct / questions.length) * 100);

    const attempt: UserExamAttempt = {
      user_id: user.id,
      exam_id: exam?.id || `mini-${unitId}`,
      exam_title: exam?.title || unitTitle || 'Ünite Mini Sınavı',
      exam_type: 'mini',
      score: scorePct,
      net_score: netScore,
      correct_count: correct,
      incorrect_count: incorrect,
      blank_count: blank,
      duration_seconds: (exam ? exam.duration_minutes * 60 : 600) - timeLeft,
      answers_json: selectedAnswers,
      created_at: new Date().toISOString(),
    };

    setIsSubmitted(true);
    setAttemptResult(attempt);

    // Save to Database
    await apiService.recordExamAttempt(attempt);

    // Save individual question answers to user_question_answers
    for (const q of questions) {
      const sel = selectedAnswers[q.id];
      if (sel) {
        const correctOpt = q.options.find((o) => o.is_correct);
        const isCorr = correctOpt?.option_key === sel;
        await apiService.recordQuestionAnswer({
          user_id: user.id,
          question_id: q.id,
          selected_option_key: sel,
          is_correct: isCorr,
          context_type: 'mini_exam',
          created_at: new Date().toISOString(),
        });
      }
    }

    if (scorePct >= (exam?.passing_score || 60)) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setAttemptResult(null);
    setCurrentIndex(0);
    setTimeLeft((exam?.duration_minutes || 10) * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div>Mini sınav hazırlanıyor...</div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="page-wrapper animate-fade-in" style={{ maxWidth: '800px' }}>
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <AlertCircle size={40} color="#f59e0b" style={{ marginBottom: '12px' }} />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
            Bu Ünite İçin Henüz Soru Eklenmemiş
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Müfredat sayfasına dönerek diğer ünitelerin mini sınavlarını çözebilirsiniz.
          </p>
          <button onClick={() => onNavigate('curriculum')} className="btn btn-primary">
            Müfredata Dön
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const selectedOptKey = selectedAnswers[currentQ?.id];

  return (
    <div className="page-wrapper animate-fade-in" style={{ maxWidth: '900px' }}>
      {/* Top Header & Exam Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <button
            onClick={() => onNavigate('curriculum')}
            className="btn-ghost"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', marginBottom: '4px' }}
          >
            <ArrowLeft size={16} />
            <span>Müfredata Dön</span>
          </button>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
            {exam?.title || unitTitle || 'Ünite Mini Sınavı'}
          </h1>
        </div>

        {/* Timer or Status */}
        {!isSubmitted ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: timeLeft < 120 ? 'rgba(244, 63, 94, 0.15)' : 'var(--bg-elevated)',
              border: `1px solid ${timeLeft < 120 ? 'rgba(244, 63, 94, 0.4)' : 'var(--border-subtle)'}`,
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              color: timeLeft < 120 ? '#fb7185' : 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '1rem',
            }}
          >
            <Clock size={18} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        ) : (
          <span className="badge badge-emerald" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
            Sınav Tamamlandı
          </span>
        )}
      </div>

      {/* Result Card (When submitted) */}
      {isSubmitted && attemptResult && (
        <div
          className="card animate-fade-in"
          style={{
            marginBottom: '24px',
            background: 'linear-gradient(135deg, rgba(18, 26, 47, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
            borderColor: attemptResult.score >= 60 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(245, 158, 11, 0.4)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: attemptResult.score >= 60 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: attemptResult.score >= 60 ? '#34d399' : '#fbbf24',
                }}
              >
                <Award size={26} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                  {attemptResult.score >= 60 ? 'Tebrikler, Sınavı Geçtiniz! 🎉' : 'Geliştirilebilir Performans'}
                </h2>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Sonuçlarınız başarı analizinize ve veritabanına kaydedildi.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handleRestart} className="btn btn-secondary">
                <RotateCcw size={16} />
                <span>Tekrar Çöz</span>
              </button>
              <button onClick={() => onNavigate('curriculum')} className="btn btn-primary">
                <span>Müfredata Dön</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid-4" style={{ gap: '12px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Başarı Puanı</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>%{attemptResult.score}</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AGS Neti (D - Y/4)</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34d399' }}>{attemptResult.net_score} Net</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Doğru / Yanlış</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                <span style={{ color: '#34d399' }}>{attemptResult.correct_count} D</span> /{' '}
                <span style={{ color: '#fb7185' }}>{attemptResult.incorrect_count} Y</span>
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '12px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Boş Bırakılan</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-muted)' }}>{attemptResult.blank_count}</div>
            </div>
          </div>

          {/* Section 36: Dedicated "Yanlışlarım ve Konu Tekrarı" Box */}
          {attemptResult.incorrect_count > 0 || attemptResult.blank_count > 0 ? (
            <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: '16px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fbbf24', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={18} />
                <span>Yanlışlarım & Öncelikli Konu Tekrarları ({attemptResult.incorrect_count + attemptResult.blank_count} Soru)</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {questions
                  .filter((q) => {
                    const userSel = selectedAnswers[q.id];
                    const correctOpt = q.options.find((o) => o.is_correct);
                    return !userSel || userSel !== correctOpt?.option_key;
                  })
                  .map((wrongQ, wIdx) => {
                    const userSel = selectedAnswers[wrongQ.id];
                    const correctOpt = wrongQ.options.find((o) => o.is_correct);

                    return (
                      <div
                        key={wIdx}
                        style={{
                          backgroundColor: 'var(--bg-input)',
                          border: '1px solid rgba(244, 63, 94, 0.25)',
                          borderRadius: 'var(--radius-md)',
                          padding: '14px 18px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '12px',
                        }}
                      >
                        <div style={{ flex: 1, minWidth: '240px' }}>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                            {wrongQ.question_text.length > 90 ? wrongQ.question_text.substring(0, 90) + '...' : wrongQ.question_text}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                            Senin Yanıtın: <strong style={{ color: userSel ? '#fb7185' : 'var(--text-muted)' }}>{userSel || 'Boş'}</strong> | Doğru Cevap: <strong style={{ color: '#34d399' }}>{correctOpt?.option_key}</strong>
                          </div>
                        </div>

                        {wrongQ.topic_id && (
                          <button
                            onClick={() =>
                              onNavigate('topic-detail', {
                                subjectId: wrongQ.subject_id,
                                unitId: wrongQ.unit_id || unitId,
                                topicId: wrongQ.topic_id,
                              })
                            }
                            className="btn btn-secondary"
                            style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                          >
                            <span>Konuyu Tekrar Et</span>
                            <ArrowRight size={14} />
                          </button>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: '14px', color: '#34d399', fontSize: '0.875rem', fontWeight: 600 }}>
              🎉 Harika! Bu sınavdaki tüm soruları doğru yanıtladınız.
            </div>
          )}
        </div>
      )}

      {/* Question Palette / Progress Bar */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '20px',
        }}
      >
        {questions.map((q, idx) => {
          const isAnswered = !!selectedAnswers[q.id];
          const isCurrent = idx === currentIndex;

          let bg = 'var(--bg-card)';
          let border = 'var(--border-subtle)';
          let color = 'var(--text-secondary)';

          if (isSubmitted) {
            const correctOpt = q.options.find((o) => o.is_correct);
            const userAns = selectedAnswers[q.id];
            if (userAns === correctOpt?.option_key) {
              bg = 'rgba(16, 185, 129, 0.2)';
              border = '#10b981';
              color = '#34d399';
            } else if (userAns) {
              bg = 'rgba(244, 63, 94, 0.2)';
              border = '#f43f5e';
              color = '#fb7185';
            }
          } else if (isCurrent) {
            border = 'var(--primary)';
            color = '#ffffff';
            bg = 'var(--primary-subtle)';
          } else if (isAnswered) {
            border = '#3b82f6';
            bg = 'rgba(59, 130, 246, 0.15)';
            color = '#93c5fd';
          }

          return (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: bg,
                border: `1px solid ${border}`,
                color: color,
                fontWeight: 700,
                fontSize: '0.85rem',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Question Card */}
      {currentQ && (
        <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span className="badge badge-blue">Soru {currentIndex + 1} / {questions.length}</span>
            {currentQ.difficulty && (
              <span
                className={
                  currentQ.difficulty === 'kolay'
                    ? 'badge badge-emerald'
                    : currentQ.difficulty === 'zor'
                    ? 'badge badge-rose'
                    : 'badge badge-amber'
                }
              >
                {currentQ.difficulty.toUpperCase()}
              </span>
            )}
          </div>

          <div
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
              marginBottom: '24px',
              fontWeight: 500,
            }}
          >
            {currentQ.question_text}
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {currentQ.options.map((opt) => {
              const isSelected = selectedOptKey === opt.option_key;
              const isCorrectOpt = opt.is_correct;

              let optionStyle = {
                backgroundColor: isSelected ? 'var(--primary-subtle)' : 'var(--bg-input)',
                borderColor: isSelected ? 'var(--primary)' : 'var(--border-subtle)',
                color: isSelected ? '#ffffff' : 'var(--text-primary)',
              };

              if (isSubmitted) {
                if (isCorrectOpt) {
                  optionStyle = {
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    borderColor: '#10b981',
                    color: '#34d399',
                  };
                } else if (isSelected && !isCorrectOpt) {
                  optionStyle = {
                    backgroundColor: 'rgba(244, 63, 94, 0.15)',
                    borderColor: '#f43f5e',
                    color: '#fb7185',
                  };
                }
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectOption(currentQ.id, opt.option_key)}
                  className="card"
                  style={{
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    cursor: isSubmitted ? 'default' : 'pointer',
                    ...optionStyle,
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid currentColor',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0,
                    }}
                  >
                    {opt.option_key}
                  </div>
                  <div style={{ fontSize: '0.925rem', lineHeight: 1.5, flex: 1 }}>
                    {opt.option_text}
                  </div>
                  {isSubmitted && isCorrectOpt && <CheckCircle2 size={20} color="#10b981" />}
                  {isSubmitted && isSelected && !isCorrectOpt && <XCircle size={20} color="#f43f5e" />}
                </div>
              );
            })}
          </div>

          {/* Explanation Box (Revealed after submission) */}
          {isSubmitted && currentQ.explanation && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(59, 130, 246, 0.08)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#60a5fa', marginBottom: '6px' }}>
                💡 Soru Çözümü & Açıklaması:
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Navigation & Submit Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="btn btn-secondary"
        >
          <ArrowLeft size={16} />
          <span>Önceki Soru</span>
        </button>

        {!isSubmitted ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                className="btn btn-secondary"
              >
                <span>Sonraki Soru</span>
                <ArrowRight size={16} />
              </button>
            ) : null}

            <button
              onClick={handleSubmitExam}
              className="btn btn-primary"
              style={{ padding: '10px 24px' }}
            >
              <CheckCircle2 size={16} />
              <span>Sınavı Bitir</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
            disabled={currentIndex === questions.length - 1}
            className="btn btn-secondary"
          >
            <span>Sonraki Soru</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};
