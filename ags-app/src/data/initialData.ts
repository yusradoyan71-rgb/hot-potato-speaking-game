import { Subject, Unit, Topic, TopicContent, Question, MiniExam, MockExam } from '../types/database';

export const INITIAL_SUBJECTS: Subject[] = [
  {
    id: 'egitim-bilimleri',
    title: 'Eğitim Bilimleri',
    icon: 'GraduationCap',
    description: 'Öğrenme Psikolojisi, Gelişim Psikolojisi, ÖYT, Program Geliştirme, Rehberlik ve Ölçme.',
    order_index: 1,
  },
  {
    id: 'genel-yetenek',
    title: 'Genel Yetenek',
    icon: 'Brain',
    description: 'Türkçe Anlam ve Dil Bilgisi, Sayısal ve Mantıksal Akıl Yürütme.',
    order_index: 2,
  },
  {
    id: 'genel-kultur',
    title: 'Genel Kültür',
    icon: 'Globe',
    description: 'Tarih, Türkiye Coğrafyası, Temel Yurttaşlık ve Güncel Sosyoekonomik Konular.',
    order_index: 3,
  },
  {
    id: 'mevzuat',
    title: 'Mevzuat ve Öğretmenlik Kanunu',
    icon: 'Scale',
    description: 'T.C. Anayasası, 1739 Sayılı Milli Eğitim Temel Kanunu, 7528 Sayılı Öğretmenlik Mesleği Kanunu.',
    order_index: 4,
  },
];

export const INITIAL_UNITS: Unit[] = [
  // Eğitim Bilimleri Units
  {
    id: 'unit-ogrenme-psikolojisi',
    subject_id: 'egitim-bilimleri',
    title: 'Öğrenme Psikolojisi',
    description: 'Davranışçı, Bilişsel ve Yapılandırmacı Öğrenme Kuramları, Pekiştirme ve Transfer.',
    order_index: 1,
  },
  {
    id: 'unit-gelisim-psikolojisi',
    subject_id: 'egitim-bilimleri',
    title: 'Gelişim Psikolojisi',
    description: 'Bilişsel, Kişilik, Ahlak ve Fiziksel Gelişim Kuramları (Piaget, Erikson, Kohlberg).',
    order_index: 2,
  },
  {
    id: 'unit-oyt',
    subject_id: 'egitim-bilimleri',
    title: 'Öğretim İlke ve Yöntemleri (ÖYT)',
    description: 'Çağdaş Öğretim Stratejileri, Yöntemler, Teknikler ve Öğretim İlkeleri.',
    order_index: 3,
  },
  // Genel Yetenek Units
  {
    id: 'unit-turkce-paragraf',
    subject_id: 'genel-yetenek',
    title: 'Türkçe - Paragrafta Anlam ve Mantık',
    description: 'Ana Düşünce, Yardımcı Düşünceler, Akış Bozan Cümleler ve Sözel Mantık.',
    order_index: 1,
  },
  {
    id: 'unit-sayisal-mantik',
    subject_id: 'genel-yetenek',
    title: 'Sayısal Yetenek ve Mantıksal Çıkarım',
    description: 'Temel Kavramlar, Oran-Orantı, Problem Çözme ve Grafik Yorumlama.',
    order_index: 2,
  },
  // Genel Kültür Units
  {
    id: 'unit-tarih-inkilap',
    subject_id: 'genel-kultur',
    title: 'Türk Tarihi ve Atatürk İlkeleri',
    description: 'Osmanlı Yenileşme Dönemi, Kurtuluş Savaşı, Cumhuriyet Dönemi İnkılapları.',
    order_index: 1,
  },
  // Mevzuat Units
  {
    id: 'unit-omk-mevzuat',
    subject_id: 'mevzuat',
    title: '7528 Sayılı Öğretmenlik Mesleği Kanunu & Temel Mevzuat',
    description: 'Milli Eğitim Akademisi yapılanması, öğretmen kariyer basamakları, disiplin hükümleri.',
    order_index: 1,
  },
];

