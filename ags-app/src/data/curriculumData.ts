import type {
  Subject,
  Unit,
  Topic,
  TopicContent,
  TopicExample,
  SelfCheckQuestion,
  Question,
  MiniExam,
  MockExam,
} from '../types/database';

export const AGS_SUBJECTS: Subject[] = [
  {
    id: 'sozel-yetenek',
    title: 'Sözel Yetenek',
    icon: 'Brain',
    description: 'Sözcükte ve Cümlede Anlam, Paragraf Yapısı, Anlatım Biçimleri ve Sözel Mantık.',
    order_index: 1,
  },
  {
    id: 'sayisal-yetenek',
    title: 'Sayısal Yetenek',
    icon: 'TrendingUp',
    description: 'Temel Matematik, Sayılar, Problemler, Sayısal Mantık ve Akıl Yürütme.',
    order_index: 2,
  },
  {
    id: 'tarih',
    title: 'Tarih',
    icon: 'Globe',
    description: 'İlk Türk Devletleri, Türk-İslam Tarihi, Osmanlı Devleti ve Kültür-Medeniyeti.',
    order_index: 3,
  },
  {
    id: 'cografya',
    title: 'Türkiye Coğrafyası',
    icon: 'Globe',
    description: "Türkiye'nin Fiziki, Beşeri ve Ekonomik Coğrafyası, Harita ve Tablo Yorumlama.",
    order_index: 4,
  },
  {
    id: 'egitim-bilimleri',
    title: 'Eğitim Bilimleri',
    icon: 'GraduationCap',
    description: 'Eğitimin Temelleri, Felsefeleri, Öğrenme Psikolojisi, Gelişim Psikolojisi ve Öğretim.',
    order_index: 5,
  },
  {
    id: 'milli-egitim-sistemi',
    title: 'Türk Millî Eğitim Sistemi',
    icon: 'BookOpen',
    description: 'Türk Millî Eğitiminin Temelleri, MEB Teşkilat Yapısı ve Türkiye Yüzyılı Maarif Modeli.',
    order_index: 6,
  },
  {
    id: 'mevzuat',
    title: 'Mevzuat',
    icon: 'Scale',
    description: '7528 Sayılı Öğretmenlik Mesleği Kanunu, 1739 Sayılı Kanun, Anayasa, 657 ve 4483.',
    order_index: 7,
  },
];

export const AGS_UNITS: Unit[] = [
  // 1. SÖZEL YETENEK
  {
    id: 'unit-sozel-1',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 1 — SÖZCÜKTE VE CÜMLEDE ANLAM',
    description: 'Sözcük ve cümle düzeyinde anlam ilişkileri, deyimler, atasözleri ve anlam olayları.',
    order_index: 1,
  },
  {
    id: 'unit-sozel-2',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 2 — PARAGRAF VE SÖZEL AKIL YÜRÜTME',
    description: 'Paragrafın yapısı, ana/yardımcı düşünceler, anlatım biçimleri ve sözel mantık.',
    order_index: 2,
  },

  // 2. SAYISAL YETENEK
  {
    id: 'unit-sayisal-1',
    subject_id: 'sayisal-yetenek',
    title: 'ÜNİTE 1 — TEMEL MATEMATİK VE SAYILAR',
    description: 'Temel kavramlar, sayı kümeleri, basamak analizi, bölünebilme, asal sayılar, EBOB-EKOK, üslü-köklü sayılar ve oran-orantı.',
    order_index: 1,
  },
  {
    id: 'unit-sayisal-2',
    subject_id: 'sayisal-yetenek',
    title: 'ÜNİTE 2 — PROBLEMLER VE SAYISAL AKIL YÜRÜTME',
    description: 'Denklemler, eşitsizlikler, sayı-kesir-yaş-yüzde problemleri, grafik yorumlama ve sayısal mantık.',
    order_index: 2,
  },

  // 3. TARİH
  {
    id: 'unit-tarih-1',
    subject_id: 'tarih',
    title: 'ÜNİTE 1 — İLK TÜRK DEVLETLERİ VE TÜRK-İSLAM TARİHİ',
    description: 'İslamiyet öncesi Orta Asya Türk tarihi, devlet yönetimi, kültür-medeniyet ve ilk Türk-İslam devletleri.',
    order_index: 1,
  },
  {
    id: 'unit-tarih-2',
    subject_id: 'tarih',
    title: 'ÜNİTE 2 — OSMANLI DEVLETİ',
    description: 'Osmanlı Devleti kuruluşu, yükselmesi, yönetim-ordu-toplum teşkilatı, ıslahatlar ve dağılma süreci.',
    order_index: 2,
  },

  // 4. TÜRKİYE COĞRAFYASI
  {
    id: 'unit-cografya-1',
    subject_id: 'cografya',
    title: "ÜNİTE 1 — TÜRKİYE'NİN COĞRAFİ KONUMU VE FİZİKİ COĞRAFYASI",
    description: "Matematik/özel konum, yer şekilleri (dağ, plato, ova, akarsu, göl), iklim, bitki örtüsü ve doğal afetler.",
    order_index: 1,
  },
  {
    id: 'unit-cografya-2',
    subject_id: 'cografya',
    title: "ÜNİTE 2 — TÜRKİYE'NİN BEŞERÎ VE EKONOMİK COĞRAFYASI",
    description: 'Nüfus, göç, yerleşme, tarım, hayvancılık, madenler, enerji, sanayi, ulaşım, ticaret ve bölgesel özellikler.',
    order_index: 2,
  },

  // 5. EĞİTİM BİLİMLERİ
  {
    id: 'unit-eb-1',
    subject_id: 'egitim-bilimleri',
    title: 'ÜNİTE 1 — EĞİTİMİN TEMELLERİ VE ÖĞRENME PSİKOLOJİSİ',
    description: 'Eğitimin felsefi temelleri, felsefe akımları, eğitim felsefeleri ve davranışçı/bilişsel öğrenme kuramları.',
    order_index: 1,
  },
  {
    id: 'unit-eb-2',
    subject_id: 'egitim-bilimleri',
    title: 'ÜNİTE 2 — GELİŞİM PSİKOLOJİSİ VE ÖĞRETİM',
    description: 'Gelişim ilkeleri, bilişsel/ahlak/psikososyal gelişim, öğretim stratejileri, yöntem-teknikleri ve ölçme temelleri.',
    order_index: 2,
  },

  // 6. TÜRK MİLLÎ EĞİTİM SİSTEMİ
  {
    id: 'unit-tmes-1',
    subject_id: 'milli-egitim-sistemi',
    title: 'ÜNİTE 1 — TÜRK MİLLÎ EĞİTİM SİSTEMİNİN TEMELLERİ',
    description: 'Millî eğitimin genel amaç ve ilkeleri, örgün/yaygın eğitim yapısı, MEB teşkilatı ve yönetim.',
    order_index: 1,
  },
  {
    id: 'unit-tmes-2',
    subject_id: 'milli-egitim-sistemi',
    title: 'ÜNİTE 2 — TÜRK EĞİTİM SİSTEMİNDE GÜNCEL YAKLAŞIMLAR (TÜRKİYE YÜZYILI MAARİF MODELİ)',
    description: 'Maarif Modeli yaklaşımı, erdem-değer-eylem çerçevesi, yetkinlikler, beceriler ve farklılaştırılmış öğretim.',
    order_index: 2,
  },

  // 7. MEVZUAT
  {
    id: 'unit-mevzuat-1',
    subject_id: 'mevzuat',
    title: 'ÜNİTE 1 — 7528 SAYILI ÖĞRETMENLİK MESLEĞİ KANUNU VE ANAYASA',
    description: 'ÖMK esasları, Milli Eğitim Akademisi, kariyer basamakları, disiplin hükümleri ve Anayasa eğitim maddeleri.',
    order_index: 1,
  },
  {
    id: 'unit-mevzuat-2',
    subject_id: 'mevzuat',
    title: 'ÜNİTE 2 — 1739 SAYILI MİLLÎ EĞİTİM TEMEL KANUNU VE DİĞER TEMEL MEVZUAT',
    description: '1739 Sayılı Kanun ilkeleri, 657 Sayılı DMK öğretmen hükümleri ve 4483 Sayılı Kanun yargılama usulleri.',
    order_index: 2,
  },
];

