import {
  Subject,
  Unit,
  Topic,
  TopicContent,
  Question,
  MiniExam,
  MockExam,
} from '../types/database';

export const AGS_SUBJECTS: Subject[] = [
  {
    id: 'sozel-yetenek',
    title: 'Sözel Yetenek',
    icon: 'Brain',
    description: 'Sözcükte ve Cümlede Anlam, Paragraf Yapısı & Ana Düşünce, Sözel Mantık ve Muhakeme.',
    order_index: 1,
  },
  {
    id: 'sayisal-yetenek',
    title: 'Sayısal Yetenek',
    icon: 'TrendingUp',
    description: 'Temel Matematiksel Kavramlar, Oran-Orantı, Problem Çözme Stratejileri ve Grafik Yorumlama.',
    order_index: 2,
  },
  {
    id: 'tarih',
    title: 'Tarih',
    icon: 'Globe',
    description: 'İslamiyet Öncesi Türk Tarihi, Selçuklu & Osmanlı Medeniyeti, Kurtuluş Savaşı ve Atatürk İnkılapları.',
    order_index: 3,
  },
  {
    id: 'cografya',
    title: 'Türkiye Coğrafyası',
    icon: 'Globe',
    description: 'Fiziki Coğrafya (Yerşekilleri, İklim), Beşeri & Ekonomik Coğrafya, Bölgesel Kalkınma Projeleri.',
    order_index: 4,
  },
  {
    id: 'egitim-bilimleri',
    title: 'Eğitim Bilimleri',
    icon: 'GraduationCap',
    description: 'Öğrenme Psikolojisi, Gelişim Psikolojisi, Öğretim İlke ve Yöntemleri (ÖYT), Rehberlik ve Ölçme.',
    order_index: 5,
  },
  {
    id: 'milli-egitim-sistemi',
    title: 'Türk Millî Eğitim Sistemi',
    icon: 'BookOpen',
    description: 'Türk Eğitim Tarihi, MEB Teşkilat Yapısı (Merkez, Taşra, Yurt Dışı), Talim ve Terbiye Kurulu.',
    order_index: 6,
  },
  {
    id: 'mevzuat',
    title: 'Mevzuat & Öğretmenlik Kanunu',
    icon: 'Scale',
    description: 'T.C. Anayasası, 7528 Sayılı Öğretmenlik Mesleği Kanunu, 1739 Sayılı Kanun, 657 ve 4483.',
    order_index: 7,
  },
];

export const AGS_UNITS: Unit[] = [
  // 1. Sözel Yetenek
  {
    id: 'unit-sozel-anlam',
    subject_id: 'sozel-yetenek',
    title: 'Sözcük ve Cümle Düzeyinde Anlam & Anlatım',
    description: 'Gerçek, mecaz ve terim anlam, deyim/atasözü, örtülü anlam, cümle vurgusu ve anlatım özellikleri.',
    order_index: 1,
  },
  {
    id: 'unit-sozel-paragraf',
    subject_id: 'sozel-yetenek',
    title: 'Paragrafta Anlam, Yapı ve Sözel Mantık',
    description: 'Ana düşünce, yardımcı fikirler, akış bozan cümleler, anlatım teknikleri ve sözel mantık çıkarımları.',
    order_index: 2,
  },

  // 2. Sayısal Yetenek
  {
    id: 'unit-sayisal-temel',
    subject_id: 'sayisal-yetenek',
    title: 'Temel Matematiksel Kavramlar ve Sayı Sistemleri',
    description: 'Asal sayılar, basamak analizi, bölünebilme kuralları ve rasyonel işlemler.',
    order_index: 1,
  },
  {
    id: 'unit-sayisal-problemler',
    subject_id: 'sayisal-yetenek',
    title: 'Problem Çözme Stratejileri & Mantıksal Çıkarım',
    description: 'Oran-orantı, yaş/yüzde problemleri, tablo ve grafik okuma, akıl yürütme soruları.',
    order_index: 2,
  },

  // 3. Tarih
  {
    id: 'unit-tarih-turk-islam',
    subject_id: 'tarih',
    title: 'İslamiyet Öncesi Türk Tarihi & İlk Türk-İslam Devletleri',
    description: 'Devlet teşkilatı, kut anlayışı, töre, Selçuklu ve Beylikler dönemi kültür-uygarlığı.',
    order_index: 1,
  },
  {
    id: 'unit-tarih-osmanli-inkilap',
    subject_id: 'tarih',
    title: 'Osmanlı Yenileşmesi, Milli Mücadele ve Atatürk İnkılapları',
    description: 'Tanzimat, Meşrutiyet, Kurtuluş Savaşı genelgeler/kongreler, Cumhuriyet devrimleri ve dış politika.',
    order_index: 2,
  },

  // 4. Türkiye Coğrafyası
  {
    id: 'unit-cografya-fiziki',
    subject_id: 'cografya',
    title: "Türkiye'nin Fiziki Coğrafyası ve Doğal Çevre",
    description: 'Jeolojik yapı, dağlar, platolar, akarsular, iklim tipleri, bitki örtüsü ve doğal afetler.',
    order_index: 1,
  },
  {
    id: 'unit-cografya-beseri',
    subject_id: 'cografya',
    title: "Türkiye'nin Beşeri & Ekonomik Coğrafyası ve Projeler",
    description: 'Nüfus dağılışı, göç dinamikleri, tarım, hayvancılık, madenler, sanayi ve kalkınma projeleri (GAP, DOKAP).',
    order_index: 2,
  },

  // 5. Eğitim Bilimleri
  {
    id: 'unit-eb-ogrenme',
    subject_id: 'egitim-bilimleri',
    title: 'Öğrenme Psikolojisi',
    description: 'Klasik koşullanma, Edimsel koşullanma, Sosyal öğrenme, Gestalt ve Bilgiyi İşleme kuramı.',
    order_index: 1,
  },
  {
    id: 'unit-eb-gelisim',
    subject_id: 'egitim-bilimleri',
    title: 'Gelişim Psikolojisi',
    description: 'Piaget bilişsel gelişim, Vygotsky sosyokültürel kuram, Erikson psikososyal ve Kohlberg ahlak gelişimi.',
    order_index: 2,
  },
  {
    id: 'unit-eb-oyt',
    subject_id: 'egitim-bilimleri',
    title: 'Öğretim İlke ve Yöntemleri (ÖYT) & Ölçme',
    description: 'Öğretim ilkeleri, çağdaş öğretim stratejileri, yöntem ve teknikler, ölçme-değerlendirme temel kavramları.',
    order_index: 3,
  },

  // 6. Türk Millî Eğitim Sistemi
  {
    id: 'unit-tmes-teskilat',
    subject_id: 'milli-egitim-sistemi',
    title: 'MEB Teşkilat Yapısı ve Kurullar',
    description: 'Merkez Teşkilatı birimleri, Taşra ve Yurt Dışı teşkilatı, Talim ve Terbiye Kurulu Başkanlığı görevleri.',
    order_index: 1,
  },
  {
    id: 'unit-tmes-akademi',
    subject_id: 'milli-egitim-sistemi',
    title: 'Milli Eğitim Akademisi Yapılanması ve Görevleri',
    description: 'Akademi Başkanlığı, hazırlık eğitimi merkezleri, kariyer basamakları ve mesleki gelişim koordinasyonu.',
    order_index: 2,
  },

  // 7. Mevzuat
  {
    id: 'unit-mevzuat-omk',
    subject_id: 'mevzuat',
    title: '7528 Sayılı Öğretmenlik Mesleği Kanunu (ÖMK)',
    description: 'Öğretmenlik mesleği ilkeleri, hazırlık eğitimi süreci, kariyer basamakları ve disiplin hükümleri.',
    order_index: 1,
  },
  {
    id: 'unit-mevzuat-temel-hukuk',
    subject_id: 'mevzuat',
    title: '1739 Sayılı Kanun, Anayasa & İdari Mevzuat',
    description: 'Türk Milli Eğitiminin genel amaç ve ilkeleri, Anayasanın eğitim maddeleri, 657 ve 4483 Sayılı Kanunlar.',
    order_index: 2,
  },
];

