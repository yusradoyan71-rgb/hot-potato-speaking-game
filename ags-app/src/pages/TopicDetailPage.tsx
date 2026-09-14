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
  ChevronDown,
  Bookmark,
  CheckSquare,
  Square,
  HelpCircle,
  Award,
  Zap,
  Target,
  Layers,
  Split,
  Compass,
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
  const [activeAccordion, setActiveAccordion] = useState<Record<string, boolean>>({
    why_it_matters: true,
    objectives: true,
    core_explanation: true,
    key_concepts: true,
    subtopics: true,
    examples: true,
    comparison_tables: true,
    common_confusions: true,
    exam_tips: true,
    mnemonics: true,
    summary: true,
    self_check: true,
  });

  const toggleSection = (sectionKey: string) => {
    setActiveAccordion((prev) => ({ ...prev, [sectionKey]: !prev[sectionKey] }));
  };

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

      {/* 2. "Neden Öğrenmeliyim?" (Why this topic matters) */}
      {content?.why_it_matters && (
        <div className="card" style={{ marginBottom: '20px', padding: '22px' }}>
          <div
            onClick={() => toggleSection('why_it_matters')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Compass size={20} color="#60a5fa" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#93c5fd' }}>
                Neden Öğrenmeliyim?
              </h2>
            </div>
            {activeAccordion.why_it_matters ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>

          {activeAccordion.why_it_matters && (
            <p style={{ marginTop: '14px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, margin: '14px 0 0 0' }}>
              {content.why_it_matters}
            </p>
          )}
        </div>
      )}

      {/* 3. LEARNING OBJECTIVES */}
      {content?.learning_objectives && content.learning_objectives.length > 0 && (
        <div className="card" style={{ marginBottom: '20px', padding: '22px', borderLeft: '4px solid var(--primary)' }}>
          <div
            onClick={() => toggleSection('objectives')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Target size={20} color="var(--primary)" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#93c5fd' }}>
                Öğrenme Hedefleri & Kazanımlar
              </h2>
            </div>
            {activeAccordion.objectives ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>

          {activeAccordion.objectives && (
            <ul style={{ paddingLeft: '22px', marginTop: '14px', marginBottom: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {content.learning_objectives.map((obj, oIdx) => (
                <li key={oIdx} style={{ marginBottom: '4px' }}>{obj}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* 4. CORE EXPLANATION */}
      {content?.core_explanation && (
        <div className="card" style={{ marginBottom: '20px', padding: '24px' }}>
          <div
            onClick={() => toggleSection('core_explanation')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: activeAccordion.core_explanation ? '16px' : '0' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={20} color="#38bdf8" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                {isSozel ? 'Bu Soru Tipini Nasıl Çözerim? (AGS Çözüm Stratejisi)' : 'Konu Anlatımı'}
              </h2>
            </div>
            {activeAccordion.core_explanation ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>

          {activeAccordion.core_explanation && (
            <div
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                lineHeight: 1.75,
                whiteSpace: 'pre-line',
              }}
            >
              {content.core_explanation}
            </div>
          )}
        </div>
      )}

      {/* 5. KEY CONCEPTS & DEFINITIONS */}
      {content?.key_concepts && content.key_concepts.length > 0 && (
        <div className="card" style={{ marginBottom: '20px', padding: '24px' }}>
          <div
            onClick={() => toggleSection('key_concepts')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: activeAccordion.key_concepts ? '16px' : '0' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Lightbulb size={20} color="#f59e0b" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                {isSozel ? 'Stratejik Kavramlar & Ayırt Edici Ölçütler' : 'Temel Kavramlar & Tanımlar'}
              </h2>
            </div>
            {activeAccordion.key_concepts ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>

          {activeAccordion.key_concepts && (
            <div className="grid-2" style={{ gap: '14px' }}>
              {content.key_concepts.map((concept, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-input)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-medium)',
                    padding: '16px',
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#60a5fa', marginBottom: '6px' }}>
                    TEMEL KAVRAM: {concept.term}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '6px' }}>
                    <strong>Tanım:</strong> {concept.definition}
                  </div>
                  {concept.practical_meaning && (
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      <strong>Uygulamadaki Anlamı:</strong> {concept.practical_meaning}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 6. DETAILED SUBTOPICS */}
      {content?.subtopics && content.subtopics.length > 0 && (
        <div className="card" style={{ marginBottom: '20px', padding: '24px' }}>
          <div
            onClick={() => toggleSection('subtopics')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: activeAccordion.subtopics ? '16px' : '0' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Layers size={20} color="#a78bfa" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                {isSozel ? 'Çözüm Aşamaları & Taktik Rehberi' : 'Alt Başlıklar ve Süreç Analizi'}
              </h2>
            </div>
            {activeAccordion.subtopics ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>

          {activeAccordion.subtopics && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {content.subtopics.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-input)',
                    borderLeft: '4px solid #a78bfa',
                  }}
                >
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#c4b5fd', marginBottom: '6px' }}>
                    {sub.number} {sub.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 8px 0', whiteSpace: 'pre-line' }}>
                    {sub.content}
                  </p>
                  {sub.key_takeaway && (
                    <div style={{ fontSize: '0.8rem', color: '#93c5fd', fontWeight: 600 }}>
                      📌 Anahtar Çıkarım: {sub.key_takeaway}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 7. DOMAIN-SPECIFIC EXAMPLES */}
      {content?.examples && content.examples.length > 0 && (
        <div className="card" style={{ marginBottom: '20px', padding: '24px' }}>
          <div
            onClick={() => toggleSection('examples')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: activeAccordion.examples ? '16px' : '0' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sparkles size={20} color="#34d399" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                Örnekler & Sınıf / Uygulama İncelemeleri
              </h2>
            </div>
            {activeAccordion.examples ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>

          {activeAccordion.examples && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {content.examples.map((ex, exIdx) => (
                <div
                  key={exIdx}
                  style={{
                    padding: '18px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(16, 185, 129, 0.06)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#34d399' }}>
                      {ex.title}
                    </span>
                    {ex.domain && <span className="badge badge-emerald">{ex.domain}</span>}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '10px' }}>
                    <strong>Durum / Vaka:</strong> {ex.scenario}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, backgroundColor: 'rgba(0,0,0,0.2)', padding: '10px', borderRadius: '6px' }}>
                    <strong style={{ color: '#6ee7b7' }}>🔍 Analiz ve Çözüm: </strong>
                    {ex.analysis}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 8. COMPARISON TABLES */}
      {content?.comparison_tables && content.comparison_tables.length > 0 && (
        <div className="card" style={{ marginBottom: '20px', padding: '24px' }}>
          <div
            onClick={() => toggleSection('comparison_tables')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: activeAccordion.comparison_tables ? '16px' : '0' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Split size={20} color="#38bdf8" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                {isSozel ? 'Çeldirici Tuzaklar vs. Doğru AGS Yaklaşımı Tablosu' : 'Karşılaştırma ve Ayırt Etme Tabloları'}
              </h2>
            </div>
            {activeAccordion.comparison_tables ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>

          {activeAccordion.comparison_tables && (
            <div>
              {content.comparison_tables.map((table, tIdx) => (
                <div key={tIdx} style={{ marginBottom: '14px', overflowX: 'auto' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px', color: '#38bdf8' }}>
                    📊 {table.title}
                  </h3>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--bg-input)', borderBottom: '2px solid var(--border-medium)', textAlign: 'left' }}>
                        {table.headers.map((h, hIdx) => (
                          <th key={hIdx} style={{ padding: '10px 12px', color: '#93c5fd', fontWeight: 700 }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: rIdx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} style={{ padding: '10px 12px', color: cIdx === 0 ? '#ffffff' : 'var(--text-secondary)', fontWeight: cIdx === 0 ? 600 : 400 }}>
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
          )}
        </div>
      )}

      {/* 9. COMMON CONFUSIONS ("Karıştırılan Noktalar") */}
      {content?.common_confusions && content.common_confusions.length > 0 && (
        <div className="card" style={{ marginBottom: '20px', padding: '24px' }}>
          <div
            onClick={() => toggleSection('common_confusions')}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: activeAccordion.common_confusions ? '16px' : '0' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle size={20} color="#f43f5e" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                {isSozel ? 'Yanlış Analizi: Neden Hata Yapıldı? (En Sık Yapılan Hatalar)' : 'Karıştırılan Noktalar & Doğru Ayrımlar'}
              </h2>
            </div>
            {activeAccordion.common_confusions ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </div>

          {activeAccordion.common_confusions && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {content.common_confusions.map((conf, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(244, 63, 94, 0.06)',
                    border: '1px solid rgba(244, 63, 94, 0.25)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '6px', color: '#fb7185', fontSize: '0.85rem' }}>
                    <strong>❌ YANLIŞ DÜŞÜNCE:</strong>
                    <span>{conf.wrong_belief}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', color: '#34d399', fontSize: '0.85rem', marginBottom: conf.tip ? '6px' : '0' }}>
                    <strong>✓ DOĞRU AYRIM:</strong>
                    <span>{conf.correct_distinction}</span>
                  </div>
                  {conf.tip && (
                    <div style={{ fontSize: '0.78rem', color: '#93c5fd', marginTop: '6px' }}>
                      💡 İpucu: {conf.tip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 10. "AGS'DE DİKKAT" */}
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
                <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {tip.tip}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 11. MEMORY TIPS ("HATIRLAMA İPUCU") */}
      {content?.mnemonics && content.mnemonics.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
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
                padding: '20px',
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
                  HATIRLAMA İPUCU: {mn.title}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  {mn.memory_trick}
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  {mn.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 12. QUICK SUMMARY & "BU KONUDAN NE BİLMELİYİM?" */}
      <div
        className="card"
        style={{
          backgroundColor: 'var(--bg-input)',
          borderColor: 'var(--border-medium)',
          padding: '24px',
          marginBottom: '24px',
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '8px', color: '#34d399', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bookmark size={18} />
          <span>BU KONUDAN NE BİLMELİYİM? (Revizyon Kontrol Listesi)</span>
        </div>
        {content?.summary && (
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
            {content.summary}
          </p>
        )}
        {content?.what_to_remember && content.what_to_remember.length > 0 && (
          <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.7, margin: 0 }}>
            {content.what_to_remember.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '4px' }}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* 13. SELF-CHECK (5 PEKİŞTİRME SORUSU) */}
      {content?.self_check_questions && content.self_check_questions.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <HelpCircle size={20} color="var(--primary)" />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
              {isSozel ? 'Özgün AGS Tarzı Beceri Soruları & Ayrıntılı Çözümler' : 'Kendini Dene (5 Pekiştirme Sorusu)'}
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

