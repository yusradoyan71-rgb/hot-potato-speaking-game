import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { MockExam, UserExamAttempt } from '../types/database';
import {
  Award,
  Clock,
  FileQuestion,
  PlayCircle,
  TrendingUp,
  Shield,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface MockExamsPageProps {
  onNavigate: (tab: NavigationTab, params?: any) => void;
}

export const MockExamsPage: React.FC<MockExamsPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [mockExams, setMockExams] = useState<MockExam[]>([]);
  const [userAttempts, setUserAttempts] = useState<UserExamAttempt[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadExams = async () => {
      setLoading(true);
      const exams = await apiService.getMockExams();
      setMockExams(exams);

      if (user) {
        const attempts = await apiService.getUserAttempts(user.id);
        setUserAttempts(attempts.filter((a) => a.exam_type === 'mock'));
      }
      setLoading(false);
    };

    loadExams();
  }, [user]);

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <Award size={22} color="#fbbf24" />
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>4 Seviyeli AGS Genel Deneme Sınavları</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Milli Eğitim Akademisi Giriş Sınavı resmi soru dağılımına uygun; Temel, Standart, İleri ve Zor seviye genel provalar.
        </p>
      </div>

      {/* Mock Exams Grid */}
      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
          Denemeler yükleniyor...
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
          {mockExams.map((exam) => {
            const pastAttempt = userAttempts.find((a) => a.exam_id === exam.id);

            return (
              <div
                key={exam.id}
                className="card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '20px',
                  background: 'linear-gradient(135deg, rgba(18, 26, 47, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
                  borderColor: pastAttempt ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-subtle)',
                }}
              >
                <div style={{ maxWidth: '650px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span className="badge badge-amber">{exam.tier_name || 'AGS Deneme'}</span>
                    <span
                      className={
                        exam.difficulty === 'temel'
                          ? 'badge badge-emerald'
                          : exam.difficulty === 'zor'
                          ? 'badge badge-rose'
                          : 'badge badge-blue'
                      }
                    >
                      {exam.difficulty?.toUpperCase()} SEVİYE
                    </span>
                    {pastAttempt && (
                      <span className="badge badge-emerald">Tamamlandı: {pastAttempt.net_score} Net</span>
                    )}
                  </div>

                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '8px' }}>
                    {exam.title}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {exam.description}
                  </p>

                  <div style={{ display: 'flex', gap: '20px', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FileQuestion size={15} color="var(--primary)" />
                      {exam.questions?.length || exam.total_questions} Soru
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={15} color="#fbbf24" />
                      {exam.duration_minutes} Dakika
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Shield size={15} color="#34d399" />
                      4 Yanlış 1 Doğruyu Götürür
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '180px' }}>
                  <button
                    onClick={() =>
                      onNavigate('mock-exam-run', {
                        mockExamId: exam.id,
                      })
                    }
                    className="btn btn-primary"
                    style={{ padding: '12px 20px', width: '100%' }}
                  >
                    <PlayCircle size={18} />
                    <span>{pastAttempt ? 'Denemeyi Tekrar Çöz' : 'Denemeyi Başlat'}</span>
                  </button>

                  {pastAttempt && (
                    <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Son Puan: %{pastAttempt.score} ({pastAttempt.correct_count}D / {pastAttempt.incorrect_count}Y)
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Past Mock Exam Attempts History */}
      <div className="card">
        <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px' }}>
          Geçmiş Deneme Sonuçlarınız
        </h2>

        {userAttempts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Henüz tamamlanmış bir genel deneme sınavınız bulunmamaktadır.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-medium)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '10px 12px' }}>Deneme Adı</th>
                  <th style={{ padding: '10px 12px' }}>Puan</th>
                  <th style={{ padding: '10px 12px' }}>Net</th>
                  <th style={{ padding: '10px 12px' }}>D / Y / B</th>
                  <th style={{ padding: '10px 12px' }}>Süre</th>
                  <th style={{ padding: '10px 12px' }}>Tarih</th>
                </tr>
              </thead>
              <tbody>
                {userAttempts.map((att, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)',
                    }}
                  >
                    <td style={{ padding: '12px', fontWeight: 600 }}>{att.exam_title || 'AGS Genel Deneme'}</td>
                    <td style={{ padding: '12px', fontWeight: 700, color: '#fff' }}>%{att.score}</td>
                    <td style={{ padding: '12px', color: '#34d399', fontWeight: 700 }}>{att.net_score} Net</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ color: '#34d399' }}>{att.correct_count}D</span> /{' '}
                      <span style={{ color: '#fb7185' }}>{att.incorrect_count}Y</span> /{' '}
                      <span style={{ color: 'var(--text-muted)' }}>{att.blank_count}B</span>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>
                      {Math.round(att.duration_seconds / 60)} dk
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