export const INITIAL_TOPICS: Topic[] = [
  // Öğrenme Psikolojisi Topics
  {
    id: 'topic-davranisci-yaklasim',
    unit_id: 'unit-ogrenme-psikolojisi',
    title: 'Davranışçı Öğrenme Kuramları ve Klasik Koşullanma',
    order_index: 1,
    estimated_minutes: 25,
  },
  {
    id: 'topic-edimsel-kosullanma',
    unit_id: 'unit-ogrenme-psikolojisi',
    title: 'Edimsel (Operant) Koşullanma ve Pekiştirme Tarifeleri',
    order_index: 2,
    estimated_minutes: 30,
  },
  {
    id: 'topic-bilissel-yaklasim',
    unit_id: 'unit-ogrenme-psikolojisi',
    title: 'Bilişsel Yaklaşım ve Bilgiyi İşleme Kuramı',
    order_index: 3,
    estimated_minutes: 25,
  },
  // Gelişim Psikolojisi Topics
  {
    id: 'topic-piaget-bilissel',
    unit_id: 'unit-gelisim-psikolojisi',
    title: 'Piaget Bilişsel Gelişim Dönemleri ve Kavramları',
    order_index: 1,
    estimated_minutes: 35,
  },
  {
    id: 'topic-erikson-psikososyal',
    unit_id: 'unit-gelisim-psikolojisi',
    title: 'Erikson Psikososyal Gelişim Evreleri',
    order_index: 2,
    estimated_minutes: 25,
  },
  // ÖYT Topics
  {
    id: 'topic-ogretim-ilkeleri',
    unit_id: 'unit-oyt',
    title: 'Temel Öğretim İlkeleri (Açıklık, Somuttan Soyuta, Yakından Uzağa)',
    order_index: 1,
    estimated_minutes: 20,
  },
  // Türkçe Topics
  {
    id: 'topic-paragrafta-yapi',
    unit_id: 'unit-turkce-paragraf',
    title: 'Paragraf Yapısı, Ana Fikir ve Anlatım Teknikleri',
    order_index: 1,
    estimated_minutes: 30,
  },
  // Sayısal Mantık Topics
  {
    id: 'topic-sayisal-muhakeme',
    unit_id: 'unit-sayisal-mantik',
    title: 'Sayısal Muhakeme ve Tablo/Grafik Okuma',
    order_index: 1,
    estimated_minutes: 30,
  },
  // Tarih Topics
  {
    id: 'topic-inkilap-tarihi',
    unit_id: 'unit-tarih-inkilap',
    title: 'Milli Mücadele Dönemi ve Kongreler',
    order_index: 1,
    estimated_minutes: 30,
  },
  // Mevzuat Topics
  {
    id: 'topic-omk-esaslari',
    unit_id: 'unit-omk-mevzuat',
    title: '7528 Sayılı ÖMK: Milli Eğitim Akademisi ve Kariyer Basamakları',
    order_index: 1,
    estimated_minutes: 30,
  },
];