export const AGS_TOPICS: Topic[] = [
  // Sözel Yetenek Topics
  {
    id: 'topic-sozel-anlam-iliskileri',
    unit_id: 'unit-sozel-anlam',
    title: 'Sözcük ve Cümle Düzeyinde Anlam İlişkileri ve Örtülü Anlam',
    order_index: 1,
    estimated_minutes: 25,
  },
  {
    id: 'topic-sozel-paragraf-yontem',
    unit_id: 'unit-sozel-paragraf',
    title: 'Paragrafta Yapı, Ana Düşünce ve Sözel Mantık Çözüm Stratejileri',
    order_index: 1,
    estimated_minutes: 30,
  },

  // Sayısal Yetenek Topics
  {
    id: 'topic-sayisal-sayi-basamak',
    unit_id: 'unit-sayisal-temel',
    title: 'Temel Kavramlar, Basamak Analizi ve Bölünebilme',
    order_index: 1,
    estimated_minutes: 25,
  },
  {
    id: 'topic-sayisal-problem-grafik',
    unit_id: 'unit-sayisal-problemler',
    title: 'Oran-Orantı, Problem Modelleme ve Grafik Analizi',
    order_index: 1,
    estimated_minutes: 30,
  },

  // Tarih Topics
  {
    id: 'topic-tarih-turk-teskilat',
    unit_id: 'unit-tarih-turk-islam',
    title: 'İslam Öncesi Türk Devlet Teşkilatı, Kut ve Töre',
    order_index: 1,
    estimated_minutes: 30,
  },
  {
    id: 'topic-tarih-milli-mucadele',
    unit_id: 'unit-tarih-osmanli-inkilap',
    title: 'Milli Mücadele Hazırlık Dönemi: Genelgeler, Kongreler ve Misakımilli',
    order_index: 1,
    estimated_minutes: 35,
  },

  // Coğrafya Topics
  {
    id: 'topic-cografya-fiziki-jeomorfoloji',
    unit_id: 'unit-cografya-fiziki',
    title: "Türkiye'nin Jeolojik Yapısı, Dağları, Platoları ve İklim Kuşakları",
    order_index: 1,
    estimated_minutes: 30,
  },
  {
    id: 'topic-cografya-kalkinma-projeleri',
    unit_id: 'unit-cografya-beseri',
    title: "Türkiye'nin Bölgesel Kalkınma Projeleri (GAP, DOKAP, KOP, ZBK)",
    order_index: 1,
    estimated_minutes: 25,
  },

  // Eğitim Bilimleri Topics
  {
    id: 'topic-eb-davranisci-kosullanma',
    unit_id: 'unit-eb-ogrenme',
    title: 'Klasik ve Edimsel Koşullanma: Temel Süreçler ve Pekiştirme Tarifeleri',
    order_index: 1,
    estimated_minutes: 35,
  },
  {
    id: 'topic-eb-bilgiyi-isleme',
    unit_id: 'unit-eb-ogrenme',
    title: 'Bilgiyi İşleme Kuramı: Bellek Türleri ve Bilgiyi Depolama Süreçleri',
    order_index: 2,
    estimated_minutes: 30,
  },
  {
    id: 'topic-eb-piaget-vygotsky',
    unit_id: 'unit-eb-gelisim',
    title: 'Piaget ve Vygotsky Bilişsel Gelişim Kuramları ve Karşılaştırması',
    order_index: 1,
    estimated_minutes: 35,
  },
  {
    id: 'topic-eb-kohlberg-erikson',
    unit_id: 'unit-eb-gelisim',
    title: 'Kohlberg Ahlak Gelişimi ve Erikson Psikososyal Gelişim Evreleri',
    order_index: 2,
    estimated_minutes: 30,
  },
  {
    id: 'topic-eb-ogretim-ilkeleri-stratejiler',
    unit_id: 'unit-eb-oyt',
    title: 'Öğretim İlkeleri, Sunuş/Buluş/Araştırma Stratejileri ve Ölçme Temelleri',
    order_index: 1,
    estimated_minutes: 35,
  },

  // Türk Millî Eğitim Sistemi Topics
  {
    id: 'topic-tmes-meb-teskilati',
    unit_id: 'unit-tmes-teskilat',
    title: 'MEB Merkez Teşkilatı Hizmet Birimleri ve Talim Terbiye Kurulu',
    order_index: 1,
    estimated_minutes: 30,
  },
  {
    id: 'topic-tmes-akademi-yapisi',
    unit_id: 'unit-tmes-akademi',
    title: 'Milli Eğitim Akademisi Teşkilatı, Görevleri ve Hazırlık Eğitimi',
    order_index: 1,
    estimated_minutes: 30,
  },

  // Mevzuat Topics
  {
    id: 'topic-mevzuat-7528-omk',
    unit_id: 'unit-mevzuat-omk',
    title: '7528 Sayılı Öğretmenlik Mesleği Kanunu: Kariyer Basamakları & Disiplin Hükümleri',
    order_index: 1,
    estimated_minutes: 35,
  },
  {
    id: 'topic-mevzuat-1739-anayasa',
    unit_id: 'unit-mevzuat-temel-hukuk',
    title: '1739 Sayılı Millî Eğitim Temel Kanunu İlkeleri & Anayasa Eğitim Maddeleri',
    order_index: 1,
    estimated_minutes: 30,
  },
];

