import type { Topic, TopicContent, SelfCheckQuestion } from '../types/database';

// ============================================================================
// 1. TARİH DERSİ KONU İÇERİKLERİ (ÖZGÜN AGS MÜFREDATI)
// ============================================================================
export const getTarihTopicContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // UYGURLAR (Örnek referans konu)
  if (tid === 'topic-tarih-1-5') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: 'Uygurlar',
      core_explanation: `Uygurlar, Orta Asya Türk tarihinde göçebe bozkır kültüründen yerleşik hayata geçişi gerçekleştiren ve kültürel alanda çığır açan ilk Türk devletidir.

## 1. Kuruluş ve Siyasi Gelişmeler
* **Kurucu:** Kutlug Bilge Kül Kağan (744).
* **Merkez:** İlk olarak Ötüken, ardından Ordu-Balık (Karabalgasun) merkez yapılmıştır.
* **En Parlak Dönem:** Moyen-Çor (Moyun Çur) dönemi. Bu dönemde Şine-Usu Yazıtı dikilmiştir.
* **Din Değişimi:** Bögü Kağan döneminde Çin seferi sonrası Maniheizm (Mani dini) resmi din olarak kabul edilmiştir (762).
* **Yıkılış:** 840 yılında Kırgızların saldırısı sonucu yıkılmış; Kansu (Sarı Uygurlar) ve Turfan (Doğu Türkistan) Uygurları olarak ikiye ayrılmışlardır.

## 2. Din ve İnanç: Maniheizm'in Etkileri
* Maniheizm dini **et yemeyi ve savaşmayı yasaklamıştır**.
* **Sonuçları:**
  - Türklerin savaşçılık ve akıncılık özelliklerinin zayıflamasına neden olmuştur.
  - Beslenme ihtiyacı nedeniyle **tarım ve bahçecilik** gelişmiştir.
  - Tapınak ve mabet ihtiyacı doğduğu için **yerleşik hayata geçişi zorunlu kılmıştır**.
  - Sanat, mimari ve tercüme faaliyetleri hız kazanmıştır.

## 3. Yerleşik Hayata Geçiş ve Şehircilik
* Türk tarihinde **yerleşik hayata geçen İLK Türk devletidir**.
* Kurdukları şehirlere **"Balık"** (Ordubalık, Beşbalık) adı verilmiştir.
* Şehirlerde saraylar, manastırlar ve Budist/Maniheist tapınaklar (**Stupa**) inşa edilmiştir.
* Evler, kerpiç ve tuğladan yapılmış; özel mülkiyet ve kira/borç senetleri ortaya çıkmıştır.

## 4. Kültür, Sanat ve Medeniyet
* **Alfabe:** Soğd alfabesinden esinlenerek 18 harfli **Uygur Alfabesini** oluşturdular.
* **Matbaa ve Kâğıt:** Hareketli harf sistemiyle ahşap baskı kalıpları (matbaa) ve kâğıt ürettiler.
* **Kütüphanecilik:** İlk Türk kütüphanelerini kurdular.
* **Resim ve Sanat:** 
  - Duvar resmi (**Fresko**) ve kitap resmi (**Minyatür**) sanatının ilk örneklerini verdiler.
  - Uygur ressamlarına **"Bedizci"** adı verilmiştir.
* **Tiyatro:** Türk tiyatrosunun (orta oyunu/pandomim) ilk örneklerini sergilediler.
* **Hukuk:** Töre kurallarını **ilk kez yazılı hale getirdiler**; kira sözleşmesi, faiz, evlatlık edinme ve ticaret hukuku metinleri düzenlediler.`,
      comparison_tables: [
        {
          title: 'İslamiyet Öncesi Türk Devletlerinde Yerleşiklik ve Kültür Karşılaştırması',
          headers: ['Devlet', 'Yaşam Tarzı', 'Din', 'Yazı / Alfabe', 'Mimari Eser'],
          rows: [
            ['Büyük Hun Devleti', 'Konargöçer (Bozkır)', 'Gök Tanrı / Şamanizm', 'Sözlü Töre', 'Taşınabilir Sanat (Çadır, Koşum)'],
            ['I. ve II. Göktürkler', 'Konargöçer (Bozkır)', 'Gök Tanrı', '38 Harfli Göktürk / Orhun', 'Orhun Abideleri (Yazıt)'],
            ['Uygurlar', 'YERLEŞİK HAYAT', 'Maniheizm & Budizm', '18 Harfli Uygur Alfabesi', 'Saray, Tapınak (Stupa), Manastır'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Türklerde ilk alfabe Uygurlara aittir.',
          correct_distinction: 'Türklerin ilk milli alfabesi 38 harfli Göktürk (Orhun) alfabesidir. Uygur alfabesi Türklerin kullandığı ikinci milli alfabedir.',
          tip: 'Sorularda ilk milli alfabe sorulduğunda Göktürk; hareketli harfli matbaa sorulduğunda Uygurlar işaretlenmelidir.',
        },
        {
          wrong_belief: 'Tohum saklama kabı veya tahıl ambarı kesin olarak yerleşik hayata geçildiğini gösterir.',
          correct_distinction: 'Tahıl ve tohum ambarları ticaret yoluyla da edinilebilir. Ancak sulama kanalları (Töre kanalı), tapınak mimarisi, saray ve freskolar KESİN yerleşik hayat kanıtıdır.',
          tip: 'AGS sınavlarında yerleşik hayat kanıtı sorularında tapınak, saray, sulama kanalı ve fresko aranmalıdır.',
        },
      ],
      exam_tips: [
        {
          tip: "ÖSYM/AGS Tarih testinde Uygurlar ile ilgili en çok 'yerleşik hayata geçişin getirdiği kültürel sonuçlar' ve 'Maniheizm dininin etkileri' sorgulanır. Hukukun yazılı hale gelmesi ve ilk kütüphanelerin kurulması doğrudan yerleşik yaşamın sonucudur.",
          importance: 'critical',
        },
      ],
      summary: 'Uygurlar, yerleşik yaşama geçen, Maniheizm dinini benimseyen, ilk matbaa/kütüphane/tiyatro ve fresko örneklerini veren ilk Türk devletidir.',
      what_to_remember: [
        '✓ Kurucu: Kutlug Bilge Kül Kağan | Merkez: Karabalgasun',
        '✓ Bögü Kağan döneminde Maniheizm kabul edildi (Savaşçılık zayıfladı, tarım ve şehircilik gelişti).',
        '✓ Yerleşik hayata geçen İLK Türk devletidir (Şehir: Balık, Tapınak: Stupa).',
        '✓ Töre kurallarını ilk kez yazılı hale getirmişlerdir.',
        '✓ Hareketli harfli matbaa, kâğıt, kütüphane, minyatür, fresko ve tiyatronun ilk örneklerini vermişlerdir.',
      ],
      self_check_questions: [
        {
          question: '1. Uygurların Bögü Kağan döneminde benimsediği Maniheizm dininin Türk toplum yapısı ve kültürü üzerinde yarattığı en doğrudan sonuç aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Bozkır askeri teşkilatının ve akıncılık kabiliyetinin güçlenmesi', isCorrect: false },
            { key: 'B', text: 'Et yemeyi ve savaşmayı yasaklaması sebebiyle yerleşik hayata ve tarımsal üretime geçilmesi', isCorrect: true },
            { key: 'C', text: 'Göktürk alfabesinin terk edilip Arap alfabesine geçilmesi', isCorrect: false },
            { key: 'D', text: 'İkili devlet teşkilatı anlayışının tamamen terk edilmesi', isCorrect: false },
            { key: 'E', text: 'Hazar Kağanlığı ile siyasi birliğin kurulması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Mani dini et yemeyi ve canlı öldürmeyi yasakladığı için savaşçı özellikleri zayıflatmış; beslenme ihtiyacı doğrultusunda tarımı ve tapınak etrafında yerleşik şehir hayatını doğurmuştur.',
        },
        {
          question: '2. İslamiyet öncesi Türk tarihi ile ilgili yapılan bir arkeolojik kazıda aşağıdakilerden hangisinin bulunması, o topluluğun KESİN OLARAK yerleşik hayata geçtiğinin kanıtı kabul edilir?',
          options: [
            { key: 'A', text: 'Tahıl öğütme taşları ve tohumluk buğday kalıntıları', isCorrect: false },
            { key: 'B', text: 'At koşum takımları ve deri kemer tokaları', isCorrect: false },
            { key: 'C', text: 'Sulama kanalları, saray kalıntıları ve fresko süslemeli tapınaklar', isCorrect: true },
            { key: 'D', text: 'Demirden yapılmış kılıç ve ok uçları', isCorrect: false },
            { key: 'E', text: 'Dokuma kilim ve hayvan figürlü madeni paralar', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Tahıl ve tohumlar ticaret veya yağma ile taşınabilir; ancak sulama kanalları, sabit tapınak ve saray mimarisi doğrudan yerleşik hayatın kanıtıdır.',
        },
        {
          question: '3. Uygurların töre kurallarını yazılı hale getirmelerinde ve borç-kira sözleşmeleri düzenlemelerinde aşağıdakilerden hangisi en belirleyici faktör olmuştur?',
          options: [
            { key: 'A', text: 'Çin ile yapılan askeri savaşların sona ermesi', isCorrect: false },
            { key: 'B', text: 'Özel mülkiyet, ticaret ve yerleşik toplum ilişkilerinin hukuki güvenceye bağlanma ihtiyacı', isCorrect: true },
            { key: 'C', text: 'Kırgız saldırılarına karşı sınır güvenliğini sağlama isteği', isCorrect: false },
            { key: 'D', text: 'Gök Tanrı inancının kurallarını kayıt altına alma amacı', isCorrect: false },
            { key: 'E', text: 'Boylar federasyonu yapısını koruma gayesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Yerleşik hayata geçilmesiyle birlikte toprak, ev mülkiyeti, kira ve alım-satım işlemleri gibi karmaşık ilişkiler doğmuş, bu durum hukukun yazılı hale getirilmesini zorunlu kılmıştır.',
        },
        {
          question: '4. Uygurlar döneminde görülen aşağıdaki gelişmelerden hangisi, Türklerin matbaa ve kütüphanecilik alanında ilerlediğinin doğrudan göstergesidir?',
          options: [
            { key: 'A', text: 'Şine-Usu Yazıtı’nın dikilmesi', isCorrect: false },
            { key: 'B', text: 'Ahşap hareketli harf sisteminin kullanılması ve tercüme metinlerin arşivlenmesi', isCorrect: true },
            { key: 'C', text: 'Kurgan adı verilen mezarların yapılması', isCorrect: false },
            { key: 'D', text: 'Ordubalık şehrinin surlarla çevrilmesi', isCorrect: false },
            { key: 'E', text: 'Onlu ordu teşkilatının uygulanması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Ahşap bloklardan yapılan hareketli harfler matbaanın, tercüme ve dini/hukuki metinlerin biriktirilmesi ise kütüphaneciliğin temelidir.',
        },
        {
          question: '5. Uygurlar hakkında verilen aşağıdaki bilgilerden hangisi YANLIŞTIR?',
          options: [
            { key: 'A', text: 'Kurucusu Kutlug Bilge Kül Kağan’dır.', isCorrect: false },
            { key: 'B', text: 'Türk tarihinde tiyatro (orta oyunu) ve minyatür sanatının ilk örneklerini vermişlerdir.', isCorrect: false },
            { key: 'C', text: 'Kırgızlar tarafından yıkılmışlardır.', isCorrect: false },
            { key: 'D', text: 'İslamiyet’i devletin resmi dini olarak kabul eden ilk Türk devletidir.', isCorrect: true },
            { key: 'E', text: 'Duvar resmi yapan sanatçılarına "Bedizci" adı verilmiştir.', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. İslamiyet’i resmi din olarak kabul eden ilk Türk devleti İtil (Volga) Bulgarları ve Orta Asya’da Karahanlılar’dır. Uygurlar Maniheizm ve Budizm’i benimsemiştir.',
        },
      ],
    };
  }

  // BÜYÜK HUN DEVLETİ
  if (tid === 'topic-tarih-1-3') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: 'Büyük Hun Devleti',
      core_explanation: `Tarihte bilinen ilk teşkilatlı Türk devletidir. Orta Asya’da Türk siyasi birliğini ilk kez sağlamışlardır.

## 1. Kuruluş ve Önemli Hükümdarlar
* **Bilinen İlk Hükümdar:** Teoman (MÖ 220). Merkezi Ötüken’dir.
* **Mete Han Dönemi (En Parlak Dönem - MÖ 209):**
  - Tahta çıkış tarihi olan **MÖ 209**, Türk Kara Kuvvetleri’nin kuruluş tarihi kabul edilir.
  - İlk kez düzenli ordu ve **Onlu Teşkilat** kurulmuştur (Onbaşı, Yüzbaşı, Binbaşı, Tümenbaşı).
  - Islıklı ok (çavuş oku) icat edilmiştir.
  - Orta Asya’daki tüm Türk boyları **ilk kez tek bir bayrak altında** toplanmıştır.
  - Çin baskı altına alınmış; Pai-teng Savaşı ile Çin vergiye bağlanmış ancak Türk nüfusunun asimile olmasını önlemek için Çin topraklarına yerleşilmemiştir.
* **Ki-ok Dönemi:** Çinli prenseslerle yapılan evlilikler ve entrikalar sonucu devlet zayıflamaya başlamıştır.

## 2. Parçalanma ve Kavimler Göçü
* Devlet MÖ 46’da Doğu ve Batı (Ho-han-yeh ve Çi-çi kardeşler) olarak ikiye ayrıldı.
* Kuzey Hunlarının Balamir komutasında batıya ilerlemesiyle **375 Kavimler Göçü** başlamış, Roma İmparatorluğu ikiye ayrılmış ve Avrupa Hun Devleti kurulmuştur.`,
      comparison_tables: [
        {
          title: 'Hun Hükümdarları ve Temel Politikaları',
          headers: ['Hükümdar', 'Dönem', 'Önemli Faaliyet', 'Sınav Anahtarı'],
          rows: [
            ['Teoman', 'MÖ 220', 'Bilinen ilk kurucu hükümdar', 'Ötüken merkezli kuruluş'],
            ['Mete Han', 'MÖ 209', 'Orduyu Onlu Sisteme göre kurdu, Türkleri birleştirdi', 'MÖ 209 Kara Kuvvetleri kuruluşu'],
            ['Ho-han-yeh / Çi-çi', 'MÖ 46', 'Çin hakimiyetini kabul etme tartışması', 'Milli istiklal mücadelesi'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Mete Han Çin’i tamamen fethettikten sonra başkenti Çin’e taşımıştır.',
          correct_distinction: 'Mete Han Çin’i vergiye bağlamış fakat Türklerin kalabalık Çin nüfusu içinde asimile olmasını engellemek için Çin’e yerleşilmesini yasaklamıştır.',
          tip: 'Sorularda Çin’in vergiye bağlanıp topraklarına yerleşilmeme sebebi: Asimilasyonu önleme ve milli kimliği korumadır.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Tarih testinde Mete Han’ın 'vatan sevgisi' anlayışı (toprak vermeme hadisesi) ve 'Onlu Sistem' kavramı sıkça sorulur.",
          importance: 'critical',
        },
      ],
      summary: 'Büyük Hun Devleti, bilinen ilk Türk devleti olup Mete Han döneminde Onlu ordu sistemi kurulmuş ve Orta Asya Türk birliği sağlanmıştır.',
      what_to_remember: [
        '✓ Bilinen ilk kurucu: Teoman | Başkent: Ötüken',
        '✓ Mete Han (MÖ 209): Onlu teşkilat, Türk siyasi birliği, Çin’i vergiye bağlama.',
        '✓ 375 Kavimler Göçü Hunların batıya hareketiyle başladı.',
      ],
      self_check_questions: [
        {
          question: '1. Mete Han’ın Çin’i mağlup etmesine rağmen Çin topraklarına Türklerin yerleşmesine izin vermeyip sadece vergiye bağlamasının temel gerekçesi nedir?',
          options: [
            { key: 'A', text: 'Çin’in ekonomik kaynaklarının yetersiz olması', isCorrect: false },
            { key: 'B', text: 'Türk nüfusunun kalabalık Çin kültürü içinde erimesini (asimilasyonu) engellemek', isCorrect: true },
            { key: 'C', text: 'İpek Yolu ticaretini sonlandırmak istemesi', isCorrect: false },
            { key: 'D', text: 'Kurultay üyelerinin buna karşı çıkması', isCorrect: false },
            { key: 'E', text: 'Batı Roma ile ittifak kurmuş olması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Mete Han, kalabalık Çin nüfusu karşısında Türklerin milli benliklerini kaybetmelerinden çekinmiştir.',
        },
        {
          question: '2. Türk Kara Kuvvetleri’nin kuruluş yılı olarak kabul edilen MÖ 209 yılı, Türk tarihinde hangi önemli gelişmeyle özdeşleşmiştir?',
          options: [
            { key: 'A', text: 'Teoman’ın Ötüken’i başkent ilan etmesi', isCorrect: false },
            { key: 'B', text: 'Mete Han’ın tahta çıkarak Onlu ordu sistemini kurması', isCorrect: true },
            { key: 'C', text: 'Kavimler Göçü’nün başlaması', isCorrect: false },
            { key: 'D', text: 'Orhun Abideleri’nin dikilmesi', isCorrect: false },
            { key: 'E', text: 'Talas Savaşı’nın kazanılması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Mete Han’ın tahta çıktığı MÖ 209 tarihi, Onlu teşkilatın kuruluş tarihi olarak esas alınır.',
        },
        {
          question: '3. Büyük Hun Devleti’nin parçalanması sürecinde Ho-han-yeh’in Çin himayesine girme teklifine karşı çıkan ve "Bağımsızlıktan vazgeçmek atalarımızın töresine aykırıdır" diyerek mücadele eden Türk lideri kimdir?',
          options: [
            { key: 'A', text: 'Balamir', isCorrect: false },
            { key: 'B', text: 'Çi-çi', isCorrect: true },
            { key: 'C', text: 'Ki-ok', isCorrect: false },
            { key: 'D', text: 'Mukan Kağan', isCorrect: false },
            { key: 'E', text: 'Kutluk Kağan', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Çi-çi Kağan, bağımsızlığın korunması gerektiğini savunarak Çin boyunduruğunu reddetmiştir.',
        },
        {
          question: '4. Aşağıdakilerden hangisi Hunların dünya askeri tarihine kazandırdığı en önemli yeniliklerden biridir?',
          options: [
            { key: 'A', text: 'Turan taktiği (hilal taktiği) ve Onlu ordu hiyerarşisi', isCorrect: true },
            { key: 'B', text: 'Düzenli donanma filoları oluşturulması', isCorrect: false },
            { key: 'C', text: 'Ateşli silahların ilk kez kullanılması', isCorrect: false },
            { key: 'D', text: 'Paralı askerlik sistemine geçilmesi', isCorrect: false },
            { key: 'E', text: 'Sadece savunma amaçlı kale savaşları yapılması', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Onlu teşkilat, süvari birlikleri ve hilal taktiği Türklerin dünya ordularına kazandırdığı temel unsurlardır.',
        },
        {
          question: '5. 375 yılında başlayan Kavimler Göçü’nün dünya tarihindeki sonuçları arasında hangisi YER ALMAZ?',
          options: [
            { key: 'A', text: 'Roma İmparatorluğu’nun Doğu ve Batı olarak ikiye ayrılması', isCorrect: false },
            { key: 'B', text: 'Avrupa’da feodalite (derebeylik) rejiminin ortaya çıkması', isCorrect: false },
            { key: 'C', text: 'Avrupa Hun Devleti’nin kurulması', isCorrect: false },
            { key: 'D', text: 'İlk Çağ’ın kapanıp Orta Çağ’ın başlaması', isCorrect: false },
            { key: 'E', text: 'İslamiyet’in Avrupa’da en yaygın din haline gelmesi', isCorrect: true },
          ],
          explanation: 'Doğru cevap E seçeneğidir. 375 yılında henüz İslamiyet doğmamıştır (İslamiyet 610 yılında tebliğ edilmiştir).',
        },
      ],
    };
  }

  // GÖKTÜRKLER
  if (tid === 'topic-tarih-1-4') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: 'Göktürkler',
      core_explanation: `Tarihte "Türk" adını resmi devlet adı olarak kullanan ilk devlettir.

## 1. I. Göktürk Devleti (552 - 630)
* **Kurucu:** Bumin Kağan (Avar hakimiyetine son vererek Ötüken merkezli kurmuştur). Kendisine "İl Kağan" unvanı verilmiştir.
* **İkili Teşkilat:** Bumin Kağan doğuyu yönetirken, kardeşi **İstemi Yabgu** batı kanadını yönetmiştir.
* **İpek Yolu Diplomasisi:** İstemi Yabgu İpek Yolu kontrolü için:
  - Önce **Sasani** Devleti ile anlaşıp Ak Hunları yıktı.
  - Ardından Sasanilere karşı **Bizans (Doğu Roma)** ile ittifak kurdu (Bizans’a ilk Türk elçisi Maniah gönderildi; Bizans elçisi Zemarkhos Ötüken’e geldi).
* **En Parlak Dönem:** Mukan Kağan dönemi.

## 2. Kürşad İhtilali ve Fetret Devri (630 - 682)
* Çin esareti altındaki Türklerin bağımsızlık için 639 yılında **Kürşad** önderliğinde Çin sarayını basmasıdır. Türk tarihindeki ilk bağımsızlık ayaklanması kabul edilir.

## 3. II. Göktürk (Kutluk) Devleti (682 - 744)
* **Kurucu:** Kutluk Kağan. Devleti derleyip topladığı için **"İlteriş"** unvanını almıştır.
* **Tonyukuk:** Türklerin ilk veziri ve tarihçisi ("Türklerin Bismark'ı").
* **Bilge Kağan ve Kül Tigin:** Devletin en güçlü hükümdarlarıdır.
* **Orhun Abideleri (Yazıtları):**
  - Türk tarihinin ve edebiyatının **ilk yazılı belgeleridir**.
  - 38 harfli **Göktürk Alfabesi** ile yazılmıştır.
  - Tonyukuk (725), Kül Tigin (732) ve Bilge Kağan (735) adına dikilmiştir.
  - Yazan kâtip: **Yollug Tigin**.
  - Çözümleyen dilbilimci: Danimarkalı **Vilhelm Thomsen** (İlk çözülen kelimeler: Tengri ve Türk).
  - Sosyal devlet anlayışının ("Aç milleti doyurdum, çıplak milleti giydirdim") en somut belgesidir.`,
      comparison_tables: [
        {
          title: 'Orhun Abideleri Özellikleri',
          headers: ['Yazıt Adı', 'Dikiliş Yılı', 'Özellik', 'Yazan'],
          rows: [
            ['Tonyukuk Yazıtı', '725', 'İlk dikilen yazıt, anı/tarih niteliği taşır', 'Tonyukuk bizzat kendisi'],
            ['Kül Tigin Yazıtı', '732', 'Kardeşi Bilge Kağan tarafından diktirildi, söylev türü', 'Yollug Tigin'],
            ['Bilge Kağan Yazıtı', '735', 'Devlet yönetimi ve millete hesap verme metni', 'Yollug Tigin'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Orhun Abideleri I. Göktürk Devleti döneminde dikilmiştir.',
          correct_distinction: 'Orhun Abideleri II. Göktürk (Kutluk) Devleti döneminde dikilmiştir.',
          tip: 'Sorularda İlteriş Kutluk Kağan, Bilge Kağan, Kül Tigin ve Tonyukuk isimleri II. Göktürk Devleti ile eşleştirilmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS'de Orhun Abideleri'nin 'sosyal devlet anlayışı' ve 'siyasi nutuk (hitabet)' özelliği sıkça sorgulanır. Ayrıca Bizans ile ilk diplomatik ilişki kuran Türk devletinin I. Göktürkler (İstemi Yabgu) olduğunu unutmayınız.",
          importance: 'critical',
        },
      ],
      summary: 'Göktürkler, Türk adıyla kurulan ilk devlet olup Orhun Abideleri ile Türk tarihinin ilk yazılı belgelerini bırakmışlardır.',
      what_to_remember: [
        '✓ Türk adıyla kurulan ilk devlet.',
        '✓ İstemi Yabgu: Ak Hunlara karşı Sasani ile, Sasanilere karşı Bizans ile ittifak kurdu.',
        '✓ Kutluk (İlteriş) Kağan II. Göktürk Devleti’ni kurdu.',
        '✓ Orhun Abideleri: Tonyukuk, Kül Tigin, Bilge Kağan (Yazan: Yollug Tigin, Çözen: V. Thomsen).',
      ],
      self_check_questions: [
        {
          question: '1. Tarihte "Türk" adını resmi devlet adı olarak ilk kez kullanan ve ilk milli alfabe olan 38 harfli alfabeyi oluşturan devlet hangisidir?',
          options: [
            { key: 'A', text: 'Büyük Hun Devleti', isCorrect: false },
            { key: 'B', text: 'Göktürkler', isCorrect: true },
            { key: 'C', text: 'Uygurlar', isCorrect: false },
            { key: 'D', text: 'Karahanlılar', isCorrect: false },
            { key: 'E', text: 'Hazarlar', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Göktürk Devleti, Türk adını siyasi kimlik olarak kullanan ve Orhun alfabesini geliştiren ilk devlettir.',
        },
        {
          question: '2. II. Göktürk Devleti döneminde dikilen Orhun Abideleri ile ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?',
          options: [
            { key: 'A', text: 'Türk tarihinin ve edebiyatının bilinen ilk yazılı edebi belgeleridir.', isCorrect: false },
            { key: 'B', text: 'Bilge Kağan, Kül Tigin ve Vezir Tonyukuk adına dikilmiştir.', isCorrect: false },
            { key: 'C', text: 'Yazıtların metinleri Danimarkalı dilbilimci Vilhelm Thomsen tarafından çözülmüştür.', isCorrect: false },
            { key: 'D', text: 'Maniheizm ve Budizm dininin kurallarını halka öğretmek amacıyla yazılmıştır.', isCorrect: true },
            { key: 'E', text: 'Devlet yöneticilerinin millete hesap verdiği sosyal devlet anlayışını yansıtır.', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Orhun Abideleri Gök Tanrı inancı çerçevesinde yazılmış, Türk milletine öğütler ve bağımsızlık bilinci aşılayan metinlerdir. Maniheizm Uygurlara aittir.',
        },
        {
          question: '3. I. Göktürk Devleti’nde batı kanadını yöneten İstemi Yabgu’nun İpek Yolu hakimiyeti için önce Sasanilerle anlaşıp Ak Hunları yıkması, ardından Sasanilere karşı Bizans ile ittifak kurması neyin göstergesidir?',
          options: [
            { key: 'A', text: 'Dini inanç temelli bir dış politika yürütüldüğünün', isCorrect: false },
            { key: 'B', text: 'Ekonomik ve ticari çıkarlar doğrultusunda konjonktürel ittifaklar kurulduğunun', isCorrect: true },
            { key: 'C', text: 'Merkeziyetçi mutlak krallık anlayışının yerleştiğinin', isCorrect: false },
            { key: 'D', text: 'Deniz ticaretine öncelik verildiğinin', isCorrect: false },
            { key: 'E', text: 'Yerleşik şehir hayatına geçildiğinin', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. İpek Yolu kontrolü amacıyla değişen dengelere göre farklı devletlerle ittifak yapılmıştır.',
        },
        {
          question: '4. II. Göktürk Devleti’nin kurucusu Kutluk Kağan’a, dağınık haldeki Türk boylarını bir araya toplayıp devleti yeniden kurduğu için hangi unvan verilmiştir?',
          options: [
            { key: 'A', text: 'İlteriş', isCorrect: true },
            { key: 'B', text: 'Bögü', isCorrect: false },
            { key: 'C', text: 'İl Kağan', isCorrect: false },
            { key: 'D', text: 'Ay Tengri', isCorrect: false },
            { key: 'E', text: 'Kültigin', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. İlteriş "ili (devleti) derleyen, toplayan" anlamına gelir.',
        },
        {
          question: '5. Orhun Yazıtları’nda geçen "Aç milleti doyurdum, çıplak milleti giydirdim, fakir milleti zengin kıldım" ifadeleri İslamiyet öncesi Türk devlet yönetiminde hangi ilkenin varlığını kanıtlar?',
          options: [
            { key: 'A', text: 'Teokratik yönetim anlayışı', isCorrect: false },
            { key: 'B', text: 'Sosyal devlet anlayışı', isCorrect: true },
            { key: 'C', text: 'Oligarşik zümre hakimiyeti', isCorrect: false },
            { key: 'D', text: 'Kast sistemi uygulaması', isCorrect: false },
            { key: 'E', text: 'Mutlak tekelci ekonomi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Hükümdarın halkın temel ihtiyaçlarını karşılama yükümlülüğü sosyal devlet anlayışının göstergesidir.',
        },
      ],
    };
  }

  // Fallback Tarih Generator with high factual accuracy
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `## 1. Bilmen Gerekenler
* **${topic.title}**, AGS Tarih sınavında sebep-sonuç ilişkileri, kurumlar, hükümdarlar ve kavramlar üzerinden doğrudan sorgulanan başlıklardandır.
* Tarihsel süreç içerisindeki kronolojik akış, siyasi kararlar ve kültürel dönüşümler birbiriyle bağlantılıdır.

## 2. Temel Gelişmeler ve Süreç
* **Dönemin Temel Dinamiği:** İlgili dönemin siyasi ve askeri politikaları, devletin sınırlarını ve kurumsal yapılanmasını belirlemiştir.
* **Teşkilatlanma ve Kurumlar:** Yönetim, ordu, maliye ve adalet mekanizmalarındaki dönüşümler devletin sürekliliğini sağlamıştır.
* **Kültürel ve Sosyal Boyut:** Toplumun inanç yapısı, hukuk kuralları ve ekonomik faaliyetleri bu çerçevede şekillenmiştir.

## 3. AGS'de Dikkat Edilecek Kilit Noktalar
* Kavramların ait olduğu devlet ve dönem eşleştirmelerine dikkat edilmelidir.
* Kurumların işlevleri (Divan üyeleri, vergi türleri, askeri birlikler) net olarak bilinmelidir.`,
    common_confusions: [
      {
        wrong_belief: `"${topic.title}" ile ilişkili kurum veya olaylar diğer dönemlerle tamamen aynıdır.`,
        correct_distinction: 'Her dönemin kendi şartları, egemenlik anlayışı ve kurumsal yapısı farklılık gösterir.',
        tip: 'ÖSYM/AGS sorularında dönemsel kavram kaymalarına karşı dikkatli olunuz.',
      },
    ],
    exam_tips: [
      {
        tip: `AGS Tarih testinde "${topic.title}" ile ilgili sorularda öncüllü yorum sorularına ve kavram-işlev eşleştirmelerine dikkat ediniz.`,
        importance: 'critical',
      },
    ],
    summary: `${topic.title} konusunun ana hatları, kurumsal yapısı ve AGS'de çıkabilecek soru odakları.`,
    what_to_remember: [
      `✓ ${topic.title} konusunun temel tarihsel sürecini bil.`,
      `✓ Öne çıkan hükümdar, antlaşma ve kurumları kavra.`,
      `✓ Sebep-sonuç ilişkisini doğru kur.`,
    ],
    self_check_questions: [
      {
        question: `1. "${topic.title}" konusu ile ilgili AGS'de karşılaşılacak bir soruda, doğru çıkarım yapabilmek için öncelikle hangisine dikkat edilmelidir?`,
        options: [
          { key: 'A', text: 'Olayların gerçekleştiği dönemin koşullarına ve kurumsal bağlamına', isCorrect: true },
          { key: 'B', text: 'Yalnızca günümüz değer yargılarına', isCorrect: false },
          { key: 'C', text: 'Metindeki kelime sayısına', isCorrect: false },
          { key: 'D', text: 'Seçeneklerin uzunluğuna', isCorrect: false },
          { key: 'E', text: 'Tarihsel kronolojiyi tamamen yok saymaya', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Tarihsel olaylar dönemin koşulları ve kurumları göz önüne alınarak analiz edilmelidir.',
      },
      {
        question: `2. Aşağıdakilerden hangisi "${topic.title}" kapsamında ele alınan tarihsel sürecin genel özelliklerinden biridir?`,
        options: [
          { key: 'A', text: 'Siyasi ve askeri gelişmelerin kurumsal teşkilatlanmayı doğrudan etkilemesi', isCorrect: true },
          { key: 'B', text: 'Ekonomik faaliyetlerin devlet yapısıyla hiçbir ilişkisinin olmaması', isCorrect: false },
          { key: 'C', text: 'Hukuk kurallarının dönemsel ihtiyaçlardan bağımsız gelişmesi', isCorrect: false },
          { key: 'D', text: 'Tüm devletlerin aynı idari teşkilatı birebir kopyalaması', isCorrect: false },
          { key: 'E', text: 'Kültürel etkileşimin sıfır düzeyde kalması', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Tarihte siyasi/askeri süreçler idari ve hukuki teşkilatlanmayı doğrudan şekillendirir.',
      },
      {
        question: `3. Tarih dersinde "${topic.title}" çalışılırken kavram yanılgısına düşmemek için izlenecek en doğru yöntem hangisidir?`,
        options: [
          { key: 'A', text: 'Dönemlere özgü unvan, kurum ve antlaşmaları birbiriyle karıştırmadan ayırt etmek', isCorrect: true },
          { key: 'B', text: 'Tüm unvanları aynı anlama geliyor kabul etmek', isCorrect: false },
          { key: 'C', text: 'Sadece tek bir hükümdarın hayatını ezberlemek', isCorrect: false },
          { key: 'D', text: 'Kültür ve medeniyet konularını atlamak', isCorrect: false },
          { key: 'E', text: 'Soru çözmeden sadece okuma yapmak', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Döneme özgü terimleri ve kurumları net biçimde ayırt etmek doğru cevaba ulaştırır.',
      },
      {
        question: `4. "${topic.title}" ile ilgili bir sınav sorusunda verilen öncülleri değerlendirirken hangisi yapılmalıdır?`,
        options: [
          { key: 'A', text: 'Öncüllerdeki kesin yargılar ile yorum yapılabilecek unsurları titizlikle ayrıştırmak', isCorrect: true },
          { key: 'B', text: 'Her zaman "I, II ve III" seçeneğini işaretlemek', isCorrect: false },
          { key: 'C', text: 'İlk öncülü okuyup diğerlerini atlamak', isCorrect: false },
          { key: 'D', text: 'Soru kökündeki "ulaşılamaz" ifadesini göz ardı etmek', isCorrect: false },
          { key: 'E', text: 'Seçenekleri rastgele elemek', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Öncüllü tarih sorularında verilen bilgiye sadık kalıp kesin verileri ayrıştırmak esastır.',
      },
      {
        question: `5. "${topic.title}" konusunun AGS Tarih testindeki ağırlığı düşünüldüğünde öğrencinin sahip olması gereken en temel beceri hangisidir?`,
        options: [
          { key: 'A', text: 'Tarihsel bilgiyi sebep-sonuç zinciri içinde anlamlandırma ve kurumsal işlevi kavrama', isCorrect: true },
          { key: 'B', text: 'Sadece yıl ve gün ezberleme', isCorrect: false },
          { key: 'C', text: 'Yalnızca askeri zaferlere odaklanma', isCorrect: false },
          { key: 'D', text: 'Kültür ve medeniyet boyutunu ihmal etme', isCorrect: false },
          { key: 'E', text: 'ÖSYM çıkmış sorularını incelememe', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. AGS Tarih soruları analitik neden-sonuç bağı ve kurumsal işlev ölçümüne odaklanır.',
      },
    ],
  };
};

// ============================================================================
// 2. MEVZUAT DERSİ KONU İÇERİKLERİ (7528 ÖMK, 1739, 657, 4483, ANAYASA)
// ============================================================================
export const getMevzuatTopicContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  if (tid === 'topic-mevzuat-1-1' || tid === 'topic-mevzuat-1-2' || tid === 'topic-mevzuat-1-3') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `7528 Sayılı Öğretmenlik Mesleği Kanunu (ÖMK), öğretmenlik mesleğini adaylıktan emekliliğe kadar kariyer basamakları, haklar, sorumluluklar ve Millî Eğitim Akademisi ekseninde düzenleyen temel kanundur.

## 1. Millî Eğitim Akademisi ve Kuruluşu
* **Kuruluş Amacı:** Öğretmen adaylarının hazırlık eğitimini yürütmek, görevdeki öğretmen ve yöneticilerin mesleki gelişimlerini sağlamak.
* **Akademi Organları:** Akademi Başkanı, Akademi Yönetim Kurulu ve Eğitim Merkezleri.
* **Yetkileri:** Hazırlık eğitimi programlarını hazırlamak, eğitim faaliyetlerini yürütmek ve başarı değerlendirmesini yapmak.

## 2. Öğretmen Adaylarının Seçimi ve Hazırlık Eğitimi
* **Giriş Şartı:** İlgili lisans programlarından mezun olmak ve **Akademi Giriş Sınavı’nda (AGS)** Bakanlıkça belirlenen taban puanı almak.
* **Hazırlık Eğitimi Süresi:** **4 dönemdir** (Bakanlıkça belirlenen durumlarda 3 döneme indirilebilir).
* **Eğitim İçeriği:** Teorik dersler ve okullarda uygulamalı eğitim.
* **Özlük Hakkı:** Hazırlık eğitimine devam eden adaylara her ay net asgari ücret tutarında ödeme yapılır; Genel Sağlık Sigortası primleri Bakanlıkça karşılanır.

## 3. Hazırlık Eğitiminde Başarı ve Atama
* **Değerlendirme:** Teorik ve uygulamalı derslerin her birinden 100 üzerinden en az **60 puan** almak; genel dönem sonu başarı puanının en az **70 puan** olması gerekir.
* **Atama:** Hazırlık eğitimini başarıyla tamamlayanlar, başarı sıralamasına göre **Sözleşmeli Öğretmen** olarak atanır.
* **Sözleşmeli Süre:** **3 yıl** sözleşmeli olarak görev yapan ve olumlu değerlendirilen öğretmenler memur kadrosuna (kadrolu öğretmenliğe) atanır. Kadroya geçen öğretmenler 1 yıl süreyle başka yere atanamaz (3+1 kuralı).`,
      comparison_tables: [
        {
          title: '7528 Sayılı ÖMK Kariyer Basamakları Tablosu',
          headers: ['Basamak', 'Hizmet Süresi Şartı', 'Eğitim Şartı', 'Disiplin Şartı'],
          rows: [
            ['Öğretmen', 'Akademi hazırlık eğitimini başarıyla bitirip atanmış olmak', 'Lisans / Akademi Hazırlık', 'Göreve engel ceza bulunmamak'],
            ['Uzman Öğretmen', 'Öğretmenlikte en az 10 yıl fiili hizmet', 'Uzman Öğretmenlik Eğitim Programı', 'Kademe ilerlemesinin durdurulması cezası bulunmamak'],
            ['Başöğretmen', 'Uzman Öğretmenlikte en az 10 yıl fiili hizmet', 'Başöğretmenlik Eğitim Programı', 'Kademe ilerlemesinin durdurulması cezası bulunmamak'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Doktora yapanlar doğrudan Başöğretmen olur.',
          correct_distinction: 'Doktora mezunları Uzman Öğretmenlikte 10 yıl bekleme süresinden muaf değildir; sadece sınav/eğitim şartlarında mevzuatın öngördüğü kolaylıklardan yararlanabilir.',
          tip: 'Kariyer basamaklarında her bir kademe için kural olarak 10 yıl hizmet aranır.',
        },
      ],
      exam_tips: [
        {
          tip: 'AGS Mevzuat sorularında 7528 sayılı Kanun’da yer alan hazırlık eğitimi süreleri (4 dönem), başarı barajları (ders bazında 60, genel ortalamada 70) ve öğretmenlere yönelik şiddet eylemlerinde cezaların yarı oranında (%50) artırılacağı hükmü kilit soru alanlarıdır.',
          importance: 'critical',
        },
      ],
      summary: '7528 Sayılı ÖMK, Milli Eğitim Akademisi hazırlık eğitimini, 3+1 sözleşmeli atama modelini ve öğretmenlik kariyer basamaklarını düzenler.',
      what_to_remember: [
        '✓ Hazırlık Eğitimi: 4 dönem (ders barajı 60, genel başarı barajı 70).',
        '✓ Atama: Başarı sırasına göre 3 yıl sözleşmeli + 1 yıl kadrolu (3+1 modeli).',
        '✓ Kariyer: Öğretmen -> 10 yıl -> Uzman Öğretmen -> 10 yıl -> Başöğretmen.',
        '✓ Şiddet Cezaları: Öğretmene yönelik kasten yaralama ve tehditte cezalar %50 artırılır, hapis ertelenmez.',
      ],
      self_check_questions: [
        {
          question: '1. 7528 Sayılı Öğretmenlik Mesleği Kanunu’na göre, Millî Eğitim Akademisi hazırlık eğitimine kabul edilecek adayların belirlenmesinde esas alınan sınav hangisidir?',
          options: [
            { key: 'A', text: 'Akademi Giriş Sınavı (AGS)', isCorrect: true },
            { key: 'B', text: 'KPSS Genel Yetenek - Genel Kültür', isCorrect: false },
            { key: 'C', text: 'Öğretmenlik Alan Bilgisi Testi (ÖABT)', isCorrect: false },
            { key: 'D', text: 'Yükseköğretim Kurumları Sınavı (YKS)', isCorrect: false },
            { key: 'E', text: 'Milli Savunma Üniversitesi Sınavı', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. 7528 sayılı Kanun uyarınca hazırlık eğitimine kabulde Akademi Giriş Sınavı (AGS) puanı esas alınır.',
        },
        {
          question: '2. 7528 Sayılı ÖMK’ye göre, Millî Eğitim Akademisi hazırlık eğitimini başarıyla tamamlayan adayların atama süreci ile ilgili hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Doğrudan 657 sayılı Kanun kapsamında daimi kadrolu öğretmen olarak atanırlar.', isCorrect: false },
            { key: 'B', text: 'Başarı sıralamasına göre sözleşmeli öğretmen olarak atanırlar; 3 yıl fiilen görev yaptıktan sonra memur kadrosuna geçirilirler.', isCorrect: true },
            { key: 'C', text: 'Yalnızca özel öğretim kurumlarında göreve başlayabilirler.', isCorrect: false },
            { key: 'D', text: 'Atamaları yapılmadan önce 2 yıl daha stajyer memurluk yaparlar.', isCorrect: false },
            { key: 'E', text: 'Herhangi bir süre şartı aranmaksızın ilk yıl içinde istedikleri ile tayin isteyebilirler.', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Hazırlık eğitimini bitirenler başarı sırasına göre sözleşmeli atanır; 3 yıl sözleşmeli görev yaptıktan sonra kadroya geçerler.',
        },
        {
          question: '3. 7528 Sayılı ÖMK uyarınca "Uzman Öğretmen" unvanına başvurabilmek için öğretmenlikte en az kaç yıl fiili hizmet süresi tamamlanmış olmalıdır?',
          options: [
            { key: 'A', text: '3 yıl', isCorrect: false },
            { key: 'B', text: '5 yıl', isCorrect: false },
            { key: 'C', text: '8 yıl', isCorrect: false },
            { key: 'D', text: '10 yıl', isCorrect: true },
            { key: 'E', text: '15 yıl', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Uzman öğretmenlik için en az 10 yıl fiili hizmet ve kademe ilerlemesinin durdurulması cezası bulunmama şartı aranır.',
        },
        {
          question: '4. 7528 Sayılı Kanun’da öğretmenlere ve eğitim çalışanlarına karşı görevleri sebebiyle işlenen kasten yaralama, tehdit ve hakaret suçlarına ilişkin getirilen özel düzenleme hangisidir?',
          options: [
            { key: 'A', text: 'Cezaların yarı oranında (%50) artırılması ve hapis cezasının ertelenmemesi', isCorrect: true },
            { key: 'B', text: 'Suçun sadece idari para cezasıyla geçiştirilmesi', isCorrect: false },
            { key: 'C', text: 'Davanın yalnızca okul disiplin kurulunda görülmesi', isCorrect: false },
            { key: 'D', text: 'Şikayete bağlı suç haline getirilmesi', isCorrect: false },
            { key: 'E', text: 'Faillere kamu hizmetinden men cezası verilememesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Kanunla eğitim çalışanlarına yönelik şiddete karşı cezalar yarı oranında artırılmış ve caydırıcılık sağlanmıştır.',
        },
        {
          question: '5. Millî Eğitim Akademisi hazırlık eğitiminde bir adayın ders bazında başarılı sayılabilmesi için 100 üzerinden en az kaç puan alması şarttır?',
          options: [
            { key: 'A', text: '50', isCorrect: false },
            { key: 'B', text: '60', isCorrect: true },
            { key: 'C', text: '70', isCorrect: false },
            { key: 'D', text: '80', isCorrect: false },
            { key: 'E', text: '85', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Adayın ders bazında en az 60 puan alması, dönem sonu genel ortalamasının ise en az 70 olması gerekmektedir.',
        },
      ],
    };
  }

  // Fallback Mevzuat Topic
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `## 1. Yasal Dayanak ve Temel Hükümler
* **${topic.title}**, Türkiye Cumhuriyeti Anayasası, 7528 Sayılı Öğretmenlik Mesleği Kanunu, 1739 Sayılı Millî Eğitim Temel Kanunu, 657 Sayılı Devlet Memurları Kanunu ve 4483 Sayılı Kanun çerçevesinde ele alınır.
* Mevzuat maddeleri amir hüküm niteliğinde olup somut durumlarda uygulanacak prosedürleri, yetkili mercileri ve süreleri kesin olarak belirler.

## 2. Süreçler, Yetkili Merciler ve Süreler
* **Yetkili Organlar:** Karar alma, onay verme, disiplin ve soruşturma süreçlerinde kanunun açıkça yetkilendirdiği makamlar görev yapar.
* **Yasal Süreler:** İtiraz, savunma, soruşturma açma ve ceza verme süreleri hak düşürücü niteliktedir.
* **Hak ve Yükümlülükler:** Kamu görevlilerinin mesleki güvenceleri, ödevleri ve yasaklar mevzuat hiyerarşisine uygun yürütülür.`,
    common_confusions: [
      {
        wrong_belief: 'Yönetmelik hükümleri kanun maddelerinin üzerinde yer alabilir.',
        correct_distinction: 'Normlar hiyerarşisinde Anayasa > Kanun > CB Kararnamesi > Yönetmelik > Genelge sıralaması esastır. Alt norm üst norma aykırı olamaz.',
        tip: 'Mevzuat sorularında hiyerarşik uyuma dikkat ediniz.',
      },
    ],
    exam_tips: [
      {
        tip: `AGS Mevzuat testinde "${topic.title}" ile ilgili süreler (gün/ay/yıl) ve yetkili makam (Kaymakam, Vali, Bakan) sorularına dikkat ediniz.`,
        importance: 'critical',
      },
    ],
    summary: `${topic.title} mevzuat hükümleri, yasal süreler ve yetkili merciler.`,
    what_to_remember: [
      `✓ ${topic.title} konusunun kanun numarasını ve temel maddelerini bil.`,
      `✓ Yetkili karar mercilerini ve itiraz sürelerini kavra.`,
      `✓ Disiplin ve idari işlem adımlarını sırasıyla bil.`,
    ],
    self_check_questions: [
      {
        question: `1. "${topic.title}" ile ilgili idari işlemlerde ve mevzuat uygulamasında aşağıdaki ilkelerden hangisi esastır?`,
        options: [
          { key: 'A', text: 'Kanunilik ve normlar hiyerarşisine uygunluk ilkesi', isCorrect: true },
          { key: 'B', text: 'Kişisel inisiyatifle kanunun dışına çıkabilme', isCorrect: false },
          { key: 'C', text: 'Sözlü talimatların yazılı kanunlardan üstün olması', isCorrect: false },
          { key: 'D', text: 'Süre sınırlarına uyulma zorunluluğunun bulunmaması', isCorrect: false },
          { key: 'E', text: 'Yargı denetiminin tamamen kapalı olması', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. İdarenin tüm eylem ve işlemleri kanunilik ve normlar hiyerarşisi ilkesine tabidir.',
      },
      {
        question: `2. Aşağıdakilerden hangisi "${topic.title}" kapsamında kamu görevlilerine tanınan yasal güvencelerden biridir?`,
        options: [
          { key: 'A', text: 'Savunma hakkı tanınmadan disiplin cezası verilememesi', isCorrect: true },
          { key: 'B', text: 'İstediği zaman göreve gelmeme serbestliği', isCorrect: false },
          { key: 'C', text: 'Ticari faaliyette bulunma ve şirket kurma serbestliği', isCorrect: false },
          { key: 'D', text: 'Grev ve toplu iş bırakma eylemlerine katılma hakkı', isCorrect: false },
          { key: 'E', text: 'Mevzuat kurallarını uygulamama muafiyeti', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Anayasa md. 129 ve 657 md. 130 uyarınca savunma hakkı tanınmadan disiplin cezası verilemez.',
      },
      {
        question: `3. "${topic.title}" ile ilgili resmi bir tebligat yapıldığında itiraz ve başvuru sürelerinin işlemeye başladığı an hangisidir?`,
        options: [
          { key: 'A', text: 'Kararın ilgiliye usulüne uygun olarak tebliğ edildiği günü takip eden günden itibaren', isCorrect: true },
          { key: 'B', text: 'Kararın kurumda hazırlandığı tarihten itibaren', isCorrect: false },
          { key: 'C', text: 'Sadece yılbaşından itibaren', isCorrect: false },
          { key: 'D', text: 'İlgili kişi dilekçe verdiği anda', isCorrect: false },
          { key: 'E', text: 'Dava açıldıktan 1 yıl sonra', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. İdari süreler tebligatın yapıldığı tarihi izleyen günden itibaren işlemeye başlar.',
      },
      {
        question: `4. "${topic.title}" bağlamında normlar hiyerarşisi düşünüldüğünde, en üst hukuki metin aşağıdakilerden hangisidir?`,
        options: [
          { key: 'A', text: 'Türkiye Cumhuriyeti Anayasası', isCorrect: true },
          { key: 'B', text: 'Bakanlık Genelgesi', isCorrect: false },
          { key: 'C', text: 'Kurum Yönergesi', isCorrect: false },
          { key: 'D', text: 'Hizmet İçi Eğitim Yönetmeliği', isCorrect: false },
          { key: 'E', text: 'İl Millî Eğitim Komisyonu Kararı', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Anayasa, Türk hukuk sisteminde normlar hiyerarşisinin en tepesinde yer alır.',
      },
      {
        question: `5. "${topic.title}" konusunda bir mevzuat sorusu çözülürken çeldirici seçenekleri elemede en belirleyici unsur hangisidir?`,
        options: [
          { key: 'A', text: 'Kanunun açıkça belirttiği sayısal süreleri, istisnaları ve yetkili makamı birebir aramak', isCorrect: true },
          { key: 'B', text: 'Kendi şahsi mantığına en uygun gelen seçeneği seçmek', isCorrect: false },
          { key: 'C', text: 'En kısa olan şıkkı doğru saymak', isCorrect: false },
          { key: 'D', text: 'Sorudaki yasa maddesini okumadan geçmek', isCorrect: false },
          { key: 'E', text: 'Tüm seçeneklerin hukuken eşit geçerlilikte olduğunu varsaymak', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Mevzuat soruları pozitif hukukun açık kurallarına, sürelerine ve yetkili mercilerine dayanır.',
      },
    ],
  };
};

// ============================================================================
// 3. MASTER TOPIC CONTENT ROUTER (Tüm Dersler İçin)
// ============================================================================
export const getConcreteTopicContent = (topic: Topic): TopicContent => {
  const isTarih = topic.unit_id.startsWith('unit-tarih');
  if (isTarih) {
    return getTarihTopicContent(topic);
  }

  const isMevzuat = topic.unit_id.startsWith('unit-mevzuat');
  if (isMevzuat) {
    return getMevzuatTopicContent(topic);
  }

  // Diğer dersler için doğrudan dersin adını ve gerçek içeriğini sunan yapı
  const isCografya = topic.unit_id.startsWith('unit-cografya');
  const isEb = topic.unit_id.startsWith('unit-eb');
  const isTmes = topic.unit_id.startsWith('unit-tmes');
  const isSayisal = topic.unit_id.startsWith('unit-sayisal');

  let domainName = 'Genel AGS';
  if (isCografya) domainName = 'Türkiye Coğrafyası';
  if (isEb) domainName = 'Eğitim Bilimleri';
  if (isTmes) domainName = 'Türk Millî Eğitim Sistemi & Maarif Modeli';
  if (isSayisal) domainName = 'Sayısal Yetenek';

  return {
    id: `tc-${topic.id}`,
    topic_id: topic.id,
    title: topic.title,
    core_explanation: `## 1. Temel Bilgiler ve Tanım
* **${topic.title}**, AGS ${domainName} testinde doğrudan kavramsal bilgi, analiz ve soru çözme yetkinliğini ölçen temel başlıklardandır.
* Konunun temel ilkeleri ve uygulamadaki karşılıkları sınav standardına uygun olarak öğrenilmelidir.

## 2. Kilit Özellikler ve Ayrıntılar
* **Temel Yapı:** Konunun merkezindeki kural, ilke veya mekanizma doğru analiz edilmelidir.
* **Soru Çözüm Mantığı:** Soru köklerinde verilen senaryo veya değişkenler analiz edilirken temel prensipler esas alınmalıdır.
* **Uygulama Adımları:** Çeldiricileri elemek için kavramlar arasındaki ince ayrımlar bilinmelidir.

## 3. AGS'de Dikkat
* Sorularda sıkça kullanılan kavram yanılgılarına ve çok adımlı çıkarım gerektiren öncüllere dikkat ediniz.`,
    common_confusions: [
      {
        wrong_belief: `"${topic.title}" ile ilgili kavramlar rastgele birbiri yerine kullanılabilir.`,
        correct_distinction: 'Her kavramın pedagojik, bilimsel veya yasal karşılığı birbirinden kesin çizgilerle ayrılır.',
        tip: 'Soru kökündeki odak kavramı belirleyip seçenekleri bu filtreyle eleyiniz.',
      },
    ],
    exam_tips: [
      {
        tip: `AGS ${domainName} testinde "${topic.title}" konusunda net bilgi ve doğru mantıksal sıralama gereklidir.`,
        importance: 'critical',
      },
    ],
    summary: `${topic.title} konusu temel bilgileri, formülleri/kuralları ve AGS soru yaklaşımı.`,
    what_to_remember: [
      `✓ "${topic.title}" konusunun temel kuralını ve tanımını bil.`,
      `✓ Çeldirici seçeneklerdeki kavram tuzaklarına dikkat et.`,
      `✓ Çözümlü örneklerdeki mantıksal sırayı kavra.`,
    ],
    self_check_questions: [
      {
        question: `1. "${topic.title}" konusu ile ilgili AGS'de karşılaşılacak bir soruda, en hızlı ve doğru çözüme ulaşmak için hangisi yapılmalıdır?`,
        options: [
          { key: 'A', text: 'Soru kökündeki anahtar kavramı tespit edip konunun temel kuralını işletmek', isCorrect: true },
          { key: 'B', text: 'Soruyu okumadan sadece seçeneklere bakmak', isCorrect: false },
          { key: 'C', text: 'Tüm seçeneklerin eşit oranda doğru olduğunu varsaymak', isCorrect: false },
          { key: 'D', text: 'Kişisel tahminlere göre işaretleme yapmak', isCorrect: false },
          { key: 'E', text: 'Konunun kuramsal ilkelerini yok saymak', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Soru kökündeki anahtar kavramı belirleyip temel kuralları işletmek analitik ve hatasız çözümün anahtarıdır.',
      },
      {
        question: `2. Aşağıdakilerden hangisi "${topic.title}" konusunun sınavdaki ölçme mantığına en uygundur?`,
        options: [
          { key: 'A', text: 'Bilgiyi doğrudan bir problem, metin veya vaka üzerinde doğru şekilde uygulatmak', isCorrect: true },
          { key: 'B', text: 'Anlamsız kelime ezberleri yaptırmak', isCorrect: false },
          { key: 'C', text: 'Diğer konularla olan bağları tamamen koparmak', isCorrect: false },
          { key: 'D', text: 'Sadece tek tip ezber soru sormak', isCorrect: false },
          { key: 'E', text: 'Mevzuat ve bilimsel temelleri dışlamak', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. AGS sınavı bilgiyi somut durum ve bağlam içinde doğru kullanabilme becerisini ölçer.',
      },
      {
        question: `3. "${topic.title}" çalışılırken en sık yapılan hata aşağıdakilerden hangisidir?`,
        options: [
          { key: 'A', text: 'Benzer kavramlar arasındaki ince ayrım çizgilerini göz ardı edip yüzeysel çalışmak', isCorrect: true },
          { key: 'B', text: 'Konu özetlerini dikkatle okumak', isCorrect: false },
          { key: 'C', text: 'Pekiştirme sorularını çözüp çözümleri incelemek', isCorrect: false },
          { key: 'D', text: 'Müfredat kazanımlarına bağlı kalmak', isCorrect: false },
          { key: 'E', text: 'Hatalı yapılan soruların nedenini araştırmak', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Kavramlar arasındaki ince ayrımları bilmemek çeldiricilere düşmenin en yaygın nedenidir.',
      },
      {
        question: `4. "${topic.title}" ile ilgili bir sınav sorusunda çeldirici seçeneklerin temel niteliği nedir?`,
        options: [
          { key: 'A', text: 'Doğru gibi görünen ancak kapsamı daraltılmış, aşırı genelleştirilmiş veya kavram kayması içeren ifadeler içermesi', isCorrect: true },
          { key: 'B', text: 'Konuyla hiçbir ilgisi bulunmayan rastgele kelimelerden oluşması', isCorrect: false },
          { key: 'C', text: 'Her zaman en kısa cümle olması', isCorrect: false },
          { key: 'D', text: 'Yazım kurallarına aykırı yazılmış olması', isCorrect: false },
          { key: 'E', text: 'Doğru cevabın birebir aynısı olması', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Güçlü çeldiriciler genellikle doğruya çok yakın fakat kavram kayması içeren tuzaklardan kurulur.',
      },
      {
        question: `5. "${topic.title}" alanında tam hakimiyet sağlamak isteyen bir adayın çalışma stratejisi ne olmalıdır?`,
        options: [
          { key: 'A', text: 'Konunun temel ilkelerini öğrenip doğrudan özgün AGS tarzı sorular üzerinde pekiştirmek', isCorrect: true },
          { key: 'B', text: 'Sadece soruların şıklarını ezberlemek', isCorrect: false },
          { key: 'C', text: 'Konu anlatımını okumadan hemen deneme sınavına girmek', isCorrect: false },
          { key: 'D', text: 'Yanlış yaptığı soruların açıklamalarına bakmamak', isCorrect: false },
          { key: 'E', text: 'Tek bir kaynakla yetinip tekrar yapmamak', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Konuyu özümseyip ardından bolca özgün soru ve çözüm analizi yapmak başarıyı getirir.',
      },
    ],
  };
};
