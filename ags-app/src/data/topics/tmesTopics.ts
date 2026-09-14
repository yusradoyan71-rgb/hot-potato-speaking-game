import type { Topic, TopicContent } from '../../types/database';

export const getTmesSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // 1. TÜRK MİLLÎ EĞİTİMİNİN TEMEL İLKELERİ VE YAPISI (unit-tmes-1)
  if (tid.startsWith('topic-tmes-1')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `1739 Sayılı Millî Eğitim Temel Kanunu, Türk Millî Eğitiminin genel amaçlarını, temel ilkelerini ve teşkilat hiyerarşisini düzenleyen ana çerçeve kanundur.

## 1. 1739 Sayılı Kanun'da Yer Alan 14 Temel İlke
1. **Genellik ve Eşitlik:** Eğitim kurumları dil, ırk, cinsiyet, engellilik ve din ayrımı gözetilmeksizin herkese açıktır. Eğitimde hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınamaz.
2. **Ferdin ve Toplumun İhtiyaçları:** Eğitim hizmetleri, Türk vatandaşlarının istek ve yetenekleri ile toplumun ihtiyaçlarına göre düzenlenir.
3. **Yöneltme:** Fertler, ilgi, istidat ve kabiliyetleri ölçüsünde çeşitli programlara veya okullara yöneltilerek yetiştirilirler.
4. **Eğitim Hakkı:** İlköğretim görmek her Türk vatandaşının hakkıdır. İlköğretim kurumlarından sonraki eğitim kurumlarından vatandaşlar ilgi, istidat ve kabiliyetleri ölçüsünde yararlanırlar.
5. **Fırsat ve İmkân Eşitliği:** Eğitimde kadın, erkek herkese fırsat ve imkân eşitliği sağlanır. Maddi imkânlardan yoksun başarılı öğrencilere burs, parasız yatılılık ve yardım sağlanır; özel eğitime muhtaç çocukları yetiştirmek için özel tedbirler alınır.
6. **Süreklilik:** Fertlerin genel ve mesleki eğitimlerinin hayat boyunca devam etmesi esastır.
7. **Atatürk İnkılap ve İlkeleri ve Atatürk Milliyetçiliği:** Müfredat programlarında Atatürk milliyetçiliği, ilke ve inkılapları esas alınır.
8. **Demokrasi Eğitimi:** Demokrasi bilinci kazandırılması esastır; ancak okullarda siyasi ve ideolojik propaganda yapılamaz.
9. **Laiklik:** Din kültürü ve ahlak öğretimi ilköğretim ve ortaöğretim okullarında okutulan zorunlu dersler arasında yer alır.
10. **Bilimsellik:** Ders programları ve eğitim yöntemleri sürekli olarak bilimsel ve teknolojik esaslara göre geliştirilir.
11. **Planlılık:** Eğitim kalkınma planlarına göre planlanır ve mesleki-teknik eğitime ağırlık verilir.
12. **Karma Eğitim:** Okullarda kız ve erkek karma eğitim yapılması esastır. Ancak eğitimin türüne, imkân ve zorunluluklara göre bazı okullar yalnızca kız veya yalnızca erkek öğrencilere ayrılabilir.
13. **Eğitim Kampüsleri ve Okul ile Ailenin İşbirliği:** Okul-aile birlikleri kurulur; kampüsler arası kaynak paylaşımı sağlanır.
14. **Her Yerde Eğitim:** Millî eğitimin amaçları yalnız resmi ve özel eğitim kurumlarında değil, aynı zamanda evde, çevrede, işyerlerinde ve her yerde gerçekleştirilmeye çalışılır.

## 2. Millî Eğitim Bakanlığı Teşkilat Yapısı
* **Bakanlık Makamı:** Bakan, Bakan Yardımcıları.
* **Talim ve Terbiye Kurulu Başkanlığı (TTKB):** Müfredat ve öğretim programlarını hazırlamak, ders kitaplarını inceleyip onaylamakla görevli bilimsel danışma ve karar organıdır.
* **Hizmet Birimleri (Genel Müdürlükler):** Temel Eğitim GM, Ortaöğretim GM, Mesleki ve Teknik Eğitim GM, Din Öğretimi GM, Özel Eğitim ve Rehberlik Hizmetleri GM, Öğretmen Yetiştirme ve Geliştirme GM, Ölçme, Değerlendirme ve Sınav Hizmetleri GM.
* **Taşra Teşkilatı:** İl Millî Eğitim Müdürlükleri, İlçe Millî Eğitim Müdürlükleri, Okul/Kurum Müdürlükleri.`,
      comparison_tables: [
        {
          title: 'Genellik ve Eşitlik vs. Fırsat ve İmkân Eşitliği Ayrımı',
          headers: ['İlke Adı', 'Kapsamı', 'Örnek Uygulama'],
          rows: [
            ['Genellik ve Eşitlik', 'Herkese açık olma, ayrımcılık ve ayrıcalık yapmama', 'Okula kayıtta kimseye ayrıcalık tanınmaması'],
            ['Fırsat ve İmkân Eşitliği', 'Maddi durumu yetersiz veya engelli öğrencilere pozitif destek', 'Bursluluk sınavı, parasız yatılılık, taşımalı eğitim, BİLSEM'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Maddi durumu yetersiz öğrenciye burs verilmesi "Genellik ve Eşitlik" ilkesidir.',
          correct_distinction: 'Burs, ücretsiz yemek ve pansiyon sağlanması "FIRSAT VE İMKÂN EŞİTLİĞİ" ilkesidir. Genellik ve eşitlik ise kimseye imtiyaz tanınmamasıdır.',
          tip: 'Soruda dezavantajlı veya başarılı yoksul öğrenciye destek geçiyorsa doğrudan FIRSAT VE İMKÂN EŞİTLİĞİ işaretlenmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS TMES sorularında 1739 sayılı Kanun'un 14 temel ilkesi vaka örnekleriyle sorgulanır. Talim ve Terbiye Kurulu'nun müfredat onay mercii olduğu unutulmamalıdır.",
          importance: 'critical',
        },
      ],
      summary: '1739 Sayılı Kanun Türk Millî Eğitiminin 14 temel ilkesini ve örgün-yaygın eğitim yapısını düzenleyen temel metindir.',
      what_to_remember: [
        '✓ Fırsat ve İmkân Eşitliği: Burs, parasız yatılılık, özel eğitim desteği.',
        '✓ Yöneltme: İlgi ve yeteneğe göre mesleki ve akademik alan seçimi.',
        '✓ Karma Eğitim: Esastır ancak türüne göre tek cinsiyetli okul açılabilir.',
        '✓ Talim Terbiye Kurulu: Müfredat ve ders kitaplarını onaylayan en yetkili bilimsel kurul.',
      ],
      self_check_questions: [
        {
          question: '1. Köyde yaşayan ve ailesinin maddi durumu yetersiz olan başarılı bir öğrenciye devlet tarafından burs bağlanması, ücretsiz pansiyon ve kitap temin edilmesi 1739 Sayılı Millî Eğitim Temel Kanunu’nun hangi temel ilkesiyle doğrudan ilişkilidir?',
          options: [
            { key: 'A', text: 'Genellik ve Eşitlik', isCorrect: false },
            { key: 'B', text: 'Fırsat ve İmkân Eşitliği', isCorrect: true },
            { key: 'C', text: 'Yöneltme', isCorrect: false },
            { key: 'D', text: 'Planlılık', isCorrect: false },
            { key: 'E', text: 'Süreklilik', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Maddi imkânsızlıkları telafi eden burs ve yatılılık destekleri Fırsat ve İmkân Eşitliği ilkesinin gereğidir.',
        },
        {
          question: '2. Millî Eğitim Bakanlığı teşkilatında öğretim programlarını (müfredatları) hazırlayan, geliştiren, ders kitaplarını inceleyerek kabul veya reddeden en üst bilimsel danışma ve karar organı hangisidir?',
          options: [
            { key: 'A', text: 'Temel Eğitim Genel Müdürlüğü', isCorrect: false },
            { key: 'B', text: 'Talim ve Terbiye Kurulu Başkanlığı', isCorrect: true },
            { key: 'C', text: 'Ölçme, Değerlendirme ve Sınav Hizmetleri Genel Müdürlüğü', isCorrect: false },
            { key: 'D', text: 'Yükseköğretim Kurulu', isCorrect: false },
            { key: 'E', text: 'Maarif Müfettişleri Başkanlığı', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Talim ve Terbiye Kurulu Başkanlığı müfredat ve ders kitaplarını onaylayan kuruldur.',
        },
        {
          question: '3. Bir rehber öğretmenin 8. sınıf öğrencisinin ilgi, istidat ve yetenek testleri sonuçlarını analiz ederek onu Güzel Sanatlar Lisesine yönlendirmesi 1739 Sayılı Kanun’un hangi ilkesine örnektir?',
          options: [
            { key: 'A', text: 'Yöneltme', isCorrect: true },
            { key: 'B', text: 'Karma Eğitim', isCorrect: false },
            { key: 'C', text: 'Bilimsellik', isCorrect: false },
            { key: 'D', text: 'Demokrasi Eğitimi', isCorrect: false },
            { key: 'E', text: 'Her Yerde Eğitim', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Bireylerin ilgi ve yeteneklerine uygun okullara ve mesleklere yönlendirilmesi Yöneltme ilkesidir.',
        },
        {
          question: '4. 1739 Sayılı Kanun’da yer alan "Karma Eğitim" ilkesi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Tüm eğitim kademelerinde yalnızca tek cinsiyete dayalı okullar açılması zorunludur.', isCorrect: false },
            { key: 'B', text: 'Okullarda kız ve erkek karma eğitim yapılması esastır; ancak imkân ve zorunluluklara göre bazı okullar yalnızca kız veya erkek öğrencilere ayrılabilir.', isCorrect: true },
            { key: 'C', text: 'Karma eğitim yalnızca yükseköğretimde uygulanır.', isCorrect: false },
            { key: 'D', text: 'Karma eğitim uygulaması tamamen kaldırılmıştır.', isCorrect: false },
            { key: 'E', text: 'Özel okullarda karma eğitim yapılması yasaktır.', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. 1739 sayılı Kanun karma eğitimi esas kabul ederken belirli okul türlerinde istisnalara imkân tanımıştır.',
        },
        {
          question: '5. "Eğitim faaliyetlerinin yalnız okul binalarında değil, halk eğitimi merkezlerinde, kütüphanelerde, iş yerlerinde ve dijital ortamlarda da hayat boyu sürmesi" hangi temel ilkeyi ifade eder?',
          options: [
            { key: 'A', text: 'Her Yerde Eğitim ve Süreklilik', isCorrect: true },
            { key: 'B', text: 'Laiklik', isCorrect: false },
            { key: 'C', text: 'Demokrasi Eğitimi', isCorrect: false },
            { key: 'D', text: 'Okul Aile Birlikleri', isCorrect: false },
            { key: 'E', text: 'Yöneltme', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Eğitimin yaşam boyu ve okul dışı mekanlarda da devam etmesi Süreklilik ve Her Yerde Eğitim ilkeleridir.',
        },
      ],
    };
  }

  // 2. TÜRKİYE YÜZYILI MAARİF MODELİ (unit-tmes-2)
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `Türkiye Yüzyılı Maarif Modeli; öğrenciyi zihinsel, duygusal, bedensel ve ahlaki yönleriyle bir bütün olarak gören "bütüncül eğitim" felsefesine dayanır.

## 1. Maarif Modelinin Nihai Amacı ve İnsan Profili
* **Nihai Hedef:** **Yetkin ve Erdemli İnsan** yetiştirmektir.
* **3 Temel Boyut (Yetkin ve Erdemli İnsan Sacayağı):**
  - **Aklıselim:** Sağduyulu, analitik düşünebilen, sorgulayan, hakikati arayan zihin.
  - **Kalbiselim:** Merhametli, vicdanlı, adil, sevgi ve saygı dolu yürek.
  - **Zevkiselim:** Estetik duyarlılığı gelişmiş, sanatı ve güzelliği takdir eden zevk.

## 2. Erdem-Değer-Eylem Çerçevesi
* Maarif Modelinde değerler sadece teorik olarak anlatılmaz; **eyleme ve davranışa dönüşmesi** hedeflenir.
* **Temel Erdemler:** Adalet, Hikmet, Merhamet, Vatanseverlik, Sorumluluk, Dürüstlük, Çalışkanlık, Saygı, Mahremiyet, Tasarruf.
* **Model:** Bilgi -> Anlamlandırma -> İçselleştirme (Değer) -> Eyleme Dönüştürme (Erdemli Davranış).

## 3. Beceriler ve Okuryazarlıklar Mimarisi
* **Kavramsal Beceriler:** Temel, bütünleşik ve üst düzey düşünme becerileri (Akıl yürütme, problem çözme, karar verme, eleştirel düşünme).
* **Alan Becerileri:** Her disipline (Türkçe, Matematik, Fen, Sosyal vb.) özgü beceriler.
* **Sosyal-Duygusal Öğrenme Becerileri (SDÖ):** Öz farkındalık, öz yönetim, sosyal farkındalık, ilişki kurma, sorumlu karar alma.
* **Eğilimler:** Açık fikirlilik, merak, azim, estetik duyarlık.
* **Okuryazarlık Becerileri:** Dijital okuryazarlık, bilgi okuryazarlığı, finansal okuryazarlık, görsel okuryazarlık, kültür okuryazarlığı, çevre okuryazarlığı.

## 4. Farklılaştırılmış Öğretim: Zenginleştirme ve Destekleme
* Her öğrencinin öğrenme hızı ve stili farklıdır.
* **Zenginleştirme:** İlgili konuyu hızlı kavrayan, derinlemesine öğrenmek isteyen ve üstün yetenekli öğrenciler için içeriğin karmaşıklaştırılması, proje ve derinlemesine araştırma etkinlikleri sunulmasıdır.
* **Destekleme:** Öğrenme güçlüğü yaşayan veya geride kalan öğrenciler için ek süre, yapı iskelesi (ipuçları), somut materyaller ve telafi etkinlikleri sağlanmasıdır.

## 5. Süreç Odaklı Ölçme ve Değerlendirme
* Yalnızca sonuç odaklı (not verme amaçlı) sınavlar yerine; öğrenme sürecini izleyen **Biçimlendirici (Formatif) Değerlendirme**, rubrikler (dereceli puanlama anahtarı), öğrenci gelişim dosyaları (portfolyo) ve öz/akran değerlendirmeler esastır.`,
      comparison_tables: [
        {
          title: 'Maarif Modeli: Zenginleştirme vs. Destekleme',
          headers: ['Uygulama', 'Hedef Öğrenci Grubu', 'Uygulanan Yöntem'],
          rows: [
            ['Zenginleştirme', 'Hızlı öğrenen, derinleşmek isteyen öğrenci', 'Derinleştirilmiş projeler, ileri düzey analiz, disiplinlerarası görevler'],
            ['Destekleme', 'Öğrenme güçlüğü çeken, ek süreye muhtaç öğrenci', 'Yapı iskelesi, somut modeller, adım adım rehberlik ve telafi çalışmaları'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Zenginleştirme sadece üstün zekâlılar okulunda yapılır.',
          correct_distinction: 'Zenginleştirme her sınıfta hızlı kavrayan her öğrenci için öğretmenin ders içinde uygulayacağı farklılaştırılmış öğretim adımıdır.',
          tip: 'Soruda konuyu bitiren öğrenciye daha derin araştırma veya proje verilmesi ZENGİNLEŞTİRME örneğidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS 2026 sınavında Türkiye Yüzyılı Maarif Modeli'nin sacayakları olan 'Aklıselim (akıl), Kalbiselim (duygu/kalp), Zevkiselim (estetik)' üçlüsü ve 'Zenginleştirme / Destekleme' kavramları doğrudan soru potansiyeli taşır.",
          importance: 'critical',
        },
      ],
      summary: 'Maarif Modeli; yetkin ve erdemli insan profili, erdem-değer-eylem üçgeni, okuryazarlık becerileri ve farklılaştırılmış öğretim (zenginleştirme/destekleme) üzerine kuruludur.',
      what_to_remember: [
        '✓ İnsan Profili: Yetkin ve Erdemli İnsan (Aklıselim, Kalbiselim, Zevkiselim).',
        '✓ Erdem-Değer-Eylem: Değerlerin somut ahlaki davranışa dönüşmesi.',
        '✓ Zenginleştirme: İleri düzey öğrenciye derinleştirme.',
        '✓ Destekleme: İhtiyacı olan öğrenciye yapı iskelesi ve telafi.',
        '✓ Ölçme: Süreç ve gelişim odaklı biçimlendirici değerlendirme.',
      ],
      self_check_questions: [
        {
          question: '1. Türkiye Yüzyılı Maarif Modeli’nde hedeflenen "Yetkin ve Erdemli İnsan" profilinin akıl, duygu ve estetik boyutlarını temsil eden üç temel kavram aşağıdakilerden hangisinde eksiksiz verilmiştir?',
          options: [
            { key: 'A', text: 'Aklıselim — Kalbiselim — Zevkiselim', isCorrect: true },
            { key: 'B', text: 'İdealizm — Realizm — Pragmatizm', isCorrect: false },
            { key: 'C', text: 'Daimicilik — Esasicilik — İlerlemecilik', isCorrect: false },
            { key: 'D', text: 'Özümleme — Uyumsama — Dengeleme', isCorrect: false },
            { key: 'E', text: 'Bilişsel — Duyuşsal — Devinişsel', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Maarif Modeli insanı Aklıselim (sağduyulu akıl), Kalbiselim (temiz/vicdanlı kalp) ve Zevkiselim (estetik zevk) olarak tanımlar.',
        },
        {
          question: '2. Bir ders etkinliğinde verilen görevleri sınıfın çoğundan çok daha hızlı bitiren ve konuyu kavrayan bir öğrenciye öğretmenin ileri düzey araştırma görevi ve disiplinler arası problem çözme senaryosu vermesi Maarif Modeli’nde hangi kavramla adlandırılır?',
          options: [
            { key: 'A', text: 'Destekleme', isCorrect: false },
            { key: 'B', text: 'Zenginleştirme', isCorrect: true },
            { key: 'C', text: 'Geleneksel değerlendirme', isCorrect: false },
            { key: 'D', text: 'Davranışçı pekiştirme', isCorrect: false },
            { key: 'E', text: 'Standart öğretim', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Hızlı ve derin öğrenen öğrencilere sunulan ileri düzey içerik ve görevler Farklılaştırılmış Öğretimde Zenginleştirmedir.',
        },
        {
          question: '3. Maarif Modeli’nin değerler eğitimi yaklaşımında vurgulanan temel ilke aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Değerlerin yalnızca yazılı sınavlarda ezberden sorulması', isCorrect: false },
            { key: 'B', text: 'Değerlerin içselleştirilerek somut erdemli eylemlere ve tutumlara dönüştürülmesi (Erdem-Değer-Eylem)', isCorrect: true },
            { key: 'C', text: 'Değerlerin sadece din kültürü dersiyle sınırlandırılması', isCorrect: false },
            { key: 'D', text: 'Geleneksel ceza yöntemleriyle değer dayatılması', isCorrect: false },
            { key: 'E', text: 'Milli ve manevi unsurların programdan çıkarılması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Maarif Modeli değerlerin eyleme ve ahlaki davranışa dönüşmesini hedefler (Erdem-Değer-Eylem modeli).',
        },
        {
          question: '4. Maarif Modeli’nde yer alan "Sosyal-Duygusal Öğrenme (SDÖ)" becerileri arasında aşağıdakilerden hangisi YER ALMAZ?',
          options: [
            { key: 'A', text: 'Öz farkındalık ve öz yönetim', isCorrect: false },
            { key: 'B', text: 'Sosyal farkındalık ve empati kurma', isCorrect: false },
            { key: 'C', text: 'Sağlıklı ilişki kurma becerileri', isCorrect: false },
            { key: 'D', text: 'Sorumlu karar alma', isCorrect: false },
            { key: 'E', text: 'Kişisel menfaat için başkalarını manipüle etme', isCorrect: true },
          ],
          explanation: 'Doğru cevap E seçeneğidir. Manipülasyon ve bencil çıkarcılık SDÖ becerilerine tamamen aykırıdır.',
        },
        {
          question: '5. Türkiye Yüzyılı Maarif Modeli’nin ölçme ve değerlendirme yaklaşımı ile ilgili aşağıdakilerden hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Yalnızca dönem sonundaki tek bir çoktan seçmeli test puanı esas alınır.', isCorrect: false },
            { key: 'B', text: 'Öğrenme sürecini sürekli izleyen biçimlendirici (formatif) değerlendirme ve rubrikler esastır.', isCorrect: true },
            { key: 'C', text: 'Öğrencinin performans görevleri tamamen kaldırılmıştır.', isCorrect: false },
            { key: 'D', text: 'Gelişim dosyaları (portfolyo) yasaklanmıştır.', isCorrect: false },
            { key: 'E', text: 'Sadece öğrencilerin birbirleriyle kıyaslanıp sıralanması amaçlanır.', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Maarif Modeli süreç odaklı, öğrenciye anlık dönüt sağlayan biçimlendirici ölçmeyi merkeze alır.',
        },
      ],
    };
  };
