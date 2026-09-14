import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { Topic, TopicContent, TopicProgressDetail } from '../types/database';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  FileQuestion,
  ChevronRight,
  Bookmark,
  CheckSquare,
  Square,
  HelpCircle,
  Award,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NavigationTab } from '../components/Sidebar';

interface TopicDetailPageProps {
  subjectId: string;
  unitId: string;
  topicId: string;
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const TopicDetailPage: React.FC<TopicDetailPageProps> = ({
  subjectId,
  unitId,
  topicId,
  onNavigate,
}) => {
  const { user } = useAuth();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [content, setContent] = useState<TopicContent | null>(null);
  const [progressDetail, setProgressDetail] = useState<TopicProgressDetail>({
    is_content_read: false,
    is_mini_test_done: false,
    is_questions_solved: false,
    percentage: 0,
    last_updated: '',
  });
  const [selfCheckAnswers, setSelfCheckAnswers] = useState<Record<number, string>>({});
  const [revealedSelfChecks, setRevealedSelfChecks] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const topics = await apiService.getTopicsByUnit(unitId);
      const current = topics.find((t) => t.id === topicId) || null;
      setTopic(current);

      const tc = await apiService.getTopicContent(topicId);
      setContent(tc);

      if (user) {
        const progressMap = await apiService.getUserTopicProgress(user.id);
        if (progressMap[topicId]) {
          setProgressDetail(progressMap[topicId]);
        }
      }
      setLoading(false);
    };

