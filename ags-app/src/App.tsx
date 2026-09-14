import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Sidebar, NavigationTab } from './components/Sidebar';
import { SupabaseModal } from './components/SupabaseModal';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { CurriculumPage } from './pages/CurriculumPage';
import { TopicDetailPage } from './pages/TopicDetailPage';
import { MiniExamPage } from './pages/MiniExamPage';
import { PastQuestionsPage } from './pages/PastQuestionsPage';
import { MockExamsPage } from './pages/MockExamsPage';
import { MockExamSimulatorPage } from './pages/MockExamSimulatorPage';
import { ProgressAnalyticsPage } from './pages/ProgressAnalyticsPage';
import { AdminPage } from './pages/AdminPage';

const AppContent: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');
  const [navParams, setNavParams] = useState<any>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isSupabaseModalOpen, setIsSupabaseModalOpen] = useState<boolean>(false);

  const handleNavigate = (tab: NavigationTab, params?: any) => {
    setActiveTab(tab);
    if (params) setNavParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-main)',
          color: 'var(--text-secondary)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎓</div>
          <div style={{ fontWeight: 600 }}>AGS Hazırlık Platformu Yükleniyor...</div>
        </div>
      </div>
    );
  }

  // Not logged in -> Show Authentication Page
  if (!user) {
    return (
      <>
        <AuthPage />
        <SupabaseModal
          isOpen={isSupabaseModalOpen}
          onClose={() => setIsSupabaseModalOpen(false)}
        />
      </>
    );
  }

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={(tab) => handleNavigate(tab)}
        isOpen={isSidebarOpen}
        onOpenSupabaseModal={() => setIsSupabaseModalOpen(true)}
      />

      {/* Main Content Area */}
      <div className="main-content">
        <Navbar
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onOpenSupabaseModal={() => setIsSupabaseModalOpen(true)}
        />

        <main style={{ flex: 1, minWidth: 0 }}>
          {activeTab === 'dashboard' && <DashboardPage onNavigate={handleNavigate} />}

          {activeTab === 'curriculum' && <CurriculumPage onNavigate={handleNavigate} />}

          {activeTab === 'topic-detail' && (
            <TopicDetailPage
              subjectId={navParams.subjectId || 'egitim-bilimleri'}
              unitId={navParams.unitId || 'unit-ogrenme-psikolojisi'}
              topicId={navParams.topicId || 'topic-davranisci-yaklasim'}
              onNavigate={handleNavigate}
            />
          )}

          {activeTab === 'mini-exam' && (
            <MiniExamPage
              unitId={navParams.unitId || 'unit-ogrenme-psikolojisi'}
              unitTitle={navParams.unitTitle}
              onNavigate={handleNavigate}
            />
          )}

          {activeTab === 'past-questions' && (
            <PastQuestionsPage onNavigate={handleNavigate} />
          )}

          {activeTab === 'mock-exams' && (
            <MockExamsPage onNavigate={handleNavigate} />
          )}

          {activeTab === 'mock-exam-run' && (
            <MockExamSimulatorPage
              mockExamId={navParams.mockExamId || 'mock-ags-turkiye-geneli-1'}
              onNavigate={handleNavigate}
            />
          )}

          {activeTab === 'progress' && (
            <ProgressAnalyticsPage onNavigate={handleNavigate} />
          )}

          {activeTab === 'admin' && (
            <AdminPage onNavigate={handleNavigate} />
          )}
        </main>
      </div>

      {/* Supabase Connection Setup Modal */}
      <SupabaseModal
        isOpen={isSupabaseModalOpen}
        onClose={() => setIsSupabaseModalOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
