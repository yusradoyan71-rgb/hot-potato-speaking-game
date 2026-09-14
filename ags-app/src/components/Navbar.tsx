import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  GraduationCap,
  LogOut,
  User,
  Shield,
  Target,
  Database,
  Menu,
  X,
  CheckCircle2,
} from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
  onOpenSupabaseModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, onOpenSupabaseModal }) => {
  const { user, signOut, isLiveSupabase, updateTargetScore } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [editingTarget, setEditingTarget] = useState(false);
  const [targetInput, setTargetInput] = useState(user?.target_score?.toString() || '85');

  const handleSaveTarget = () => {
    const val = parseFloat(targetInput);
    if (!isNaN(val) && val >= 0 && val <= 100) {
      updateTargetScore(val);
      setEditingTarget(false);
    }
  };

  return (
    <header
      style={{
        height: '70px',
        backgroundColor: 'var(--bg-sidebar)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={onToggleSidebar}
          className="btn-ghost"
          style={{ padding: '8px', borderRadius: 'var(--radius-md)', display: 'flex' }}
          title="Menüyü Aç/Kapat"
        >
          <Menu size={22} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
            }}
          >
            <GraduationCap size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(90deg, #ffffff 0%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AGS PRO
              </span>
              <span className="badge badge-blue" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                Öğrenci Portalı
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Akademi Giriş Sınavı Bireysel Hazırlık ve İlerleme Sistemi
            </div>
          </div>
        </div>
      </div>

      {/* Right controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Supabase Status Button */}
        <button
          onClick={onOpenSupabaseModal}
          className="btn"
          style={{
            background: isLiveSupabase ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
            border: `1px solid ${isLiveSupabase ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
            padding: '6px 12px',
            fontSize: '0.8rem',
            borderRadius: 'var(--radius-full)',
            color: isLiveSupabase ? '#34d399' : '#60a5fa',
          }}
          title="Veritabanı ve Supabase Ayarları"
        >
          <Database size={14} />
          <span>{isLiveSupabase ? 'Supabase Bağlı' : 'Database Aktif'}</span>
        </button>

        {/* User Profile */}
        {user ? (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                color: 'var(--text-primary)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#3b82f6',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
              >
                {user.full_name?.charAt(0) || user.email.charAt(0).toUpperCase()}
              </div>
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{user.full_name || 'Öğrenci'}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  AGS Adayı
                </div>
              </div>
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div
                className="card"
                style={{
                  position: 'absolute',
                  right: 0,
                  top: '110%',
                  width: '280px',
                  padding: '16px',
                  zIndex: 100,
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <div style={{ paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{user.full_name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{user.email}</div>
                  <div style={{ marginTop: '6px' }}>
                    <span className="badge badge-blue">
                      Öğrenci Hesabı
                    </span>
                  </div>
                </div>

                {/* Target Score setting */}
                <div style={{ padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Target size={14} color="#f59e0b" /> Hedef AGS Puanı:
                    </span>
                    <span style={{ fontWeight: 700, color: '#f59e0b', fontSize: '0.9rem' }}>
                      {user.target_score || 85} Puan
                    </span>
                  </div>
                  {editingTarget ? (
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <input
                        type="number"
                        min="50"
                        max="100"
                        value={targetInput}
                        onChange={(e) => setTargetInput(e.target.value)}
                        style={{ width: '80px', padding: '4px 8px', fontSize: '0.85rem' }}
                      />
                      <button onClick={handleSaveTarget} className="btn btn-primary" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>
                        Kaydet
                      </button>
                      <button onClick={() => setEditingTarget(false)} className="btn btn-ghost" style={{ padding: '4px 8px' }}>
                        İptal
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditingTarget(true)}
                      style={{ fontSize: '0.75rem', color: 'var(--primary)', background: 'none', padding: 0 }}
                    >
                      Hedefi Değiştir
                    </button>
                  )}
                </div>

                {/* Logout */}
                <button
                  onClick={() => {
                    signOut();
                    setShowProfileMenu(false);
                  }}
                  className="btn btn-danger"
                  style={{ width: '100%', marginTop: '12px', padding: '8px', fontSize: '0.85rem' }}
                >
                  <LogOut size={16} />
                  <span>Çıkış Yap</span>
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
};
