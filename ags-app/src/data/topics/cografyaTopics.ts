import type { Topic, TopicContent } from '../../types/database';

export const getCografyaSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // 1. TÜRKİYE'NİN KONUMU (topic-cografya-1-1, 1-2, 1-3)
  if (tid.startsWith('topic-cografya-1-1') || tid.startsWith('topic-cografya-1-2') || tid.startsWith('topic-cografya-1-3')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Türkiye'nin coğrafi konumu, hem matematiksel (mutlak) koordinatlarının getirdiği iklim kuşaklarıyla hem de özel (göreceli) jeopolitik köprü konumuyla belirlenir.

## 1. Türkiye'nin Matematik Konumu ve Sonuçları
* **Koordinatlar:** **36° - 42° Kuzey Paralelleri** ile **26° - 45° Doğu Meridyenleri** arasında yer alır.
* **Kuzey Yarım Küre ve Orta Kuşak Sonuçları:**
  - Dört mevsim belirgin olarak yaşanır (Orta Kuşak).
  - Akdeniz iklim kuşağında yer alır.
  - Batı rüzgârları kuşağındadır; **Cephesel (Frontal) yağışlar** yaygındır.
  - Güneyden kuzeye gidildikçe güneş ışınlarının geliş açısı daralır, sıcaklık azalır, gölge boyu uzar, çizgisel hız azalır, gece-gündüz süre farkı artar.
  - Dağların güney yamaçları daha çok güneş alır (**Bakı Etkisi**).
* **Boylam ve Saat Dilimi:**
  - Doğu-batı arasında **19 meridyen** farkı (19 x 4 = **76 dakika** yerel saat farkı) vardır.
  - Türkiye yıl boyunca **45° Doğu (Iğdır)** meridyeninin yerel saatini ulusal saat (+3 GMT) olarak kullanır.

## 2. Türkiye'nin Özel (Göreceli) Konumu ve Sonuçları
* Üç tarafının denizlerle çevrili olması ve Asya-Avrupa-Afrika arasında enerji/ticaret köprüsü olmasıdır.
* **Yer Şekillerinin Etkisi:**
  - Ortalama yükseltisi fazladır (**1132 metre**), batıdan doğuya gidildikçe yükselti ve karasallık artar.
  - Dağlar Karadeniz ve Akdeniz’de **kıyıya paralel**, Ege’de ise **kıyıya dik** uzanır.
  - Kıyı ile iç kesimler arasında iklim ve ulaşım farklılıkları belirgindir (Kuzeyde Zigana/Kop, Güneyde Gülek/Sertavul/Belen geçitleri).
  - Kısa mesafelerde yer şekilleri değiştiği için **aynı anda farklı iklim özellikleri** yaşanır.`,
      comparison_tables: [
        {
          title: 'Matematik Konum vs. Özel Konum Sonuçları',
          headers: ['Durum / Özellik', 'Konum Türü', 'Temel Sebebi'],
          rows: [
            ['Akdeniz’in Karadeniz’den daha tuzlu olması', 'Matematik Konum', 'Enlem (Buharlaşma ve sıcaklık)'],
            ['Aynı anda Erzurum’da kar yağarken Antalya’da denize girilmesi', 'Özel Konum', 'Yükselti ve yer şekilleri çeşitliliği'],
            ['Güneyden esen rüzgârların (Lodos, Samyeli) sıcaklığı artırması', 'Matematik Konum', 'Kuzey Yarım Küre’de yer alması'],
            ['İzmir ile Van’ın sıcaklıklarının farklı olması', 'Özel Konum', 'Yükselti ve karasallık farkı (Enlemleri aynıdır)'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Aynı enlem üzerindeki tüm şehirlerin sıcaklığı yıl boyunca eşittir.',
          correct_distinction: 'Aynı enlemdeki şehirlere güneş ışınları aynı açıyla gelir ancak yükselti, denizellik ve karasallık nedeniyle sıcaklıkları farklı olabilir (Örn: Çanakkale, Ankara, Erzurum).',
          tip: 'Aynı enlemde sıcaklık farklılığının sebebi sorulduğunda ÖZEL KONUM (yükselti/denizellik) seçilmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Coğrafya testinde 'Aynı anda dört mevsim yaşanması' ÖZEL konumken, 'Yıl içinde dört mevsimin belirgin yaşanması' MATEMATİK konumdur (Orta Kuşak). Bu kelime oyununa sınavda özellikle dikkat ediniz!",
          importance: 'critical',
        },
      ],
      summary: 'Matematik konum enlem ve boylama bağlı özellikleri; özel konum ise yükselti, denizler ve yer şekillerine bağlı dinamikleri belirler.',
      what_to_remember: [
        '✓ Koordinat: 36-42 K paralelleri, 26-45 D meridyenleri.',
        '✓ Orta Kuşak Kanıtları: Dört mevsim, Akdeniz iklimi, Batı rüzgârı, Cephesel yağış.',
        '✓ Bakı Yönü: Türkiye’de daima GÜNEY yamaçtır.',
        '✓ Saat: 45° Doğu Iğdır (GMT+3) ulusal saat olarak kullanılır.',
      ],
      self_check_questions: [
        {
          question: '1. Türkiye’de yıl içinde dört mevsimin belirgin olarak yaşanması ve cephesel (frontal) yağışların görülmesi aşağıdakilerden hangisinin doğrudan bir sonucudur?',
          options: [
            { key: 'A', text: 'Üç tarafının denizlerle çevrili olmasının', isCorrect: false },
            { key: 'B', text: 'Orta Kuşak’ta (Ilıman Kuşak) yer almasının', isCorrect: true },
            { key: 'C', text: 'Ortalama yükseltisinin fazla olmasının', isCorrect: false },
            { key: 'D', text: 'Genç oluşumlu bir jeolojik yapıya sahip olmasının', isCorrect: false },
            { key: 'E', text: 'Doğu-batı yönünde geniş alan kaplamasının', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Dört mevsimin yıl içinde belirginliği ve cephe yağışları Orta Kuşak’ta bulunmanın (matematik konum) sonucudur.',
        },
        {
          question: '2. İzmir ile Van yaklaşık aynı enlem üzerinde yer almalarına rağmen, Van’da kış sıcaklıklarının İzmir’den çok daha düşük olmasının temel nedeni hangisidir?',
          options: [
            { key: 'A', text: 'Güneş ışınlarının düşme açısının farklı olması', isCorrect: false },
            { key: 'B', text: 'Van’ın yükseltisinin fazla ve karasal olması', isCorrect: true },
            { key: 'C', text: 'Çizgisel hızlarının farklı olması', isCorrect: false },
            { key: 'D', text: 'Van’da gündüz süresinin daha kısa olması', isCorrect: false },
            { key: 'E', text: 'İzmir’in güney rüzgârlarına kapalı olması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Aynı enlemdeki yerlerde sıcaklık farkı özel konum koşullarından (yükselti, karasallık, denizellik) kaynaklanır.',
        },
        {
          question: '3. Türkiye’de dağların güney yamaçlarının kuzey yamaçlarına göre daha sıcak olması, karların daha erken erimesi ve yerleşmelerin daha yüksekte bulunması hangi coğrafi kavramla açıklanır?',
          options: [
            { key: 'A', text: 'Bakı etkisi', isCorrect: true },
            { key: 'B', text: 'Karasallık', isCorrect: false },
            { key: 'C', text: 'Yükselti basamağı', isCorrect: false },
            { key: 'D', text: 'Nemlilik', isCorrect: false },
            { key: 'E', text: 'Jeotermal kaynak', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Kuzey Yarımküre’de Yengeç Dönencesi dışında kalan yerlerde güney yamaçlar daima güneşi doğrudan görür (Bakı etkisi).',
        },
        {
          question: '4. Türkiye’nin en doğusu (45° Doğu) ile en batısı (26° Doğu) arasındaki yerel saat farkı kaç dakikadır?',
          options: [
            { key: 'A', text: '19 dakika', isCorrect: false },
            { key: 'B', text: '45 dakika', isCorrect: false },
            { key: 'C', text: '76 dakika', isCorrect: true },
            { key: 'D', text: '120 dakika', isCorrect: false },
            { key: 'E', text: '60 dakika', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. 45 - 26 = 19 meridyen; 19 x 4 = 76 dakika yerel saat farkı vardır.',
        },
        {
          question: '5. Aşağıdakilerden hangisi Türkiye’nin "ÖZEL KONUMUNUN" bir sonucu DEĞİLDİR?',
          options: [
            { key: 'A', text: 'Kısa mesafelerde iklim ve bitki örtüsünün değişmesi', isCorrect: false },
            { key: 'B', text: 'Bor, toryum ve linyit madenleri bakımından zengin olması', isCorrect: false },
            { key: 'C', text: 'Ulaşımda Zigana ve Gülek gibi geçitlerden yararlanılması', isCorrect: false },
            { key: 'D', text: 'Güneyden esen rüzgârların sıcaklığı yükseltmesi', isCorrect: true },
            { key: 'E', text: 'Asya ile Avrupa arasında transit petrol boru hatlarına sahip olması', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Güneyden esen rüzgârların sıcaklığı artırması Kuzey Yarımküre’de bulunmanın (Matematik konum) sonucudur.',
        },
      ],
    };
  }

  // 2. YER ŞEKİLLERİ, DAĞLAR, PLATOLAR, OVALAR, AKARSULAR (topic-cografya-1-5 - 1-11)
  if (tid.startsWith('topic-cografya-1-5') || tid.startsWith('topic-cografya-1-6') || tid.startsWith('topic-cografya-1-7') || tid.startsWith('topic-cografya-1-8') || tid.startsWith('topic-cografya-1-9') || tid.startsWith('topic-cografya-1-10') || tid.startsWith('topic-cografya-1-11')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Türkiye arazisi III. ve IV. Jeolojik Zamanlarda (Alp-Himalaya orojenezi ve epirojenez) oluşmuş genç, engebeli ve dinamik bir jeomorfolojiye sahiptir.

## 1. Türkiye'nin Dağları
* **Kıvrım Dağları (Orojenez):** Kuzey Anadolu Dağları (Kaçkar, Canik, Küre, Ilgaz) ve Toros Dağları (Bey, Bolkar, Aladağlar, Cilo/Buzul Dağı).
* **Kırık Dağları (Horst-Graben Sistemi):** Ege Bölgesi'nde yaygındır.
  - **Horstlar (Dağlar):** Kaz Dağı, Madra, Yunt, Bozdağlar, Aydın Dağları, Menteşe Dağları ve Hatay'daki **Amanos (Nur)** Dağı.
  - **Grabenler (Ovalar):** Bakırçay, Gediz, Küçük Menderes, Büyük Menderes ve Amik Ovası.
* **Volkanik Dağlar:**
  - **İç Anadolu:** Erciyes, Hasan Dağı, Melendiz, Karadağ, Karacadağ.
  - **Doğu Anadolu:** Ağrı (Büyük-Küçük), Tendürek, Süphan, Nemrut (Nemrut Krater Gölü).
  - **Güneydoğu Anadolu:** Karacadağ (Kalkan volkan).
  - **Ege:** Manisa-Kula (Türkiye'nin en genç volkanik sahası / Jeopark).

## 2. Türkiye'nin Platoları
* **Karstik Platolar:** Teke ve Taşeli Platoları (Akdeniz - Kireçtaşı/Kalker, nüfus seyrektir, kıl keçisi yetiştirilir).
* **Volkanik (Lav) Platoları:** Erzurum-Kars ve Ardahan Platoları (Yaz yağışları -> Çernozyom kara toprak -> Çayır bitki örtüsü -> Büyükbaş mera hayvancılığı).
* **Tabaka Düzlüğü (Yatay Duruşlu) Platoları:** İç Anadolu'da Haymana, Cihanbeyli, Obruk, Bozok; Güneydoğu'da Gaziantep, Şanlıurfa (Küçükbaş hayvancılık ve tahıl tarımı).
* **Aşınım Platosu:** Çatalca-Kocaeli Platosu (Yükseltisi en az, sanayi, nüfus ve ulaşımın en yoğun olduğu plato).

## 3. Türkiye'nin Ovaları ve Delta Ovaları
* **Delta Ovaları (Akarsu biriktirmesi - Kıta sahanlığının geniş olduğu sığ kıyılarda):**
  - Akdeniz: **Çukurova** (Seyhan + Ceyhan - En büyük delta), **Silifke** (Göksu).
  - Karadeniz: **Bafra** (Kızılırmak), **Çarşamba** (Yeşilırmak).
  - Ege: **Dikili** (Bakırçay), **Menemen** (Gediz), **Selçuk** (Küçük Menderes), **Balat** (Büyük Menderes).
* **Karstik Ovalar (Polye / Gölova):** Akdeniz'de takke formülü (**T**efenni, **A**cıpayam, **K**orkuteli, **K**estel, **E**lmali).`,
      comparison_tables: [
        {
          title: 'Delta Ovaları ve Oluşturan Akarsular',
          headers: ['Delta Ovası', 'Bulunduğu Bölge', 'Oluşturan Akarsu'],
          rows: [
            ['Çukurova', 'Akdeniz', 'Seyhan ve Ceyhan nehirleri'],
            ['Silifke Ovası', 'Akdeniz', 'Göksu Nehri'],
            ['Bafra Ovası', 'Karadeniz (Samsun)', 'Kızılırmak'],
            ['Çarşamba Ovası', 'Karadeniz (Samsun)', 'Yeşilırmak'],
            ['Menemen Ovası', 'Ege (İzmir)', 'Gediz Nehri'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Karadeniz ve Akdeniz kıyılarının her yerinde delta ovası oluşabilir.',
          correct_distinction: 'Kıyının çok derin olduğu, falezlerin bulunduğu ve güçlü akıntıların olduğu yerlerde (Örn: Doğu Karadeniz, Antalya Kaş kıyıları) delta ovası OLUŞAMAZ. Delta için kıta sahanlığının geniş ve kıyının sığ olması şarttır.',
          tip: 'Sorularda delta ovası oluşum şartı: Bol alüvyon taşıma, kıta sahanlığının geniş olması ve gelgit/güçlü akıntının olmamasıdır.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS'de Teke ve Taşeli platolarının karstik yapısı nedeniyle nüfusun seyrek olduğu; Erzurum-Kars platosunun çernozyom toprak ve büyükbaş hayvancılıkla eşleştiği sorular her yıl karşımıza çıkar.",
          importance: 'critical',
        },
      ],
      summary: 'Türkiye yer şekillerinde kıvrım/kırık/volkanik dağlar, karstik-volkanik platolar ve alüvyal delta ovaları belirleyici unsurlardır.',
      what_to_remember: [
        '✓ Kırık Dağlar: Kaz, Madra, Yunt, Bozdağ, Aydın, Menteşe ve Nur (Amanos).',
        '✓ En genç volkan: Manisa Kula Tepeleri.',
        '✓ Karstik Platolar: Teke ve Taşeli | Lav Platosu: Erzurum-Kars.',
        '✓ Delta Ovaları: Çukurova (Seyhan-Ceyhan), Bafra (Kızılırmak), Çarşamba (Yeşilırmak), Silifke (Göksu).',
      ],
      self_check_questions: [
        {
          question: '1. Türkiye’de akarsuların taşıdığı alüvyonları denize döküldükleri yerde biriktirmesiyle oluşan "Delta Ovaları" ile ilgili aşağıdakilerden hangisi YANLIŞTIR?',
          options: [
            { key: 'A', text: 'Kıta sahanlığının geniş ve kıyının sığ olduğu yerlerde oluşurlar.', isCorrect: false },
            { key: 'B', text: 'Çukurova, Seyhan ve Ceyhan nehirlerinin biriktirmesiyle oluşan Türkiye’nin en büyük deltasıdır.', isCorrect: false },
            { key: 'C', text: 'Kızılırmak Bafra Ovası’nı, Yeşilırmak ise Çarşamba Ovası’nı oluşturmuştur.', isCorrect: false },
            { key: 'D', text: 'Doğu Karadeniz ve Antalya kıyılarında kıyı çok derin olduğu için büyük deltalar oluşmuştur.', isCorrect: true },
            { key: 'E', text: 'Delta ovalarında topraklar mineralce zengin ve tarımsal verimi çok yüksektir.', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Doğu Karadeniz ve Batı Akdeniz’de falezli ve derin kıyılar olduğu için delta ovası oluşamamıştır.',
        },
        {
          question: '2. Türkiye’de kalker (kireçtaşı) arazinin yaygın olduğu, yer altı sularının çözünmesiyle oluşan ve yüzey sularının yetersizliği sebebiyle nüfusun seyrek olduğu KARSTİK PLATOLAR hangileridir?',
          options: [
            { key: 'A', text: 'Haymana ve Cihanbeyli', isCorrect: false },
            { key: 'B', text: 'Teke ve Taşeli', isCorrect: true },
            { key: 'C', text: 'Erzurum-Kars ve Ardahan', isCorrect: false },
            { key: 'D', text: 'Çatalca ve Kocaeli', isCorrect: false },
            { key: 'E', text: 'Bozok ve Yazılıkaya', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Teke ve Taşeli platoları Akdeniz karstik kuşağında yer alır ve karstik erime sebebiyle sular yer altına sızar.',
        },
        {
          question: '3. Erzurum-Kars ve Ardahan platolarında yaz aylarının yağışlı geçmesi, çayır bitki örtüsünün gelişmesi ve dünyanın en verimli yerli toprağı olan Çernozyomların bulunması hangi ekonomik faaliyeti doğrudan öne çıkarmıştır?',
          options: [
            { key: 'A', text: 'Küçükbaş tiftik keçisi yetiştiriciliği', isCorrect: false },
            { key: 'B', text: 'Büyükbaş mera hayvancılığı', isCorrect: true },
            { key: 'C', text: 'Zeytin ve turunçgil tarımı', isCorrect: false },
            { key: 'D', text: 'Seracılık faaliyetleri', isCorrect: false },
            { key: 'E', text: 'Pamuk ve tütün üretimi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Yaz yağışları çayırları besler, bu da mera tipi büyükbaş sığır yetiştiriciliğini geliştirir.',
        },
        {
          question: '4. Ege Bölgesi’nde Horst-Graben sistemine dahil olan ve kırılma (faylanma) ile oluşan dağlar arasında aşağıdakilerden hangisi YER ALMAZ?',
          options: [
            { key: 'A', text: 'Kaz Dağı', isCorrect: false },
            { key: 'B', text: 'Bozdağlar', isCorrect: false },
            { key: 'C', text: 'Erciyes Dağı', isCorrect: true },
            { key: 'D', text: 'Madra Dağı', isCorrect: false },
            { key: 'E', text: 'Aydın Dağları', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Erciyes Dağı İç Anadolu’da yer alan bir VOLKANİK dağdır; horst/kırık dağı değildir.',
        },
        {
          question: '5. Türkiye’de yükseltisi en az olan, aşınım düzlüğü niteliği taşıyan ve sanayi, ticaret ile nüfus yoğunluğunun en fazla olduğu plato hangisidir?',
          options: [
            { key: 'A', text: 'Çatalca-Kocaeli Platosu', isCorrect: true },
            { key: 'B', text: 'Obruk Platosu', isCorrect: false },
            { key: 'C', text: 'Gaziantep Platosu', isCorrect: false },
            { key: 'D', text: 'Yazılıkaya Platosu', isCorrect: false },
            { key: 'E', text: 'Taşeli Platosu', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Marmara’daki Çatalca-Kocaeli platosu en alçak ve sanayileşmiş platodur.',
        },
      ],
    };
  }

  // 3. İKLİM, BİTKİ ÖRTÜSÜ, TOPRAK VE AFETLER (topic-cografya-1-12 - 1-15)
  if (tid.startsWith('topic-cografya-1-12') || tid.startsWith('topic-cografya-1-13') || tid.startsWith('topic-cografya-1-14') || tid.startsWith('topic-cografya-1-15')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Türkiye'de iklim çeşitliliği; etrafındaki denizler, dağların uzanış doğrultusu ve yükselti farklılıklarının bir sonucudur.

## 1. Türkiye'de Görülen İklim Tipleri ve Yağış Rejimleri
* **Akdeniz İklimi:**
  - Yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır.
  - En fazla yağışını **Kışın** alır (**Cephesel / Frontal yağışlar**).
  - Doğal bitki örtüsü: **Maki** (Kızılçam ormanlarının tahribiyle oluşur; zeytin, defne, mersin, keçiboynuzu, zakkum). Garig ise makinin tahribidir.
  - Toprak tipi: Kireçtaşı üzerinde oluşan kırmızı renkli demir oksitli **Terra-Rossa**.
* **Karadeniz İklimi:**
  - Her mevsim yağışlı ve ılımandır.
  - En fazla yağışını **Sonbaharda** alır (**Yamaç / Orografik yağışlar**).
  - En çok yağış alan yer: Rize (Doğu Karadeniz).
  - Doğal bitki örtüsü: **Geniş ve iğne yapraklı karışık ormanlar**.
  - Toprak tipi: Yıkanmış **Kahverengi Orman Toprağı** ve Batı Karadeniz'de iğne yapraklı orman altı **Podzol**.
* **İç ve Güneydoğu Karasal İklimi (Step):**
  - Yazlar sıcak ve kurak, kışlar soğuk ve kar yağışlıdır.
  - En fazla yağışını **İlkbaharda** alır (**Konveksiyonel / Kırkikindi yağışları**).
  - Doğal bitki örtüsü: İlkbaharda yeşerip yazın kuruyan **Bozkır (Step)** (Geven, yavşan otu, üzerlik).
  - Toprak tipi: **Kestane ve Kahverengi Bozkır Toprakları**.
* **Sert Karasal İklim (Erzurum-Kars):**
  - Kışlar çok sert ve uzun, yazlar serin ve yağışlıdır.
  - En fazla yağışını **Yazın** alır (Konveksiyonel).
  - Doğal bitki örtüsü: **Dağ Çayırları**.
  - Toprak tipi: Dünyanın en verimli zonal toprağı olan **Çernozyom (Kara Toprak)**.

## 2. Türkiye'de Doğal Afetler
* **Deprem:** Türkiye Alp-Himalaya deprem kuşağındadır. 3 ana fay hattı bulunur:
  - **KAF (Kuzey Anadolu Fayı):** Saros Körfezi'nden Van Gölü'ne kadar uzanır.
  - **DAF / GAF (Doğu Anadolu Fayı):** Hatay'dan başlayıp Kahramanmaraş, Malatya, Elazığ, Bingöl üzerinden KAF ile birleşir.
  - **BAF (Batı Anadolu Fayı):** Ege Graben hatlarıdır.
  - *Deprem Riski En Az Yerler:* Konya-Karaman çevresi, Taşeli Platosu, Mardin Eşiği, Sinop çevresi, Ergene Havzası.
* **Heyelan:** En çok **Doğu Karadeniz**'de görülür (Eğim, bol yağış, killi toprak ve ilkbaharda kar erimeleri).
* **Erozyon:** En çok **İç ve Güneydoğu Anadolu**'da görülür (Bitki örtüsü yetersizliği, sağanak yağışlar, nadas uygulaması).`,
      comparison_tables: [
        {
          title: 'Türkiye İklim Tipleri ve En Çok Yağış Aldığı Mevsimler',
          headers: ['İklim Tipi', 'En Fazla Yağış Mevsimi', 'Yağış Oluşum Tipi', 'Bitki Örtüsü'],
          rows: [
            ['Akdeniz İklimi', 'KIŞ', 'Cephesel (Frontal)', 'Maki & Kızılçam'],
            ['Karadeniz İklimi', 'SONBAHAR', 'Yamaç (Orografik)', 'Karışık Orman'],
            ['İç Anadolu Karasal', 'İLKBAHAR', 'Konveksiyonel (Kırkikindi)', 'Bozkır (Step)'],
            ['Sert Karasal (Erzurum)', 'YAZ', 'Konveksiyonel', 'Alp Çayırları'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Heyelan ve Erozyon aynı doğal afettir.',
          correct_distinction: 'Heyelan kütle halinde toprağın kaymasıdır (en çok Karadeniz’de, bol yağışta); Erozyon ise toprağın rüzgâr ve suyla süpürülmesidir (en çok kurak İç/Güneydoğu Anadolu’da).',
          tip: 'Sorularda ağaçlandırma heyelanı tamamen engelleyemez (ağaçla birlikte kayar) fakat erozyonu KESİN önler.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Coğrafya testinde 'İç Anadolu ilkbaharda, Erzurum yazın, Karadeniz sonbaharda, Akdeniz kışın en çok yağış alır' kuralı (Türkiye haritası üzerine çizilen 'e' harfi kuralı) yağış grafiği sorularının temel anahtarıdır.",
          importance: 'critical',
        },
      ],
      summary: 'İklim tiplerinin yağış mevsimleri (İlkbahar-Yaz-Sonbahar-Kış döngüsü), bitki örtüleri ve doğal afet risk dağılımları AGS’nin vazgeçilmez sorularındandır.',
      what_to_remember: [
        '✓ "e" Kuralı: İç Anadolu (İlkbahar) -> Erzurum (Yaz) -> Karadeniz (Sonbahar) -> Akdeniz (Kış).',
        '✓ Terra-Rossa: Akdeniz kalker üzeri kırmızı toprak.',
        '✓ Çernozyom: Erzurum-Kars çayır altı kara toprak.',
        '✓ Heyelan: Doğu Karadeniz (Killi toprak + Eğim + Yağış/Kar erimesi).',
        '✓ Deprem Riski Düşük: Konya-Karaman, Mardin Eşiği, Taşeli, Sinop.',
      ],
      self_check_questions: [
        {
          question: '1. Türkiye haritası üzerinde İç Anadolu’dan başlayarak sırasıyla Erzurum-Kars, Karadeniz ve Akdeniz kıyılarına doğru çizilen "e" harfi yöntemi, bu bölgelerin hangi özelliğini öğrenmeyi kolaylaştırır?',
          options: [
            { key: 'A', text: 'Deprem risk derecelerini', isCorrect: false },
            { key: 'B', text: 'En fazla yağış aldıkları mevsimlerin sırasını (İlkbahar, Yaz, Sonbahar, Kış)', isCorrect: true },
            { key: 'C', text: 'Toprak erozyonunun şiddetini', isCorrect: false },
            { key: 'D', text: 'Rüzgâr erozyonunun yönünü', isCorrect: false },
            { key: 'E', text: 'Nüfus yoğunluklarının dağılışını', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "e" harfi kuralı en çok yağışın düştüğü mevsimleri gösterir: İç Anadolu (İlkbahar) -> Erzurum (Yaz) -> Karadeniz (Sonbahar) -> Akdeniz (Kış).',
        },
        {
          question: '2. Türkiye’de heyelan olaylarının en fazla Doğu Karadeniz Bölümü’nde ve özellikle İLKBAHAR aylarında görülmesinde aşağıdakilerden hangisi doğrudan etkili OLMAMIŞTIR?',
          options: [
            { key: 'A', text: 'Arazinin dik ve engebeli olması', isCorrect: false },
            { key: 'B', text: 'Killi toprak yapısının suyu emerek kayganlaşması', isCorrect: false },
            { key: 'C', text: 'İlkbaharda karların hızla eriyerek toprağı suya doyurması', isCorrect: false },
            { key: 'D', text: 'Bitki örtüsünün tamamen kuruyup yok olması', isCorrect: true },
            { key: 'E', text: 'Bölgenin yıllık yağış miktarının çok yüksek olması', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Doğu Karadeniz her mevsim gür ormanlarla kaplıdır; bitki örtüsünün kuruması söz konusu değildir.',
        },
        {
          question: '3. Akdeniz iklim bölgesinde kalkerli (kireçtaşı) araziler üzerinde kimyasal çözünmeyle oluşan, bünyesindeki demir oksit nedeniyle kırmızı renk alan toprak tipi hangisidir?',
          options: [
            { key: 'A', text: 'Çernozyom', isCorrect: false },
            { key: 'B', text: 'Terra-Rossa', isCorrect: true },
            { key: 'C', text: 'Podzol', isCorrect: false },
            { key: 'D', text: 'Laterit', isCorrect: false },
            { key: 'E', text: 'Vertisol', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Terra-Rossa Akdeniz ikliminin kireçtaşı üzerinde oluşan kırmızı renkli zonal toprağıdır.',
        },
        {
          question: '4. Aşağıda verilen Türkiye yörelerinden hangisi fay hatlarına uzaklığı sebebiyle "DEPREM RİSKİ EN AZ" olan alanlar arasında yer alır?',
          options: [
            { key: 'A', text: 'Hatay ve Amik Ovası', isCorrect: false },
            { key: 'B', text: 'Marmara Saros Körfezi', isCorrect: false },
            { key: 'C', text: 'Konya - Karaman ve Taşeli Yöresi', isCorrect: true },
            { key: 'D', text: 'Erzincan ve Erzurum Havzası', isCorrect: false },
            { key: 'E', text: 'Gediz ve Büyük Menderes Grabenleri', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Konya-Karaman ve Taşeli masif blok yapısı nedeniyle Türkiye’de deprem tehlikesinin en az olduğu sahalardandır.',
        },
        {
          question: '5. Türkiye’de erozyonla mücadele etmek ve tarım arazilerini korumak için alınacak en etkili önlemler arasında hangisi YER ALMAZ?',
          options: [
            { key: 'A', text: 'Arazinin eğime dik yönde sürülmesi', isCorrect: false },
            { key: 'B', text: 'Nadas alanlarının azaltılarak nöbetleşe ekim yapılması', isCorrect: false },
            { key: 'C', text: 'Eğimli yamaçların basamaklandırılması (taraçalama)', isCorrect: false },
            { key: 'D', text: 'Anız örtüsünün yakılarak tarlanın temizlenmesi', isCorrect: true },
            { key: 'E', text: 'Ağaçlandırma ve mera ıslah çalışmalarının artırılması', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Anız yakmak toprağın organik yapısını öldürür ve erozyonu katbekat artırır.',
        },
      ],
    };
  }

  // 4. BEŞERÎ VE EKONOMİK COĞRAFYA (Nüfus, Tarım, Madenler, Sanayi) (unit-cografya-2 tüm konular)
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `Türkiye'nin beşerî ve ekonomik coğrafyası; sanayileşmiş merkezlere göç, tarımsal sulama projeleri (GAP, KOP), zengin yer altı kaynakları ve stratejik ulaşım hatlarıyla şekillenir.

## 1. Nüfus ve Göçün Dağılışı
* **Nüfusun Yoğun Olduğu Yerler:** Çatalca-Kocaeli (İstanbul-İzmit), Ege Kıyıları (İzmir), Çukurova, Bursa, Ankara, Doğu Karadeniz Kıyı Şeridi (Tarım/balıkçılık).
* **Nüfusun Seyrek Olduğu Yerler:**
  - **Teke ve Taşeli Platoları:** Karstik yapı ve engebe.
  - **Hakkâri Yöresi:** Aşırı engebe ve iklim şartları.
  - **Tuz Gölü Çevresi:** Şiddetli kuraklık ve çorak toprak.
  - **Yıldız Dağları (Istranca):** Ana ulaşım yollarına sapa kalması.
  - **Biga ve Gelibolu Yarımadası:** Sit alanı ve ulaşım yollarına sapa kalması.

## 2. Türkiye'de Tarım ve Hayvancılık
* **Endüstri Bitkileri:**
  - **Pamuk:** Şanlıurfa (GAP ile 1. sıra), Çukurova, Ege. Karadeniz'de her mevsim yağışlı olduğu için yetişmez.
  - **Çay:** Yalnızca Doğu Karadeniz (Rize, Trabzon, Artvin) - Yıkanmış asidik toprak ve her mevsim nem ister.
  - **Zeytin:** Ege (1. sıra), Akdeniz, Marmara. Kış ılıklığı ister.
  - **Fındık:** Karadeniz (%80) ve Marmara (Sakarya-Düzce).
  - **Şeker Pancarı:** İç bölgeler (Kıyı kesimlerde daha karlı ürünler ekildiği için yetiştirilmez; çabuk bozulduğu için fabrikası tarlaya yakın kurulur).
* **Hayvancılık:**
  - **Bozkır / Küçükbaş Koyun:** İç Anadolu, Doğu ve Güneydoğu (En çok beslenen hayvan koyundur).
  - **Kıl Keçisi:** Akdeniz (Teke-Taşeli karstik makilikleri).
  - **Tiftik (Ankara) Keçisi:** Ankara ve İç Anadolu.
  - **Büyükbaş Sığır:** Erzurum-Kars-Ardahan (Yaz yağışları ve meralar) ile büyük şehirlerin etrafında besi hayvancılığı.
  - **İpek Böcekçiliği:** Diyarbakır (1. sıra), Antalya, Bursa.
  - **Arıcılık:** Muğla (Çam balı), Ordu, Rize (Anzer balı), Kars, Hakkâri.

## 3. Türkiye'de Madenler ve Enerji Kaynakları
* **Demir:** Sivas (Divriği), Malatya (Hekimhan-Hasançelebi). İşletmeler: Karabük, İskenderun, Ereğli.
* **Bakır:** Artvin (Murgul), Kastamonu (Küre), Elazığ (Maden). İşletme: Samsun (Liman/Ulaşım sebebiyle).
* **Boksit (Alüminyum):** Konya (Seydişehir), Antalya (Akseki). İşletme: Seydişehir Alüminyum Fabrikası.
* **Bor:** Dünya rezervinin %73'ü Türkiye'dedir. Balıkesir (Bigadiç, Susurluk), Bursa (Mustafakemalpaşa), Kütahya (Emet), Eskişehir (Kırka). İşletme: Bandırma ve Kırka.
* **Krom:** Elazığ (Guleman), Muğla (Fethiye-Köyceğiz). İşletme: Antalya ve Elazığ Ferrokrom Tesisleri.
* **Taş Kömürü:** Zonguldak-Ereğli (I. Jeolojik zaman - Demir-çelik sanayisinde enerji kaynağı).
* **Linyit:** Manisa (Soma), Kütahya (Tavşanlı, Seyitömer), Kahramanmaraş (Afşin-Elbistan), Muğla (Yatağan).
* **Jeotermal Enerji:** Denizli (Sarayköy), Aydın (Germencik).`,
      comparison_tables: [
        {
          title: 'Kritik Madenler ve İşleme Merkezleri',
          headers: ['Maden / Enerji', 'Çıkarıldığı Başlıca Yer', 'İşlendiği Yer ve Kuruluş Nedeni'],
          rows: [
            ['Demir', 'Sivas (Divriği), Malatya', 'Karabük & Ereğli (Taş kömürü / Enerjiye yakınlık)'],
            ['Bakır', 'Kastamonu (Küre), Artvin', 'Samsun (Liman / Ulaşım kolaylığı)'],
            ['Boksit (Alüminyum)', 'Konya (Seydişehir)', 'Seydişehir (Hammaddeye yakınlık)'],
            ['Bor Mineralleri', 'Balıkesir, Kütahya, Eskişehir', 'Bandırma (Liman ve ihracat kolaylığı)'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Karabük ve Ereğli’de demir-çelik fabrikasının kurulma nedeni orada zengin demir yataklarının bulunmasıdır.',
          correct_distinction: 'Karabük ve Ereğli’de demir madeni ÇIKMAZ. Oraya demir Sivas ve Malatya’dan taşınır. Kurulma sebebi taş kömürü yataklarına (ENERJİ KAYNAĞINA) yakınlıktır.',
          tip: 'AGS sınavında Karabük-Ereğli eşleşmesi sorulduğunda doğrudan ENERJİ KAYNAĞINA YAKINLIK işaretlenmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "Samsun'da bakır işletmesinin bulunması ULAŞIM (LİMAN); Seydişehir'de alüminyum tesisi HAMMADDE; Karabük'te demir-çelik tesisi ENERJİ KAYNAĞI ilkesiyle açıklanır. Bu sanayi kuruluş faktörleri ÖSYM'nin en sevdiği kalıptır.",
          importance: 'critical',
        },
      ],
      summary: 'Nüfusun seyrek olduğu sapa alanlar, hammadde-enerji-ulaşım ekseninde sanayi kuruluş yerleri ve stratejik madenler ekonomik coğrafyanın omurgasıdır.',
      what_to_remember: [
        '✓ Seyrek Nüfus: Teke, Taşeli, Yıldız Dağları, Biga Yarımadası, Hakkâri, Tuz Gölü.',
        '✓ Pamuk: GAP ile Şanlıurfa 1. sıraya geçti.',
        '✓ Bor: Dünya 1.si (Balıkesir, Kütahya, Eskişehir, Bursa).',
        '✓ Karabük-Ereğli Demir-Çelik: Taş kömürüne (Enerjiye) yakınlık.',
        '✓ Samsun Bakır: Liman (Ulaşıma) yakınlık.',
      ],
      self_check_questions: [
        {
          question: '1. Karadeniz Ereğlisi ve Karabük’te demir-çelik fabrikalarının kurulmasında en belirleyici olan kuruluş faktörü aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Bölgede zengin demir yataklarının bulunması', isCorrect: false },
            { key: 'B', text: 'Taş kömürü yataklarına yani enerji kaynağına yakınlık', isCorrect: true },
            { key: 'C', text: 'Tüketici nüfusun fazlalığı ve pazar imkânı', isCorrect: false },
            { key: 'D', text: 'İklim koşullarının ılıman olması', isCorrect: false },
            { key: 'E', text: 'İş gücü maliyetinin diğer bölgelerden ucuz olması', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Demir cevheri Sivas/Malatya’dan getirilir; fabrikanın orada kurulma sebebi taş kömürünün yüksek ısısından yararlanmaktır.',
        },
        {
          question: '2. Türkiye’de nüfusun dağılışı incelendiğinde; arazinin karstik (kireçtaşı) olması ve yüzey sularının yer altına sızması sebebiyle yerleşmenin ve nüfusun çok seyrek olduğu sahalar hangileridir?',
          options: [
            { key: 'A', text: 'Çatalca ve Kocaeli Yarımadası', isCorrect: false },
            { key: 'B', text: 'Teke ve Taşeli Platoları', isCorrect: true },
            { key: 'C', text: 'Çukurova ve Silifke Deltaları', isCorrect: false },
            { key: 'D', text: 'Bursa ve Balıkesir Ovaları', isCorrect: false },
            { key: 'E', text: 'Gediz ve Bakırçay Havzası', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Teke ve Taşeli platoları karstik erime ve engebe nedeniyle nüfusun en seyrek olduğu alanlardır.',
        },
        {
          question: '3. Dünya toplam rezervinin yaklaşık %73’üne Türkiye’nin sahip olduğu; roket yakıtı, cam, seramik, deterjan ve nükleer sanayide kullanılan, Balıkesir (Bigadiç) ve Eskişehir’de (Kırka) çıkarılan maden hangisidir?',
          options: [
            { key: 'A', text: 'Boksit', isCorrect: false },
            { key: 'B', text: 'Bor Mineralleri', isCorrect: true },
            { key: 'C', text: 'Krom', isCorrect: false },
            { key: 'D', text: 'Bakır', isCorrect: false },
            { key: 'E', text: 'Mangan', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Türkiye bor mineralleri rezervinde dünyada ilk sırada yer alır.',
        },
        {
          question: '4. Çabuk bozulabilen yapısı nedeniyle hasat edildikten hemen sonra işlenmesi gereken ve bu yüzden işleme fabrikaları daima tarım alanlarının hemen yakınına kurulan sanayi bitkisi hangisidir?',
          options: [
            { key: 'A', text: 'Pamuk', isCorrect: false },
            { key: 'B', text: 'Şeker Pancarı', isCorrect: true },
            { key: 'C', text: 'Ayçiçeği', isCorrect: false },
            { key: 'D', text: 'Zeytin', isCorrect: false },
            { key: 'E', text: 'Tütün', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Şeker pancarı söküldükten sonra şeker oranını hızla kaybettiği için fabrikaları üretim sahalarına yakın kurulur.',
        },
        {
          question: '5. Kastamonu (Küre) ve Artvin’den (Murgul) çıkarılan bakır madeninin, kendisinde bakır madeni çıkmamasına rağmen SAMSUN’daki Karadeniz Bakır İşletmeleri’nde işlenmesinin temel sebebi nedir?',
          options: [
            { key: 'A', text: 'Samsun’un gelişmiş limanı ve iç kesimlerle kolay demir yolu bağlantısı (Ulaşım)', isCorrect: true },
            { key: 'B', text: 'Samsun’da taş kömürü yataklarının bulunması', isCorrect: false },
            { key: 'C', text: 'Samsun’da su kaynaklarının yetersiz olması', isCorrect: false },
            { key: 'D', text: 'Bölgede bakır tüketiminin çok yüksek olması', isCorrect: false },
            { key: 'E', text: 'Karadeniz Bölgesi’nde hava kirliliğini önleme isteği', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Samsun Limanı deniz ulaşımı ve hinterlandının genişliği sebebiyle bakır işleme merkezi seçilmiştir.',
        },
      ],
    };
  };