export const INITIAL_TOPIC_CONTENTS: Record<string, TopicContent> = {
  'topic-davranisci-yaklasim': {
    id: 'tc-davranisci',
    topic_id: 'topic-davranisci-yaklasim',
    overview: 'Davranışçı yaklaşım, öğrenmeyi gözlenebilir ve ölçülebilir davranış değişiklikleri olarak ele alır. İvan Pavlov tarafından temelleri atılan Klasik Koşullanma; nötr bir uyarıcının, koşulsuz bir uyarıcı ile eşleştirilerek koşullu tepki üretmesi sürecidir.',
    key_concepts: [
      {
        term: 'Koşulsuz Uyarıcı (Doğal Uyarıcı)',
        definition: 'Organizmada doğuştan var olan, öğrenilmemiş fizyolojik tepkileri tetikleyen uyarıcıdır (Örn: Et, yüksek ses).',
      },
      {
        term: 'Koşullu Tepki',
        definition: 'Başlangıçta nötr olan bir uyarıcıya karşı eşleşmeler sonucunda sergilenen öğrenilmiş tepkidir (Örn: Zil sesine salya salgılama).',
      },
      {
        term: 'Bitişiklik İlkesi',
        definition: 'Nötr uyarıcı ile koşulsuz uyarıcının zaman ve mekan açısından hemen art arda (ortalama 0.5 saniye) gelmesi gerekliliğidir.',
      },
      {
        term: 'Uyarıcı Genellemesi',
        definition: 'Koşullu uyarıcıya benzer diğer uyarıcılara da aynı koşullu tepkinin verilmesidir.',
      },
    ],
    structured_sections: [
      {
        title: '1. Klasik Koşullanmanın Evreleri',
        content: 'Klasik koşullanma süreci üç aşamada incelenir:\n• Koşullanma Öncesi: Nötr Uyarıcı (Zil) -> Tepki Yok; Koşulsuz Uyarıcı (Et) -> Koşulsuz Tepki (Salya).\n• Koşullanma Sırası: Nötr Uyarıcı (Zil) + Koşulsuz Uyarıcı (Et) -> Koşulsuz Tepki (Salya).\n• Koşullanma Sonrası: Koşullu Uyarıcı (Zil) -> Koşullu Tepki (Salya).',
        subsections: [
          {
            subtitle: 'Üst Düzey (Dereceli) Koşullanma',
            content: 'Koşullanma oluştuktan sonra, yeni bir nötr uyarıcının (ışık) koşullu uyarıcı ile (zil) eşleştirilerek ikinci derece koşullu uyarıcı haline gelmesidir.',
          },
          {
            subtitle: 'Gölgeleme vs Engelleme',
            content: '• Gölgeleme: İki uyarıcı aynı anda verildiğinde baskın olanın zayıf olanı bastırmasıdır.\n• Engelleme: Daha önce koşullanmış bir uyarıcının varlığı sebebiyle yeni bir uyarıcının koşullanamamasıdır.',
          },
        ],
      },
      {
        title: '2. Sönme ve Kendiliğinden Geri Gelme',
        content: 'Koşulsuz uyarıcı (et) olmadan koşullu uyarıcı (zil) uzun süre tek başına sunulursa koşullu tepkinin şiddeti azalarak kaybolur (Sönme). Sönme gerçekleşmiş bir tepki, aradan belirli bir dinlenme süresi geçtikten sonra pekiştirilmediği halde zayıf bir şekilde yeniden görülebilir (Kendiliğinden Geri Gelme).',
      },
    ],
    exam_tips: [
      {
        tip: 'AGS Soru Formatı: Engelleme ile Gölgeleme arasındaki en kritik fark "zamanlama"dır. Gölgelemede uyarıcılar AYNI ANDA verilir, Engellemede ise ÖNCEDEN koşullanma tamamlanmıştır.',
        importance: 'critical',
      },
      {
        tip: 'Klasik koşullanma istemsiz, duyuşsal ve refleksif tepkilerin öğrenilmesinde etkilidir. Bilinçli ve amaca yönelik davranışlar Edimsel Koşullanmanın alanıdır.',
        importance: 'high',
      },
    ],
    summary: 'Klasik koşullanma; refleksif tepkilerin nötr uyarıcılarla ilişkilendirilmesini açıklar. AGS sınavında özellikle engelleme, gölgeleme, tat koşullanması (Garcia Etkisi) ve dereceli koşullanma ayrımlarından vaka soruları gelmektedir.',
  },
  'topic-edimsel-kosullanma': {
    id: 'tc-edimsel',
    topic_id: 'topic-edimsel-kosullanma',
    overview: 'B.F. Skinner tarafından geliştirilen Edimsel Koşullanma, davranışın sonuçları tarafından kontrol edildiğini savunur. Bir davranış ödülle sonuçlanırsa pekişir, cezayla sonuçlanırsa zayıflar.',
    key_concepts: [
      {
        term: 'Olumlu Pekiştirme',
        definition: 'Ortama organizmanın istediği hoş bir uyarıcının eklenmesiyle davranışın tekrarlanma sıklığının artırılmasıdır.',
      },
      {
        term: 'Olumsuz Pekiştirme',
        definition: 'Ortamdan organizmayı rahatsız eden itici bir uyarıcının çıkarılmasıyla davranışın artırılmasıdır (Örn: Baş ağrısında ağrı kesici içmek).',
      },
      {
        term: '1. Tip Ceza',
        definition: 'Ortama organizmanın istemediği itici bir uyarıcının eklenmesi (Örn: Azarlanmak).',
      },
      {
        term: '2. Tip Ceza',
        definition: 'Ortamdan organizmanın sevdiği hoş bir uyarıcının alınması (Örn: Teneffüse çıkma hakkının elinden alınması).',
      },
    ],
    structured_sections: [
      {
        title: '1. Pekiştirme Tarifeleri',
        content: '• Sabit Oranlı: Davranış sayısı sabittir (Her 5 soruda 1 yıldız).\n• Değişken Oranlı: Davranış sayısı değişkendir ve tahmin edilemez (Sönmeye en dirençli tarife - Piyango/Kumar).\n• Sabit Zaman Aralıklı: Süre bellidir (Aylık maaş, her Cuma yapılan sınav).\n• Değişken Zaman Aralıklı: Süre değişkendir ve tahmin edilemez (Öğretmenin habersiz denetimleri).',
      },
    ],
    exam_tips: [
      {
        tip: 'Olumsuz pekiştirme ile Ceza kesinlikle karıştırılmamalıdır! Olumsuz pekiştirmede davranış ARTAR, cezada davranış AZALIR.',
        importance: 'critical',
      },
    ],
    summary: 'Edimsel koşullanma, eğitim ortamlarında sınıf yönetimi ve davranış kazanımı için temeldir. Değişken oranlı tarife sönmeye en dirençlidir.',
  },
  'topic-omk-esaslari': {
    id: 'tc-omk',
    topic_id: 'topic-omk-esaslari',
    overview: '7528 Sayılı Öğretmenlik Mesleği Kanunu ile Milli Eğitim Akademisi kurulmuş, öğretmen yetiştirme, kariyer basamakları ve disiplin süreçleri yeni bir yasal çerçeveye kavuşturulmuştur.',
    key_concepts: [
      {
        term: 'Milli Eğitim Akademisi',
        definition: 'Öğretmen adaylarının hazırlık eğitimini yürüten ve mevcut öğretmenlerin mesleki gelişimlerini sağlayan temel kurum.',
      },
      {
        term: 'Hazırlık Eğitimi',
        definition: 'AGS sonucuna göre Akademiye alınan öğretmen adaylarının 3 veya 4 dönem süren teorik ve uygulamalı eğitimi.',
      },
      {
        term: 'Kariyer Basamakları',
        definition: 'Öğretmen, Uzman Öğretmen (10 yıl kıdem) ve Başöğretmen (Uzmanlıkta 10 yıl kıdem) olarak belirlenen kademeler.',
      },
    ],
    structured_sections: [
      {
        title: '1. Akademide Hazırlık Eğitimi ve Değerlendirme',
        content: 'Akademideki hazırlık eğitimi süresince adaylar teorik ve uygulamalı dersler alır. Her dönem sonunda başarı notu belirlenir. Başarısız olanların Akademi ile ilişiği kesilir.',
      },
    ],
    exam_tips: [
      {
        tip: 'AGS Mevzuat bölümünde 7528 sayılı kanunun yeni getirdiği hükümler (Akademi yapısı, disiplin cezaları, şiddete karşı cezaların %50 artırılması) doğrudan soru potansiyeline sahiptir.',
        importance: 'critical',
      },
    ],
    summary: 'Öğretmenlik Mesleği Kanunu, öğretmenlerin hakları, ödevleri ve kariyer gelişimini düzenleyen en güncel ve temel mevzuattır.',
  },
};

