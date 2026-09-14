import type { SubjectStudyPlan } from '../types/database';

export const AGS_STUDY_PLANS: SubjectStudyPlan[] = [
  // 1. SÖZEL YETENEK (%18.75 - 5 ANA BAŞLIK)
  {
    id: 'plan-sozel',
    subject_id: 'sozel-yetenek',
    title: 'Sözel Yetenek',
    short_title: 'Sözel',
    icon: 'BrainCircuit',
    weight_percentage: 18.75,
    question_count_in_ags: 15,
    description: 'Sözel Yetenek 5 ana konu ve soru çalışma takip listesi.',
    sections: [
      {
        id: 'sec-sozel-main',
        title: 'Sözel Yetenek Konu Çalışmaları',
        description: 'Tamamladığınız konunun kutucuğunu işaretleyin (5 Görev = %100)',
        tasks: [
          { id: 'st-sozel-1', text: 'Sözcükte Anlam', category: 'question_type' },
          { id: 'st-sozel-2', text: 'Cümlede Anlam', category: 'question_type' },
          { id: 'st-sozel-3', text: 'Anlatımın Oluşması', category: 'question_type' },
          { id: 'st-sozel-4', text: 'Paragrafta Anlam', category: 'question_type' },
          { id: 'st-sozel-5', text: 'Sözel Mantık', category: 'question_type' },
        ],
      },
    ],
    videos: [
      {
        id: 'vid-sozel-1',
        title: 'Paragrafta Anlam ve Soru Tipleri',
        channel: 'AGS Hazırlık',
        duration: '45 dk',
        url: 'https://www.youtube.com/results?search_query=ags+paragrafta+anlam',
        note: 'Ana fikir ve çeldirici eleme taktikleri',
        taskId: 'task-vid-sozel-1',
      },
      {
        id: 'vid-sozel-2',
        title: 'Sözel Mantık Tablo Kurma ve Çözüm',
        channel: 'AGS Hazırlık',
        duration: '50 dk',
        url: 'https://www.youtube.com/results?search_query=ags+sozel+mantik+tablo+kurma',
        note: 'Sıralama ve yerleştirme kalıpları',
        taskId: 'task-vid-sozel-2',
      },
    ],
    exams: [
      { id: 'ex-sozel-1', title: 'Sözel Yetenek Branş Denemesi (15 Soru)', question_count: 15, duration_mins: 20, taskId: 'task-ex-sozel-1' },
    ],
  },
  // 2. SAYISAL YETENEK (%18.75 - 3 ANA BAŞLIK)
  {
    id: 'plan-sayisal',
    subject_id: 'sayisal-yetenek',
    title: 'Sayısal Yetenek',
    short_title: 'Sayısal',
    icon: 'TrendingUp',
    weight_percentage: 18.75,
    question_count_in_ags: 15,
    description: 'Sayısal Yetenek 3 ana konu ve soru çalışma takip listesi.',
    sections: [
      {
        id: 'sec-say-main',
        title: 'Sayısal Yetenek Konu Çalışmaları',
        description: 'Çalışmanızı tamamladığınız konuyu işaretleyin (3 Görev = %100)',
        tasks: [
          { id: 'st-say-1', text: 'Temel Matematik', category: 'question_type' },
          { id: 'st-say-2', text: 'Grafik ve Tablo Yorumlama', category: 'question_type' },
          { id: 'st-say-3', text: 'Mantıksal Muhakeme Problemleri', category: 'question_type' },
        ],
      },
    ],
    videos: [
      {
        id: 'vid-say-1',
        title: 'Sayılar ve Bölünebilme — Temel Net Garantileme',
        channel: 'AGS Hazırlık Akademisi',
        duration: '50 dk',
        url: 'https://www.youtube.com/results?search_query=ags+temel+matematik+soru+cozumu',
        note: 'Sayı basamakları, EBOB-EKOK ve işlem kuralları',
        taskId: 'task-vid-say-1',
      },
      {
        id: 'vid-say-2',
        title: 'AGS Problemler ve Mantıksal Muhakeme — Hızlı Çözüm Yolları',
        channel: 'AGS Hazırlık Akademisi',
        duration: '65 dk',
        url: 'https://www.youtube.com/results?search_query=ags+problemler+kisa+yollar',
        note: 'Denklem kurma, grafik okuma ve mantık sorularında pratik yaklaşım',
        taskId: 'task-vid-say-2',
      },
      {
        id: 'vid-say-3',
        title: 'Tablo ve Grafik Yorumlama',
        channel: 'AGS Hazırlık Akademisi',
        duration: '45 dk',
        url: 'https://www.youtube.com/results?search_query=ags+tablo+ve+grafik+yorumlama',
        note: 'Konu anlatım videosu — Daire, sütun ve çizgi grafik analizleri',
        taskId: 'task-vid-say-3',
      },
    ],
    exams: [
      { id: 'ex-say-1', title: 'Sayısal Yetenek Branş Denemesi (15 Soru)', question_count: 15, duration_mins: 25, taskId: 'task-ex-say-1' },
    ],
  },

  // 3. TARİH (%7.5 - 4 ANA BAŞLIK)
  {
    id: 'plan-tarih',
    subject_id: 'tarih',
    title: 'Tarih',
    short_title: 'Tarih',
    icon: 'Landmark',
    weight_percentage: 7.5,
    question_count_in_ags: 6,
    description: 'Tarih 4 ana konu çalışma ve soru takip listesi.',
    sections: [
      {
        id: 'sec-tar-main',
        title: 'Tarih Konu Çalışmaları',
        description: 'Çalışmanızı tamamladığınız konuyu işaretleyin (4 Görev = %100)',
        tasks: [
          {
            id: 'st-tr-1',
            text: 'Osmanlı Öncesi Türk Devletleri Tarihi',
            description: 'Siyasal, sosyal, ekonomik ve kültürel gelişmeler',
            category: 'concept',
          },
          {
            id: 'st-tr-2',
            text: 'Osmanlı Tarihi',
            description: 'XIII. yüzyıldan XX. yüzyıl başlarına kadar yaşanan siyasal, sosyal, ekonomik ve kültürel gelişmeler',
            category: 'concept',
          },
          {
            id: 'st-tr-3',
            text: 'Atatürk İlkeleri ve İnkılap Tarihi',
            description: 'XX. yüzyıl başından XX. yüzyılın ortalarına kadar, Osmanlı Devleti’nin yıkılışından İkinci Dünya Savaşı’nın sonuna kadar Türkiye tarihinde yaşanan siyasal, sosyal, ekonomik ve kültürel gelişmeler',
            category: 'concept',
          },
          {
            id: 'st-tr-4',
            text: 'Çağdaş Türk ve Dünya Tarihi',
            description: 'XX. yüzyılın başlangıcından günümüze kadar dünyada; İkinci Dünya Savaşı’ndan günümüze kadar Türkiye’de yaşanan siyasal, sosyal, ekonomik ve kültürel gelişmeler',
            category: 'concept',
          },
        ],
      },
    ],
    videos: [
      {
        id: 'vid-tr-1',
        title: 'İslamiyet Öncesi ve İlk Türk-İslam Devletleri Full Tekrar',
        channel: 'AGS Hazırlık Akademisi',
        duration: '60 dk',
        url: 'https://www.youtube.com/results?search_query=ags+tarih+islamiyet+oncesi+ve+turk+islam',
        note: 'Devlet teşkilatı, hükümdarlık sembolleri ve ilk eserler',
        taskId: 'task-vid-tr-1',
      },
      {
        id: 'vid-tr-2',
        title: 'Osmanlı Kültür-Medeniyet ve Islahatlar Hap Bilgiler',
        channel: 'AGS Hazırlık Akademisi',
        duration: '55 dk',
        url: 'https://www.youtube.com/results?search_query=ags+osmanli+kultur+ve+medeniyet',
        note: 'Divan üyeleri, eyaletler ve Tanzimat-Meşrutiyet reformları',
        taskId: 'task-vid-tr-2',
      },
      {
        id: 'vid-tr-3',
        title: 'Millî Mücadele ve Atatürk İlkeleri — Garanti Soru Kalıpları',
        channel: 'AGS Hazırlık Akademisi',
        duration: '50 dk',
        url: 'https://www.youtube.com/results?search_query=ags+inkilap+tarihi+ve+ataturk+ilkeleri',
        note: 'Genelgeler, kongreler, antlaşmalar ve ilke eşleştirmeleri',
        taskId: 'task-vid-tr-3',
      },
    ],
    exams: [
      { id: 'ex-tr-1', title: 'Tarih Branş Denemesi — 1 (6 Soru)', question_count: 6, duration_mins: 10, taskId: 'task-ex-tr-1' },
      { id: 'ex-tr-2', title: 'Tarih Branş Denemesi — 2 (6 Soru)', question_count: 6, duration_mins: 10, taskId: 'task-ex-tr-2' },
      { id: 'ex-tr-3', title: 'Tarih Genel Tarama Denemesi (12 Soru)', question_count: 12, duration_mins: 15, taskId: 'task-ex-tr-3' },
    ],
  },

  // 4. TÜRKİYE COĞRAFYASI (%7.5 - 2 ANA BAŞLIK)
  {
    id: 'plan-cografya',
    subject_id: 'cografya',
    title: 'Türkiye Coğrafyası',
    short_title: 'Coğrafya',
    icon: 'Globe2',
    weight_percentage: 7.5,
    question_count_in_ags: 6,
    description: 'Türkiye Coğrafyası 2 ana konu çalışma ve takip listesi.',
    sections: [
      {
        id: 'sec-cog-main',
        title: 'Coğrafya Konu Çalışmaları',
        description: 'Çalışmanızı tamamladığınız konuyu işaretleyin (2 Görev = %100)',
        tasks: [
          { id: 'st-cg-1', text: 'Türkiye Fiziki Coğrafyası', category: 'concept' },
          { id: 'st-cg-2', text: 'Türkiye Beşerî ve Ekonomik Coğrafyası', category: 'concept' },
        ],
      },
    ],
    videos: [
      {
        id: 'vid-cg-1',
        title: 'Türkiye Fiziki Coğrafyası — Harita Üzerinde Yer Şekilleri & İklim',
        channel: 'AGS Hazırlık Akademisi',
        duration: '45 dk',
        url: 'https://www.youtube.com/results?search_query=ags+turkiye+cografyasi+harita+tekrar',
        note: 'Dağlar, platolar, ovalar ve iklim grafiği okuma',
        taskId: 'task-vid-cg-1',
      },
      {
        id: 'vid-cg-2',
        title: 'Türkiye Madenleri, Sanayisi ve Tarımı — Soru Çözüm Analizi',
        channel: 'AGS Hazırlık Akademisi',
        duration: '50 dk',
        url: 'https://www.youtube.com/results?search_query=ags+cografya+madenler+ve+sanayi',
        note: 'Maden yatakları, enerji santralleri ve bölgesel kalkınma projeleri',
        taskId: 'task-vid-cg-2',
      },
    ],
    exams: [
      { id: 'ex-cg-1', title: 'Coğrafya Branş Denemesi — 1 (6 Soru)', question_count: 6, duration_mins: 10, taskId: 'task-ex-cg-1' },
      { id: 'ex-cg-2', title: 'Coğrafya Branş Denemesi — 2 (6 Soru)', question_count: 6, duration_mins: 10, taskId: 'task-ex-cg-2' },
    ],
  },

  // 5. EĞİTİM BİLİMLERİ & TÜRK MİLLÎ EĞİTİM SİSTEMİ (%37.5 - 11 ANA BAŞLIK)
  {
    id: 'plan-egitim',
    subject_id: 'egitim-bilimleri',
    title: 'Eğitim Bilimleri & TMES',
    short_title: 'Eğitim Bilimleri',
    icon: 'GraduationCap',
    weight_percentage: 37.5,
    question_count_in_ags: 30,
    description: 'Eğitim Bilimleri ve Türk Millî Eğitim Sistemi 11 ana konu çalışma ve takip listesi.',
    sections: [
      {
        id: 'sec-eb-main',
        title: 'Eğitim Bilimleri ve TMES Konu Çalışmaları',
        description: 'Çalışmanızı tamamladığınız konuyu işaretleyin (11 Görev = %100)',
        tasks: [
          { id: 'st-eb-1', text: 'Eğitim Tarihi, Felsefi, Toplumsal, Ekonomik ve Politik Temelleri', category: 'concept' },
          { id: 'st-eb-2', text: 'Öğretim Yöntem ve Teknikleri', category: 'concept' },
          { id: 'st-eb-3', text: 'Sınıf Yönetimi', category: 'concept' },
          { id: 'st-eb-4', text: 'Program Okuryazarlığı', category: 'concept' },
          { id: 'st-eb-5', text: 'Eğitimde Ölçme ve Değerlendirme', category: 'concept' },
          { id: 'st-eb-6', text: 'Öğrenme Psikolojisi', category: 'concept' },
          { id: 'st-eb-7', text: 'Gelişim Psikolojisi', category: 'concept' },
          { id: 'st-eb-8', text: 'Rehberlik', category: 'concept' },
          { id: 'st-eb-9', text: 'Eğitim ve Öğretim Teknolojileri', category: 'concept' },
          { id: 'st-eb-10', text: 'Türk Millî Eğitim Sisteminin Genel Yapısı', category: 'concept' },
          { id: 'st-eb-11', text: 'Türkiye Yüzyılı Maarif Modeli', category: 'concept' },
        ],
      },
    ],
    videos: [
      {
        id: 'vid-eb-1',
        title: 'Öğrenme ve Gelişim Psikolojisi — Hap Bilgiler ve Vaka Çözümü',
        channel: 'AGS Hazırlık Akademisi',
        duration: '60 dk',
        url: 'https://www.youtube.com/results?search_query=ags+ogrenme+ve+gelisim+psikolojisi',
        note: 'Edimsel koşullanma tarifeleri, Piaget ve Kohlberg evreleri',
        taskId: 'task-vid-eb-1',
      },
      {
        id: 'vid-eb-2',
        title: 'ÖYT Yöntem ve Teknikler — Karıştırılan Kavramlar Ayrımı',
        channel: 'AGS Hazırlık Akademisi',
        duration: '55 dk',
        url: 'https://www.youtube.com/results?search_query=ags+oyt+ogretim+yontem+ve+teknikleri',
        note: 'İstasyon, akvaryum, konuşma halkası, vızıltı grupları ayrımı',
        taskId: 'task-vid-eb-2',
      },
      {
        id: 'vid-eb-3',
        title: 'Ölçme Değerlendirme & İstatistik — Z-T Puanı ve Madde Analizi',
        channel: 'AGS Hazırlık Akademisi',
        duration: '45 dk',
        url: 'https://www.youtube.com/results?search_query=ags+olcme+ve+degerlendirme+istatistik',
        note: 'Formülsüz soru çözümü ve grafik yorumlama',
        taskId: 'task-vid-eb-3',
      },
      {
        id: 'vid-eb-4',
        title: 'Türkiye Yüzyılı Maarif Modeli ve TMES — 2026 AGS Özel',
        channel: 'AGS Hazırlık Akademisi',
        duration: '40 dk',
        url: 'https://www.youtube.com/results?search_query=turkiye+yuzyili+maarif+modeli+ags',
        note: 'Erdem-Değer-Eylem modeli, beceri temelli öğretim ve 1739 kanun',
        taskId: 'task-vid-eb-4',
      },
    ],
    exams: [
      { id: 'ex-eb-1', title: 'Eğitim Bilimleri & TMES Branş Denemesi — 1 (30 Soru)', question_count: 30, duration_mins: 40, taskId: 'task-ex-eb-1' },
      { id: 'ex-eb-2', title: 'Eğitim Bilimleri & TMES Branş Denemesi — 2 (30 Soru)', question_count: 30, duration_mins: 40, taskId: 'task-ex-eb-2' },
      { id: 'ex-eb-3', title: 'Türkiye Yüzyılı Maarif Modeli Özel Tarama Denemesi (15 Soru)', question_count: 15, duration_mins: 20, taskId: 'task-ex-eb-3' },
    ],
  },

  // 6. MEVZUAT (%10 - 5 ANA BAŞLIK)
  {
    id: 'plan-mevzuat',
    subject_id: 'mevzuat',
    title: 'Mevzuat',
    short_title: 'Mevzuat',
    icon: 'ShieldCheck',
    weight_percentage: 10.0,
    question_count_in_ags: 8,
    description: 'Mevzuat 5 ana konu çalışma ve soru takip listesi.',
    sections: [
      {
        id: 'sec-mev-main',
        title: 'Mevzuat Konu Çalışmaları',
        description: 'Çalışmanızı tamamladığınız konuyu işaretleyin (5 Görev = %100)',
        tasks: [
          {
            id: 'st-mv-1',
            text: 'Türkiye Cumhuriyeti Anayasası',
            description: 'Kanun Numarası: 2709 | Kabul Tarihi: 18/10/1982',
            category: 'concept',
          },
          {
            id: 'st-mv-2',
            text: 'İnsan Hakları Hukuku',
            category: 'concept',
          },
          {
            id: 'st-mv-3',
            text: '1739 sayılı Millî Eğitim Temel Kanunu',
            category: 'concept',
          },
          {
            id: 'st-mv-4',
            text: '222 sayılı İlköğretim ve Eğitim Kanunu',
            category: 'concept',
          },
          {
            id: 'st-mv-5',
            text: '7528 sayılı Öğretmenlik Mesleği Kanunu',
            category: 'concept',
          },
        ],
      },
    ],
    videos: [
      {
        id: 'vid-mv-1',
        title: '7528 Sayılı Öğretmenlik Mesleği Kanunu & Akademi — Maddeler ve Tuzaklar',
        channel: 'AGS Hazırlık Akademisi',
        duration: '40 dk',
        url: 'https://www.youtube.com/results?search_query=7528+ogretmenlik+meslegi+kanunu+ags',
        note: 'Milli Eğitim Akademisi kabul, eğitim ve disiplin maddeleri analizi',
        taskId: 'task-vid-mv-1',
      },
      {
        id: 'vid-mv-2',
        title: '657 Sayılı DMK & Anayasa Madde 42 — Özet ve Çıkabilecek Sorular',
        channel: 'AGS Hazırlık Akademisi',
        duration: '45 dk',
        url: 'https://www.youtube.com/results?search_query=657+dmk+ve+anayasa+ags+mevzuat',
        note: 'Disiplin cezaları yetkili amirleri ve itiraz süreleri tablosu',
        taskId: 'task-vid-mv-2',
      },
    ],
    exams: [
      { id: 'ex-mv-1', title: 'Mevzuat Branş Denemesi — 1 (8 Soru)', question_count: 8, duration_mins: 12, taskId: 'task-ex-mv-1' },
      { id: 'ex-mv-2', title: 'Mevzuat Branş Denemesi — 2 (8 Soru)', question_count: 8, duration_mins: 12, taskId: 'task-ex-mv-2' },
    ],
  },
];