// Helper to create full topic list matching exact user request
const rawTopicsConfig = [
  // 1. SÖZEL YETENEK - ÜNİTE 1 (14 Topics)
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-1', title: 'Sözcükte Anlam', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-2', title: 'Gerçek, Mecaz ve Terim Anlam', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-3', title: 'Eş Anlam, Zıt Anlam ve Yakın Anlam', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-4', title: 'Somut ve Soyut Anlam', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-5', title: 'Genel ve Özel Anlam', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-6', title: 'Nitel ve Nicel Anlam', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-7', title: 'Sözcüğün Bağlamdaki Anlamı', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-8', title: 'Deyimler ve Atasözleri', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-9', title: 'Cümlede Anlam', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-10', title: 'Cümlenin Yorumu', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-11', title: 'Cümlede Kesinlik, Olasılık, Varsayım ve Tahmin', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-12', title: 'Neden-Sonuç, Amaç-Sonuç ve Koşul-Sonuç', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-13', title: 'Karşılaştırma ve Karşıtlık', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-14', title: 'Cümleler Arası Anlam İlişkileri', mins: 25 },

  // 1. SÖZEL YETENEK - ÜNİTE 2 (15 Topics)
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-1', title: 'Paragrafın Konusu', mins: 20 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-2', title: 'Paragrafın Ana Düşüncesi', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-3', title: 'Yardımcı Düşünceler', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-4', title: 'Paragrafın Başlığı', mins: 15 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-5', title: 'Paragrafın Yapısı', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-6', title: 'Giriş, Gelişme ve Sonuç Bölümleri', mins: 20 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-7', title: 'Paragraf Tamamlama', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-8', title: 'Akışı Bozan Cümle', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-9', title: 'Cümlelerin Yerini Belirleme', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-10', title: 'Paragrafta Anlatım Biçimleri', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-11', title: 'Paragrafta Düşünceyi Geliştirme Yolları', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-12', title: 'Sözel Mantık', mins: 30 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-13', title: 'Sıralama ve Yerleştirme', mins: 30 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-14', title: 'Koşullu Sözel Akıl Yürütme', mins: 30 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-15', title: 'Tablo ve Şema Yorumlama', mins: 25 },

  // 2. SAYISAL YETENEK - ÜNİTE 1 (15 Topics)
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-1', title: 'Temel Kavramlar', mins: 25 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-2', title: 'Sayı Kümeleri', mins: 20 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-3', title: 'Doğal Sayılar', mins: 20 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-4', title: 'Tam Sayılar', mins: 20 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-5', title: 'Rasyonel Sayılar', mins: 25 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-6', title: 'Ondalık Sayılar', mins: 20 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-7', title: 'Basamak Kavramı', mins: 25 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-8', title: 'Bölünebilme Kuralları', mins: 25 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-9', title: 'Asal Sayılar', mins: 20 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-10', title: 'Asal Çarpanlara Ayırma', mins: 25 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-11', title: 'EBOB ve EKOK', mins: 30 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-12', title: 'Mutlak Değer', mins: 25 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-13', title: 'Üslü İfadeler', mins: 30 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-14', title: 'Köklü İfadeler', mins: 30 },
  { unitId: 'unit-sayisal-1', id: 'topic-sayisal-1-15', title: 'Oran ve Orantı', mins: 25 },

  // 2. SAYISAL YETENEK - ÜNİTE 2 (15 Topics)
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-1', title: 'Birinci Dereceden Denklemler', mins: 25 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-2', title: 'Eşitsizlikler', mins: 25 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-3', title: 'Sayı Problemleri', mins: 30 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-4', title: 'Kesir Problemleri', mins: 25 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-5', title: 'Yaş Problemleri', mins: 25 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-6', title: 'Yüzde Problemleri', mins: 30 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-7', title: 'Kâr-Zarar Problemleri', mins: 25 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-8', title: 'Faiz Problemleri', mins: 20 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-9', title: 'Karışım Problemleri', mins: 25 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-10', title: 'İşçi-Havuz Problemleri', mins: 25 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-11', title: 'Hareket Problemleri', mins: 30 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-12', title: 'Grafik ve Tablo Problemleri', mins: 30 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-13', title: 'Rutin Olmayan Problemler', mins: 30 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-14', title: 'Sayısal Mantık', mins: 35 },
  { unitId: 'unit-sayisal-2', id: 'topic-sayisal-2-15', title: 'Sayısal Akıl Yürütme', mins: 35 },

  // 3. TARİH - ÜNİTE 1 (15 Topics)
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-1', title: 'İslamiyet Öncesi Türk Tarihi', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-2', title: "Orta Asya'da Kurulan İlk Türk Devletleri", mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-3', title: 'Büyük Hun Devleti', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-4', title: 'Göktürkler', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-5', title: 'Uygurlar', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-6', title: 'Türklerde Devlet Yönetimi', mins: 30 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-7', title: 'Türklerde Sosyal ve Ekonomik Hayat', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-8', title: 'Türklerde Hukuk', mins: 20 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-9', title: 'Türklerde Kültür ve Medeniyet', mins: 30 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-10', title: "Türklerin İslamiyet'i Kabulü", mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-11', title: 'İlk Türk-İslam Devletleri', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-12', title: 'Karahanlılar', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-13', title: 'Gazneliler', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-14', title: 'Büyük Selçuklu Devleti', mins: 30 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-15', title: 'Türk-İslam Kültür ve Medeniyeti', mins: 30 },

  // 3. TARİH - ÜNİTE 2 (15 Topics)
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-1', title: "Osmanlı Devleti'nin Kuruluşu", mins: 25 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-2', title: "Osmanlı Devleti'nin Yükselme Dönemi", mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-3', title: "Osmanlı Devleti'nde Yönetim", mins: 25 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-4', title: "Osmanlı Devleti'nde Merkez Teşkilatı", mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-5', title: "Osmanlı Devleti'nde Taşra Teşkilatı", mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-6', title: "Osmanlı Devleti'nde Ordu", mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-7', title: "Osmanlı Devleti'nde Toplum Yapısı", mins: 25 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-8', title: 'Osmanlı Ekonomisi', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-9', title: 'Osmanlı Hukuk Sistemi', mins: 25 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-10', title: 'Osmanlı Eğitim ve Bilim Hayatı', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-11', title: 'Osmanlı Kültür ve Sanatı', mins: 25 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-12', title: "Osmanlı Devleti'nde Duraklama ve Gerileme", mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-13', title: "Osmanlı Devleti'nde Islahatlar", mins: 35 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-14', title: "Osmanlı Devleti'nin Dağılma Süreci", mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-15', title: "Osmanlı Devleti'nin Son Dönemi", mins: 30 },

  // 4. TÜRKİYE COĞRAFYASI - ÜNİTE 1 (15 Topics)
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-1', title: "Türkiye'nin Matematik Konumu", mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-2', title: "Türkiye'nin Özel Konumu", mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-3', title: "Türkiye'nin Jeopolitik Konumu", mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-4', title: "Türkiye'nin Coğrafi Bölgeleri", mins: 30 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-5', title: "Türkiye'nin Yer Şekilleri", mins: 30 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-6', title: 'Dağlar', mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-7', title: 'Platolar', mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-8', title: 'Ovalar', mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-9', title: 'Akarsular', mins: 30 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-10', title: 'Göller', mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-11', title: 'Denizler', mins: 20 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-12', title: "Türkiye'de İklim", mins: 30 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-13', title: "Türkiye'de Bitki Örtüsü", mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-14', title: "Türkiye'de Toprak Tipleri", mins: 25 },
  { unitId: 'unit-cografya-1', id: 'topic-cografya-1-15', title: "Türkiye'nin Doğal Afetleri", mins: 25 },

  // 4. TÜRKİYE COĞRAFYASI - ÜNİTE 2 (15 Topics)
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-1', title: "Türkiye'de Nüfus", mins: 25 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-2', title: 'Nüfusun Dağılışı', mins: 25 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-3', title: 'Nüfus Yoğunluğu', mins: 20 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-4', title: "Türkiye'de Göç", mins: 25 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-5', title: "Türkiye'de Yerleşme", mins: 25 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-6', title: "Türkiye'de Tarım", mins: 30 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-7', title: "Türkiye'de Hayvancılık", mins: 25 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-8', title: "Türkiye'de Madenler", mins: 30 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-9', title: "Türkiye'de Enerji Kaynakları", mins: 30 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-10', title: "Türkiye'de Sanayi", mins: 30 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-11', title: "Türkiye'de Ulaşım", mins: 25 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-12', title: "Türkiye'de Ticaret", mins: 25 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-13', title: "Türkiye'de Turizm", mins: 25 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-14', title: "Türkiye'nin Bölgesel Ekonomik Özellikleri", mins: 30 },
  { unitId: 'unit-cografya-2', id: 'topic-cografya-2-15', title: 'Harita, Grafik ve Tablo Yorumlama', mins: 30 },

  // 5. EĞİTİM BİLİMLERİ - ÜNİTE 1 (23 Topics)
  { unitId: 'unit-eb-1', id: 'topic-eb-1-1', title: 'Eğitimle İlgili Temel Kavramlar', mins: 25 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-2', title: 'Eğitimin Amaçları ve İşlevleri', mins: 25 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-3', title: 'Eğitimin Türleri', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-4', title: 'Eğitim ve Toplum', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-5', title: 'Eğitimin Felsefi Temelleri', mins: 25 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-6', title: 'İdealizm', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-7', title: 'Realizm', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-8', title: 'Pragmatizm', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-9', title: 'Varoluşçuluk', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-10', title: 'Eğitim Felsefeleri', mins: 25 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-11', title: 'Daimicilik', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-12', title: 'Esasicilik', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-13', title: 'İlerlemecilik', mins: 25 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-14', title: 'Yeniden Kurmacılık', mins: 20 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-15', title: 'Öğrenme Kavramı', mins: 25 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-16', title: 'Öğrenmeyi Etkileyen Faktörler', mins: 25 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-17', title: 'Davranışçı Öğrenme Kuramları', mins: 30 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-18', title: 'Klasik Koşullanma', mins: 35 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-19', title: 'Edimsel Koşullanma', mins: 35 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-20', title: 'Sosyal Öğrenme', mins: 30 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-21', title: 'Bilişsel Öğrenme', mins: 30 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-22', title: 'Bilgi İşleme Yaklaşımı', mins: 35 },
  { unitId: 'unit-eb-1', id: 'topic-eb-1-23', title: 'Gestalt Öğrenme Yaklaşımı', mins: 30 },

  // 5. EĞİTİM BİLİMLERİ - ÜNİTE 2 (20 Topics)
  { unitId: 'unit-eb-2', id: 'topic-eb-2-1', title: 'Gelişimle İlgili Temel Kavramlar', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-2', title: 'Gelişimin Temel İlkeleri', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-3', title: 'Gelişimi Etkileyen Faktörler', mins: 20 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-4', title: 'Fiziksel Gelişim', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-5', title: 'Bilişsel Gelişim', mins: 30 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-6', title: 'Dil Gelişimi', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-7', title: 'Sosyal Gelişim', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-8', title: 'Duygusal Gelişim', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-9', title: 'Ahlak Gelişimi', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-10', title: "Piaget'nin Bilişsel Gelişim Kuramı", mins: 35 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-11', title: "Vygotsky'nin Sosyokültürel Kuramı", mins: 30 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-12', title: "Kohlberg'in Ahlak Gelişimi", mins: 30 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-13', title: "Erikson'un Psikososyal Gelişim Kuramı", mins: 35 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-14', title: 'Öğretim İlke ve Yöntemleri', mins: 30 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-15', title: 'Öğretim Stratejileri', mins: 30 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-16', title: 'Öğretim Yöntemleri', mins: 30 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-17', title: 'Öğretim Teknikleri', mins: 30 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-18', title: 'Bireysel Farklılıklar', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-19', title: 'Öğrenci Merkezli Öğretim', mins: 25 },
  { unitId: 'unit-eb-2', id: 'topic-eb-2-20', title: 'Ölçme ve Değerlendirmeye Giriş', mins: 30 },

  // 6. TÜRK MİLLÎ EĞİTİM SİSTEMİ - ÜNİTE 1 (15 Topics)
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-1', title: 'Türk Millî Eğitiminin Genel Amaçları', mins: 25 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-2', title: 'Türk Millî Eğitiminin Temel İlkeleri', mins: 30 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-3', title: 'Türk Millî Eğitim Sisteminin Genel Yapısı', mins: 25 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-4', title: 'Örgün Eğitim', mins: 25 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-5', title: 'Yaygın Eğitim', mins: 20 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-6', title: 'Örgün Eğitim Kademeleri', mins: 25 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-7', title: 'Okul Öncesi Eğitim', mins: 20 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-8', title: 'İlköğretim', mins: 20 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-9', title: 'Ortaöğretim', mins: 25 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-10', title: 'Yükseköğretim', mins: 20 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-11', title: 'Hayat Boyu Öğrenme', mins: 20 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-12', title: 'Millî Eğitim Bakanlığının Yapısı', mins: 30 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-13', title: 'Eğitim Sisteminde Merkez ve Taşra Teşkilatı', mins: 30 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-14', title: 'Eğitimde Yönetim', mins: 25 },
  { unitId: 'unit-tmes-1', id: 'topic-tmes-1-15', title: 'Eğitimde Öğretmenin Rolü', mins: 25 },

  // 6. TÜRK MİLLÎ EĞİTİM SİSTEMİ - ÜNİTE 2 (15 Topics)
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-1', title: 'Türkiye Yüzyılı Maarif Modeli', mins: 35 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-2', title: 'Maarif Modelinin Genel Yaklaşımı', mins: 30 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-3', title: 'Öğrenci Profili', mins: 25 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-4', title: 'Erdem-Değer-Eylem Çerçevesi', mins: 30 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-5', title: 'Yetkinlikler', mins: 25 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-6', title: 'Beceriler', mins: 30 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-7', title: 'Sosyal-Duygusal Öğrenme', mins: 25 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-8', title: 'Değerler Eğitimi', mins: 25 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-9', title: 'Okuryazarlık Becerileri', mins: 25 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-10', title: 'Farklılaştırılmış Öğretim', mins: 30 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-11', title: 'Destekleme', mins: 20 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-12', title: 'Zenginleştirme', mins: 20 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-13', title: 'Programlar Arası Bileşenler', mins: 25 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-14', title: 'Ölçme ve Değerlendirme Yaklaşımı', mins: 30 },
  { unitId: 'unit-tmes-2', id: 'topic-tmes-2-15', title: 'Öğretmen Rolü ve Öğrenme Ortamı', mins: 25 },

  // 7. MEVZUAT - ÜNİTE 1 & 2
  { unitId: 'unit-mevzuat-1', id: 'topic-mevzuat-1-1', title: '7528 Sayılı Öğretmenlik Mesleği Kanunu Genel Esasları', mins: 35 },
  { unitId: 'unit-mevzuat-1', id: 'topic-mevzuat-1-2', title: 'Milli Eğitim Akademisi Teşkilatı ve Hazırlık Eğitimi', mins: 35 },
  { unitId: 'unit-mevzuat-1', id: 'topic-mevzuat-1-3', title: 'Kariyer Basamakları (Uzman ve Başöğretmenlik)', mins: 30 },
  { unitId: 'unit-mevzuat-1', id: 'topic-mevzuat-1-4', title: 'Öğretmenlerin Hakları, Ödevleri ve Disiplin Hükümleri', mins: 35 },
  { unitId: 'unit-mevzuat-1', id: 'topic-mevzuat-1-5', title: 'Anayasanın Eğitim ve Öğretimle İlgili Temel Maddeleri', mins: 30 },

  { unitId: 'unit-mevzuat-2', id: 'topic-mevzuat-2-1', title: '1739 Sayılı Millî Eğitim Temel Kanunu Amaç ve İlkeleri', mins: 35 },
  { unitId: 'unit-mevzuat-2', id: 'topic-mevzuat-2-2', title: '657 Sayılı Devlet Memurları Kanununun Temel İlkeleri', mins: 30 },
  { unitId: 'unit-mevzuat-2', id: 'topic-mevzuat-2-3', title: '657 Sayılı DMK Memur Hakları ve Disiplin Cezaları', mins: 35 },
  { unitId: 'unit-mevzuat-2', id: 'topic-mevzuat-2-4', title: '4483 Sayılı Memurların Yargılanması Hakkında Kanun Usulleri', mins: 30 },
];