export const INITIAL_QUESTIONS: Question[] = [
  // Öğrenme Psikolojisi Soruları
  {
    id: 'q-ogrenme-1',
    subject_id: 'egitim-bilimleri',
    unit_id: 'unit-ogrenme-psikolojisi',
    topic_id: 'topic-davranisci-yaklasim',
    question_text: 'Bir ilkokul öğrencisi, matematik öğretmeninin sert tutumu nedeniyle matematik dersinden korkmaya başlamış; zamanla öğretmenini andıran fizik öğretmenine ve fen laboratuvarına karşı da benzer bir tedirginlik hissetmeye başlamıştır.\n\nÖğrencinin fizik öğretmenine karşı da tedirginlik hissetmesi aşağıdaki klasik koşullanma kavramlarından hangisiyle en iyi açıklanır?',
    explanation: 'Öğrencinin, koşullu uyarıcı olan matematik öğretmenine benzer özellikler taşıyan fizik öğretmenine de aynı tepkiyi (tedirginlik) vermesi "Uyarıcı Genellemesi" kavramı ile açıklanır.',
    difficulty: 'kolay',
    is_past_exam: true,
    past_exam_year: 2024,
    past_exam_source: 'MEB-AGS Örnek Soru Kitapçığı',
    options: [
      { id: 'opt-1-a', question_id: 'q-ogrenme-1', option_key: 'A', option_text: 'Tepki genellemesi', is_correct: false },
      { id: 'opt-1-b', question_id: 'q-ogrenme-1', option_key: 'B', option_text: 'Uyarıcı genellemesi', is_correct: true },
      { id: 'opt-1-c', question_id: 'q-ogrenme-1', option_key: 'C', option_text: 'Öğrenilmiş çaresizlik', is_correct: false },
      { id: 'opt-1-d', question_id: 'q-ogrenme-1', option_key: 'D', option_text: 'Garcia etkisi (Tat koşullanması)', is_correct: false },
      { id: 'opt-1-e', question_id: 'q-ogrenme-1', option_key: 'E', option_text: 'Gölgeleme', is_correct: false },
    ],
  },
  {
    id: 'q-ogrenme-2',
    subject_id: 'egitim-bilimleri',
    unit_id: 'unit-ogrenme-psikolojisi',
    topic_id: 'topic-davranisci-yaklasim',
    question_text: 'Köpeğine zil çaldıktan hemen sonra et vererek salya salgılamasını sağlayan bir araştırmacı, daha sonra zil ile birlikte kırmızı ışık yakmış ancak hiç et vermemiştir. Bir süre sonra sadece kırmızı ışık yakıldığında köpeğin salya salgılamadığı görülmüştür.\n\nKöpeğin kırmızı ışığa koşullanamaması aşağıdaki kavramlardan hangisiyle açıklanır?',
    explanation: 'Daha önceden koşullanılmış olan güçlü uyarıcı (zil), yeni uyarıcının (ışık) koşullanmasını engellemiştir. Bu duruma "Engelleme" (Blocking) denir.',
    difficulty: 'zor',
    is_past_exam: true,
    past_exam_year: 2023,
    past_exam_source: 'ÖSYM Çıkmış Soru',
    options: [
      { id: 'opt-2-a', question_id: 'q-ogrenme-2', option_key: 'A', option_text: 'Gölgeleme', is_correct: false },
      { id: 'opt-2-b', question_id: 'q-ogrenme-2', option_key: 'B', option_text: 'Engelleme', is_correct: true },
      { id: 'opt-2-c', question_id: 'q-ogrenme-2', option_key: 'C', option_text: 'Sönme', is_correct: false },
      { id: 'opt-2-d', question_id: 'q-ogrenme-2', option_key: 'D', option_text: 'Kendiliğinden geri gelme', is_correct: false },
      { id: 'opt-2-e', question_id: 'q-ogrenme-2', option_key: 'E', option_text: 'Duyusal ön koşullanma', is_correct: false },
    ],
  },
  {
    id: 'q-ogrenme-3',
    subject_id: 'egitim-bilimleri',
    unit_id: 'unit-ogrenme-psikolojisi',
    topic_id: 'topic-edimsel-kosullanma',
    question_text: 'Bir öğretmen, öğrencilerinin ödevlerini düzenli yapma alışkanlığını pekiştirmek için bazen 3. ödevde, bazen 7. ödevde, bazen de 5. ödevde rastgele sürpriz hediyeler vermektedir.\n\nÖğretmenin uyguladığı pekiştirme tarifesi aşağıdakilerden hangisidir?',
    explanation: 'Pekiştirmenin kaçıncı davranıştan sonra verileceği değişken ve tahmin edilemez ise bu tarife "Değişken Oranlı Pekiştirme" tarifesidir.',
    difficulty: 'orta',
    is_past_exam: false,
    options: [
      { id: 'opt-3-a', question_id: 'q-ogrenme-3', option_key: 'A', option_text: 'Sabit oranlı pekiştirme', is_correct: false },
      { id: 'opt-3-b', question_id: 'q-ogrenme-3', option_key: 'B', option_text: 'Sabit aralıklı pekiştirme', is_correct: false },
      { id: 'opt-3-c', question_id: 'q-ogrenme-3', option_key: 'C', option_text: 'Değişken oranlı pekiştirme', is_correct: true },
      { id: 'opt-3-d', question_id: 'q-ogrenme-3', option_key: 'D', option_text: 'Değişken aralıklı pekiştirme', is_correct: false },
      { id: 'opt-3-e', question_id: 'q-ogrenme-3', option_key: 'E', option_text: 'Sürekli pekiştirme', is_correct: false },
    ],
  },
  // Mevzuat Soruları
  {
    id: 'q-mevzuat-1',
    subject_id: 'mevzuat',
    unit_id: 'unit-omk-mevzuat',
    topic_id: 'topic-omk-esaslari',
    question_text: '7528 Sayılı Öğretmenlik Mesleği Kanununa göre, Milli Eğitim Akademisinde hazırlık eğitimi alacak adayların belirlenmesinde esas alınan sınav aşağıdakilerden hangisidir?',
    explanation: '7528 Sayılı ÖMK gereğince Akademiye hazırlık eğitimi için aday kabulü "Akademi Giriş Sınavı" (AGS) puan üstünlüğüne göre yapılmaktadır.',
    difficulty: 'kolay',
    is_past_exam: true,
    past_exam_year: 2024,
    past_exam_source: 'AGS Mevzuat Modülü',
    options: [
      { id: 'opt-m1-a', question_id: 'q-mevzuat-1', option_key: 'A', option_text: 'Akademi Giriş Sınavı (AGS)', is_correct: true },
      { id: 'opt-m1-b', question_id: 'q-mevzuat-1', option_key: 'B', option_text: 'Eğitim Kurumlarına Yönetici Seçme Sınavı (EKYS)', is_correct: false },
      { id: 'opt-m1-c', question_id: 'q-mevzuat-1', option_key: 'C', option_text: 'Yurtdışı Yükseköğretim Sınavı', is_correct: false },
      { id: 'opt-m1-d', question_id: 'q-mevzuat-1', option_key: 'D', option_text: 'Uzman Öğretmenlik Yazılı Sınavı', is_correct: false },
      { id: 'opt-m1-e', question_id: 'q-mevzuat-1', option_key: 'E', option_text: 'Adaylık Kaldırma Sınavı (AKS)', is_correct: false },
    ],
  },
  // Genel Yetenek Soruları
  {
    id: 'q-turkce-1',
    subject_id: 'genel-yetenek',
    unit_id: 'unit-turkce-paragraf',
    topic_id: 'topic-paragrafta-yapi',
    question_text: 'Sanatçı, yapıtını oluştururken yalnızca kendi çağının tanığı olmakla kalmaz; o, geleceğin düşünce biçimlerine de tohum eker. Bugün anlaşılamayan pek çok büyük yazarın yarının başucu eseri olması tam da bu nedenledir.\n\nBu parçada sanatçının ve eserinin hangi özelliği vurgulanmaktadır?',
    explanation: 'Parçada sanatçının kendi çağını aşıp geleceğe etki etmesi ve sonraki dönemlerde anlaşılması "Kalıcılık ve Evrensellik / Geleceğe Yön Verme" yönünü vurgulamaktadır.',
    difficulty: 'orta',
    is_past_exam: true,
    past_exam_year: 2023,
    past_exam_source: 'MEB / ÖSYM Sözel Bölüm',
    options: [
      { id: 'opt-t1-a', question_id: 'q-turkce-1', option_key: 'A', option_text: 'Özgünlük ve yalınlık', is_correct: false },
      { id: 'opt-t1-b', question_id: 'q-turkce-1', option_key: 'B', option_text: 'Zamanı aşma ve geleceğe rehberlik etme', is_correct: true },
      { id: 'opt-t1-c', question_id: 'q-turkce-1', option_key: 'C', option_text: 'Milli motiflere bağlılık', is_correct: false },
      { id: 'opt-t1-d', question_id: 'q-turkce-1', option_key: 'D', option_text: 'Toplumsal sorunları gerçekçi yansıtma', is_correct: false },
      { id: 'opt-t1-e', question_id: 'q-turkce-1', option_key: 'E', option_text: 'Yoğun imgeli kapalı anlatım', is_correct: false },
    ],
  },
  // Genel Kültür Soruları
  {
    id: 'q-tarih-1',
    subject_id: 'genel-kultur',
    unit_id: 'unit-tarih-inkilap',
    topic_id: 'topic-inkilap-tarihi',
    question_text: 'Milli Mücadele Döneminde "Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır." kararı ilk kez aşağıdaki belgelerden hangisinde yer almıştır?',
    explanation: 'Milli Mücadelenin gerekçesi, amacı ve yönteminin ilk kez ilan edildiği belge "Amasya Genelgesi"dir (22 Haziran 1919).',
    difficulty: 'kolay',
    is_past_exam: true,
    past_exam_year: 2024,
    past_exam_source: 'AGS Genel Kültür Denemesi',
    options: [
      { id: 'opt-tr1-a', question_id: 'q-tarih-1', option_key: 'A', option_text: 'Havza Genelgesi', is_correct: false },
      { id: 'opt-tr1-b', question_id: 'q-tarih-1', option_key: 'B', option_text: 'Amasya Genelgesi', is_correct: true },
      { id: 'opt-tr1-c', question_id: 'q-tarih-1', option_key: 'C', option_text: 'Erzurum Kongresi Kararları', is_correct: false },
      { id: 'opt-tr1-d', question_id: 'q-tarih-1', option_key: 'D', option_text: 'Sivas Kongresi Kararları', is_correct: false },
      { id: 'opt-tr1-e', question_id: 'q-tarih-1', option_key: 'E', option_text: 'Misak-ı Milli Kararları', is_correct: false },
    ],
  },
];

