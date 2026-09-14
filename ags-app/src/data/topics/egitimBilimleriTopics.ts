import type { Topic, TopicContent } from '../../types/database';

export const getEgitimBilimleriSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // 1. FELSEFELER VE EĞİTİM FELSEFELERİ (topic-eb-1-5 - 1-14)
  if (tid.startsWith('topic-eb-1-5') || tid.startsWith('topic-eb-1-6') || tid.startsWith('topic-eb-1-7') || tid.startsWith('topic-eb-1-8') || tid.startsWith('topic-eb-1-9') || tid.startsWith('topic-eb-1-10') || tid.startsWith('topic-eb-1-11') || tid.startsWith('topic-eb-1-12') || tid.startsWith('topic-eb-1-13') || tid.startsWith('topic-eb-1-14')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Eğitim felsefeleri; ontoloji (varlık), epistemoloji (bilgi) ve aksiyoloji (değer) temelleri üzerinde eğitimin amacını, öğretmen rolünü ve müfredat yapısını belirler.

## 1. Temel Felsefi Akımlar
* **İdealizm (Platon, Hegel):** Gerçeklik madde değil, akıl ve fikirlerdir (ideler). Değerler mutlak ve değişmezdir. Akıl yürütme (tümdengelem) ve sezgi esastır.
* **Realizm (Aristoteles, Locke):** Gerçeklik insan zihninden bağımsız olarak dış dünyadaki nesnelerdir. Bilgi duyular ve deneyle (tümevarım) elde edilir. Zihin doğuştan boş bir levhadır (**Tabula Rasa**).
* **Pragmatizm (John Dewey, William James):** Gerçeklik sürekli değişir. Bilginin doğruluğu **uygulamadaki faydasına ve problem çözmesine** bağlıdır. Çağdaş eğitimin temelidir.
* **Varoluşçuluk (Sartre, Nietzsche):** İnsan önce var olur, sonra kendi özünü ve seçimlerini özgür iradesiyle yaratır. Bireysel özgürlük, sorumluluk ve özgünlük esastır.

## 2. Eğitim Felsefeleri (Geleneksel vs. Çağdaş)
* **Daimicilik (Perennialism - İdealizm & Realizm kökenli):**
  - Eğitimin amacı **değişmeyen evrensel doğruları ve insan doğasını** eğitmektir.
  - Klasik büyük eserler (Büyük Kitaplar) okutulmalıdır.
  - Entelektüel ve elit bir zümre yetiştirmeyi amaçlar. "Eğitim hayata hazırlıktır."
* **Esasicilik (Essentialism - İdealizm & Realizm kökenli):**
  - Eğitimin amacı **kültürel mirası ve temel bilgi/becerileri (3R: Okuma, Yazma, Aritmetik)** yeni nesillere aktarmaktır.
  - **Öğretmen merkezlidir**, sıkı disiplin, ezber ve tekrar esastır. Zorlama ve ceza uygulanabilir.
* **İlerlemecilik (Progressivism - Pragmatizm kökenli):**
  - Eğitimin temeli **öğrenci merkezliliktir**.
  - Öğrenci yaparak-yaşayarak ve bilimsel problem çözme basamaklarıyla öğrenir.
  - "Eğitim hayata hazırlık değil, **hayatın ta kendisidir**."
  - Demokratik sınıf ortamı ve işbirlikli öğrenme esastır.
* **Yeniden Kurmacılık (Reconstructionism - Pragmatizm kökenli):**
  - İlerlemeciliğin devamıdır. Eğitimin amacı **toplumu yeniden yapılandırmak ve reform yapmaktır**.
  - Okul, toplumsal değişimin ve adaletin öncüsü olan bir merkezdir.`,
      comparison_tables: [
        {
          title: '4 Temel Eğitim Felsefesi Karşılaştırması',
          headers: ['Eğitim Felsefesi', 'Dayandığı Felsefe', 'Merkezdeki Unsur', 'Eğitim Anlayışı'],
          rows: [
            ['Daimicilik', 'İdealizm & Realizm', 'Evrensel Değerler & Klasik Eserler', 'Seçkin (Elit) insan / Hayata hazırlık'],
            ['Esasicilik', 'İdealizm & Realizm', 'ÖĞRETMEN & Temel Kültür Aktarımı', 'Sıkı disiplin, ezber, geleneksel aktarım'],
            ['İlerlemecilik', 'Pragmatizm', 'ÖĞRENCİ & Deneyim', 'Yaparak-yaşayarak öğrenme / Hayatın kendisi'],
            ['Yeniden Kurmacılık', 'Pragmatizm', 'TOPLUMSAL REFORM & Değişim', 'Okul toplumu dönüştürme aracıdır'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Esasicilik ve İlerlemecilik aynı geleneksel anlayışa aittir.',
          correct_distinction: 'Esasicilik katı öğretmen merkezli geleneksel yaklaşımdır; İlerlemecilik ise öğrenci merkezli çağdaş pedagojik yaklaşımdır.',
          tip: 'Soruda "öğretmen otoritesi, zorlama, kültürel aktarım" geçerse ESASİCİLİK; "öğrenci ilgisi, problem çözme, demokratik ortam" geçerse İLERLEMECİLİK seçilir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Eğitim Bilimleri testinde 'Eğitim hayata hazırlıktır' diyen DAİMİCİLİK ile 'Eğitim hayatın kendisidir' diyen İLERLEMECİLİK arasındaki söz ayrımı sıkça sorgulanır.",
          importance: 'critical',
        },
      ],
      summary: 'Eğitim felsefeleri geleneksel (Daimicilik, Esasicilik) ve çağdaş (İlerlemecilik, Yeniden Kurmacılık) ekseninde pedagojik hedefleri belirler.',
      what_to_remember: [
        '✓ Daimicilik: Klasik eserler, evrensel doğrular, elit eğitim.',
        '✓ Esasicilik: Öğretmen merkezli, sıkı disiplin, kültürel miras aktarımı.',
        '✓ İlerlemecilik: Öğrenci merkezli, yaparak-yaşayarak öğrenme (John Dewey).',
        '✓ Yeniden Kurmacılık: Toplumsal değişim ve reform.',
      ],
      self_check_questions: [
        {
          question: '1. "Eğitim hayata hazırlık değil, hayatın ta kendisidir" anlayışını savunan, öğrencinin ilgi ve ihtiyaçlarını merkeze alarak bilimsel problem çözme yöntemleriyle öğrenmesini esas alan eğitim felsefesi hangisidir?',
          options: [
            { key: 'A', text: 'Daimicilik', isCorrect: false },
            { key: 'B', text: 'Esasicilik', isCorrect: false },
            { key: 'C', text: 'İlerlemecilik', isCorrect: true },
            { key: 'D', text: 'Yeniden Kurmacılık', isCorrect: false },
            { key: 'E', text: 'Varoluşçuluk', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. İlerlemecilik (Pragmatizm kökenli), eğitimin hayatın kendisi olduğunu ve öğrenci merkezli yürütülmesi gerektiğini savunur.',
        },
        {
          question: '2. Bir okul müdürünün öğretmenlere "Derslerinizde öğrencilerin zorlanması doğaldır. Asıl amacımız geçmişten gelen kültürel mirası ve temel ders bilgilerini disiplinli şekilde öğrencilere ezberletip aktarmaktır" demesi hangi eğitim felsefesini benimsediğini gösterir?',
          options: [
            { key: 'A', text: 'İlerlemecilik', isCorrect: false },
            { key: 'B', text: 'Esasicilik', isCorrect: true },
            { key: 'C', text: 'Yeniden Kurmacılık', isCorrect: false },
            { key: 'D', text: 'Politeknik Eğitim', isCorrect: false },
            { key: 'E', text: 'Doğalcılık', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Öğretmen otoritesi, sıkı disiplin, zorlama ve kültürel mirasın aktarımı Esasiciliğin (Essentialism) temelidir.',
        },
        {
          question: '3. Platon ve Aristo gibi antik çağ düşünürlerinin klasik eserlerinin ("Büyük Kitaplar") tüm öğrencilere okutulması gerektiğini ve insan doğasının değişmeyen evrensel doğrularla eğitilmesini savunan yaklaşım hangisidir?',
          options: [
            { key: 'A', text: 'Daimicilik (Perennialism)', isCorrect: true },
            { key: 'B', text: 'İlerlemecilik', isCorrect: false },
            { key: 'C', text: 'Yeniden Kurmacılık', isCorrect: false },
            { key: 'D', text: 'Davranışçılık', isCorrect: false },
            { key: 'E', text: 'Yapılandırmacılık', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Daimicilik değişmeyen evrensel doğruları ve klasik büyük eserlerin okunmasını savunur.',
        },
        {
          question: '4. Okulun yalnızca mevcut kültürü aktaran pasif bir kurum olamayacağını, toplumsal eşitsizlikleri gidermek ve geleceğin adil toplumunu inşa etmek için bir REFORM VE DEĞİŞİM MERKEZİ olması gerektiğini savunan felsefe hangisidir?',
          options: [
            { key: 'A', text: 'Esasicilik', isCorrect: false },
            { key: 'B', text: 'Yeniden Kurmacılık', isCorrect: true },
            { key: 'C', text: 'Daimicilik', isCorrect: false },
            { key: 'D', text: 'Realizm', isCorrect: false },
            { key: 'E', text: 'İdealizm', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Yeniden Kurmacılık okulun toplumu dönüştürme ve yeniden yapılandırma aracı olduğunu öne sürer.',
        },
        {
          question: '5. Zihni doğuştan boş bir levha (**Tabula Rasa**) olarak kabul eden ve tüm bilgilerin sonradan duyu organları ve çevreyle etkileşim sonucu kazanıldığını savunan felsefi akım hangisidir?',
          options: [
            { key: 'A', text: 'Realizm (John Locke)', isCorrect: true },
            { key: 'B', text: 'İdealizm (Platon)', isCorrect: false },
            { key: 'C', text: 'Varoluşçuluk (Sartre)', isCorrect: false },
            { key: 'D', text: 'Rasyonalizm (Descartes)', isCorrect: false },
            { key: 'E', text: 'Sezgicilik (Gazali)', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. John Locke\'un Tabula Rasa kavramı Realist ve Ampirist bilgi kuramının temelidir.',
        },
      ],
    };
  }

  // 2. ÖĞRENME PSİKOLOJİSİ (Klasik, Edimsel, Sosyal, Bilişsel) (topic-eb-1-15 - 1-23)
  if (tid.startsWith('topic-eb-1-15') || tid.startsWith('topic-eb-1-16') || tid.startsWith('topic-eb-1-17') || tid.startsWith('topic-eb-1-18') || tid.startsWith('topic-eb-1-19') || tid.startsWith('topic-eb-1-20') || tid.startsWith('topic-eb-1-21') || tid.startsWith('topic-eb-1-22') || tid.startsWith('topic-eb-1-23')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Öğrenme; yaşantı ürünü, nispeten kalıcı izli davranış değişikliğidir.

## 1. Klasik Koşullanma (Pavlov & Watson)
* Refleksif, istemsiz ve duygusal tepkilerin öğrenilmesini açıklar.
* **Koşulsuz Uyarıcı (Et) -> Koşulsuz Tepki (Salya):** Doğuştan gelen doğal tepki.
* **Nötr Uyarıcı (Zil):** Başlangıçta tepki üretmeyen uyarıcı.
* **Koşullu Uyarıcı (Zil) -> Koşullu Tepki (Salya):** Birlikte sunulma (Bitişiklik) sonucu zilin salya üretmesi.
* **Temel Kavramlar:**
  - **Bitişiklik:** Nötr uyarıcı ile koşulsuz uyarıcının art arda (0.5 saniye) verilmesi.
  - **Habercilik (Rescorla):** Olumlu habercilik (zil çalınca et geliyor), Olumsuz habercilik (zil çalınca şok bitiyor).
  - **Genelleme:** Zil sesine benzer diğer seslere de salya üretme.
  - **Ayırt Etme:** Yalnızca belirli tondaki zile tepki verip diğerlerine vermeme.
  - **Sönme:** Koşullu uyarıcı (zil) pekiştireç (et) olmadan tek başına verilirse tepkinin kaybolması.
  - **Kendiliğinden Geri Gelme:** Sönmüş bir davranışın bir süre sonra aniden ortaya çıkması.
  - **Garcia Etkisi (Tat Koşullanması):** Saatler sonra bile olsa bozulan yiyeceğe karşı biyolojik tiksinti duyulması (Bitişiklik kuralını bozar).

## 2. Edimsel Koşullanma (Skinner & Thorndike)
* İstemli, amaca yönelik davranışlar sonuçları tarafından kontrol edilir (**Tepki -> Uyarıcı / Sonuç**).
* **Pekiştirme ve Ceza Mekanizması:**
  - **Olumlu Pekiştirme:** Ortama hoşa giden uyarıcı eklenir (Aferin, çikolata, yüksek not) -> Davranış sıklığı ARTAR.
  - **Olumsuz Pekiştirme:** Ortamdan hoşa gitmeyen itici uyarıcı çıkarılır (Ağrı kesici almak, kemer takınca sesin susması) -> Davranış sıklığı ARTAR.
  - **I. Tip Ceza:** Ortama itici uyarıcı verilir (Azarlama, tokat) -> Davranış BASKILANIR.
  - **II. Tip Ceza:** Ortamdan hoşa giden uyarıcı alınır (Harçlığı kesme, teneffüse çıkarmama) -> Davranış BASKILANIR.
* **Skinner İlkeleri:**
  - **Premack İlkesi (Büyükanne Kuralı):** Az yapılan (istenmeyen) davranışı yaptırmak için çok yapılan (istenen) davranışı ödül olarak kullanma (*"Ispanağını bitirirsen bilgisayar oynayabilirsin"*).
  - **Kademeli Yaklaşma (Biçimlendirme / Şekillendirme):** Hedef davranışa giden her küçük adımın adım adım pekiştirilmesi.
  - **Sönme Patlaması:** Pekiştireç kesildiğinde davranışın önce aşırı artması, sonra sönmesi.

## 3. Sosyal Öğrenme Kuramı (Bandura)
* Öğrenme başkalarının davranışlarını gözlemleme ve model alma yoluyla gerçekleşir.
* **Süreçleri:** Dikkat -> Hatırda Tutma -> Davranışı Oluşturma -> Güdülenme.
* **Dolaylı Yaşantılar:** Dolaylı pekiştirme, dolaylı ceza, dolaylı duygu, dolaylı güdülenme.`,
      comparison_tables: [
        {
          title: 'Pekiştirme ve Ceza Matrisi (Skinner)',
          headers: ['İşlem Türü', 'Ortama Giren / Çıkan Uyarıcı', 'Davranışa Etkisi'],
          rows: [
            ['Olumlu Pekiştirme', 'Ortama İYİ uyarıcı EKLENİR', 'Davranış ARTAR (+)'],
            ['Olumsuz Pekiştirme', 'Ortamdan KÖTÜ uyarıcı ÇIKARILIR', 'Davranış ARTAR (+)'],
            ['I. Tip Ceza', 'Ortama KÖTÜ uyarıcı EKLENİR', 'Davranış AZALIR (-)'],
            ['II. Tip Ceza', 'Ortamdan İYİ uyarıcı ÇIKARILIR', 'Davranış AZALIR (-)'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Olumsuz pekiştirme bir tür cezalandırmadır.',
          correct_distinction: 'Olumsuz pekiştirme CEZA DEĞİLDİR; bireyi rahatsız eden durumdan kurtararak davranışı GÜÇLENDİRİR (Örn: Baş ağrıyınca ilaç içmek).',
          tip: 'Soruda davranış sıklığı artıyorsa cevap PEKİŞTİRMEDİR; azalıyorsa CEZADIR.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS'de Premack ilkesi ile Koşullu Anlaşma arasındaki fark: Premack'te etkinlik hiyerarşisi vardır (istenmeyen davranış -> istenen etkinliğe bağlanır); Koşullu Anlaşmada ise maddi ödüller veya her türlü sözleşme yer alabilir.",
          importance: 'critical',
        },
      ],
      summary: 'Klasik koşullanma refleks ve duyguları; Edimsel koşullanma sonuç odaklı istemli davranışları; Sosyal öğrenme ise model almayı açıklar.',
      what_to_remember: [
        '✓ Olumsuz Pekiştirme: Kötü uyarıcı ortamdan çıkar -> Davranış ARTAR.',
        '✓ Premack İlkesi: Önce ödevini yap, sonra oyun oyna.',
        '✓ Garcia Etkisi: Saatler sonra bile tat tiksintisi oluşması (Bitişikliği bozar).',
        '✓ Bandura: Dolaylı pekiştirme, model alma, öz yeterlik.',
      ],
      self_check_questions: [
        {
          question: '1. Otomobiline bindiğinde ikaz sesinden rahatsız olan bir sürücünün, sesin kesilmesi için emniyet kemerini takması ve bundan sonra araca her bindiğinde kemer takma sıklığının artması Skinner\'a göre hangi kavramla açıklanır?',
          options: [
            { key: 'A', text: 'I. Tip Ceza', isCorrect: false },
            { key: 'B', text: 'Olumsuz Pekiştirme', isCorrect: true },
            { key: 'C', text: 'Olumlu Pekiştirme', isCorrect: false },
            { key: 'D', text: 'Alışma', isCorrect: false },
            { key: 'E', text: 'Kademeli Yaklaşma', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Rahatsız edici ikaz sesinin (itici uyarıcı) ortamdan çıkması davranışı artırmıştır (Olumsuz pekiştirme).',
        },
        {
          question: '2. Bir annenin ödevini yapmak istemeyen çocuğuna "Eğer matematik testini eksiksiz bitirirsen akşam arkadaşlarınla parka gidip futbol oynayabilirsin" demesi hangi davranışçı ilkeye örnektir?',
          options: [
            { key: 'A', text: 'Garcia Etkisi', isCorrect: false },
            { key: 'B', text: 'Premack İlkesi (Büyükanne Kuralı)', isCorrect: true },
            { key: 'C', text: 'Karşıt Koşullanma', isCorrect: false },
            { key: 'D', text: 'Gölgeleme', isCorrect: false },
            { key: 'E', text: 'Tepkisel Koşullanma', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Bireyin yapmaktan hoşlandığı yüksek olasılıklı etkinlik (futbol oynamak), hoşlanmadığı düşük olasılıklı etkinliği (ödev yapmak) yaptırmak için pekiştireç olarak kullanılmıştır.',
        },
        {
          question: '3. Derste söz almadan konuşan bir öğrencinin teneffüse çıkmasının öğretmen tarafından yasaklanması hangi edimsel koşullanma kavramına örnektir?',
          options: [
            { key: 'A', text: 'I. Tip Ceza', isCorrect: false },
            { key: 'B', text: 'II. Tip Ceza (Ortamdan sevilen uyarıcının alınması)', isCorrect: true },
            { key: 'C', text: 'Olumsuz Pekiştirme', isCorrect: false },
            { key: 'D', text: 'Sönme', isCorrect: false },
            { key: 'E', text: 'Geriye Ket Vurma', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Öğrencinin sevdiği bir hak olan teneffüs elinden alınarak davranış baskılanmıştır (II. Tip Ceza).',
        },
        {
          question: '4. Yediği bozuk bir balık nedeniyle saatler sonra midesi bulanan ve rahatsızlanan bir kişinin, aradan uzun saatler geçmesine rağmen balık kokusuna karşı şiddetli tiksinti duymaya başlaması klasik koşullanmadaki hangi istisnayı gösterir?',
          options: [
            { key: 'A', text: 'Garcia Etkisi (Bitişiklik kuralının çiğnenmesi)', isCorrect: true },
            { key: 'B', text: 'Öğrenilmiş Çaresizlik', isCorrect: false },
            { key: 'C', text: 'Üst Düzey Koşullanma', isCorrect: false },
            { key: 'D', text: 'Duyusal Uyum', isCorrect: false },
            { key: 'E', text: 'Plasebo Etkisi', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Garcia etkisi (tat tiksintisi), uyarıcı ile tepki arasında saatler geçse bile biyolojik hazırlıklılık gereği koşullanmanın oluşacağını kanıtlar.',
        },
        {
          question: '5. Sınıfta kurallara uyan ve sessizce sırasını bekleyen arkadaşının öğretmen tarafından övüldüğünü gören bir öğrencinin de derste kurallara uymaya başlaması Bandura’ya göre hangisiyle açıklanır?',
          options: [
            { key: 'A', text: 'Doğrudan pekiştirme', isCorrect: false },
            { key: 'B', text: 'Dolaylı pekiştirme', isCorrect: true },
            { key: 'C', text: 'Dolaylı ceza', isCorrect: false },
            { key: 'D', text: 'Öz düzenleme', isCorrect: false },
            { key: 'E', text: 'Karşıt pekiştirme', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Modelin aldığı ödülü gözlemleyerek kendi davranışını olumlu yönde değiştirmek Dolaylı Pekiştirmedir.',
        },
      ],
    };
  }

  // 3. GELİŞİM PSİKOLOJİSİ VE ÖĞRETİM (Piaget, Vygotsky, Kohlberg, Erikson, Öğretim İlke ve Yöntemleri) (unit-eb-2)
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `Gelişim; döllenmeden ölüme kadar devam eden fiziksel, bilişsel, ahlaki ve psikososyal değişimlerin bütünüdür.

## 1. Piaget'nin Bilişsel Gelişim Kuramı
* **Temel Kavramlar:**
  - **Şema:** Zihindeki temel bilgi kalıbı ve örgütlenmiş yapı.
  - **Özümleme (Asimilasyon):** Yeni karşılaşılan bir durumu var olan mevcut şemayla açıklama (Köpeği olan çocuğun koyunu görünce *"hav hav"* demesi).
  - **Uyumsama (Akomodasyon / Düzenleme):** Mevcut şemanın yetersiz kalması durumunda şemayı değiştirme veya yeni şema açma (*"Bu koyundur, meeler"* diyerek şemayı ayırma).
  - **Dengeleme:** Özümleme ve uyumsama yoluyla zihinsel dengenin yeniden kurulması.
* **Gelişim Dönemleri:**
  - **Duyusal-Motor Dönem (0-2 yaş):** Nesne sürekliliği (8-9. ay), döngüsel tepkiler, hedefe yönelik davranış.
  - **İşlem Öncesi Dönem (2-7 yaş):** Sembolik oyun, **Benmerkezcilik (Egosentrizm)**, Odaklanma (Tek özelliğe takılma), Canlıcılık (Animizm), Yapaycılık, Özelden özele akıl yürütme. Korunum henüz KAZANILMAMIŞTIR.
  - **Somut İşlemler Dönemi (7-11 yaş):** **Korunum kazanılır** (Madde, hacim, ağırlık), tersine çevirebilirlik, çoklu sınıflandırma, odaklaşmadan kurtulma.
  - **Soyut İşlemler Dönemi (11+ yaş):** Hipotetik (varsayımsal) düşünme, tümdengelim, birleştirici düşünme, ergen benmerkezciliği (Hayali izleyici, Kişisel efsane).

## 2. Vygotsky'nin Sosyokültürel Gelişim Kuramı
* Gelişimin kaynağı sosyal çevre, kültür ve dildir.
* **Yakınsak Gelişim Alanı (ZPD):** Çocuğun kendi başına yapabileceği ile yetişkin/akran rehberliğinde başarabileceği potansiyel düzey arasındaki mesafe.
* **Yapı İskelesi (Scaffolding):** Öğrenciye başlangıçta verilen yoğun desteğin, öğrenci ustalaştıkça kademeli olarak geri çekilmesi.

## 3. Kohlberg'in Ahlak Gelişim Evreleri
* **Gelenek Öncesi:**
  1. İtaat ve Ceza: *"Yakalanırsam ceza alırım, o yüzden yapmam."*
  2. Saf Çıkarcı (Araçsal İlişkiler): *"Bana ne faydası var? Sen bana verirsen ben de sana veririm."*
* **Geleneksel:**
  3. İyi Çocuk Eğilimi (Kişilerarası Uyum): *"Başkaları ne der? Aferin almak ve sevilmek için yaparım."*
  4. Kanun ve Düzen: *"Kurallar herkes içindir, kanunlara mutlak uyulmalıdır."*
* **Gelenek Sonrası:**
  5. Sosyal Sözleşme: *"Kanunlar toplum yararına değiştirilebilir."*
  6. Evrensel Ahlak İlkeleri: İnsan hayatı, adalet ve eşitlik her şeyin üzerindedir.

## 4. Öğretim İlke ve Yöntemleri
* **Öğrenciye Görelik:** Öğretimin öğrencinin ilgi, yetenek ve gelişim seviyesine uygun olması.
* **Açıklık (Ayanilik):** Dilin anlaşılır olması ve konunun birden çok duyu organına hitap etmesi (Görsel materyaller).
* **Somuttan Soyuta:** Önce modeller, nesneler ve deneylerle somutlaştırıp ardından soyut kavrama geçilmesi.
* **Bilinenden Bilinmeyene & Yakından Uzağa:** Çocuğun ön bilgilerinden ve yakın çevresinden başlanması.`,
      comparison_tables: [
        {
          title: 'Piaget Dönemleri ve Ayırt Edici Bilişsel Beceriler',
          headers: ['Dönem', 'Yaş', 'En Belirgin Bilişsel Özellik', 'Kritik Sınav İpucu'],
          rows: [
            ['Duyusal-Motor', '0-2 yaş', 'Nesne Sürekliliği', 'Göz önünden kaybolan nesnenin yok olmadığını anlama'],
            ['İşlem Öncesi', '2-7 yaş', 'Benmerkezcilik & Animizm', 'Korunum yoktur, tek boyuta odaklanır'],
            ['Somut İşlemler', '7-11 yaş', 'Korunum & Tersine Çevirebilirlik', 'Madde miktarı şekil değişse de aynıdır'],
            ['Soyut İşlemler', '11+ yaş', 'Hipotetik & Göreli Düşünme', 'Soyut varsayımlar ve bilimsel hipotez kurma'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Özümleme ve Uyumsama aynı zihinsel süreçtir.',
          correct_distinction: 'Özümlemede mevcut şema değiştirilmez, yeni durum eski şemaya uydurulur; Uyumsamada ise şema değiştirilir veya yeni bir şema açılır.',
          tip: 'Çocuk yeni duruma eski adıyla seslenirse ÖZÜMLEME; yeni bir kategori oluşturup farkı anlarsa UYUMSAMA işaretlenir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS'de ince uzun bardağa konan suyun miktarının değişmediğini anlayan çocuk SOMUT İŞLEMLER (Korunum kazanılmış); bardağın boyu uzun diye çok su var diyen çocuk İŞLEM ÖNCESİ (Odaklanma/Korunum yok) evresindedir.",
          importance: 'critical',
        },
      ],
      summary: 'Piaget bilişsel şemaları; Vygotsky sosyal iskeleyi; Kohlberg ahlak basamaklarını; Öğretim ilkeleri ise sınıf içi pedagojik uygulamayı belirler.',
      what_to_remember: [
        '✓ Piaget: İşlem Öncesi (Korunum yok, benmerkezci) -> Somut İşlem (Korunum var, mantıksal).',
        '✓ Vygotsky: ZPD (rehberle ulaşılan potansiyel), Yapı İskelesi (desteğin kademeli çekilmesi).',
        '✓ Kohlberg: Ceza-İtaat -> Saf Çıkarcı -> İyi Çocuk -> Kanun-Düzen -> Evrensel Ahlak.',
        '✓ Öğretim İlkeleri: Açıklık (çok duyu), Somuttan Soyuta, Öğrenciye Görelik.',
      ],
      self_check_questions: [
        {
          question: '1. Aynı miktardaki oyun hamurunun gözünün önünde yuvarlak toptan silindir şekline getirilmesi sonucu "Şimdi daha çok hamur oldu çünkü boyu uzadı" diyen 5 yaşındaki bir çocuk Piaget\'ye göre hangi gelişim evresindedir ve hangi sınırlılığı yaşamaktadır?',
          options: [
            { key: 'A', text: 'Somut İşlemler Dönemi — Tersine çevirememe', isCorrect: false },
            { key: 'B', text: 'İşlem Öncesi Dönem — Odaklaşma ve Korunumun kazanılamamış olması', isCorrect: true },
            { key: 'C', text: 'Duyusal-Motor Dönem — Nesne sürekliliğinin olmaması', isCorrect: false },
            { key: 'D', text: 'Soyut İşlemler Dönemi — Ergen benmerkezciliği', isCorrect: false },
            { key: 'E', text: 'İşlem Öncesi Dönem — Canlıcılık (Animizm)', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. İşlem öncesi dönemdeki çocuklar nesnenin tek bir boyutuna (boyuna) odaklanır ve korunum ilkesini henüz kazanamazlar.',
        },
        {
          question: '2. Bir öğretmen zor bir matematik problemini çözerken öğrencisine önce adım adım ipuçları ve çözümlü modeller sunmuş, öğrencinin soru çözme becerisi geliştikçe verdiği ipuçlarını kademeli olarak azaltarak problemi tek başına çözmesini sağlamıştır. Vygotsky’ye göre bu öğretimsel destek hangisidir?',
          options: [
            { key: 'A', text: 'Özümleme', isCorrect: false },
            { key: 'B', text: 'Yapı İskelesi (Scaffolding)', isCorrect: true },
            { key: 'C', text: 'Benmerkezci konuşma', isCorrect: false },
            { key: 'D', text: 'Gölgeleme', isCorrect: false },
            { key: 'E', text: 'Kişisel efsane', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Öğrenci ustalaştıkça desteğin kademeli olarak geri çekilmesine Yapı İskelesi adı verilir.',
        },
        {
          question: '3. Yere çöp atan arkadaşına "Öğretmen görürse sana kızar ve ceza verir, o yüzden yere çöp atmamalısın" diyen bir ilkokul öğrencisi Kohlberg’in ahlak gelişim kuramına göre hangi evrededir?',
          options: [
            { key: 'A', text: 'İtaat ve Ceza Eğilimi', isCorrect: true },
            { key: 'B', text: 'Saf Çıkarcı (Araçsal) Eğilim', isCorrect: false },
            { key: 'C', text: 'İyi Çocuk Eğilimi', isCorrect: false },
            { key: 'D', text: 'Kanun ve Düzen Eğilimi', isCorrect: false },
            { key: 'E', text: 'Evrensel Ahlak İlkeleri', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Davranışın doğruluğunu otoriteye itaat ve ceza alıp almamaya göre değerlendirmek İtaat ve Ceza evresidir.',
        },
        {
          question: '4. Bir fen bilimleri öğretmeninin "Güneş Sistemi" konusunu işlerken sınıfa 3 boyutlu gezegen maketi getirmesi ve öğrencilere modelleri inceletmesi Öğretim İlkelerinden hangisine en uygundur?',
          options: [
            { key: 'A', text: 'Açıklık (Ayanilik) ve Somuttan Soyuta', isCorrect: true },
            { key: 'B', text: 'Tasarruf (Ekonomiklik)', isCorrect: false },
            { key: 'C', text: 'Tümdengelim', isCorrect: false },
            { key: 'D', text: 'Sosyallik', isCorrect: false },
            { key: 'E', text: 'Yakından uzağa', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Maket ve görsel modeller kullanmak konuyu somutlaştırır ve birden çok duyuya hitap ederek açıklık sağlar.',
        },
        {
          question: '5. Piaget’ye göre sokakta ilk kez zebraları gören bir çocuğun yanındaki annesine *"Bak çizgili pijamalı atlar"* demesi hangi zihinsel süreçle açıklanır?',
          options: [
            { key: 'A', text: 'Uyumsama (Akomodasyon)', isCorrect: false },
            { key: 'B', text: 'Özümleme (Asimilasyon)', isCorrect: true },
            { key: 'C', text: 'Nesne sürekliliği', isCorrect: false },
            { key: 'D', text: 'Tersine çevirebilirlik', isCorrect: false },
            { key: 'E', text: 'Döngüsel tepki', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Yeni durumu var olan mevcut "at" şemasıyla açıklamaya çalışması Özümleme örneğidir.',
        },
      ],
    };
  };
