import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { DashboardStats } from '../types/database';
import {
  TrendingUp,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  Sparkles,
  HelpCircle,
  FileText,
  AlertTriangle,
  RotateCcw,
  Target,
  ListTodo,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface DashboardPageProps {
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStats = async () => {
    if (!user) return;
    setLoading(true);
    const data = await apiService.getDashboardStats(user.id);
    setStats(data);
    setLoading(false);
  };

  useEffect(() => {
    loadStats();
  }, [user]);

  if (loading || !stats) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div className="animate-spin" style={{ display: 'inline-block', marginBottom: '12px' }}>
          ⏳
        </div>
        <div>Öğrenci ilerleme verileri yükleniyor...</div>
      </div>
    );
  }

  const remainingTopics = stats.total_topics_count - stats.completed_topics_count;

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Welcome Banner */}
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
          borderColor: 'rgba(59, 130, 246, 0.3)',
          marginBottom: '28px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge badge-blue">
                <Sparkles size={12} />
                2025 AGS Akademi Hazırlık
              </span>
              <span className="badge badge-amber">
                <Target size={12} />
                Hedef: {user?.target_score || 85} Puan
              </span>
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '6px' }}>
              Hoş Geldiniz, {user?.full_name || 'AGS Adayı'} 👋
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', maxWidth: '650px' }}>
              Resmi 7 derslik AGS müfredatındaki 3 aşamalı öğrenme adımlarınızı (Konu Anlatımı + Mini Test + İlgili Sorular) ve deneme netlerinizi buradan anlık takip edin.
            </p>
          </div>

          {stats.continue_topic && (
            <button
              onClick={() =>
                onNavigate('topic-detail', {
                  subjectId: stats.continue_topic?.subject_id,
                  unitId: stats.continue_topic?.unit_id,
                  topicId: stats.continue_topic?.topic_id,
                })
              }
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.95rem' }}
            >
              <span>Derse Devam Et</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid-4" style={{ marginBottom: '28px' }}>
        {/* Overall Progress Card */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Müfredat İlerlemesi
            </span>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--primary-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
              }}
            >
              <TrendingUp size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
            %{stats.overall_progress_percent}
          </div>
          <div className="progress-track" style={{ marginBottom: '10px' }}>
            <div
              className="progress-fill"
              style={{ width: `${stats.overall_progress_percent}%` }}
            />
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
            <span>{stats.completed_activities_count} / {stats.total_activities_count} Öğrenme Adımı</span>
            <span>{stats.completed_topics_count} Tam Konu</span>
          </div>
        </div>

        {/* Solved Questions & Accuracy */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Çözülen Sorular
            </span>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--accent-emerald-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-emerald)',
              }}
            >
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
            {stats.solved_questions_count} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>Soru</span>
          </div>
          <div className="progress-track" style={{ marginBottom: '10px' }}>
            <div
              className="progress-fill progress-fill-emerald"
              style={{ width: `${stats.accuracy_rate}%` }}
            />
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#34d399' }}>{stats.correct_answers_count} Doğru</span>
            <span style={{ color: '#fb7185' }}>{stats.incorrect_answers_count} Yanlış</span>
            <span>%{stats.accuracy_rate} Başarı</span>
          </div>
        </div>

        {/* Mini Exams Completed */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Ünite Mini Sınavları
            </span>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--accent-amber-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-amber)',
              }}
            >
              <FileText size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
            {stats.completed_mini_exams_count} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>Mini Sınav</span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '16px' }}>
            Ünite kazanım ve tarama testleri
          </p>
        </div>

        {/* Full Mock Exams Completed */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Genel AGS Denemeleri
            </span>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(139, 92, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a78bfa',
              }}
            >
              <Award size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
            {stats.completed_mock_exams_count} <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>Deneme</span>
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '16px' }}>
            4 Seviyeli resmi süreli AGS provaları
          </p>
        </div>
      </div>

      {/* Weak Topics Review System ("Tekrar Etmem Gerekenler") */}
      {stats.weak_topics.length > 0 && (
        <div
          className="card"
          style={{
            marginBottom: '28px',
            backgroundColor: 'rgba(244, 63, 94, 0.04)',
            borderColor: 'rgba(244, 63, 94, 0.25)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={20} color="#fb7185" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                Öncelikli Tekrar Edilmesi Gereken Konular
              </h2>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Çözülen sorular ve test sonuçlarınıza göre belirlenmiştir
            </span>
          </div>

          <div className="grid-2" style={{ gap: '12px' }}>
            {stats.weak_topics.map((wt) => (
              <div
                key={wt.topic_id}
                className="card"
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--bg-input)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#93c5fd', fontWeight: 600 }}>
                    {wt.subject_title} &gt; {wt.unit_title}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', marginTop: '2px', marginBottom: '4px' }}>
                    {wt.topic_title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {wt.incorrect_count > 0 ? (
                      <span style={{ color: '#fb7185' }}>{wt.incorrect_count} Yanlış Yanıt ({wt.accuracy_rate}% Başarı)</span>
                    ) : (
                      <span style={{ color: '#fbbf24' }}>Öğrenme adımları henüz tamamlanmadı (%{wt.accuracy_rate})</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() =>
                    onNavigate('topic-detail', {
                      subjectId: wt.subject_id,
                      unitId: wt.unit_id,
                      topicId: wt.topic_id,
                    })
                  }
                  className="btn btn-primary"
                  style={{ padding: '6px 12px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                >
                  <RotateCcw size={13} />
                  <span>Tekrar Et</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Continue Studying Card & Quick Actions in 2 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', marginBottom: '28px' }}>
        {/* Continue Studying Highlight Box */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <BookOpen size={20} color="var(--primary)" />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Çalışmaya Devam Et</h2>
          </div>

          {stats.continue_topic ? (
            <div
              style={{
                backgroundColor: 'var(--bg-input)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                  {stats.continue_topic.subject_title} &gt; {stats.continue_topic.unit_title}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>
                  {stats.continue_topic.topic_title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Bu konunun akademik anlatımı, karşılaştırma tabloları ve AGS'DE DİKKAT uyarıları sırada bekliyor.
                </p>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button
                  onClick={() =>
                    onNavigate('topic-detail', {
                      subjectId: stats.continue_topic?.subject_id,
                      unitId: stats.continue_topic?.unit_id,
                      topicId: stats.continue_topic?.topic_id,
                    })
                  }
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <span>Konuyu Çalış</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => onNavigate('curriculum')}
                  className="btn btn-secondary"
                >
                  Tüm Müfredat
                </button>
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: 'var(--bg-input)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '30px',
                textAlign: 'center',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircle2 size={40} color="#10b981" style={{ marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>
                Tüm Konular Tamamlandı!
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Harika bir başarı! Şimdi Genel Denemeler ve Çıkmış Sorular ile netlerinizi zirveye taşıyın.
              </p>
              <button onClick={() => onNavigate('mock-exams')} className="btn btn-primary">
                Genel Deneme Çöz
              </button>
            </div>
          )}
        </div>

        {/* Quick Actions Shortcuts */}
        <div className="card">
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px' }}>
            Hızlı Erişim & Alıştırmalar
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div
              onClick={() => onNavigate('past-questions')}
              className="card card-interactive"
              style={{
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-input)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60a5fa',
                  }}
                >
                  <HelpCircle size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Çıkmış Sorular & Özgün Banka</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    ÖSYM referanslı ve AGS tarzı özgün sorular
                  </div>
                </div>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </div>

            <div
              onClick={() => onNavigate('mock-exams')}
              className="card card-interactive"
              style={{
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-input)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fbbf24',
                  }}
                >
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>4 Seviyeli Genel Denemeler</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    Temel, Orta, Orta-Zor ve Zor seviye AGS provaları
                  </div>
                </div>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </div>

            <div
              onClick={() => onNavigate('progress')}
              className="card card-interactive"
              style={{
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-input)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                  }}
                >
                  <TrendingUp size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>İlerlemem ve Gelişim Raporu</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    7 derslik kazanım matrisi ve eksik analizi
                  </div>
                </div>
              </div>
              <ChevronRight size={18} color="var(--text-muted)" />
            </div>
          </div>
        </div>
      </div>

      {/* 7 Official Subjects Progress Grid */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Resmi 7 Ders Bazlı Müfredat Durumu</h2>
          <button onClick={() => onNavigate('curriculum')} className="btn btn-ghost" style={{ fontSize: '0.85rem' }}>
            <span>Müfredatı İncele</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid-2">
          {stats.subject_progress.map((subj) => (
            <div
              key={subj.subject_id}
              className="card card-interactive"
              onClick={() => onNavigate('curriculum')}
              style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{subj.subject_title}</div>
                <span className={subj.percentage === 100 ? 'badge badge-emerald' : 'badge badge-blue'}>
                  {subj.percentage === 100 ? 'Tamamlandı' : `%${subj.percentage}`}
                </span>
              </div>

              <div className="progress-track">
                <div
                  className={`progress-fill ${subj.percentage === 100 ? 'progress-fill-emerald' : ''}`}
                  style={{ width: `${subj.percentage}%` }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <span>{subj.completed_topics} / {subj.total_topics} Konu Bitti</span>
                <span>{subj.unit_count} Ünite</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity / Attempts Table */}
      <div className="card">
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px' }}>
          Son Sınav & Deneme Girişimleri
        </h2>
        {stats.recent_attempts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Henüz tamamlanmış bir mini sınav veya genel deneme kaydınız bulunmuyor.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '10px 12px' }}>Sınav Türü</th>
                  <th style={{ padding: '10px 12px' }}>Puan / Başarı</th>
                  <th style={{ padding: '10px 12px' }}>Net</th>
                  <th style={{ padding: '10px 12px' }}>D / Y / B</th>
                  <th style={{ padding: '10px 12px' }}>Tarih</th>
                </tr>
              </thead>
              <tbody>
                {stats.recent_attempts.map((att, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)',
                    }}
                  >
                    <td style={{ padding: '12px' }}>
                      <span className={att.exam_type === 'mock' ? 'badge badge-amber' : 'badge badge-blue'}>
                        {att.exam_type === 'mock' ? 'Genel Deneme' : 'Ünite Mini Sınav'}
                      </span>
                    </td>
                    <td style={{ padding: '12px', fontWeight: 700, color: '#fff' }}>
                      %{att.score}
                    </td>
                    <td style={{ padding: '12px', color: '#34d399', fontWeight: 600 }}>
                      {att.net_score} Net
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ color: '#34d399' }}>{att.correct_count}D</span> /{' '}
                      <span style={{ color: '#fb7185' }}>{att.incorrect_count}Y</span> /{' '}
                      <span style={{ color: 'var(--text-muted)' }}>{att.blank_count}B</span>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>
                      {new Date(att.created_at).toLocaleDateString('tr-TR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