export const AGS_TOPIC_CONTENTS: Record<string, TopicContent> = {
  // 1. Öğrenme Psikolojisi: Davranışçı & Edimsel
  'topic-eb-davranisci-kosullanma': {
    id: 'tc-davranisci-kosullanma',
    topic_id: 'topic-eb-davranisci-kosullanma',
    learning_objectives: [
      'Klasik koşullanmanın temel süreçlerini (pekiştirme, sönme, genelleme, ayırt etme) analiz edebilme.',
      'Gölgeleme ve engelleme kavramları arasındaki ince zamanlama farkını ayırt edebilme.',
      'Edimsel koşullanmada pekiştirme ve ceza türlerini sınıf içi senaryolara uygulayabilme.',
      'Sabit/değişken oranlı ve aralıklı pekiştirme tarifelerini belirleyebilme.',
    ],
    overview:
      'Davranışçı öğrenme kuramları, öğrenmeyi gözlenebilir ve ölçülebilir davranış değişiklikleri olarak ele alır. Klasik Koşullanma istemsiz refleks ve duyguların; Edimsel Koşullanma ise amaca yönelik istemli davranışların sonuçları yoluyla öğrenilmesini açıklar.',
    key_concepts: [
      {
        term: 'Koşulsuz Uyarıcı (Doğal Uyarıcı)',
        definition: 'Öğrenilmemiş, doğuştan gelen fizyolojik tepkileri tetikleyen uyarıcıdır (Örn: Et, yüksek ses).',
      },
      {
        term: 'Koşullu Tepki',
        definition: 'Nötr bir uyarıcının koşulsuz uyarıcıyla eşleşmesi sonucu ortaya çıkan öğrenilmiş tepkidir.',
      },
      {
        term: 'Gölgeleme (Overshadowing)',
        definition: 'İki nötr uyarıcı aynı anda sunulduğunda, daha şiddetli ve baskın olanın koşullanmayı tek başına kazanmasıdır.',
      },
      {
        term: 'Engelleme (Blocking)',
        definition: 'Daha önceden koşullanılmış bir uyarıcının varlığından dolayı ortama eklenen yeni bir uyarıcının koşullanamamasıdır.',
      },
      {
        term: 'Premack İlkesi (Büyükanne Kuralı)',
        definition: 'Birey tarafından yapılma olasılığı yüksek olan bir etkinliğin, yapılma olasılığı düşük olan etkinliği pekiştirmek için kullanılmasıdır (Örn: "Ödevini bitirirsen dışarı çıkabilirsin").',
      },
    ],
    structured_sections: [
      {
        title: '1. Klasik Koşullanma Temel İlkeleri',
        content:
          'Klasik koşullanmada organizma pasiftir. Refleksif ve duyuşsal (korku, kaygı, sevgi, önyargı) davranışlar koşullanır.\n\n• Bitişiklik: Nötr uyarıcı ile koşulsuz uyarıcı art arda gelmelidir (0.5 saniye optimum).\n• Habercilik (Rescorla): Olumlu habercilik (uyarıcının geleceğini haber verme) ve Olumsuz habercilik (uyarıcının bittiğini haber verme).\n• Garcia Etkisi (Tat Koşullanması): Uyarıcı ile tepki arasında saatler geçse dahi tek denemede koşullanmanın oluşabilmesidir.',
        subsections: [
          {
            subtitle: 'Üst Düzey (Dereceli) Koşullanma vs Duyusal Ön Koşullanma',
            content:
              '• Üst Düzey Koşullanma: Koşullanma oluştuktan SONRA ikinci bir nötr uyarıcının koşullu uyarıcıyla eşleştirilmesidir.\n• Duyusal Ön Koşullanma: İki nötr uyarıcı henüz koşullanma oluşmadan ÖNCE birlikte algılanır; biri koşullandığında diğeri de otomatik olarak tepki üretir.',
          },
        ],
      },
      {
        title: '2. Edimsel Koşullanma ve Pekiştirme Türleri',
        content:
          'Edimsel koşullanmada organizma aktiftir. Davranış sonuçlarına göre şekillenir.\n\n• Olumlu Pekiştirme (+Hoş): Ortama sevilen uyarıcı girer -> Davranış ARTAR.\n• Olumsuz Pekiştirme (-İtici): Ortamdan rahatsız edici uyarıcı çıkar -> Davranış ARTAR.\n• 1. Tip Ceza (+İtici): Ortama sevilmeyen uyarıcı girer -> Davranış AZALIR.\n• 2. Tip Ceza (-Hoş): Ortamdan sevilen uyarıcı çıkar -> Davranış AZALIR.',
      },
    ],
    comparison_tables: [
      {
        title: 'Gölgeleme ve Engelleme Karşılaştırması',
        headers: ['Özellik', 'Gölgeleme (Overshadowing)', 'Engelleme (Blocking)'],
        rows: [
          ['Zamanlama', 'Uyarıcılar AYNI ANDA birlikte verilir', 'Birinci uyarıcı ÖNCEDEN koşullanmıştır'],
          ['Sebep', 'Fiziksel baskınlık / şiddet farkı', 'Önceden öğrenilmişliğin yeni öğrenmeyi bloke etmesi'],
          ['Örnek', 'Yüksek sesli siren yanında zayıf ışığın fark edilmemesi', 'Zile koşullanan köpeğe zil+ışık verilince ışığa koşullanamaması'],
        ],
      },
      {
        title: 'Olumsuz Pekiştirme vs Ceza Karşılaştırması',
        headers: ['Kavram', 'Ortama Ne Olur?', 'Davranışın Gelecekteki Durumu', 'Örnek'],
        rows: [
          ['Olumsuz Pekiştirme', 'Rahatsız edici uyarıcı ÇIKARILIR', 'Davranış ARTAR (İstenen durum)', 'Kemer takınca sesli uyarının kesilmesi'],
          ['1. Tip Ceza', 'İtici uyarıcı EKLENİR', 'Davranış AZALIR (Bastırılır)', 'Derste konuşan öğrenciye kızılması'],
          ['2. Tip Ceza', 'Hoş uyarıcı ELİNDEN ALINIR', 'Davranış AZALIR (Bastırılır)', 'Yaramazlık yapan çocuğun tabletinin alınması'],
        ],
      },
    ],
    exam_tips: [
      {
        tip: "AGS'DE DİKKAT: Olumsuz Pekiştirme kesinlikle bir ceza DEĞİLDİR! Olumsuz pekiştirmede amaç davranışı ARTIRMAKTIR (baş ağrısında aspirin içmek gibi).",
        importance: 'critical',
      },
      {
        tip: "AGS'DE DİKKAT: Pekiştirme tarifelerinde sönmeye en dirençli olan 'Değişken Oranlı' tarifedir (kumar, piyango mantığı).",
        importance: 'high',
      },
    ],
    mnemonics: [
      {
        title: 'Pekiştirme vs Ceza Yön Kuralı',
        memory_trick: 'Pekiştirme = (+) Davranış Artar | Ceza = (-) Davranış Azalır',
        description: 'Sorularda önce davranışın artıp azaldığına bakın. Artıyorsa kesinlikle pekiştirmedir; azalıyorsa cezadır.',
      },
    ],
    summary:
      'Klasik koşullanma istemsiz duyuşsal tepkileri (korku, kaygı); edimsel koşullanma ise sonuçları tarafından kontrol edilen istemli davranışları açıklar. Olumsuz pekiştirme davranışı artırırken, ceza davranışı bastırır.',
    what_to_remember: [
      'Gölgelemede uyarıcılar aynı anda sunulur; engellemede önceden koşullanma vardır.',
      'Garcia etkisinde aradan uzun zaman geçse bile tat-koku koşullanması tek seferde gerçekleşir.',
      'Değişken oranlı pekiştirme sönmeye en dirençli tarifedir.',
      'Premack ilkesinde sevilmeyen etkinlik yapılınca sevilen etkinliğe izin verilir.',
    ],
    self_check_questions: [
      {
        question:
          'Bir anne, odasını toplayan oğluna bilgisayarda oyun oynama izni vermiştir. Annenin kullandığı yöntem aşağıdakilerden hangisidir?',
        options: [
          { key: 'A', text: 'Karşıt koşullanma', isCorrect: false },
          { key: 'B', text: 'Premack ilkesi', isCorrect: true },
          { key: 'C', text: 'Gölgeleme', isCorrect: false },
          { key: 'D', text: 'Sistematik duyarsızlaştırma', isCorrect: false },
          { key: 'E', text: 'Kademeli yaklaşma', isCorrect: false },
        ],
        explanation:
          'Premack ilkesinde (büyükanne kuralı), yapılma olasılığı düşük olan istendik bir davranış (oda toplama), yüksek olasılıklı pekiştireç etkinlikle (oyun oynama) pekiştirilir.',
      },
    ],
  },

  // 2. Gelişim Psikolojisi: Piaget vs Vygotsky
  'topic-eb-piaget-vygotsky': {
    id: 'tc-piaget-vygotsky',
    topic_id: 'topic-eb-piaget-vygotsky',
    learning_objectives: [
      'Piaget’nin bilişsel gelişim dönemlerini (duyusal motor, işlem öncesi, somut işlemler, soyut işlemler) ayırt edebilme.',
      'Özümleme, düzenleme (uyumsama) ve dengeleme süreçlerini senaryolarda analiz edebilme.',
      'Vygotsky’nin Yakınsak Gelişim Alanı (ZPD) ve Yapı İskelesi kavramlarını açıklayabilme.',
      'Piaget ile Vygotsky arasındaki temel epistemolojik ve pedagojik farkları karşılaştırabilme.',
    ],
    overview:
      'Bilişsel gelişim kuramları zihinsel süreçlerin ve düşünme kapasitesinin yaşa ve çevreye bağlı gelişimini açıklar. Piaget gelişimi evrelere ve biyolojik olgunlaşmaya dayandırırken; Vygotsky sosyokültürel etkileşimi ve dili gelişimin merkezine koyar.',
    key_concepts: [
      {
        term: 'Şema (Schema)',
        definition: 'Bireyin çevresindeki dünyayı anlamlandırmak için zihninde oluşturduğu temel bilişsel yapıdır.',
      },
      {
        term: 'Özümleme (Asimilasyon)',
        definition: 'Yeni bir nesne veya durumu var olan mevcut şemanın içine yerleştirerek açıklamaktır.',
      },
      {
        term: 'Düzenleme / Uyumsama (Akomodasyon)',
        definition: 'Mevcut şema yetersiz kaldığında şemayı değiştirmek veya yeni bir şema oluşturmaktır.',
      },
      {
        term: 'Yakınsak Gelişim Alanı (ZPD)',
        definition: 'Çocuğun tek başına yapabileceği düzey ile bir yetişkin ya da akran rehberliğinde başarabileceği potansiyel düzey arasındaki mesafedir.',
      },
      {
        term: 'Yapı İskelesi (Scaffolding)',
        definition: 'Öğrenene başlangıçta verilen yoğun desteğin, öğrenen ustalaştıkça kademeli olarak geri çekilmesidir.',
      },
    ],
    structured_sections: [
      {
        title: '1. Piaget Bilişsel Gelişim Evreleri',
        content:
          '• Duyusal Motor (0-2 Yaş): Nesne sürekliliği, döngüsel tepkiler, hedefe yönelik davranış.\n• İşlem Öncesi (2-7 Yaş): Benmerkezcilik (Egosantrizm), Odaklanma (Merkezleme), Özelden özele akıl yürütme, Animizm (canlıcılık), Yapaycılık, Tersine çevirememe.\n• Somut İşlemler (7-11 Yaş): Korunum kazanımı (madde, ağırlık, hacim), Tersine çevirebilme, Çok yönlü sınıflama ve sıralama, Odaktan uzaklaşma.\n• Soyut İşlemler (11+ Yaş): Hipotetik-tümdengelimsel düşünme, Göreli düşünme, Ergen benmerkezciliği (Hayali seyirci & Kişisel efsane).',
      },
      {
        title: '2. Vygotsky Sosyokültürel Bilişsel Kuramı',
        content:
          'Vygotsky’ye göre öğrenme sosyal ortamda başlar, içselleştirilerek bireysel bilişe dönüşür.\n\n• Dil ve Düşünce: Sosyal konuşma -> Özel konuşma (kendi kendine konuşarak rehberlik etme) -> İçsel konuşma.\n• Öğrenme Gelişimi Çeker: Piaget "Gelişim öğrenmeyi belirler" derken, Vygotsky "Öğrenme gelişimin önünden gider ve onu çeker" görüşünü savunur.',
      },
    ],
    comparison_tables: [
      {
        title: 'Piaget ve Vygotsky Karşılaştırma Tablosu',
        headers: ['Ölçüt', 'Jean Piaget', 'Lev Vygotsky'],
        rows: [
          ['Gelişimin Kaynağı', 'Biyolojik olgunlaşma & Bireysel keşif', 'Sosyokültürel etkileşim & Kültürel araçlar'],
          ['Evre Anlayışı', 'Evrensel ve katı 4 gelişim evresi', 'Evre yoktur, sürekli ve sosyo-kültüreldir'],
          ['Dilin Rolü', 'Düşüncenin bir sonucudur (Benmerkezci konuşma)', 'Düşüncenin temel aracıdır (Özel konuşma düşünmeyi yönetir)'],
          ['Öğretmenin Rolü', 'Fırsat yaratan rehber (Çocuk küçük bilim insanıdır)', 'Yapı iskelesi kuran ve işbirlikli destek sunan uzman'],
        ],
      },
    ],
    exam_tips: [
      {
        tip: "AGS'DE DİKKAT: Korunum kazanımı ile 'Tersine Çevirebilme' becerisi SOMUT İŞLEMLER döneminde başlar. İşlem öncesi dönemdeki çocuk 'odaklanma' yüzünden sıvının kabın şeklini aldığında miktarının değiştiğini sanır.",
        importance: 'critical',
      },
      {
        tip: "AGS'DE DİKKAT: 'Özelden özele akıl yürütme' iki özel durum arasında mantıksız bağ kurmaktır (Örn: 'Kahvaltıda süt içmedim, o halde sabah olmadı').",
        importance: 'high',
      },
    ],
    mnemonics: [
      {
        title: 'Piaget Evre Sıralaması Kodlaması',
        memory_trick: 'D - İ - S - S (Duyusal, İşlem öncesi, Somut, Soyut)',
        description: 'Duyusal motor (0-2), İşlem öncesi (2-7), Somut işlemler (7-11), Soyut işlemler (11+).',
      },
    ],
    summary:
      'Piaget zihinsel gelişimi çocuğun çevreyle etkileşimindeki şema değişimleriyle (özümleme/uyumsama) ve biyolojik evrelerle açıklar. Vygotsky ise gelişimin sosyal etkileşim, dil, Yakınsak Gelişim Alanı ve yapı iskelesi yoluyla gerçekleştiğini vurgular.',
    what_to_remember: [
      'Nesne sürekliliği duyusal motor dönemde kazanılır.',
      'Benmerkezcilik ve animizm işlem öncesi döneme aittir.',
      'Korunum somut işlemler döneminde kazanılır.',
      'Yakınsak Gelişim Alanı potansiyel öğrenme kapasitesini gösterir.',
    ],
    self_check_questions: [
      {
        question:
          '5 yaşındaki Elif, annesi saçını kestirince annesini tanıyamamış ve yabancı biri sanarak ağlamıştır. Elif’in bu davranışı Piaget’ye göre hangi kavramla açıklanır?',
        options: [
          { key: 'A', text: 'Özelden özele akıl yürütme', isCorrect: false },
          { key: 'B', text: 'Odaklanma (Merkezleme)', isCorrect: true },
          { key: 'C', text: 'Tersine çevirememe', isCorrect: false },
          { key: 'D', text: 'Hipotetik düşünme', isCorrect: false },
          { key: 'E', text: 'Nesne sürekliliği eksikliği', isCorrect: false },
        ],
        explanation:
          'İşlem öncesi dönemdeki çocuk tek bir dikkat çekici özelliğe (saçın kısalığına) odaklandığı için diğer tüm özellikleri göz ardı eder. Bu durum Odaklanma (Merkezleme) kavramıdır.',
      },
    ],
  },

  // 3. Mevzuat: 7528 Sayılı Öğretmenlik Mesleği Kanunu
  'topic-mevzuat-7528-omk': {
    id: 'tc-7528-omk',
    topic_id: 'topic-mevzuat-7528-omk',
    learning_objectives: [
      '7528 Sayılı Öğretmenlik Mesleği Kanununun amaç, kapsam ve temel ilkelerini kavramak.',
      'Milli Eğitim Akademisi bünyesinde yürütülen hazırlık eğitimi ve atama süreçlerini açıklayabilme.',
      'Öğretmenlik kariyer basamakları (Öğretmen, Uzman Öğretmen, Başöğretmen) şartlarını ve sürelerini analiz edebilme.',
      'Öğretmenlere yönelik şiddet durumlarında uygulanan cezai artırım hükümlerini bilmek.',
    ],
    overview:
      '7528 Sayılı Öğretmenlik Mesleği Kanunu (ÖMK), öğretmenlerin mesleğe seçilmeleri, Milli Eğitim Akademisinde hazırlık eğitimleri, hakları, ödevleri, kariyer basamakları ve disiplin işlemlerini tek bir çatı altında düzenleyen temel kanundur.',
    key_concepts: [
      {
        term: 'Milli Eğitim Akademisi',
        definition: 'Öğretmen adaylarının hazırlık eğitimini yürüten ve görevdeki öğretmenlerin mesleki gelişimini sağlayan kurumsal yapı.',
      },
      {
        term: 'Hazırlık Eğitimi',
        definition: 'AGS puan üstünlüğüne göre Akademiye kabul edilen adayların 3 veya 4 dönem süren teorik ve uygulamalı formasyon eğitimi.',
      },
      {
        term: 'Uzman Öğretmenlik',
        definition: 'Öğretmenlikte en az 10 yıl hizmeti bulunan ve mesleki gelişim programını tamamlayan öğretmenlere verilen unvan.',
      },
      {
        term: 'Başöğretmenlik',
        definition: 'Uzman öğretmenlikte en az 10 yıl hizmeti bulunan ve ilgili eğitimi tamamlayanlara verilen unvan.',
      },
      {
        term: 'Eğitim Çalışanına Şiddet Hükmü',
        definition: 'Öğretmen ve eğitim çalışanlarına karşı görevleri sebebiyle işlenen suçlarda cezaların yarı oranında (%50) artırılması kuralı.',
      },
    ],
    structured_sections: [
      {
        title: '1. Akademiye Kabul ve Hazırlık Eğitimi Süreci',
        content:
          '• Akademiye Giriş: ÖSYM tarafından yapılan Akademi Giriş Sınavı (AGS) ve ilgili alan puan üstünlüğüne göre belirlenen kontenjan kadar aday alınır.\n• Eğitim Süresi: Hazırlık eğitimi branşın özelliğine göre 3 veya 4 dönem olarak uygulanır.\n• Başarı Notu: Hazırlık eğitiminde her dönem teorik ve uygulamalı derslerden değerlendirme yapılır. Başarısız olan adayın Akademi ile ilişiği kesilir.',
      },
      {
        title: '2. Kariyer Basamakları ve Disiplin Cezaları',
        content:
          '• Kariyer Basamakları: Öğretmen -> Uzman Öğretmen (10 yıl) -> Başöğretmen (Uzmanlıkta 10 yıl).\n• Disiplin Hükümleri: Kınama, Aylıktan Kesme, Kademe İlerlemesinin Durdurulması ve Meslekten Çıkarma.\n• Uyuşturucu, cinsel istismar ve yüz kızartıcı suçlardan mahkumiyet durumunda öğretmenlik mesleği ile kesin ilişik kesilir.',
      },
    ],
    comparison_tables: [
      {
        title: 'Kariyer Basamakları Şartları ve Unvan Dağılımı',
        headers: ['Kariyer Basamağı', 'Gerekli Kıdem Şartı', 'Ek Koşullar', 'Kazanılan Hak'],
        rows: [
          ['Öğretmen', 'Akademi hazırlık eğitimini başarıyla bitirmek', 'Atama şartlarını taşımak', 'Temel öğretmenlik hakları'],
          ['Uzman Öğretmen', 'Öğretmenlikte en az 10 yıl hizmet', 'Mesleki gelişim programını tamamlamak & ceza almamış olmak', 'Uzman öğretmen tazminatı & 1 derece'],
          ['Başöğretmen', 'Uzman öğretmenlikte en az 10 yıl hizmet', 'İlgili eğitimleri tamamlamak', 'Başöğretmen tazminatı & 1 derece'],
        ],
      },
    ],
    exam_tips: [
      {
        tip: "AGS'DE DİKKAT: 7528 Sayılı Kanun ile öğretmenlik mesleğine giriş doğrudan KPSS yerine 'Akademi Hazırlık Eğitimi' şartına bağlanmıştır.",
        importance: 'critical',
      },
      {
        tip: "AGS'DE DİKKAT: Eğitim kurumlarında görev yapan personele karşı kasten yaralama, tehdit, hakaret gibi suçlarda verilen cezalar YARI ORANINDA (%50) artırılır ve hapis cezaları ertelenemez.",
        importance: 'high',
      },
    ],
    mnemonics: [
      {
        title: 'Kariyer 10-10 Kuralı',
        memory_trick: '10 Yıl = Uzman | +10 Yıl Uzmanlık = Başöğretmen',
        description: 'Her iki basamak geçişinde de 10 yıllık fiili kıdem esastır.',
      },
    ],
    summary:
      '7528 Sayılı ÖMK ile Milli Eğitim Akademisi yasal statü kazanmış, öğretmen yetiştirme modeli akademi hazırlık eğitimine bağlanmış, kariyer basamakları 10ar yıllık periyotlarla netleştirilmiş ve eğitimcilere şiddete karşı cezalar %50 artırılmıştır.',
    what_to_remember: [
      'Akademiye giriş AGS puan üstünlüğüne göredir.',
      'Hazırlık eğitimi 3 veya 4 dönem sürer.',
      'Uzman öğretmenlik için 10 yıl, Başöğretmenlik için uzmanlıkta 10 yıl gereklidir.',
      'Eğitimcilere şiddet suçlarında ceza yarı oranında artırılır.',
    ],
    self_check_questions: [
      {
        question:
          '7528 Sayılı Öğretmenlik Mesleği Kanununa göre, uzman öğretmenlikte en az kaç yıl hizmeti bulunan ve gerekli şartları taşıyan öğretmenler Başöğretmen unvanı için başvurabilir?',
        options: [
          { key: 'A', text: '5 yıl', isCorrect: false },
          { key: 'B', text: '7 yıl', isCorrect: false },
          { key: 'C', text: '8 yıl', isCorrect: false },
          { key: 'D', text: '10 yıl', isCorrect: true },
          { key: 'E', text: '15 yıl', isCorrect: false },
        ],
        explanation:
          '7528 Sayılı ÖMK uyarınca uzman öğretmen unvanıyla en az 10 yıl fiilen görev yapan öğretmenler Başöğretmenlik unvanı için başvurma hakkına sahip olur.',
      },
    ],
  },
};

