import type { Topic, TopicContent } from '../../types/database';

export const getTarihSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // 1. İslamiyet Öncesi Türk Tarihi / İlk Türk Devletleri
  if (tid === 'topic-tarih-1-1' || tid === 'topic-tarih-1-2') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Orta Asya Türk tarihi, bozkır coğrafyasının getirdiği göçebe yaşam tarzı, boylar federasyonu yapılanması ve atlı-göçebe askeri kültürü ekseninde şekillenmiştir.

## 1. Orta Asya Kültür Merkezleri
* **Anav Kültürü:** Orta Asya’nın bilinen **en eski** kültürüdür (Aşkabat yakınları). At ilk kez burada evcilleştirilmiştir.
* **Afanasyevo Kültürü:** Orta Asya’da **Türklere ait en eski** kültür merkezidir.
* **Andronovo Kültürü:** Türklerin öncüsü kabul edilen en geniş alana yayılmış tunç kültürüdür.
* **Karasuk Kültürü:** Demirin ilk kez işlendiği kültür merkezidir (Dört tekerlekli araba).
* **Tagar Kültürü:** Orta Asya’nın **en gelişmiş** kültür merkezidir (Hayvan üslubu sanatı).

## 2. Türk Adının Anlamı
* Çin kaynaklarında: **Miğfer**
* Kaşgarlı Mahmud’da (Dîvânü Lugâti't-Türk): **Olgunluk çağı**
* Ziya Gökalp’te: **Töreli, kanun ve nizam sahibi**
* Uygur metinlerinde: **Güç, kuvvet, kudret**
* A. Wambery’ye göre: **Türemek, çoğalmak**

## 3. Türk Göçlerinin Nedenleri ve Sonuçları
* **Temel Nedenler:** Otlak ve meraların yetersizliği, kuraklık, salgın hayvan hastalıkları, hızlı nüfus artışı, boylar arası mücadeleler ve Çin/Kitan baskısı (Bağımsız yaşama arzusu).
* **Sonuçlar:** Türk kültürü farklı kıtalara (Avrupa, Ön Asya, Sibirya) yayılmış; Türk tarihini tek bir coğrafyada incelemek zorlaşmıştır.

## 4. İskitler (Sakalar) - Bozkırın Kuyumcuları
* Tarihte bilinen **ilk Türk topluluğudur** (Devlet değil, topluluk).
* En önemli hükümdarı **Alp Er Tunga**dır (Şehname'de "Afrasiyab" olarak geçer).
* İlk kadın hükümdar: **Tomris Hatun**.
* **Bozkırın Kuyumcuları** olarak adlandırılmışlardır; altın ve gümüş işlemeciliğinde ustalaşmışlardır.
* Atı ilk kez evcilleştirip **üzengiyi** icat etmişler, pantolon ve kemer tokasını kullanmışlardır.
* Destanları: **Alp Er Tunga Destanı** ve **Şu Destanı**.`,
      comparison_tables: [
        {
          title: 'Orta Asya Kültür Merkezleri ve Ayırt Edici Özellikleri',
          headers: ['Kültür Merkezi', 'Özelliği', 'Sınav Anahtarı'],
          rows: [
            ['Anav', 'Orta Asya’nın en eski kültürü', 'Atın ilk evcilleştirildiği yer'],
            ['Afanasyevo', 'Türklere ait en eski kültür', 'Altay-Sayan dağları çevresi'],
            ['Karasuk', 'Demirin ilk işlendiği kültür', 'Yenisey ırmağı boyları'],
            ['Tagar', 'En gelişmiş kültür', 'Hayvan üslubu ve kabartmalar'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'İskitler tarihte kurulan ilk teşkilatlı Türk devletidir.',
          correct_distinction: 'İskitler bilinen ilk Türk TOPLULUĞUDUR. Bilinen ilk teşkilatlı Türk DEVLETİ ise Büyük Hun Devleti’dir.',
          tip: 'Soruda "ilk Türk topluluğu" denirse İskitler; "ilk teşkilatlı Türk devleti" denirse Hunlar işaretlenmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Tarih testinde İskitlerin 'Bozkırın Kuyumcuları' unvanı, Tomris Hatun, üzenginin icadı ve Şehname'de Alp Er Tunga'nın 'Afrasiyab' adıyla geçmesi doğrudan soru olarak gelebilmektedir.",
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
          question: '1. Firdevsi’nin "Şehname" adlı eserinde "Afrasiyab" olarak geçen ve Amazon adı verilen kadın savaşçılarıyla tanınan ilk Türk topluluğu hangisidir?',
          options: [
            { key: 'A', text: 'Hunlar', isCorrect: false },
            { key: 'B', text: 'İskitler (Sakalar)', isCorrect: true },
            { key: 'C', text: 'Göktürkler', isCorrect: false },
            { key: 'D', text: 'Uygurlar', isCorrect: false },
            { key: 'E', text: 'Hazarlar', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. İskitlerin büyük hükümdarı Alp Er Tunga, İran destanı Şehname’de Afrasiyab adıyla anılır.',
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
          explanation: 'Doğru cevap B seçeneğidir. Anav tüm Orta Asya’nın en eskisi iken, Afanasyevo Türklere ait en eski kültür bölgesidir.',
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
          explanation: 'Doğru cevap D seçeneğidir. İslamiyet öncesi Türk göçlerinde dini yayma amacı yoktur; gaza ve cihat Türk-İslam dönemi kavramıdır.',
        },
        {
          question: '4. Kaşgarlı Mahmud’un Dîvânü Lugâti\'t-Türk adlı eserinde "Türk" kelimesine verdiği anlam aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Miğfer', isCorrect: false },
            { key: 'B', text: 'Töreli ve nizam sahibi', isCorrect: false },
            { key: 'C', text: 'Olgunluk çağı', isCorrect: true },
            { key: 'D', text: 'Güç ve kuvvet', isCorrect: false },
            { key: 'E', text: 'Türeyen ve çoğalan', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Kaşgarlı Mahmud Türk adını "olgunluk çağı" olarak tanımlamıştır.',
        },
        {
          question: '5. Atı ilk kez savaş aracı haline getiren, üzengiyi icat eden ve maden işlemeciliğindeki ustalıkları nedeniyle "Bozkırın Kuyumcuları" olarak adlandırılan topluluk hangisidir?',
          options: [
            { key: 'A', text: 'İskitler', isCorrect: true },
            { key: 'B', text: 'Uygurlar', isCorrect: false },
            { key: 'C', text: 'Karluklar', isCorrect: false },
            { key: 'D', text: 'Türgişler', isCorrect: false },
            { key: 'E', text: 'Kırgızlar', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. İskitler altın ve gümüş işlemeciliğinde ileri gitmiş, üzengi ve koşum takımlarını icat etmişlerdir.',
        },
      ],
    };
  }

  // 2. Türklerde Devlet Yönetimi, Toplum ve Hukuk (topic-tarih-1-6, 1-7, 1-8, 1-9)
  if (tid === 'topic-tarih-1-6' || tid === 'topic-tarih-1-7' || tid === 'topic-tarih-1-8' || tid === 'topic-tarih-1-9') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `İslamiyet öncesi Türk devlet teşkilatı; Kut anlayışı, töre hukuku, ikili teşkilat ve boylar federasyonu temellerine dayanır.

## 1. Kut Anlayışı ve Veraset Sistemi
* **Kut:** Devleti yönetme yetkisinin Gök Tanrı tarafından hükümdara ve ailesine (hanedana) verildiğine inanılmasıdır.
* **Sonuçları:**
  - Ülke hanedanın ortak malı sayılmıştır.
  - Taht kavgalarına ve Türk devletlerinin **kısa sürede parçalanıp yıkılmasına** yol açmıştır.
  - "Kan akıtarak öldürmeme" inancı gereği hanedan üyeleri yay kirişiyle boğularak idam edilirdi.

## 2. İkili Devlet Teşkilatı
* Ülke yönetim kolaylığı için Doğu ve Batı olarak ikiye ayrılmıştır.
* Güneşin doğduğu yön kutsal sayıldığı için **asıl Kağan DOĞUDA** oturur.
* Batıyı ise Kağana bağlı olarak hükümdar ailesinden **YABGU** yönetirdi.

## 3. Kurultay (Toy / Kengeş)
* Devlet işlerinin görüşülüp karara bağlandığı meclistir.
* Üyelerine **"Toygun"** denir.
* Kağan, Hatun, Boy Beyleri, Aygucı (Başbakan) ve ordu komutanları katılır.
* Hükümdarın yetkilerini kısıtlayan danışma meclisi niteliğindedir; gerektiğinde yeni kağanı seçer veya töreye uymayan kağanı görevden alabilirdi.

## 4. Sosyal Yapı Basamakları
* **Oguş:** Aile
* **Urug:** Aileler birliği (Sülale)
* **Boy (Bod):** Kabile / Uruglar birliği (Başında Boy Beyi bulunur)
* **Bodun:** Millet / Boylar birliği
* **İl (El):** Devlet

## 5. Töre ve Hukuk Sistemi
* Töre; örf, adet, gelenekler ve kağan emirlerinden oluşan **sözlü hukuk** kurallarıdır.
* Kağan dahi töreye uymak zorundadır (Hukukun üstünlüğü ilkesi).
* Göçebe yaşam nedeniyle **uzun süreli hapis cezaları yoktur** (en fazla 10 gün).
* Ağır suçlar (vatana ihanet, adam öldürme, ordudan kaçma) doğrudan ölümle cezalandırılırdı.
* Yüksek mahkemeye **Yargu**, başkanına **Yargucı** denirdi.`,
      comparison_tables: [
        {
          title: 'İslamiyet Öncesi Türk Devlet Görevlileri ve Karşılıkları',
          headers: ['Eski Türkçe Unvan', 'Görevi / Anlamı'],
          rows: [
            ['Kağan / Hakan / Han', 'Devlet hükümdarı'],
            ['Hatun (Katun)', 'Hükümdar eşi, elçi kabul eder, kurultaya katılır'],
            ['Aygucı (Üge)', 'Vezir / Başbakan'],
            ['Buyruk', 'Bakan'],
            ['Tudun', 'Vergi memuru / Vali'],
            ['Tutuk', 'Askeri vali'],
            ['Bitikçi / Tamgacı', 'Kâtip / Dışişleri ve mühür görevlisi'],
            ['Yargucı', 'Yargıç / Hâkim'],
            ['Tarkan', 'Ordu komutanı'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'İslamiyet öncesi Türklerde sınıf ayrımı ve kölelik sistemi vardı.',
          correct_distinction: 'Türklerde özel mülkiyet ve toprağa bağlı feodalite gelişmediği için Avrupa’daki gibi asiller-köleler ayrımı (sınıf farkı) OLUŞMAMIŞTIR.',
          tip: 'Sorularda Türk toplumunda sınıf çatışmasının olmama sebebi: Toprağın devlet mülkiyetinde olması ve göçebe yaşam tarzıdır.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Tarih testinde Kut anlayışının taht kavgalarına yol açması, Kurultay'da Hatun'un yer almasının kadının siyasi gücünü göstermesi ve hapis cezalarının kısa süreli olmasının göçebelikle ilişkisi sürekli sorulan anahtar kazanımlardır.",
          importance: 'critical',
        },
      ],
      summary: 'Türk devlet teşkilatında Kut veraseti belirler; Kurultay danışma organıdır; toplum oguş-urug-boy-bodun-il hiyerarşisine dayanır; töre hukukun üstünlüğünü simgeler.',
      what_to_remember: [
        '✓ Kut: Tanrısal yetki -> Hanedanın ortak malı -> Taht kavgaları.',
        '✓ Kurultay üyeleri: Toygun (Hatun katılır, elçi kabul eder).',
        '✓ Toplum: Oguş (aile) -> Urug -> Boy -> Bodun -> İl (devlet).',
        '✓ Hukuk: Töre (Kağan bile uyar), hapisler kısa süreli (göçebelik).',
      ],
      self_check_questions: [
        {
          question: '1. İslamiyet öncesi Türk devletlerinde hükümdarın eşi olan Hatun’un kurultaya katılması, kendi adına elçi kabul etmesi ve fermanlarda imzasının bulunması aşağıdakilerden hangisini doğrudan kanıtlar?',
          options: [
            { key: 'A', text: 'Devletin teokratik mutlakıyetle yönetildiğini', isCorrect: false },
            { key: 'B', text: 'Kadının devlet yönetiminde siyasi ve hukuki yetkilere sahip olduğunu', isCorrect: true },
            { key: 'C', text: 'Ordunun tamamen kadın askerlerden kurulduğunu', isCorrect: false },
            { key: 'D', text: 'Kut anlayışının yalnızca kadınlara tanındığını', isCorrect: false },
            { key: 'E', text: 'İkili teşkilat sisteminin kaldırıldığını', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Hatun’un elçi kabulü ve kurultay üyeliği Türklerde kadının siyasi haklara sahip olduğunun göstergesidir.',
        },
        {
          question: '2. Türk devletlerinde görülen "ülkenin hanedan üyelerinin ortak malı sayılması" kuralının Türk tarihi üzerindeki en yıkıcı sonucu hangisidir?',
          options: [
            { key: 'A', text: 'Sık sık taht kavgalarının yaşanması ve devletlerin kısa sürede bölünerek yıkılması', isCorrect: true },
            { key: 'B', text: 'Yazılı hukuka geçilmesinin engellenmesi', isCorrect: false },
            { key: 'C', text: 'Ticaret gelirlerinin azalması', isCorrect: false },
            { key: 'D', text: 'Ordu teşkilatının zayıflaması', isCorrect: false },
            { key: 'E', text: 'Farklı dinlerin kabul edilmesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Hanedanın tüm erkek üyelerinin tahtta hak iddia etmesi iç savaşlara ve bölünmelere yol açmıştır.',
        },
        {
          question: '3. İslamiyet öncesi Türk toplum yapısında "Oguş" kavramının karşılığı aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Aile', isCorrect: true },
            { key: 'B', text: 'Sülale (Urug)', isCorrect: false },
            { key: 'C', text: 'Boy / Kabile', isCorrect: false },
            { key: 'D', text: 'Millet (Bodun)', isCorrect: false },
            { key: 'E', text: 'Devlet (İl)', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Türk sosyal yapısının en küçük yapı taşı Oguş (aile)dir.',
        },
        {
          question: '4. İslamiyet öncesi Türk devletlerinde görülen aşağıdaki durumlardan hangisi "Hukukun Üstünlüğü" ilkesinin varlığına kanıt gösterilebilir?',
          options: [
            { key: 'A', text: 'Kağanın aldığı kararların dahi töreye uygun olmak zorunda olması', isCorrect: true },
            { key: 'B', text: 'Hapis cezalarının 10 günle sınırlandırılması', isCorrect: false },
            { key: 'C', text: 'Kurultayın sadece savaş zamanlarında toplanması', isCorrect: false },
            { key: 'D', text: 'Vergilerin Tudunlar tarafından toplanması', isCorrect: false },
            { key: 'E', text: 'Yabgunun batı kanadını yönetmesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Hükümdarın yetkilerinin töre ile sınırlandırılmış olması hukukun üstünlüğünü kanıtlar.',
        },
        {
          question: '5. Eski Türklerde hükümet (bakanlar kurulu) başkanı olan vezire verilen unvan hangisidir?',
          options: [
            { key: 'A', text: 'Aygucı (Üge)', isCorrect: true },
            { key: 'B', text: 'Tudun', isCorrect: false },
            { key: 'C', text: 'Bitikçi', isCorrect: false },
            { key: 'D', text: 'Tarkan', isCorrect: false },
            { key: 'E', text: 'Yargucı', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Hükümet başkanına (başbakana/vezire) Aygucı veya Üge adı verilirdi.',
        },
      ],
    };
  }

  // 3. Türk-İslam Devletleri (Karahanlılar, Gazneliler, Büyük Selçuklu)
  if (tid.startsWith('topic-tarih-1-10') || tid.startsWith('topic-tarih-1-11') || tid.startsWith('topic-tarih-1-12') || tid.startsWith('topic-tarih-1-13') || tid.startsWith('topic-tarih-1-14') || tid.startsWith('topic-tarih-1-15')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Türk-İslam tarihi, 751 Talas Savaşı ile Türklerin kitleler halinde İslamiyet’i kabul etmesiyle başlar; Karahanlılar, Gazneliler ve Büyük Selçuklular ile kurumsallaşır.

## 1. Talas Savaşı (751) ve Türklerin İslamlaşması
* Abbasiler ile Çinliler arasında yapılmıştır. **Karluk Türkleri** Abbasilerin yanında yer alarak savaşın kazanılmasını sağlamıştır.
* **Sonuçları:** Türk-Arap dostluğu başlamış, kâğıt ilk kez Çin dışında (Semerkant) üretilmiş ve Türkler İslamiyet’i benimsemeye başlamıştır.
* İslamiyet’i kabul eden ilk Türk boyu: **Karluklar**.
* İslamiyet’i kabul eden ilk Türk devleti: **İtil (Volga) Bulgarları** (Almış Han dönemi).
* Orta Asya’da İslamiyet’i kabul eden ilk Türk devleti: **Karahanlılar** (Satuk Buğra Han dönemi).

## 2. Karahanlılar (840 - 1212)
* **Kurucular:** Bilge Kül Kadir Han. Karluk, Yağma, Çiğil ve Tuhsi boyları kurmuştur.
* **Özellikleri:** Resmi dilleri Türkçe, alfabeleri Uygur alfabesidir (Milli kimliklerini en sıkı koruyan devlettir).
* **İlkler:**
  - İlk Türk-İslam medresesi (Semerkant Medresesi).
  - İlk burslu öğrencilik sistemi.
  - İlk kervansaraylar (**Ribat**).
  - İlk hastane (**Bimarhane**).
  - İlk posta teşkilatı.

## 3. İlk Türk-İslam Edebi Eserleri
* **Kutadgu Bilig (Yusuf Has Hacip):** "Mutluluk veren bilgi". İlk Türk-İslam edebi eseri ve siyasetnamesidir. Uygur alfabesi ve aruz vezniyle yazılmış, Tabgaç Buğra Han’a sunulmuştur.
* **Dîvânü Lugâti't-Türk (Kaşgarlı Mahmud):** İlk Türkçe sözlük ve dilbilgisi kitabıdır. Araplara Türkçeyi öğretmek amacıyla Abbasi Halifesi El-Muktedî Billah’a sunulmuştur. İlk Türk dünya haritasını içerir.
* **Atabetü'l-Hakâyık (Edib Ahmed Yükneki):** "Hakikatlerin eşiği". Ahlak ve öğüt kitabıdır. Dad İspehsalar Mehmed Bey’e sunulmuştur.
* **Dîvân-ı Hikmet (Hoca Ahmed Yesevî):** İlk Türk tasavvufi eseridir. Dervişlik, ilahi aşk ve ahlakı anlatır (Pîr-i Türkistan).

## 4. Gazneliler (963 - 1187)
* **Kurucu:** Alp Tigin (Afganistan/Gazne merkezli).
* **Sultan Mahmud:** Abbasileri Şii Büveyhoğullarına karşı korumuş; Halife tarafından kendisine **"Sultan" unvanı verilen ilk Türk hükümdarı** olmuştur.
* Hindistan’a **17 sefer** düzenleyerek İslamiyet’in ve kast sistemini yıkan adaletin Hindistan’a yayılmasını sağlamıştır (Somnat Seferi).
* Sarayında ünlü bilgin **Bîrûnî** için *"Sarayımın en değerli hazinesi"* demiştir.
* 1040 **Dandanakan Savaşı** ile Selçuklulara yenilerek zayıflama sürecine girmişlerdir.

## 5. Büyük Selçuklu Devleti (1040 - 1157)
* **Kurucular:** Tuğrul ve Çağrı Beyler (1040 Dandanakan Zaferi ile resmen kuruldu).
* **1048 Pasinler Savaşı:** Bizans ve Gürcülerle yapılan ilk büyük savaştır.
* **1071 Malazgirt Savaşı:** Sultan Alparslan Bizans İmparatoru Romen Diyojen’i mağlup etmiş; **Anadolu’nun kapıları Türklere açılmıştır**.
* **Nizamülmülk:** Ünlü vezir; **Siyasetname** adlı eseri yazmış ve Batınilik (Haşhaşiler) tehlikesine karşı **Nizamiye Medreseleri**ni kurmuştur.
* **İkta Sistemi:** Toprak gelirlerinin asker yetiştirme karşılığı tahsis edilmesidir (Osmanlı’daki Tımar’ın temeli).
* **1141 Katvan Savaşı:** Moğol Karahitaylara yenilmiş ve Sultan Sencer’in ölümüyle yıkılmıştır.`,
      comparison_tables: [
        {
          title: 'İlk Türk-İslam Eserleri Karşılaştırma Tablosu',
          headers: ['Eser', 'Yazar', 'Türü / Önemi', 'Sunulan Kişi'],
          rows: [
            ['Kutadgu Bilig', 'Yusuf Has Hacip', 'İlk siyasetname ve edebi eser', 'Tabgaç Buğra Han'],
            ['Dîvânü Lugâti\'t-Türk', 'Kaşgarlı Mahmud', 'İlk Türkçe sözlük, ilk harita', 'El-Muktedî Billah (Abbasi)'],
            ['Atabetü\'l-Hakâyık', 'Edib Ahmed Yükneki', 'Dini ve ahlaki öğüt kitabı', 'Dad İspehsalar Mehmed Bey'],
            ['Dîvân-ı Hikmet', 'Hoca Ahmed Yesevî', 'İlk tasavvuf eseri (Hikmetler)', 'Halk / Dervişler'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'İslamiyet’i kabul eden ilk Türk devleti Gaznelilerdir.',
          correct_distinction: 'İslamiyet’i kabul eden ilk Türk devleti Doğu Avrupa’da İtil (Volga) Bulgarları, Orta Asya’da ise Karahanlılar’dır.',
          tip: 'Sorularda Orta Asya ibaresine dikkat ediniz: Orta Asya’da ilk -> Karahanlılar.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Tarih testinde Sultan unvanını ilk kullanan hükümdarın Gazneli Mahmud olduğu, Dîvânü Lugâti't-Türk'ün Araplara Türkçeyi öğretmek için yazıldığı ve Nizamiye Medreseleri'nin Batınilikle mücadele için Nizamülmülk tarafından kurulduğu soruların değişmez odaklarıdır.",
          importance: 'critical',
        },
      ],
      summary: 'Türk-İslam tarihi Karahanlılar ile edebi ve kurumsal temellerini atmış; Gazneliler ile Hindistan’a yayılmış; Selçuklular ile Malazgirt zaferiyle Anadolu’yu yurt edinmiştir.',
      what_to_remember: [
        '✓ Talas Savaşı (751): Karluklar Abbasilere destek verdi -> İslamlaşma başladı.',
        '✓ Karahanlılar: İlk burslu eğitim, Ribat (kervansaray), Bimarhane (hastane).',
        '✓ 4 Temel Eser: Kutadgu Bilig, Divanü Lugati’t-Türk, Atabetü’l-Hakayık, Divan-ı Hikmet.',
        '✓ Gazneli Mahmud: Sultan unvanını ilk kullanan (Hindistan 17 sefer, Biruni).',
        '✓ Selçuklular: 1048 Pasinler (ilk Bizans), 1071 Malazgirt (Anadolu kapısı), Nizamülmülk (İkta, Nizamiye).',
      ],
      self_check_questions: [
        {
          question: '1. Abbasileri Şii Büveyhoğulları baskısından kurtardığı için Abbasi Halifesi tarafından kendisine Türk tarihinde İLK KEZ "Sultan" unvanı verilen hükümdar kimdir?',
          options: [
            { key: 'A', text: 'Tuğrul Bey', isCorrect: false },
            { key: 'B', text: 'Gazneli Mahmud', isCorrect: true },
            { key: 'C', text: 'Sultan Alparslan', isCorrect: false },
            { key: 'D', text: 'Satuk Buğra Han', isCorrect: false },
            { key: 'E', text: 'Melikşah', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Halife tarafından Sultan unvanı verilen ilk Türk hükümdarı Gazneli Mahmud’dur.',
        },
        {
          question: '2. Araplara Türkçeyi öğretmek ve Türk dilinin Arapça kadar zengin olduğunu kanıtlamak amacıyla yazılan, içinde ilk Türk dünya haritasının da bulunduğu eser hangisidir?',
          options: [
            { key: 'A', text: 'Kutadgu Bilig', isCorrect: false },
            { key: 'B', text: 'Dîvânü Lugâti\'t-Türk', isCorrect: true },
            { key: 'C', text: 'Atabetü\'l-Hakâyık', isCorrect: false },
            { key: 'D', text: 'Dîvân-ı Hikmet', isCorrect: false },
            { key: 'E', text: 'Şehname', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Kaşgarlı Mahmud tarafından yazılan Dîvânü Lugâti\'t-Türk ilk Türkçe sözlüktür.',
        },
        {
          question: '3. Büyük Selçuklu Devleti’nde Vezir Nizamülmülk tarafından Bağdat ve diğer şehirlerde kurulan Nizamiye Medreseleri’nin temel kuruluş amaçlarından biri hangisidir?',
          options: [
            { key: 'A', text: 'Batınilik (Haşhaşilik) ve yıkıcı fikirlere karşı Sünni İslam düşüncesini savunacak alimler ve devlet memurları yetiştirmek', isCorrect: true },
            { key: 'B', text: 'Bizans ile diplomatik antlaşmalar imzalamak', isCorrect: false },
            { key: 'C', text: 'Haçlı ordularına karşı deniz donanması kurmak', isCorrect: false },
            { key: 'D', text: 'Talas Savaşı’na hazırlık yapmak', isCorrect: false },
            { key: 'E', text: 'Moğollarla barış antlaşması yapmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Nizamiye Medreseleri devlet kadrosu yetiştirmek ve Hasan Sabbah’ın Batıni propagandalarına ilmi yoldan cevap vermek için kurulmuştur.',
        },
        {
          question: '4. Karahanlılar döneminde inşa edilen ve sınır güvenliği, askeri karakol ile ticaret kervanlarının güvenli konaklamasını sağlayan yapılara ne ad verilir?',
          options: [
            { key: 'A', text: 'Ribat', isCorrect: true },
            { key: 'B', text: 'Bimarhane', isCorrect: false },
            { key: 'C', text: 'Kümbet', isCorrect: false },
            { key: 'D', text: 'Külliye', isCorrect: false },
            { key: 'E', text: 'İmaret', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Ribatlar hem askeri sınır karakolu hem de ilk Türk kervansarayı işlevi görmüştür.',
        },
        {
          question: '5. Türklerin Anadolu’yu kesin vatan yapma sürecinde Bizans İmparatorluğu ile yaptığı İLK büyük savaş aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: '1048 Pasinler Savaşı', isCorrect: true },
            { key: 'B', text: '1071 Malazgirt Savaşı', isCorrect: false },
            { key: 'C', text: '1176 Miryokefalon Savaşı', isCorrect: false },
            { key: 'D', text: '1040 Dandanakan Savaşı', isCorrect: false },
            { key: 'E', text: '1141 Katvan Savaşı', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Pasinler (1048) Büyük Selçukluların Bizans ile yaptığı ilk büyük savaştır. Malazgirt kapıları açmış, Miryokefalon ise Anadolu’nun tapusunu almıştır.',
        },
      ],
    };
  }

  // 4. Osmanlı Devleti (unit-tarih-2 tüm konular)
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `Osmanlı Devleti; merkeziyetçi mutlak yönetim anlayışı, Divan-ı Hümayun teşkilatı, Tımar ve Kapıkulu ordu sistemi, Şer'i-Örfi hukuk dengesi ve Millet Sistemi ile 600 yılı aşkın süre varlığını sürdürmüştür.

## 1. Osmanlı Devlet Yönetimi ve Veraset Değişimleri
* **Osman ve Orhan Bey:** "Ülke hanedanın ortak malıdır" (Geleneksel Türk veraseti -> Taht kavgaları).
* **I. Murad:** "Ülke **padişah ve oğullarınındır**" (Merkezi otorite güçlendirildi).
* **II. Mehmed (Fatih):** "Ülke **padişahındır**" ve **Kardeş Katli Yasası** (Kanunname-i Âli Osman -> Mutlak merkeziyetçilik).
* **I. Ahmed:** **Ekber ve Erşed Sistemi** (Hanedanın en yaşlı ve akıl sağlığı yerinde olan üyesinin tahta geçmesi) ve **Kafes Usulü** (Şehzadelerin sancağa çıkma uygulamasının kaldırılması).

## 2. Merkez Teşkilatı: Divan-ı Hümayun Üyeleri
* **Seyfiye (Yönetim & Askeri Sınıf):** Sadrazam (Veziriazam), Kubbealtı Vezirleri, Kaptan-ı Derya (Deniz kuvvetleri), Yeniçeri Ağası.
* **İlmiye (Adalet, Eğitim & Din Sınıfı):** 
  - **Şeyhülislam (Müfti):** Divan kararlarının dine uygunluğuna ilişkin **Fetva** verir.
  - **Kazasker (Kadıasker):** Büyük davalara bakar, kadı ve müderrislerin (öğretmenlerin) atamasını yapar.
* **Kalemiye (Bürokrasi & Maliye Sınıfı):**
  - **Defterdar:** Devletin tüm gelir ve giderlerinden sorumludur (Bütçe).
  - **Nişancı:** Padişahın fermanlarına **Tuğra** çeker, fethedilen toprakları **Tahrir Defterleri**ne kaydeder.
  - **Reisülküttab:** Dışişleri bakanıdır (18. yüzyıldan itibaren Nişancıdan ayrılmıştır).

## 3. Taşra Teşkilatı ve Eyalet Türleri
* **Salyanesiz (Yıllıksız) Eyaletler:** Tımar (Dirlik) sisteminin uygulandığı merkeze yakın eyaletlerdir (Rumeli, Anadolu, Şam, Sivas).
* **Salyaneli (Yıllıklı) Eyaletler:** Tımar uygulanmaz; gelirler **İltizam Sistemi** ile mültezimler aracılığıyla peşin toplanır (Mısır, Trablusgarp, Tunus, Cezayir).
* **İmtiyazlı (Özel Statülü) Eyaletler:** İç işlerinde serbest eyaletlerdir (Hicaz asker ve vergi vermez; Kırım asker verir vergi vermez; Eflak-Boğdan-Erdel her ikisini de verir).

## 4. Ordu Teşkilatı
* **Kapıkulu Askerleri (Merkez / Maaşlı):** Devşirme kökenlidir. 3 ayda bir **Ulufe** maaşı, her taht değişiminde **Cülus Bahşişi** alırlar (Yeniçeriler, Cebeciler, Topçular, Sipah-Silahtar).
* **Eyalet Askerleri (Tımarlı Sipahiler):** Türk kökenlidir, devlete doğrudan maaş yükü getirmezler; dirlik gelirleriyle beslenirler (**Cebelü** atlı askeri).

## 5. Islahat Dönemleri
* **17. Yüzyıl (Duraklama):** Islahatlar kişilere bağlı kalmış, köklü çözümler üretilememiştir (Kuyucu Murad, Tarhuncu Ahmed - ilk denk bütçe, Genç Osman, IV. Murad - Koçi Bey Risalesi).
* **18. Yüzyıl (Gerileme):** Batı ilk kez örnek alınmıştır (Lale Devri / III. Ahmed, I. Mahmud / Hendesehane - ilk batılı askeri okul, III. Selim / Nizam-ı Cedit).
* **19. Yüzyıl (Dağılma & Demokratikleşme):**
  - **Sened-i İttifak (1808):** Padişahın yetkileri ilk kez sınırlandırıldı (Ayanlar).
  - **Tanzimat Fermanı (1839):** Kanun üstünlüğü ilk kez kabul edildi.
  - **Islahat Fermanı (1856):** Gayrimüslimlere geniş ayrıcalıklar verildi.
  - **I. Meşrutiyet (1876):** İlk anayasa (**Kanun-i Esasi**) yürürlüğe girdi; halk ilk kez yönetime katıldı (Meclis-i Mebusan).`,
      comparison_tables: [
        {
          title: 'Divan-ı Hümayun Sınıfları ve Temsilcileri',
          headers: ['Yönetici Sınıf', 'Alanı', 'Önemli Temsilcileri'],
          rows: [
            ['Seyfiye (Kılıç Ehli)', 'Yönetim, Ordu, Güvenlik', 'Sadrazam, Vezirler, Kaptan-ı Derya, Yeniçeri Ağası'],
            ['İlmiye (İlim Ehli)', 'Adalet, Din, Eğitim', 'Şeyhülislam, Kazasker, Kadı, Müderris'],
            ['Kalemiye (Kalem Ehli)', 'Bürokrasi, Yazışma, Maliye', 'Defterdar, Nişancı, Reisülküttab'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Kazasker ordu komutanıdır ve askeri seferleri yönetir.',
          correct_distinction: 'Kazasker askeri komutan değil, İLMİYE sınıfına mensup adalet ve eğitim bakanıdır. Kadı ve müderrisleri atar.',
          tip: 'Sorularda kadı ve müderris ataması sorulduğunda doğrudan KAZASKER seçilmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Tarih testinde Ekber ve Erşed sisteminin veraset belirsizliğini bitirmesi, Nişancının Tahrir defterlerini tutması ve Tanzimat Fermanı ile padişahın kanun gücünü tanıması en çok sorgulanan konulardır.",
          importance: 'critical',
        },
      ],
      summary: 'Osmanlı devlet yapısında veraset sistemindeki değişimler, Divan görevlileri (Seyfiye, İlmiye, Kalemiye), Tımar sistemi ve ıslahat hareketleri anahtar çalışma alanıdır.',
      what_to_remember: [
        '✓ Veraset: Fatih (Kardeş katli) -> I. Ahmed (Ekber-Erşed & Kafes Usulü).',
        '✓ Divan: Kazasker (Kadı/Müderris atar), Defterdar (Maliye), Nişancı (Tuğra & Tahrir).',
        '✓ Eyaletler: Salyanesiz (Tımar var), Salyaneli (İltizam var, Tımar yok).',
        '✓ Demokratikleşme: Sened-i İttifak (1808) -> Tanzimat (1839, Kanun gücü) -> Meşrutiyet (1876, Anayasa/Meclis).',
      ],
      self_check_questions: [
        {
          question: '1. Osmanlı Devleti’nde kadı ve müderrislerin (öğretmenlerin) atama ve terfi işlemlerini yürüten, Divan-ı Hümayun’da büyük davalara bakan İlmiye sınıfı temsilcisi kimdir?',
          options: [
            { key: 'A', text: 'Sadrazam', isCorrect: false },
            { key: 'B', text: 'Kazasker', isCorrect: true },
            { key: 'C', text: 'Şeyhülislam', isCorrect: false },
            { key: 'D', text: 'Nişancı', isCorrect: false },
            { key: 'E', text: 'Reisülküttab', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Kazasker (Kadıasker), adalet ve eğitim teşkilatının başı olup kadı ve müderris atamalarını yapar.',
        },
        {
          question: '2. Osmanlı Devleti’nde I. Ahmed döneminde getirilen "Ekber ve Erşed" kuralının temel amacı aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Divan-ı Hümayun’un yetkilerini tamamen sınırlandırmak', isCorrect: false },
            { key: 'B', text: 'Taht kavgalarını önlemek ve tahta geçiş kurallarını belirli bir düzene bağlamak', isCorrect: true },
            { key: 'C', text: 'Kapıkulu ordusunu ortadan kaldırmak', isCorrect: false },
            { key: 'D', text: 'Eyaletlerde iltizam sistemini yaygınlaştırmak', isCorrect: false },
            { key: 'E', text: 'Tanzimat Fermanı’nın ilanını sağlamak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Ekber ve Erşed (en yaşlı ve olgun şehzadenin tahta geçmesi) veraseti kesin kurala bağlayıp iç savaşları önlemeyi amaçlamıştır.',
        },
        {
          question: '3. Osmanlı Devleti’nde fethedilen toprakların kaydını tutan (Tahrir Defterleri) ve padişah adına ferman ve beratlara "Tuğra" çeken görevli hangisidir?',
          options: [
            { key: 'A', text: 'Defterdar', isCorrect: false },
            { key: 'B', text: 'Nişancı', isCorrect: true },
            { key: 'C', text: 'Kaptan-ı Derya', isCorrect: false },
            { key: 'D', text: 'Yeniçeri Ağası', isCorrect: false },
            { key: 'E', text: 'Veziriazam', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Tuğra çekme ve Tahrir kayıtlarını tutma görevi Nişancıya aittir.',
        },
        {
          question: '4. Osmanlı tarihinde padişahın kendi yetkilerini kanun gücüyle sınırlandırdığı ve tüm tebaanın can, mal, namus güvencesinin devlet teminatı altına alındığı ilk belge hangisidir?',
          options: [
            { key: 'A', text: 'Sened-i İttifak (1808)', isCorrect: false },
            { key: 'B', text: 'Tanzimat Fermanı (1839)', isCorrect: true },
            { key: 'C', text: 'Islahat Fermanı (1856)', isCorrect: false },
            { key: 'D', text: 'Kanun-i Esasi (1876)', isCorrect: false },
            { key: 'E', text: 'Fatih Kanunnamesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Tanzimat Fermanı ile padişah ilk kez "kanunun üstünlüğü" ilkesini kabul etmiştir.',
        },
        {
          question: '5. Osmanlı taşra teşkilatında Tımar sisteminin UYGULANMADIĞI, vergilerin iltizam usulüyle peşin toplandığı eyalet türü hangisidir?',
          options: [
            { key: 'A', text: 'Salyaneli (Yıllıklı) Eyaletler', isCorrect: true },
            { key: 'B', text: 'Salyanesiz (Yıllıksız) Eyaletler', isCorrect: false },
            { key: 'C', text: 'İmtiyazlı Eyaletler', isCorrect: false },
            { key: 'D', text: 'Yurtluk ve Ocaklık Sancakları', isCorrect: false },
            { key: 'E', text: 'Rumeli Beylerbeyliği', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Salyaneli eyaletler merkeze uzak (Mısır, Trablusgarp vb.) olup Tımar uygulanmaz, İltizam yöntemi işletilirdi.',
        },
      ],
    };
  };
