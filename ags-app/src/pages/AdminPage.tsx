import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/apiService';
import { Subject, Unit, Topic, Question, TopicContent } from '../types/database';
import {
  ShieldCheck,
  PlusCircle,
  BookOpen,
  FolderPlus,
  FileQuestion,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { NavigationTab } from '../components/Sidebar';

interface AdminPageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const [activeAdminTab, setActiveAdminTab] = useState<'question' | 'topic' | 'unit' | 'subject'>('question');
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form states for Question
  const [qSubjectId, setQSubjectId] = useState('');
  const [qUnitId, setQUnitId] = useState('');
  const [qText, setQText] = useState('');
  const [qExplanation, setQExplanation] = useState('');
  const [qDifficulty, setQDifficulty] = useState<'kolay' | 'orta' | 'zor'>('orta');
  const [qIsPast, setQIsPast] = useState(false);
  const [qPastYear, setQPastYear] = useState('2024');
  const [qPastSource, setQPastSource] = useState('MEB / AGS Örnek');
  const [options, setOptions] = useState<{ key: 'A' | 'B' | 'C' | 'D' | 'E'; text: string; isCorrect: boolean }[]>([
    { key: 'A', text: '', isCorrect: true },
    { key: 'B', text: '', isCorrect: false },
    { key: 'C', text: '', isCorrect: false },
    { key: 'D', text: '', isCorrect: false },
    { key: 'E', text: '', isCorrect: false },
  ]);

  // Form states for Topic
  const [tUnitId, setTUnitId] = useState('');
  const [tTitle, setTTitle] = useState('');
  const [tMinutes, setTMinutes] = useState(25);
  const [tOverview, setTOverview] = useState('');
  const [tSummary, setTSummary] = useState('');

  // Form states for Unit
  const [uSubjectId, setUSubjectId] = useState('');
  const [uTitle, setUTitle] = useState('');
  const [uDesc, setUDesc] = useState('');

  // Form states for Subject
  const [sTitle, setSTitle] = useState('');
  const [sDesc, setSDesc] = useState('');

  const loadHierarchy = async () => {
    const subjs = await apiService.getSubjects();
    setSubjects(subjs);
    if (subjs.length > 0 && !qSubjectId) setQSubjectId(subjs[0].id);
    if (subjs.length > 0 && !uSubjectId) setUSubjectId(subjs[0].id);

    const allUnits: Unit[] = [];
    const allTopics: Topic[] = [];
    for (const s of subjs) {
      const uList = await apiService.getUnitsBySubject(s.id);
      allUnits.push(...uList);
      for (const u of uList) {
        const tList = await apiService.getTopicsByUnit(u.id);
        allTopics.push(...tList);
      }
    }
    setUnits(allUnits);
    setTopics(allTopics);
    if (allUnits.length > 0 && !qUnitId) setQUnitId(allUnits[0].id);
    if (allUnits.length > 0 && !tUnitId) setTUnitId(allUnits[0].id);
  };

  useEffect(() => {
    loadHierarchy();
  }, []);

  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!qText.trim()) return;

    const qId = 'q_' + Math.random().toString(36).substring(2, 9);
    const newQuestion: Question = {
      id: qId,
      subject_id: qSubjectId,
      unit_id: qUnitId || undefined,
      question_text: qText,
      explanation: qExplanation,
      difficulty: qDifficulty,
      question_type: 'scenario',
      source_type: qIsPast ? 'cikmis' : 'ozgun',
      is_past_exam: qIsPast,
      past_exam_year: qIsPast ? parseInt(qPastYear) : undefined,
      past_exam_source: qIsPast ? qPastSource : undefined,
      options: options.map((opt) => ({
        id: `opt_${qId}_${opt.key.toLowerCase()}`,
        question_id: qId,
        option_key: opt.key,
        option_text: opt.text || `${opt.key} Seçeneği`,
        is_correct: opt.isCorrect,
      })),
    };

    await apiService.createQuestion(newQuestion);
    setMessage({ type: 'success', text: 'Yeni soru başarıyla veritabanına eklendi!' });
    setQText('');
    setQExplanation('');
  };

  const handleCreateTopic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tTitle.trim() || !tUnitId) return;

    const topicId = 'topic_' + Math.random().toString(36).substring(2, 9);
    const newTopic: Topic = {
      id: topicId,
      unit_id: tUnitId,
      title: tTitle,
      order_index: topics.length + 1,
      estimated_minutes: tMinutes,
    };

    const content: TopicContent = {
      id: 'tc_' + topicId,
      topic_id: topicId,
      learning_objectives: [`${tTitle} konusunun temel ilkelerini kavramak.`],
      overview: tOverview || `${tTitle} konusu kapsamlı açıklaması.`,
      key_concepts: [
        { term: 'Temel AGS Kavramı', definition: 'Bu konunun sınavda en çok sorgulanan anahtar kavramıdır.' },
      ],
      structured_sections: [
        {
          title: '1. Giriş ve Temel Esaslar',
          content: `${tTitle} konusuna ilişkin temel prensipler ve detaylar burada yer almaktadır.`,
        },
      ],
      exam_tips: [
        { tip: 'Bu konudan son yıllarda vaka ve uygulama soruları gelmektedir.', importance: 'high' },
      ],
      summary: tSummary || `${tTitle} konusu özet bilgileri.`,
      what_to_remember: [`${tTitle} ile ilgili temel tanımları unutmayınız.`],
    };

    await apiService.createTopic(newTopic, content);
    setMessage({ type: 'success', text: 'Yeni konu ve içeriği başarıyla eklendi!' });
    setTTitle('');
    setTOverview('');
    loadHierarchy();
  };

  const handleCreateUnit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uTitle.trim() || !uSubjectId) return;

    const unitId = 'unit_' + Math.random().toString(36).substring(2, 9);
    const newUnit: Unit = {
      id: unitId,
      subject_id: uSubjectId,
      title: uTitle,
      description: uDesc,
      order_index: units.length + 1,
    };

    await apiService.createUnit(newUnit);
    setMessage({ type: 'success', text: 'Yeni ünite başarıyla oluşturuldu!' });
    setUTitle('');
    setUDesc('');
    loadHierarchy();
  };

  const handleCreateSubject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sTitle.trim()) return;

    const subjId = 'subj_' + Math.random().toString(36).substring(2, 9);
    const newSubj: Subject = {
      id: subjId,
      title: sTitle,
      icon: 'BookOpen',
      description: sDesc,
      order_index: subjects.length + 1,
    };

    await apiService.createSubject(newSubj);
    setMessage({ type: 'success', text: 'Yeni ders kategorisi başarıyla eklendi!' });
    setSTitle('');
    setSDesc('');
    loadHierarchy();
  };

  if (user?.role !== 'admin') {
    return (
      <div className="page-wrapper animate-fade-in" style={{ maxWidth: '600px', textAlign: 'center', padding: '60px 20px' }}>
        <div className="card" style={{ padding: '36px' }}>
          <ShieldCheck size={48} color="#fb7185" style={{ marginBottom: '16px' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Yönetici Yetkisi Gereklidir</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Bu sayfaya yalnızca yönetici (admin) rolündeki kullanıcılar erişebilir. Sağ üst menüden rolünüzü 'Admin' olarak değiştirip test edebilirsiniz.
          </p>
          <button onClick={() => onNavigate('dashboard')} className="btn btn-primary">
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper animate-fade-in" style={{ maxWidth: '1000px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(139, 92, 246, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a78bfa',
            }}
          >
            <ShieldCheck size={20} />
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800 }}>AGS Yönetici & İçerik Paneli</h1>
          <span className="badge badge-amber">Admin Modu</span>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Müfredat dersleri, üniteleri, konu anlatımları ve soru bankasını genişletin.
        </p>
      </div>

      {/* Feedback message */}
      {message && (
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '20px',
            backgroundColor: message.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(244, 63, 94, 0.15)',
            border: `1px solid ${message.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
            color: message.type === 'success' ? '#34d399' : '#fb7185',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Tab Navigation */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          backgroundColor: 'var(--bg-input)',
          padding: '6px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '24px',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <button
          onClick={() => setActiveAdminTab('question')}
          className={`btn ${activeAdminTab === 'question' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}
        >
          <FileQuestion size={16} />
          <span>Soru Ekle</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('topic')}
          className={`btn ${activeAdminTab === 'topic' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}
        >
          <BookOpen size={16} />
          <span>Konu Ekle</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('unit')}
          className={`btn ${activeAdminTab === 'unit' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}
        >
          <FolderPlus size={16} />
          <span>Ünite Ekle</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('subject')}
          className={`btn ${activeAdminTab === 'subject' ? 'btn-primary' : 'btn-ghost'}`}
          style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}
        >
          <PlusCircle size={16} />
          <span>Ders Ekle</span>
        </button>
      </div>

      {/* Soru Ekleme Formu */}
      {activeAdminTab === 'question' && (
        <form onSubmit={handleCreateQuestion} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Yeni Soru Oluştur & Soru Bankasına Ekle</h2>

          <div className="grid-2">
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Ders:</label>
              <select
                value={qSubjectId}
                onChange={(e) => setQSubjectId(e.target.value)}
                style={{ width: '100%' }}
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Ünite:</label>
              <select
                value={qUnitId}
                onChange={(e) => setQUnitId(e.target.value)}
                style={{ width: '100%' }}
              >
                {units.filter((u) => u.subject_id === qSubjectId).map((u) => (
                  <option key={u.id} value={u.id}>{u.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Soru Metni:</label>
            <textarea
              required
              rows={4}
              placeholder="Soru kökünü ve metnini buraya yazınız..."
              value={qText}
              onChange={(e) => setQText(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          {/* Options A-E */}
          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '8px' }}>
              Seçenekler ve Doğru Cevap:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {options.map((opt, idx) => (
                <div key={opt.key} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setOptions(options.map((o, i) => ({ ...o, isCorrect: i === idx })));
                    }}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: opt.isCorrect ? '#10b981' : 'var(--bg-elevated)',
                      color: '#ffffff',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                    title="Doğru cevap olarak seç"
                  >
                    {opt.key}
                  </button>
                  <input
                    type="text"
                    required
                    placeholder={`${opt.key} Seçeneği metni...`}
                    value={opt.text}
                    onChange={(e) => {
                      const updated = [...options];
                      updated[idx].text = e.target.value;
                      setOptions(updated);
                    }}
                    style={{ flex: 1 }}
                  />
                  {opt.isCorrect && <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 600 }}>Doğru Cevap</span>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Detaylı Çözüm Açıklaması:</label>
            <textarea
              rows={3}
              placeholder="Öğrencinin soruyu neden doğru/yanlış yaptığını kavrayabilmesi için çözüm açıklaması..."
              value={qExplanation}
              onChange={(e) => setQExplanation(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div className="grid-3">
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Zorluk Derecesi:</label>
              <select
                value={qDifficulty}
                onChange={(e) => setQDifficulty(e.target.value as any)}
                style={{ width: '100%' }}
              >
                <option value="kolay">Kolay</option>
                <option value="orta">Orta</option>
                <option value="zor">Zor</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Çıkmış Soru mu?</label>
              <div style={{ display: 'flex', alignItems: 'center', height: '42px', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={qIsPast}
                  onChange={(e) => setQIsPast(e.target.checked)}
                  style={{ width: '18px', height: '18px' }}
                />
                <span style={{ fontSize: '0.85rem' }}>ÖSYM / MEB Çıkmış Soru</span>
              </div>
            </div>

            {qIsPast && (
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Sınav Yılı:</label>
                <input
                  type="number"
                  value={qPastYear}
                  onChange={(e) => setQPastYear(e.target.value)}
                  style={{ width: '100%' }}
                />
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '12px', marginTop: '10px' }}>
            <PlusCircle size={18} />
            <span>Soruyu Kaydet ve Yayınla</span>
          </button>
        </form>
      )}

      {/* Konu Ekleme Formu */}
      {activeAdminTab === 'topic' && (
        <form onSubmit={handleCreateTopic} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Yeni Konu ve İçerik Ekle</h2>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Bağlı Olduğu Ünite:</label>
            <select
              value={tUnitId}
              onChange={(e) => setTUnitId(e.target.value)}
              style={{ width: '100%' }}
            >
              {units.map((u) => (
                <option key={u.id} value={u.id}>{u.title}</option>
              ))}
            </select>
          </div>

          <div className="grid-2">
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Konu Başlığı:</label>
              <input
                type="text"
                required
                placeholder="Örn: Bilişsel Gelişim Kuramı"
                value={tTitle}
                onChange={(e) => setTTitle(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Tahmini Okuma Süresi (Dk):</label>
              <input
                type="number"
                min="5"
                max="120"
                value={tMinutes}
                onChange={(e) => setTMinutes(parseInt(e.target.value) || 25)}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Konu Genel Bakış / Giriş:</label>
            <textarea
              rows={3}
              placeholder="Konunun kapsamı ve kazanımları..."
              value={tOverview}
              onChange={(e) => setTOverview(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Konu Özeti:</label>
            <textarea
              rows={2}
              placeholder="Konunun kısa hatırlatma özeti..."
              value={tSummary}
              onChange={(e) => setTSummary(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '12px' }}>
            <PlusCircle size={18} />
            <span>Konuyu ve İçeriğini Oluştur</span>
          </button>
        </form>
      )}

      {/* Ünite Ekleme Formu */}
      {activeAdminTab === 'unit' && (
        <form onSubmit={handleCreateUnit} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Yeni Ünite Oluştur</h2>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Ders:</label>
            <select
              value={uSubjectId}
              onChange={(e) => setUSubjectId(e.target.value)}
              style={{ width: '100%' }}
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Ünite Başlığı:</label>
            <input
              type="text"
              required
              placeholder="Örn: Öğrenme Psikolojisi"
              value={uTitle}
              onChange={(e) => setUTitle(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Ünite Açıklaması:</label>
            <textarea
              rows={3}
              placeholder="Bu ünitede yer alacak konuların kapsamı..."
              value={uDesc}
              onChange={(e) => setUDesc(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '12px' }}>
            <PlusCircle size={18} />
            <span>Üniteyi Kaydet</span>
          </button>
        </form>
      )}

      {/* Ders Ekleme Formu */}
      {activeAdminTab === 'subject' && (
        <form onSubmit={handleCreateSubject} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Yeni Ders Kategorisi Ekle</h2>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Ders Adı:</label>
            <input
              type="text"
              required
              placeholder="Örn: Alan Bilgisi & Özel Öğretim"
              value={sTitle}
              onChange={(e) => setSTitle(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>Ders Açıklaması:</label>
            <textarea
              rows={3}
              placeholder="Dersin genel açıklaması..."
              value={sDesc}
              onChange={(e) => setSDesc(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '12px' }}>
            <PlusCircle size={18} />
            <span>Ders Kategorisini Oluştur</span>
          </button>
        </form>
      )}
    </div>
  );
};