export const AGS_QUESTIONS: Question[] = [
  // Eğitim Bilimleri Soruları (Özgün ve Çıkmış Formatı)
  {
    id: 'q-eb-1',
    subject_id: 'egitim-bilimleri',
    unit_id: 'unit-eb-ogrenme',
    topic_id: 'topic-eb-davranisci-kosullanma',
    question_text:
      'Bir sınıf öğretmeni, gürültü yapan öğrencilerini susturmak için tahtaya sertçe vurarak öğrencilerin anlık olarak irkilip susmalarını sağlamıştır. Ancak öğretmen bu yöntemi sıklıkla tekrarladıkça, tahtaya vurma sesi artık öğrencileri susturmamaya başlamıştır.\n\nÖğrencilerin tahtaya vurma sesine artık tepki vermemesi aşağıdaki öğrenme süreçlerinden hangisiyle açıklanır?',
    explanation:
      'Öğrencilerin sürekli tekrarlanan ve ardından herhangi bir olumsuz sonuç gelmeyen tekdüze bir uyarıcıya karşı tepkilerinin zayıflayarak kaybolması "Alışma" (Habituation) kavramıdır.',
    difficulty: 'orta',
    question_type: 'scenario',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-q1-a', question_id: 'q-eb-1', option_key: 'A', option_text: 'Duyarsızlaşma', is_correct: false },
      { id: 'opt-q1-b', question_id: 'q-eb-1', option_key: 'B', option_text: 'Alışma', is_correct: true },
      { id: 'opt-q1-c', question_id: 'q-eb-1', option_key: 'C', option_text: 'Sönme', is_correct: false },
      { id: 'opt-q1-d', question_id: 'q-eb-1', option_key: 'D', option_text: 'Gölgeleme', is_correct: false },
      { id: 'opt-q1-e', question_id: 'q-eb-1', option_key: 'E', option_text: 'Öğrenilmiş çaresizlik', is_correct: false },
    ],
  },
  {
    id: 'q-eb-2',
    subject_id: 'egitim-bilimleri',
    unit_id: 'unit-eb-gelisim',
    topic_id: 'topic-eb-piaget-vygotsky',
    question_text:
      '7 yaşındaki Can, babasıyla yapboz yaparken parçaları yerine koymakta zorlandığında babası "Önce köşe parçalarını bulup kenar çerçevesini kuralım, sonra içini dolduralım" diyerek ipucu vermiş; Can çerçeveyi kurduktan sonra babası desteğini azaltmış ve Can yapbozu tek başına tamamlamıştır.\n\nBabanın sergilediği bu öğretimsel yaklaşım Vygotsky’nin hangi kavramıyla en iyi açıklanır?',
    explanation:
      'Öğrenene başlangıçta verilen rehberlik ve ipuçlarının, öğrenen beceriyi kazandıkça aşamalı olarak azaltılması ve geri çekilmesi sürecine "Yapı İskelesi" (Scaffolding) denir.',
    difficulty: 'orta',
    question_type: 'scenario',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-q2-a', question_id: 'q-eb-2', option_key: 'A', option_text: 'Kişisel efsane', is_correct: false },
      { id: 'opt-q2-b', question_id: 'q-eb-2', option_key: 'B', option_text: 'Özel konuşma', is_correct: false },
      { id: 'opt-q2-c', question_id: 'q-eb-2', option_key: 'C', option_text: 'Yapı iskelesi (Scaffolding)', is_correct: true },
      { id: 'opt-q2-d', question_id: 'q-eb-2', option_key: 'D', option_text: 'İşlem öncesi akıl yürütme', is_correct: false },
      { id: 'opt-q2-e', question_id: 'q-eb-2', option_key: 'E', option_text: 'Döngüsel tepki', is_correct: false },
    ],
  },
  // Mevzuat Soruları
  {
    id: 'q-mev-1',
    subject_id: 'mevzuat',
    unit_id: 'unit-mevzuat-omk',
    topic_id: 'topic-mevzuat-7528-omk',
    question_text:
      '7528 Sayılı Öğretmenlik Mesleği Kanununa göre, eğitim kurumlarında görev yapan öğretmen ve yöneticilere karşı görevleri sebebiyle işlenen suçlarla ilgili olarak aşağıdakilerden hangisi doğrudur?',
    explanation:
      '7528 Sayılı ÖMK gereğince eğitim çalışanlarına karşı görevleri sebebiyle işlenen kasten yaralama, tehdit, hakaret gibi suçlarda kanundaki cezalar yarı oranında (%50) artırılmaktadır.',
    difficulty: 'kolay',
    question_type: 'knowledge',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-qm1-a', question_id: 'q-mev-1', option_key: 'A', option_text: 'Cezalar yarı oranında artırılır.', is_correct: true },
      { id: 'opt-qm1-b', question_id: 'q-mev-1', option_key: 'B', option_text: 'Yalnızca idari para cezası uygulanır.', is_correct: false },
      { id: 'opt-qm1-c', question_id: 'q-mev-1', option_key: 'C', option_text: 'Hükmün açıklanmasının geri bırakılması zorunludur.', is_correct: false },
      { id: 'opt-qm1-d', question_id: 'q-mev-1', option_key: 'D', option_text: 'Şikayete bağlı suç kapsamına alınır.', is_correct: false },
      { id: 'opt-qm1-e', question_id: 'q-mev-1', option_key: 'E', option_text: 'Cezalar üçte bir oranında indirilir.', is_correct: false },
    ],
  },
  // Sözel Yetenek Soruları
  {
    id: 'q-soz-1',
    subject_id: 'sozel-yetenek',
    unit_id: 'unit-sozel-anlam',
    topic_id: 'topic-sozel-anlam-iliskileri',
    question_text:
      'Aşağıdaki cümlelerin hangisinde "örtülü anlam" söz konusudur?',
    explanation:
      '"Bu yılki AGS sınavına Ahmet de çok iyi hazırlandı." cümlesindeki "de" bağlacı, Ahmet dışındaki başka kişilerin de sınava iyi hazırlandığı örtülü anlamını kesin olarak içermektedir.',
    difficulty: 'orta',
    question_type: 'conceptual',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-qs1-a', question_id: 'q-soz-1', option_key: 'A', option_text: 'Ders kitaplarını masanın üzerine bıraktı.', is_correct: false },
      { id: 'opt-qs1-b', question_id: 'q-soz-1', option_key: 'B', option_text: 'Bu yılki AGS sınavına Ahmet de çok iyi hazırlandı.', is_correct: true },
      { id: 'opt-qs1-c', question_id: 'q-soz-1', option_key: 'C', option_text: 'Sabah saatlerinde Ankara’da yağmur başladı.', is_correct: false },
      { id: 'opt-qs1-d', question_id: 'q-soz-1', option_key: 'D', option_text: 'Kütüphanedeki tüm kaynaklar dijital ortama aktarıldı.', is_correct: false },
      { id: 'opt-qs1-e', question_id: 'q-soz-1', option_key: 'E', option_text: 'Öğretmenler odasında haftalık program incelendi.', is_correct: false },
    ],
  },
  // Tarih Soruları
  {
    id: 'q-tar-1',
    subject_id: 'tarih',
    unit_id: 'unit-tarih-turk-islam',
    topic_id: 'topic-tarih-turk-teskilat',
    question_text:
      'İslamiyet öncesi Türk devletlerinde hükümdara devleti yönetme yetkisinin Gök Tengri tarafından verildiğine inanılan anlayış aşağıdakilerden hangisidir?',
    explanation:
      'İslam öncesi Türklerde devleti yönetme yetkisinin Tanrı tarafından verildiği inancına "Kut" anlayışı denir. Bu yetki kan yoluyla hanedanın tüm erkek üyelerine geçer.',
    difficulty: 'kolay',
    question_type: 'knowledge',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-qt1-a', question_id: 'q-tar-1', option_key: 'A', option_text: 'Töre', is_correct: false },
      { id: 'opt-qt1-b', question_id: 'q-tar-1', option_key: 'B', option_text: 'Kurultay', is_correct: false },
      { id: 'opt-qt1-c', question_id: 'q-tar-1', option_key: 'C', option_text: 'Kut', is_correct: true },
      { id: 'opt-qt1-d', question_id: 'q-tar-1', option_key: 'D', option_text: 'İkili teşkilat', is_correct: false },
      { id: 'opt-qt1-e', question_id: 'q-tar-1', option_key: 'E', option_text: 'Tuğ', is_correct: false },
    ],
  },
  // Coğrafya Soruları
  {
    id: 'q-cog-1',
    subject_id: 'cografya',
    unit_id: 'unit-cografya-beseri',
    topic_id: 'topic-cografya-kalkinma-projeleri',
    question_text:
      'Güneydoğu Anadolu Projesi (GAP) kapsamında sulu tarıma geçilmesiyle birlikte bölgede aşağıdaki tarım ürünlerinden hangisinin üretim miktarında ve Türkiye payında en belirgin artış gerçekleşmiştir?',
    explanation:
      'GAP ile sulama imkanlarının artması sonucunda Güneydoğu Anadolu Bölgesi, Türkiye pamuk üretiminde ilk sıraya yükselmiştir.',
    difficulty: 'orta',
    question_type: 'interpretation',
    source_type: 'ozgun',
    is_past_exam: false,
    options: [
      { id: 'opt-qc1-a', question_id: 'q-cog-1', option_key: 'A', option_text: 'Fındık', is_correct: false },
      { id: 'opt-qc1-b', question_id: 'q-cog-1', option_key: 'B', option_text: 'Çay', is_correct: false },
      { id: 'opt-qc1-c', question_id: 'q-cog-1', option_key: 'C', option_text: 'Pamuk', is_correct: true },
      { id: 'opt-qc1-d', question_id: 'q-cog-1', option_key: 'D', option_text: 'Zeytin', is_correct: false },
      { id: 'opt-qc1-e', question_id: 'q-cog-1', option_key: 'E', option_text: 'Tütün', is_correct: false },
    ],
  },
  // Çıkmış Formatı / ÖSYM Analiz Soruları
  {
    id: 'q-cikmis-1',
    subject_id: 'egitim-bilimleri',
    unit_id: 'unit-eb-ogrenme',
    topic_id: 'topic-eb-davranisci-kosullanma',
    question_text:
      '[ÖSYM & MEB Soru Formatı Analizi - 2024]\n\nBir köpek eğitmeni, köpeğine ıslık çaldıktan sonra mama vererek ıslık sesine koşullamış; daha sonra ıslık sesiyle birlikte mavi bir fener yakmış fakat hiç mama vermemiştir. Bir süre sonra sadece mavi fener yakıldığında köpeğin tepki vermediği görülmüştür.\n\nKöpeğin mavi fenere koşullanamaması aşağıdaki kavramlardan hangisiyle açıklanır?',
    explanation:
      'Daha önceden koşullanılmış olan güçlü uyarıcı (ıslık), ortama sonradan eklenen yeni uyarıcının (mavi fener) koşullanmasını bloke etmiştir. Bu durum "Engelleme" (Blocking) kavramıdır.',
    difficulty: 'zor',
    question_type: 'scenario',
    source_type: 'cikmis',
    is_past_exam: true,
    past_exam_year: 2024,
    past_exam_source: 'MEB / AGS Örnek Soru Kılavuzu',
    options: [
      { id: 'opt-qck1-a', question_id: 'q-cikmis-1', option_key: 'A', option_text: 'Gölgeleme', is_correct: false },
      { id: 'opt-qck1-b', question_id: 'q-cikmis-1', option_key: 'B', option_text: 'Engelleme', is_correct: true },
      { id: 'opt-qck1-c', question_id: 'q-cikmis-1', option_key: 'C', option_text: 'Sönme', is_correct: false },
      { id: 'opt-qck1-d', question_id: 'q-cikmis-1', option_key: 'D', option_text: 'Duyusal ön koşullanma', is_correct: false },
      { id: 'opt-qck1-e', question_id: 'q-cikmis-1', option_key: 'E', option_text: 'Ayırt etme', is_correct: false },
    ],
  },
];

