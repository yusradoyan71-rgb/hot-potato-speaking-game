import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { Subject, Unit, Topic } from '../types/database';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Scale,
  Brain,
  Globe,
  FileQuestion,
  PlayCircle,
  ArrowRight,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface CurriculumPageProps {
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [unitsBySubject, setUnitsBySubject] = useState<Record<string, Unit[]>>({});
  const [topicsByUnit, setTopicsByUnit] = useState<Record<string, Topic[]>>({});
  const [progressMap, setProgressMap] = useState<Record<string, boolean>>({});
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({});
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('egitim-bilimleri');
  const [loading, setLoading] = useState(true);

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={20} />;
      case 'Brain':
        return <Brain size={20} />;
      case 'Globe':
        return <Globe size={20} />;
      case 'Scale':
        return <Scale size={20} />;
      default:
        return <BookOpen size={20} />;
    }
  };

  useEffect(() => {
    const loadCurriculum = async () => {
      setLoading(true);
      const subjs = await apiService.getSubjects();
      setSubjects(subjs);

      const uMap: Record<string, Unit[]> = {};
      const tMap: Record<string, Topic[]> = {};
      const expandMap: Record<string, boolean> = {};

      for (const s of subjs) {
        const uList = await apiService.getUnitsBySubject(s.id);
        uMap[s.id] = uList;
        for (const u of uList) {
          const tList = await apiService.getTopicsByUnit(u.id);
          tMap[u.id] = tList;
          expandMap[u.id] = true; // Default expand
        }
      }

      setUnitsBySubject(uMap);
      setTopicsByUnit(tMap);
      setExpandedUnits(expandMap);

      if (user) {
        const prog = await apiService.getUserTopicProgress(user.id);
        setProgressMap(prog);
      }
      setLoading(false);
    };

    loadCurriculum();
  }, [user]);

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div>Müfredat ve konular yükleniyor...</div>
      </div>
    );
  }

  const currentUnits = unitsBySubject[selectedSubjectId] || [];

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <BookOpen size={22} color="var(--primary)" />
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>AGS Müfredatı ve Konular</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Milli Eğitim Akademisi Giriş Sınavı resmi konu kapsamına uygun konu anlatımları ve ünite tarama testleri.
        </p>
      </div>

      {/* Subject Filter Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '12px',
          marginBottom: '24px',
        }}
      >
        {subjects.map((s) => {
          const isSelected = s.id === selectedSubjectId;
          const units = unitsBySubject[s.id] || [];
          let completedInSubj = 0;
          let totalInSubj = 0;

          units.forEach((u) => {
            const topics = topicsByUnit[u.id] || [];
            totalInSubj += topics.length;
            topics.forEach((t) => {
              if (progressMap[t.id]) completedInSubj++;
            });
          });

          const pct = totalInSubj > 0 ? Math.round((completedInSubj / totalInSubj) * 100) : 0;

          return (
            <button
              key={s.id}
              onClick={() => setSelectedSubjectId(s.id)}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 18px',
                minWidth: '220px',
                backgroundColor: isSelected ? 'var(--primary-subtle)' : 'var(--bg-card)',
                borderColor: isSelected ? 'var(--border-highlight)' : 'var(--border-subtle)',
                color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                boxShadow: isSelected ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: isSelected ? 'var(--primary)' : 'var(--bg-elevated)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#fff' : 'var(--text-muted)',
                }}
              >
                {getSubjectIcon(s.icon)}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.925rem', color: isSelected ? '#fff' : 'var(--text-primary)' }}>
                  {s.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: isSelected ? '#93c5fd' : 'var(--text-muted)' }}>
                  {completedInSubj}/{totalInSubj} Konu (%{pct})
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Units & Topics Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {currentUnits.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
            Bu derse ait ünite bulunmamaktadır.
          </div>
        ) : (
          currentUnits.map((unit, uIndex) => {
            const topics = topicsByUnit[unit.id] || [];
            const isExpanded = expandedUnits[unit.id] ?? true;
            const completedCount = topics.filter((t) => progressMap[t.id]).length;
            const isUnitComplete = topics.length > 0 && completedCount === topics.length;

            return (
              <div
                key={unit.id}
                className="card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  borderColor: isUnitComplete ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-subtle)',
                }}
              >
                {/* Unit Header */}
                <div
                  onClick={() => toggleUnit(unit.id)}
                  style={{
                    padding: '18px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: isUnitComplete ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-card)',
                    borderBottom: isExpanded ? '1px solid var(--border-subtle)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isUnitComplete ? '#10b981' : 'var(--bg-elevated)',
                        color: isUnitComplete ? '#fff' : 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                      }}
                    >
                      {isUnitComplete ? <CheckCircle2 size={18} /> : uIndex + 1}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{unit.title}</h2>
                        {isUnitComplete && (
                          <span className="badge badge-emerald">Ünite Tamamlandı</span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {unit.description}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                      {completedCount} / {topics.length} Konu
                    </div>
                    <div
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform var(--transition-fast)',
                      }}
                    >
                      <ChevronDown size={20} color="var(--text-muted)" />
                    </div>
                  </div>
                </div>

                {/* Unit Topics & Mini Exam Actions */}
                {isExpanded && (
                  <div style={{ padding: '16px 24px', backgroundColor: 'rgba(10, 15, 29, 0.5)' }}>
                    {/* Topics List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                      {topics.map((topic, tIndex) => {
                        const isDone = !!progressMap[topic.id];
                        return (
                          <div
                            key={topic.id}
                            className="card card-interactive"
                            onClick={() =>
                              onNavigate('topic-detail', {
                                subjectId: selectedSubjectId,
                                unitId: unit.id,
                                topicId: topic.id,
                              })
                            }
                            style={{
                              padding: '12px 18px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              backgroundColor: isDone ? 'rgba(16, 185, 129, 0.04)' : 'var(--bg-input)',
                              borderColor: isDone ? 'rgba(16, 185, 129, 0.25)' : 'var(--border-subtle)',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              {isDone ? (
                                <CheckCircle2 size={20} color="#10b981" />
                              ) : (
                                <Circle size={20} color="var(--text-muted)" />
                              )}
                              <div>
                                <div style={{ fontWeight: 600, fontSize: '0.925rem', color: isDone ? '#fff' : 'var(--text-primary)' }}>
                                  {topic.title}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <Clock size={12} />
                                  <span>Yaklaşık {topic.estimated_minutes} dakika</span>
                                </div>
                              </div>
                            </div>

                            <button
                              className={isDone ? 'btn btn-secondary' : 'btn btn-primary'}
                              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                            >
                              <span>{isDone ? 'Tekrar İncele' : 'Konuyu Çalış'}</span>
                              <ChevronRight size={15} />
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Unit Mini Exam Footer Card */}
                    <div
                      style={{
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FileQuestion size={20} color="var(--primary)" />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>
                            {unit.title} - Ünite Mini Denemesi
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                            Kazanım tarama testi ile bu ünitedeki bilginizi test edin.
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          onNavigate('mini-exam', {
                            unitId: unit.id,
                            unitTitle: unit.title,
                          })
                        }
                        className="btn btn-primary"
                        style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                      >
                        <PlayCircle size={16} />
                        <span>Mini Sınavı Başlat</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
