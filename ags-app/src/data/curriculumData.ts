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
    description: 'Osmanlı Öncesi Türk Tarihi, Osmanlı Tarihi, Atatürk İlkeleri ve İnkılap Tarihi, Çağdaş Türk ve Dünya Tarihi.',
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
  // 1. SÖZEL YETENEK (5 Temel Başlık)
  {
    id: 'unit-sozel-1',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 1 — SÖZCÜKTE ANLAM',
    description: 'Sözcüğün bağlama göre anlamı, gerçek/mecaz anlam, sözcükler arası anlam ilişkileri ve yakın anlamlı ifadeleri ayırt etme.',
    order_index: 1,
  },
  {
    id: 'unit-sozel-2',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 2 — CÜMLEDE ANLAM',
    description: 'Cümleden çıkarılabilecek/çıkarılamayacak yargılar, neden-sonuç, amaç-sonuç, koşul, karşılaştırma, kesinlik ve olasılık.',
    order_index: 2,
  },
  {
    id: 'unit-sozel-3',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 3 — ANLATIMIN OLUŞMASI',
    description: 'Cümle sıralama, paragraf tamamlama, giriş/sonuç belirleme, cümle yerleştirme ve akışı bozan cümleyi tespit etme.',
    order_index: 3,
  },
  {
    id: 'unit-sozel-4',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 4 — PARAGRAFTA ANLAM',
    description: 'Ana düşünce, yardımcı düşünceler, kapsam filtresi, yazarın amacı/tutumu, çıkarım yapma ve çeldirici eleme stratejileri.',
    order_index: 4,
  },
  {
    id: 'unit-sozel-5',
    subject_id: 'sozel-yetenek',
    title: 'ÜNİTE 5 — SÖZEL MANTIK',
    description: 'Sıralama, yerleştirme, eşleştirme, koşullu akıl yürütme, değişkenler tablosu ve çoklu koşullardan kesin yargı çıkarma.',
    order_index: 5,
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

  // 3. TARİH (4 RESMÎ AGS ÜNİTESİ)
  {
    id: 'unit-tarih-1',
    subject_id: 'tarih',
    title: 'ÜNİTE 1 — OSMANLI ÖNCESİ TÜRK DEVLETLERİ TARİHİ',
    description: 'İslamiyet öncesi Türk devletleri, kültür-medeniyet, devlet teşkilatı, Türklerin İslamiyet\'i kabulü ve ilk Türk-İslam devletleri.',
    order_index: 1,
  },
  {
    id: 'unit-tarih-2',
    subject_id: 'tarih',
    title: 'ÜNİTE 2 — OSMANLI TARİHİ',
    description: 'XIII. yüzyıldan XX. yüzyıl başlarına kadar siyasal, sosyal, ekonomik ve kültürel gelişmeler, teşkilat yapısı ve ıslahatlar.',
    order_index: 2,
  },
  {
    id: 'unit-tarih-3',
    subject_id: 'tarih',
    title: 'ÜNİTE 3 — ATATÜRK İLKELERİ VE İNKILAP TARİHİ',
    description: 'XX. yüzyıl başından II. Dünya Savaşı sonuna kadar Osmanlı\'nın son dönemi, Millî Mücadele, inkılaplar ve Atatürk ilkeleri.',
    order_index: 3,
  },
  {
    id: 'unit-tarih-4',
    subject_id: 'tarih',
    title: 'ÜNİTE 4 — ÇAĞDAŞ TÜRK VE DÜNYA TARİHİ',
    description: 'XX. yüzyıl başından günümüze dünya ve II. Dünya Savaşı\'ndan günümüze Türkiye\'deki siyasal, sosyal, ekonomik ve diplomatik gelişmeler.',
    order_index: 4,
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
  // 1. SÖZEL YETENEK (Tam olarak 5 Resmi Başlık)
  { unitId: 'unit-sozel-1', id: 'topic-sozel-1', title: 'Sözcükte Anlam', mins: 25 },
  { unitId: 'unit-sozel-2', id: 'topic-sozel-2', title: 'Cümlede Anlam', mins: 25 },
  { unitId: 'unit-sozel-3', id: 'topic-sozel-3', title: 'Anlatımın Oluşması', mins: 30 },
  { unitId: 'unit-sozel-4', id: 'topic-sozel-4', title: 'Paragrafta Anlam', mins: 30 },
  { unitId: 'unit-sozel-5', id: 'topic-sozel-5', title: 'Sözel Mantık', mins: 35 },

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

  // 3. TARİH (4 RESMÎ AGS ÜNİTESİ - KAPSAMLI VE DENGELİ DAĞILIM)
  // ÜNİTE 1: Osmanlı Öncesi Türk Devletleri Tarihi
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-1', title: 'İlk Türk Toplulukları, Kültür Merkezleri ve İskitler (Sakalar)', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-2', title: 'Asya (Büyük) Hun Devleti ve Kavimler Göçü', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-3', title: 'I. ve II. Göktürk Devleti ve Orhun Yazıtları', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-4', title: 'Uygurlar ve Diğer Türk Devletleri ve Toplulukları', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-5', title: 'İslamiyet Öncesi Türklerde Devlet Teşkilatı, Kut ve Veraset', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-6', title: 'İslamiyet Öncesi Türklerde Ordu, Toplum ve Hukuk (Töre)', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-7', title: 'İslamiyet Öncesi Türklerde Din, İnanç, Kültür ve Sanat', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-8', title: 'Türklerin İslamiyet\'i Kabulü ve Talas Savaşı', mins: 25 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-9', title: 'İlk Türk-İslam Devletleri: Karahanlılar ve Gazneliler', mins: 30 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-10', title: 'Büyük Selçuklu Devleti (Siyasi Tarih ve Savaşlar)', mins: 30 },
  { unitId: 'unit-tarih-1', id: 'topic-tarih-1-11', title: 'Türk-İslam Kültür ve Medeniyeti (Yönetim, Bilim, Edebiyat)', mins: 30 },

  // ÜNİTE 2: Osmanlı Tarihi (XIII. YY - XX. YY Başları)
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-1', title: 'Osmanlı Devleti Kuruluş Dönemi ve Beylikten Devlete Geçiş', mins: 25 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-2', title: 'Osmanlı Devleti Yükselme Dönemi ve Dünya Gücü Osmanlı', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-3', title: 'Osmanlı Merkez ve Taşra Teşkilatı (Divan-ı Hümayun ve Eyaletler)', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-4', title: 'Osmanlı Askerî Teşkilatı (Kapıkulu ve Tımarlı Sipahiler)', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-5', title: 'Osmanlı Toplum Yapısı ve Millet Sistemi', mins: 25 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-6', title: 'Osmanlı Ekonomisi, Maliye Teşkilatı ve Vergi Düzeni', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-7', title: 'Osmanlı Hukuk Sistemi ve Kanunnameler', mins: 25 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-8', title: 'Osmanlı Eğitim, Bilim, Kültür, Sanat ve Mimari', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-9', title: 'XVII. Yüzyıl Duraklama Dönemi Siyasi Gelişmeleri ve Islahatları', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-10', title: 'XVIII. Yüzyıl Gerileme Dönemi ve Batılılaşma Islahatları', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-11', title: 'XIX. ve XX. Yüzyıl Başı Osmanlı Dağılma Dönemi ve Fikir Akımları', mins: 30 },
  { unitId: 'unit-tarih-2', id: 'topic-tarih-2-12', title: 'Tanzimat, Islahat ve Meşrutiyet Dönemi Islahat Hareketleri', mins: 35 },

  // ÜNİTE 3: Atatürk İlkeleri ve İnkılap Tarihi
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-1', title: 'XX. Yüzyıl Başında Osmanlı: Trablusgarp ve Balkan Savaşları', mins: 25 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-2', title: 'I. Dünya Savaşı (Nedenleri, Osmanlı Cepheleri ve Sonuçları)', mins: 30 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-3', title: 'Mondros Ateşkesi, İşgaller, Cemiyetler ve Kuvay-ı Milliye', mins: 30 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-4', title: 'Millî Mücadele Hazırlık Dönemi (Genelgeler ve Kongreler)', mins: 30 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-5', title: 'Misak-ı Millî, Son Mebusan Meclisi ve I. TBMM\'nin Açılışı', mins: 30 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-6', title: 'Millî Mücadele Muharebeler Dönemi (Doğu, Güney ve Batı Cepheleri)', mins: 35 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-7', title: 'Mudanya Ateşkes Antlaşması ve Lozan Barış Antlaşması', mins: 30 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-8', title: 'Siyasi, Hukuki, Toplumsal, Eğitim ve Kültür İnkılapları', mins: 35 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-9', title: 'Ekonomi, Sağlık ve Bayındırlık Alanındaki Gelişmeler', mins: 30 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-10', title: 'Atatürk İlkeleri (Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık)', mins: 35 },
  { unitId: 'unit-tarih-3', id: 'topic-tarih-3-11', title: 'Atatürk Dönemi İç ve Dış Politikası & II. Dünya Savaşı Dönemi Türkiye', mins: 30 },

  // ÜNİTE 4: Çağdaş Türk ve Dünya Tarihi
  { unitId: 'unit-tarih-4', id: 'topic-tarih-4-1', title: 'İki Dünya Savaşı Arası Dönem ve Totaliter Rejimler', mins: 25 },
  { unitId: 'unit-tarih-4', id: 'topic-tarih-4-2', title: 'II. Dünya Savaşı: Nedenleri, Gelişimi ve Sonuçları', mins: 30 },
  { unitId: 'unit-tarih-4', id: 'topic-tarih-4-3', title: 'Soğuk Savaş Dönemi ve İki Kutuplu Dünya (NATO & Varşova Paktı)', mins: 30 },
  { unitId: 'unit-tarih-4', id: 'topic-tarih-4-4', title: 'Soğuk Savaş Döneminde Türkiye ve Çok Partili Hayata Geçiş', mins: 30 },
  { unitId: 'unit-tarih-4', id: 'topic-tarih-4-5', title: 'Yumuşama (Detant) Dönemi ve Bölgesel Krizler', mins: 25 },
  { unitId: 'unit-tarih-4', id: 'topic-tarih-4-6', title: 'Kıbrıs Meselesi, 1974 Barış Harekâtı ve Türk Dış Politikası', mins: 30 },
  { unitId: 'unit-tarih-4', id: 'topic-tarih-4-7', title: 'SSCB\'nin Dağılması, Bağımsız Türk Cumhuriyetleri (TİKA, TÜRKSOY)', mins: 30 },
  { unitId: 'unit-tarih-4', id: 'topic-tarih-4-8', title: '1980 Sonrası Türkiye ve 21. Yüzyılda Güncel Gelişmeler', mins: 30 },

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

import { resolveAuthenticTopicContent } from './topics';

// Domain-specific content generators ensuring academic depth and compliance with the AGS Content Quality System
const generateTopicContent = (topic: Topic): TopicContent => {
  return resolveAuthenticTopicContent(topic);
};

export const AGS_TOPIC_CONTENTS: Record<string, TopicContent> = {};
AGS_TOPICS.forEach((t) => {
  AGS_TOPIC_CONTENTS[t.id] = generateTopicContent(t);
});

// Rich questions for each unit
export const AGS_QUESTIONS: Question[] = [
  // Sözel Yetenek Soru 1 (Sözcükte Anlam)
  {
    id: 'q-soz-u1-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-1',
    topic_id: 'topic-sozel-1',
    question_text:
      'Geleneksel motifleri modern bir üslupla harmanlayan ressam, son sergisinde tuvalin sınırlarını *zorlayarak* izleyiciyi tablonun içine çeken üç boyutlu bir atmosfer oluşturmuş.\n\nBu cümledeki "zorlamak" sözcüğünün cümleye kattığı anlam aşağıdakilerden hangisidir?',
    explanation:
      'Cümlede ressamın alışılagelmiş kalıpların, mevcut sınırların ötesine geçtiği ve imkânları sonuna kadar kullandığı ifade edilmektedir. [Doğru Cevap: B]',
    difficulty: 'orta',
    question_type: 'conceptual',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz1-a', question_id: 'q-soz-u1-1', option_key: 'A', option_text: 'Baskı ve şiddet uygulayarak bir şeyi yaptırmak', is_correct: false },
      { id: 'opt-sz1-b', question_id: 'q-soz-u1-1', option_key: 'B', option_text: 'Alışılmış sınırların ötesine geçmek, imkânları sonuna kadar kullanmak', is_correct: true },
      { id: 'opt-sz1-c', question_id: 'q-soz-u1-1', option_key: 'C', option_text: 'Bir eşyayı kırılacak derecede bükmek', is_correct: false },
      { id: 'opt-sz1-d', question_id: 'q-soz-u1-1', option_key: 'D', option_text: 'İstemediği bir tercihe mecbur bırakmak', is_correct: false },
      { id: 'opt-sz1-e', question_id: 'q-soz-u1-1', option_key: 'E', option_text: 'Fiziksel güç uygulayarak bir engeli aşmak', is_correct: false },
    ],
  },
  // Sözel Yetenek Soru 2 (Cümlede Anlam)
  {
    id: 'q-soz-u2-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-2',
    topic_id: 'topic-sozel-2',
    question_text:
      '"Bir yazarın başarısı, anlattığı olayların olağanüstülüğünde değil; en sıradan insanlık durumlarını bile okurun yüreğine dokunacak bir samimiyetle aktarabilmesinde gizlidir."\n\nBu cümleden çıkarılabilecek **kesin** yargı aşağıdakilerden hangisidir?',
    explanation:
      'Cümleye göre yazarlık başarısının ölçütü konunun sıra dışı olması değil, sıradan olayları içtenlikle aktarma yetisidir. [Doğru Cevap: C]',
    difficulty: 'orta',
    question_type: 'conceptual',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz2-a', question_id: 'q-soz-u2-1', option_key: 'A', option_text: 'Olağanüstü konuları işleyen yazarlar hiçbir zaman başarılı olamaz.', is_correct: false },
      { id: 'opt-sz2-b', question_id: 'q-soz-u2-1', option_key: 'B', option_text: 'Okurun ilgisini çeken tek unsur eserdeki kurgusal derinliktir.', is_correct: false },
      { id: 'opt-sz2-c', question_id: 'q-soz-u2-1', option_key: 'C', option_text: 'Edebî başarıda belirleyici olan, konunun özgünlüğünden ziyade anlatımın içtenliği ve işleniş biçimidir.', is_correct: true },
      { id: 'opt-sz2-d', question_id: 'q-soz-u2-1', option_key: 'D', option_text: 'Sıradan hayatları anlatan tüm eserler geniş kitlelerce sevilir.', is_correct: false },
      { id: 'opt-sz2-e', question_id: 'q-soz-u2-1', option_key: 'E', option_text: 'Samimi bir dille yazılmayan metinler eğitici nitelik taşımaz.', is_correct: false },
    ],
  },
  // Sözel Yetenek Soru 3 (Anlatımın Oluşması)
  {
    id: 'q-soz-u3-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-3',
    topic_id: 'topic-sozel-3',
    question_text:
      '(I) Eğitimde teknoloji kullanımı her geçen gün artmaktadır. (II) Dijital araçlar öğrencilerin derse olan ilgisini ve motivasyonunu canlı tutar. (III) Akıllı tahtalar ve tabletler sınıf ortamında etkileşimi güçlendirir. (IV) Kitap fiyatlarının yükselmesi öğrencilerin kaynak teminini zorlaştırmaktadır. (V) Bu nedenle öğretmenlerin dijital materyal hazırlama becerileri büyük önem taşır.\n\nBu parçadaki numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?',
    explanation:
      'Parçada eğitimde dijital teknolojilerin rolünden bahsedilirken IV. cümlede konu aniden "kitap fiyatlarının yükselmesine" geçmiş ve akışı bozmuştur. IV çıkarıldığında III ile V birbirine bağlanır.',
    difficulty: 'orta',
    question_type: 'scenario',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz3-a', question_id: 'q-soz-u3-1', option_key: 'A', option_text: 'I', is_correct: false },
      { id: 'opt-sz3-b', question_id: 'q-soz-u3-1', option_key: 'B', option_text: 'II', is_correct: false },
      { id: 'opt-sz3-c', question_id: 'q-soz-u3-1', option_key: 'C', option_text: 'III', is_correct: false },
      { id: 'opt-sz3-d', question_id: 'q-soz-u3-1', option_key: 'D', option_text: 'IV', is_correct: true },
      { id: 'opt-sz3-e', question_id: 'q-soz-u3-1', option_key: 'E', option_text: 'V', is_correct: false },
    ],
  },
  // Sözel Yetenek Soru 4 (Paragrafta Anlam)
  {
    id: 'q-soz-u4-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-4',
    topic_id: 'topic-sozel-4',
    question_text:
      'Eğitimde bilgi aktarımının hızı ile bilginin zihinde işlenme derinliği arasında her zaman doğrusal bir ilişki yoktur. Günümüzde öğrenciler internet ortamında muazzam bir bilgi akışına maruz kalmakta ancak bilgiyi eleştirel süzgeçten geçirme ve problem çözmede kullanma becerisinde gerileme yaşamaktadır.\n\nBu parçada asıl vurgulanmak istenen düşünce aşağıdakilerden hangisidir?',
    explanation:
      'Parçada bilginin niceliğinden ve erişim hızından ziyade, bilginin eleştirel olarak derinlemesine işlenmesi ve niteliğinin değerli olduğu vurgulanmaktadır. [Doğru Cevap: C]',
    difficulty: 'orta',
    question_type: 'conceptual',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz4-a', question_id: 'q-soz-u4-1', option_key: 'A', option_text: 'İnternet kullanımının tamamen sınırlandırılması gerektiği', is_correct: false },
      { id: 'opt-sz4-b', question_id: 'q-soz-u4-1', option_key: 'B', option_text: 'Bilgiye hızlı erişimin her koşulda başarı getirdiği', is_correct: false },
      { id: 'opt-sz4-c', question_id: 'q-soz-u4-1', option_key: 'C', option_text: 'Bilginin niceliğinden ve erişim hızından çok eleştirel işlenme derinliğinin değerli olduğu', is_correct: true },
      { id: 'opt-sz4-d', question_id: 'q-soz-u4-1', option_key: 'D', option_text: 'Öğrencilerin geleneksel kütüphaneleri daha çok sevdiği', is_correct: false },
      { id: 'opt-sz4-e', question_id: 'q-soz-u4-1', option_key: 'E', option_text: 'Sınavların yalnızca ezber bilgiyi ölçtüğü', is_correct: false },
    ],
  },
  // Sözel Yetenek Soru 5 (Sözel Mantık)
  {
    id: 'q-soz-u5-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-5',
    topic_id: 'topic-sozel-5',
    question_text:
      'Ahmet, Burak, Ceyda ve Damla isimli dört öğretmen; Pazartesi, Salı, Çarşamba ve Perşembe günleri birer gün nöbet tutacaktır.\n• Ahmet, Ceyda’dan hemen sonraki gün nöbetçidir ([Ceyda][Ahmet]).\n• Burak Perşembe günü nöbet tutmamıştır (Burak ≠ Perşembe).\n\nBuna göre Ceyda’nın Salı günü nöbet tuttuğu biliniyorsa, Perşembe günü kesinlikle kim nöbetçidir?',
    explanation:
      'Ceyda = Salı ise, [Ceyda][Ahmet] kuralı gereği Ahmet = Çarşamba olur. Geriye Pazartesi ve Perşembe kalır. Burak Perşembe olamayacağına göre Burak = Pazartesi, geriye kalan Damla ise kesinlikle Perşembe günü nöbetçi olur.',
    difficulty: 'zor',
    question_type: 'application',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-sz5-a', question_id: 'q-soz-u5-1', option_key: 'A', option_text: 'Ahmet', is_correct: false },
      { id: 'opt-sz5-b', question_id: 'q-soz-u5-1', option_key: 'B', option_text: 'Burak', is_correct: false },
      { id: 'opt-sz5-c', question_id: 'q-soz-u5-1', option_key: 'C', option_text: 'Damla', is_correct: true },
      { id: 'opt-sz5-d', question_id: 'q-soz-u5-1', option_key: 'D', option_text: 'Ceyda', is_correct: false },
      { id: 'opt-sz5-e', question_id: 'q-soz-u5-1', option_key: 'E', option_text: 'Belirlenemez', is_correct: false },
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
    title: 'Sözcükte Anlam Mini Sınavı',
    description: 'Bağlamsal anlam, çok anlamlılık ve sözcük ilişkilerini ölçen soru çözme testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[0]],
  },
  {
    id: 'mini-exam-sozel-2',
    unit_id: 'unit-sozel-2',
    title: 'Cümlede Anlam Mini Sınavı',
    description: 'Cümleden kesin yargı çıkarma ve anlam ilişkileri tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[1]],
  },
  {
    id: 'mini-exam-sozel-3',
    unit_id: 'unit-sozel-3',
    title: 'Anlatımın Oluşması Mini Sınavı',
    description: 'Akış bozma, sıralama ve cümle yerleştirme soru pratiği testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[2]],
  },
  {
    id: 'mini-exam-sozel-4',
    unit_id: 'unit-sozel-4',
    title: 'Paragrafta Anlam Mini Sınavı',
    description: 'Ana düşünce, yardımcı düşünce ve paragraf kurgusu tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[3]],
  },
  {
    id: 'mini-exam-sozel-5',
    unit_id: 'unit-sozel-5',
    title: 'Sözel Mantık Mini Sınavı',
    description: 'Tablo kurma, sıralama ve mantıksal çıkarım tarama testi.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[4]],
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
    title: 'Osmanlı Öncesi Türk Devletleri Tarihi Mini Sınavı',
    description: 'İslamiyet öncesi Türk devletleri, kültür-medeniyet ve ilk Türk-İslam devletleri tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[4]],
  },
  {
    id: 'mini-exam-tarih-2',
    unit_id: 'unit-tarih-2',
    title: 'Osmanlı Tarihi Mini Sınavı',
    description: 'Kuruluş, yükselme, teşkilat yapısı, kültür-medeniyet ve ıslahatlar tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[4]],
  },
  {
    id: 'mini-exam-tarih-3',
    unit_id: 'unit-tarih-3',
    title: 'Atatürk İlkeleri ve İnkılap Tarihi Mini Sınavı',
    description: 'Millî Mücadele, inkılaplar, Atatürk ilkeleri ve Atatürk dönemi dış politika tarama sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[4]],
  },
  {
    id: 'mini-exam-tarih-4',
    unit_id: 'unit-tarih-4',
    title: 'Çağdaş Türk ve Dünya Tarihi Mini Sınavı',
    description: 'Soğuk Savaş, Türk dış politikası, Kıbrıs meselesi ve Türk dünyası tarama sınavı.',
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
