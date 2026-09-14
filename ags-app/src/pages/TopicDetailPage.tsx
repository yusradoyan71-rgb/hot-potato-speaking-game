import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { Topic, TopicContent, TopicProgressDetail } from '../types/database';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  BookOpen,
  AlertTriangle,
  FileQuestion,
  ChevronRight,
  Bookmark,
  CheckSquare,
  Square,
  HelpCircle,
  Award,
  Split,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NavigationTab } from '../components/Sidebar';
import { MarkdownContent } from '../components/MarkdownContent';

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
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.8 } });
    }
  };

  const handleMarkCompleted = async () => {
    if (!user) return;
    const updated = await apiService.updateTopicProgressComponent(
      user.id,
      topicId,
      'content_read',
      true
    );
    setProgressDetail(updated);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
  };

  const handleSelfCheckSelect = (qIdx: number, optionKey: string) => {
    setSelfCheckAnswers((prev) => ({ ...prev, [qIdx]: optionKey }));
    setRevealedSelfChecks((prev) => ({ ...prev, [qIdx]: true }));
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div>Akademik ders içeriği ve kazanımlar yükleniyor...</div>
      </div>
    );
  }

  const isFullyComplete = progressDetail.percentage === 100;
  const isSozel = unitId?.startsWith('unit-sozel') || subjectId === 'sozel-yetenek';

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
            <span>Konu Öğrenme Adımları (Müfredat Takibi)</span>
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
              <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                {isSozel ? '1. Çözüm Rehberi' : '1. Konu Anlatımı'}
              </div>
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

      {/* 1. TOPIC TITLE CARD */}
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

        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.3 }}>
          {topic?.title || 'Konu Başlığı'}
        </h1>
      </div>

      {/* 2. CORE STUDY CONTENT (KONU ANLATIMI & DERS NOTLARI) */}
      {content?.core_explanation && (
        <div className="card" style={{ marginBottom: '20px', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
            <BookOpen size={22} color="#38bdf8" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              {isSozel ? 'AGS Çözüm Stratejisi & Beceri Rehberi' : `${topic?.title || 'Ders'} Notları & Konu Anlatımı`}
            </h2>
          </div>

          <MarkdownContent content={content.core_explanation} />
        </div>
      )}

      {/* 3. COMPARISON & DIFFERENTIATION TABLES (KARŞILAŞTIRMA VE AYIRT ETME) */}
      {content?.comparison_tables && content.comparison_tables.length > 0 && (
        <div className="card" style={{ marginBottom: '20px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Split size={20} color="#38bdf8" />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
              {isSozel ? 'Çeldirici Tuzaklar vs. Doğru AGS Yaklaşımı' : 'Karşılaştırma ve Ayırt Etme Tablosu'}
            </h2>
          </div>

          <div>
            {content.comparison_tables.map((table, tIdx) => (
              <div key={tIdx} style={{ marginBottom: '14px', overflowX: 'auto' }}>
                {table.title && (
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px', color: '#38bdf8' }}>
                    📊 {table.title}
                  </h3>
                )}
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
                          <td key={cIdx} style={{ padding: '10px 14px', color: cIdx === 0 ? '#ffffff' : 'var(--text-secondary)', fontWeight: cIdx === 0 ? 600 : 400 }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. "KARIŞTIRMA!" & KARIŞTIRILAN NOKTALAR */}
      {content?.common_confusions && content.common_confusions.length > 0 && (
        <div className="card" style={{ marginBottom: '20px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <AlertTriangle size={20} color="#f43f5e" />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
              {isSozel ? 'Yanlış Analizi: Neden Hata Yapıldı?' : 'Karıştırma! (En Sık Karıştırılan Noktalar)'}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {content.common_confusions.map((conf, cIdx) => (
              <div
                key={cIdx}
                style={{
                  padding: '16px 18px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(244, 63, 94, 0.06)',
                  border: '1px solid rgba(244, 63, 94, 0.25)',
                }}
              >
                <div style={{ display: 'flex', gap: '8px', marginBottom: '6px', color: '#fb7185', fontSize: '0.875rem' }}>
                  <strong>❌ YANLIŞ DÜŞÜNCE:</strong>
                  <span>{conf.wrong_belief}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', color: '#34d399', fontSize: '0.875rem', marginBottom: conf.tip ? '6px' : '0' }}>
                  <strong>✓ DOĞRU AYRIM:</strong>
                  <span>{conf.correct_distinction}</span>
                </div>
                {conf.tip && (
                  <div style={{ fontSize: '0.8rem', color: '#93c5fd', marginTop: '6px' }}>
                    💡 Sınav İpucu: {conf.tip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. "AGS'DE DİKKAT" (Sınava Özel Kritik Uyarılar) */}
      {content?.exam_tips && content.exam_tips.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
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
                padding: '20px',
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
                <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {tip.tip}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 6. HIZLI TEKRAR & ÖZET LİSTESİ */}
      {content?.what_to_remember && content.what_to_remember.length > 0 && (
        <div
          className="card"
          style={{
            backgroundColor: 'var(--bg-input)',
            borderColor: 'var(--border-medium)',
            padding: '22px 24px',
            marginBottom: '24px',
          }}
        >
          <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '12px', color: '#34d399', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={18} />
            <span>HIZLI TEKRAR (Akılda Tutulması Gerekenler)</span>
          </div>
          {content?.summary && (
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
              {content.summary}
            </p>
          )}
          <ul style={{ paddingLeft: '20px', fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.7, margin: 0 }}>
            {content.what_to_remember.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 7. KENDİNİ DENE (ÖZGÜN AGS TARZI SORULAR) */}
      {content?.self_check_questions && content.self_check_questions.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <HelpCircle size={20} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
              {isSozel ? 'Özgün AGS Tarzı Beceri Soruları & Ayrıntılı Çözümler' : 'Kendini Dene (Özgün AGS Tarzı Sorular & Çözümler)'}
            </h2>
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
                    <strong style={{ color: '#60a5fa' }}>💡 Çözüm Açıklaması: </strong>
                    {sc.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 14. TOPIC COMPLETION & ACTION BAR */}
      <div
        className="card"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          padding: '20px 24px',
          backgroundColor: 'rgba(18, 26, 47, 0.95)',
          border: '1px solid var(--border-medium)',
        }}
      >
        <button
          onClick={handleMarkCompleted}
          className={`btn ${progressDetail.is_content_read ? 'btn-success' : 'btn-primary'}`}
          style={{ padding: '12px 24px', fontSize: '0.95rem', fontWeight: 700 }}
        >
          <CheckCircle2 size={18} />
          <span>{progressDetail.is_content_read ? '✓ KONUYU TAMAMLADIM (Kayıtlı)' : '✓ KONUYU TAMAMLADIM'}</span>
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

