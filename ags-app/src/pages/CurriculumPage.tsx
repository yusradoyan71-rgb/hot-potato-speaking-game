import React, { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { studyTrackerService, OverallTrackerStats, SubjectUserNote } from '../services/studyTrackerService';
import { SubjectStudyPlan, StudySection, StudyTask, VideoResource, ExamTask } from '../types/database';
import {
  CheckCircle2,
  Circle,
  BrainCircuit,
  TrendingUp,
  Landmark,
  Globe2,
  GraduationCap,
  ShieldCheck,
  PlayCircle,
  ExternalLink,
  Award,
  Sparkles,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Filter,
  CheckCheck,
  Target,
  Edit3,
  Save,
  Check,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface CurriculumPageProps {
  onNavigate: (tab: NavigationTab, params?: any) => void;
  initialSubjectId?: string;
}

type ViewFilter = 'all' | 'tasks' | 'videos' | 'exams';

export const CurriculumPage: React.FC<CurriculumPageProps> = ({ onNavigate, initialSubjectId }) => {
  const { user } = useAuth();
  const userId = user?.id || 'guest';

  const studyPlans = useMemo(() => studyTrackerService.getStudyPlans(), []);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    initialSubjectId || studyPlans[0]?.subject_id || 'sozel-yetenek'
  );
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(new Set());
  const [stats, setStats] = useState<OverallTrackerStats | null>(null);
  const [activeFilter, setActiveFilter] = useState<ViewFilter>('all');
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [userNote, setUserNote] = useState<SubjectUserNote>({
    subjectId: selectedSubjectId,
    note: '',
    targetQuestions: 500,
    solvedQuestions: 0,
    updatedAt: '',
  });
  const [isSavingNote, setIsSavingNote] = useState(false);
  const [noteSavedAlert, setNoteSavedAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load task state on mount or user change
  useEffect(() => {
    let isMounted = true;
    const loadData = async () => {
      setLoading(true);
      const taskSet = await studyTrackerService.getCompletedTaskIds(userId);
      if (isMounted) {
        setCompletedTaskIds(taskSet);
        setStats(studyTrackerService.calculateStats(taskSet));
        setLoading(false);
      }
    };
    loadData();
    return () => {
      isMounted = false;
    };
  }, [userId]);

  // Load notes when selected subject changes
  useEffect(() => {
    const noteData = studyTrackerService.getUserSubjectNote(userId, selectedSubjectId);
    setUserNote(noteData);
  }, [userId, selectedSubjectId]);

  const currentPlan = useMemo(
    () => studyPlans.find((p) => p.subject_id === selectedSubjectId) || studyPlans[0],
    [studyPlans, selectedSubjectId]
  );

  const currentSubjectStats = useMemo(() => {
    return stats?.subjects.find((s) => s.subjectId === selectedSubjectId) || null;
  }, [stats, selectedSubjectId]);

  // Toggle a single task
  const handleToggleTask = async (taskId: string) => {
    const isCompleted = completedTaskIds.has(taskId);
    const updatedSet = await studyTrackerService.toggleTask(userId, taskId, !isCompleted);
    setCompletedTaskIds(updatedSet);
    setStats(studyTrackerService.calculateStats(updatedSet));
  };

  // Toggle all tasks in a section
  const handleToggleSectionAll = async (section: StudySection) => {
    const allCompleted = section.tasks.every((t) => completedTaskIds.has(t.id));
    let nextSet = new Set(completedTaskIds);

    for (const t of section.tasks) {
      nextSet = await studyTrackerService.toggleTask(userId, t.id, !allCompleted);
    }
    setCompletedTaskIds(nextSet);
    setStats(studyTrackerService.calculateStats(nextSet));
  };

  // Toggle section accordion collapse
  const toggleCollapse = (sectionId: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Save subject note
  const handleSaveNote = () => {
    setIsSavingNote(true);
    studyTrackerService.saveUserSubjectNote(userId, userNote);
    setTimeout(() => {
      setIsSavingNote(false);
      setNoteSavedAlert(true);
      setTimeout(() => setNoteSavedAlert(false), 2500);
    }, 300);
  };

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
        <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📋</div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Çalışma Takip Verileri Yükleniyor...
        </h2>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ maxWidth: '1280px', margin: '0 auto', paddingBottom: '80px' }}>
      {/* 1. TOP HEADER & OVERALL AGS WEIGHTED PROGRESS */}
      <div
        className="glass-panel"
        style={{
          padding: '24px 28px',
          borderRadius: '20px',
          marginBottom: '28px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-primary" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', padding: '4px 10px' }}>
                <Sparkles size={12} />
                AGS 2026 Resmî Çalışma & Self-Check Sistemi
              </span>
            </div>
            <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em' }}>
              AGS Çalışma ve Görev Takip Merkezi
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
              Soru tiplerini, videoları ve denemeleri tamamladıkça işaretleyin; resmî sınav ağırlıklı ilerlemenizi anlık takip edin.
            </p>
          </div>

          {/* Overall Weighted Score Card */}
          <div
            style={{
              padding: '12px 20px',
              borderRadius: '16px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              textAlign: 'right',
              minWidth: '200px',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Genel AGS Hazırlık İlerlemesi
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: '6px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-primary)' }}>
                %{stats.weightedProgress}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ 100</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              {stats.completedTasks} / {stats.totalTasks} Toplam Görev Tamamlandı
            </div>
          </div>
        </div>

        {/* Global Weighted Progress Bar */}
        <div style={{ width: '100%', height: '10px', backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '999px', overflow: 'hidden' }}>
          <div
            style={{
              width: `${stats.weightedProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #10b981 100%)',
              borderRadius: '999px',
              transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </div>
      </div>

      {/* 2. SUBJECT SELECTOR TABS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '12px',
          marginBottom: '28px',
        }}
      >
        {studyPlans.map((plan) => {
          const sStat = stats.subjects.find((s) => s.subjectId === plan.subject_id);
          const isSelected = plan.subject_id === selectedSubjectId;
          const isFull = sStat && sStat.percentage === 100;

          return (
            <button
              key={plan.id}
              onClick={() => setSelectedSubjectId(plan.subject_id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '14px 16px',
                borderRadius: '16px',
                border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
                background: isSelected ? 'var(--bg-card)' : 'rgba(255, 255, 255, 0.02)',
                boxShadow: isSelected ? '0 4px 20px rgba(99, 102, 241, 0.15)' : 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isSelected ? 'var(--color-primary)' : 'rgba(99, 102, 241, 0.1)',
                    color: isSelected ? '#ffffff' : 'var(--color-primary)',
                  }}
                >
                  {getSubjectIcon(plan.icon)}
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(99, 102, 241, 0.12)',
                    color: 'var(--color-primary)',
                  }}
                >
                  %{plan.weight_percentage}
                </span>
              </div>

              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                {plan.short_title}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                <span>{sStat?.completedTasks || 0}/{sStat?.totalTasks || 0} Görev</span>
                <span style={{ fontWeight: 700, color: isFull ? 'var(--color-success)' : isSelected ? 'var(--color-primary)' : 'inherit' }}>
                  %{sStat?.percentage || 0}
                </span>
              </div>

              <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(0, 0, 0, 0.08)', borderRadius: '999px', marginTop: '8px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${sStat?.percentage || 0}%`,
                    height: '100%',
                    backgroundColor: isFull ? 'var(--color-success)' : 'var(--color-primary)',
                    borderRadius: '999px',
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. ACTIVE SUBJECT HEADER & FILTER BAR */}
      <div
        className="glass-panel"
        style={{
          padding: '20px 24px',
          borderRadius: '16px',
          marginBottom: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              {currentPlan.title}
            </h2>
            <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
              AGS Ağırlığı: %{currentPlan.weight_percentage} ({currentPlan.question_count_in_ags} Soru)
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
            {currentPlan.description}
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '6px', background: 'rgba(0, 0, 0, 0.04)', padding: '4px', borderRadius: '12px' }}>
          <button
            onClick={() => setActiveFilter('all')}
            className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-ghost'}`}
            style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '8px' }}
          >
            Tümü ({currentSubjectStats?.totalTasks || 0})
          </button>
          <button
            onClick={() => setActiveFilter('tasks')}
            className={`btn ${activeFilter === 'tasks' ? 'btn-primary' : 'btn-ghost'}`}
            style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '8px' }}
          >
            📋 Soru Tipleri ({currentPlan.sections.flatMap((s) => s.tasks).length})
          </button>
          <button
            onClick={() => setActiveFilter('videos')}
            className={`btn ${activeFilter === 'videos' ? 'btn-primary' : 'btn-ghost'}`}
            style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '8px' }}
          >
            🎬 Videolar ({currentPlan.videos.length})
          </button>
          <button
            onClick={() => setActiveFilter('exams')}
            className={`btn ${activeFilter === 'exams' ? 'btn-primary' : 'btn-ghost'}`}
            style={{ padding: '6px 14px', fontSize: '0.8rem', borderRadius: '8px' }}
          >
            📝 Denemeler ({currentPlan.exams.length})
          </button>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', alignItems: 'start' }}>
        {/* Left Column: Sections, Videos, Exams */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* A) QUESTION TYPE & CONCEPT SECTIONS */}
          {(activeFilter === 'all' || activeFilter === 'tasks') && (
            currentPlan.subject_id === 'sozel-yetenek' ? (
              <div
                className="glass-panel"
                style={{
                  borderRadius: '20px',
                  padding: '24px 28px',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      Sözel Yetenek
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                      Çalışmanızı tamamladığınız konuyu işaretleyin (5 Görev = %100)
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>
                      %{currentSubjectStats?.percentage || 0}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {currentSubjectStats?.completedTasks || 0} / 5 Tamamlandı
                    </div>
                  </div>
                </div>

                {/* Sözel Yetenek Progress Bar */}
                <div style={{ width: '100%', height: '12px', backgroundColor: 'rgba(0, 0, 0, 0.08)', borderRadius: '999px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: `${currentSubjectStats?.percentage || 0}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #10b981 100%)',
                      borderRadius: '999px',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>

                {/* 5-Step Scale Indicator */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '22px', padding: '0 2px' }}>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 0 ? 700 : 400 }}>0/5 (%0)</span>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 1 ? 700 : 400, color: currentSubjectStats && currentSubjectStats.completedTasks >= 1 ? 'var(--color-primary)' : 'inherit' }}>1/5 (%20)</span>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 2 ? 700 : 400, color: currentSubjectStats && currentSubjectStats.completedTasks >= 2 ? 'var(--color-primary)' : 'inherit' }}>2/5 (%40)</span>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 3 ? 700 : 400, color: currentSubjectStats && currentSubjectStats.completedTasks >= 3 ? 'var(--color-primary)' : 'inherit' }}>3/5 (%60)</span>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 4 ? 700 : 400, color: currentSubjectStats && currentSubjectStats.completedTasks >= 4 ? 'var(--color-primary)' : 'inherit' }}>4/5 (%80)</span>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 5 ? 700 : 400, color: currentSubjectStats && currentSubjectStats.completedTasks === 5 ? 'var(--color-success)' : 'inherit' }}>5/5 (%100)</span>
                </div>

                {/* 5 Sözel Yetenek Checkboxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {currentPlan.sections[0]?.tasks.map((task) => {
                    const isDone = completedTaskIds.has(task.id);
                    return (
                      <div
                        key={task.id}
                        onClick={() => handleToggleTask(task.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          padding: '16px 20px',
                          borderRadius: '14px',
                          cursor: 'pointer',
                          border: isDone ? '1.5px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                          backgroundColor: isDone ? 'rgba(16, 185, 129, 0.07)' : 'rgba(255, 255, 255, 0.02)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '8px',
                            border: isDone ? '2px solid var(--color-success)' : '2px solid var(--border-medium)',
                            backgroundColor: isDone ? 'var(--color-success)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            flexShrink: 0,
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {isDone && <Check size={16} strokeWidth={3} />}
                        </div>
                        <span
                          style={{
                            fontSize: '1.05rem',
                            fontWeight: 600,
                            color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                            textDecoration: isDone ? 'line-through' : 'none',
                            userSelect: 'none',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {task.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : currentPlan.subject_id === 'sayisal-yetenek' ? (
              <div
                className="glass-panel"
                style={{
                  borderRadius: '20px',
                  padding: '24px 28px',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      Sayısal Yetenek
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                      Çalışmanızı tamamladığınız konuyu işaretleyin (3 Görev = %100)
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>
                      %{currentSubjectStats?.percentage || 0}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {currentSubjectStats?.completedTasks || 0} / 3 Tamamlandı
                    </div>
                  </div>
                </div>

                {/* Sayısal Yetenek Progress Bar */}
                <div style={{ width: '100%', height: '12px', backgroundColor: 'rgba(0, 0, 0, 0.08)', borderRadius: '999px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: `${currentSubjectStats?.percentage || 0}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #10b981 100%)',
                      borderRadius: '999px',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>

                {/* 3-Step Scale Indicator: 0/3 = %0, 1/3 = %33, 2/3 = %67, 3/3 = %100 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '22px', padding: '0 2px' }}>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 0 ? 700 : 400 }}>0/3 (%0)</span>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 1 ? 700 : 400, color: currentSubjectStats && currentSubjectStats.completedTasks >= 1 ? 'var(--color-primary)' : 'inherit' }}>1/3 (%33)</span>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 2 ? 700 : 400, color: currentSubjectStats && currentSubjectStats.completedTasks >= 2 ? 'var(--color-primary)' : 'inherit' }}>2/3 (%67)</span>
                  <span style={{ fontWeight: currentSubjectStats?.completedTasks === 3 ? 700 : 400, color: currentSubjectStats && currentSubjectStats.completedTasks === 3 ? 'var(--color-success)' : 'inherit' }}>3/3 (%100)</span>
                </div>

                {/* 3 Sayısal Yetenek Checkboxes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {currentPlan.sections[0]?.tasks.map((task) => {
                    const isDone = completedTaskIds.has(task.id);
                    return (
                      <div
                        key={task.id}
                        onClick={() => handleToggleTask(task.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          padding: '16px 20px',
                          borderRadius: '14px',
                          cursor: 'pointer',
                          border: isDone ? '1.5px solid rgba(16, 185, 129, 0.4)' : '1px solid var(--border-subtle)',
                          backgroundColor: isDone ? 'rgba(16, 185, 129, 0.07)' : 'rgba(255, 255, 255, 0.02)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '8px',
                            border: isDone ? '2px solid var(--color-success)' : '2px solid var(--border-medium)',
                            backgroundColor: isDone ? 'var(--color-success)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            flexShrink: 0,
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {isDone && <Check size={16} strokeWidth={3} />}
                        </div>
                        <span
                          style={{
                            fontSize: '1.05rem',
                            fontWeight: 600,
                            color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                            textDecoration: isDone ? 'line-through' : 'none',
                            userSelect: 'none',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {task.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              currentPlan.sections.map((section, sIndex) => {
                const totalSec = section.tasks.length;
                const compSec = section.tasks.filter((t) => completedTaskIds.has(t.id)).length;
                const isSecFull = totalSec > 0 && compSec === totalSec;
                const isCollapsed = !!collapsedSections[section.id];

                return (
                  <div
                    key={section.id}
                    className="glass-panel"
                    style={{
                      borderRadius: '16px',
                      border: isSecFull ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Section Header */}
                    <div
                      style={{
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: isSecFull ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                        borderBottom: isCollapsed ? 'none' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                      }}
                      onClick={() => toggleCollapse(section.id)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleSectionAll(section);
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            color: isSecFull ? 'var(--color-success)' : 'var(--text-muted)',
                          }}
                          title={isSecFull ? 'Tümünü Kaldır' : 'Tümünü Tamamla'}
                        >
                          {isSecFull ? <CheckCircle2 size={22} /> : <Circle size={22} />}
                        </button>
                        <div>
                          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                            {section.title}
                          </h3>
                          {section.description && (
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                              {section.description}
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: '8px',
                            backgroundColor: isSecFull ? 'rgba(16, 185, 129, 0.15)' : 'rgba(99, 102, 241, 0.1)',
                            color: isSecFull ? 'var(--color-success)' : 'var(--color-primary)',
                          }}
                        >
                          {compSec} / {totalSec} Görev
                        </span>
                        {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                      </div>
                    </div>

                    {/* Section Tasks Checklist */}
                    {!isCollapsed && (
                      <div style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {section.tasks.map((task) => {
                          const isDone = completedTaskIds.has(task.id);
                          return (
                            <div
                              key={task.id}
                              onClick={() => handleToggleTask(task.id)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '10px 12px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                backgroundColor: isDone ? 'rgba(16, 185, 129, 0.05)' : 'transparent',
                                transition: 'background-color 0.15s ease',
                              }}
                            >
                              <div
                                style={{
                                  width: '20px',
                                  height: '20px',
                                  borderRadius: '6px',
                                  border: isDone ? '2px solid var(--color-success)' : '2px solid var(--border-medium)',
                                  backgroundColor: isDone ? 'var(--color-success)' : 'transparent',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#ffffff',
                                  flexShrink: 0,
                                  transition: 'all 0.15s ease',
                                }}
                              >
                                {isDone && <Check size={14} strokeWidth={3} />}
                              </div>
                              <span
                                style={{
                                  fontSize: '0.9rem',
                                  color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                                  textDecoration: isDone ? 'line-through' : 'none',
                                  lineHeight: '1.4',
                                  userSelect: 'none',
                                }}
                              >
                                {task.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })
            )
          )}

          {/* B) VIDEOS SECTION */}
          {(activeFilter === 'all' || activeFilter === 'videos') && currentPlan.videos.length > 0 && (
            <div className="glass-panel" style={{ borderRadius: '16px', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>
                    <PlayCircle size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      İzlemen Gereken Videolar
                    </h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Videoyu izledikten sonra kutucuğu işaretleyerek ilerlemenize dahil edin.
                    </div>
                  </div>
                </div>
                <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                  {currentPlan.videos.filter((v) => completedTaskIds.has(v.taskId)).length} / {currentPlan.videos.length} İzlenen
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentPlan.videos.map((video) => {
                  const isDone = completedTaskIds.has(video.taskId);
                  return (
                    <div
                      key={video.id}
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: isDone ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                        background: isDone ? 'rgba(16, 185, 129, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                        gap: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '240px' }}>
                        <button
                          onClick={() => handleToggleTask(video.taskId)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            color: isDone ? 'var(--color-success)' : 'var(--text-muted)',
                          }}
                          title={isDone ? 'İzlenmedi olarak işaretle' : 'İzlendi olarak işaretle'}
                        >
                          {isDone ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                        </button>
                        <div>
                          <div
                            style={{
                              fontSize: '0.92rem',
                              fontWeight: 700,
                              color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                              textDecoration: isDone ? 'line-through' : 'none',
                            }}
                          >
                            {video.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', gap: '8px', marginTop: '2px' }}>
                            {video.duration && <span>⏱ {video.duration}</span>}
                            {video.note && <span>• {video.note}</span>}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{
                            padding: '6px 12px',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            textDecoration: 'none',
                          }}
                        >
                          <span>Videoyu İzle</span>
                          <ExternalLink size={14} />
                        </a>
                        <button
                          onClick={() => handleToggleTask(video.taskId)}
                          className={`btn ${isDone ? 'btn-success' : 'btn-outline'}`}
                          style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                        >
                          {isDone ? '✓ İzledim' : '□ İzledim'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* C) EXAMS SECTION */}
          {(activeFilter === 'all' || activeFilter === 'exams') && currentPlan.exams.length > 0 && (
            <div className="glass-panel" style={{ borderRadius: '16px', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ color: 'var(--color-primary)' }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      Branş Denemeleri ve Mini Sınavlar
                    </h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Konu çalışmalarının ardından branş denemesi çözüp işaretleyin.
                    </div>
                  </div>
                </div>
                <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                  {currentPlan.exams.filter((e) => completedTaskIds.has(e.taskId)).length} / {currentPlan.exams.length} Tamamlanan
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentPlan.exams.map((exam) => {
                  const isDone = completedTaskIds.has(exam.taskId);
                  return (
                    <div
                      key={exam.id}
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: isDone ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                        background: isDone ? 'rgba(16, 185, 129, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                        gap: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '240px' }}>
                        <button
                          onClick={() => handleToggleTask(exam.taskId)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            color: isDone ? 'var(--color-success)' : 'var(--text-muted)',
                          }}
                          title={isDone ? 'Çözülmedi yap' : 'Çözüldü olarak işaretle'}
                        >
                          {isDone ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                        </button>
                        <div>
                          <div
                            style={{
                              fontSize: '0.92rem',
                              fontWeight: 700,
                              color: isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                              textDecoration: isDone ? 'line-through' : 'none',
                            }}
                          >
                            {exam.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', gap: '8px', marginTop: '2px' }}>
                            <span>📝 {exam.question_count} Soru</span>
                            {exam.duration_mins && <span>• ⏱ {exam.duration_mins} Dakika</span>}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleToggleTask(exam.taskId)}
                        className={`btn ${isDone ? 'btn-success' : 'btn-outline'}`}
                        style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                      >
                        {isDone ? '✓ Çözdüm' : '□ Çözdüm'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Question Goal Tracker & Personal Notes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Question Goal Widget */}
          <div className="glass-panel" style={{ borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Target size={20} color="var(--color-primary)" />
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                {currentPlan.short_title} Soru Hedefim
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Çözülen Soru Sayısı:
                </label>
                <input
                  type="number"
                  min="0"
                  value={userNote.solvedQuestions}
                  onChange={(e) => setUserNote({ ...userNote, solvedQuestions: parseInt(e.target.value) || 0 })}
                  className="input-field"
                  style={{ width: '100%', padding: '8px 12px', fontSize: '0.9rem', borderRadius: '8px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Hedeflenen Soru Sayısı:
                </label>
                <input
                  type="number"
                  min="1"
                  value={userNote.targetQuestions}
                  onChange={(e) => setUserNote({ ...userNote, targetQuestions: parseInt(e.target.value) || 1 })}
                  className="input-field"
                  style={{ width: '100%', padding: '8px 12px', fontSize: '0.9rem', borderRadius: '8px' }}
                />
              </div>

              {/* Solved / Target Progress */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  <span>Soru Tamamlama Oranı</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                    %{Math.min(100, Math.round((userNote.solvedQuestions / (userNote.targetQuestions || 1)) * 100))}
                  </span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(0, 0, 0, 0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${Math.min(100, Math.round((userNote.solvedQuestions / (userNote.targetQuestions || 1)) * 100))}%`,
                      height: '100%',
                      backgroundColor: 'var(--color-primary)',
                      borderRadius: '999px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Personal Study Notepad Widget */}
          <div className="glass-panel" style={{ borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Edit3 size={18} color="var(--color-primary)" />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Çalışma Notlarım
                </h3>
              </div>
              {noteSavedAlert && (
                <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 700 }}>
                  ✓ Kaydedildi
                </span>
              )}
            </div>

            <textarea
              rows={6}
              value={userNote.note}
              onChange={(e) => setUserNote({ ...userNote, note: e.target.value })}
              placeholder={`${currentPlan.short_title} için önemli formüller, unutulan kural ve soru stratejilerinizi buraya not edin...`}
              className="input-field"
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '0.85rem',
                borderRadius: '10px',
                resize: 'vertical',
                lineHeight: '1.4',
                marginBottom: '12px',
              }}
            />

            <button
              onClick={handleSaveNote}
              disabled={isSavingNote}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '8px 14px',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                borderRadius: '8px',
              }}
            >
              <Save size={14} />
              {isSavingNote ? 'Kaydediliyor...' : 'Notlarımı Kaydet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
