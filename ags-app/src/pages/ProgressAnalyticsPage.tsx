import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { DashboardStats, Subject, Unit, Topic, TopicProgressDetail } from '../types/database';
import {
  BarChart3,
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
  BookOpen,
  PieChart,
  Target,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface ProgressAnalyticsPageProps {
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const ProgressAnalyticsPage: React.FC<ProgressAnalyticsPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [unitsBySubject, setUnitsBySubject] = useState<Record<string, Unit[]>>({});
  const [topicsByUnit, setTopicsByUnit] = useState<Record<string, Topic[]>>({});
  const [progressMap, setProgressMap] = useState<Record<string, TopicProgressDetail>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadAll = async () => {
      if (!user) return;
      setLoading(true);
      const s = await apiService.getDashboardStats(user.id);
      setStats(s);

      const subjs = await apiService.getSubjects();
      setSubjects(subjs);

      const uMap: Record<string, Unit[]> = {};
      const tMap: Record<string, Topic[]> = {};
      for (const subj of subjs) {
        const uList = await apiService.getUnitsBySubject(subj.id);
        uMap[subj.id] = uList;
        for (const u of uList) {
          const tList = await apiService.getTopicsByUnit(u.id);
          tMap[u.id] = tList;
        }
      }
      setUnitsBySubject(uMap);
      setTopicsByUnit(tMap);

      const prog = await apiService.getUserTopicProgress(user.id);
      setProgressMap(prog);
      setLoading(false);
    };

    loadAll();
  }, [user]);

  if (loading || !stats) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div>Başarı ve ilerleme analizleri hesaplanıyor...</div>
      </div>
    );
  }

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <BarChart3 size={22} color="var(--primary)" />
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>İlerlemem ve Başarı Analizi</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          7 Resmi AGS dersindeki 3 adımlı konu kazanımlarınız, soru çözme doğruluk oranlarınız ve deneme geçmişiniz.
        </p>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid-4" style={{ marginBottom: '28px' }}>
        <div className="card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            Müfredat Adımları
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#3b82f6', marginBottom: '6px' }}>
            %{stats.overall_progress_percent}
          </div>
          <div className="progress-track" style={{ marginBottom: '8px' }}>
            <div className="progress-fill" style={{ width: `${stats.overall_progress_percent}%` }} />
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            {stats.completed_activities_count} / {stats.total_activities_count} Öğrenme Adımı Bitti
          </div>
        </div>

        <div className="card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            Soru Çözme Doğruluğu
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
            %{stats.accuracy_rate}
          </div>
          <div className="progress-track" style={{ marginBottom: '8px' }}>
            <div className="progress-fill progress-fill-emerald" style={{ width: `${stats.accuracy_rate}%` }} />
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            {stats.correct_answers_count} Doğru / {stats.solved_questions_count} Toplam Soru
          </div>
        </div>

        <div className="card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            Hedef AGS Puanı
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b', marginBottom: '6px' }}>
            {user?.target_score || 85} Puan
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '14px' }}>
            Milli Eğitim Akademisi hedef taban puanı
          </div>
        </div>

        <div className="card">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            Çözülen Denemeler
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#8b5cf6', marginBottom: '6px' }}>
            {stats.completed_mock_exams_count + stats.completed_mini_exams_count}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '14px' }}>
            {stats.completed_mini_exams_count} Mini + {stats.completed_mock_exams_count} Genel Deneme
          </div>
        </div>
      </div>

      {/* Weak Topics Review Recommendation */}
      {stats.weak_topics.length > 0 && (
        <div
          className="card"
          style={{
            marginBottom: '28px',
            backgroundColor: 'rgba(244, 63, 94, 0.04)',
            borderColor: 'rgba(244, 63, 94, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <AlertTriangle size={18} color="#fb7185" />
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
              Tekrar Etmem Gereken Öncelikli Konular
            </h2>
          </div>

          <div className="grid-2" style={{ gap: '10px' }}>
            {stats.weak_topics.map((wt) => (
              <div
                key={wt.topic_id}
                style={{
                  backgroundColor: 'var(--bg-input)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#93c5fd' }}>{wt.subject_title}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{wt.topic_title}</div>
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
                  style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                >
                  Tekrar Et
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subject-based Detailed Mastery Grid */}
      <div className="card" style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>
          7 Resmi Ders & Konu Kazanım Matrisi
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {subjects.map((subj) => {
            const uList = unitsBySubject[subj.id] || [];
            return (
              <div
                key={subj.id}
                style={{
                  backgroundColor: 'var(--bg-input)',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#93c5fd' }}>
                    {subj.title}
                  </div>
                  <button
                    onClick={() => onNavigate('curriculum')}
                    className="btn btn-secondary"
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    Müfredata Git
                  </button>
                </div>

                <div className="grid-2" style={{ gap: '12px' }}>
                  {uList.map((unit) => {
                    const topics = topicsByUnit[unit.id] || [];
                    const completed = topics.filter((t) => progressMap[t.id]?.percentage === 100).length;
                    const pct = topics.length > 0 ? Math.round((completed / topics.length) * 100) : 0;

                    return (
                      <div
                        key={unit.id}
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          padding: '14px',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{unit.title}</span>
                          <span className={pct === 100 ? 'badge badge-emerald' : 'badge badge-blue'}>
                            %{pct}
                          </span>
                        </div>

                        <div className="progress-track" style={{ height: '6px', marginBottom: '8px' }}>
                          <div
                            className={`progress-fill ${pct === 100 ? 'progress-fill-emerald' : ''}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>

                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {completed} / {topics.length} Konu Tamamlandı
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Attempts History */}
      <div className="card">
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>
          Tüm Sınav Girişim Geçmişi
        </h2>

        {stats.recent_attempts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
            Henüz tamamlanmış bir sınav kaydınız bulunmuyor.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '10px 12px' }}>Sınav Adı</th>
                  <th style={{ padding: '10px 12px' }}>Tür</th>
                  <th style={{ padding: '10px 12px' }}>Net</th>
                  <th style={{ padding: '10px 12px' }}>Başarı %</th>
                  <th style={{ padding: '10px 12px' }}>Doğru / Yanlış / Boş</th>
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
                    <td style={{ padding: '12px', fontWeight: 600 }}>{att.exam_title || 'Sınav Girişimi'}</td>
                    <td style={{ padding: '12px' }}>
                      <span className={att.exam_type === 'mock' ? 'badge badge-amber' : 'badge badge-blue'}>
                        {att.exam_type === 'mock' ? 'Genel Deneme' : 'Mini Sınav'}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: '#34d399', fontWeight: 700 }}>
                      {att.net_score} Net
                    </td>
                    <td style={{ padding: '12px', fontWeight: 700, color: '#fff' }}>%{att.score}</td>
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
