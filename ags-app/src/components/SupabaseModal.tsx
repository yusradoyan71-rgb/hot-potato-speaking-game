import React, { useState } from 'react';
import {
  X,
  Database,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  RefreshCw,
  KeyRound,
  FileCode,
} from 'lucide-react';
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  isLiveSupabaseConfigured,
  updateSupabaseCredentials,
  clearSupabaseCredentials,
  createSupabaseInstance,
} from '../services/supabaseClient';

interface SupabaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupabaseModal: React.FC<SupabaseModalProps> = ({ isOpen, onClose }) => {
  const [url, setUrl] = useState(
    localStorage.getItem('ags_supabase_url') ||
      (SUPABASE_URL.includes('xyzcompany') ? '' : SUPABASE_URL)
  );
  const [anonKey, setAnonKey] = useState(
    localStorage.getItem('ags_supabase_anon_key') ||
      (SUPABASE_ANON_KEY.includes('dummy') ? '' : SUPABASE_ANON_KEY)
  );
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [testMessage, setTestMessage] = useState('');
  const [showSql, setShowSql] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  if (!isOpen) return null;

  const isLive = isLiveSupabaseConfigured();

  const handleTestAndSave = async () => {
    if (!url || !anonKey) {
      setTestStatus('error');
      setTestMessage('Lütfen hem Supabase Project URL hem de Anon Key giriniz.');
      return;
    }

    setTestStatus('testing');
    try {
      const testClient = createSupabaseInstance(url.trim(), anonKey.trim());
      const { data, error } = await testClient.from('subjects').select('count', { count: 'exact', head: true });

      if (error && !error.message.includes('relation "public.subjects" does not exist')) {
        // Auth or network error
        setTestStatus('error');
        setTestMessage(`Bağlantı Hatası: ${error.message}`);
        return;
      }

      updateSupabaseCredentials(url, anonKey);
      setTestStatus('success');
      setTestMessage('Supabase bağlantısı başarıyla kuruldu ve kaydedildi!');
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch (e: any) {
      setTestStatus('error');
      setTestMessage(`Hata: ${e.message || 'Bağlantı kurulamadı'}`);
    }
  };

  const handleReset = () => {
    clearSupabaseCredentials();
    setUrl('');
    setAnonKey('');
    setTestStatus('idle');
    setTestMessage('');
    window.location.reload();
  };

  const copySchemaSql = () => {
    const sqlText = `-- Supabase SQL Editor'da çalıştırın:
-- ags-app/supabase_schema.sql dosyasındaki tüm komutları buraya yapıştırıp 'RUN' butonuna basınız.
-- RLS politikaları, profiller ve müfredat tabloları otomatik oluşturulacaktır.`;
    navigator.clipboard.writeText(sqlText);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
    >
      <div
        className="card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '620px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '28px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34d399',
              }}
            >
              <Database size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Supabase & Veritabanı Yapılandırması</h3>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                PostgreSQL, RLS ve Canlı Auth Entegrasyonu
              </div>
            </div>
          </div>
          <button onClick={onClose} className="btn-ghost" style={{ padding: '6px', borderRadius: '50%' }}>
            <X size={20} />
          </button>
        </div>

        {/* Status Indicator Banner */}
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: isLive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
            border: `1px solid ${isLive ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          {isLive ? (
            <CheckCircle2 size={20} color="#10b981" />
          ) : (
            <AlertCircle size={20} color="#3b82f6" />
          )}
          <div style={{ fontSize: '0.85rem' }}>
            <div style={{ fontWeight: 600, color: isLive ? '#34d399' : '#60a5fa' }}>
              {isLive ? 'Canlı Supabase Bağlantısı Aktif' : 'Yerel Kalıcı Veritabanı Aktif'}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              {isLive
                ? 'Veriler doğrudan Supabase PostgreSQL veritabanında RLS ile korunmaktadır.'
                : 'Uygulama tam fonksiyonel çalışmaktadır. İsteğe bağlı olarak kendi Supabase projenizi bağlayabilirsiniz.'}
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>
              Supabase Project URL:
            </label>
            <input
              type="text"
              placeholder="https://xxxxxxxxxxxx.supabase.co"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>
              Supabase Anon / Public Key:
            </label>
            <input
              type="password"
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              value={anonKey}
              onChange={(e) => setAnonKey(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Test status feedback */}
        {testMessage && (
          <div
            style={{
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.825rem',
              marginBottom: '16px',
              backgroundColor: testStatus === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
              color: testStatus === 'success' ? '#34d399' : '#fb7185',
              border: `1px solid ${testStatus === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
            }}
          >
            {testMessage}
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={handleTestAndSave}
            disabled={testStatus === 'testing'}
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            {testStatus === 'testing' ? (
              <>
                <RefreshCw size={16} className="animate-spin" />
                <span>Bağlantı Test Ediliyor...</span>
              </>
            ) : (
              <>
                <KeyRound size={16} />
                <span>Test Et ve Kaydet</span>
              </>
            )}
          </button>

          {isLive && (
            <button onClick={handleReset} className="btn btn-secondary">
              Sıfırla
            </button>
          )}
        </div>

        {/* SQL Schema Reference Guide */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '16px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '0.825rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FileCode size={15} color="var(--primary)" />
              <span>Veritabanı Tabloları & RLS Şeması</span>
            </div>
            <button
              onClick={() => setShowSql(!showSql)}
              style={{ fontSize: '0.78rem', color: 'var(--primary)', background: 'none' }}
            >
              {showSql ? 'Gizle' : 'Kılavuzu Göster'}
            </button>
          </div>

          {showSql && (
            <div
              style={{
                marginTop: '12px',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-input)',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              <p style={{ marginBottom: '8px' }}>
                Supabase Dashboard &gt; <strong>SQL Editor</strong> bölümüne gidip projenizdeki <code>supabase_schema.sql</code> dosyasının içeriğini çalıştırarak tüm RLS politikalarını ve tabloları 1 saniyede kurabilirsiniz.
              </p>
              <button
                onClick={copySchemaSql}
                className="btn btn-secondary"
                style={{ fontSize: '0.75rem', padding: '5px 10px' }}
              >
                <Copy size={13} />
                <span>{copiedSql ? 'Kopyalandı!' : 'Şema Bilgisini Kopyala'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
