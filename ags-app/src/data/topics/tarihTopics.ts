import type { Topic, TopicContent } from '../../types/database';

export const getTarihSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // =========================================================================
  // 1. ÜNİTE: OSMANLI ÖNCESİ TÜRK DEVLETLERİ TARİHİ
  // =========================================================================

  // 1.1 İlk Türk Toplulukları, Kültür Merkezleri ve İskitler
  if (tid === 'topic-tarih-1-1') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `## 1. Orta Asya Kültür Merkezleri
* **Anav Kültürü:** Orta Asya’nın bilinen **en eski** kültürüdür (Aşkabat yakınları). At ilk kez burada evcilleştirilmiştir.
* **Afanasyevo Kültürü:** Orta Asya’da **Türklere ait en eski** kültür merkezidir (Altay-Sayan dağları).
* **Andronovo Kültürü:** Türklerin öncüsü kabul edilen, en geniş alana yayılmış tunç kültürüdür.
* **Karasuk Kültürü:** Demirin ilk kez işlendiği ve dört tekerlekli arabanın kullanıldığı kültür merkezidir.
* **Tagar Kültürü:** Orta Asya’nın **en gelişmiş** kültür merkezidir (Hayvan üslubu sanatı).

## 2. Türk Adının Anlamı
* **Kaşgarlı Mahmud (Dîvânü Lugâti't-Türk):** Olgunluk çağı
* **Ziya Gökalp:** Töreli, kanun ve nizam sahibi
* **Çin kaynakları:** Miğfer
* **Uygur metinleri:** Güç, kuvvet, kudret
* **A. Wambery:** Türemek, çoğalmak

## 3. Türk Göçlerinin Nedenleri ve Sonuçları
* **Coğrafi / Ekonomik Nedenler:** Otlak ve meraların yetersizliği, şiddetli kuraklık ve kış şartları, hayvan hastalıkları (kıran), hızlı nüfus artışı.
* **Siyasi / Sosyal Nedenler:** Boylar arası hakimiyet mücadeleleri, Çin ve Kitan baskısı karşısında **bağımsız yaşama arzusu** (İstiklal tutkusu).
* **Sonuçlar:** Türk kültürü Asya, Avrupa ve Ön Asya'ya yayılmış; yeni devletler kurulmuş, dünya askeri ve kültürel yapısı etkilenmiş; Türk tarihini tek bir coğrafyada incelemek zorlaşmıştır.

## 4. İskitler (Sakalar) — Bozkırın Kuyumcuları
* Tarihte bilinen **ilk Türk topluluğudur** (Devlet teşkilatı kurmamışlardır).
* En önemli hükümdarı **Alp Er Tunga**dır (İran destanı Şehname'de **Afrasiyab** olarak geçer).
* Tarihte bilinen ilk kadın hükümdar **Tomris Hatun**dur.
* **Bozkırın Kuyumcuları** unvanını almışlardır; altın ve gümüş işlemede ileri gitmişlerdir.
* Atı evcilleştirip savaşa uyarlamış, **üzengiyi** ilk kez icat etmişlerdir.
* Destanları: **Alp Er Tunga Destanı** ve **Şu Destanı**.`,
      comparison_tables: [
        {
          title: 'Orta Asya Kültür Merkezleri Karşılaştırma Matrisi',
          headers: ['Kültür Merkezi', 'Tarihsel Önemi', 'AGS Sınav Ayırt Edicisi'],
          rows: [
            ['Anav', 'Orta Asya’nın en eski kültürü', 'Atın ilk evcilleştirildiği yer (Genel Asya)'],
            ['Afanasyevo', 'Türklere ait en eski kültür', 'Altay bölgesinde Türk proto-tipi'],
            ['Karasuk', 'Demirin ilk işlendiği kültür', 'Dört tekerlekli araba ve demir kılıçlar'],
            ['Tagar', 'En gelişmiş ve son kültür', 'Hayvan üslubu sanatının doruk noktası'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'İskitler tarihte kurulan ilk Türk devletidir.',
          correct_distinction: 'İskitler bilinen ilk Türk TOPLULUĞUDUR. İlk teşkilatlı Türk DEVLETİ ise Asya (Büyük) Hun Devleti’dir.',
          tip: 'Soruda "ilk Türk topluluğu" denirse İskitler; "ilk teşkilatlı Türk devleti" denirse Hunlar işaretlenmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS'de İskitlerin üzengiyi bulması, 'Bozkırın Kuyumcuları' unvanı, Tomris Hatun ve Alp Er Tunga'nın Afrasiyab ismi sıkça sorulmaktadır.",
          importance: 'critical',
        },
      ],
      summary: 'İslamiyet öncesi Türk tarihinde kültür merkezleri, göçlerin nedenleri ve ilk Türk topluluğu olan İskitler temel bilgi alanıdır.',
      what_to_remember: [
        '✓ En eski Türk kültürü: Afanasyevo | En gelişmiş: Tagar',
        '✓ Kaşgarlı Mahmud’a göre Türk: Olgunluk çağı | Ziya Gökalp: Töreli',
        '✓ İlk Türk topluluğu: İskitler (Alp Er Tunga, Tomris Hatun, Bozkırın Kuyumcuları, Üzengi).',
      ],
      self_check_questions: [
        {
          question: '1. Firdevsi’nin "Şehname" adlı eserinde "Afrasiyab" olarak geçen ve tarihte ilk kez üzengiyi kullanarak ata binen ilk Türk topluluğu hangisidir?',
          options: [
            { key: 'A', text: 'Hunlar', isCorrect: false },
            { key: 'B', text: 'İskitler (Sakalar)', isCorrect: true },
            { key: 'C', text: 'Göktürkler', isCorrect: false },
            { key: 'D', text: 'Uygurlar', isCorrect: false },
            { key: 'E', text: 'Hazarlar', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. İskitlerin büyük hükümdarı Alp Er Tunga, Şehname’de Afrasiyab adıyla geçer.',
        },
        {
          question: '2. Orta Asya arkeolojik kazılarında ortaya çıkarılan kültür merkezlerinden hangisi "Türklere ait en eski kültür merkezi" olarak kabul edilir?',
          options: [
            { key: 'A', text: 'Anav', isCorrect: false },
            { key: 'B', text: 'Afanasyevo', isCorrect: true },
            { key: 'C', text: 'Tagar', isCorrect: false },
            { key: 'D', text: 'Karasuk', isCorrect: false },
            { key: 'E', text: 'Andronovo', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Anav genel Orta Asya’nın en eskisi, Afanasyevo ise Türklere ait en eski kültür merkezidir.',
        },
        {
          question: '3. İslamiyet öncesi Türk göçlerinin siyasi ve sosyal nedenleri arasında aşağıdakilerden hangisi GÖSTERİLEMEZ?',
          options: [
            { key: 'A', text: 'Çin ve Kitan baskısı karşısında bağımsız yaşama arzusu', isCorrect: false },
            { key: 'B', text: 'Boylar arasında yaşanan hakimiyet mücadeleleri', isCorrect: false },
            { key: 'C', text: 'Hızlı nüfus artışı ve meraların daralması', isCorrect: false },
            { key: 'D', text: 'İslam dinini yayma (gaza ve cihat) düşüncesi', isCorrect: true },
            { key: 'E', text: 'Salgın hayvan hastalıkları ve şiddetli kuraklık', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. İslamiyet öncesi dönemde gaza ve cihat anlayışı söz konusu değildir; bu kavram İslamiyet’in kabulüyle başlamıştır.',
        },
        {
          question: '4. Türk adının anlamı üzerine yapılan araştırmalarda "Töreli, kanun ve nizam sahibi" tanımını yapan Türk düşünürü kimdir?',
          options: [
            { key: 'A', text: 'Kaşgarlı Mahmud', isCorrect: false },
            { key: 'B', text: 'Ziya Gökalp', isCorrect: true },
            { key: 'C', text: 'Yusuf Has Hacip', isCorrect: false },
            { key: 'D', text: 'İsmail Gaspıralı', isCorrect: false },
            { key: 'E', text: 'Ahmet Yesevi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Ziya Gökalp Türk adını "töreli / nizam sahibi" olarak tanımlamıştır.',
        },
        {
          question: '5. İskitlerin sanatında altın ve gümüş işlemeciliğinin son derece ileri düzeyde olması nedeniyle tarihçiler tarafından onlara verilen unvan hangisidir?',
          options: [
            { key: 'A', text: 'Bozkırın Efendileri', isCorrect: false },
            { key: 'B', text: 'Gök Tanrı’nın Çocukları', isCorrect: false },
            { key: 'C', text: 'Bozkırın Kuyumcuları', isCorrect: true },
            { key: 'D', text: 'İpek Yolunun Muhafızları', isCorrect: false },
            { key: 'E', text: 'Demir Ustaları', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. İskitler eşsiz maden işlemecilikleri nedeniyle "Bozkırın Kuyumcuları" olarak adlandırılır.',
        },
      ],
    };
  }

  // 1.2 Büyük Hun Devleti ve Kavimler Göçü
  if (tid === 'topic-tarih-1-2') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `## 1. Asya (Büyük) Hun Devleti
* Tarihte bilinen **ilk teşkilatlı Türk devletidir**.
* Merkezi **Ötüken**dir (Kutlu vatan).
* Bilinen ilk hükümdarı **Teoman**dır.
* **Mete Han Dönemi (En Parlak Dönem):**
  * MÖ 209'da tahta çıkışı, **Türk Kara Kuvvetleri'nin kuruluşu** kabul edilir.
  * Dünya askeri tarihine **Onlu Sistemi** kazandırmıştır (Tümen, tabur, bölük, onluk).
  * İlk kez **Islıklı Ok** (Çavuş Oku) kullanılmıştır.
  * Orta Asya’daki tüm Türk boylarını tek bir bayrak altında toplayan ilk hükümdardır.
  * Çin’i Pai-Teng Savaşı’nda yenilgiye uğratmış ancak Türklerin kalabalık Çin nüfusu içinde asimile olmasını engellemek için Çin’e yerleşmemiş, Çin’i sadece **vergiye bağlamıştır**.
  * İlk kez **vatan sevgisi** bilincini ortaya koymuştur (Toprak isteyen Tunguzlara karşı tavrı).

## 2. Kavimler Göçü (375)
* Hunların Balamir öncülüğünde batıya ilerlemesiyle kavimleri yerlerinden oynatması olayıdır.
* **Sonuçları:**
  1. Roma İmparatorluğu ikiye ayrıldı (395), Batı Roma yıkıldı (476).
  2. Avrupa’da **feodalite (derebeylik)** ve **skolastik düşünce** ortaya çıktı; Katolik Kilisesi güçlendi.
  3. Günümüz Avrupa milletlerinin (Alman, Fransız, İngiliz, İspanyol) temelleri atıldı.
  4. İlk Çağ sona erdi, **Orta Çağ başladı**.
  5. Avrupa’da **Avrupa Hun Devleti** kuruldu.

## 3. Avrupa Hun Devleti ve Attila
* Kurucusu **Balamir**dir. Uldız döneminde Bizans’a karşı "Güneşin battığı yere kadar her yeri fethederim" politikası izlendi.
* **Attila Dönemi (En Parlak Dönem):**
  * Bizans ile **Margos** ve **Anatolius** Antlaşmaları yapılarak Bizans ağır vergiye bağlandı.
  * Batı Roma üzerine **Galya** ve **İtalya** Seferleri düzenlendi.
  * Avrupalılar Attila’ya **Tanrı’nın Kırbacı (Flagellum Dei)** ve Almanların Nibelungen Destanı'nda **Etzel** adını vermişlerdir.`,
      comparison_tables: [
        {
          title: 'Mete Han ile Attila Politikalarının Karşılaştırması',
          headers: ['Özellik', 'Mete Han (Asya Hun)', 'Attila (Avrupa Hun)'],
          rows: [
            ['Dış Politika Hedefi', 'Çin’i vergiye bağlamak, asimilasyonu önlemek', 'Doğu ve Batı Roma’yı baskı altına alıp vergiye bağlamak'],
            ['Askerî Reform', 'Onlu Teşkilat ve Islıklı Ok', 'Bozkır Süvari Taktiğini Avrupa’ya taşıma'],
            ['Tarihsel Unvan', 'Şanyü / Tanhu', 'Tanrı’nın Kırbacı / Etzel'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Mete Han Çin’i fethettikten sonra Türk halkını Çin topraklarına yerleştirmiştir.',
          correct_distinction: 'Mete Han Çin’i mağlup etmesine rağmen asimilasyon (milli benliği kaybetme) tehlikesine karşı Çin’e yerleşmemiş, yalnızca vergiye bağlamıştır.',
          tip: 'AGS sorularında bu durum "Milli kimliği koruma politikası" olarak sorgulanır.',
        },
      ],
      exam_tips: [
        {
          tip: "MÖ 209 Mete Han'ın tahta çıkışı TSK Kara Kuvvetleri'nin kuruluşudur. Kavimler Göçü'nün sonuçları (İlk Çağ kapanışı, feodalite, kilise gücü) sınav klasiğidir.",
          importance: 'critical',
        },
      ],
      summary: 'Asya Hunları ilk teşkilatlı Türk devleti, onlu sistemin kurucusu ve Kavimler Göçü’nü başlatarak dünya tarihini dönüştüren güçtür.',
      what_to_remember: [
        '✓ İlk teşkilatlı Türk devleti: Büyük Hun (Merkez: Ötüken)',
        '✓ Onlu Sistem ve TSK kuruluşu: MÖ 209 Mete Han',
        '✓ Çin’i vergiye bağlama nedeni: Asimilasyonu önlemek',
        '✓ Attila: Tanrı’nın Kırbacı, Etzel, Margos ve Anatolius Antlaşmaları.',
      ],
      self_check_questions: [
        {
          question: '1. Asya Hun Hükümdarı Mete Han’ın Çin’i mağlup etmesine rağmen Çin topraklarına yerleşmeyip sadece vergiye bağlamasının temel gerekçesi nedir?',
          options: [
            { key: 'A', text: 'Çin ordusundan çekinmesi', isCorrect: false },
            { key: 'B', text: 'Türk nüfusunun Çin nüfusu içinde asimile olmasını (milli kimliğini kaybetmesini) engellemek', isCorrect: true },
            { key: 'C', text: 'Ekonomik gelir elde etmek istememesi', isCorrect: false },
            { key: 'D', text: 'İpek Yolu ticaretini sonlandırmak istemesi', isCorrect: false },
            { key: 'E', text: 'Çin mimarisini benimsemek istemesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Mete Han, kalabalık Çin nüfusu içinde Türklerin benliğini kaybetmesinden endişe ettiği için yerleşmeyi reddetmiştir.',
        },
        {
          question: '2. 375 yılında gerçekleşen Kavimler Göçü’nün Avrupa’daki siyasi ve sosyal sonuçları arasında aşağıdakilerden hangisi YER ALMAZ?',
          options: [
            { key: 'A', text: 'Feodalite (derebeylik) rejiminin ortaya çıkması', isCorrect: false },
            { key: 'B', text: 'Skolastik düşüncenin ve kilise otoritesinin güçlenmesi', isCorrect: false },
            { key: 'C', text: 'Roma İmparatorluğu’nun ikiye ayrılması', isCorrect: false },
            { key: 'D', text: 'Avrupa’da merkezi krallıkların derhal mutlak hakimiyet kurması', isCorrect: true },
            { key: 'E', text: 'Günümüz Avrupa milletlerinin temellerinin atılması', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Kavimler Göçü merkezi krallıkları zayıflatmış, feodal derebeylikleri güçlendirmiştir.',
        },
        {
          question: '3. Almanların ünlü Nibelungen Destanı’nda "Etzel" adıyla anılan ve Avrupalıların "Tanrı’nın Kırbacı" dediği Avrupa Hun hükümdarı kimdir?',
          options: [
            { key: 'A', text: 'Balamir', isCorrect: false },
            { key: 'B', text: 'Uldız', isCorrect: false },
            { key: 'C', text: 'Attila', isCorrect: true },
            { key: 'D', text: 'Rua', isCorrect: false },
            { key: 'E', text: 'Mete Han', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Attila, Nibelungen destanında Etzel olarak geçen büyük hükümdardır.',
        },
        {
          question: '4. Türk Silahlı Kuvvetleri Kara Kuvvetleri Komutanlığı’nın kuruluş yılı olarak kabul edilen MÖ 209 tarihi hangi tarihsel gelişmeye dayanır?',
          options: [
            { key: 'A', text: 'Teoman’ın Hun devletini kurması', isCorrect: false },
            { key: 'B', text: 'Mete Han’ın tahta çıkışı ve Onlu Askerî Teşkilatı kurması', isCorrect: true },
            { key: 'C', text: 'Kavimler Göçü’nün başlaması', isCorrect: false },
            { key: 'D', text: 'Orhun Abideleri’nin dikilmesi', isCorrect: false },
            { key: 'E', text: 'Talas Savaşı’nın kazanılması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Mete Han’ın tahta çıktığı MÖ 209, Onlu sistemin kuruluşu ve TSK Kara Kuvvetleri kuruluşudur.',
        },
        {
          question: '5. Avrupa Hun Devleti ile Doğu Roma (Bizans) arasında imzalanan ve Bizans’ın Hunlara ödediği vergiyi iki katına çıkaran antlaşma hangisidir?',
          options: [
            { key: 'A', text: 'Margos Antlaşması', isCorrect: true },
            { key: 'B', text: 'Kadeş Antlaşması', isCorrect: false },
            { key: 'C', text: 'Bucaş Antlaşması', isCorrect: false },
            { key: 'D', text: 'Edirne-Segedin Antlaşması', isCorrect: false },
            { key: 'E', text: 'Kasr-ı Şirin Antlaşması', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Margos ve sonrasındaki Anatolius antlaşmalarıyla Bizans Hunlara vergiye bağlanmıştır.',
        },
      ],
    };
  }

  // 1.3 - 1.4 Göktürkler, Uygurlar ve Diğer Türk Devletleri
  if (tid === 'topic-tarih-1-3' || tid === 'topic-tarih-1-4') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `## 1. Göktürkler (I. ve II. Göktürk / Kutluk)
* **I. Göktürk Devleti (552):** Tarihte **Türk adını resmi devlet adı yapan İLK devlettir**. Kurucusu **Bumin Kağan** (İl Kağan), kardeşi **İstemi Yabgu** ile ikili teşkilatla yönetti. İpek Yolu için Sasanilerle anlaşıp Ak Hunları yıktı; ardından Bizans ile ittifak kurdu (İlk elçi trafiği: Maniakh ve Zemakhos).
* **Kürşat İhtilali (639):** 50 yıllık Çin esaretine karşı bağımsızlık meşalesini yakan 40 yiğidin saray baskınıdır.
* **II. Göktürk (Kutluk) Devleti (682):** Kurucusu **Kutluk Kağan** (İlteriş). Vezir **Tonyukuk** (Türklerin Bismarck'ı), Bilge Kağan ve Kültigin devlete altın çağını yaşattı.
* **Orhun Yazıtları (725 Tonyukuk, 732 Kültigin, 735 Bilge Kağan):** İlk yazılı Türk belgeleridir; 38 harfli Göktürk Alfabesi ile yazılmıştır; 1893'te **Vilhelm Thomsen** tarafından çözülmüştür. Sosyal devlet ilkesini kanıtlar.

## 2. Uygurlar (744) ve Yerleşik Hayat
* Kurucusu: **Kutluk Bilge Kül Kağan**. Merkez: Ötüken ve Karabalgasun.
* **Bögü Kağan Dönemi ve Maniheizm:**
  * Et yemeyi ve savaşmayı yasakladığı için savaşçılık zayıfladı.
  * **İLK KEZ YERLEŞİK HAYATA GEÇİLDİ**: Tapınaklar, saraylar, şehirler (Balık) kuruldu.
  * Tarım ve sulama kanalları yapıldı, Fresko (duvar resmi) ve Minyatür sanatı başladı (Ressamlara **Bedizci** denir).
  * **Hareketli harf sistemi (Matbaa)** ve 18 harfli Uygur Alfabesi kullanıldı; kütüphaneler kuruldu, kağıt para (**Çav**) basıldı.

## 3. Diğer Önemli Türk Devlet ve Toplulukları
* **Avarlar:** İstanbul’u kuşatan **İLK Türk devletidir** (619-626). Üzengiyi Avrupa’ya tanıttılar.
* **Hazarlar:** Museviliği kabul eden **tek Türk devletidir**. **Hazar Barış Çağı (Pax Khazarica)** yaşattılar. Müslüman Araplarla (Belencer Savaşı) savaşıp İslamiyet’in Kafkaslara girişini geciktirdiler. Ordularında **ücretli asker** bulunduran ilk Türk devletidir.
* **Peçenekler:** Devlet kuramadılar; Bizans ordusunda paralı askerken **1071 Malazgirt Savaşı'nda Selçuklu tarafına geçtiler**.
* **Kumanlar (Kıpçaklar):** Ruslarla savaşları *İgor Destanı*na, Oğuzlarla savaşları *Dede Korkut Hikayeleri*ne konu oldu; sözlükleri **Codex Cumanicus**tur.
* **İtil Bulgarları:** Almış Han döneminde İslamiyet’i kabul eden ilk Türk devletidir.
* **Türgişler:** Hükümdarları **Baga Tarkan** kendi adına **para bastıran ilk Türk hükümdarıdır**.`,
      comparison_tables: [
        {
          title: 'Hunlar, Göktürkler ve Uygurlar Karşılaştırması',
          headers: ['Özellik', 'Asya Hunları', 'Göktürkler', 'Uygurlar'],
          rows: [
            ['Yaşam Tarzı', 'Konar-göçer (Bozkır)', 'Konar-göçer (Bozkır)', 'Yerleşik Hayat (Şehirler/Tapınaklar)'],
            ['Yazı & Alfabe', 'Yazılı belge bırakmadılar', '38 harfli Göktürk Alfabesi (Orhun Abideleri)', '18 harfli Uygur Alfabesi ve Matbaa'],
            ['Temel İlk', 'İlk teşkilatlı devlet, Onlu sistem', 'Türk adıyla kurulan ilk devlet, ilk yazılı belge', 'İlk yerleşik hayat, ilk mimari ve matbaa'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Göktürkler yerleşik hayata geçerek Orhun Abidelerini inşa etmiştir.',
          correct_distinction: 'Göktürkler göçebedir; kitabeler dikili taş anıtlardır. Yerleşik hayata ve kalıcı mimariye geçen ilk Türk devleti Uygurlardır.',
          tip: 'Yerleşik hayat, şehir (balık), fresko, tapınak, matbaa = Uygurlar.',
        },
      ],
      exam_tips: [
        {
          tip: "İstanbul'u ilk kuşatan Avarlar, Musevi tek devlet Hazarlar, kendi adına para bastıran Baga Tarkan (Türgişler), Malazgirt'te taraf değiştiren Peçenekler sınavın değişmez sorularıdır.",
          importance: 'critical',
        },
      ],
      summary: 'Göktürkler milli bilinci ve ilk yazılı mirası inşa ederken; Uygurlar yerleşik kültür, sanat ve matbaa alanında Türk tarihine öncülük etmiştir.',
      what_to_remember: [
        '✓ Türk adıyla kurulan ilk devlet: Göktürkler (Orhun Abideleri)',
        '✓ Yerleşik hayata geçen ilk Türk devleti: Uygurlar (Maniheizm, Matbaa, Fresko)',
        '✓ İstanbul’u ilk kuşatan Türk devleti: Avarlar',
        '✓ Musevi tek Türk devleti: Hazarlar',
        '✓ Kendi adına para bastıran: Baga Tarkan (Türgişler).',
      ],
      self_check_questions: [
        {
          question: '1. Türk tarihinde göçebe yaşam tarzından yerleşik hayata geçen, tapınak mimarisi, fresko sanatı ve matbaayı ilk kez kullanan Türk devleti hangisidir?',
          options: [
            { key: 'A', text: 'Göktürkler', isCorrect: false },
            { key: 'B', text: 'Uygurlar', isCorrect: true },
            { key: 'C', text: 'Hazarlar', isCorrect: false },
            { key: 'D', text: 'Karahanlılar', isCorrect: false },
            { key: 'E', text: 'Avarlar', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Uygurlar Bögü Kağan döneminde Maniheizm’i benimseyerek yerleşik hayata geçen ilk Türk devletidir.',
        },
        {
          question: '2. Sasanilerle ittifak kurarak tarihte İstanbul’u kuşatan İLK Türk devleti aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Avarlar', isCorrect: true },
            { key: 'B', text: 'Peçenekler', isCorrect: false },
            { key: 'C', text: 'Hunlar', isCorrect: false },
            { key: 'D', text: 'Bulgarlar', isCorrect: false },
            { key: 'E', text: 'Hazarlar', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Avarlar 619 ve 626 yıllarında İstanbul’u kuşatan ilk Türk devletidir.',
        },
        {
          question: '3. İslamiyet öncesi Türk devletleri içerisinde hükümdarı Baga Tarkan döneminde kendi adına madeni para bastıran ilk devlet hangisidir?',
          options: [
            { key: 'A', text: 'Türgişler', isCorrect: true },
            { key: 'B', text: 'Uygurlar', isCorrect: false },
            { key: 'C', text: 'Göktürkler', isCorrect: false },
            { key: 'D', text: 'Kırgızlar', isCorrect: false },
            { key: 'E', text: 'Karluklar', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Türgiş hükümdarı Baga Tarkan Türk tarihinde kendi adına para bastıran ilk hükümdardır.',
        },
        {
          question: '4. 1071 Malazgirt Meydan Muharebesi sırasında Bizans saflarında paralı askerlik yaparken Selçuklu tarafına geçerek zaferin kazanılmasında belirleyici olan Türk topluluğu hangisidir?',
          options: [
            { key: 'A', text: 'Peçenekler', isCorrect: true },
            { key: 'B', text: 'Avarlar', isCorrect: false },
            { key: 'C', text: 'Hazarlar', isCorrect: false },
            { key: 'D', text: 'Macarlar', isCorrect: false },
            { key: 'E', text: 'Başkırtlar', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Peçenekler ve Uzlar Malazgirt Savaşı’nda Selçuklu tarafına geçerek zaferin kazanılmasını sağlamıştır.',
        },
        {
          question: '5. Türk tarihinin ve edebiyatının ilk yazılı belgesi kabul edilen Orhun Abideleri hangi Danimarkalı dilbilimci tarafından 1893 yılında okunmuştur?',
          options: [
            { key: 'A', text: 'Vilhelm Thomsen', isCorrect: true },
            { key: 'B', text: 'W. Radloff', isCorrect: false },
            { key: 'C', text: 'A. Wambery', isCorrect: false },
            { key: 'D', text: 'Barthold', isCorrect: false },
            { key: 'E', text: 'Gibb', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Orhun Yazıtları Danimarkalı dilbilimci Vilhelm Thomsen tarafından çözülmüştür.',
        },
      ],
    };
  }

  // 1.5 - 1.11 İslamiyet Öncesi Teşkilat & Türk-İslam Tarihi (Karahanlı, Gazneli, Selçuklu)
  if (tid.startsWith('topic-tarih-1-')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `## 1. İslamiyet Öncesi Devlet Teşkilatı ve Kültür
* **Kut Anlayışı:** Tanrısal yönetim yetkisidir; "Ülke hanedanın ortak malıdır" anlayışını doğurmuş, **taht kavgalarına** ve kısa sürede bölünmeye yol açmıştır.
* **Kurultay (Toy):** Danışma ve karar meclisidir. Hatun da katılır (Kadının siyasi gücü).
* **Töre:** Yazısız hukuktur. Hükümdar dahi uymak zorundadır (**Hukukun üstünlüğü**). Hapis cezaları göçebelikten dolayı kısadır (10 gün).
* **Din ve Ahiret İnancı:** Gök Tanrı inancı; **Kurgan** (eşyalı mezar), **Balbal** (mezar taşı heykeli), **Uçmağ** (cennet), **Tamu** (cehennem) ahiret inancının kanıtıdır.

## 2. Türklerin İslamiyet'i Kabulü ve İlk Türk-İslam Devletleri
* **751 Talas Savaşı:** Karluk Türklerinin desteğiyle Abbasiler Çin’i yendi; Türkler kitleler halinde İslamiyet’e geçti.
* **Karahanlılar (840-1212):** Orta Asya’da kurulan **İLK Müslüman Türk devletidir** (Satuk Buğra Han). Resmi dili Türkçedir. İlk medrese (Semerkant), ilk kervansaray (Ribat) ve ilk bimarhane (hastane) Karahanlılara aittir.
  * *Kutadgu Bilig (Yusuf Has Hacip):* İlk Türk-İslam eseri ve siyasetnamesi.
  * *Dîvânü Lugâti't-Türk (Kaşgarlı Mahmud):* İlk Türkçe sözlük ve ilk Türk dünya haritası.
  * *Atabetü'l-Hakayık (Edip Ahmet):* Ahlak ve öğüt kitabı.
  * *Divan-ı Hikmet (Ahmet Yesevi):* İlk Türk tasavvuf eseri.
* **Gazneliler (963-1187):** Alp Tigin kurdu. **Gazneli Mahmud** Hindistan’a 17 sefer yaptı ve tarihte **İLK KEZ "SULTAN" unvanını kullandı**. Sarayındaki bilgin **Biruni** için *"Sarayımın en değerli hazinesi"* demiştir.
* **Büyük Selçuklu Devleti (1037-1157):**
  * **1040 Dandanakan:** Gaznelileri yenerek resmen kuruldu.
  * **1048 Pasinler:** Bizans’a karşı ilk Selçuklu zaferidir.
  * **1055 Bağdat Seferi:** Tuğrul Bey Bağdat’ı kurtardı; Halife ona **"Doğunun ve Batının Sultanı"** unvanını verdi.
  * **1071 Malazgirt Zaferi:** Sultan Alparslan Bizans’ı yendi; **Anadolu’nun kapıları Türklere açıldı**.
  * **Nizamülmülk ve Nizamiye Medreseleri:** Batınilik (Hasan Sabbah) ile mücadele ve bürokrat yetiştirmek için dünyanın ilk üniversite niteliğindeki Nizamiye Medreseleri kuruldu.`,
      comparison_tables: [
        {
          title: 'Karahanlılar, Gazneliler ve Büyük Selçuklular Karşılaştırması',
          headers: ['Kriter', 'Karahanlılar', 'Gazneliler', 'Büyük Selçuklu Devleti'],
          rows: [
            ['Kuruluş Yeri', 'Orta Asya (Mani/Balasagun)', 'Afganistan (Gazne)', 'Horasan / İran / Anadolu'],
            ['Etnik / Dil Yapısı', 'Tamamen Türk (Resmi dil Türkçe)', 'Kozmopolit (Resmi dil Farsça)', 'Yönetici Türk, ordu Türk, halk çok uluslu'],
            ['İlk Hükümdar / Sultan', 'Satuk Buğra Han', 'Gazneli Mahmud (İlk Sultan)', 'Tuğrul Bey (Doğunun & Batının Sultanı)'],
            ['Kültürel Miras', 'İlk 4 Edebi Eser, Ribat, Medrese', 'Hindistan İslamlaşması, Biruni', 'Nizamiye Medreseleri, Celali Takvimi'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Türk tarihinde "Sultan" unvanını ilk kullanan hükümdar Tuğrul Bey’dir.',
          correct_distinction: 'Türk tarihinde Sultan unvanını İLK kullanan Gazneli Mahmud’dur. Tuğrul Bey’e verilen unvan ise "Doğunun ve Batının Sultanı"dır.',
          tip: 'Soru kökünde "İlk Sultan" denirse Gazneli Mahmud işaretlenmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "1071 Malazgirt Zaferi ile Anadolu'nun kapıları açılmıştır. Nizamiye Medreseleri Batınilik tehlikesine karşı kurulmuştur. İlk Türk-İslam eseri Kutadgu Bilig'dir.",
          importance: 'critical',
        },
      ],
      summary: 'Türk-İslam sentezi Karahanlılar ile edebi ve kurumsal temellerini atmış; Gazneliler ile Hindistan’a, Selçuklular ile Malazgirt zaferiyle Anadolu’ya taşınmıştır.',
      what_to_remember: [
        "✓ İslamiyet’i kabul eden ilk Türk boyu: Karluklar (751 Talas)",
        "✓ İlk Türk-İslam eseri: Kutadgu Bilig (Yusuf Has Hacip)",
        "✓ İlk Türkçe sözlük: Dîvânü Lugâti't-Türk (Kaşgarlı Mahmud)",
        "✓ İlk Sultan unvanı: Gazneli Mahmud",
        "✓ Anadolu’nun kapılarını açan: 1071 Malazgirt Zaferi (Sultan Alparslan).",
      ],
      self_check_questions: [
        {
          question: '1. Abbasi Halifesini Şii Büveyhoğulları baskısından kurtardığı için Türk tarihinde İLK KEZ "Sultan" unvanını kullanan hükümdar kimdir?',
          options: [
            { key: 'A', text: 'Tuğrul Bey', isCorrect: false },
            { key: 'B', text: 'Gazneli Mahmud', isCorrect: true },
            { key: 'C', text: 'Sultan Alparslan', isCorrect: false },
            { key: 'D', text: 'Satuk Buğra Han', isCorrect: false },
            { key: 'E', text: 'Sultan Sencer', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Abbasi halifesi Gazneli Mahmud’a İslam dünyasını koruduğu için Sultan unvanını vermiştir.',
        },
        {
          question: '2. Yusuf Has Hacip tarafından yazılarak Karahanlı Hükümdarı Tabgaç Buğra Han’a sunulan ilk Türk-İslam edebi eseri ve ilk siyasetnamesi hangisidir?',
          options: [
            { key: 'A', text: "Dîvânü Lugâti't-Türk", isCorrect: false },
            { key: 'B', text: 'Kutadgu Bilig', isCorrect: true },
            { key: 'C', text: "Atabetü'l-Hakayık", isCorrect: false },
            { key: 'D', text: 'Divan-ı Hikmet', isCorrect: false },
            { key: 'E', text: 'Siyasetname', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Kutadgu Bilig ilk Türk-İslam eseri ve siyasetnamesidir.',
        },
        {
          question: '3. Büyük Selçuklu Devleti döneminde Vezir Nizamülmülk öncülüğünde açılan Nizamiye Medreseleri’nin kuruluş amacı hangisidir?',
          options: [
            { key: 'A', text: 'Haçlı ordularına karşı asker yetiştirmek', isCorrect: false },
            { key: 'B', text: 'Hasan Sabbah liderliğindeki zararlı Şii Batıni propagandasıyla ilmi yönden mücadele etmek ve bürokrat yetiştirmek', isCorrect: true },
            { key: 'C', text: 'Latin alfabesine geçişi sağlamak', isCorrect: false },
            { key: 'D', text: 'Bizans ile ticaret yapmak', isCorrect: false },
            { key: 'E', text: 'Celali takvimini öğretmek', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Nizamiye Medreseleri devlet kadrosu yetiştirmek ve Batınilik mezhebine karşı ilmi mücadele için kurulmuştur.',
        },
        {
          question: '4. 1040 yılında Gazneliler ile Selçuklular arasında yapılan ve Selçukluların resmen kurulmasını sağlayan savaş hangisidir?',
          options: [
            { key: 'A', text: 'Pasinler Savaşı', isCorrect: false },
            { key: 'B', text: 'Dandanakan Savaşı', isCorrect: true },
            { key: 'C', text: 'Malazgirt Savaşı', isCorrect: false },
            { key: 'D', text: 'Katvan Savaşı', isCorrect: false },
            { key: 'E', text: 'Yassıçemen Savaşı', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. 1040 Dandanakan Savaşı Selçukluların bağımsızlığını kazandığı savaştır.',
        },
        {
          question: '5. Kaşgarlı Mahmud tarafından kaleme alınan ilk Türkçe ansiklopedik sözlük hangisidir?',
          options: [
            { key: 'A', text: "Dîvânü Lugâti't-Türk", isCorrect: true },
            { key: 'B', text: "Muhakemetü'l-Lugateyn", isCorrect: false },
            { key: 'C', text: 'Codex Cumanicus', isCorrect: false },
            { key: 'D', text: 'Kutadgu Bilig', isCorrect: false },
            { key: 'E', text: 'Siyasetname', isCorrect: false },
          ],
          explanation: "Doğru cevap A seçeneğidir. Kaşgarlı Mahmud Araplara Türkçeyi öğretmek için Dîvânü Lugâti't-Türk'ü yazmıştır.",
        },
      ],
    };
  }

  // =========================================================================
  // 2. ÜNİTE: OSMANLI TARİHİ (XIII. YY - XX. YY BAŞLARI)
  // =========================================================================

  if (tid.startsWith('topic-tarih-2-')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `## 1. Osmanlı Siyasi Gelişmeleri ve Dönemleri
* **Kuruluş Dönemi:** 1302 Koyunhisar Savaşı (Bizans ile ilk savaş), Karesioğulları Beyliği'nin alınması (**İlk donanma ve Rumeli'ye geçiş**), Çimpe Kalesi (**Rumeli'deki ilk toprak**), 1364 Sırpsındığı (İlk Haçlı zaferi), 1389 I. Kosova (İlk top kullanımı), 1396 Niğbolu (Sultan-ı İklim-i Rum), 1402 Ankara Savaşı (Fetret Devri).
* **Yükselme Dönemi:** 1453 İstanbul'un Fethi (Yeni Çağ başlangıcı, İpek Yolu), Kırım'ın fethi (Karadeniz Türk gölü), 1514 Çaldıran (Safevi yenilgisi), 1515 Turnadağ (Anadolu Türk siyasi birliği kesin sağlandı), 1517 Ridaniye (Memlükler yıkıldı, **Halifelik Osmanlı'ya geçti**, Baharat Yolu), 1533 İstanbul Antlaşması (Avusturya'ya diplomatik üstünlük), 1538 Preveze Deniz Zaferi (**Akdeniz Türk gölü**).
* **Duraklama ve Gerileme:** 1606 Zitvatorok (Avusturya üstünlüğü bitti), 1683 II. Viyana Kuşatması, 1699 Karlofça (Batıda ilk büyük toprak kaybı), 1774 Küçük Kaynarca (Kırım bağımsız oldu, Rusya'ya ilk kez kapitülasyon ve savaş tazminatı verildi, Halifelik ilk kez siyasi koz olarak kullanıldı).

## 2. Osmanlı Devlet Teşkilatı ve Kurumları
* **Yönetim Sınıfları:**
  1. **Seyfiye (Yönetim & Askerlik):** Sadrazam, Kubbealtı Vezirleri, Kaptan-ı Derya, Yeniçeri Ağası, Beylerbeyi, Sancakbeyi.
  2. **İlmiye (Din, Hukuk, Eğitim):** Şeyhülislam, Kazasker (Kadı ve müderris atar), Kadı, Müderris. (Mutlaka **Türk-Müslüman** kökenli olmalıdır).
  3. **Kalemiye (Yazışma & Maliye):** Defterdar, Nişancı (Tuğra çeker, Tahrir defterini tutar), Reisülküttab (Dışişleri).
* **Taşra Teşkilatı:** Salyaneli (Merkeze uzak, iltizam sistemi, nakit vergi), Salyanesiz (Merkeze yakın, tımar sistemi, cebelü atlı asker), İmtiyazlı (Özel statülü: Hicaz, Kırım).
* **Toplum ve Ekonomi:** Millet sistemi (Din esasına dayalı), Lonca teşkilatı (Esnaf birliği, narh sistemi), İltizam ve Malikane sistemleri, Duyun-ı Umumiye (1881 - Dış borçlar idaresi).

## 3. Osmanlı Islahat Hareketleri
* **XVII. Yüzyıl Islahatları:** Batı etkisi YOKTUR; kişilere bağlıdır; baskı ve şiddet uygulanmıştır (IV. Murat, Tarhuncu Ahmet Paşa, Köprülüler).
* **XVIII. Yüzyıl Islahatları:** Batı etkisi İLK KEZ VARDIR.
  * **Lale Devri (1718-1730):** Batı tarzı ilk sivil ıslahatlar (Matbaa, elçilikler, itfaiye). Askeri ıslahat **YOKTUR**.
  * **I. Mahmut:** Batı tarzı ilk askeri okul (**Hendesehane**).
  * **III. Selim (Nizam-ı Cedit):** Nizam-ı Cedit ordusu, sürekli elçilikler (Londra - Yusuf Agah Efendi).
* **XIX. Yüzyıl Islahatları:**
  * **II. Mahmut:** Yeniçeri Ocağı kaldırıldı (**1826 Vaka-i Hayriye**), Tımar ve Müsadere kalktı, muhtarlıklar kuruldu, Takvim-i Vekayi çıkarıldı.
  * **Tanzimat Fermanı (1839):** Padişah **kanun üstünlüğünü** ilk kez kabul etti; can-mal güvenliği ve adil vergi tüm halka tanındı.
  * **Islahat Fermanı (1856):** Gayrimüslimlere yönelik ayrıcalıklar genişletildi; Cizye vergisi kaldırıldı.
  * **I. Meşrutiyet (1876):** İlk anayasa **Kanun-i Esasi** ilan edildi; halk ilk kez yönetime katıldı (Mebusan Meclisi).`,
      comparison_tables: [
        {
          title: 'Osmanlı Demokratikleşme Belgeleri Karşılaştırması',
          headers: ['Belge', 'Yıl / Padişah', 'Temel İçerik / AGS Anahtarı'],
          rows: [
            ['Sened-i İttifak', '1808 / II. Mahmut', 'Ayanlarla yapıldı; padişahın yetkisi ilk kez iç dinamikle sınırlandı'],
            ['Tanzimat Fermanı', '1839 / Abdülmecit', 'Padişah kanun üstünlüğünü kabul etti; tüm tebaa eşit sayıldı'],
            ['Islahat Fermanı', '1856 / Abdülmecit', 'Yalnızca gayrimüslimlerin hakları genişletildi (Dış baskı ile)'],
            ['Kanun-i Esasi (I. Meşrutiyet)', '1876 / II. Abdülhamit', 'İlk anayasa ilan edildi, parlamenter sisteme geçildi'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Tanzimat Fermanı ile meclis açılarak anayasal monarşiye geçilmiştir.',
          correct_distinction: 'Tanzimat Fermanı (1839) ferman niteliğindedir; anayasa ve meclis YOKTUR. İlk anayasa Kanun-i Esasi ve ilk meclis Mebusan Meclisi 1876 I. Meşrutiyet ile açılmıştır.',
          tip: 'Tanzimat = Kanun üstünlüğü; Meşrutiyet = Anayasa ve Meclis.',
        },
      ],
      exam_tips: [
        {
          tip: "Küçük Kaynarca Antlaşması ile Kırım kaybedilmiş ve Halifelik ilk kez siyasi amaçla kullanılmıştır. Tanzimat Fermanı kanun gücünün padişahın üzerinde olduğunun ilk resmi kabulüdür.",
          importance: 'critical',
        },
      ],
      summary: 'Osmanlı Devleti klasik dönemde ordu, divan ve tımar sistemiyle cihan hakimiyeti kurmuş; gerileme ve dağılma döneminde anayasal ve kurumsal reformlarla modernleşmiştir.',
      what_to_remember: [
        '✓ Rumeli’ye ilk geçiş: Karesioğulları Beyliği & Çimpe Kalesi',
        '✓ Halifeliğin geçişi: 1517 Ridaniye Savaşı (Yavuz Sultan Selim)',
        '✓ İlk anayasa: Kanun-i Esasi (1876)',
        '✓ Batı tarzı ilk sivil dönem: Lale Devri | İlk askeri okul: Hendesehane',
        '✓ Yeniçeri Ocağı’nın kaldırılması: 1826 Vaka-i Hayriye (II. Mahmut).',
      ],
      self_check_questions: [
        {
          question: '1. Osmanlı Devleti’nde Divan-ı Hümayun üyelerinden hangisi "İlmiye" sınıfına mensuptur ve kadı ile müderris atamalarını gerçekleştirir?',
          options: [
            { key: 'A', text: 'Sadrazam', isCorrect: false },
            { key: 'B', text: 'Nişancı', isCorrect: false },
            { key: 'C', text: 'Kazasker', isCorrect: true },
            { key: 'D', text: 'Defterdar', isCorrect: false },
            { key: 'E', text: 'Kaptan-ı Derya', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Kazasker ilmiye sınıfının adalet ve eğitimden sorumlu üyesi olup kadı ve müderris atamalarını yapardı.',
        },
        {
          question: '2. 1774 yılında imzalanan ve Osmanlı Devleti’nin halkı Müslüman olan bir toprağı (Kırım) ilk kez kaybettiği ve halifeliğin siyasi gücünden ilk kez yararlandığı antlaşma hangisidir?',
          options: [
            { key: 'A', text: 'Karlofça Antlaşması', isCorrect: false },
            { key: 'B', text: 'Küçük Kaynarca Antlaşması', isCorrect: true },
            { key: 'C', text: 'Pasarofça Antlaşması', isCorrect: false },
            { key: 'D', text: 'Yaş Antlaşması', isCorrect: false },
            { key: 'E', text: 'Edirne Antlaşması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Küçük Kaynarca Antlaşması ile Kırım bağımsız olmuş ve dini bakımdan Osmanlı halifesine bağlı kalması kararlaştırılmıştır.',
        },
        {
          question: '3. Osmanlı Devleti’nde padişahın kendi yetkilerini kanun gücüyle sınırlandırdığı ve tüm tebaanın can, mal, namus güvencesinin devlet teminatı altına alındığı ilk anayasal nitelikli belge hangisidir?',
          options: [
            { key: 'A', text: 'Sened-i İttifak (1808)', isCorrect: false },
            { key: 'B', text: 'Tanzimat Fermanı (1839)', isCorrect: true },
            { key: 'C', text: 'Islahat Fermanı (1856)', isCorrect: false },
            { key: 'D', text: 'Kanun-i Esasi (1876)', isCorrect: false },
            { key: 'E', text: 'Halepa Fermanı (1878)', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Tanzimat Fermanı ile padişah ilk kez kendi gücünün üzerinde kanun gücü olduğunu kabul etmiştir.',
        },
        {
          question: '4. Osmanlı taşra teşkilatında merkeze uzak olan, tımar sisteminin uygulanmadığı ve vergilerin "iltizam sistemi" ile mültezimler tarafından toplandığı eyalet türü hangisidir?',
          options: [
            { key: 'A', text: 'Salyanesiz (Yıllıksız) Eyaletler', isCorrect: false },
            { key: 'B', text: 'Salyaneli (Yıllıklı) Eyaletler', isCorrect: true },
            { key: 'C', text: 'İmtiyazlı Eyaletler', isCorrect: false },
            { key: 'D', text: 'Yurtluk-Ocaklık Eyaletleri', isCorrect: false },
            { key: 'E', text: 'Vakıf Eyaletleri', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Mısır, Tunus, Cezayir gibi merkeze uzak salyaneli eyaletlerde nakit para ihtiyacı için iltizam usulü uygulanırdı.',
        },
        {
          question: '5. Türk tarihinin ilk yazılı anayasası olan ve halkın ilk kez Mebusan Meclisi aracılığıyla yönetime katıldığı Kanun-i Esasi hangi padişah döneminde ilan edilmiştir?',
          options: [
            { key: 'A', text: 'II. Mahmut', isCorrect: false },
            { key: 'B', text: 'Abdülmecit', isCorrect: false },
            { key: 'C', text: 'Abdülaziz', isCorrect: false },
            { key: 'D', text: 'II. Abdülhamit', isCorrect: true },
            { key: 'E', text: 'V. Mehmet Reşat', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. 1876 yılında II. Abdülhamit döneminde I. Meşrutiyet ilan edilerek Kanun-i Esasi yürürlüğe girmiştir.',
        },
      ],
    };
  }

  // =========================================================================
  // 3. ÜNİTE: ATATÜRK İLKELERİ VE İNKILAP TARİHİ
  // =========================================================================

  if (tid.startsWith('topic-tarih-3-')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `## 1. XX. Yüzyıl Başı ve I. Dünya Savaşı
* **1911 Trablusgarp Savaşı:** Mustafa Kemal’in ilk askeri başarısıdır (Derne ve Tobruk'ta yerel halkı teşkilatlandırdı). **Uşi Antlaşması** ile Trablusgarp ve Bingazi İtalya’ya bırakıldı (**Kuzey Afrika’daki son toprak parçası kaybedildi**).
* **1912-1913 Balkan Savaşları:** I. Balkan Savaşı'nda Osmanlı yenildi, Edirne ve Kırklareli kaybedildi (Londra Antlaşması). II. Balkan Savaşı'nda Edirne geri alındı. Osmanlıcılık fikri çöktü, **Türkçülük** güçlendi.
* **I. Dünya Savaşı (1914-1918):**
  * **Taarruz Cepheleri:** Kafkas (Sarıkamış Faciası, Tehcir Kanunu, Mustafa Kemal Muş ve Bitlis'i geri aldı) ve Kanal (Cemal Paşa).
  * **Savunma Cepheleri:** Çanakkale (Mustafa Kemal Anafartalar Kahramanı oldu, Çarlık Rusya yıkıldı), Hicaz-Yemen (Çöl Kaplanı Fahrettin Paşa), Irak (Kutü'l-Amare Zaferi - Halil Paşa), Suriye-Filistin (Mustafa Kemal Yıldırım Orduları Grup Komutanı).
* **30 Ekim 1918 Mondros Ateşkesi:** 7. Madde (İtilaf devletleri güvenliklerini tehdit eden herhangi bir stratejik noktayı işgal edebilecek) ve 24. Madde (Vilayet-i Sitte'de karışıklık çıkarsa işgal edilecek - Ermeni devleti amacı).

## 2. Millî Mücadele Hazırlık ve Muharebeler Dönemi
* **19 Mayıs 1919:** Mustafa Kemal 9. Ordu Müfettişi olarak Samsun’a çıktı.
* **Havza Genelgesi (28 Mayıs 1919):** İlk ulusal tepki; mitingler ve protestolar istendi.
* **Amasya Genelgesi (22 Haziran 1919):** Millî Mücadele'nin **Gerekçesi**, **Amacı** ve **Yöntemi** ilk kez belirtildi (*"Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır"* - **İlk kez milli egemenlik ve ihtilal çağrısı**).
* **Erzurum Kongresi (23 Temmuz 1919):** Toplanış bakımından bölgesel, aldığı kararlar bakımından **MİLLÎ**dir. İlk kez **Milli Sınırlardan (Misak-ı Millî)** bahsedildi; Manda ve himaye ilk kez reddedildi; Temsil Heyeti kuruldu.
* **Sivas Kongresi (4 Eylül 1919):** Her yönüyle **MİLLÎ** tek kongredir. Tüm cemiyetler **Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti** adı altında birleştirildi; Manda ve himaye **KESİN OLARAK** reddedildi; Ali Fuat Paşa Batı Cephesi Komutanlığı’na atanarak Temsil Heyeti **ilk kez yürütme yetkisini** kullandı.
* **23 Nisan 1920:** I. TBMM açıldı (Kurucu, ihtilalci, milli meclis; güçler birliği ilkesi).
* **Muharebeler:**
  * **Doğu Cephesi:** Kazım Karabekir Ermenileri yendi (**Gümrü Antlaşması** - TBMM'yi tanıyan ilk devlet Ermenistan).
  * **Güney Cephesi:** Kuvay-ı Milliye Fransız ve Ermenilere karşı savaştı (Maraş, Antep, Urfa). 1921 Ankara Antlaşması ile kapandı.
  * **Batı Cephesi:** Düzenli ordu kuruldu (İsmet Paşa).
    * *I. İnönü Zaferi:* Düzenli ordunun ilk zaferi. Sonuçları (**MİLİT / TALİM**): Moskova Antlaşması (Rusya ile), İstiklal Marşı kabulü, Londra Konferansı (TBMM resmen tanındı), İsmet Paşa generalliğe yükseldi, Teşkilat-ı Esasiye (1921 Anayasası) kabulü, Afganistan ile Dostluk Antlaşması.
    * *II. İnönü Zaferi:* Mustafa Kemal: *"Siz orada yalnız düşmanı değil, milletin makus talihini de yendiniz."*
    * *Kütahya-Eskişehir Muharebeleri:* Düzenli ordunun tek yenilgisidir. Mustafa Kemal'e **Başkomutanlık Yetkisi** verildi; **Tekalif-i Milliye Emirleri** yayımlandı.
    * *Sakarya Meydan Muharebesi (1921):* 1683 II. Viyana'dan beri süren geri çekilme sona erdi. *"Hattı müdafaa yoktur, sathı müdafaa vardır..."* Mustafa Kemal'e **Gazi ve Mareşal** unvanı verildi. Fransa ile **Ankara Antlaşması** (Güney cephesi kapandı), Kafkas Cumhuriyetleri ile **Kars Antlaşması** (Doğu sınırı kesinleşti) imzalandı.
    * *Büyük Taarruz ve Başkomutanlık Meydan Muharebesi (1922):* Dumlupınar'da Yunan ordusu imha edildi; Mudanya Ateşkesi imzalandı.

## 3. Lozan Barış Antlaşması (24 Temmuz 1923)
* İsmet İnönü başkanlığındaki heyet gitti. **Kapitülasyonlar tamamen kaldırıldı**, Ermeni yurdu talebi reddedildi, Düyun-ı Umumiye kaldırıldı, Boğazlar komisyona bırakıldı (1936 Montrö ile çözülecektir), Musul meselesi sonraya bırakıldı.

## 4. Atatürk İlkeleri ve İnkılaplar Eşleştirmesi
1. **Cumhuriyetçilik:** Ulusal egemenlik, seçme-seçilme, meclis, çok partili hayat. (TBMM'nin açılması, Saltanatın kaldırılması, Cumhuriyetin ilanı, Kadınlara siyasi haklar verilmesi).
2. **Milliyetçilik:** Türk dili, tarihi, bağımsızlık, milli ekonomi. (TDK ve TTK'nin kurulması, Kabotaj Kanunu, Türk parasını koruma kanunu, Kapitülasyonların kaldırılması).
3. **Halkçılık:** Eşitlik, ayrıcalıksız toplum, sosyal adalet. (Aşar vergisinin kaldırılması, Medeni Kanun, Soyadı Kanunu, Kılık-kıyafet inkılabı, Kadın-erkek eşitliği).
4. **Devletçilik:** Özel sektörün yetersiz kaldığı alanlarda devletin yatırımları bizzat yapması ve planlı ekonomi. (I. Beş Yıllık Sanayi Planı, Sümerbank, Etibank, Demiryollarının millileştirilmesi).
5. **Laiklik:** Akılcılık, bilimsellik, din ve devlet işlerinin ayrılması. (Halifeliğin kaldırılması, Tevhid-i Tedrisat, Tekke ve zaviyelerin kapatılması, Medeni Kanun, 1928'de "Devletin dini İslam'dır" maddesinin anayasadan çıkarılması).
6. **İnkılapçılık:** Çağdaşlaşma, dinamizm, sürekli yenilenme. (Takvim, saat, ölçü ve rakamlarda Batı standartlarına geçilmesi, Harf İnkılabı).`,
      comparison_tables: [
        {
          title: 'Atatürk İlkeleri ve İnkılap Eşleştirme Matrisi',
          headers: ['Atatürk İlkesi', 'Temel Anahtar Kavramlar', 'İlişkili Temel İnkılaplar'],
          rows: [
            ['Cumhuriyetçilik', 'Milli egemenlik, oy, meclis, demokrasi', 'TBMM’nin açılması, Cumhuriyetin ilanı, Kadınlara seçme-seçilme hakkı'],
            ['Milliyetçilik', 'Milli kimlik, Türk dili, bağımsızlık', 'Kabotaj Kanunu, TTK ve TDK kurulması, Kapitülasyonların kaldırılması'],
            ['Halkçılık', 'Eşitlik, ayrıcalıksız toplum, sosyal adalet', 'Aşar vergisinin kaldırılması, Medeni Kanun, Soyadı Kanunu'],
            ['Devletçilik', 'Karma ekonomi, kamu yatırımları, planlı kalkınma', 'I. Beş Yıllık Sanayi Planı, Sümerbank, Etibank, Devlet Demiryolları'],
            ['Laiklik', 'Akılcılık, din-devlet ayrımı, vicdan hürriyeti', 'Halifeliğin kaldırılması, Tevhid-i Tedrisat, Tekkelerin kapatılması'],
            ['İnkılapçılık', 'Çağdaşlaşma, köklü değişim, dinamizm', 'Miladi takvim, Latin harfleri, Metrik ölçü ve tartı sistemi'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Kabotaj Kanunu Halkçılık ilkesiyle doğrudan ilişkilidir.',
          correct_distinction: 'Kabotaj Kanunu (1 Temmuz 1926) Türk karasularında deniz ticareti hakkını yabancılardan alıp Türk denizcilerine verdiği için MİLLİYETÇİLİK ilkesinin doğrudan sonucudur.',
          tip: 'Kabotaj = Türk deniz ticareti millileşmesi = Milliyetçilik.',
        },
      ],
      exam_tips: [
        {
          tip: "Amasya Genelgesi Millî Mücadele'nin gerekçe, amaç ve yöntemini ilk kez belirten ihtilal beyannamesidir. Aşar vergisinin kaldırılması doğrudan Halkçılık ilkesidir.",
          importance: 'critical',
        },
      ],
      summary: 'Millî Mücadele halkın azim ve kararıyla kazanılmış; kurulan Türkiye Cumhuriyeti Atatürk ilke ve inkılaplarıyla çağdaş, laik ve tam bağımsız bir devlet yapısına kavuşmuştur.',
      what_to_remember: [
        '✓ Millî Mücadele’nin amaç, gerekçe ve yöntemi: Amasya Genelgesi',
        '✓ Manda ve himayenin kesin reddi: Sivas Kongresi',
        '✓ İlk askeri zafer: Doğu Cephesi Gümrü Antlaşması | Batı: I. İnönü',
        '✓ Doğu sınırını kesinleştiren: Kars Antlaşması (1921)',
        '✓ Aşar vergisinin kaldırılması: Halkçılık | Kabotaj Kanunu: Milliyetçilik.',
      ],
      self_check_questions: [
        {
          question: '1. Amasya Genelgesi’nde yer alan "Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır" maddesi Millî Mücadele açısından neyi ifade eder?',
          options: [
            { key: 'A', text: 'Mücadelenin yalnızca padişahın buyruğuyla yürütüleceğini', isCorrect: false },
            { key: 'B', text: 'Millî Mücadele’nin hem AMACINI hem de YÖNTEMİNİ belirterek ilk kez milli egemenlik çağrısı yaptığını', isCorrect: true },
            { key: 'C', text: 'Manda ve himaye sisteminin kabul edileceğini', isCorrect: false },
            { key: 'D', text: 'İstanbul Hükümeti ile kayıtsız şartsız iş birliği yapılacağını', isCorrect: false },
            { key: 'E', text: 'Düzenli ordunun derhal feshedileceğini', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Milletin bağımsızlığı" amaç, "milletin azim ve kararı" ise yöntemi gösterir ve üstü kapalı milli egemenlik vurgusudur.',
        },
        {
          question: '2. 1 Temmuz 1926 tarihinde yürürlüğe giren ve Türk karasularında yük ve yolcu taşıma hakkını yalnızca Türk gemilerine ve Türk vatandaşlarına tanıyan Kabotaj Kanunu öncelikle hangi Atatürk ilkesiyle ilişkilidir?',
          options: [
            { key: 'A', text: 'Devletçilik', isCorrect: false },
            { key: 'B', text: 'Laiklik', isCorrect: false },
            { key: 'C', text: 'Milliyetçilik', isCorrect: true },
            { key: 'D', text: 'Cumhuriyetçilik', isCorrect: false },
            { key: 'E', text: 'İnkılapçılık', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Deniz ticaretini millileştirdiği ve yabancı tekelini kırdığı için Kabotaj Kanunu doğrudan Milliyetçilik ilkesidir.',
        },
        {
          question: '3. Kurtuluş Savaşı’nda Sakarya Meydan Muharebesi’nin kazanılmasının ardından TBMM Hükümeti ile Fransa arasında imzalanan ve Güney Cephesi’nin kapanmasını sağlayan antlaşma hangisidir?',
          options: [
            { key: 'A', text: 'Gümrü Antlaşması', isCorrect: false },
            { key: 'B', text: '1921 Ankara Antlaşması', isCorrect: true },
            { key: 'C', text: 'Kars Antlaşması', isCorrect: false },
            { key: 'D', text: 'Moskova Antlaşması', isCorrect: false },
            { key: 'E', text: 'Mudanya Mütarekesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. 20 Ekim 1921 Ankara Antlaşması ile Fransa TBMM’yi tanıyan ilk İtilaf devleti olmuş ve Güney Cephesi kapanmıştır.',
        },
        {
          question: '4. 1925 yılında köylünün üzerindeki ağır mali yükü kaldırmak, üretimi teşvik etmek ve fırsat eşitliği sağlamak amacıyla kaldırılan vergi hangisidir?',
          options: [
            { key: 'A', text: 'Cizye vergisi', isCorrect: false },
            { key: 'B', text: 'Aşar (Öşür) vergisi', isCorrect: true },
            { key: 'C', text: 'Ağnam vergisi', isCorrect: false },
            { key: 'D', text: 'Varlık vergisi', isCorrect: false },
            { key: 'E', text: 'Çiftbozan vergisi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Aşar vergisinin kaldırılması köylüyü rahatlatmış olup Halkçılık ilkesinin en önemli uygulamalarındandır.',
        },
        {
          question: '5. Mustafa Kemal Paşa’nın "Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır. Vatanın her karış toprağı vatandaşın kanıyla ıslanmadıkça terk olunamaz." tarihi emrini verdiği muharebe hangisidir?',
          options: [
            { key: 'A', text: 'I. İnönü Muharebesi', isCorrect: false },
            { key: 'B', text: 'II. İnönü Muharebesi', isCorrect: false },
            { key: 'C', text: 'Kütahya-Eskişehir Muharebeleri', isCorrect: false },
            { key: 'D', text: 'Sakarya Meydan Muharebesi', isCorrect: true },
            { key: 'E', text: 'Büyük Taarruz', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Mustafa Kemal Sakarya Meydan Muharebesi’nde alan savunması stratejisiyle bu tarihi emri vermiştir.',
        },
      ],
    };
  }

  // =========================================================================
  // 4. ÜNİTE: ÇAĞDAŞ TÜRK VE DÜNYA TARİHİ
  // =========================================================================

  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `## 1. İki Dünya Savaşı Arası ve II. Dünya Savaşı
* **Totaliter Rejimler:** İtalya’da Mussolini (Faşizm - Kara Gömlekliler, *Bizim Deniz / Mare Nostrum*), Almanya’da Hitler (Nazizm - Gestapo, *Hayat Sahası / Lebensraum*), İspanya’da Franco, SSCB’de Stalin.
* **II. Dünya Savaşı (1939-1945):**
  * **Bloklar:** Mihver (Almanya, İtalya, Japonya) ve Müttefik (İngiltere, Fransa, SSCB, ABD).
  * Almanya'nın Polonya'yı işgaliyle başladı. Japonya'nın Pearl Harbor baskınıyla ABD savaşa girdi. Hiroşima ve Nagazaki'ye atılan atom bombalarıyla savaş bitti.
  * **Savaş Sırasında Türkiye:** İsmet İnönü cumhurbaşkanlığında **tarafsızlık ve denge politikası** izlendi. **Milli Korunma Kanunu**, **Varlık Vergisi** ve **Toprak Mahsulleri Vergisi** çıkarıldı; ekmek karnesi uygulaması yapıldı. Türkiye savaşın sonuna doğru BM'nin kurucu üyesi olmak için sembolik olarak Almanya ve Japonya'ya savaş ilan etti (23 Şubat 1945).

## 2. Soğuk Savaş Dönemi (1945 - 1960'lar)
* **İki Kutuplu Dünya:**
  * **Batı Bloku:** ABD liderliğinde. **Truman Doktrini** (Sovyet tehdidine karşı Türkiye ve Yunanistan'a askeri yardım), **Marshall Planı** (Ekonomik yardım), **NATO** (1949 - Kuzey Atlantik Savunma Paktı), **Avrupa Konseyi** (1949).
  * **Doğu Bloku:** SSCB liderliğinde. **Kominform** (Siyasi birlik), **Comecon** (Ekonomik dayanışma), **Varşova Paktı** (1955 - Askeri pakt).
* **Soğuk Savaşta Türkiye:**
  * Sovyetler Birliği'nin Boğazlar ve Doğu Anadolu'dan (Kars-Ardahan) toprak talebi üzerine Türkiye Batı Bloku'na yanaştı.
  * **Çok Partili Hayata Geçiş:** 1945'te Nuri Demirağ **Milli Kalkınma Partisi**ni kurdu. 1946'da Celal Bayar, Adnan Menderes, Refik Koraltan ve Fuat Köprülü (Dörtlü Takrir) **Demokrat Parti**yi kurdu.
  * **1950 Beyaz İhtilal:** Demokrat Parti seçimi kazanarak 27 yıllık CHP iktidarına son verdi. (Cumhurbaşkanı: Celal Bayar, Başbakan: Adnan Menderes).
  * **Türkiye'nin NATO'ya Girişi (1952):** Türkiye **Kore Savaşı**na (Tuğgeneral Tahsin Yazıcı komutasındaki Şimal Yıldızı / Türk Tugayı) asker göndererek 1952'de Yunanistan ile birlikte NATO'ya üye oldu.

## 3. Yumuşama (Detant) Dönemi ve Bölgesel Çatışmalar
* ABD (Kennedy) ve SSCB (Kruşçev) liderliğinde nükleer silahları sınırlandırma görüşmeleri başladı (SALT-I ve SALT-II).
* **Küba Füze Krizi (1962):** SSCB'nin Küba'ya, ABD'nin Türkiye'ye (Jüpiter füzeleri) füze yerleştirmesiyle dünya nükleer savaşın eşiğine geldi; karşılıklı füzeler söküldü.
* **Orta Doğu Savaşları ve Petrol Krizi:** 1973 Arap-İsrail (Yom Kippur) Savaşı sonrası OPEC petrol ambargosu uyguladı.
* **Kıbrıs Meselesi ve 1974 Barış Harekâtı:**
  * Rumların Türklere uyguladığı katliamlara (Kanlı Noel - 1963) ve Akritas/Enosis planlarına karşı **Türk Mukavemet Teşkilatı (TMT - Rauf Denktaş, Dr. Fazıl Küçük)** kuruldu.
  * 1974'te Başbakan Bülent Ecevit ve Başbakan Yardımcısı Necmettin Erbakan liderliğinde **"Ayşe Tatile Çıksın"** parolasıyla **Kıbrıs Barış Harekâtı** düzenlendi. 1983'te **Kuzey Kıbrıs Türk Cumhuriyeti (KKTC)** kuruldu (İlk Cumhurbaşkanı Rauf Denktaş).

## 4. Küreselleşen Dünya ve SSCB'nin Dağılması
* 1991'de Mihail Gorbaçov'un **Glasnost (Açıklık)** ve **Perestroyka (Yeniden Yapılanma)** politikaları sonrası SSCB dağıldı.
* **Bağımsız Türk Cumhuriyetleri Kuruldu (1991):**
  * Azerbaycan (Ebulfez Elçibey / Haydar Aliyev - *"Bir millet iki devlet"*).
  * Kazakistan (Nursultan Nazarbayev - Nükleer silah deposunu ilk imha eden ülke).
  * Özbekistan (İslam Kerimov), Türkmenistan (Sapar Murat Niyazov), Kırgızistan (Askar Akayev).
  * Türkiye ile Türk dünyası iş birliği için **TİKA (1992)** ve **TÜRKSOY (1993)** kuruldu.
* **Bosna Savaşı (1992-1995):** Sırp katliamı (Srebrenitsa Soykırımı) sonrası **Bilge Kral Aliya İzzetbegoviç** önderliğinde mücadele edildi; **Dayton Antlaşması** ile barış sağlandı.`,
    comparison_tables: [
      {
        title: 'Soğuk Savaş Bloklaşması Karşılaştırma Tablosu',
        headers: ['Alan', 'Batı Bloku (ABD Öncülüğü)', 'Doğu Bloku (SSCB Öncülüğü)'],
        rows: [
          ['Siyasi / Doktrin', 'Truman Doktrini', 'Kominform / Jdanov Doktrini'],
          ['Ekonomik Örgütlenme', 'Marshall Planı / OECD', 'Comecon / Molotov Planı'],
          ['Askerî İttifak', 'NATO (1949 - Türkiye 1952)', 'Varşova Paktı (1955)'],
          ['Türkiye’nin Konumu', 'Batı Bloku ve NATO üyesi', 'Toprak talebine karşı mücadele'],
        ],
      },
    ],
    common_confusions: [
      {
        wrong_belief: 'Türkiye NATO’ya II. Dünya Savaşı’na girdiği için kabul edilmiştir.',
        correct_distinction: 'Türkiye’nin 1952 yılında NATO’ya kabul edilmesindeki en belirleyici etken 1950 yılında KORE SAVAŞI’na tugay düzeyinde asker göndermesi ve gösterdiği üstün kahramanlıktır.',
        tip: 'Kore Savaşı = NATO üyeliğinin kapısını açan gelişme.',
      },
    ],
    exam_tips: [
      {
        tip: "1974 Kıbrıs Barış Harekâtı parolası 'Ayşe Tatile Çıksın'dır. SSCB'nin dağılmasıyla kurulan bağımsız Türk cumhuriyetleriyle ilişkileri yürütmek için TİKA ve TÜRKSOY kurulmuştur.",
        importance: 'critical',
      },
    ],
    summary: 'Çağdaş Türk ve Dünya Tarihi iki kutuplu dünyanın güç mücadelesi, Türkiye’nin demokrasi ve NATO entegrasyonu, Kıbrıs zaferi ve bağımsız Türk cumhuriyetlerinin yükselişiyle şekillenmiştir.',
    what_to_remember: [
      '✓ Türkiye’nin NATO’ya girişi: 1952 (Kore Savaşı vesilesiyle)',
      '✓ Demokrat Parti iktidarı: 1950 Beyaz İhtilal (Adnan Menderes)',
      '✓ Kıbrıs Barış Harekâtı (1974): Ayşe Tatile Çıksın (Bülent Ecevit)',
      '✓ KKTC’nin ilk Cumhurbaşkanı: Rauf Denktaş',
      '✓ Türk dünyası çatı kurumları: TİKA (1992) ve TÜRKSOY (1993).',
    ],
    self_check_questions: [
      {
        question: '1. Türkiye’nin 1952 yılında Kuzey Atlantik Savunma Paktı’na (NATO) tam üye olarak kabul edilmesinde aşağıdaki gelişmelerden hangisi doğrudan etkili olmuştur?',
        options: [
          { key: 'A', text: 'II. Dünya Savaşı’na fiilen katılması', isCorrect: false },
          { key: 'B', text: '1950 yılında Kore Savaşı’na asker göndererek büyük bir askeri başarı göstermesi', isCorrect: true },
          { key: 'C', text: 'Balkan Paktı’nı imzalaması', isCorrect: false },
          { key: 'D', text: 'Kıbrıs Barış Harekâtı’nı gerçekleştirmesi', isCorrect: false },
          { key: 'E', text: 'Avrupa İnsan Hakları Sözleşmesi’ni onaylaması', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. Türkiye’nin Kore Savaşı’na asker göndermesi ve Kunuri muharebelerindeki başarısı NATO üyeliğinin yolunu açmıştır.',
      },
      {
        question: '2. 1974 yılında Türk Silahlı Kuvvetleri tarafından Kıbrıs’taki Türklerin can güvenliğini sağlamak ve Enosis tehlikesini önlemek amacıyla düzenlenen harekâtın tarihi parolası hangisidir?',
        options: [
          { key: 'A', text: 'Akdeniz’e İleri', isCorrect: false },
          { key: 'B', text: 'Ayşe Tatile Çıksın', isCorrect: true },
          { key: 'C', text: 'Şimal Yıldızı', isCorrect: false },
          { key: 'D', text: 'Kurtuluş Meşalesi', isCorrect: false },
          { key: 'E', text: 'Barış Pınarı', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. Dışişleri Bakanı Turan Güneş’in Başbakan Bülent Ecevit’e ilettiği "Ayşe Tatile Çıksın" şifresiyle II. Harekât başlatılmıştır.',
      },
      {
        question: '3. 1991 yılında Sovyetler Birliği’nin dağılmasıyla bağımsızlığına kavuşan Türk cumhuriyetleri ile Türkiye arasındaki ekonomik, kültürel ve teknik iş birliğini geliştirmek amacıyla 1992 yılında kurulan kurum hangisidir?',
        options: [
          { key: 'A', text: 'TİKA (Türk İşbirliği ve Koordinasyon Ajansı)', isCorrect: true },
          { key: 'B', text: 'TÜBİTAK', isCorrect: false },
          { key: 'C', text: 'Yunus Emre Enstitüsü', isCorrect: false },
          { key: 'D', text: 'Dış Ekonomik İlişkiler Kurulu', isCorrect: false },
          { key: 'E', text: 'Türkiye Maarif Vakfı', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. TİKA 1992 yılında Türk Cumhuriyetleri ve akraba topluluklarla projeler yürütmek üzere kurulmuştur.',
      },
      {
        question: '4. II. Dünya Savaşı sürecinde Türkiye’de olağanüstü savaş şartlarının getirdiği ekonomik kriz, karaborsacılık ve stokçulukla mücadele etmek amacıyla 1940 yılında çıkarılan temel kanun hangisidir?',
        options: [
          { key: 'A', text: 'Teşvik-i Sanayi Kanunu', isCorrect: false },
          { key: 'B', text: 'Milli Korunma Kanunu', isCorrect: true },
          { key: 'C', text: 'Kabotaj Kanunu', isCorrect: false },
          { key: 'D', text: 'Hıfzıssıhha Kanunu', isCorrect: false },
          { key: 'E', text: 'Takrir-i Sükun Kanunu', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. 1940 tarihli Milli Korunma Kanunu hükümete fiyatları denetleme ve mallara el koyma yetkisi veren olağanüstü savaş kanunudur.',
      },
      {
        question: '5. Bosna-Hersek bağımsızlık mücadelesinin önderi olan, Sırp katliamlarına karşı halkını savunan ve "Bilge Kral" unvanıyla tanınan ilk cumhurbaşkanı kimdir?',
        options: [
          { key: 'A', text: 'Aliya İzzetbegoviç', isCorrect: true },
          { key: 'B', text: 'Ebulfez Elçibey', isCorrect: false },
          { key: 'C', text: 'Rauf Denktaş', isCorrect: false },
          { key: 'D', text: 'Slobodan Miloseviç', isCorrect: false },
          { key: 'E', text: 'Nursultan Nazarbayev', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Bilge Kral olarak anılan Aliya İzzetbegoviç bağımsız Bosna-Hersek’in kurucu lideridir.',
      },
    ],
  };
};
