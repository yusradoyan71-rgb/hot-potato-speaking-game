import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

export const AuthPage: React.FC = () => {
  const { signIn, signUp, resetPassword } = useAuth();
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await signIn(email, password);
        if (res.error) setErrorMessage(res.error);
      } else if (mode === 'register') {
        if (!fullName.trim()) {
          setErrorMessage('Lütfen adınızı ve soyadınızı giriniz.');
          setLoading(false);
          return;
        }
        const res = await signUp(email, password, fullName, role);
        if (res.error) setErrorMessage(res.error);
        else setSuccessMessage('Hesabınız başarıyla oluşturuldu! Giriş yapılıyor...');
      } else if (mode === 'forgot') {
        const res = await resetPassword(email);
        if (res.error) setErrorMessage(res.error);
        else setSuccessMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = async (demoRole: 'student' | 'admin') => {
    setLoading(true);
    setErrorMessage('');
    if (demoRole === 'student') {
      await signIn('ogrenci@ags.meb.gov.tr', 'demo123456');
    } else {
      await signIn('admin@ags.meb.gov.tr', 'admin123456');
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'radial-gradient(ellipse at top, #1e293b 0%, #0a0f1d 70%)',
      }}
    >
      <div
        className="card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '460px',
          padding: '36px',
          backgroundColor: 'rgba(18, 26, 47, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(59, 130, 246, 0.15)',
        }}
      >
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px',
              boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
            }}
          >
            <GraduationCap size={32} color="#ffffff" />
          </div>
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '6px' }}>
            AGS Hazırlık Platformu
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            MEB Akademi Giriş Sınavı Akıllı Hazırlık Sistemi
          </p>
        </div>

        {/* Tab Toggle */}
        <div
          style={{
            display: 'flex',
            backgroundColor: 'var(--bg-input)',
            borderRadius: 'var(--radius-md)',
            padding: '4px',
            marginBottom: '24px',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setErrorMessage('');
              setSuccessMessage('');
            }}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: mode === 'login' ? 'var(--primary)' : 'transparent',
              color: mode === 'login' ? '#ffffff' : 'var(--text-secondary)',
            }}
          >
            Giriş Yap
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setErrorMessage('');
              setSuccessMessage('');
            }}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: mode === 'register' ? 'var(--primary)' : 'transparent',
              color: mode === 'register' ? '#ffffff' : 'var(--text-secondary)',
            }}
          >
            Kayıt Ol
          </button>
        </div>

        {/* Feedback Messages */}
        {errorMessage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(244, 63, 94, 0.15)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              color: '#fb7185',
              fontSize: '0.825rem',
              marginBottom: '18px',
            }}
          >
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '0.825rem',
              marginBottom: '18px',
            }}
          >
            <CheckCircle2 size={16} />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>
                Ad Soyad
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="text"
                  required
                  placeholder="Örn: Zeynep Kaya"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{ width: '100%', paddingLeft: '40px' }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>
              E-posta Adresi
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="email"
                required
                placeholder="ornek@ogretmen.meb.gov.tr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', paddingLeft: '40px' }}
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.825rem', fontWeight: 600 }}>Şifre</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    style={{ fontSize: '0.75rem', color: 'var(--primary)', background: 'none', padding: 0 }}
                  >
                    Şifremi Unuttum?
                  </button>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', paddingLeft: '40px' }}
                />
              </div>
            </div>
          )}

          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>
                Hesap Rolü
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: role === 'student' ? 'var(--primary)' : 'var(--border-subtle)',
                    backgroundColor: role === 'student' ? 'var(--primary-subtle)' : 'var(--bg-input)',
                    color: role === 'student' ? 'var(--primary)' : 'var(--text-secondary)',
                  }}
                >
                  Öğrenci (Aday)
                </button>
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: role === 'admin' ? '#8b5cf6' : 'var(--border-subtle)',
                    backgroundColor: role === 'admin' ? 'rgba(139, 92, 246, 0.15)' : 'var(--bg-input)',
                    color: role === 'admin' ? '#a78bfa' : 'var(--text-secondary)',
                  }}
                >
                  Eğitmen / Admin
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px', marginTop: '6px' }}
          >
            {loading ? 'İşleniyor...' : mode === 'login' ? 'Giriş Yap' : mode === 'register' ? 'Hesap Oluştur' : 'Sıfırlama Bağlantısı Gönder'}
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Demo Fast Login Cards */}
        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '10px' }}>
            Hızlı Test / Demo Hesaplar:
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => handleQuickDemo('student')}
              className="btn btn-secondary"
              style={{ flex: 1, padding: '8px', fontSize: '0.78rem' }}
            >
              <GraduationCap size={15} color="var(--primary)" />
              <span>Öğrenci Girişi</span>
            </button>
            <button
              onClick={() => handleQuickDemo('admin')}
              className="btn btn-secondary"
              style={{ flex: 1, padding: '8px', fontSize: '0.78rem' }}
            >
              <ShieldCheck size={15} color="#a78bfa" />
              <span>Admin Girişi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