export const AGS_MINI_EXAMS: MiniExam[] = [
  {
    id: 'mini-exam-eb-ogrenme',
    unit_id: 'unit-eb-ogrenme',
    title: 'Öğrenme Psikolojisi Ünite Tarama Sınavı',
    description: 'Klasik, edimsel koşullanma ve bilişsel süreçleri kapsayan 10 soruluk kapsamlı kazanım sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[0], AGS_QUESTIONS[6]],
  },
  {
    id: 'mini-exam-eb-gelisim',
    unit_id: 'unit-eb-gelisim',
    title: 'Gelişim Psikolojisi Ünite Tarama Sınavı',
    description: 'Piaget, Vygotsky, Erikson ve Kohlberg kuramlarını ölçen ünite mini sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[1]],
  },
  {
    id: 'mini-exam-mevzuat-omk',
    unit_id: 'unit-mevzuat-omk',
    title: '7528 Sayılı ÖMK & Mevzuat Ünite Sınavı',
    description: 'Öğretmenlik Mesleği Kanunu ve Milli Eğitim Akademisi mevzuat değerlendirme sınavı.',
    duration_minutes: 15,
    passing_score: 70,
    questions: [AGS_QUESTIONS[2]],
  },
];

export const AGS_MOCK_EXAMS: MockExam[] = [
  {
    id: 'mock-ags-tier-1',
    title: '2025 AGS Türkiye Geneli Prova Denemesi - 1',
    description: 'Konu eksiklerini tespit etmeye yönelik temel düzey genel AGS prova denemesi.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'temel',
    tier_name: 'Deneme 1 — Temel Seviye',
    questions: [
      AGS_QUESTIONS[0],
      AGS_QUESTIONS[1],
      AGS_QUESTIONS[2],
      AGS_QUESTIONS[3],
      AGS_QUESTIONS[4],
      AGS_QUESTIONS[5],
      AGS_QUESTIONS[6],
    ],
  },
  {
    id: 'mock-ags-tier-2',
    title: '2025 AGS Türkiye Geneli Standart Deneme - 2',
    description: 'ÖSYM ve MEB soru ağırlıklarına tam uyumlu orta düzey AGS genel denemesi.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'orta',
    tier_name: 'Deneme 2 — Orta Seviye',
    questions: [
      AGS_QUESTIONS[0],
      AGS_QUESTIONS[1],
      AGS_QUESTIONS[2],
      AGS_QUESTIONS[6],
    ],
  },
  {
    id: 'mock-ags-tier-3',
    title: '2025 AGS İleri Düzey Vaka ve Yorum Denemesi - 3',
    description: 'Çeldiricisi güçlü, senaryo ve muhakeme ağırlıklı orta-zor seviye genel deneme.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'orta-zor',
    tier_name: 'Deneme 3 — Orta-Zor Seviye',
    questions: [
      AGS_QUESTIONS[1],
      AGS_QUESTIONS[2],
      AGS_QUESTIONS[6],
    ],
  },
  {
    id: 'mock-ags-tier-4',
    title: '2025 AGS Derece Hedefleyenler İçin Zor Prova - 4',
    description: 'Akademiye yüksek puanla girmeyi hedefleyen adaylar için zor düzey AGS provası.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'zor',
    tier_name: 'Deneme 4 — Zor Seviye',
    questions: [
      AGS_QUESTIONS[0],
      AGS_QUESTIONS[2],
      AGS_QUESTIONS[6],
    ],
  },
];
