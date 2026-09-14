import React, { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { studyTrackerService, OverallTrackerStats } from '../services/studyTrackerService';
import {
  BarChart3,
  TrendingUp,
  Award,
  CheckCircle2,
  PieChart,
  Target,
  Sparkles,
  ArrowRight,
  BrainCircuit,
  Landmark,
  Globe2,
  GraduationCap,
  ShieldCheck,
  BookOpen,
  PlayCircle,
  ListTodo,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface ProgressAnalyticsPageProps {
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const ProgressAnalyticsPage: React.FC<ProgressAnalyticsPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const userId = user?.id || 'guest';

  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(new Set());
  const [stats, setStats] = useState<OverallTrackerStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const taskSet = await studyTrackerService.getCompletedTaskIds(userId);
      setCompletedTaskIds(taskSet);
      setStats(studyTrackerService.calculateStats(taskSet));
      setLoading(false);
    };
    load();
  }, [userId]);

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit size={20} />;
      case 'TrendingUp':
        return <TrendingUp size={20} />;
      case 'Landmark':
        return <Landmark size={20} />;
      case 'Globe2':
        return <Globe2 size={20} />;
      case 'GraduationCap':
        return <GraduationCap size={20} />;
      case 'ShieldCheck':
        return <ShieldCheck size={20} />;
      default:
        return <BookOpen size={20} />;
    }
  };

  if (loading || !stats) {
    return (
      <div className="page-container" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📊</div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Raporlar ve Analitik Veriler Yükleniyor...
        </h2>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ maxWidth: '1280px', margin: '0 auto', paddingBottom: '80px' }}>
      {/* Header */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 28px',
          borderRadius: '20px',
          marginBottom: '28px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                <Sparkles size={12} style={{ marginRight: '4px' }} />
                Performans ve Hazırlık Analitiği
              </span>
            </div>
            <h1 style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
              İlerleme ve Hazırlık Raporlarım
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
              Resmî AGS sınav ağırlıklarına göre puan katkınızı ve ders bazlı tamamlama düzeylerinizi inceleyin.
            </p>
          </div>

          {/* Large Weighted Score Indicator */}
          <div
            style={{
              padding: '16px 24px',
              borderRadius: '16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'right',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Genel AGS Hazırlık Puanı
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: '6px' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--color-primary)' }}>
                %{stats.weightedProgress}
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ 100</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-success)', fontWeight: 700 }}>
              %{stats.overallPercentage} Ham Tamamlanma
            </div>
          </div>
        </div>
      </div>

      {/* Overview Metric Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        <div className="glass-panel" style={{ padding: '20px', borderRadius: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <ListTodo size={22} color="var(--color-primary)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Toplam Görevler</span>
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            {stats.completedTasks} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ {stats.totalTasks}</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            %{stats.overallPercentage} tamamlandı
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px', borderRadius: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <PlayCircle size={22} color="#ef4444" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>İzlenen Videolar</span>
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            {stats.completedVideos} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ {stats.totalVideos}</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            {stats.totalVideos > 0 ? Math.round((stats.completedVideos / stats.totalVideos) * 100) : 0}% izlendi
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px', borderRadius: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Award size={22} color="#f59e0b" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Çözülen Denemeler</span>
          </div>
          <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            {stats.completedExams} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ {stats.totalExams}</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            {stats.totalExams > 0 ? Math.round((stats.completedExams / stats.totalExams) * 100) : 0}% tamamlandı
          </div>
        </div>
      </div>

      {/* Detailed Subject Breakdown Table */}
      <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Resmî AGS Ders Ağırlık ve Katkı Tablosu
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>
              Her dersin sınavdaki resmî katsayısı ve şu ana kadar kazandırdığı ağırlıklı puan katkısı.
            </p>
          </div>
          <button
            onClick={() => onNavigate('curriculum')}
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Görevleri Düzenle</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {stats.subjects.map((sub) => {
            const isFull = sub.percentage === 100;
            return (
              <div
                key={sub.subjectId}
                style={{
                  padding: '16px 20px',
                  borderRadius: '14px',
                  border: isFull ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                  background: isFull ? 'rgba(16, 185, 129, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '220px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(99, 102, 241, 0.12)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getSubjectIcon(sub.icon)}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {sub.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      AGS Soru Sayısı: {sub.questionCount} Soru • Resmî Ağırlık: %{sub.weightPercentage}
                    </div>
                  </div>
                </div>

                {/* Progress bar and stats in middle */}
                <div style={{ flex: 1, minWidth: '200px', maxWidth: '380px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>
                      {sub.completedTasks}/{sub.totalTasks} Görev
                    </span>
                    <span style={{ fontWeight: 700, color: isFull ? 'var(--color-success)' : 'var(--color-primary)' }}>
                      %{sub.percentage} Tamamlandı
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(0, 0, 0, 0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${sub.percentage}%`,
                        height: '100%',
                        backgroundColor: isFull ? 'var(--color-success)' : 'var(--color-primary)',
                        borderRadius: '999px',
                      }}
                    />
                  </div>
                </div>

                {/* Weighted Score Contribution Badge */}
                <div style={{ textAlign: 'right', minWidth: '120px' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Ağırlıklı Katkı
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 900, color: isFull ? 'var(--color-success)' : 'var(--color-primary)' }}>
                    +{sub.weightedContribution} <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ %{sub.weightPercentage}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