    loadData();
  }, [topicId, unitId, user]);

  const handleToggleComponent = async (
    comp: 'content_read' | 'mini_test' | 'questions_solved'
  ) => {
    if (!user) return;
    const currentVal =
      comp === 'content_read'
        ? progressDetail.is_content_read
        : comp === 'mini_test'
        ? progressDetail.is_mini_test_done
        : progressDetail.is_questions_solved;

    const updated = await apiService.updateTopicProgressComponent(
      user.id,
      topicId,
      comp,
      !currentVal
    );
    setProgressDetail(updated);

    if (updated.percentage === 100) {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.8 } });
    }
  };

  const handleSelfCheckSelect = (qIdx: number, optionKey: string) => {
    setSelfCheckAnswers((prev) => ({ ...prev, [qIdx]: optionKey }));
    setRevealedSelfChecks((prev) => ({ ...prev, [qIdx]: true }));
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div>Akademik konu anlatımı yükleniyor...</div>
      </div>
    );
  }

  const isFullyComplete = progressDetail.percentage === 100;

  return (
    <div className="page-wrapper animate-fade-in" style={{ maxWidth: '1000px' }}>
      {/* Top Breadcrumb & Progress Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <button
          onClick={() => onNavigate('curriculum')}
          className="btn btn-ghost"
          style={{ padding: '8px 12px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} />
          <span>Müfredata Geri Dön</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className={isFullyComplete ? 'badge badge-emerald' : 'badge badge-blue'}>
            {isFullyComplete ? '✓ Konu %100 Tamamlandı' : `Konu İlerlemesi: %${progressDetail.percentage}`}
          </span>
        </div>
      </div>

      {/* 3-Component Interactive Learning Activity Tracker */}
      <div
        className="card"
        style={{
          marginBottom: '24px',
          padding: '20px 24px',
          backgroundColor: 'rgba(18, 26, 47, 0.95)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={18} color="var(--primary)" />
            <span>Konu Öğrenme Adımları</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Tamamlanan: {progressDetail.percentage}% / 100%
          </span>
        </div>

        <div className="progress-track" style={{ marginBottom: '16px' }}>
          <div
            className={`progress-fill ${isFullyComplete ? 'progress-fill-emerald' : ''}`}
            style={{ width: `${progressDetail.percentage}%` }}
          />
        </div>

        <div className="grid-3" style={{ gap: '12px' }}>
          {/* Step 1: Content Read */}
          <div
            onClick={() => handleToggleComponent('content_read')}
            className="card card-interactive"
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: progressDetail.is_content_read ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-input)',
              borderColor: progressDetail.is_content_read ? '#10b981' : 'var(--border-subtle)',
            }}
          >
            {progressDetail.is_content_read ? (
              <CheckSquare size={20} color="#10b981" />
            ) : (
              <Square size={20} color="var(--text-muted)" />
            )}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>1. Konu Anlatımı</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>%33 İlerleme</div>
            </div>
          </div>

          {/* Step 2: Mini Test */}
          <div
            onClick={() => handleToggleComponent('mini_test')}
            className="card card-interactive"
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: progressDetail.is_mini_test_done ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-input)',
              borderColor: progressDetail.is_mini_test_done ? '#10b981' : 'var(--border-subtle)',
            }}
          >
            {progressDetail.is_mini_test_done ? (
              <CheckSquare size={20} color="#10b981" />
            ) : (
              <Square size={20} color="var(--text-muted)" />
            )}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>2. Mini Test</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>%33 İlerleme</div>
            </div>
          </div>

          {/* Step 3: Questions Solved */}
          <div
            onClick={() => handleToggleComponent('questions_solved')}
            className="card card-interactive"
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: progressDetail.is_questions_solved ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-input)',
              borderColor: progressDetail.is_questions_solved ? '#10b981' : 'var(--border-subtle)',
            }}
          >
            {progressDetail.is_questions_solved ? (
              <CheckSquare size={20} color="#10b981" />
            ) : (
              <Square size={20} color="var(--text-muted)" />
            )}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>3. İlgili Sorular</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>%34 İlerleme</div>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Title Card */}
      <div
        className="card"
        style={{
          marginBottom: '24px',
          background: 'linear-gradient(135deg, rgba(18, 26, 47, 0.95) 0%, rgba(13, 20, 36, 0.95) 100%)',
          borderColor: isFullyComplete ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span className="badge badge-blue">Resmi AGS Kapsamı</span>
          {topic?.estimated_minutes && (
            <span className="badge badge-slate" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={12} />
              {topic.estimated_minutes} Dakika
            </span>
          )}
        </div>

        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '14px', lineHeight: 1.3 }}>
          {topic?.title || 'Konu Başlığı'}
        </h1>

        {content?.overview && (
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '18px' }}>
            {content.overview}
          </p>
        )}

        {/* Learning Objectives */}
        {content?.learning_objectives && content.learning_objectives.length > 0 && (
          <div
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-input)',
              borderLeft: '4px solid var(--primary)',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#93c5fd', marginBottom: '8px' }}>
              🎯 Öğrenme Hedefleri & Kazanımlar:
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {content.learning_objectives.map((obj, oIdx) => (
                <li key={oIdx}>{obj}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Key Concepts Cards */}
      {content?.key_concepts && content.key_concepts.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Lightbulb size={20} color="#f59e0b" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Temel Kavramlar & Tanımlar</h2>
          </div>

          <div className="grid-2">
            {content.key_concepts.map((concept, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  backgroundColor: 'var(--bg-input)',
                  border: '1px solid var(--border-medium)',
                  padding: '18px',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#60a5fa', marginBottom: '6px' }}>
                  {concept.term}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {concept.definition}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Structured Sections */}
      {content?.structured_sections && content.structured_sections.map((section, sIdx) => (
        <div key={sIdx} className="card" style={{ marginBottom: '24px', padding: '28px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '14px', color: '#ffffff' }}>
            {section.title}
          </h2>
          <div
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              whiteSpace: 'pre-line',
              marginBottom: section.subsections?.length ? '20px' : '0',
            }}
          >
            {section.content}
          </div>

          {section.subsections && section.subsections.map((sub, subIdx) => (
            <div
              key={subIdx}
              style={{
                marginTop: '16px',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-input)',
                borderLeft: '4px solid var(--primary)',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#93c5fd', marginBottom: '6px' }}>
                {sub.subtitle}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {sub.content}
              </p>
            </div>
          ))}
        </div>
      ))}

      {/* Comparison Tables (Crucial for AGS preparation) */}
      {content?.comparison_tables && content.comparison_tables.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          {content.comparison_tables.map((table, tIdx) => (
            <div key={tIdx} className="card" style={{ padding: '24px', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '14px', color: '#38bdf8' }}>
                📊 {table.title}
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-input)', borderBottom: '2px solid var(--border-medium)', textAlign: 'left' }}>
                      {table.headers.map((h, hIdx) => (
                        <th key={hIdx} style={{ padding: '10px 14px', color: '#93c5fd', fontWeight: 700 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx} style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: rIdx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} style={{ padding: '12px 14px', color: cIdx === 0 ? '#ffffff' : 'var(--text-secondary)', fontWeight: cIdx === 0 ? 600 : 400 }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* "AGS'DE DİKKAT" Section */}
      {content?.exam_tips && content.exam_tips.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          {content.exam_tips.map((tip, tIdx) => (
            <div
              key={tIdx}
              className="card"
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.08)',
                borderColor: 'rgba(245, 158, 11, 0.3)',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                  flexShrink: 0,
                }}
              >
                <AlertTriangle size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.925rem', color: '#fbbf24', marginBottom: '4px' }}>
                  AGS'DE DİKKAT
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {tip.tip}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Memory Aids / Mnemonics ("Hatırlama İpucu") */}
      {content?.mnemonics && content.mnemonics.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          {content.mnemonics.map((mn, mIdx) => (
            <div
              key={mIdx}
              className="card"
              style={{
                backgroundColor: 'rgba(139, 92, 246, 0.08)',
                borderColor: 'rgba(139, 92, 246, 0.3)',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a78bfa',
                  flexShrink: 0,
                }}
              >
                <Zap size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.925rem', color: '#a78bfa', marginBottom: '4px' }}>
                  Hatırlama İpucu: {mn.title}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  🔑 {mn.memory_trick}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  {mn.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary & "Neleri Hatırlamalıyım?" */}
      <div
        className="card"
        style={{
          backgroundColor: 'var(--bg-input)',
          borderColor: 'var(--border-medium)',
          padding: '24px',
          marginBottom: '28px',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '8px', color: '#34d399', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bookmark size={18} />
          <span>📌 Konu Özeti & Neleri Hatırlamalıyım?</span>
        </div>
        {content?.summary && (
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
            {content.summary}
          </p>
        )}
        {content?.what_to_remember && content.what_to_remember.length > 0 && (
          <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
            {content.what_to_remember.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Mini Self-Check Questions ("Kendini Dene") */}
      {content?.self_check_questions && content.self_check_questions.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <HelpCircle size={20} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Kendini Dene (Konu Pekiştirme Soruları)</h2>
          </div>

          {content.self_check_questions.map((sc, qIdx) => {
            const userChoice = selfCheckAnswers[qIdx];
            const isRevealed = revealedSelfChecks[qIdx];

            return (
              <div key={qIdx} className="card" style={{ padding: '22px', marginBottom: '14px' }}>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '16px', lineHeight: 1.6 }}>
                  {sc.question}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {sc.options.map((opt) => {
                    const isSelected = userChoice === opt.key;
                    let optBg = 'var(--bg-input)';
                    let optBorder = 'var(--border-subtle)';

                    if (isRevealed) {
                      if (opt.isCorrect) {
                        optBg = 'rgba(16, 185, 129, 0.15)';
                        optBorder = '#10b981';
                      } else if (isSelected && !opt.isCorrect) {
                        optBg = 'rgba(244, 63, 94, 0.15)';
                        optBorder = '#f43f5e';
                      }
                    }

                    return (
                      <div
                        key={opt.key}
                        onClick={() => handleSelfCheckSelect(qIdx, opt.key)}
                        className="card card-interactive"
                        style={{
                          padding: '10px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          backgroundColor: optBg,
                          borderColor: optBorder,
                        }}
                      >
                        <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{opt.key})</span>
                        <span style={{ fontSize: '0.875rem' }}>{opt.text}</span>
                      </div>
                    );
                  })}
                </div>

                {isRevealed && (
                  <div
                    style={{
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      fontSize: '0.825rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    <strong style={{ color: '#60a5fa' }}>💡 Çözüm: </strong>
                    {sc.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Action Footer */}
      <div
        className="card"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          padding: '20px 24px',
        }}
      >
        <button
          onClick={() => handleToggleComponent('content_read')}
          className={`btn ${progressDetail.is_content_read ? 'btn-success' : 'btn-primary'}`}
          style={{ padding: '10px 20px' }}
        >
          <CheckCircle2 size={18} />
          <span>{progressDetail.is_content_read ? 'Konu Anlatımı Tamamlandı ✓' : 'Konu Anlatımını Tamamla'}</span>
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => onNavigate('mini-exam', { unitId })}
            className="btn btn-secondary"
          >
            <FileQuestion size={16} />
            <span>Ünite Mini Sınavı</span>
          </button>

          <button
            onClick={() => onNavigate('curriculum')}
            className="btn btn-secondary"
          >
            <span>Müfredat</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
