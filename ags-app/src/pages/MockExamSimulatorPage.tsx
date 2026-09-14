import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { MockExam, Question, UserExamAttempt } from '../types/database';
import {
  Clock,
  Flag,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Award,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  BookOpen,
  RotateCcw,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NavigationTab } from '../components/Sidebar';

interface MockExamSimulatorPageProps {
  mockExamId: string;
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const MockExamSimulatorPage: React.FC<MockExamSimulatorPageProps> = ({
  mockExamId,
  onNavigate,
}) => {
  const { user } = useAuth();
  const [exam, setExam] = useState<MockExam | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [attemptResult, setAttemptResult] = useState<UserExamAttempt | null>(null);
  const [subjectBreakdown, setSubjectBreakdown] = useState<
    { subjectId: string; title: string; correct: number; incorrect: number; blank: number; net: number }[]
  >([]);
  const [recommendedTopics, setRecommendedTopics] = useState<
    { topicId: string; topicTitle: string; unitId: string; subjectId: string }[]
  >([]);
  const [strongestArea, setStrongestArea] = useState<string>('');
  const [weakestArea, setWeakestArea] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(3600);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMock = async () => {
      setLoading(true);
      const mock = await apiService.getMockExamById(mockExamId);
      if (mock) {
        setExam(mock);
        let qList = mock.questions;
        if (!qList || qList.length === 0) {
          qList = await apiService.getQuestions();
        }
        setQuestions(qList);
        setTimeLeft(mock.duration_minutes * 60);
      }
      setLoading(false);
    };

    loadMock();
  }, [mockExamId]);

  useEffect(() => {
    if (isSubmitted || loading || questions.length === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, loading, questions]);

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === optionKey ? '' : optionKey,
    }));
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmit = async () => {
    if (isSubmitted || !user || questions.length === 0) return;

    let correct = 0;
    let incorrect = 0;
    let blank = 0;

    const subjMap: Record<
      string,
      { title: string; correct: number; incorrect: number; blank: number }
    > = {
      'sozel-yetenek': { title: 'Sözel Yetenek', correct: 0, incorrect: 0, blank: 0 },
      'sayisal-yetenek': { title: 'Sayısal Yetenek', correct: 0, incorrect: 0, blank: 0 },
      'tarih': { title: 'Tarih', correct: 0, incorrect: 0, blank: 0 },
      'cografya': { title: 'Türkiye Coğrafyası', correct: 0, incorrect: 0, blank: 0 },
      'egitim-bilimleri': { title: 'Eğitim Bilimleri', correct: 0, incorrect: 0, blank: 0 },
      'milli-egitim-sistemi': { title: 'Türk Millî Eğitim Sistemi', correct: 0, incorrect: 0, blank: 0 },
      'mevzuat': { title: 'Mevzuat & ÖMK', correct: 0, incorrect: 0, blank: 0 },
    };

    const missedTopicIds = new Set<string>();

    questions.forEach((q) => {
      const selected = selectedAnswers[q.id];
      const correctOpt = q.options.find((o) => o.is_correct);
      const isCorr = correctOpt && correctOpt.option_key === selected;

      const subjEntry = subjMap[q.subject_id] || {
        title: 'Genel',
        correct: 0,
        incorrect: 0,
        blank: 0,
      };

      if (!selected) {
        blank++;
        subjEntry.blank++;
        if (q.topic_id) missedTopicIds.add(q.topic_id);
      } else if (isCorr) {
        correct++;
        subjEntry.correct++;
      } else {
        incorrect++;
        subjEntry.incorrect++;
        if (q.topic_id) missedTopicIds.add(q.topic_id);
      }
      subjMap[q.subject_id] = subjEntry;
    });

    const netScore = Math.max(0, Number((correct - incorrect * 0.25).toFixed(2)));
    const scorePct = Math.round((correct / questions.length) * 100);

    const breakdownList = Object.entries(subjMap)
      .filter(([_, data]) => data.correct + data.incorrect + data.blank > 0)
      .map(([sId, data]) => ({
        subjectId: sId,
        title: data.title,
        correct: data.correct,
        incorrect: data.incorrect,
        blank: data.blank,
        net: Math.max(0, Number((data.correct - data.incorrect * 0.25).toFixed(2))),
      }));

    setSubjectBreakdown(breakdownList);

    // Identify strongest and weakest areas
    if (breakdownList.length > 0) {
      const sortedByNet = [...breakdownList].sort((a, b) => b.net - a.net);
      setStrongestArea(sortedByNet[0]?.title || '');
      setWeakestArea(sortedByNet[sortedByNet.length - 1]?.title || '');
    }

    // Map missed topic recommendations
    const recs: { topicId: string; topicTitle: string; unitId: string; subjectId: string }[] = [];
    for (const q of questions) {
      if (q.topic_id && missedTopicIds.has(q.topic_id)) {
        if (!recs.find((r) => r.topicId === q.topic_id)) {
          recs.push({
            topicId: q.topic_id,
            topicTitle: q.topic_id.replace('topic-', '').replace(/-/g, ' ').toUpperCase(),
            unitId: q.unit_id || '',
            subjectId: q.subject_id,
          });
        }
      }
    }
    setRecommendedTopics(recs.slice(0, 4));

    const attempt: UserExamAttempt = {
      user_id: user.id,
      exam_id: exam?.id || mockExamId,
      exam_title: exam?.title || 'AGS Genel Deneme Sınavı',
      exam_type: 'mock',
      score: scorePct,
      net_score: netScore,
      correct_count: correct,
      incorrect_count: incorrect,
      blank_count: blank,
      duration_seconds: (exam ? exam.duration_minutes * 60 : 3600) - timeLeft,
      answers_json: selectedAnswers,
      created_at: new Date().toISOString(),
    };

    setIsSubmitted(true);
    setShowSubmitModal(false);
    setAttemptResult(attempt);

    await apiService.recordExamAttempt(attempt);

    for (const q of questions) {
      const sel = selectedAnswers[q.id];
      if (sel) {
        const correctOpt = q.options.find((o) => o.is_correct);
        await apiService.recordQuestionAnswer({
          user_id: user.id,
          question_id: q.id,
          selected_option_key: sel,
          is_correct: correctOpt?.option_key === sel,
          context_type: 'mock_exam',
          created_at: new Date().toISOString(),
        });
      }
    }

    if (scorePct >= 70) {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div>Genel deneme sınavı hazırlanıyor...</div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const selectedOpt = selectedAnswers[currentQ?.id];
  const isFlagged = flaggedQuestions[currentQ?.id];
  const answeredCount = Object.values(selectedAnswers).filter(Boolean).length;

  return (
    <div className="page-wrapper animate-fade-in" style={{ maxWidth: '1100px' }}>
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '12px',
          backgroundColor: 'var(--bg-sidebar)',
          padding: '16px 20px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div>
          <button
            onClick={() => onNavigate('mock-exams')}
            className="btn-ghost"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', marginBottom: '2px' }}
          >
            <ArrowLeft size={14} />
            <span>Denemelere Dön</span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{exam?.title}</h1>
            {exam?.tier_name && <span className="badge badge-amber">{exam.tier_name}</span>}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {!isSubmitted ? (
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: timeLeft < 300 ? 'rgba(244, 63, 94, 0.15)' : 'var(--bg-elevated)',
                  border: `1px solid ${timeLeft < 300 ? 'rgba(244, 63, 94, 0.4)' : 'var(--border-subtle)'}`,
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  color: timeLeft < 300 ? '#fb7185' : '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                }}
              >
                <Clock size={18} />
                <span>{formatTime(timeLeft)}</span>
              </div>

              <button onClick={() => setShowSubmitModal(true)} className="btn btn-primary">
                <CheckCircle2 size={16} />
                <span>Sınavı Bitir</span>
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '10px' }}>
              <span className="badge badge-emerald" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                Sınav Tamamlandı
              </span>
              <button onClick={() => onNavigate('mock-exams')} className="btn btn-secondary">
                Denemeler Listesi
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Result Scorecard & Weak Area Recommendations (When Submitted) */}
      {isSubmitted && attemptResult && (
        <div
          className="card animate-fade-in"
          style={{
            marginBottom: '24px',
            background: 'linear-gradient(135deg, rgba(18, 26, 47, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
            borderColor: 'rgba(59, 130, 246, 0.4)',
            padding: '28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Award size={32} color="#fbbf24" />
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>AGS Deneme Sınavı Sonuç Karnesi</h2>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                4 Yanlış 1 Doğruyu Götürür formülüyle resmi net hesaplaması
              </div>
            </div>
          </div>

          <div className="grid-4" style={{ gap: '14px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Toplam Net</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399' }}>{attemptResult.net_score} Net</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Başarı Puanı</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>%{attemptResult.score}</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Doğru / Yanlış</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                <span style={{ color: '#34d399' }}>{attemptResult.correct_count} D</span> /{' '}
                <span style={{ color: '#fb7185' }}>{attemptResult.incorrect_count} Y</span>
              </div>
            </div>
            <div style={{ backgroundColor: 'var(--bg-input)', padding: '16px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Boş Soru</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>{attemptResult.blank_count}</div>
            </div>
          </div>

          {/* Strongest & Weakest Area Insights */}
          <div className="grid-2" style={{ gap: '14px', marginBottom: '20px' }}>
            {strongestArea && (
              <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '14px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <TrendingUp size={22} color="#10b981" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>En Güçlü Alanınız</div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#ffffff' }}>{strongestArea}</div>
                </div>
              </div>
            )}
            {weakestArea && (
              <div style={{ backgroundColor: 'rgba(244, 63, 94, 0.08)', border: '1px solid rgba(244, 63, 94, 0.25)', padding: '14px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <TrendingDown size={22} color="#fb7185" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#fb7185', fontWeight: 700, textTransform: 'uppercase' }}>Geliştirilmesi Gereken Alan</div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#ffffff' }}>{weakestArea}</div>
                </div>
              </div>
            )}
          </div>

          {/* Recommended Topics for Revision */}
          {recommendedTopics.length > 0 && (
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '18px', marginBottom: '18px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={17} color="var(--primary)" />
                <span>Bu Denemeye Göre Çalışman Önerilen Konular:</span>
              </div>
              <div className="grid-2" style={{ gap: '10px' }}>
                {recommendedTopics.map((rt, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'var(--bg-input)',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{rt.topicTitle}</span>
                    <button
                      onClick={() =>
                        onNavigate('topic-detail', {
                          subjectId: rt.subjectId,
                          unitId: rt.unitId,
                          topicId: rt.topicId,
                        })
                      }
                      className="btn btn-primary"
                      style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                    >
                      Konuyu Çalış
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subject-based net breakdown */}
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '18px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px' }}>7 Ders Bazlı Net Karnesi</h3>
            <div className="grid-2" style={{ gap: '10px' }}>
              {subjectBreakdown.map((sb, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-input)',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{sb.title}</div>
                  <div style={{ fontSize: '0.825rem' }}>
                    <span style={{ color: '#34d399' }}>{sb.correct}D</span> ·{' '}
                    <span style={{ color: '#fb7185' }}>{sb.incorrect}Y</span> ·{' '}
                    <span style={{ color: 'var(--text-muted)' }}>{sb.blank}B</span> ={' '}
                    <strong style={{ color: '#60a5fa' }}>{sb.net} Net</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Exam Grid: Questions Navigator & Question View */}
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '20px' }}>
        {/* Left Palette / Navigator */}
        <div className="card" style={{ height: 'fit-content', padding: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Soru Listesi ({questions.length})</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {answeredCount} / {questions.length} Cevaplandı
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '6px',
              maxHeight: '340px',
              overflowY: 'auto',
              paddingRight: '4px',
            }}
          >
            {questions.map((q, idx) => {
              const isAnswered = !!selectedAnswers[q.id];
              const isFlag = flaggedQuestions[q.id];
              const isCurrent = idx === currentIndex;

              let bg = 'var(--bg-input)';
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
              } else if (isFlag) {
                border = '#f59e0b';
                bg = 'rgba(245, 158, 11, 0.15)';
                color = '#fbbf24';
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
                    padding: '8px',
                    borderRadius: '6px',
                    backgroundColor: bg,
                    border: `1px solid ${border}`,
                    color: color,
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2px',
                  }}
                >
                  <span>{idx + 1}</span>
                  {isFlag && !isSubmitted && <Flag size={9} color="#f59e0b" fill="#f59e0b" />}
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div>🔵 Mavi: Cevaplanan</div>
            <div>🟡 Sarı: Gözden Geçirilecek</div>
            <div>⚪ Gri: Boş Soru</div>
          </div>
        </div>

        {/* Question Content */}
        {currentQ && (
          <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className="badge badge-blue">Soru #{currentIndex + 1}</span>
                {currentQ.question_type && (
                  <span className="badge badge-slate" style={{ textTransform: 'capitalize' }}>
                    {currentQ.question_type}
                  </span>
                )}
              </div>

              {!isSubmitted && (
                <button
                  onClick={() => toggleFlag(currentQ.id)}
                  className="btn btn-ghost"
                  style={{
                    fontSize: '0.8rem',
                    color: isFlagged ? '#fbbf24' : 'var(--text-muted)',
                    gap: '6px',
                  }}
                >
                  <Flag size={15} fill={isFlagged ? '#fbbf24' : 'none'} />
                  <span>{isFlagged ? 'İşaretlendi' : 'Gözden Geçir'}</span>
                </button>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {currentQ.options.map((opt) => {
                const isSelected = selectedOpt === opt.option_key;
                const isCorrectOpt = opt.is_correct;

                let optBg = 'var(--bg-input)';
                let optBorder = 'var(--border-subtle)';
                let optColor = 'var(--text-primary)';

                if (isSubmitted) {
                  if (isCorrectOpt) {
                    optBg = 'rgba(16, 185, 129, 0.15)';
                    optBorder = '#10b981';
                    optColor = '#34d399';
                  } else if (isSelected && !isCorrectOpt) {
                    optBg = 'rgba(244, 63, 94, 0.15)';
                    optBorder = '#f43f5e';
                    optColor = '#fb7185';
                  }
                } else if (isSelected) {
                  optBg = 'var(--primary-subtle)';
                  optBorder = 'var(--primary)';
                  optColor = '#ffffff';
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
                      backgroundColor: optBg,
                      borderColor: optBorder,
                      color: optColor,
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

            {/* Explanation when submitted */}
            {isSubmitted && currentQ.explanation && (
              <div
                style={{
                  marginTop: '16px',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#60a5fa', marginBottom: '4px' }}>
                  💡 Soru Çözümü & Detaylı Analiz:
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Question Navigation */}
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="btn btn-secondary"
              >
                <ArrowLeft size={16} />
                <span>Önceki Soru</span>
              </button>

              <button
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                disabled={currentIndex === questions.length - 1}
                className="btn btn-secondary"
              >
                <span>Sonraki Soru</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '440px', padding: '28px', textAlign: 'center' }}>
            <AlertTriangle size={40} color="#f59e0b" style={{ marginBottom: '14px' }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
              Deneme Sınavını Bitirmek İstiyor musunuz?
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Toplam {questions.length} sorudan <strong>{answeredCount}</strong> tanesini cevapladınız.{' '}
              {questions.length - answeredCount > 0 && (
                <span>{questions.length - answeredCount} soru boş bırakılacaktır.</span>
              )}
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setShowSubmitModal(false)} className="btn btn-secondary" style={{ flex: 1 }}>
                Sınava Devam Et
              </button>
              <button onClick={handleSubmit} className="btn btn-primary" style={{ flex: 1 }}>
                Evet, Bitir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
