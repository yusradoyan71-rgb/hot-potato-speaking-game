import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  BookOpen,
  FileQuestion,
  Award,
  BarChart3,
  ShieldCheck,
  Settings,
  ChevronRight,
  Database,
} from 'lucide-react';

export type NavigationTab =
  | 'dashboard'
  | 'curriculum'
  | 'topic-detail'
  | 'past-questions'
  | 'mock-exams'
  | 'mini-exam'
  | 'mock-exam-run'
  | 'progress'
  | 'admin';

interface SidebarProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  isOpen: boolean;
  onOpenSupabaseModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isOpen,
  onOpenSupabaseModal,
}) => {
  const { user } = useAuth();

  const navItems = [
    {
      id: 'dashboard' as NavigationTab,
      label: 'Genel Bakış',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'curriculum' as NavigationTab,
      label: 'Dersler ve Konular',
      icon: BookOpen,
      badge: 'Müfredat',
    },
    {
      id: 'past-questions' as NavigationTab,
      label: 'Çıkmış Sorular',
      icon: FileQuestion,
      badge: 'ÖSYM/MEB',
    },
    {
      id: 'mock-exams' as NavigationTab,
      label: 'Genel Denemeler',
      icon: Award,
      badge: 'AGS Prova',
    },
    {
      id: 'progress' as NavigationTab,
      label: 'İlerlemem ve Raporlar',
      icon: BarChart3,
      badge: null,
    },
  ];

  if (user?.role === 'admin') {
    navItems.push({
      id: 'admin' as NavigationTab,
      label: 'Admin Paneli',
      icon: ShieldCheck,
      badge: 'Yönetim',
    });
  }

  return (
    <aside
      style={{
        width: isOpen ? '260px' : '0px',
        backgroundColor: 'var(--bg-sidebar)',
        borderRight: isOpen ? '1px solid var(--border-subtle)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width var(--transition-normal)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: 40,
        flexShrink: 0,
      }}
    >
      <div style={{ padding: '24px 16px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', paddingLeft: '12px', marginBottom: '8px' }}>
          Ana Menü
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            activeTab === item.id ||
            (item.id === 'curriculum' && (activeTab === 'topic-detail' || activeTab === 'mini-exam')) ||
            (item.id === 'mock-exams' && activeTab === 'mock-exam-run');

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isActive ? 'var(--primary-subtle)' : 'transparent',
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                border: isActive ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid transparent',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.9rem',
                textAlign: 'left',
                width: '100%',
                transition: 'all var(--transition-fast)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Icon
                  size={19}
                  color={isActive ? 'var(--primary)' : 'var(--text-muted)'}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  style={{
                    fontSize: '0.65rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-elevated)',
                    color: isActive ? '#fff' : 'var(--text-muted)',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Supabase Config / Status Card in sidebar bottom */}
      <div style={{ marginTop: 'auto', padding: '16px' }}>
        <div
          className="card"
          style={{
            padding: '14px',
            backgroundColor: 'var(--bg-input)',
            borderColor: 'var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Database size={16} color="var(--primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>PostgreSQL & RLS</span>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '10px' }}>
            Tüm ilerleme, çözülen sorular ve denemeler kalıcı veritabanında saklanır.
          </p>
          <button
            onClick={onOpenSupabaseModal}
            className="btn btn-secondary"
            style={{ width: '100%', padding: '6px', fontSize: '0.75rem', gap: '4px' }}
          >
            <Settings size={13} />
            <span>Veritabanı Ayarları</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