export const INITIAL_MINI_EXAMS: MiniExam[] = [
  {
    id: 'mini-exam-ogrenme',
    unit_id: 'unit-ogrenme-psikolojisi',
    title: 'Ünite 1 Mini Denemesi: Öğrenme Psikolojisi',
    description: 'Davranışçı, Bilişsel ve Edimsel koşullanma kazanımlarını ölçen 5 soruluk kapsamlı ünite tarama testi.',
    duration_minutes: 10,
    passing_score: 60,
    questions: [
      INITIAL_QUESTIONS[0],
      INITIAL_QUESTIONS[1],
      INITIAL_QUESTIONS[2],
    ],
  },
  {
    id: 'mini-exam-mevzuat',
    unit_id: 'unit-omk-mevzuat',
    title: 'Ünite Mini Denemesi: 7528 Sayılı ÖMK & Mevzuat',
    description: 'Milli Eğitim Akademisi kanunu ve öğretmenlik mevzuatını içeren tarama sınavı.',
    duration_minutes: 10,
    passing_score: 70,
    questions: [
      INITIAL_QUESTIONS[3],
    ],
  },
];

export const INITIAL_MOCK_EXAMS: MockExam[] = [
  {
    id: 'mock-ags-turkiye-geneli-1',
    title: '2025 AGS Türkiye Geneli Tam Kapsamlı Deneme Sınavı - 1',
    description: 'Yeni MEB Akademi Giriş Sınavı (AGS) soru formatı ve kazanım ağırlıklarına tam uyumlu genel deneme sınavı.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'orta',
    questions: [
      INITIAL_QUESTIONS[0],
      INITIAL_QUESTIONS[1],
      INITIAL_QUESTIONS[2],
      INITIAL_QUESTIONS[3],
      INITIAL_QUESTIONS[4],
      INITIAL_QUESTIONS[5],
    ],
  },
  {
    id: 'mock-ags-turkiye-geneli-2',
    title: '2025 AGS Eğitim Bilimleri & Mevzuat Özel Denemesi - 2',
    description: 'Öğrenme Psikolojisi, Gelişim, ÖYT ve 7528 sayılı Kanun odaklı ileri seviye provası.',
    total_questions: 10,
    duration_minutes: 20,
    difficulty: 'zor',
    questions: [
      INITIAL_QUESTIONS[0],
      INITIAL_QUESTIONS[1],
      INITIAL_QUESTIONS[3],
    ],
  },
];
