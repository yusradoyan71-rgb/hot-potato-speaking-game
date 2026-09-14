import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { Topic, TopicContent } from '../types/database';
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Clock,
  BookOpen,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  FileQuestion,
  ChevronRight,
  Share2,
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
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [savingProgress, setSavingProgress] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const topics = await apiService.getTopicsByUnit(unitId);
      const current = topics.find((t) => t.id === topicId) || null;
      setTopic(current);

      const tc = await apiService.getTopicContent(topicId);
      setContent(tc);

      if (user) {
        const progress = await apiService.getUserTopicProgress(user.id);
        setIsCompleted(!!progress[topicId]);
      }
      setLoading(false);
    };

    loadData();
  }, [topicId, unitId, user]);

  const handleToggleComplete = async () => {
    if (!user) return;
    setSavingProgress(true);
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);

    await apiService.setTopicCompletion(user.id, topicId, newStatus);

    if (newStatus) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
    setSavingProgress(false);
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div>Konu anlatımı yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="page-wrapper animate-fade-in" style={{ maxWidth: '1000px' }}>
      {/* Top Breadcrumb & Back button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button
          onClick={() => onNavigate('curriculum')}
          className="btn btn-ghost"
          style={{ padding: '8px 12px', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} />
          <span>Müfredata Geri Dön</span>
        </button>

        {/* Completion status header button */}
        <button
          onClick={handleToggleComplete}
          disabled={savingProgress}
          className={`btn ${isCompleted ? 'btn-success' : 'btn-outline'}`}
          style={{ padding: '8px 16px', fontSize: '0.85rem' }}
        >
          <CheckCircle2 size={16} />
          <span>{isCompleted ? 'Konu Tamamlandı (Kayıtlı)' : 'Tamamlandı Olarak İşaretle'}</span>
        </button>
      </div>

      {/* Topic Title Card */}
      <div
        className="card"
        style={{
          marginBottom: '24px',
          background: 'linear-gradient(135deg, rgba(18, 26, 47, 0.95) 0%, rgba(13, 20, 36, 0.95) 100%)',
          borderColor: isCompleted ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span className="badge badge-blue">AGS Konu Anlatımı</span>
          {topic?.estimated_minutes && (
            <span className="badge badge-slate" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={12} />
              {topic.estimated_minutes} Dakika
            </span>
          )}
          {isCompleted && <span className="badge badge-emerald">Tamamlandı</span>}
        </div>

        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '14px', lineHeight: 1.3 }}>
          {topic?.title || 'Konu Başlığı'}
        </h1>

        {content?.overview && (
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            {content.overview}
          </p>
        )}
      </div>

      {/* Key Concepts Callout */}
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

      {/* Exam Tips & ÖSYM Warnings */}
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
                  width: '32px',
                  height: '32px',
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
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fbbf24', marginBottom: '4px' }}>
                  AGS & ÖSYM Sınav Uyarısı
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {tip.tip}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Summary Box */}
      {content?.summary && (
        <div
          className="card"
          style={{
            backgroundColor: 'var(--bg-input)',
            borderColor: 'var(--border-medium)',
            padding: '20px',
            marginBottom: '28px',
          }}
        >
          <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '6px', color: '#34d399' }}>
            📌 Konu Özeti
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {content.summary}
          </p>
        </div>
      )}

      {/* Bottom Completion & Navigation Action Bar */}
      <div
        className="card"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '20px 24px',
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%)',
        }}
      >
        <button
          onClick={handleToggleComplete}
          disabled={savingProgress}
          className={`btn ${isCompleted ? 'btn-success' : 'btn-primary'}`}
          style={{ padding: '12px 24px', fontSize: '0.95rem' }}
        >
          <CheckCircle2 size={18} />
          <span>{isCompleted ? 'Konu Tamamlandı (Kayıtlı)' : 'Konuyu Tamamladım & Kaydet'}</span>
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() =>
              onNavigate('mini-exam', {
                unitId: unitId,
              })
            }
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
