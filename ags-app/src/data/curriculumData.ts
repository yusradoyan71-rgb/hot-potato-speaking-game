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
    description: 'Okuduğunu Anlama, Paragraf ve Metin Stratejileri, Sözel Akıl Yürütme ve Mantık.',
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
  // 1. SÖZEL YETENEK (3 Beceri Alanı)
  {
    id: 'unit-sozel-1',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 1 — OKUDUĞUNU ANLAMA VE BAĞLAMSAL ÇIKARIM',
    description: 'Metnin ana ve yardımcı düşünceleri, bağlamdan anlam çıkarma, çıkarım yapma, örtülü anlam ve yazarın amacı.',
    order_index: 1,
  },
  {
    id: 'unit-sozel-2',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 2 — PARAGRAF VE METİN MİMARİSİ',
    description: 'Paragrafta ana fikir ve kapsam filtresi, tamamlama, akışı bozan cümle, cümle sıralama, anlatım biçimleri ve çeldirici eleme.',
    order_index: 2,
  },
  {
    id: 'unit-sozel-3',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 3 — SÖZEL AKIL YÜRÜTME VE MANTIK',
    description: 'Sıralama, yerleştirme, eşleştirme, koşullu akıl yürütme, değişkenler tablosu ve şema yorumlama.',
    order_index: 3,
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
  // 1. SÖZEL YETENEK - ÜNİTE 1: OKUDUĞUNU ANLAMA VE BAĞLAMSAL ÇIKARIM (8 Topics)
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-1', title: 'Ana Düşünceyi Bulma ve Temel İletiyi Belirleme', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-2', title: 'Metnin Konusunu ve Kapsamını Saptama', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-3', title: 'Yardımcı Düşünceler ve Seçenek Eşleştirme', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-4', title: 'Metinden Çıkarım Yapma ve Örtülü Anlamı Yakalama', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-5', title: 'Bağlamdan Anlam Çıkarma (Sözcük ve İfadelerin Metindeki İşlevi)', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-6', title: 'Cümleler Arası Anlam İlişkileri (Neden, Amaç, Koşul, Karşılaştırma)', mins: 25 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-7', title: 'Yazarın Amacı, Tutumu ve Bakış Açısını Belirleme', mins: 20 },
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1-8', title: 'Metin Bilgisi ile Seçenekleri Karşılaştırma ve Eleme Stratejisi', mins: 25 },

  // 1. SÖZEL YETENEK - ÜNİTE 2: PARAGRAF VE METİN MİMARİSİ (8 Topics)
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-1', title: 'Paragrafta Ana Düşünce ve Çeldirici Eleme Yöntemi', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-2', title: 'Paragraf Tamamlama (Giriş, Gelişme, Sonuç Bağlantıları)', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-3', title: 'Akışı Bozan Cümleyi Belirleme (Düşünce Yönü ve Konu Sapması)', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-4', title: 'Cümlelerin Yerini Belirleme ve Mantıksal Sıralama', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-5', title: 'Paragrafın Yapısı ve Bölümleri Arasındaki Bağlar', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-6', title: 'Anlatım Biçimleri ve Düşünceyi Geliştirme Yolları', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-7', title: 'Çoklu ve Karşılaştırmalı Metin Analizi', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2-8', title: 'Yoğun ve Çeldiricisi Güçlü AGS Metinlerini Çözme Stratejisi', mins: 30 },

  // 1. SÖZEL YETENEK - ÜNİTE 3: SÖZEL AKIL YÜRÜTME VE MANTIK (6 Topics)
  { unitId: 'unit-sozel-3', id: 'topic-sozel-3-1', title: 'Sıralama ve Konumlandırma Problemleri', mins: 30 },
  { unitId: 'unit-sozel-3', id: 'topic-sozel-3-2', title: 'Değişkenler Tablosu Kurma ve Yerleştirme', mins: 30 },
  { unitId: 'unit-sozel-3', id: 'topic-sozel-3-3', title: 'Eşleştirme ve Grup İlişkileri Analizi', mins: 30 },
  { unitId: 'unit-sozel-3', id: 'topic-sozel-3-4', title: 'Koşullu Akıl Yürütme ve Kesişim Kuralları', mins: 30 },
  { unitId: 'unit-sozel-3', id: 'topic-sozel-3-5', title: 'Tablo ve Şema Yorumlama', mins: 25 },
  { unitId: 'unit-sozel-3', id: 'topic-sozel-3-6', title: 'Çoklu Koşullardan Kesin Yargı ve Olasılık Çıkarma', mins: 35 },

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
  const isUnit1 = topic.unit_id === 'unit-sozel-1';
  const isUnit2 = topic.unit_id === 'unit-sozel-2';
  const isUnit3 = topic.unit_id === 'unit-sozel-3';

  // 1. UNIT 1: OKUDUĞUNU ANLAMA VE BAĞLAMSAL ÇIKARIM
  if (isUnit1) {
    if (topic.id === 'topic-sozel-1-1' || topic.title.includes('Ana Düşünceyi Bulma')) {
      return {
        id: `tc-${topic.id}`,
        topic_id: topic.id,
        title: topic.title,
        why_it_matters: 'AGS Sözel Yetenek testinin omurgası ana düşünceyi yakalamaktır. Yazarın metni yazma amacını ve savunulan temel tezi tek bir cümleye indirgeyebilmek; çeldirici seçeneklerdeki "aşırı genelleme", "kapsam daraltma" ve "metin dışı yorum" tuzaklarına düşmeden 30-40 saniyede net cevaba ulaşmanızı sağlar.',
        learning_objectives: [
          'Paragrafın bütününe hâkim olarak yazarın okuyucuya iletmek istediği asıl mesajı saptayabilmek.',
          'Örnekleme, tanık gösterme gibi yardımcı unsurları ana düşünceden ayırt edebilmek.',
          'Seçeneklerdeki aşırı genelleme (tüm, hep, kesinlikle) veya kapsam daraltma (parçanın tek bir cümlesini özetleyen) tuzaklarını eleyebilmek.',
          'Metnin ilk ve son cümlelerindeki yönlendirici yargıları analiz edebilmek.',
        ],
        core_explanation: `## 1. Bu Soru Tipini Nasıl Çözerim? (Adım Adım Strateji)
1. **Soru Kökünü Okuyun:** "Bu parçada asıl vurgulanmak istenen...", "Yazarın bu parçadaki temel düşüncesi..." gibi kökler doğrudan ana düşünceyi sorar.
2. **Metnin Tamamını Bütüncül Okuyun:** Parçanın sadece tek bir cümlesine odaklanmayın. Metni okurken zihninizde şu soruyu sorun: *"Yazar bu yazıyı hangi cümleyi ispatlamak veya okura kabul ettirmek için kaleme aldı?"*
3. **Giriş ve Sonuç Cümlelerine Dikkat Edin:** Düşünce yazılarında ana düşünce genellikle son cümlede ("Kısacası, bu nedenle, özetle, aslında") veya ilk cümlede verilir.
4. **Örnekleri Ana Düşünce Sanmayın:** Metinde geçen bilimsel araştırmalar, tarihi olaylar veya yazarın anlattığı bir anı ana düşünce değil, onu destekleyen **araçlardır**.
5. **Seçenekleri Filtreleyin:** Metnin tamamını kucaklamayan, sadece tek bir yardımcı fikri aktaran şıkları derhal eleyin.

## 2. Çeldiriciler Nasıl Hazırlanır? (ÖSYM Tuzakları)
* **Kapsam Daraltması Tuzağı:** Metinde gerçekten geçen ve doğru olan bir bilgiyi verir ancak bu bilgi parçanın yalnızca %20'sini kapsar. Aday *"Bu metinde yazıyordu"* diyerek işaretler ve yanılır.
* **Aşırı Genelleme Tuzağı:** Metinde yalnızca belirli bir grup (örneğin *"günümüz roman yazarları"*) eleştirilirken seçenekte *"tüm sanatçılar"* denilerek evren genişletilir.
* **Metin Dışı Doğruluk Tuzağı:** Günlük hayatta kesinlikle doğru olan genel kültür bilgisi şıkka konur ancak metinde yazar bundan hiç bahsetmemiştir.

## 3. Yanlış Analizi: Neden Hata Yapıldı?
* *Hata 1:* Parçada geçen bir sözcüğü aynen gördüğüm şıkkı işaretledim → **Teşhis:** Kelime eşleştirme tuzağına düştünüz; kelimenin geçtiği cümle ana fikir değil yan yargıdır.
* *Hata 2:* "Bence bu çok doğru bir fikir" diyerek işaretledim → **Teşhis:** Kendi fikrinizi yazarın fikrinin önüne geçirdiniz.`,
        key_concepts: [
          {
            term: 'Ana Düşünce Filtresi',
            definition: 'Metnin tamamını şemsiye gibi örten ve tüm yardımcı düşünceleri birbirine bağlayan temel tezdir.',
            practical_meaning: 'Doğru seçenek, parçadaki tüm örneklerin varoluş sebebini açıklar.',
          },
          {
            term: 'Kapsam Uyumu',
            definition: 'Seçenekteki yargının genişliğinin metnin sınırlarıyla birebir örtüşmesi durumudur.',
            practical_meaning: 'Ne metinden daha dar ne de metinden daha geniş olan seçenek doğru yanıttır.',
          },
        ],
        subtopics: [
          {
            id: `${topic.id}-sub-1`,
            number: '1.1',
            title: 'Paragrafı Özetleme ve Anahtar Yargıyı Ayıklama',
            content: 'Metni okuduktan sonra 3-4 kelimeyle "Yazar ne demek istiyor?" özetini çıkararak seçeneklerle karşılaştırın.',
            key_takeaway: 'Örnekleri çıkarıp attığınızda geriye kalan yalın cümle ana düşüncedir.',
          },
          {
            id: `${topic.id}-sub-2`,
            number: '1.2',
            title: 'Çeldirici Seçenekleri Eleme Matrisi',
            content: 'Aşırı genelleme, kapsam daraltma ve öznel yorum içeren seçenekleri eleyerek tek bir sağlam şıkka ulaşın.',
            key_takeaway: 'Metinde geçmeyen doğru bilgi, yanlış seçenektir.',
          },
        ],
        examples: [
          {
            title: 'Ana Düşünce Soru ve Çeldirici Analizi',
            scenario: 'Metin: "Gerçek bir sanat eseri, okurunu yalnızca eğlendirip hoşça vakit geçirtmekle yetinmez. O, okurun zihninde derin yarıklar açar, kurulu düzenini sorgulatır ve onu bildiklerinin ötesine taşır. Bir romanı bitirdiğinizde dünyaya başladığınız anki gözlerle bakıyorsanız o roman size hiçbir şey katmamıştır."',
            analysis: 'Bu parçada yazar; sanat eserinin eğlendirme fonksiyonunun yetersiz olduğunu, asıl görevinin okurun düşünce dünyasını dönüştürmek ve sorgulatmak olduğunu vurgulamaktadır. Doğru cevap doğrudan "Sanat yapıtının temel işlevi okuru zihinsel bir dönüşüme uğratmaktır" yargısıdır.',
            domain: 'Sözel Yetenek & Okuduğunu Anlama',
          },
        ],
        comparison_tables: [
          {
            title: 'Ana Düşünce Seçenek Analiz Tablosu',
            headers: ['Seçenek Türü', 'Örnek Seçenek İfadesi', 'Eleme / Doğruluk Nedeni'],
            rows: [
              ['Doğru Seçenek', 'Nitelikli eserler okuyucunun bakış açısını köklü biçimde dönüştürür.', 'Parçanın bütününde savunulan ana mesajdır.'],
              ['Kapsam Daraltan Çeldirici', 'Romanlar insanları eğlendirmek amacıyla okunmalıdır.', 'Parçadaki karşı çıkılan yardımcı unsura takılmıştır.'],
              ['Aşırı Genelleme Çeldiricisi', 'Tüm edebi metinler okuyucuyu hayattan koparmayı hedefler.', 'Metinde olmayan aşırı ve yanlış bir genellemedir.'],
              ['Metin Dışı Yorum Çeldiricisi', 'Yazarlar geçim kaygısı nedeniyle popüler kitaplar yazmaktadır.', 'Mantıklı görünse de parçada bu konuya hiç değinilmemiştir.'],
            ],
          },
        ],
        common_confusions: [
          {
            wrong_belief: 'Paragraftaki en uzun ve en süslü cümle ana düşüncedir.',
            correct_distinction: 'Ana düşünce süslü olmak zorunda değildir; yazarın vermek istediği en yalın ve kapsayıcı mesajdır.',
            tip: 'Cümlenin uzunluğuna değil, metnin tamamını karşılayıp karşılamadığına odaklanın.',
          },
        ],
        exam_tips: [
          {
            tip: "AGS'DE DİKKAT: Ana düşünce sorularında 'Hangisi parçadan çıkarılamaz?' değil, 'Yazarın asıl anlatmak istediği nedir?' sorulur. Parçada geçen her doğru bilgiye atlamayın.",
            importance: 'critical',
          },
        ],
        mnemonics: [
          {
            title: 'Ana Düşünce Pusulası',
            memory_trick: '🔑 Kural: ŞEMSİYE SEÇENEĞİ BUL, PARÇALARI ALTI TOPLA',
            description: 'Diğer tüm cümleler o seçeneği ispatlamak için yazılmış gibi duruyorsa doğru cevaptır.',
          },
        ],
        summary: 'Ana düşünce, metnin yazılış gayesidir. Yardımcı düşünceler, örnekler ve açıklamalar bu ana tezi ayakta tutan sütunlardır.',
        what_to_remember: [
          '✓ Soru kökünü dikkatle oku: "Asıl anlatılmak istenen" ana düşüncedir.',
          '✓ Parçanın tamamını oku, tek bir cümleye bağlanıp kalma.',
          '✓ Yalnızca tek bir örneği anlatan şıkları kapsam darlığından ele.',
          '✓ Metinde geçmeyen genel kültür bilgilerini kesinlikle kabul etme.',
          '✓ Aşırı genelleme yapan iddialı sözcüklere (asla, daima, tüm) karşı uyanık ol.',
        ],
        self_check_questions: [
          {
            question: '1. "Eğitimde dijital teknolojilerin yaygınlaşması elbette öğrenme süreçlerini hızlandırmıştır. Ancak ekran karşısında saatler geçiren bir öğrencinin eleştirel düşünme, empati kurma ve derinleşme becerileri körelmektedir. Bilgiyi hızlıca tüketmek, onu içselleştirdiğimiz anlamına gelmez. Gerçek öğrenme; bilgiyi sindirmek, üzerine düşünmek ve hayatla bağ kurmakla mümkündür."\n\nBu parçada asıl vurgulanmak istenen düşünce aşağıdakilerden hangisidir?',
            options: [
              { key: 'A', text: 'Teknoloji kullanımının öğrenme hızına katkı sağladığı', isCorrect: false },
              { key: 'B', text: 'Okullarda bilgisayar kullanımının tamamen yasaklanması gerektiği', isCorrect: false },
              { key: 'C', text: 'Nitelikli öğrenmenin, bilginin hızla tüketilmesinden ziyade derinlemesine sindirilmesiyle gerçekleştiği', isCorrect: true },
              { key: 'D', text: 'Öğrencilerin ekrandan okuma yaparken daha az yorulduğu', isCorrect: false },
              { key: 'E', text: 'Geleneksel eğitim yöntemlerinin artık hiçbir işe yaramadığı', isCorrect: false },
            ],
            explanation: 'Doğru cevap C seçeneğidir. Parçanın ilk cümlesi (A şıkkı) sadece bir giriş tespitidir. Yazarın asıl savunmak istediği tez son iki cümlede belirtilen "bilginin sindirilmesi ve derinlemesine işlenmesi" gerektiğidir. [Yanlış Analizi: A seçeneğini işaretleyenler yardımcı düşünceye takılmış; B ve E seçeneğini işaretleyenler aşırı genelleme yapmıştır.]',
          },
          {
            question: '2. "Bir eleştirmen, değerlendirdiği esere kendi zevklerinin ve önyargılarının penceresinden bakıyorsa o inceleme eleştiri değil, sadece kişisel bir günlüktür. Eleştirmenin asıl görevi, eserin kendi iç tutarlılığını ve sanatsal değerini nesnel ölçütlerle ortaya koymaktır."\n\nBu parçaya göre eleştirmenin temel sorumluluğu nedir?',
            options: [
              { key: 'A', text: 'Okuyucuların beklentilerine göre kitap tavsiyesinde bulunmak', isCorrect: false },
              { key: 'B', text: 'Eseri kişisel beğenilerin ötesinde nesnel ölçütlerle analiz etmek', isCorrect: true },
              { key: 'C', text: 'Yazarın özel hayatını ve dünya görüşünü irdelemek', isCorrect: false },
              { key: 'D', text: 'Kendi edebi tarzını okuyucuya empoze etmek', isCorrect: false },
              { key: 'E', text: 'Popüler olan eserleri daha fazla öne çıkarmak', isCorrect: false },
            ],
            explanation: 'Doğru cevap B seçeneğidir. Parça açıkça eleştirinin tarafsız ve nesnel ölçütlerle yapılması gerektiğini vurgulamaktadır.',
          },
          {
            question: '3. Paragraf ana düşünce sorularında adayın "metinde yer almasına rağmen" bir seçeneği elemesi gereken durum hangisidir?',
            options: [
              { key: 'A', text: 'Seçeneğin yalnızca tek bir yardımcı düşünceyi veya örneği içermesi', isCorrect: true },
              { key: 'B', text: 'Seçeneğin metnin tamamını kucaklaması', isCorrect: false },
              { key: 'C', text: 'Seçenekte yazarın temel iletisinin özetlenmesi', isCorrect: false },
              { key: 'D', text: 'Seçeneğin soru köküyle doğrudan uyumlu olması', isCorrect: false },
              { key: 'E', text: 'Seçeneğin nesnel bir dille yazılmış olması', isCorrect: false },
            ],
            explanation: 'Doğru cevap A seçeneğidir. Bir yargı metinde kelimesi kelimesine geçse bile, yalnızca bir alt detayı veya örneği yansıtıyorsa ana düşünce olamaz; kapsamı dar olduğu için elenmelidir.',
          },
          {
            question: '4. "Şehirlerin betonlaşması yalnızca yeşil alanları yok etmekle kalmıyor; insanların birbirleriyle olan bağlarını, mahalle kültürünü ve ortak yaşam sevincini de kurutuyor. Yüksek duvarların arkasına çekilen modern insan, kalabalıklar içinde giderek daha da yalnızlaşıyor."\n\nBu parçadan çıkarılacak en kapsamlı yargı hangisidir?',
            options: [
              { key: 'A', text: 'Çarpık kentleşme ve betonlaşma, insanların toplumsal ve insani bağlarını zayıflatmaktadır.', isCorrect: true },
              { key: 'B', text: 'Şehirlerde yaşayan herkes mutsuz ve yalnızdır.', isCorrect: false },
              { key: 'C', text: 'Yüksek katlı binaların inşası tamamen durdurulmalıdır.', isCorrect: false },
              { key: 'D', text: 'Köy hayatı şehir hayatından her zaman daha ekonomiktir.', isCorrect: false },
              { key: 'E', text: 'İnsanlar yeşil alanları korumak için köylere taşınmaktadır.', isCorrect: false },
            ],
            explanation: 'Doğru cevap A seçeneğidir. Parça, kentleşmenin fiziki zararından çok insani ve toplumsal ilişkiler üzerindeki yıkıcı etkisini (yalnızlaşma, mahalle kültürünün yok oluşu) ele almaktadır. B seçeneğinde aşırı genelleme ("herkes") yapılmıştır.',
          },
          {
            question: '5. Bir metinde ana düşünce aranırken aşağıdaki adımlardan hangisi kesinlikle yapılmamalıdır?',
            options: [
              { key: 'A', text: 'Yazarın savunduğu temel tezi belirlemek', isCorrect: false },
              { key: 'B', text: 'Kişisel doğruları yazarın metnindeki düşüncenin önüne koyup ona göre şık seçmek', isCorrect: true },
              { key: 'C', text: 'Aşırı genelleme içeren iddialı seçenekleri elemek', isCorrect: false },
              { key: 'D', text: 'Metnin ilk ve son cümlelerindeki yönlendiricilere dikkat etmek', isCorrect: false },
              { key: 'E', text: 'Parçadaki örneklerin neyi ispatlamaya çalıştığını analiz etmek', isCorrect: false },
            ],
            explanation: 'Doğru cevap B seçeneğidir. AGS sorularında adayın kendi dünya görüşü veya doğruları değil, yalnızca ve sadece metindeki yazarın savunduğu düşünce esas alınmalıdır.',
          },
        ],
      };
    }

    if (topic.id === 'topic-sozel-1-5' || topic.title.includes('Bağlamdan Anlam')) {
      return {
        id: `tc-${topic.id}`,
        topic_id: topic.id,
        title: topic.title,
        why_it_matters: 'AGS Sözel Yetenek sorularında sözcükler sözlükteki kuru tanımlarıyla değil, metnin bütününde yüklendikleri anlamsal işlevle ölçülür. Bir sözcüğün altı çizildiğinde sözlükteki ilk anlamına aldanmadan cümlenin atmosferindeki gerçek karşılığını bulmak, paragraf yorumlama hızınızı ve doğruluğunuzu doğrudan artırır.',
        learning_objectives: [
          'Sözcüğün cümle ve metin içindeki bağlamsal anlamını doğru tespit edebilmek.',
          'Sözlükteki ilk anlamın çeldirici olarak seçeneklere yerleştirilme taktiğini fark edip eleyebilmek.',
          'Seçenekteki ifadeyi metindeki sözcüğün yerine koyarak sağlamasını yapabilmek (Cümle-İçi Yerine Koyma Metodu).',
          'Sözcüğün cümleye kattığı mecazi, somutlaştırıcı veya ironik anlamları çözümleyebilmek.',
        ],
        core_explanation: `## 1. Bu Soru Tipini Nasıl Çözerim? (Adım Adım Strateji)
1. **Sözcüğü Cümleden Koparmayın:** Asla sadece altı çizili sözcüğe bakıp hemen şıklara inmeyin. Önce cümlenin tamamını, gerekirse önceki ve sonraki cümleyi okuyun.
2. **"Cümle-İçi Yerine Koyma" Metodunu Uygulayın:** Doğru olduğunu düşündüğünüz seçenekteki kelime grubunu metindeki sözcüğün yerine koyun. Cümlenin anlam bütünlüğü ve yazarın kastettiği duygu bozulmuyorsa doğru cevaptır.
3. **Sözlük Anlamı Çeldiricisine Dikkat Edin:** Soru hazırlayıcılar adayın aceleciliğini bildikleri için sözcüğün en bilinen sözlük anlamını A veya B seçeneğine koyarlar. Metindeki bağlamsal mecazı yakalamadan işaretlemeyin.
4. **Kelimelerin Duygu Değerini İnceleyin:** Yazar o sözcüğü överek mi, yermek amacıyla mı yoksa nötr bir tespit için mi kullanmış? Bu ipucu yanlış şıkları hemen eler.

## 2. Çeldiriciler Nasıl Hazırlanır? (ÖSYM Tuzakları)
* **Sözlükteki İlk Anlam Tuzağı:** "Bu yazar dili çok *ağır* kullanıyor" cümlesinde "ağır" için şıklara "kütlesi fazla olan" ya da "yavaş hareket eden" konur.
* **Ses Benzerliği Tuzağı:** Sözcüğün kökteş veya sesteş başka bir kullanım alanı şıklara serpiştirilir.
* **Yakın Anlam Kayması:** Tam olarak karşılamayan ama benzer tınısı olan bir kelime seçilerek adayın dikkati test edilir.

## 3. Yanlış Analizi: Neden Hata Yapıldı?
* *Hata:* Altı çizili sözcüğü okur okumaz ilk aklıma gelen anlamı şıklarda aradım → **Teşhis:** Cümleyi ve bağlamı yok sayarak ezbere işaretleme yaptınız.
* *Hata:* Seçeneği yerine koyduğumda cümle anlamsızlaştı ama yine de işaretledim → **Teşhis:** Yerine koyma testinin sonucunu dikkate almadınız.`,
        key_concepts: [
          {
            term: 'Bağlamsal Anlam (Kontekst)',
            definition: 'Bir sözcüğün metin içindeki diğer sözcüklerle girdiği ilişki sonucu kazandığı özel anlamdır.',
            practical_meaning: 'Sözcüğün sözlükteki anlamı değil, o metindeki geçerli rolüdür.',
          },
          {
            term: 'Yerine Koyma Testi',
            definition: 'Şıkta verilen anlamı metindeki ifadenin yerine koyup cümlenin akışını test etme yöntemidir.',
            practical_meaning: 'Cümlede anlam kırılması veya mantık hatası oluşturmayan seçenek doğrudur.',
          },
        ],
        subtopics: [
          {
            id: `${topic.id}-sub-1`,
            number: '1.1',
            title: 'Sözcüklerin Cümlede Anlam Genişlemesi',
            content: 'Temel anlamdan soyutlamaya ve mecaza geçiş süreçlerini metin içinde analiz edin.',
            key_takeaway: 'Her sözcük bulunduğu cümlenin rengini alır.',
          },
          {
            id: `${topic.id}-sub-2`,
            number: '1.2',
            title: 'Deyimleşmiş ve Kalıplaşmış İfadelerin Tahlili',
            content: 'Metinde geçen "kendi sesini bulmak", "ayna tutmak", "köprü kurmak" gibi kalıpların bağlamsal karşılığını saptayın.',
            key_takeaway: 'Mecazlı kalıpların arkasındaki ana düşünceyi yakalayın.',
          },
        ],
        examples: [
          {
            title: 'Bağlamdan Anlam Çıkarma Örnek Soru Analizi',
            scenario: 'Cümle: "Genç romancı, ilk eserinde popüler akımların rüzgârına kapılmak yerine, kendi dar patikasında inatla yürümeyi seçmiştir."\n\nSoru: Bu cümledeki "kendi dar patikasında inatla yürümek" sözüyle anlatılmak istenen nedir?',
            analysis: 'Çözüm Adımı: "Popüler akımlara kapılmamak" ifadesi ipucudur. Demek ki yazar herkesin gittiği ana yoldan (genel beğeniden) değil, kendine has, özgün ve az kişinin tercih ettiği zorlu bir yoldan (kendi tarzından) gitmiştir. Doğru yanıt: "Özgün ve bağımsız bir sanat çizgisi sürdürmek"tir.',
            domain: 'Sözel Yetenek & Bağlamsal Analiz',
          },
        ],
        comparison_tables: [
          {
            title: 'Sözcüklerin Bağlama Göre Anlam Değişim Tablosu',
            headers: ['Sözcük / Kalıp', 'Örnek Cümle', 'Bağlamdaki Karşılığı', 'Çeldirici Tuzak'],
            rows: [
              ['Açmak', 'Konuyu biraz daha açar mısınız?', 'Ayrıntılandırmak, anlaşılır kılmak', 'Kapıyı açmak (gerçek anlam)'],
              ['Beslemek', 'İçinde ona karşı gizli bir kin besliyordu.', 'Duyguyu zihinde sürekli yaşatmak', 'Yemek yedirmek (temel anlam)'],
              ['Ayna Tutmak', 'Romanında taşra insanının dramına ayna tuttu.', 'Gerçekleri olduğu gibi, tarafsızca yansıtmak', 'Cam eşya kullanmak'],
              ['Ses Getirmek', 'Yayımlanan son rapor bilim dünyasında ses getirdi.', 'Büyük yankı uyandırmak, ilgi çekmek', 'Gürültü yapmak'],
            ],
          },
        ],
        common_confusions: [
          {
            wrong_belief: 'Altı çizili ifadenin anlamı daima ilk cümlededir.',
            correct_distinction: 'İfade parçanın ortasında veya sonunda olabilir; anlamı parçanın tüm kurgusu belirler.',
            tip: 'Metnin ana fikrini aklınızda tutarak sözcüğün amacını belirleyin.',
          },
        ],
        exam_tips: [
          {
            tip: "AGS'DE DİKKAT: 'Altı çizili sözle anlatılmak istenen...' sorularında şıkkı yerine koyduğunuzda cümlenin grameri ve anlamı pürüzsüz olmalıdır.",
            importance: 'critical',
          },
        ],
        mnemonics: [
          {
            title: 'Yerine Koyma Kuralı',
            memory_trick: '🔑 Kural: ŞIKTAKİ İFADEYİ AL, METİNDEKİ SÖZCÜĞÜN YERİNE KOY',
            description: 'Metin akıcı ve yazarın mesajıyla uyumlu kalıyorsa cevap odur.',
          },
        ],
        summary: 'Bağlam, sözcüğün metin içindeki gerçek kimliğidir. Sözlük ezberi değil, metindeki işlevi doğru yanıtı verir.',
        what_to_remember: [
          '✓ Altı çizili sözcüğü asla cümleden bağımsız okuma.',
          '✓ Sözlükteki ilk anlam güçlü bir çeldiricidir, uyanık ol.',
          '✓ Yerine koyma yöntemini mutlaka test et.',
          '✓ Kalıplaşmış mecaz ifadelerin ardındaki somut karşılığı bul.',
        ],
        self_check_questions: [
          {
            question: '1. "Usta yönetmen, yeni filminde izleyiciyi şaşırtacak ucuz numaralara başvurmamış; hayatın olağan akışını tüm çıplaklığıyla perdeye aktarmıştır."\n\nBu parçadaki "ucuz numaralara başvurmamak" sözüyle anlatılmak istenen aşağıdakilerden hangisidir?',
            options: [
              { key: 'A', text: 'Düşük bütçeli prodüksiyonlardan kaçınmak', isCorrect: false },
              { key: 'B', text: 'Seyirciyi etkilemek için basit ve yapay hilelere tevessül etmemek', isCorrect: true },
              { key: 'C', text: 'Bilet fiyatlarını makul seviyede tutmak', isCorrect: false },
              { key: 'D', text: 'Yalnızca tanınmış oyuncularla çalışmak', isCorrect: false },
              { key: 'E', text: 'Geleneksel sinema tekniklerini tamamen terk etmek', isCorrect: false },
            ],
            explanation: 'Doğru cevap B seçeneğidir. "Ucuz numara", mecazi olarak sanatsal derinliği olmayan, kolay yoldan dikkat çekmeyi amaçlayan yapay yöntemleri ifade eder. [A and C seçenekleri sözcüğün maddi/parasal ilk anlamına dayanan çeldiricilerdir.]',
          },
          {
            question: '2. "Yazar, ele aldığı tarihi dönemi anlatırken kendi çağından kopmamış; geçmiş ile bugün arasında sağlam köprüler kurmuştur."\n\nBu cümledeki "köprüler kurmak" ifadesinin bağlamsal anlamı aşağıdakilerden hangisidir?',
            options: [
              { key: 'A', text: 'Mimari yapılara ilişkin tarihi belgeleri incelemek', isCorrect: false },
              { key: 'B', text: 'Geçmiş olaylar ile günümüz arasında anlamlı bağlar ve ilişkiler tesis etmek', isCorrect: true },
              { key: 'C', text: 'İki farklı şehir arasındaki ulaşımı kolaylaştırmak', isCorrect: false },
              { key: 'D', text: 'Eski dille yazılmış metinleri günümüz Türkçesine çevirmek', isCorrect: false },
              { key: 'E', text: 'Tarihi roman yazmayı diğer türlerden üstün görmek', isCorrect: false },
            ],
            explanation: 'Doğru cevap B seçeneğidir. "Köprü kurmak", iki farklı unsur (geçmiş ile bugün) arasında ilişki ve bağ oluşturmak anlamında kullanılmıştır.',
          },
          {
            question: '3. "Bilimsel çalışmalarda tarafsızlık iddiasında bulunan bir araştırmacının, elde ettiği verileri kendi peşin fikirlerinin kalıbına dökmesi affedilemez bir yanılgıdır."\n\nBu cümledeki "kendi peşin fikirlerinin kalıbına dökmek" sözüyle anlatılmak istenen nedir?',
            options: [
              { key: 'A', text: 'Verileri önceden sahip olduğu önyargılara uydurmaya çalışmak', isCorrect: true },
              { key: 'B', text: 'Araştırma sonuçlarını grafiklerle somutlaştırmak', isCorrect: false },
              { key: 'C', text: 'Bilimsel deneyleri laboratuvar ortamında tekrarlamak', isCorrect: false },
              { key: 'D', text: 'Daha önce yayımlanmış makaleleri aynen kopyalamak', isCorrect: false },
              { key: 'E', text: 'Araştırma bütçesini titizlikle yönetmek', isCorrect: false },
            ],
            explanation: 'Doğru cevap A seçeneğidir. "Peşin fikirlerin kalıbına dökmek", nesnel gerçekleri önyargılara uydurarak çarpıtmak anlamına gelir.',
          },
          {
            question: '4. Bir AGS sorusunda altı çizili sözün anlamı belirlenirken adayın izlemesi gereken en sağlıklı yöntem hangisidir?',
            options: [
              { key: 'A', text: 'Sözcüğün sözlükteki ilk ve en yaygın anlamını doğrudan işaretlemek', isCorrect: false },
              { key: 'B', text: 'Seçeneklerdeki anlam karşılığını cümleye yerleştirip bağlam uyumunu test etmek', isCorrect: true },
              { key: 'C', text: 'Cümleyi okumadan yalnızca altı çizili kısmı okumak', isCorrect: false },
              { key: 'D', text: 'En kısa şıkkı her zaman doğru kabul etmek', isCorrect: false },
              { key: 'E', text: 'Metindeki tüm kelimelerin eş anlamlılarını ezberden yazmak', isCorrect: false },
            ],
            explanation: 'Doğru cevap B seçeneğidir. Cümle-içi yerine koyma yöntemi, anlam uyumunu teyit eden en pratik sınav tekniğidir.',
          },
          {
            question: '5. "Genç şair, şiirlerinde kelimeleri adeta kılı kırk yaran bir kuyumcu titizliğiyle seçmiştir."\n\nBu cümledeki "kılı kırk yarmak" ifadesinin bağlamdaki anlamı nedir?',
            options: [
              { key: 'A', text: 'Çok aceleci ve dikkatsiz davranmak', isCorrect: false },
              { key: 'B', text: 'Aşırı derecede titiz, ayrıntılı ve özenli davranmak', isCorrect: true },
              { key: 'C', text: 'Maddi kazancı ön planda tutmak', isCorrect: false },
              { key: 'D', text: 'Geleneksel kalıplara sıkı sıkıya bağlı kalmak', isCorrect: false },
              { key: 'E', text: 'Şiirlerini sadece yakın çevresiyle paylaşmak', isCorrect: false },
            ],
            explanation: 'Doğru cevap B seçeneğidir. "Kılı kırk yarmak", en küçük detaylara kadar büyük bir özen ve titizlik göstermek demektir.',
          },
        ],
      };
    }
  }

  // 2. UNIT 2: PARAGRAF VE METİN MİMARİSİ
  if (isUnit2) {
    if (topic.id === 'topic-sozel-2-3' || topic.title.includes('Akışı Bozan')) {
      return {
        id: `tc-${topic.id}`,
        topic_id: topic.id,
        title: topic.title,
        why_it_matters: 'Akışı bozan cümle soruları, AGS Sözel Yetenek testinde metin yapısını ve düşünce zincirini test eden en pratik soru tipidir. Bir parçada anlatılan ana konudan, konunun ele alınış yönünden veya genel/özel dengesinden sapan cümleyi hızlıca yakalayarak saniyeler içinde tam puan alabilirsiniz.',
        learning_objectives: [
          'Paragraftaki düşünce zincirini ve mantıksal sürekliliği takip edebilmek.',
          'Aynı konudan bahsetse bile konunun "farklı bir yönüne" sapan cümleyi ayırt edebilmek.',
          'Şüpheli cümleyi metinden çıkardığınızda önceki ve sonraki cümlenin birbirine bağlanıp bağlanmadığını test edebilmek.',
          'Bağlantı ögelerinin (bu yüzden, oysa, nitekim, ancak) doğru cümleyi işaret edip etmediğini kontrol edebilmek.',
        ],
        core_explanation: `## 1. Bu Soru Tipini Nasıl Çözerim? (Adım Adım Strateji)
1. **Her Cümlenin "Konu Başlığını" Belirleyin:** Cümleleri (I), (II), (III) okurken zihninizde 2-3 kelimelik konu etiketi koyun.
2. **"Konu Aynı Ama Yön Farklı mı?" Tuzağını Yakalayın:** Akışı bozan cümle genellikle tamamen alakasız bir konudan bahsetmez! Örneğin: Parça "yazarın üslubunu" anlatırken aradaki tek bir cümle "yazarın kitap satış rakamlarından" bahsediyorsa konu aynı (yazar) ama **yön farklıdır**. Akışı bozan cümle budur!
3. **Genel - Özel Dengesini İnceleyin:** Parça genel bir felsefi ilkeden bahsederken aniden tek bir kişisel anıya inip sonra tekrar genele dönüyorsa o cümle akışı bozar.
4. **Sağlama Yöntemi (Köprü Testi):** Akışı bozduğunu düşündüğünüz cümleyi parmağınızla kapatın. Bir önceki cümle ile bir sonraki cümleyi art arda okuyun. Eğer iki cümle birbirine pürüzsüz bir mantıkla bağlanıyorsa teşhisiniz %100 doğrudur.

## 2. Çeldiriciler Nasıl Hazırlanır? (ÖSYM Tuzakları)
* **Kelime Kamuflesi:** Akışı bozan cümlenin içine, önceki cümlede geçen bir kelime bilerek yerleştirilir. Aday kelimeyi görünce bağlantılı zanneder.
* **Görünüşte Mantıklı Olma:** Cümle kendi başına çok doğru ve edebi bir fikir taşır. Ancak o parçanın o noktasına ait değildir.

## 3. Yanlış Analizi: Neden Hata Yapıldı?
* *Hata:* "Ama bu cümle de o yazarla ilgili, neden akışı bozsun ki?" dedim → **Teşhis:** Konu ile konunun işlenen yönünü birbirine karıştırdınız.`,
        key_concepts: [
          {
            term: 'Düşünce Zinciri',
            definition: 'Paragraftaki her cümlenin bir önceki cümlenin mantıksal devamı niteliğinde olmasıdır.',
            practical_meaning: 'Zincirin halkasını kıran yabancı cümle akışı bozar.',
          },
          {
            term: 'Köprü Testi (Sağlama)',
            definition: 'Şüpheli cümle çıkarıldığında bir önceki ve bir sonraki cümlenin anlamsal olarak kavuşmasıdır.',
            practical_meaning: 'Akışı bozan cümle çıktığında metin çok daha akıcı hale gelir.',
          },
        ],
        subtopics: [
          {
            id: `${topic.id}-sub-1`,
            number: '2.1',
            title: 'Konu Kayması ve Bakış Açısı Değişikliğini Saptama',
            content: 'Öznede, zamanda veya odak noktasında meydana gelen ani sıçramaları tespit edin.',
            key_takeaway: 'Konu aynı kalsa bile odak noktası değiştiğinde akış kırılır.',
          },
          {
            id: `${topic.id}-sub-2`,
            number: '2.2',
            title: 'Bağlaç ve Zamir Takibi ile Köprü Sağlaması',
            content: '"Bu durum", "bunun aksine", "nitekim" gibi gönderim ögelerinin hangi cümleye bağlı olduğunu eşleştirin.',
            key_takeaway: 'Bağlaçlar mantıksal zincirin kilitleridir.',
          },
        ],
        examples: [
          {
            title: 'Akışı Bozan Cümle Soru ve Köprü Analizi',
            scenario: '(I) Klasik müzik dinlemenin insan beynindeki odaklanma merkezlerini uyardığı bilinmektedir. (II) Özellikle karmaşık matematiksel problemler çözülürken enstrümantal müzik dikkati toplamayı kolaylaştırır. (III) Konser biletlerinin pahalı olması gençlerin bu etkinliklere katılımını sınırlandırmaktadır. (IV) Yapılan nörolojik testler, ritmik seslerin zihinsel yorgunluğu azalttığını kanıtlamıştır.\n\nSoru: Hangisi düşüncenin akışını bozmaktadır?',
            analysis: 'Cümle I, II ve IV müziğin zihinsel odaklanma ve beyin üzerindeki olumlu etkilerini incelerken; III. cümle ekonomik bir mesele olan "konser biletlerinin pahalılığına" sıçramıştır. III. cümle çıkarıldığında II ve IV mükemmel bir köprü kurmaktadır. Doğru cevap III (C şıkkı).',
            domain: 'Sözel Yetenek & Paragraf Yapısı',
          },
        ],
        comparison_tables: [
          {
            title: 'Akış Bozulması Teşhis Tablosu',
            headers: ['Cümle Numarası', 'İşlenen Odak', 'Parçanın Ana Odağı', 'Durum'],
            rows: [
              ['Cümle I', 'Müziğin beyne etkisi', 'Müziğin nörolojik faydası', 'Akışa Uygun'],
              ['Cümle II', 'Odaklanma ve problem çözme', 'Müziğin nörolojik faydası', 'Akışa Uygun'],
              ['Cümle III', 'Bilet fiyatlarının pahalılığı', 'Müziğin nörolojik faydası', '❌ AKIŞI BOZAN CÜMLE'],
              ['Cümle IV', 'Ritmik seslerin zihinsel etkisi', 'Müziğin nörolojik faydası', 'Akışa Uygun'],
            ],
          },
        ],
        common_confusions: [
          {
            wrong_belief: 'Akışı bozan cümle daima en kısa olan cümledir.',
            correct_distinction: 'Cümlenin boyutuyla hiçbir ilgisi yoktur; tamamen anlamsal odak kaymasına bağlıdır.',
            tip: 'Cümleleri tek tek numaralı birer halka gibi birbirine ekleyerek okuyun.',
          },
        ],
        exam_tips: [
          {
            tip: "AGS'DE DİKKAT: Şüpheli cümleyi eledikten sonra mutlaka bir önceki cümle ile bir sonraki cümleyi arka arkaya okuyup köprüyü test edin.",
            importance: 'critical',
          },
        ],
        mnemonics: [
          {
            title: 'Köprü Sağlaması Kuralı',
            memory_trick: '🔑 Kural: ŞÜPHELİ CÜMLEYİ ÇIKAR, ÖNCEKİYLE SONRAKİYİ BİRLEŞTİR',
            description: 'Köprü kusursuz bağlanıyorsa doğru şıkkı buldunuz.',
          },
        ],
        summary: 'Akışı bozan cümle, paragrafın tematik bütünlüğünden sapan yabancı unsurdur. Köprü testiyle anında doğrulanır.',
        what_to_remember: [
          '✓ Konu aynı olsa bile anlatımın yönü değişmişse akış bozulur.',
          '✓ Cümlenin içindeki kelime benzerliklerine kanma.',
          '✓ Çıkarma ve köprü testi yapmadan şıkkı işaretleme.',
          '✓ Numaraların cümlenin başında mı sonunda mı verildiğine dikkat et.',
        ],
        self_check_questions: [
          {
            question: '1. (I) Roman yazarı, kurmaca dünyasını inşa ederken gerçek yaşamdan beslenir. (II) Sokakta gördüğü bir yüz, duyduğu bir ses onun muhayyilesinde yepyeni karakterlere dönüşür. (III) İyi bir romanın yayınevi tarafından basılması aylar süren titiz bir süreç gerektirir. (IV) Böylece yazar, sıradan olayları evrensel bir insanlık durumuna tercüme eder.\n\nBu parçadaki numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?',
            options: [
              { key: 'A', text: 'I', isCorrect: false },
              { key: 'B', text: 'II', isCorrect: false },
              { key: 'C', text: 'III', isCorrect: true },
              { key: 'D', text: 'IV', isCorrect: false },
              { key: 'E', text: 'Hiçbiri', isCorrect: false },
            ],
            explanation: 'Doğru cevap C seçeneğidir. Parçada yazarın gerçek hayattan esinlenme ve karakter yaratma süreci anlatılırken III. cümlede aniden "yayınevi baskı süreçlerine" geçilmiş ve akış kırılmıştır. III çıkarıldığında II ile IV birbirine doğrudan bağlanmaktadır.',
          },
          {
            question: '2. (I) Çocuklukta edinilen okuma alışkanlığı, bireyin kelime hazinesini ve ifade gücünü zenginleştirir. (II) Erken yaşta kitaplarla tanışan bireyler, duygu ve düşüncelerini daha rahat aktarır. (III) Kitap fuarları her yıl yüz binlerce ziyaretçiyi ağırlamaktadır. (IV) Bu zihinsel esneklik, onların akademik ve sosyal hayatlarında da belirgin bir başarı sağlar.\n\nBu parçada akışı bozan cümle hangisidir?',
            options: [
              { key: 'A', text: 'I', isCorrect: false },
              { key: 'B', text: 'II', isCorrect: false },
              { key: 'C', text: 'III', isCorrect: true },
              { key: 'D', text: 'IV', isCorrect: false },
              { key: 'E', text: 'I ve II', isCorrect: false },
            ],
            explanation: 'Doğru cevap C seçeneğidir. Metin erken yaşta okumanın bireysel ve zihinsel gelişimine odaklanmışken III. cümle fuar ziyaretçi istatistiğine geçerek akışı bozmuştur. IV. cümledeki "Bu zihinsel esneklik" ifadesi doğrudan II. cümleye bağlanır.',
          },
          {
            question: '3. Akışı bozan cümle sorularında adayın cevabı teyit etmek için uygulayabileceği en güvenilir yöntem hangisidir?',
            options: [
              { key: 'A', text: 'Tüm metni tersten okumak', isCorrect: false },
              { key: 'B', text: 'Şüpheli cümleyi metinden çıkarıp bir önceki cümle ile bir sonraki cümleyi art arda okuyarak anlam köprüsünü kontrol etmek', isCorrect: true },
              { key: 'C', text: 'Sadece cümlenin uzunluğuna bakmak', isCorrect: false },
              { key: 'D', text: 'İlk cümleyi doğrudan doğru cevap kabul etmek', isCorrect: false },
              { key: 'E', text: 'Yalnızca fiil kiplerini saymak', isCorrect: false },
            ],
            explanation: 'Doğru cevap B seçeneğidir. Köprü testi, akışı bozan cümlenin tespitinde en kesin ve güvenilir sınav tekniğidir.',
          },
          {
            question: '4. (I) Öğretmenlerin sınıf içi iletişim dili, öğrencilerin derse katılımını doğrudan etkiler. (II) Kapsayıcı ve teşvik edici bir üslup, öğrencinin hata yapma korkusunu yenmesini sağlar. (III) Öğretmen maaşları gelişmiş ülkelerde daha yüksek standartlardadır. (IV) Kendini güvende hisseden öğrenci ise derste daha aktif rol alır.\n\nBu parçada hangi cümle akışı bozmaktadır?',
            options: [
              { key: 'A', text: 'I', isCorrect: false },
              { key: 'B', text: 'II', isCorrect: false },
              { key: 'C', text: 'III', isCorrect: true },
              { key: 'D', text: 'IV', isCorrect: false },
              { key: 'E', text: 'I ve IV', isCorrect: false },
            ],
            explanation: 'Doğru cevap C seçeneğidir. Metin pedagojik iletişim ve sınıf içi katılım üzerine kuruluyken III. cümle ekonomik ve idari bir konuya atlamıştır.',
          },
          {
            question: '5. Bir paragrafta akışın bozulması genellikle aşağıdakilerin hangisinden kaynaklanır?',
            options: [
              { key: 'A', text: 'Metinde çok sayıda sıfat kullanılmış olmasından', isCorrect: false },
              { key: 'B', text: 'Konunun işlenen yönünün veya bakış açısının aniden değişip metnin tematik bütünlüğünden sapmasından', isCorrect: true },
              { key: 'C', text: 'Cümlelerin devrik olmasından', isCorrect: false },
              { key: 'D', text: 'Paragrafın tek bir paragraf olmasından', isCorrect: false },
              { key: 'E', text: 'Metnin düşünce yazısı olmasından', isCorrect: false },
            ],
            explanation: 'Doğru cevap B seçeneğidir. Akış bozulması; tematik sapma, odak değişikliği veya mantıksal zincirin kırılması durumunda ortaya çıkar.',
          },
        ],
      };
    }
  }

  // 3. UNIT 3: SÖZEL AKIL YÜRÜTME VE MANTIK
  if (isUnit3) {
    return {
      id: `tc-${topic.id}`,
      topic_id: topic.id,
      title: topic.title,
      why_it_matters: 'Sözel Mantık ve Akıl Yürütme, AGS Sözel Yetenek testinde en yüksek puan getiren ve doğru organize edildiğinde adaya 3-4 neti firesiz kazandıran alandır. Bu bölümde ezber yoktur; bilgiyi tabloya dökmek, kesin öncüllerle olasılıkları ayrıştırmak ve koşullardan sistematik çıkarım yapma becerisi ölçülür.',
      learning_objectives: [
        'Soruda verilen karmaşık sözel verileri sade bir değişkenler tablosuna dönüştürebilmek.',
        'Kesin bilgileri doğrudan tabloya yerleştirip değişken olasılıkları dallandırabilmek.',
        'Olumsuz öncülleri ("...değildir", "...aynı grupta olamaz") tablonun kenarında sembolleştirebilmek.',
        '"Kesinlikle doğrudur / yanlıştır" ile "Hangisi olabilir?" soru köklerini doğru stratejiyle çözebilmek.',
      ],
      core_explanation: `## 1. Bu Soru Tipini Nasıl Çözerim? (Adım Adım Strateji)
1. **Değişkenleri Belirleyin ve Sabit Olanı Tablo Başlığı Yapın:** Soruda geçen unsurlardan (Örn: Günler: Pzt-Salı-Çrş; Katlar: 1-2-3; Kişiler: A, B, C, D) **sayısı az veya sırası değişmeyen unsuru** tablo başlığı yapın.
2. **Kesin Bilgileri İlk Olarak Yerleştirin:** "Ahmet 3. kattadır", "Salı günü Elif nöbetçidir" gibi tereddütsüz kesin öncülleri doğrudan tabloya yazın.
3. **Bağlantılı ve Göreceli Koşulları Sembolleştirin:**
   * "A, B'nin hemen sonrasındadır" → [ B ][ A ] (blok kutu yapın).
   * "C ve D farklı günlerde nöbet tutmuştur" → C ≠ D.
   * "E ya 1. ya da 5. sıradadır" → E = 1 / 5 (olasılık dalı açın).
4. **Olasılık Sayısı 2 ise İki Ayrı Tablo Çizin:** Zihinde tutmaya çalışmak en büyük zaman kaybıdır. 1. İhtimal ve 2. İhtimal olarak yan yana iki küçük tablo çizin.
5. **Soru Köküne Göre Seçenekleri Eleme:**
   * *"Kesinlikle doğrudur":* Her iki olasılık tablosunda da istisnasız doğru olan seçenektir.
   * *"Hangisi olabilir":* İhtimal tablolarından en az birinde kurallarla çelişmeyen seçenektir.

## 2. Çeldiriciler Nasıl Hazırlanır? (ÖSYM Tuzakları)
* **Yalnızca Bir Olasılıkta Doğru Olanı "Kesin Doğru" Gibi Sunma:** 1. senaryoda doğru olan ama 2. senaryoda değişebilen bir durumu "Kesinlikle doğrudur" sorusunun A şıkkına koyarlar.
* **Ters Yön Tuzağı:** "Ahmet, Burak'ın önündedir" ifadesini adayın "hemen önündedir" gibi kısıtlı algılaması beklenir. (Arada başkaları da olabilir!)

## 3. Yanlış Analizi: Neden Hata Yapıldı?
* *Hata:* Tablo çizmeden zihnimden çözmeye çalıştım, ihtimaller birbirine girdi → **Teşhis:** Sözel mantık tablosuz çözülemez; görselleştirme şarttır.
* *Hata:* İhtimal dahilindeki bir bilgiyi kesin doğru kabul ettim → **Teşhis:** Olasılık dallarını birbirinden ayırmadınız.`,
      key_concepts: [
        {
          term: 'Sabit Değişken İlkesi',
          definition: 'Sırası ve yapısı değişmeyen unsurların (günler, katlar, saatler) tablonun iskeletini oluşturmasıdır.',
          practical_meaning: 'Hareketli olan kişiler bu sabit sütunların altına dağıtılır.',
        },
        {
          term: 'Bloklama Yöntemi',
          definition: 'Birbirinden ayrılmayan öncüllerin (Örn: "A, B\'nin hemen ardındadır") tek bir blok olarak taşınmasıdır.',
          practical_meaning: 'Tablodaki boşluklara tek tek değil, ikili blok olarak yerleştirilir.',
        },
      ],
      subtopics: [
        {
          id: `${topic.id}-sub-1`,
          number: '3.1',
          title: 'Hızlı ve Pratik Değişken Tablosu Oluşturma',
          content: 'Sorudaki verileri 30 saniye içinde matrise dönüştürme taktikleri.',
          key_takeaway: 'İyi kurgulanmış bir tablo sorunun %80\'ini çözer.',
        },
        {
          id: `${topic.id}-sub-2`,
          number: '3.2',
          title: 'Kesinlik ve Olasılık Köklerini Ayrıştırma',
          content: 'Kesinlikle doğrudur/yanlıştır sorularında ortak kesişim kümesini bulma.',
          key_takeaway: 'Tüm senaryolarda değişmeyen yargı tek kesin doğrudur.',
        },
      ],
      examples: [
        {
          title: 'Sözel Mantık Örnek Tablo ve Çözüm Analizi',
          scenario: 'Veriler: Ali, Burak, Cem, Derya, Elif bir binanın 1, 2, 3, 4 ve 5. katlarında oturmaktadır.\n1. Burak 2. kattadır (Kesin).\n2. Ali, Derya’nın hemen üst katındadır (Blok: [Derya][Ali]).\n3. Cem en üst katta değildir (Cem ≠ 5).\n\nSoru: Buna göre 5. katta kesinlikle kim oturmaktadır?',
          analysis: 'Çözüm Adımı:\nKatlar: 1, 2, 3, 4, 5.\nBurak = 2. kat (dolu).\nGeriye kalan katlar: 1, 3, 4, 5.\n[Derya][Ali] bloğu için yan yana iki boş kat lazım: Yalnızca (3 ve 4) veya (4 ve 5) olabilir mi? Eğer Derya=4, Ali=5 olursa geriye 1 ve 3 kalır; Cem ≠ 5 kuralı bozulmaz. Eğer Derya=3, Ali=4 olursa geriye 1 ve 5 kalır; Cem 5 olamayacağı için Cem=1 olur, geriye kalan Elif ise zorunlu olarak 5. katta oturur!\nHer iki durumda da kuralları sağlayan kesin sonuç: Elif veya Ali 5. kattadır, Cem asla 5 olamaz.',
          domain: 'Sözel Yetenek & Mantık',
        },
      ],
      comparison_tables: [
        {
          title: 'Sözel Mantık Soru Kökü Karşılaştırma Tablosu',
          headers: ['Soru Kökü', 'Aranan Şart', 'İzlenecek Yol'],
          rows: [
            ['Kesinlikle Doğrudur', 'Tüm olasılıklarda istisnasız gerçekleşen durum', 'Olasılıkların ortak kesişimini işaretle.'],
            ['Kesinlikle Yanlıştır', 'Hiçbir olasılıkta gerçekleşmesi mümkün olmayan durum', 'Öncüllerle doğrudan çelişen şıkkı bul.'],
            ['Hangisi Olabilir', 'En az bir olasılıkta gerçekleşebilen durum', 'Kurallara aykırı olmayan tek bir senaryo yeterlidir.'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Tüm kişilerin yerini kesin olarak bulmadan sorular çözülemez.',
          correct_distinction: 'Sözel mantıkta bazı kişilerin yeri belirsiz kalabilir; soru kökü zaten olasılıkları sorar.',
          tip: 'Tabloda kalan belirsizlikleri dert etmeyin, soru köküne odaklanın.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS'DE DİKKAT: 'Hemen önünde/arkasında' ifadesi bitişikliği belirtir; 'önündedir' ifadesi ise araya başkalarının girebileceğini gösterir.",
          importance: 'critical',
        },
      ],
      mnemonics: [
        {
          title: 'Sözel Mantık 3A Kuralı',
          memory_trick: '🔑 Kural: AYIKLA (Kesinleri) → BAĞLA (Blokları) → ÇATALLANDIR (Olasılıkları)',
          description: 'Bu üç adımı izleyen aday sıfır hatayla tam puan alır.',
        },
      ],
      summary: 'Sözel mantık görselleştirme ve tümdengelim sanatıdır. Tablo kuran aday zaman kazanır ve çeldiricilere takılmaz.',
      what_to_remember: [
        '✓ Sabit olanı başlık yap, hareketli olanı dağıt.',
        '✓ Kesin bilgileri hemen tabloya yerleştir.',
        '✓ Blok şartları tek parça halinde taşı.',
        '✓ En fazla 2 olasılık tablosu aç ve netleştir.',
      ],
      self_check_questions: [
        {
          question: '1. Bir sözel mantık sorusunda "Ahmet ve Berk farklı branşlarda görev yapmaktadır." öncülü verildiğinde izlenecek en doğru yaklaşım hangisidir?',
          options: [
            { key: 'A', text: 'Ahmet ve Berk’in asla aynı branş sütununa yazılamayacağını belirleyip olasılıkları buna göre sınırlamak', isCorrect: true },
            { key: 'B', text: 'Ahmet’i rastgele bir branşa yerleştirip Berk’i görmezden gelmek', isCorrect: false },
            { key: 'C', text: 'Bu öncülü sorunun sonunda hatırlamak üzere unutmak', isCorrect: false },
            { key: 'D', text: 'İkisinin de aynı gün sınava girdiğini varsaymak', isCorrect: false },
            { key: 'E', text: 'Branş sayısını iki katına çıkarmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Farklı branşta olma koşulu, iki kişinin aynı kümede kesişemeyeceğini gösteren kesin bir kısıtlamadır.',
        },
        {
          question: '2. "A, B’nin hemen önündeki sırada yer almaktadır." ifadesini şematize etmenin en doğru yolu hangisidir?',
          options: [
            { key: 'A', text: 'A ve B arasına 2 kişi koymak', isCorrect: false },
            { key: 'B', text: '[ A ][ B ] şeklinde ayrılmaz bir blok oluşturmak', isCorrect: true },
            { key: 'C', text: 'A’yı en başa, B’yi en sona yazmak', isCorrect: false },
            { key: 'D', text: 'B’yi A’nın üstüne yazmak', isCorrect: false },
            { key: 'E', text: 'A ve B’yi tablodan tamamen çıkarmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Hemen önünde" ifadesi aralarında hiç kimsenin bulunmadığı bitişik bir ikili blok ([A][B]) anlamına gelir.',
        },
        {
          question: '3. Bir sözel mantık sorusunda 2 farklı geçerli senaryo oluştuğunda en hızlı ve hatasız çözüm yöntemi nedir?',
          options: [
            { key: 'A', text: 'İki ihtimali de zihinde ezberleyip soruya geçmek', isCorrect: false },
            { key: 'B', text: 'Yan yana iki küçük şablon çizip olasılıkları ayrı tablolara işlemek', isCorrect: true },
            { key: 'C', text: 'Olasılıklardan birini keyfi olarak silip tek tabloyla devam etmek', isCorrect: false },
            { key: 'D', text: 'Soruyu çözmekten vazgeçip diğer derse geçmek', isCorrect: false },
            { key: 'E', text: 'Tüm seçeneklerin yanlış olduğunu varsaymak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Çatallanan iki senaryoyu yan yana çizmek zihinsel karışıklığı önler ve soruların saniyeler içinde çözülmesini sağlar.',
        },
        {
          question: '4. Soru kökünde "Aşağıdakilerden hangisi kesinlikle yanlıştır?" sorulduğunda adayın araması gereken seçenek hangisidir?',
          options: [
            { key: 'A', text: 'Olasılıklardan birinde doğru olabilen seçenek', isCorrect: false },
            { key: 'B', text: 'Verilen öncüllerle ve kurallarla hiçbir koşulda bağdaşmayan, imkânsız durum', isCorrect: true },
            { key: 'C', text: 'Metinde en uzun kelimelerden oluşan seçenek', isCorrect: false },
            { key: 'D', text: 'İlk tabloda doğru olan seçenek', isCorrect: false },
            { key: 'E', text: 'Yalnızca soru numarasını içeren seçenek', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Kesinlikle yanlıştır", hiçbir senaryoda gerçekleşmesi mümkün olmayan, kuralları doğrudan ihlal eden durumdur.',
        },
        {
          question: '5. Sözel mantık sorularında tablonun sütun başlıkları belirlenirken hangi ilke esas alınmalıdır?',
          options: [
            { key: 'A', text: 'En çok sayıda olan ve yer değiştiren değişkeni başlık yapmak', isCorrect: false },
            { key: 'B', text: 'Sayısı az, sırası sabit veya değişmez olan unsurları (günler, katlar, saatler) sütun başlığı yapmak', isCorrect: true },
            { key: 'C', text: 'Hiç tablo çizmeden sadece şıkları okumak', isCorrect: false },
            { key: 'D', text: 'Kişi isimlerini alfabetik olarak sıralamak', isCorrect: false },
            { key: 'E', text: 'Yalnızca olumsuz öncülleri başlık yapmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Sabit unsurlar (gün, kat, sıra) tablonun iskeletini oluşturur; hareketli unsurlar bu başlıkların altına yerleştirilir.',
        },
      ],
    };
  }

  // General Fallback for any other Sözel topic (e.g. Paragrafın Yapısı, vb.)
  return {
    id: `tc-${topic.id}`,
    topic_id: topic.id,
    title: topic.title,
    why_it_matters: `"${topic.title}", AGS Sözel Yetenek sınavında okuma hızınızı ve anlama derinliğinizi optimize ederek çeldiricileri hızla elemenizi sağlar.`,
    learning_objectives: [
      `"${topic.title}" konusunda AGS soru kalıplarını ve çözüm basamaklarını kavramak.`,
      'Metin, cümle ve seçenek ilişkilerini hızlıca çözümleyebilmek.',
      'Aşırı genelleme ve kapsam daraltması yapan çeldiricileri eleyebilmek.',
      'Soru kökünün yönlendirmesine uygun doğru cevaba en kısa sürede ulaşmak.',
    ],
    core_explanation: `## 1. Bu Soru Tipini Nasıl Çözerim? (Adım Adım Strateji)
1. **Soru Kökünü Netleştirin:** Metinden ne istendiğini tespit edin.
2. **Metnin Anahtar İpuçlarını Yakalayın:** Bağlaçlar, yönlendirici ifadeler ve yazarın odak noktasını belirleyin.
3. **Çeldiricileri Eleme:** Metin dışı yorum, aşırı genelleme ve kapsam daraltması içeren şıkları eleyin.

## 2. Çeldiriciler Nasıl Hazırlanır?
* Metinde geçen bir kelimeyi alıp anlamını saptıran şıklar.
* Genel geçer doğru olan ama metinde geçmeyen iddialar.

## 3. Yanlış Analizi: Neden Hata Yapıldı?
* Metne sadık kalmayıp kendi kanaatinizi kattığınızda hata oluşur.`,
    key_concepts: [
      {
        term: 'Metne Sadakat İlkesi',
        definition: 'Yalnızca ve sadece metinde verilen bilgi ve iletileri doğru kabul etme kuralıdır.',
        practical_meaning: 'Kişisel yorum katmadan metnin sınırları içinde kalmaktır.',
      },
    ],
    subtopics: [
      {
        id: `${topic.id}-sub-1`,
        number: '1.1',
        title: 'Soru Kökü ve Seçenek Eşleştirme',
        content: 'Metindeki yargıları seçeneklerle karşılaştırarak eleme yapın.',
        key_takeaway: 'Metin dışı doğrulara kanmayın.',
      },
    ],
    examples: [
      {
        title: `${topic.title} Soru Analizi`,
        scenario: 'Metin: "Eleştiri, bir eserin kusurlarını yüzüne vurmak değil; onun sanatsal değerini ortaya çıkaracak yolları aydınlatmaktır."',
        analysis: 'Bu cümlede eleştirinin yapıcı ve yol gösterici bir kılavuz olduğu vurgulanmaktadır.',
        domain: 'Sözel Yetenek',
      },
    ],
    comparison_tables: [
      {
        title: `${topic.title} Çeldirici Eleme Tablosu`,
        headers: ['Ölçüt', 'Doğru Yaklaşım', 'Çeldirici Tuzak'],
        rows: [
          ['Metne Bağlılık', 'Parçada verilen bilgiyi esas almak', 'Kişisel kanaat veya genel kültür katmak'],
          ['Kapsam', 'Bütünü kucaklayan seçeneği bulmak', 'Tek bir ayrıntıya odaklanan dar şıkkı seçmek'],
        ],
      },
    ],
    common_confusions: [
      {
        wrong_belief: 'Seçenek doğru bir bilgi içeriyorsa kesinlikle doğru cevaptır.',
        correct_distinction: 'Metinde geçmeyen veya metnin odağı olmayan bilgi doğru cevap olamaz.',
        tip: 'Şıktaki ifadenin metindeki karşılığını arayın.',
      },
    ],
    exam_tips: [
      {
        tip: "AGS'DE DİKKAT: Seçenekleri birbiriyle değil, doğrudan metinle karşılaştırın.",
        importance: 'critical',
      },
    ],
    mnemonics: [
      {
        title: 'Çözüm İlkesi',
        memory_trick: '🔑 Kural: METNİN DIŞINA ÇIKMA, YAZARIN GÖZÜYLE BAK',
        description: 'Seçenekleri metin filtresinden geçirerek eleyin.',
      },
    ],
    summary: `${topic.title}, AGS Sözel Yetenek testinde okuduğunu anlama ve çıkarım yapma becerisini ölçer.`,
    what_to_remember: [
      '✓ Soru kökünü dikkatle oku.',
      '✓ Metne bağlı kal.',
      '✓ Çeldiricileri ele.',
    ],
    self_check_questions: [
      {
        question: `1. "${topic.title}" alanında bir AGS sorusunu çözerken izlenecek en etkili yaklaşım hangisidir?`,
        options: [
          { key: 'A', text: 'Metne bağlı kalarak yalnızca metindeki ipuçlarını ve mantıksal zinciri değerlendirmek', isCorrect: true },
          { key: 'B', text: 'Kişisel fikirleri metnin önüne geçirmek', isCorrect: false },
          { key: 'C', text: 'Sadece en uzun seçeneği doğru kabul etmek', isCorrect: false },
          { key: 'D', text: 'Soru kökünü okumadan şıklara geçmek', isCorrect: false },
          { key: 'E', text: 'Tüm seçeneklerin aynı anda doğru olduğunu varsaymak', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Metne sadık kalmak ve mantıksal çıkarım yapmak analitik çözümün esasıdır.',
      },
      {
        question: '2. Paragraf ve sözel akıl yürütme sorularında çeldirici seçeneklerin en belirgin özelliği hangisidir?',
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
  // Sözel Yetenek Soru 1 (Okuduğunu Anlama & Çıkarım)
  {
    id: 'q-soz-u1-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-1',
    topic_id: 'topic-sozel-1-1',
    question_text:
      'Eğitimde bilgi aktarımının hızı ile bilginin zihinde işlenme derinliği arasında her zaman doğrusal bir ilişki yoktur. Günümüzde öğrenciler internet ortamında muazzam bir bilgi akışına maruz kalmakta ancak bilgiyi eleştirel süzgeçten geçirme ve problem çözmede kullanma becerisinde gerileme yaşamaktadır.\n\nBu parçada asıl vurgulanmak istenen düşünce aşağıdakilerden hangisidir?',
    explanation:
      'Parçada bilginin çokluğundan veya hızlı edinilmesinden ziyade, bilginin eleştirel olarak işlenmesi ve niteliği üzerinde durulmuştur. [Doğru Cevap: C]',
    difficulty: 'orta',
    question_type: 'conceptual',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz1-a', question_id: 'q-soz-u1-1', option_key: 'A', option_text: 'İnternet kullanımının tamamen sınırlandırılması gerektiği', is_correct: false },
      { id: 'opt-sz1-b', question_id: 'q-soz-u1-1', option_key: 'B', option_text: 'Bilgiye hızlı erişimin her koşulda başarı getirdiği', is_correct: false },
      { id: 'opt-sz1-c', question_id: 'q-soz-u1-1', option_key: 'C', option_text: 'Bilginin niceliğinden ve erişim hızından çok eleştirel işlenme derinliğinin değerli olduğu', is_correct: true },
      { id: 'opt-sz1-d', question_id: 'q-soz-u1-1', option_key: 'D', option_text: 'Öğrencilerin geleneksel kütüphaneleri daha çok sevdiği', is_correct: false },
      { id: 'opt-sz1-e', question_id: 'q-soz-u1-1', option_key: 'E', option_text: 'Sınavların yalnızca ezber bilgiyi ölçtüğü', is_correct: false },
    ],
  },
  // Sözel Yetenek Soru 2 (Paragraf & Metin Mimarisi)
  {
    id: 'q-soz-u2-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-2',
    topic_id: 'topic-sozel-2-3',
    question_text:
      '(I) Eğitimde teknoloji kullanımı her geçen gün artmaktadır. (II) Dijital araçlar öğrencilerin derse olan ilgisini ve motivasyonunu canlı tutar. (III) Akıllı tahtalar ve tabletler sınıf ortamında etkileşimi güçlendirir. (IV) Kitap fiyatlarının yükselmesi öğrencilerin kaynak teminini zorlaştırmaktadır. (V) Bu nedenle öğretmenlerin dijital materyal hazırlama becerileri büyük önem taşır.\n\nBu parçadaki numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?',
    explanation:
      'Parçada eğitimde dijital teknolojilerin rolünden bahsedilirken IV. cümlede konu aniden "kitap fiyatlarının yükselmesine" geçmiş ve akışı bozmuştur. IV çıkarıldığında III ile V birbirine bağlanır.',
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
  // Sözel Yetenek Soru 3 (Sözel Mantık)
  {
    id: 'q-soz-u3-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-3',
    topic_id: 'topic-sozel-3-1',
    question_text:
      'Ahmet, Burak, Ceyda ve Damla isimli dört öğretmen; Pazartesi, Salı, Çarşamba ve Perşembe günleri birer gün nöbet tutacaktır.\n• Ahmet, Ceyda’dan hemen sonraki gün nöbetçidir ([Ceyda][Ahmet]).\n• Burak Perşembe günü nöbet tutmamıştır (Burak ≠ Perşembe).\n\nBuna göre Ceyda’nın Salı günü nöbet tuttuğu biliniyorsa, Perşembe günü kesinlikle kim nöbetçidir?',
    explanation:
      'Ceyda = Salı ise, [Ceyda][Ahmet] kuralı gereği Ahmet = Çarşamba olur. Geriye Pazartesi ve Perşembe kalır. Burak Perşembe olamayacağına göre Burak = Pazartesi, geriye kalan Damla ise kesinlikle Perşembe günü nöbetçi olur.',
    difficulty: 'zor',
    question_type: 'application',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz3-a', question_id: 'q-soz-u3-1', option_key: 'A', option_text: 'Ahmet', is_correct: false },
      { id: 'opt-sz3-b', question_id: 'q-soz-u3-1', option_key: 'B', option_text: 'Burak', is_correct: false },
      { id: 'opt-sz3-c', question_id: 'q-soz-u3-1', option_key: 'C', option_text: 'Damla', is_correct: true },
      { id: 'opt-sz3-d', question_id: 'q-soz-u3-1', option_key: 'D', option_text: 'Ceyda', is_correct: false },
      { id: 'opt-sz3-e', question_id: 'q-soz-u3-1', option_key: 'E', option_text: 'Belirlenemez', is_correct: false },
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
    title: 'Okuduğunu Anlama ve Bağlamsal Çıkarım Mini Sınavı',
    description: 'Ana fikir, çıkarım ve bağlamsal analiz becerilerini ölçen 10 soruluk tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[0]],
  },
  {
    id: 'mini-exam-sozel-2',
    unit_id: 'unit-sozel-2',
    title: 'Paragraf ve Metin Mimarisi Mini Sınavı',
    description: 'Paragraf yapısı, akış bozma, tamamlama ve çeldirici eleme tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[1]],
  },
  {
    id: 'mini-exam-sozel-3',
    unit_id: 'unit-sozel-3',
    title: 'Sözel Akıl Yürütme ve Mantık Mini Sınavı',
    description: 'Tablo kurma, sıralama ve koşullu çıkarım tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[2]],
  },
  {
    id: 'mini-exam-sayisal-1',
    unit_id: 'unit-sayisal-1',
    title: 'Temel Matematik ve Sayılar Ünite Mini Sınavı',
    description: 'Sayı kümeleri ve bölünebilme kuralları tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[3]],
  },
  {
    id: 'mini-exam-tarih-1',
    unit_id: 'unit-tarih-1',
    title: 'İlk Türk Devletleri ve Türk-İslam Tarihi Mini Sınavı',
    description: 'Devlet teşkilatı ve kültür medeniyet tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[4]],
  },
  {
    id: 'mini-exam-cografya-1',
    unit_id: 'unit-cografya-1',
    title: 'Coğrafi Konum ve Fiziki Coğrafya Mini Sınavı',
    description: 'Yer şekilleri, iklim ve konum tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[5]],
  },
  {
    id: 'mini-exam-eb-1',
    unit_id: 'unit-eb-1',
    title: 'Eğitimin Temelleri ve Öğrenme Psikolojisi Mini Sınavı',
    description: 'Koşullanma ve öğrenme kuramları tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[6]],
  },
  {
    id: 'mini-exam-tmes-2',
    unit_id: 'unit-tmes-2',
    title: 'Türkiye Yüzyılı Maarif Modeli Mini Sınavı',
    description: 'Güncel eğitim yaklaşımları ve Maarif Modeli tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[7]],
  },
  {
    id: 'mini-exam-mevzuat-1',
    unit_id: 'unit-mevzuat-1',
    title: '7528 Sayılı ÖMK & Mevzuat Mini Sınavı',
    description: 'Öğretmenlik Mesleği Kanunu ve mevzuat tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[8]],
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
