import React, { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { studyTrackerService, OverallTrackerStats } from '../services/studyTrackerService';
import { SubjectStudyPlan, StudyTask } from '../types/database';
import {
  TrendingUp,
  BrainCircuit,
  Landmark,
  Globe2,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Circle,
  PlayCircle,
  Award,
  ChevronRight,
  Sparkles,
  Target,
  ListTodo,
  Check,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface DashboardPageProps {
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const userId = user?.id || 'guest';

  const studyPlans = useMemo(() => studyTrackerService.getStudyPlans(), []);
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(new Set());
  const [stats, setStats] = useState<OverallTrackerStats | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const taskSet = await studyTrackerService.getCompletedTaskIds(userId);
    setCompletedTaskIds(taskSet);
    setStats(studyTrackerService.calculateStats(taskSet));
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [userId]);

  const handleToggleTask = async (taskId: string) => {
    const isCompleted = completedTaskIds.has(taskId);
    const updatedSet = await studyTrackerService.toggleTask(userId, taskId, !isCompleted);
    setCompletedTaskIds(updatedSet);
    setStats(studyTrackerService.calculateStats(updatedSet));
  };

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit size={22} />;
      case 'TrendingUp':
        return <TrendingUp size={22} />;
      case 'Landmark':
        return <Landmark size={22} />;
      case 'Globe2':
        return <Globe2 size={22} />;
      case 'GraduationCap':
        return <GraduationCap size={22} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      default:
        return <BookOpen size={22} />;
    }
  };

  // Find upcoming uncompleted tasks across all subjects
  const upcomingTasks = useMemo(() => {
    const list: { task: StudyTask; subjectTitle: string; subjectId: string }[] = [];
    for (const plan of studyPlans) {
      for (const sec of plan.sections) {
        for (const t of sec.tasks) {
          if (!completedTaskIds.has(t.id)) {
            list.push({ task: t, subjectTitle: plan.short_title, subjectId: plan.subject_id });
            if (list.length >= 6) return list;
          }
        }
      }
    }
    return list;
  }, [studyPlans, completedTaskIds]);

  if (loading || !stats) {
    return (
      <div className="page-container" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📊</div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Öğrenci İlerleme Paneli Yükleniyor...
        </h2>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ maxWidth: '1280px', margin: '0 auto', paddingBottom: '80px' }}>
      {/* 1. HERO BANNER WITH WEIGHTED PROGRESS */}
      <div
        className="glass-panel"
        style={{
          padding: '28px 32px',
          borderRadius: '24px',
          marginBottom: '28px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(16, 185, 129, 0.06) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '999px', backgroundColor: 'rgba(99, 102, 241, 0.15)', color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '10px' }}>
              <Sparkles size={14} />
              <span>Kişisel AGS Hazırlık Takipçisi</span>
            </div>
            <h1 style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' }}>
              Hoş Geldiniz, {user?.full_name || 'Öğrenci'} 👋
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: '8px 0 0', lineHeight: 1.5 }}>
              AGS hazırlık sürecinizde tamamladığınız soru tiplerini, videoları ve denemeleri işaretleyerek resmî sınav ağırlıklarına göre puan hedefinize adım adım yaklaşın.
            </p>
          </div>

          {/* Large Circular Weighted Score Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '16px 24px',
              borderRadius: '20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
                Resmî AGS Ağırlıklı İlerleme
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--color-primary)', letterSpacing: '-0.03em' }}>
                  %{stats.weightedProgress}
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>/ 100</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-success)', fontWeight: 700 }}>
                {stats.completedTasks} / {stats.totalTasks} Görev Tamamlandı
              </div>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ width: '100%', height: '12px', backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${stats.weightedProgress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #10b981 100%)',
                borderRadius: '999px',
                transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </div>
        </div>
      </div>

      {/* 2. SUMMARY METRIC COUNTERS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        <div className="glass-panel" style={{ padding: '20px', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'rgba(99, 102, 241, 0.12)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ListTodo size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Tamamlanan Görevler</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {stats.completedTasks} <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ {stats.totalTasks}</span>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'rgba(239, 68, 68, 0.12)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PlayCircle size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>İzlenen Ders Videoları</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {stats.completedVideos} <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ {stats.totalVideos}</span>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Award size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Çözülen Branş Denemeleri</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {stats.completedExams} <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ {stats.totalExams}</span>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px', borderRadius: '18px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'rgba(16, 185, 129, 0.12)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Target size={24} />
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Sınav Ağırlık Katkısı</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-success)' }}>
              %{stats.weightedProgress} <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)' }}>/ %100</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 6 SUBJECT STUDY TRACKER CARDS (OFFICIAL AGS WEIGHTS) */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Ders Bazlı Çalışma ve Kontrol Listeleri
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>
              Her dersin soru tiplerini, videolarını ve denemelerini tamamladıkça işaretleyin.
            </p>
          </div>
          <button
            onClick={() => onNavigate('curriculum')}
            className="btn btn-ghost"
            style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Tüm Listeyi Gör</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '18px',
          }}
        >
          {studyPlans.map((plan) => {
            const sStat = stats.subjects.find((s) => s.subjectId === plan.subject_id);
            const isFull = sStat && sStat.percentage === 100;

            return (
              <div
                key={plan.id}
                className="glass-panel"
                style={{
                  padding: '22px',
                  borderRadius: '20px',
                  border: isFull ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  {/* Card Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(99, 102, 241, 0.12)',
                          color: 'var(--color-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getSubjectIcon(plan.icon)}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                          {plan.title}
                        </h3>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          AGS Soru Sayısı: {plan.question_count_in_ags} Soru
                        </div>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(99, 102, 241, 0.12)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      Ağırlık: %{plan.weight_percentage}
                    </span>
                  </div>

                  {/* Progress Stats */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {sStat?.completedTasks || 0} / {sStat?.totalTasks || 0} Görev Tamamlandı
                    </span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: isFull ? 'var(--color-success)' : 'var(--color-primary)' }}>
                      %{sStat?.percentage || 0}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(0, 0, 0, 0.08)', borderRadius: '999px', overflow: 'hidden', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: `${sStat?.percentage || 0}%`,
                        height: '100%',
                        backgroundColor: isFull ? 'var(--color-success)' : 'var(--color-primary)',
                        borderRadius: '999px',
                        transition: 'width 0.5s ease',
                      }}
                    />
                  </div>

                  {/* Quick badges for sub-components */}
                  <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    <span>🎬 {sStat?.completedVideos || 0}/{sStat?.totalVideos || 0} Video</span>
                    <span>•</span>
                    <span>📝 {sStat?.completedExams || 0}/{sStat?.totalExams || 0} Deneme</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('curriculum', { subjectId: plan.subject_id })}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    padding: '8px 14px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Çalışma Görevlerini Aç</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. UPCOMING UNCOMPLETED TASKS QUICK CHECKLIST */}
      {upcomingTasks.length > 0 && (
        <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ListTodo size={20} color="var(--color-primary)" />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Sıradaki Çalışma Görevleriniz
              </h2>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Buradan doğrudan tamamlayabilirsiniz
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {upcomingTasks.map(({ task, subjectTitle, subjectId }) => (
              <div
                key={task.id}
                onClick={() => handleToggleTask(task.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '6px',
                      border: '2px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    {task.text}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--color-primary)',
                    flexShrink: 0,
                  }}
                >
                  {subjectTitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