export const AGS_TOPICS: Topic[] = rawTopicsConfig.map((item, index) => ({
  id: item.id,
  unit_id: item.unitId,
  title: item.title,
  order_index: index + 1,
  estimated_minutes: item.mins,
}));

// Dedicated AGS Sözel Yetenek Content Engine (KAVRAM → CÜMLE → PARAGRAF → YORUM → ÇIKARIM → SORU ÇÖZME)
const generateSozelTopicContent = (topic: Topic): TopicContent => {
  if (topic.id === 'topic-sozel-1-1' || topic.title === 'Sözcükte Anlam') {
    return {
      id: `tc-${topic.id}`,
      topic_id: topic.id,
      title: 'Sözcükte Anlam',
      why_it_matters: 'Sözcükte Anlam, tek başına bir ezber konusu değil; AGS Türkçe, paragraf yorumu ve sözel akıl yürütmenin temel taşıdır. Bir sözcüğün anlamını cümledeki bağlamından kopararak tek başına sözlük anlamıyla yorumlamak, cümlenin ve nihayetinde tüm paragrafın ana düşüncesini yanlış anlamaya yol açar. Bu konu, sözcüklerin metin içinde yüklendiği anlam katmanlarını ve bağlamsal incelikleri tespit etmenizi sağlar.',
      learning_objectives: [
        'Bir sözcüğün tek başına değil, cümle ve metin bağlamı içinde kazandığı anlamı doğru tespit edebilmek.',
        'Aynı sözcüğün farklı cümle bağlamlarında kazandığı anlam değişikliklerini (somut, soyut, mecazi) ayırt edebilmek.',
        'Sözcüğün anlamını doğru belirleyerek cümle ve paragraf düzeyinde doğru çıkarım yapabilmek.',
        'Sınav sorularında sözcüğün sözlük anlamı ile bağlamsal anlamı arasındaki çeldirici farkları eleyebilmek.',
        'Metindeki örtülü anlamları ve sözcük seçiminin paragrafa kattığı anlatım zenginliğini analiz edebilmek.',
      ],
      core_explanation: `## 1. Sözcüğün Anlamını Belirleme: Bağlamın Gücü
Bir sözcüğün anlamı sözlükteki tek bir tanıma hapsedilemez. Sözcük; içinde yer aldığı cümle, yanındaki diğer sözcükler ve metnin genel atmosferi ile anlam kazanır. Bir sözcük tek başına düşünüldüğünde akla ilk gelen anlamıyla (temel anlam) sınırlı kalırken, cümle içinde yepyeni anlam alanlarına genişleyebilir.

Örnek İnceleme: "İnce" sözcüğü:
* "İnce bir dalı eline aldı." → Boyutça dar, kalın karşıtı (Gerçek / Temel Anlam)
* "Tören boyunca çok ince bir davranış sergiledi." → Nazik, kibar, düşünceli (Mecaz Anlam)
* "Gelecek ayı kurtarmak için ince bir hesap yaptı." → Ayrıntılı, titiz, derinlemesine (Mecaz / Yan Anlam)

## 2. Gerçek, Mecaz ve Terim Anlamın Bağlamsal İşlevi
Bu kavramları bağımsız ezber kuralları olarak değil, cümlenin iletisini belirleyen işlevsel araçlar olarak görmek gerekir:
* Gerçek (Temel) Anlam: Sözcüğün zihinde canlanan ilk, nesnel ve somut karşılığıdır.
* Mecaz Anlam: Sözcüğün temel anlamından tamamen uzaklaşarak soyut, duygusal veya yeni bir anlam kazanmasıdır.
* Terim Anlam: Belirli bir bilim, sanat, felsefe veya meslek dalına özgü kavramlaşmış kullanımdır. (Örn: "Öğretmen ders programında hedeflenen kazanımları açıkladı." - Pedagoji terimi).

## 3. Sözcüğün Bağlamdaki Anlamı ve Çıkarım Becerisi
AGS sorularında bir sözcüğün altı çizildiğinde yapılan en büyük hata, cümleyi okumadan sözcüğün ilk anlamını seçeneklerde aramaktır. Oysa yazar, o sözcüğü parçanın ana fikrine hizmet edecek özel bir anlam yükleyerek kullanmıştır.

Örnek İnceleme: "Savunmak" sözcüğü:
* "Bu düşünceyi savunmak için güçlü kanıtlar sundu." → Bir görüşü desteklemek, arkasında durmak, doğruluğunu iddia etmek
* "Sınır boyundaki kaleyi savunmak için askerler görevlendirildi." → Düşman saldırısına karşı korumak, muhafaza etmek

## 4. Sözcükten Cümleye ve Paragrafa Geçiş: Bu Konuyu Neden Öğrendik?
Sözcük anlamı ile paragraf soruları doğrudan bağlantılıdır:
1. Sözcüğün anlamını yanlış belirlemek → Cümlenin anlamını yanlış yorumlamaya yol açar.
2. Cümlenin anlamını yanlış yorumlamak → Paragrafın ana düşüncesini ve yazarın bakış açısını yanlış saptamaya neden olur.
3. Bu nedenle sözcük analizi, paragraf sorularında seçenekleri hızla eleyebilmenin ve çeldiricilere düşmemenin en güçlü anahtarıdır.`,
      key_concepts: [
        {
          term: 'Bağlamsal Anlam',
          definition: 'Sözcüğün cümledeki diğer sözcüklerle oluşturduğu anlam örgüsü içindeki gerçek karşılığıdır.',
          practical_meaning: 'Sözcüğü cümleden çıkarmadan, tüm cümlenin akışına göre anlamlandırma becerisidir.',
        },
        {
          term: 'Mecazi Anlam Kayması',
          definition: 'Sözcüğün temel anlamından sıyrılarak metnin duygusal veya düşünsel iletisine göre yeni bir boyut kazanmasıdır.',
          practical_meaning: 'Soyut fikirlerin somut sözcüklerle anlatılmasını sağlayan ve sorularda sıkça yoklanan anlam zenginliğidir.',
        },
        {
          term: 'Anlamca Karşılık (Yerine Koyma)',
          definition: 'Cümledeki sözcüğün yerine konulduğunda anlamın bütünlüğünü ve iletisini bozmayan ifadedir.',
          practical_meaning: 'Soru çözerken şıktaki anlamı sözcüğün yerine koyup okuma testidir.',
        },
      ],
      subtopics: [
        {
          id: `${topic.id}-sub-1`,
          number: '1.1',
          title: 'Sözcüğün Bağlamdaki Anlamını Belirleme',
          content: 'Sözcüğün yüklemle, özneyle ve cümlenin genel iletisiyle kurduğu ilişki analiz edilir.',
          key_takeaway: 'Cümleyi baştan sona okumadan altı çizili sözcüğe karar verilmez.',
        },
        {
          id: `${topic.id}-sub-2`,
          number: '1.2',
          title: 'Aynı Sözcüğün Çok Anlamlılığı',
          content: 'Türkçede bir sözcük bağlama göre onlarca farklı anlam kazanabilir. Şıklardaki sözlük anlamları çeldirici olarak kullanılır.',
          key_takeaway: 'İlk akla gelen anlam değil, cümlenin ihtiyacı olan anlam esastır.',
        },
        {
          id: `${topic.id}-sub-3`,
          number: '1.3',
          title: 'Sözcükten Paragraf Yorumuna Geçiş',
          content: 'Paragraftaki anahtar sözcüklerin anlamını doğru yakalamak, ana düşünceyi ve yazarın tutumunu doğrudan ortaya çıkarır.',
          key_takeaway: 'Ana düşünce sorularının çözümü doğru sözcük yorumundan geçer.',
        },
      ],
      examples: [
        {
          title: 'Kısa Paragrafta Bağlam İncelemesi',
          scenario: 'Bir yazarın dili, yalnızca kullandığı sözcüklerden ibaret değildir. Sözcüklerin bağlam içinde kazandığı anlamlar, yazarın anlatım biçimini ve okuyucuda oluşturduğu etkiyi belirler. Kimi zaman sıradan bir sözcük, ustalıklı bir kurguda okuru derinden sarsan bir anlam genişlemesine uğrar.',
          analysis: 'Bu parçada "anlam genişlemesi" sözüyle anlatılmak istenen; sözcüklerin sözlükteki kuru tanımlarını aşarak metnin duygu ve düşünce evreninde yeni çağrışımlar üretmesidir.',
          domain: 'Sözel Yetenek & Paragraf',
        },
      ],
      comparison_tables: [
        {
          title: 'Sözcüklerin Bağlama Göre Anlam Değişim Tablosu',
          headers: ['Sözcük', 'Örnek Cümle', 'Bağlamda Kazandığı Anlam', 'Soru Çözüm İpucu'],
          rows: [
            ['Açmak', 'Pencereyi sonuna kadar açtı.', 'Kapalı durumu sonlandırmak', 'Gerçek / Temel Anlam'],
            ['Açmak', 'Bu açık renk ceket seni çok açtı.', 'Yakışmak, ferah ve canlı göstermek', 'Bağlamsal Mecaz'],
            ['Açmak', 'Konuyu biraz daha açar mısınız?', 'Ayrıntılandırmak, anlaşılır kılmak', 'Soyutlama / Mecaz'],
            ['Açmak', 'Yürüyüşten sonra içim açıldı.', 'Ferahlamak, rahatlamak, neşelenmek', 'Deyimleşmiş Anlam'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Altı çizili bir sözcük gördüğümde en çok bildiğim sözlük tanımını şıklarda işaretleyip geçerim.',
          correct_distinction: 'Sözcüğün anlamı ancak içinde geçtiği cümlenin tamamı ve metnin bütünü incelenerek kesinleşir.',
          tip: 'Şıktaki ifadeyi sözcüğün yerine koyup cümleyi tekrar okuyunuz.',
        },
        {
          wrong_belief: 'Mecaz anlam yalnızca edebi sanatlarda ve şiirlerde bulunur.',
          correct_distinction: 'Düşünce yazılarında, makalelerde ve günlük anlatımlarda da soyut kavramlar mecaz yoluyla somutlaştırılır.',
          tip: 'Soyutlama ve anlam genişlemelerine dikkat ediniz.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS'DE DİKKAT: 'Bu parçadaki altı çizili sözcükle anlatılmak istenen...' sorularında, sözcüğün sözlükteki ilk anlamı güçlü bir çeldirici olarak A veya B seçeneğine konur. Metindeki bağlamsal vurguyu bulmadan işaretleme yapmayınız.",
          importance: 'critical',
        },
        {
          tip: "AGS'DE DİKKAT: Cümledeki bir sözcüğün anlamını doğru belirlemek, o cümlenin ana fikrini ve dolayısıyla paragraf sorusunun doğru yanıtını doğrudan belirler.",
          importance: 'high',
        },
      ],
      mnemonics: [
        {
          title: 'Cümle-İçi Yerine Koyma Metodu',
          memory_trick: '🔑 YÖNTEM: Şıktaki Anlamı Cümleye Yerleştir',
          description: 'Seçenekte verilen anlamı altı çizili sözcüğün yerine koyun; cümlenin mantığı ve bağlamı bozulmuyorsa doğru yanıttır.',
        },
      ],
      summary: 'Sözcükte Anlam; kelimelerin tekil tanımlarından ziyade cümle ve paragraf bağlamında kazandığı işlevi kavramaktır. Bu beceri doğrudan cümle yorumu ve paragraf ana düşüncesi sorularının temelini oluşturur.',
      what_to_remember: [
        '✓ Bir sözcüğün anlamının cümleye ve bağlama göre değiştiğini bil.',
        '✓ Sözcüğü tek başına değil, cümlenin tümüyle birlikte değerlendir.',
        '✓ Yerine koyma yöntemini kullanarak şıkları metinle test et.',
        '✓ Sözcükteki anlam inceliğinin paragrafın ana fikrini nasıl etkilediğini fark et.',
        '✓ Günlük ilk anlamı içeren güçlü çeldiricilere karşı uyanık ol.',
      ],
      self_check_questions: [
        {
          question: '1. "Yazar, toplumsal meseleleri ele alırken dili bir süs eşyası gibi değil, gerçeğe tutulan yalın bir ayna gibi kullanmıştır."\n\nBu cümledeki "ayna gibi kullanmak" sözüyle anlatılmak istenen aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Olayları kendi hayal dünyasında yeniden kurgulamak', isCorrect: false },
            { key: 'B', text: 'Gerçekleri değiştirmeden, olduğu gibi ve tarafsızca yansıtmak', isCorrect: true },
            { key: 'C', text: 'Sanatlı ve süslü anlatımlarla okuru etkilemeye çalışmak', isCorrect: false },
            { key: 'D', text: 'Sadece bireysel duyguları ve iç dünyayı dile getirmek', isCorrect: false },
            { key: 'E', text: 'Geçmişte yaşanan olayları geleceğe aktarmaktan kaçınmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Ayna gibi kullanmak", aynanın nesneleri olduğu gibi yansıtma özelliğinden hareketle gerçekleri değiştirmeden, tarafsız ve yalın bir biçimde aktarmak anlamına gelir.',
        },
        {
          question: '2. "Eleştirmen, genç şairin son kitabında kendi sesini bulduğunu ve taklit tuzaklarına düşmediğini vurguladı."\n\nBu cümledeki "kendi sesini bulmak" ifadesinin bağlamsal karşılığı aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Şiirlerini sesli olarak okumaktan zevk almak', isCorrect: false },
            { key: 'B', text: 'Özgün bir üsluba ve kendine has bir anlatım tarzına ulaşmak', isCorrect: true },
            { key: 'C', text: 'Geleneksel şiir formlarını eksiksiz tekrarlamak', isCorrect: false },
            { key: 'D', text: 'Toplumun beklentilerine göre şiir yazmaya başlamak', isCorrect: false },
            { key: 'E', text: 'Şiirlerinde müzikal ögelere daha fazla yer vermek', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Kendi sesini bulmak", sanatçının başkalarını taklit etmekten kurtulup kendine özgü, orijinal bir anlatım biçimi yakalamasını ifade eder.',
        },
        {
          question: '3. "Eski dostunun bu zor gününde kendisine soğuk davranması, aralarındaki bağların ne denli zayıfladığını gösteriyordu."\n\nBu cümledeki "soğuk davranmak" ifadesi hangi anlam ilişkisine dayanmaktadır?',
          options: [
            { key: 'A', text: 'Düşük sıcaklığı bildiren gerçek anlam', isCorrect: false },
            { key: 'B', text: 'İlgisiz, mesafeli ve sevgiden yoksun tutum bildiren mecaz anlam', isCorrect: true },
            { key: 'C', text: 'Tıp ve fizik alanına ait bir terim anlam', isCorrect: false },
            { key: 'D', text: 'Sadece hava durumuna bağlı bir benzetme', isCorrect: false },
            { key: 'E', text: 'Teknik bir mesleki kavram', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Soğuk" sözcüğü sıcaklık anlamından uzaklaşarak ilgi ve yakınlığın azalması durumunu belirten mecaz bir anlam kazanmıştır.',
        },
        {
          question: '4. (I) Bilim insanları doğadaki dengenin bozulmaması için sürekli uyarılarda bulunuyor. (II) Ancak tüketim alışkanlıklarımız bu uyarıların önüne geçiyor. (III) Doğaya verilen her zarar, geleceğimizi ipotek altına almaktadır. (IV) Bu nedenle acil eylem planlarının devreye sokulması zorunludur.\n\nBu parçadaki "ipotek altına almak" sözüyle anlatılmak istenen aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Maddi bir teminat karşılığında borçlanmak', isCorrect: false },
            { key: 'B', text: 'Geleceği tehlikeye atmak, belirsiz ve riskli kılmak', isCorrect: true },
            { key: 'C', text: 'Yasal süreçleri hızlandırmak', isCorrect: false },
            { key: 'D', text: 'Tüm yatırımları gayrimenkule yönlendirmek', isCorrect: false },
            { key: 'E', text: 'Uluslararası anlaşmaları askıya almak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Parçadaki bağlamda "ipotek altına almak", geleceğin güvencesini yok etmek ve onu riskli/tehlikeli bir duruma sokmak anlamında mecazi olarak kullanılmıştır.',
        },
        {
          question: '5. Bir sözcüğün anlamını cümle ve paragraf bağlamında değerlendirmenin AGS sorularındaki en kritik faydası hangisidir?',
          options: [
            { key: 'A', text: 'Sözcüğün sözlükteki ilk tanımını ezberlemeyi kolaylaştırması', isCorrect: false },
            { key: 'B', text: 'Cümlenin asıl iletisini doğru anlayarak paragraf ana düşüncesine hatasız ulaşmayı sağlaması', isCorrect: true },
            { key: 'C', text: 'Sadece dil bilgisi ve imla kurallarını kontrol etmeye yaraması', isCorrect: false },
            { key: 'D', text: 'Tüm paragrafları okumadan doğrudan soru çözdürmesi', isCorrect: false },
            { key: 'E', text: 'Metindeki tüm yabancı kökenli sözcükleri tespit etmesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Sözcüğü bağlamında okumak, cümlenin iletisini ve paragrafın ana fikrini eksiksiz kavrayıp çeldiricileri elemeyi sağlar.',
        },
      ],
    };
  }

  // General Sözel Yetenek & Paragraf / Sözel Mantık generator
  const isParagraf = topic.unit_id === 'unit-sozel-2';
  const isSozelMantik = topic.title.includes('Mantık') || topic.title.includes('Sıralama') || topic.title.includes('Koşullu') || topic.title.includes('Tablo');

  let whyItMatters = '';
  let coreExplanation = '';
  let keyConceptTerm = '';
  let keyConceptDef = '';
  let examTip = '';
  let mnemonic = '';
  let q1Text = '';
  let q1Ans = '';
  let q1OptA = '';
  let q1OptB = '';
  let q1OptC = '';
  let q1Exp = '';

  if (isSozelMantik) {
    whyItMatters = `"${topic.title}", AGS Sözel Yetenek testinin en belirleyici ve zaman kazandırıcı bölümüdür. Ezber değil; verilen ipuçlarını tabloya dökmek, kesin bilgileri olasılıklardan ayırmak ve sistematik akıl yürütme becerisi gerektirir.`;
    coreExplanation = `## 1. Sözel Mantıkta Temel Strateji: Tablo Oluşturma
Sözel mantık soruları zihinden çözülemez. Soruda verilen değişkenleri (kişiler, günler, sıralar, mekanlar) doğru kurgulanmış bir tabloya yerleştirmek çözümün %80'idir.

## 2. Kesin Bilgi vs. Olasılık Ayrımı
* Kesin Bilgiler: Tabloya doğrudan yazılan, yeri değişmeyen verilerdir. (Örn: "Ahmet 3. sıradadır.")
* Olasılıklar / Koşullar: Birden fazla ihtimali olan durumlardır. (Örn: "Elif, Burak'tan hemen önceki sıradadır.")

## 3. Soru Köklerine Göre Çözüm
* "Kesinlikle doğrudur/yanlıştır": Olasılıklara bağlı olmayan, her senaryoda değişmeyen sonucu arayın.
* "Hangisi olabilir": İhtimal dahilinde olan, kurallarla çelişmeyen seçeneği arayın.`;
    keyConceptTerm = 'Değişkenler Tablosu';
    keyConceptDef = 'Sorudaki sabit ve hareketli unsurları görselleştirerek olasılıkları netleştiren şablon.';
    examTip = "AGS'DE DİKKAT: Sözel mantıkta önce kesin öncülleri yerleştirin, olumsuz ('...değildir') ifadeleri tablonun kenarına not edin.";
    mnemonic = '🔑 Kural: KESİN OLANLARI YAZ, OLASILIKLARI ÇATALLANDIR';
    q1Text = 'Bir sözel mantık sorusunda "Ahmet ve Burak farklı günlerde nöbet tutmuştur." öncülü verildiğinde izlenecek en doğru yaklaşım hangisidir?';
    q1OptA = 'Ahmet ve Burak’ın nöbet günlerinin asla aynı sütuna yazılamayacağını belirleyip olasılıkları buna göre elemek';
    q1OptB = 'Ahmet’i rastgele ilk güne yazıp Burak’ı unutmak';
    q1OptC = 'Bu öncülün hiçbir anlam ifade etmediğini varsaymak';
    q1Ans = 'A';
    q1Exp = 'Farklı günlerde olma koşulu, iki kişinin aynı zaman diliminde kesişemeyeceğini gösteren kesin bir kısıtlamadır.';
  } else if (isParagraf) {
    whyItMatters = `"${topic.title}", paragraf sorularında metnin iletmek istediği asıl düşünceyi yakalama, yapıyı çözme ve çeldirici seçenekleri hızla eleme becerisi kazandırır. AGS'de zamanı doğru kullanmanın ve netleri artırmanın merkezindedir.`;
    coreExplanation = `## 1. Paragrafı Anlama ve Soru Kökü Analizi
Paragraf sorularında önce soru kökü okunmalı, metinden ne istendiği (ana fikir, konu, yardımcı fikir, akış bozma) netleştirilmelidir.

## 2. Ana Düşünceyi Bulma ve Çeldiricileri Eleme
* Ana Düşünce: Yazarın okura vermek istediği asıl mesaj, metnin yazılış amacıdır.
* Çeldirici Tuzakları:
  - Aşırı Genelleme: Parçada sadece bir grup için söylenen sözün tüm evrene genellenmesi.
  - Kapsam Daraltma: Parçanın sadece bir cümlesini doğru yansıtıp bütünü kapsamaması.
  - Metin Dışı Yorum: Mantıklı görünse de paragrafta hiç değinilmemiş bilginin şıkta yer alması.

## 3. Paragrafın Yapısı ve Akış
Giriş, gelişme ve sonuç cümleleri mantıksal bir zincirle birbirine bağlanır. Bağlantı ögeleri ('bu nedenle', 'oysa', 'nitekim') düşüncenin yönünü belirler.`;
    keyConceptTerm = 'Ana Düşünce Filtresi';
    keyConceptDef = 'Metnin tamamını kucaklayan, yazarın asıl savunmak istediği temel tez.';
    examTip = "AGS'DE DİKKAT: Seçenek doğru bir bilgi içerse bile, paragrafın tamamını kapsamıyorsa ana düşünce olamaz.";
    mnemonic = '🔑 Kural: METNİN DIŞINA ÇIKMA, YAZARIN YERİNE DÜŞÜN';
    q1Text = 'Bir paragrafın ana düşüncesi aranırken seçeneklerden hangisi doğrudan elenmelidir?';
    q1OptA = 'Parçanın sadece tek bir örneğini özetleyen dar kapsamlı seçenek';
    q1OptB = 'Metnin bütününde savunulan genel yargıyı veren seçenek';
    q1OptC = 'Yazarın vurgulamak istediği temel sonucu yansıtan seçenek';
    q1Ans = 'A';
    q1Exp = 'Yalnızca tek bir örneği veya yardımcı düşünceyi içeren seçenekler ana düşünce olamaz; kapsamı dar olduğu için elenmelidir.';
  } else {
    whyItMatters = `"${topic.title}", cümle düzeyinde anlam ilişkilerini (neden-sonuç, amaç-sonuç, karşılaştırma, kesinlik-olasılık) doğru kavramak ve paragraf sorularındaki anlamsal geçişleri hatasız okumak için temeldir.`;
    coreExplanation = `## 1. Cümlede Anlam İlişkileri ve Yargı Analizi
Cümle, bir duyguyu veya düşünceyi eksiksiz aktaran birimdir. Cümledeki ekler ve bağlaçlar anlam ilişkisinin türünü belirler.

## 2. Neden-Sonuç vs. Amaç-Sonuç Ayrımı
* Neden-Sonuç (Gerekçe): Eylem gerçekleşmiştir, bir nedene bağlıdır. (-dığı için, sebebiyle)
* Amaç-Sonuç (Gaye): Hedeflenen durum henüz gerçekleşmemiştir, bir gaye vardır. (-mak amacıyla, diye)
* Koşul-Sonuç (Şart): Bir durumun gerçekleşmesi başka bir şarta bağlıdır. (-se/-sa, şartıyla)

## 3. Cümlenin Yorumu ve Örtülü Anlam
Cümlede açıkça yazılmayan ancak kullanılan sözcüklerden zorunlu olarak çıkarılan anlamlara "örtülü anlam" denir. (Örn: "Ahmet yine birinci oldu." → Daha önce de birinci olmuştur.)`;
    keyConceptTerm = 'Örtülü Anlam ve Çıkarım';
    keyConceptDef = 'Cümlenin doğrudan söylemediği ancak mantıksal olarak kesinlikle doğru olan yan anlam.';
    examTip = "AGS'DE DİKKAT: Amaç-sonuç cümlelerinde 'amacıyla' ifadesini yerine koyduğunuzda anlam bozulmaz.";
    mnemonic = '🔑 Kural: NEDEN = GERÇEKLEŞMİŞ / AMAÇ = HEDEFLENEN';
    q1Text = 'Aşağıdaki cümlelerin hangisinde amaç-sonuç ilişkisi vardır?';
    q1OptA = 'Sınavda başarılı olmak amacıyla her gün düzenli paragraf çözüyordu.';
    q1OptB = 'Yağmur şiddetlendiği için eve dönmek zorunda kaldılar.';
    q1OptC = 'Uykusunu alamadığından gün boyu yorgun hissetti.';
    q1Ans = 'A';
    q1Exp = 'A seçeneğinde düzenli soru çözme eylemi "başarılı olma gayesine" yöneliktir (-mak amacıyla).';
  }

  return {
    id: `tc-${topic.id}`,
    topic_id: topic.id,
    title: topic.title,
    why_it_matters: whyItMatters,
    learning_objectives: [
      `"${topic.title}" konusunun sınavda ölçülen beceri ve mantık kurallarını kavramak.`,
      'Metin, cümle ve seçenekler arasındaki anlamsal ilişkileri hızlıca çözümleyebilmek.',
      'Aşırı genelleme, kapsam daraltma ve metin dışı bilgi içeren çeldiricileri eleyebilmek.',
      'Sözel akıl yürütme adımlarını uygulayarak kesin doğru yanıta ulaşabilmek.',
    ],
    core_explanation: coreExplanation,
    key_concepts: [
      {
        term: keyConceptTerm,
        definition: keyConceptDef,
        practical_meaning: 'Soru çözerken şıkları elemede kullanılan temel ayırt edici ölçüttür.',
      },
      {
        term: 'Bağlamsal Çıkarım',
        definition: 'Metindeki ipuçlarından hareketle kesin ve mantıklı yargıya ulaşma sürecidir.',
        practical_meaning: 'Kişisel yorum katmadan yalnızca metne sadık kalarak sonuca ulaşmaktır.',
      },
    ],
    subtopics: [
      {
        id: `${topic.id}-sub-1`,
        number: '1.1',
        title: 'Kavramsal Mantık ve Soru Kökü Analizi',
        content: `Bu başlık altında ${topic.title} konusunun soru kökü kurgusu ve metin analizi incelenir.`,
        key_takeaway: 'Önce soru kökünü oku, ardından metindeki anahtar ipuçlarını yakala.',
      },
      {
        id: `${topic.id}-sub-2`,
        number: '1.2',
        title: 'Çeldirici Eleme ve Seçenek Analizi',
        content: 'Seçeneklerdeki kelime oyunları, anlam kaymaları ve eksik vurgular incelenir.',
        key_takeaway: 'Metinde geçmeyen genel geçer doğrulara kanma.',
      },
    ],
    examples: [
      {
        title: `${topic.title} Örnek Soru Analizi`,
        scenario: 'Metin: "Eleştiri, bir eserin eksiklerini yüzüne vurmak değil; onun sanatsal değerini ortaya çıkaracak gizli yolları aydınlatmaktır."',
        analysis: 'Bu cümlede eleştirinin yıkıcı bir kusur bulma aracı değil, eseri anlamlandıran ve yol gösteren yapıcı bir kılavuz olduğu vurgulanmıştır.',
        domain: 'Sözel Yetenek',
      },
    ],
    comparison_tables: [
      {
        title: `${topic.title} Ayırt Etme Tablosu`,
        headers: ['Ölçüt', 'Doğru Yaklaşım', 'Çeldirici Tuzak'],
        rows: [
          ['Metne Bağlılık', 'Yalnızca parçada verilen bilgiyi esas almak', 'Kendi kişisel fikrini veya genel kültürünü katmak'],
          ['Kapsam', 'Metnin tamamını kucaklayan seçeneği bulmak', 'Sadece tek bir örneğe odaklanan dar şıkkı seçmek'],
        ],
      },
    ],
    common_confusions: [
      {
        wrong_belief: 'Seçenekteki cümle mantıklı ve doğru bir bilgi içeriyorsa kesinlikle doğru cevaptır.',
        correct_distinction: 'Seçenek ne kadar doğru olursa olsun, metinde geçmiyorsa veya metnin odağı değilse YANLIŞTIR.',
        tip: 'Şıktaki her kelimenin metindeki karşılığını arayınız.',
      },
    ],
    exam_tips: [
      {
        tip: examTip,
        importance: 'critical',
      },
    ],
    mnemonics: [
      {
        title: `${topic.title} Çözüm İlkesi`,
        memory_trick: mnemonic,
        description: 'Soru çözerken bu zihinsel kuralı uygulayarak çeldiricileri hızla eleyin.',
      },
    ],
    summary: `${topic.title} konusu, AGS Sözel Yetenek testinde okuduğunu anlama, bağlamdan çıkarım yapma ve çeldiricileri eleme becerisini ölçer.`,
    what_to_remember: [
      `✓ ${topic.title} ile ilgili soru kökünün ne istediğini net belirle.`,
      '✓ Metnin dışına çıkmadan yalnızca verilen ipuçlarını değerlendir.',
      '✓ Aşırı genelleme ve kapsam daraltması yapan şıkları doğrudan ele.',
      '✓ Seçenekleri birbiriyle değil, doğrudan metinle karşılaştır.',
    ],
    self_check_questions: [
      {
        question: `1. ${q1Text}`,
        options: [
          { key: 'A', text: q1OptA, isCorrect: q1Ans === 'A' },
          { key: 'B', text: q1OptB, isCorrect: q1Ans === 'B' },
          { key: 'C', text: q1OptC, isCorrect: q1Ans === 'C' },
          { key: 'D', text: 'Sorunun çözümünü tamamen şansa bırakmak', isCorrect: false },
          { key: 'E', text: 'Tüm seçeneklerin aynı anda doğru olduğunu varsaymak', isCorrect: false },
        ],
        explanation: `Doğru cevap ${q1Ans} seçeneğidir. ${q1Exp}`,
      },
      {
        question: `2. "${topic.title}" konusunda bir AGS sorusunu çözerken aşağıdakilerden hangisi en sık yapılan soru çözme hatasıdır?`,
        options: [
          { key: 'A', text: 'Metne bağlı kalıp sadece metinde yer alan yargıları değerlendirmek', isCorrect: false },
          { key: 'B', text: 'Kendi kişisel kanaatlerini ve metinde geçmeyen bilgileri doğru seçenek gibi düşünmek', isCorrect: true },
          { key: 'C', text: 'Soru kökündeki olumsuz ifadelere dikkat etmek', isCorrect: false },
          { key: 'D', text: 'Şıkları metinle tek tek eşleştirmek', isCorrect: false },
          { key: 'E', text: 'Anahtar kelimelerin altını çizerek ilerlemek', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. Sözel yetenek ve paragraf sorularında metin dışı bilgi veya kişisel yorum katmak en temel hata kaynağıdır.',
      },
      {
        question: '3. Paragraf ve sözel akıl yürütme sorularında çeldirici seçeneklerin en belirgin özelliği hangisidir?',
        options: [
          { key: 'A', text: 'Metnin ana fikrini doğrudan ve eksiksiz yansıtması', isCorrect: false },
          { key: 'B', text: 'Metindeki tek bir ayrıntıyı öne çıkarıp parçanın bütününü kapsamaması ya da aşırı genelleme yapması', isCorrect: true },
          { key: 'C', text: 'Her zaman en kısa cümlelerden oluşması', isCorrect: false },
          { key: 'D', text: 'Soru kökündeki kelimeleri hiç içermemesi', isCorrect: false },
          { key: 'E', text: 'Yazım kurallarına aykırı olması', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. Çeldiriciler genellikle doğru gibi görünen ancak kapsamı daraltılmış ya da aşırı genelleştirilmiş ifadelerden kurulur.',
      },
      {
        question: '4. Sözel mantık ve akıl yürütme sorularında hız ve doğruluk kazanmanın en etkili yolu nedir?',
        options: [
          { key: 'A', text: 'Tüm ihtimalleri zihinde tutmaya çalışmak', isCorrect: false },
          { key: 'B', text: 'Öncülleri şematize eden net bir tablo kurup kesin bilgilerle olasılıkları ayrıştırmak', isCorrect: true },
          { key: 'C', text: 'Sadece ilk öncülü okuyup hemen şıklara geçmek', isCorrect: false },
          { key: 'D', text: 'Metni birden fazla kez okumadan rastgele işaretleme yapmak', isCorrect: false },
          { key: 'E', text: 'Olumsuz öncülleri görmezden gelmek', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. Görsel bir tablo kurmak ve kesin verileri yerleştirmek karmaşık sözel mantık sorularını hatasız çözmenin yoludur.',
      },
      {
        question: '5. Bir metinde geçen anahtar sözcüklerin bağlamsal anlamını doğru saptamak aşağıdakilerden hangisini doğrudan kolaylaştırır?',
        options: [
          { key: 'A', text: 'Paragrafın ana düşüncesini ve yazarın temel iletisini eksiksiz kavramayı', isCorrect: true },
          { key: 'B', text: 'Yalnızca sözcük sayısını hesaplamayı', isCorrect: false },
          { key: 'C', text: 'Metnin yazıldığı yılı kesin olarak tahmin etmeyi', isCorrect: false },
          { key: 'D', text: 'Yazarın biyografisini ezberlemeyi', isCorrect: false },
          { key: 'E', text: 'Soru kökünü okumadan cevaplamayı', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Sözcüklerin bağlamdaki anlamını yakalamak, paragrafın ana iletisini ve kurgusunu çözmenin temelidir.',
      },
    ],
  };
};

// Domain-specific content generators ensuring academic depth and compliance with the AGS Content Quality System
const generateTopicContent = (topic: Topic): TopicContent => {
  const isSozel = topic.unit_id.startsWith('unit-sozel');
  if (isSozel) {
    return generateSozelTopicContent(topic);
  }

  const isEb = topic.unit_id.startsWith('unit-eb');
  const isMevzuat = topic.unit_id.startsWith('unit-mevzuat');
  const isTmes = topic.unit_id.startsWith('unit-tmes');
  const isSayisal = topic.unit_id.startsWith('unit-sayisal');
  const isTarih = topic.unit_id.startsWith('unit-tarih');
  const isCografya = topic.unit_id.startsWith('unit-cografya');

  // 2. "Neden Öğrenmeliyim?" (Why this topic matters)
  let whyItMatters = '';
  if (isEb) {
    whyItMatters = `"${topic.title}" konusu, öğretmenlik mesleğinin temelini oluşturan öğrenme ve gelişim süreçlerini doğru analiz edebilmeniz için kritik bir teorik ve pratik çerçeve sunar. Sınıf içi davranışları anlama, öğrenme güçlüklerini tespit etme ve çağdaş pedagojik yöntemleri etkin şekilde uygulayabilme becerisi kazandırır.`;
  } else if (isMevzuat) {
    whyItMatters = `"${topic.title}", Millî Eğitim Bakanlığı teşkilatında görev yapacak bir öğretmenin yasal haklarını, sorumluluklarını, mesleki güvencelerini ve mevzuat hiyerarşisini bilmesi açısından temel zorunluluktur. Göreve başlama, adaylık, disiplin ve yönetim süreçlerinde karşılaşılacak hukuki durumları doğru yorumlamanızı sağlar.`;
  } else if (isTmes) {
    whyItMatters = `"${topic.title}", Türk Millî Eğitiminin vizyonunu, kurumsal yapısını ve özellikle Türkiye Yüzyılı Maarif Modeli'nin getirdiği erdem-değer-eylem odaklı yeni eğitim felsefesini kavramanız için gereklidir. Okul ortamında uygulanan programların mantığını ve öğretmen rollerini bütüncül olarak açıklar.`;
  } else if (isSayisal) {
    whyItMatters = `"${topic.title}", problem çözme, analitik akıl yürütme ve sayısal ilişkileri modelleme becerilerini geliştirir. Sınavda zaman yönetimini optimize etmek ve çok adımlı matematiksel kurguları hatasız çözebilmek için temel yapı taşıdır.`;
  } else if (isTarih) {
    whyItMatters = `"${topic.title}", Türk ve dünya tarihindeki kurumsal, siyasi ve kültürel dönüşümleri sebep-sonuç ilişkisi içinde analiz etme yeteneği kazandırır. Tarihsel olayların günümüz kurumlarına ve medeniyet mirasına etkisini kavramayı sağlar.`;
  } else {
    whyItMatters = `"${topic.title}", Türkiye'nin fiziki, beşeri ve ekonomik potansiyelini mekan-insan etkileşimi bağlamında değerlendirmenizi sağlar. Harita, grafik ve mekânsal verileri yorumlama becerisini pekiştirir.`;
  }

  // 3. Learning Objectives
  const learningObjectives = [
    `"${topic.title}" kavramının kuramsal ve pratik çerçevesini tanımlayabilmek ve açıklayabilmek.`,
    `Benzer veya kolayca karıştırılabilen kavramlar arasındaki ayırt edici ölçütleri belirleyebilmek.`,
    `Konuya ilişkin mevzuat maddelerini, formülleri veya pedagojik ilkeleri sınav senaryolarında doğru uygulayabilmek.`,
    `Verilen vaka analizi, soru kökü veya metin üzerinden doğru çıkarımda bulunabilmek.`,
    `AGS formatındaki çeldirici seçeneklerin mantığını analiz edip hatasız çözüm üretebilmek.`,
  ];

  // 4. Core Explanation
  const coreExplanation = `### 1. Temel Esaslar ve Giriş\n"${topic.title}", Akademi Giriş Sınavı (AGS) kapsamında hem doğrudan bilgi düzeyinde hem de üst düzey muhakeme ve uygulama becerilerini ölçen kurgularda karşımıza çıkar. Bu konuyu çalışırken ezberci yaklaşımlar yerine kavramın mantığını ve diğer ünitelerle olan bağlamını kavramak esastır.\n\n### 2. İlkeler ve Uygulama\nKonunun temelinde yer alan ilkeler, sistemli bir hiyerarşi içinde birbirini tamamlar. Sınavda sorulan sorular çoğunlukla bu ilkelerin somut bir durum veya vaka içinde nasıl işlediğini sorgular.`;

  // 5. Key Concepts
  const keyConcepts = [
    {
      term: `${topic.title} Ana İlkesi`,
      definition: `Konunun merkezinde yer alan, sınavda en yüksek frekansta sorgulanan temel kavram veya yasal ilkedir.`,
      practical_meaning: `Soru çözerken ilk dikkat edilmesi gereken ayırt edici referans noktasıdır.`,
    },
    {
      term: 'Ayırt Edici Ölçüt',
      definition: `Birbirine çok yakın görünen durumları birbirinden kesin sınırlarla ayıran nesnel kriter.`,
      practical_meaning: `Çeldirici seçenekleri doğrudan elemeyi ve kesin doğru yanıta ulaşmayı sağlayan belirleyici ipucudur.`,
    },
  ];

  // 6. Subtopics
  const subtopics = [
    {
      id: `${topic.id}-sub-1`,
      number: '1.1',
      title: 'Kavramsal Temeller ve Analiz',
      content: `Bu alt başlıkta ${topic.title} konusunun kavramsal sınırları ve anahtar noktaları çizilir.`,
      key_takeaway: 'Anahtar kelimelerin bağlamsal kullanımına dikkat edilmelidir.',
    },
    {
      id: `${topic.id}-sub-2`,
      number: '1.2',
      title: 'Uygulama ve Çözüm Yolları',
      content: `Bilginin pratiğe aktarılma biçimidir. Soru bankalarındaki senaryolar bu aşamadan üretilir.`,
      key_takeaway: 'Öncüllü sorularda her bir maddenin bağımsız işlevi kontrol edilmelidir.',
    },
  ];

  // 7. Domain-specific Examples
  let examples: TopicExample[] = [];
  if (isEb) {
    examples = [
      {
        title: 'Sınıf İçi Pedagojik Vaka Örneği',
        scenario: `Bir sınıf öğretmeni, ders esnasında parmak kaldırarak söz alan ve doğru yanıt veren öğrencisine sözel pekiştireç vermiş, ders ortamında diğer öğrencilerin de söz alma sıklığının arttığını gözlemlemiştir.`,
        analysis: `Burada hem doğrudan pekiştirme hem de sınıf genelinde dolaylı pekiştirme (sosyal öğrenme) mekanizması birlikte işlemiştir.`,
        domain: 'Eğitim Bilimleri',
      },
    ];
  } else if (isMevzuat) {
    examples = [
      {
        title: 'Okul Yönetimi ve Mevzuat Uygulama Senaryosu',
        scenario: `Bir okulda görev yapan aday öğretmenin hazırlık eğitimi ve değerlendirme süreçlerinde 7528 Sayılı Kanun hükümleri işletilmiştir.`,
        analysis: `7528 Sayılı Öğretmenlik Mesleği Kanunu gereğince Akademi hazırlık eğitimi objektif değerlendirme ölçütlerine tabidir.`,
        domain: 'Mevzuat',
      },
    ];
  } else if (isSayisal) {
    examples = [
      {
        title: 'Adım Adım Çözümlü Matematik Örneği',
        scenario: `Bir problem kurgusunda verilen değişkenler: 3x + 4 = 19 eşitliği ve x tam sayı şartıdır.`,
        analysis: `1. Adım: Eşitliğin her iki tarafından 4 çıkarılır: 3x = 15. 2. Adım: Her iki taraf 3'e bölünür: x = 5. Çözüm kümesi {5} olarak bulunur.`,
        domain: 'Sayısal Yetenek',
      },
    ];
  } else if (isTarih) {
    examples = [
      {
        title: 'Tarihsel Süreç ve Neden-Sonuç Örneği',
        scenario: `İslamiyet öncesi Türk devletlerinde ikili teşkilat sistemi uygulanmış, Doğu'da Kağan, Batı'da Yabgu hüküm sürmüştür.`,
        analysis: `Bu sistem devletin geniş sınırlarını yönetmeyi kolaylaştırırken, bölünmeyi hızlandırma riskini de beraberinde getirmiştir.`,
        domain: 'Tarih',
      },
    ];
  } else {
    examples = [
      {
        title: 'Türkiye Coğrafyası Mekan Analizi',
        scenario: `Türkiye'de Akdeniz ve Karadeniz kıyılarında dağların kıyıya paralel uzanması sebebiyle kıyı ile iç kesimler arasında iklim farklılığı belirgindir.`,
        analysis: `Dağların uzanış doğrultusu denizel havanın iç kesimlere sokulmasını engeller.`,
        domain: 'Türkiye Coğrafyası',
      },
    ];
  }

  // 8. Comparison Tables
  const comparisonTables = [
    {
      title: `${topic.title} Karşılaştırma Tablosu`,
      headers: ['Kavram / Durum', 'Temel Özellik', 'Ayırt Edici Nokta', 'Soru Çözüm İpucu'],
      rows: [
        ['Temel Yaklaşım A', 'Doğrudan kuramsal tanım ve ilkeler', 'Genel kural ve çerçeve', 'Doğrudan bilgi sorularında'],
        ['İlişkili Yaklaşım B', 'Uygulamalı senaryo ve durum analizi', 'İstisnalar ve özel koşullar', 'Vaka ve yorum sorularında'],
      ],
    },
  ];

  // 9. Common Confusions
  const commonConfusions = [
    {
      wrong_belief: `"${topic.title}" ile ilgili tüm kavramlar birbiriyle eş anlamlıdır ve birbirinin yerine kullanılabilir.`,
      correct_distinction: `Kavramların uygulama alanları, yasal zeminleri ve bilişsel hedefleri birbirinden kesin çizgilerle ayrılır.`,
      tip: 'Soru kökündeki odak kavramı belirleyip çeldiricilerdeki kavram kaymalarına dikkat ediniz.',
    },
  ];

  // 10. Exam Tips
  const examTips = [
    {
      tip: `AGS'DE DİKKAT: "${topic.title}" konusu ile ilgili sorularda çeldirici seçenekler genellikle çok yakın benzer kavramlardan türetilir. Soru kökünü okurken istenen temel ölçütü belirleyiniz.`,
      importance: 'critical' as const,
    },
  ];

  // 11. Mnemonics
  const mnemonics = [
    {
      title: `${topic.title} Hatırlama Formülü`,
      memory_trick: `🔑 Kodlama: ${topic.title.substring(0, 5).toUpperCase()}`,
      description: 'Konunun temel aşamalarını ve kritik ilkelerini zihninizde eşleştiriniz.',
    },
  ];

  // 12. Summary
  const summary = `"${topic.title}", AGS sınavında doğrudan soru potansiyeline sahip temel konulardandır.`;
  const whatToRemember = [
    `✓ "${topic.title}" kavramının resmi tanımını ve temel ilkelerini bil.`,
    `✓ Benzer kavramlar arasındaki ayırt edici farkı ve anahtar noktayı bil.`,
    `✓ Verilen bir sınav senaryosunda doğru kavramı teşhis edebil.`,
  ];

  // 13. Self-check
  const selfCheckQuestions: SelfCheckQuestion[] = [
    {
      question: `1. "${topic.title}" konusunun temel amacı ve kapsamı düşünüldüğünde, aşağıdakilerden hangisi en doğru değerlendirmedir?`,
      options: [
        { key: 'A', text: 'Yalnızca teorik düzeyde ezber gerektiren bir başlıktır.', isCorrect: false },
        { key: 'B', text: 'Kavramsal çerçevesi net, resmi kazanımlara ve pedagojik ilkelere dayanan bir yapıdır.', isCorrect: true },
        { key: 'C', text: 'Diğer konularla hiçbir bağlantısı bulunmayan bağımsız bir alandır.', isCorrect: false },
        { key: 'D', text: 'Sınavda yalnızca istisnai durumlarda sorgulanan önemsiz bir konudur.', isCorrect: false },
        { key: 'E', text: 'Mevzuattaki son değişikliklerle tamamen yürürlükten kalkmıştır.', isCorrect: false },
      ],
      explanation: 'Doğru cevap B seçeneğidir. AGS sınav formatında konular kuramsal temele dayalı, resmi kazanımlarla uyumlu ve uygulamayı test eden niteliktedir.',
    },
    {
      question: `2. "${topic.title}" ile ilgili bir sınav sorusunu çözerken aşağıdakilerden hangisine özellikle dikkat edilmelidir?`,
      options: [
        { key: 'A', text: 'Sorunun uzunluğuna bakarak hemen tahmin yürütmeye', isCorrect: false },
        { key: 'B', text: 'Soru kökündeki anahtar kavrama ve kavramlar arasındaki ayırt edici ölçütlere', isCorrect: true },
        { key: 'C', text: 'Tüm seçeneklerin eşit doğrulukta olduğunu varsaymaya', isCorrect: false },
        { key: 'D', text: 'Yalnızca ilk akla gelen seçeneği işaretleyip geçmeye', isCorrect: false },
        { key: 'E', text: 'Resmi mevzuat yerine kişisel kanaatlere göre karar vermeye', isCorrect: false },
      ],
      explanation: 'Doğru cevap B seçeneğidir. Ayırt edici ölçütleri belirlemek çeldiricileri elemeyi ve doğru sonuca ulaşmayı sağlar.',
    },
    {
      question: `3. Aşağıdaki ifadelerden hangisi "${topic.title}" bağlamında yapılan yaygın bir kavram yanılgısıdır?`,
      options: [
        { key: 'A', text: 'İlkelerin belirli bir hiyerarşi ve mantık içinde işlemesi', isCorrect: false },
        { key: 'B', text: 'Her durumun kendi özel koşulları ve istisnaları içinde değerlendirilmesi', isCorrect: false },
        { key: 'C', text: 'Benzer tüm kavramların aynı sonucu doğuracağını ve aralarında fark olmadığını düşünmek', isCorrect: true },
        { key: 'D', text: 'Pedagojik ve yasal ilkelerin birbiriyle uyumlu olması', isCorrect: false },
        { key: 'E', text: 'Kazanımların öğrenci merkezli yaklaşımla ilişkilendirilmesi', isCorrect: false },
      ],
      explanation: 'Doğru cevap C seçeneğidir. Kavramlar arasındaki ince ayrımları yok saymak en yaygın soru çözme hatasıdır.',
    },
    {
      question: `4. "${topic.title}" alanında verilen bir örnek durum analiz edildiğinde, doğru sonuca ulaşmak için izlenecek en etkili yol hangisidir?`,
      options: [
        { key: 'A', text: 'Olaydaki neden-sonuç ilişkisini ve temel kavramın işlevini belirlemek', isCorrect: true },
        { key: 'B', text: 'Metindeki detayları okumadan seçeneklere geçmek', isCorrect: false },
        { key: 'C', text: 'Sadece en uzun olan seçeneği doğru kabul etmek', isCorrect: false },
        { key: 'D', text: 'Geçmiş yılların sorularını ezberden işaretlemek', isCorrect: false },
        { key: 'E', text: 'Konunun kuramsal boyutunu tamamen göz ardı etmek', isCorrect: false },
      ],
      explanation: 'Doğru cevap A seçeneğidir. Olay örgüsündeki sebep-sonuç ilişkisini ve kavramın işlevini tespit etmek analitik çözümün esasıdır.',
    },
    {
      question: `5. "${topic.title}" konusunun AGS sınavındaki yeri ve önemi ile ilgili hangisi doğrudur?`,
      options: [
        { key: 'A', text: 'Öğretmen adayının mesleki ve alan yetkinliğini ölçen temel konulardandır.', isCorrect: true },
        { key: 'B', text: 'Sorularda çeldiricisi bulunmayan çok basit bir konudur.', isCorrect: false },
        { key: 'C', text: 'Yalnızca tek bir soru tipiyle ölçülebilir.', isCorrect: false },
        { key: 'D', text: 'Öğretim programlarıyla hiçbir ilişkisi bulunmamaktadır.', isCorrect: false },
        { key: 'E', text: 'Zaman harcanmadan atlanması gereken bir detaydır.', isCorrect: false },
      ],
      explanation: 'Doğru cevap A seçeneğidir. Konu, öğretmen adaylarının pedagojik, akademik ve yasal donanımını ölçen kilit başlıklardandır.',
    },
  ];

  return {
    id: `tc-${topic.id}`,
    topic_id: topic.id,
    title: topic.title,
    why_it_matters: whyItMatters,
    learning_objectives: learningObjectives,
    core_explanation: coreExplanation,
    key_concepts: keyConcepts,
    subtopics: subtopics,
    examples: examples,
    comparison_tables: comparisonTables,
    common_confusions: commonConfusions,
    exam_tips: examTips,
    mnemonics: mnemonics,
    summary: summary,
    what_to_remember: whatToRemember,
    self_check_questions: selfCheckQuestions,
  };
};

export const AGS_TOPIC_CONTENTS: Record<string, TopicContent> = {};
AGS_TOPICS.forEach((t) => {
  AGS_TOPIC_CONTENTS[t.id] = generateTopicContent(t);
});

// Rich questions for each unit
export const AGS_QUESTIONS: Question[] = [
  // Sözel Yetenek Soru 1
  {
    id: 'q-soz-u1-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-1',
    topic_id: 'topic-sozel-1-2',
    question_text:
      'Aşağıdaki cümlelerin hangisinde "kör" sözcüğü mecaz anlamda kullanılmıştır?',
    explanation:
      '"Olaylara karşı bu kadar kör kalması hepimizi derinden üzdü." cümlesinde kör sözcüğü görme duyusunu yitirmiş anlamında değil, "duyarsız, gerçeği göremeyen" mecaz anlamında kullanılmıştır.',
    difficulty: 'kolay',
    question_type: 'conceptual',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz1-a', question_id: 'q-soz-u1-1', option_key: 'A', option_text: 'Kör kuyuya düşen feneri güçlükle çıkardılar.', is_correct: false },
      { id: 'opt-sz1-b', question_id: 'q-soz-u1-1', option_key: 'B', option_text: 'Olaylara karşı bu kadar kör kalması hepimizi üzdü.', is_correct: true },
      { id: 'opt-sz1-c', question_id: 'q-soz-u1-1', option_key: 'C', option_text: 'Kör kediyi veterinere götürüp tedavi ettirdi.', is_correct: false },
      { id: 'opt-sz1-d', question_id: 'q-soz-u1-1', option_key: 'D', option_text: 'Kör bıçakla ekmeği kesmekte zorlanıyordu.', is_correct: false },
      { id: 'opt-sz1-e', question_id: 'q-soz-u1-1', option_key: 'E', option_text: 'Kör noktada kalan aynayı yeniden ayarladı.', is_correct: false },
    ],
  },
  // Sözel Yetenek Soru 2 (Paragraf)
  {
    id: 'q-soz-u2-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-2',
    topic_id: 'topic-sozel-2-8',
    question_text:
      '(I) Eğitimde teknoloji kullanımı her geçen gün artmaktadır. (II) Dijital araçlar öğrencilerin derse olan ilgisini ve motivasyonunu canlı tutar. (III) Akıllı tahtalar ve tabletler sınıf ortamında etkileşimi güçlendirir. (IV) Kitap fiyatlarının yükselmesi öğrencilerin kaynak teminini zorlaştırmaktadır. (V) Bu nedenle öğretmenlerin dijital materyal hazırlama becerileri büyük önem taşır.\n\nBu parçadaki numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?',
    explanation:
      'Parçada eğitimde dijital teknolojilerin rolünden bahsedilirken IV. cümlede konu aniden "kitap fiyatlarının yükselmesine" geçmiş ve akışı bozmuştur.',
    difficulty: 'orta',
    question_type: 'scenario',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz2-a', question_id: 'q-soz-u2-1', option_key: 'A', option_text: 'I', is_correct: false },
      { id: 'opt-sz2-b', question_id: 'q-soz-u2-1', option_key: 'B', option_text: 'II', is_correct: false },
      { id: 'opt-sz2-c', question_id: 'q-soz-u2-1', option_key: 'C', option_text: 'III', is_correct: false },
      { id: 'opt-sz2-d', question_id: 'q-soz-u2-1', option_key: 'D', option_text: 'IV', is_correct: true },
      { id: 'opt-sz2-e', question_id: 'q-soz-u2-1', option_key: 'E', option_text: 'V', is_correct: false },
    ],
  },
  // Sayısal Yetenek Soru 1
  {
    id: 'q-say-u1-1',
    subject_id: 'sayisal-yetenek',
    unit_id: 'unit-sayisal-1',
    topic_id: 'topic-sayisal-1-8',
    question_text:
      'Dört basamaklı 5a2b sayısı 36 ile tam bölünebilen bir çift sayıdır.\n\nBuna göre a’nın alabileceği değerler toplamı kaçtır?',
    explanation:
      '36 ile bölünebilme kuralı için sayı hem 4’e hem 9’a tam bölünmelidir. Sayı çift olduğundan ve son iki basamak 4’ün katı olacağından 2b için b = 0, 4, 8 olabilir. 9 ile bölünebilme için rakamlar toplamı 9’un katı olmalıdır. b=0 için a=2; b=4 için a=7; b=8 için a=3 olur. a değerleri toplamı 2 + 7 + 3 = 12’dir.',
    difficulty: 'orta',
    question_type: 'application',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sy1-a', question_id: 'q-say-u1-1', option_key: 'A', option_text: '10', is_correct: false },
      { id: 'opt-sy1-b', question_id: 'q-say-u1-1', option_key: 'B', option_text: '12', is_correct: true },
      { id: 'opt-sy1-c', question_id: 'q-say-u1-1', option_key: 'C', option_text: '14', is_correct: false },
      { id: 'opt-sy1-d', question_id: 'q-say-u1-1', option_key: 'D', option_text: '16', is_correct: false },
      { id: 'opt-sy1-e', question_id: 'q-say-u1-1', option_key: 'E', option_text: '18', is_correct: false },
    ],
  },
  // Tarih Soru 1
  {
    id: 'q-tar-u1-1',
    subject_id: 'tarih',
    unit_id: 'unit-tarih-1',
    topic_id: 'topic-tarih-1-6',
    question_text:
      'İslamiyet öncesi Türk devletlerinde hükümdarın yetkilerini kısıtlayan ve gerektiğinde hükümdarı dahi yargılama yetkisine sahip olan sözlü hukuk kuralları bütününe ne ad verilir?',
    explanation:
      'İslamiyet öncesi Türk devletlerinde hükümdar dahil herkesin uymak zorunda olduğu yazısız örfi hukuk kurallarına "Töre" denir.',
    difficulty: 'kolay',
    question_type: 'knowledge',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-tr1-a', question_id: 'q-tar-u1-1', option_key: 'A', option_text: 'Kurultay', is_correct: false },
      { id: 'opt-tr1-b', question_id: 'q-tar-u1-1', option_key: 'B', option_text: 'Kut', is_correct: false },
      { id: 'opt-tr1-c', question_id: 'q-tar-u1-1', option_key: 'C', option_text: 'Töre', is_correct: true },
      { id: 'opt-tr1-d', question_id: 'q-tar-u1-1', option_key: 'D', option_text: 'Yargu', is_correct: false },
      { id: 'opt-tr1-e', question_id: 'q-tar-u1-1', option_key: 'E', option_text: 'Şanyü', is_correct: false },
    ],
  },
  // Coğrafya Soru 1
  {
    id: 'q-cog-u1-1',
    subject_id: 'cografya',
    unit_id: 'unit-cografya-1',
    topic_id: 'topic-cografya-1-1',
    question_text:
      "Türkiye'de güneyden kuzeye doğru gidildikçe çizgisel hızın azalması ve gece-gündüz süre farkının artması Türkiye'nin hangi özelliğiyle açıklanır?",
    explanation:
      "Çizgisel hızın kutuplara doğru azalması ve ekinokslar dışındaki günlerde gece-gündüz farkının kutuplara doğru artması Türkiye'nin Kuzey Yarım Küre'deki matematik (mutlak) konumu ve enlem etkisiyle açıklanır.",
    difficulty: 'kolay',
    question_type: 'conceptual',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-cg1-a', question_id: 'q-cog-u1-1', option_key: 'A', option_text: 'Özel (Göreceli) Konumu', is_correct: false },
      { id: 'opt-cg1-b', question_id: 'q-cog-u1-1', option_key: 'B', option_text: 'Matematik (Mutlak) Konumu / Enlem Etkisi', is_correct: true },
      { id: 'opt-cg1-c', question_id: 'q-cog-u1-1', option_key: 'C', option_text: 'Jeopolitik Konumu', is_correct: false },
      { id: 'opt-cg1-d', question_id: 'q-cog-u1-1', option_key: 'D', option_text: 'Yükselti ve Engebe Durumu', is_correct: false },
      { id: 'opt-cg1-e', question_id: 'q-cog-u1-1', option_key: 'E', option_text: 'Denizellik ve Karasallık', is_correct: false },
    ],
  },
  // Eğitim Bilimleri Soru 1
  {
    id: 'q-eb-u1-1',
    subject_id: 'egitim-bilimleri',
    unit_id: 'unit-eb-1',
    topic_id: 'topic-eb-1-18',
    question_text:
      'Bir sınıf öğretmeni matematik dersinde tahtaya problem çözen öğrenciye aferin diyerek gülümsemiş; öğrencinin sonraki derslerde de tahtaya kalkma isteğinin arttığı görülmüştür.\n\nÖğretmenin sergilediği tutum ve sonucunda ortaya çıkan durum aşağıdakilerden hangisidir?',
    explanation:
      'Öğrencinin istendik davranışının ardından ortama hoş bir uyarıcının (övgü, gülümseme) eklenmesi ve davranış sıklığının artması "Olumlu Pekiştirme"dir.',
    difficulty: 'kolay',
    question_type: 'scenario',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-eb1-a', question_id: 'q-eb-u1-1', option_key: 'A', option_text: 'Olumsuz pekiştirme', is_correct: false },
      { id: 'opt-eb1-b', question_id: 'q-eb-u1-1', option_key: 'B', option_text: 'Olumlu pekiştirme', is_correct: true },
      { id: 'opt-eb1-c', question_id: 'q-eb-u1-1', option_key: 'C', option_text: '1. Tip ceza', is_correct: false },
      { id: 'opt-eb1-d', question_id: 'q-eb-u1-1', option_key: 'D', option_text: 'Premack ilkesi', is_correct: false },
      { id: 'opt-eb1-e', question_id: 'q-eb-u1-1', option_key: 'E', option_text: 'Alışma', is_correct: false },
    ],
  },
  // Türk Millî Eğitim Sistemi Soru 1 (Maarif Modeli)
  {
    id: 'q-tmes-u2-1',
    subject_id: 'milli-egitim-sistemi',
    unit_id: 'unit-tmes-2',
    topic_id: 'topic-tmes-2-1',
    question_text:
      'Türkiye Yüzyılı Maarif Modeli’nde öğrenci profilinin merkezinde yer alan, bilgi ve beceriyi erdemli davranışa dönüştürmeyi amaçlayan bütüncül çerçeve aşağıdakilerden hangisidir?',
    explanation:
      'Türkiye Yüzyılı Maarif Modeli, aklıselim, kalbiselim ve zevkiselim nesiller yetiştirmek için "Erdem-Değer-Eylem" çerçevesini merkeze alır.',
    difficulty: 'orta',
    question_type: 'knowledge',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-tm1-a', question_id: 'q-tmes-u2-1', option_key: 'A', option_text: 'Yalnızca akademik başarı odaklılık', is_correct: false },
      { id: 'opt-tm1-b', question_id: 'q-tmes-u2-1', option_key: 'B', option_text: 'Erdem-Değer-Eylem Çerçevesi', is_correct: true },
      { id: 'opt-tm1-c', question_id: 'q-tmes-u2-1', option_key: 'C', option_text: 'Geleneksel esasici öğretim', is_correct: false },
      { id: 'opt-tm1-d', question_id: 'q-tmes-u2-1', option_key: 'D', option_text: 'Davranışçı şartlanma modeli', is_correct: false },
      { id: 'opt-tm1-e', question_id: 'q-tmes-u2-1', option_key: 'E', option_text: 'Sadece dijital okuryazarlık', is_correct: false },
    ],
  },
  // Mevzuat Soru 1 (7528 ÖMK)
  {
    id: 'q-mev-u1-1',
    subject_id: 'mevzuat',
    unit_id: 'unit-mevzuat-1',
    topic_id: 'topic-mevzuat-1-1',
    question_text:
      '7528 Sayılı Öğretmenlik Mesleği Kanununa göre, Milli Eğitim Akademisinde hazırlık eğitimi alacak adayların seçiminde esas alınan sınav aşağıdakilerden hangisidir?',
    explanation:
      '7528 Sayılı ÖMK gereğince Akademiye kabul edilecek adaylar "Akademi Giriş Sınavı" (AGS) puan üstünlüğüne göre belirlenir.',
    difficulty: 'kolay',
    question_type: 'knowledge',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-mv1-a', question_id: 'q-mev-u1-1', option_key: 'A', option_text: 'Akademi Giriş Sınavı (AGS)', is_correct: true },
      { id: 'opt-mv1-b', question_id: 'q-mev-u1-1', option_key: 'B', option_text: 'EKYS', is_correct: false },
      { id: 'opt-mv1-c', question_id: 'q-mev-u1-1', option_key: 'C', option_text: 'YÖKDİL', is_correct: false },
      { id: 'opt-mv1-d', question_id: 'q-mev-u1-1', option_key: 'D', option_text: 'Adaylık Kaldırma Sınavı', is_correct: false },
      { id: 'opt-mv1-e', question_id: 'q-mev-u1-1', option_key: 'E', option_text: 'Yurtdışı Öğretmenlik Sınavı', is_correct: false },
    ],
  },
];

export const AGS_MINI_EXAMS: MiniExam[] = [
  {
    id: 'mini-exam-sozel-1',
    unit_id: 'unit-sozel-1',
    title: 'Sözcükte ve Cümlede Anlam Ünite Mini Sınavı',
    description: 'Sözcük ve cümle anlam ilişkilerini kapsayan 10 soruluk tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[0]],
  },
  {
    id: 'mini-exam-sozel-2',
    unit_id: 'unit-sozel-2',
    title: 'Paragraf ve Sözel Mantık Ünite Mini Sınavı',
    description: 'Paragraf yapısı, ana fikir ve akıl yürütme tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[1]],
  },
  {
    id: 'mini-exam-sayisal-1',
    unit_id: 'unit-sayisal-1',
    title: 'Temel Matematik ve Sayılar Ünite Mini Sınavı',
    description: 'Sayı kümeleri ve bölünebilme kuralları tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[2]],
  },
  {
    id: 'mini-exam-tarih-1',
    unit_id: 'unit-tarih-1',
    title: 'İlk Türk Devletleri ve Türk-İslam Tarihi Mini Sınavı',
    description: 'Devlet teşkilatı ve kültür medeniyet tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[3]],
  },
  {
    id: 'mini-exam-cografya-1',
    unit_id: 'unit-cografya-1',
    title: 'Coğrafi Konum ve Fiziki Coğrafya Mini Sınavı',
    description: 'Yer şekilleri, iklim ve konum tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[4]],
  },
  {
    id: 'mini-exam-eb-1',
    unit_id: 'unit-eb-1',
    title: 'Eğitimin Temelleri ve Öğrenme Psikolojisi Mini Sınavı',
    description: 'Koşullanma ve öğrenme kuramları tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[5]],
  },
  {
    id: 'mini-exam-tmes-2',
    unit_id: 'unit-tmes-2',
    title: 'Türkiye Yüzyılı Maarif Modeli Mini Sınavı',
    description: 'Güncel eğitim yaklaşımları ve Maarif Modeli tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[6]],
  },
  {
    id: 'mini-exam-mevzuat-1',
    unit_id: 'unit-mevzuat-1',
    title: '7528 Sayılı ÖMK & Mevzuat Mini Sınavı',
    description: 'Öğretmenlik Mesleği Kanunu ve mevzuat tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[7]],
  },
];

export const AGS_MOCK_EXAMS: MockExam[] = [
  {
    id: 'mock-ags-tier-1',
    title: '2025 AGS Türkiye Geneli Prova Denemesi - 1',
    description: '7 Dersin ilk 2 ünitesini kapsayan temel düzey genel AGS prova denemesi.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'temel',
    tier_name: 'Deneme 1 — Temel Seviye',
    questions: AGS_QUESTIONS,
  },
  {
    id: 'mock-ags-tier-2',
    title: '2025 AGS Türkiye Geneli Standart Deneme - 2',
    description: 'ÖSYM ve MEB soru ağırlıklarına tam uyumlu standart orta düzey genel deneme.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'orta',
    tier_name: 'Deneme 2 — Orta Seviye',
    questions: AGS_QUESTIONS,
  },
  {
    id: 'mock-ags-tier-3',
    title: '2025 AGS İleri Düzey Vaka ve Muhakeme Denemesi - 3',
    description: 'Çeldiricisi güçlü, senaryo ve muhakeme ağırlıklı orta-zor seviye genel deneme.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'orta-zor',
    tier_name: 'Deneme 3 — Orta-Zor Seviye',
    questions: AGS_QUESTIONS,
  },
  {
    id: 'mock-ags-tier-4',
    title: '2025 AGS Derece Hedefleyenler İçin Zor Prova - 4',
    description: 'Akademiye yüksek dereceyle girmeyi hedefleyen adaylar için zor düzey AGS provası.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'zor',
    tier_name: 'Deneme 4 — Zor Seviye',
    questions: AGS_QUESTIONS,
  },
];
