import type { Topic, TopicContent, SelfCheckQuestion } from '../../types/database';

export const getSozelSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;
  const title = topic.title;

  // ==========================================================================
  // 1. SÖZCÜKTE ANLAM
  // ==========================================================================
  if (tid === 'topic-sozel-1' || title.includes('Sözcük')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: 'Sözcükte Anlam',
      core_explanation: `## 🎯 Bu Soru Tipinde Nasıl Düşünmelisin?
* **1. Sözlüğü Değil, Cümle Bağlamını Oku:** AGS'de sözcüklerin sözlükteki ilk anlamı değil, cümlenin bütününde yüklendiği özel bağlamsal anlam sorulur.
* **2. Altı Çizili Sözün Yerine Seçenekleri Koy:** Söz öbeğinin yerine şıktaki ifadeyi koyduğunda cümlenin anlam bütünlüğü, duygu tonu ve iletisi bozulmuyorsa doğru cevaptır.
* **3. Mecazlaşma Yönünü Belirle:** Somut bir sözcük soyut bir durumu karşılamak için mi kullanılmış? (*"Gözünü boyamak"*, *"Rayına oturmak"*, *"Kabuğunu kırmak"*).
* **4. Çeldirici Tuzağı:** Sözcüğün akla ilk gelen yaygın anlamı şıklara güçlü çeldirici olarak konur. Metindeki yan/mecaz anlamı aramayı unutma.

---

## 📌 Özgün AGS Tarzı Örnek Soru
> **Soru:**  
> *"Günümüz edebiyat dünyasında birçok yazar, okurun beklentilerini karşılamak adına kendi özgün üslubunu bir kenara bırakıp popüler kültürün açtığı **sığ sularda kürek çekmeyi** tercih ediyor."*  
>  
> Bu cümledeki altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?  
> A) Geniş kitlelere hitap eden derinlikli eserler vermek  
> B) Kolay ve yüzeysel olanın peşinden giderek derinlikten uzaklaşmak  
> C) Geçmişin köklü edebi geleneklerinden beslenmek  
> D) Eserlerinde farklı türleri bir arada harmanlamak  
> E) Toplumun sorunlarına kalıcı çözümler üretmek

---

## 🔍 Adım Adım Çözüm ve Gerekçe
1. **Bağlam Analizi:** Cümlede yazarın "özgün üslubunu bırakması" ve "popüler kültürün açtığı alana girmesi" eleştirilmektedir.
2. **Söz Öbeği Analizi:** *"Sığ sular"* derin olmayan, yüzeysel alanı; *"kürek çekmek"* ise orada emek harcamayı simgeler.
3. **Doğru Cevabın Gerekçesi (B):** *"Sığ sularda kürek çekmek"*, risk almadan, kolay ve derinliği olmayan yüzeysel ürünler ortaya koymayı ifade eder.
4. **Çeldiricilerin Analizi:**
   - **A)** *"Derinlikli eserler"* ifadesi "sığ" sözcüğünün zıddıdır, doğrudan elenir.
   - **C, D, E)** Metindeki "yüzeysellik ve kolaycılık" eleştirisini karşılamaz.`,
      comparison_tables: [
        {
          title: 'Sözcük Anlamı Soru Tipleri ve Çözüm Anahtarı',
          headers: ['Soru Tipi', 'Soru Kökü İfadesi', 'Çözüm Stratejisi'],
          rows: [
            ['Bağlamsal Anlam', '"Bu cümledeki altı çizili sözle anlatılmak istenen..."', 'Metindeki ana duygu ve mecazlaşma yönü tespit edilir'],
            ['Sözcük Değiştirme', '"...sözcüğü yerine aşağıdakilerden hangisi getirilirse..."', 'Eş veya yakın anlamlı ifade cümleye yerleştirilip okunur'],
            ['Çok Anlamlılık', '"...sözcüğü aşağıdaki cümlelerin hangisinde farklı anlamda..."', 'Sözcüğün her cümledeki karşılığı tek kelimeyle yanına yazılır'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Sözcüğün sözlükteki ilk (temel) anlamını bilmek soruyu çözmek için yeterlidir.',
          correct_distinction: 'AGS soruları sözcüğün sözlük anlamını değil; metin içinde kazandığı yeni, soyut ve mecazi işlevi ölçer.',
          tip: 'Altı çizili sözü tek başına değil, cümlenin başından sonuna kadar olan anlam bağı içinde değerlendiriniz.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Sözcükte Anlam sorularında genellikle 'ikilemeler, deyim aktarmaları ve soyutlama içeren metaforik ifadeler' sorulur. Seçenekleri denerken cümlenin olumlu/olumsuz duygu tonunu kontrol ediniz.",
          importance: 'critical',
        },
      ],
      summary: 'Sözcükte anlam; sözcüğün metin bağlamında kazandığı anlamı, altı çizili ifadelerin mecazi derinliğini ve yakın anlam ayrımlarını doğru tespit etme becerisidir.',
      what_to_remember: [
        '✓ Cümlenin tamamını oku, bağlamdan kopma.',
        '✓ "Sığ su", "kabuğunu kırmak", "pusula olmak" gibi metaforların soyut anlamına odaklan.',
        '✓ Akla ilk gelen temel anlam genellikle çeldiricidir.',
      ],
      self_check_questions: [
        {
          question: '1. "Bilim insanı, ulaştığı sonuçları toplumla paylaşırken kullandığı dilin anlaşılırlığına özen göstermeli; akademik jargona sıkışıp kalarak düşüncelerini **fildişi kuleye hapsetmemelidir**."\n\nBu cümledeki altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Toplumsal gerçeklikten ve halkın anlayışından soyutlanarak içine kapanmak', isCorrect: true },
            { key: 'B', text: 'Bilimsel çalışmalar için gerekli finansal desteği bulamamak', isCorrect: false },
            { key: 'C', text: 'Çalışmalarını diğer bilim insanlarıyla paylaşmaktan kaçınmak', isCorrect: false },
            { key: 'D', text: 'Yalnızca geçmişteki kuramlara bağlı kalmak', isCorrect: false },
            { key: 'E', text: 'Farklı disiplinlerle ortak proje üretmemek', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. "Fildişi kule", toplumdan kopuk, halkın içine karışmayan, soyut ve kapalı yaşamı simgeleyen köklü bir metafordur.',
        },
        {
          question: '2. "Yazar, son romanında karakterlerin iç dünyasını tahlil ederken **ince eleyip sık dokumuş**, hiçbir ayrıntıyı tesadüfe bırakmamıştır."\n\nBu cümledeki altı çizili sözün cümleye kattığı anlam aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Olayları kronolojik sıraya göre dizmek', isCorrect: false },
            { key: 'B', text: 'Çok büyük bir titizlikle ve en küçük detaylarına kadar özen göstererek çalışmak', isCorrect: true },
            { key: 'C', text: 'Geleneksel anlatım kalıplarını birebir uygulamak', isCorrect: false },
            { key: 'D', text: 'Okuyucunun fikrini önemsememek', isCorrect: false },
            { key: 'E', text: 'Eseri çok kısa bir sürede tamamlamak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "İnce eleyip sık dokumak" deyimi, bir işi aşırı özenli, titiz ve en ince ayrıntılarını gözden kaçırmayarak yapmak demektir.',
        },
        {
          question: '3. "Tarihçinin geçmişe bakarken bugünün kavramlarıyla hüküm vermesi, olayların yaşandığı dönemin dinamiklerini **ıskalamasına** yol açar."\n\nBu cümledeki "ıskalamak" sözcüğünün bağlamsal anlamı hangisidir?',
          options: [
            { key: 'A', text: 'Gözden kaçırmak, hedefi tutturamamak veya fark edememek', isCorrect: true },
            { key: 'B', text: 'Tamamen yok etmek', isCorrect: false },
            { key: 'C', text: 'Yeniden canlandırmak', isCorrect: false },
            { key: 'D', text: 'Başkalarından gizlemek', isCorrect: false },
            { key: 'E', text: 'Aşırı abartmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Cümlede dönemin şartlarını fark edememe ve gözden kaçırma durumu "ıskalamak" sözcüğüyle verilmiştir.',
        },
        {
          question: '4. Aşağıdaki cümlelerin hangisinde "ağır" sözcüğü "bağışlanamaz, çok kırıcı veya tahammülü zor" anlamında kullanılmıştır?',
          options: [
            { key: 'A', text: 'Pazardan aldığı ağır poşetleri taşımakta güçlük çekiyordu.', isCorrect: false },
            { key: 'B', text: 'Yemekten sonra üzerine çöken ağır havadan kurtulmak için dışarı çıktı.', isCorrect: false },
            { key: 'C', text: 'Toplantıda sarf ettiği ağır sözler aralarındaki tüm köprüleri yıktı.', isCorrect: true },
            { key: 'D', text: 'Trafik bu saatlerde her zamankinden daha ağır ilerliyordu.', isCorrect: false },
            { key: 'E', text: 'Ağır bir işte çalıştığı için akşamları erken uyuyordu.', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. "Ağır sözler" ifadesi kırıcı, incitici ve tahammül edilmesi güç hakaret içeren ifadeleri belirtir.',
        },
        {
          question: '5. "Genç şair, ilk şiir kitabıyla edebiyat dünyasında kendine sağlam bir **mevzi kazandı**."\n\nAltı çizili sözün bu cümleye kattığı anlam aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Maddi kazanç elde etmek', isCorrect: false },
            { key: 'B', text: 'Saygın, kalıcı ve güvenilir bir yer edinmek', isCorrect: true },
            { key: 'C', text: 'Diğer şairlerle tartışmaya girmek', isCorrect: false },
            { key: 'D', text: 'Yalnızca tek bir türe bağlı kalmak', isCorrect: false },
            { key: 'E', text: 'Şiir yazmayı bırakmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Mevzi kazanmak" mecazen alanda kendine kalıcı, sağlam ve etkin bir konum/yer edinmek anlamına gelir.',
        },
      ],
    };
  }

  // ==========================================================================
  // 2. CÜMLEDE ANLAM
  // ==========================================================================
  if (tid === 'topic-sozel-2' || title.includes('Cümlede')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: 'Cümlede Anlam',
      core_explanation: `## 🎯 Bu Soru Tipinde Nasıl Düşünmelisin?
* **1. Cümlenin Mantıksal Omurgasını Çıkar:** Cümledeki özne, eylem ve koşul ilişkilerini belirle (*"Ne olursa ne gerçekleşir?"*).
* **2. Kesin Yargı Sorularında Yalnızca Cümledeki Bilgiye Bağlı Kal:** Cümleden çıkarılamayacak hiçbir dış bilgiyi veya kendi kişisel genel kültürünü ekleme.
* **3. Neden-Sonuç vs. Amaç-Sonuç Ayrımı:**
  - **Neden-Sonuç:** Eylem gerçekleşmiştir (*"-dığı için, sebebiyle, yüzünden"*). Test: *"Hangi gerekçeyle/nedenle?"*
  - **Amaç-Sonuç:** Eylem henüz gerçekleşmemiştir, hedeftir (*"-mek amacıyla, -sın diye"*). Test: *"Hangi amaçla/hedefle?"*
* **4. Karşılaştırma ve Örtülü Anlam İpuçları:** *"en, daha, göre, kadar, ise, de/da"* gibi sözcükler diğer durumlarla kıyaslama ve örtülü anlam taşır.

---

## 📌 Özgün AGS Tarzı Örnek Soru
> **Soru:**  
> *"2024 yılında restore edilerek ziyarete açılan tarihi kütüphane, bünyesinde barındırdığı 15. yüzyıla ait el yazması eserlerle kentin diğer müzelerinden daha fazla yerli ve yabancı araştırmacıyı ağırlamıştır."*  
>  
> Bu cümleden **kesin olarak** çıkarılabilecek yargı aşağıdakilerden hangisidir?  
> A) Tarihi kütüphane, kentte el yazması eser bulunduran tek mekândır.  
> B) Kütüphaneyi ziyaret eden araştırmacı sayısı 2024 yılından önce daha fazladır.  
> C) Kentte araştırmacıların ziyaret edebileceği birden fazla müze bulunmaktadır.  
> D) Kütüphanedeki tüm eserler 15. yüzyılda kaleme alınmıştır.  
> E) Kütüphaneye gelen yabancı ziyaretçi sayısı yerli ziyaretçilerden fazladır.

---

## 🔍 Adım Adım Çözüm ve Gerekçe
1. **İfade Analizi:** *"kentin diğer müzelerinden daha fazla..."* ifadesi, kentte söz konusu kütüphane dışında başka müzelerin de olduğunu **kesin olarak** gösterir.
2. **Doğru Cevabın Gerekçesi (C):** *"diğer müzelerinden"* ibaresi kentte birden fazla müze bulunduğunun net kanıtıdır.
3. **Çeldiricilerin Analizi:**
   - **A)** *"Tek mekândır"* çıkarılamaz; sadece diğerlerinden fazla ilgi görmüştür.
   - **B)** 2024 öncesine dair sayısal veri verilmemiştir.
   - **D)** *"Tüm eserler"* denmemiştir, 15. yüzyıla ait eserler barındırdığı söylenmiştir.
   - **E)** Yerli ve yabancı ziyaretçilerin kendi arasındaki sayısal kıyası metinde yoktur.`,
      comparison_tables: [
        {
          title: 'Cümle Anlam İlişkileri Sağlama Tablosu',
          headers: ['İlişki Türü', 'Formül / Sağlama Testi', 'Örnek Cümle'],
          rows: [
            ['Neden - Sonuç', 'Gerekçesiyle + [Sonuç Gerçekleşmiş]', 'Kar yağdığı için yollar kapandı (Kar yağdı ve kapandı)'],
            ['Amaç - Sonuç', '-mek amacıyla + [Hedef Henüz Belirsiz]', 'Sınavı kazanmak amacıyla ders çalışıyor (Kazanıp kazanmadığı belirsiz)'],
            ['Koşul - Sonuç', '-se / -sa şartıyla', 'Düzenli tekrar edersen netlerin artar'],
            ['Varsayım', 'Diyelim ki, tut ki, farz et', 'Diyelim ki sınav yarın yapıldı'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Amaç-sonuç ile neden-sonuç cümleleri aynı anlama gelir.',
          correct_distinction: 'Neden-sonuçta gerekçe gerçekleşmiş bir olgudur; amaç-sonuçta ise henüz gerçekleşmemiş bir niyet ve hedef vardır.',
          tip: 'Cümleye "-mek amacıyla" getirilebiliyorsa AMAÇ-SONUÇ; "-dığı gerekçesiyle" getiriliyorsa NEDEN-SONUÇTUR.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS 'Bu cümleden kesin olarak çıkarılabilecek yargı' sorularında 'en, ilk, tek, hepsi, daima' gibi iddialı genelleme yapan seçenekler metinde açıkça doğrulanmıyorsa derhal elenmelidir.",
          importance: 'critical',
        },
      ],
      summary: 'Cümlede anlam; doğrudan metindeki verilere dayalı kesin çıkarım yapma, neden/amaç/koşul ilişkilerini ayırt etme ve örtülü anlamları yakalama becerisidir.',
      what_to_remember: [
        '✓ Kesin çıkarımda metnin dışına çıkma, kişisel yorum katma.',
        '✓ "Diğerlerinden daha..." ifadesi birden çok unsurun varlığını kesinleştirir.',
        '✓ "-dığı için" = Neden-Sonuç | "-mek amacıyla" = Amaç-Sonuç.',
      ],
      self_check_questions: [
        {
          question: '1. "Yazarın üçüncü romanı, ilk iki romanına kıyasla daha sade bir dille yazılmış olmasına rağmen olay örgüsündeki kopukluklar nedeniyle eleştirmenlerden beklediği ilgiyi görememiştir."\n\nBu cümleden aşağıdaki yargılardan hangisi KESİN OLARAK çıkarılır?',
          options: [
            { key: 'A', text: 'Yazarın ilk iki romanı daha akıcı ve kusursuz bir kurguya sahiptir.', isCorrect: false },
            { key: 'B', text: 'Yazarın yayımlanmış en az üç romanı bulunmaktadır.', isCorrect: true },
            { key: 'C', text: 'Eleştirmenler yazarın sadece üçüncü romanını değerlendirmiştir.', isCorrect: false },
            { key: 'D', text: 'Yazar bundan sonra roman yazmayı bırakmıştır.', isCorrect: false },
            { key: 'E', text: 'İlk iki roman eleştirmenler tarafından ödüllendirilmiştir.', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Üçüncü romanı, ilk iki romanına kıyasla..." ifadesi yazarın en az üç romanının yayımlandığını kesin olarak kanıtlar.',
        },
        {
          question: '2. Aşağıdaki cümlelerin hangisinde "AMAÇ-SONUÇ" ilişkisi söz konusudur?',
          options: [
            { key: 'A', text: 'Hava aniden soğuduğu için yürüyüşü iptal etmek zorunda kaldılar.', isCorrect: false },
            { key: 'B', text: 'Projeyi zamanında teslim edebilmek için gece gündüz demeden çalışıyor.', isCorrect: true },
            { key: 'C', text: 'Trafik kurallarına uymadığı gerekçesiyle sürücüye ceza kesildi.', isCorrect: false },
            { key: 'D', text: 'Kitabı dikkatle okursan olayların mantığını daha iyi kavrarsın.', isCorrect: false },
            { key: 'E', text: 'Gürültüden rahatsız olduğu için kütüphanenin üst katına geçti.', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "Projeyi zamanında teslim edebilmek amacıyla..." anlamı olduğu için amaç-sonuç cümlesidir. A, C ve E neden-sonuç; D ise koşuldur.',
        },
        {
          question: '3. "Tiyatro, seyirciyi eğlendirirken aynı zamanda toplumsal sorunlar üzerine düşündürmeyi başardığı ölçüde kalıcılığı yakalar."\n\nBu cümlede tiyatronun kalıcılığı hangi KOŞULA bağlanmıştır?',
          options: [
            { key: 'A', text: 'Yalnızca ünlü oyuncularla sahnelenmesine', isCorrect: false },
            { key: 'B', text: 'Eğlence ögesiyle toplumsal farkındalığı ve düşünmeyi bir arada sunabilmesine', isCorrect: true },
            { key: 'C', text: 'Oyun metinlerinin klasik eserlerden seçilmesine', isCorrect: false },
            { key: 'D', text: 'Dekor ve kostümün modern tasarlanmasına', isCorrect: false },
            { key: 'E', text: 'Sadece yetişkin seyircilere hitap etmesine', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Cümlede "-dığı ölçüde" şart bağlacıyla eğlendirme ve toplumsal düşündürmenin birlikte var olması koşul olarak sunulmuştur.',
        },
        {
          question: '4. Aşağıdaki cümlelerin hangisinde "ÖRTÜLÜ ANLAM" (cümleden dolaylı olarak çıkarılan ek bir yargı) bulunmaktadır?',
          options: [
            { key: 'A', text: 'Toplantı saat tam onda şirket merkezinde başlayacak.', isCorrect: false },
            { key: 'B', text: 'Bu yılki mezuniyet törenine Ahmet de davet edilmişti.', isCorrect: true },
            { key: 'C', text: 'Kütüphaneden iki haftalığına üç adet kitap ödünç aldı.', isCorrect: false },
            { key: 'D', text: 'Güneş battıktan sonra hava hissedilir şekilde serinledi.', isCorrect: false },
            { key: 'E', text: 'Raporu hazırlamak için gerekli tüm verileri topladı.', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. "...Ahmet de davet edilmişti" ifadesindeki "de" bağlacı, Ahmet dışındaki başkalarının da törene davet edildiği örtülü anlamını kesinleştirir.',
        },
        {
          question: '5. "Tut ki sınavdan beklediğin puanı alamadın, bu durumda izleyeceğin alternatif planın ne olacak?"\n\nBu cümlenin anlam özelliği aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Varsayım', isCorrect: true },
            { key: 'B', text: 'Ön yargı', isCorrect: false },
            { key: 'C', text: 'Kanıksama', isCorrect: false },
            { key: 'D', text: 'Yadsıma (İnkâr)', isCorrect: false },
            { key: 'E', text: 'Hayıflanma', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. "Tut ki", "farz et ki", "diyelim ki" kalıpları gerçekleşmemiş bir durumu geçici olarak gerçekleşmiş sayan Varsayım cümleleridir.',
        },
      ],
    };
  }

  // ==========================================================================
  // 3. ANLATIMIN OLUŞMASI
  // ==========================================================================
  if (tid === 'topic-sozel-3' || title.includes('Anlatımın') || title.includes('Oluşması')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: 'Anlatımın Oluşması',
      core_explanation: `## 🎯 Bu Soru Tipinde Nasıl Düşünmelisin?
* **1. Giriş Cümlesi Kuralı:** Giriş cümlesi kendinden önce başka bir cümle varmış hissi vermez. İçinde *"bununla birlikte, bu nedenle, oysa, çünkü, nitekim, bu durum"* gibi bağlantı ifadeleri **BULUNAMAZ**.
* **2. Cümle Sıralama Stratejisi:**
  - Önce bağımsız ve genel yargı bildiren **1. cümleyi (Giriş)** bul.
  - Her cümlenin sonundaki anahtar kelime ile bir sonraki cümlenin başındaki kelime zincirini (köprü kelimeleri) takip et.
* **3. Akışı Bozan Cümleyi Bulma:**
  - Parçadaki konu (X) iken araya konunun farklı bir yönüne (Y) veya alakasız bir detaya geçen cümleyi tespit et.
  - Şüphelendiğin cümleyi metinden çıkardığında önceki cümle ile sonraki cümlenin birbirine pürüzsüz bağlandığını doğrula.
* **4. Paragraf Tamamlama:** Boşluğun öncesindeki ve sonrasındaki bağlaçlara (*"ancak, oysa, bu yüzden"*) dikkat et. Düşüncenin yönü olumludan olumsuza mı geçiyor?

---

## 📌 Özgün AGS Tarzı Örnek Soru
> **Soru:**  
> (I) Çocuk edebiyatı, çocuğun dünyayı anlama ve estetik beğeni kazanma sürecinde kritik bir köprüdür.  
> (II) Nitelikli çocuk kitapları, onların empati yeteneğini geliştirirken dil becerilerini de zenginleştirir.  
> (III) Günümüzde çocukların dijital ekranlarda geçirdiği süre her geçen gün artmaktadır.  
> (IV) Bu zenginleşme sayesinde çocuk, kendi duygularını doğru ifade edebilen bir birey haline gelir.  
> (V) Dolayısıyla yazarların çocuk kitaplarında pedagojik ölçütlere sadık kalması büyük önem taşır.  
>  
> Bu parçadaki numaralanmış cümlelerden hangisi **düşüncenin akışını bozmaktadır**?  
> A) I &nbsp;&nbsp;&nbsp; B) II &nbsp;&nbsp;&nbsp; C) III &nbsp;&nbsp;&nbsp; D) IV &nbsp;&nbsp;&nbsp; E) V

---

## 🔍 Adım Adım Çözüm ve Gerekçe
1. **Metin Zinciri:** 
   - I. Cümle: Çocuk edebiyatının önemi.
   - II. Cümle: Kitapların empati ve dil becerilerini zenginleştirmesi.
   - IV. Cümle: *"Bu zenginleşme sayesinde..."* diyerek doğrudan II. cümlenin sonundaki zenginleşmeye bağlanıyor.
2. **Akışı Bozan Cümle (III):** III. cümle aniden araya girerek konuyu çocuk kitaplarının etkisinden çıkarıp "ekran süresi" konusuna kaydırmıştır.
3. **Doğru Cevabın Gerekçesi (C):** III. cümle çıkarıldığında II. ve IV. cümleler birbirine kusursuz bağlanır.`,
      comparison_tables: [
        {
          title: 'Metin Mimarisi Soru Türleri ve İpuçları',
          headers: ['Soru Tipi', 'Kritik İpucu', 'Uygulanacak Test'],
          rows: [
            ['Akışı Bozan Cümle', 'Konu aynı kalsa bile bakış açısı veya detay sapması', 'Cümle çıkarılınca öncesi ve sonrası pürüzsüz bağlanmalı'],
            ['Cümle Sıralama', 'Giriş cümlesi bağımsız olmalı; zincirleme kelimeler izlenmeli', 'Öncülleri 1-2-3-4-5 şeklinde okuyarak mantık zincirini onayla'],
            ['Paragrafı İkiye Bölme', 'Yeni bir konuya veya konunun farklı boyutuna geçiş noktası', 'İkinci paragrafın ilk cümlesi bağımsız giriş cümlesi olmalı'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Akışı bozan cümle tamamen konu dışı ve saçma bir cümle olmak zorundadır.',
          correct_distinction: 'Akışı bozan cümle çoğu zaman konuyla ilişkili görünür fakat parçanın ana düşüncesinden ya da akış zincirinden sapan farklı bir alt boyuttan bahsettiği için akışı bozar.',
          tip: 'Cümleyi metinden çıkardığınızda önceki ve sonraki cümlenin birbirini tamamlayıp tamamlamadığına bakınız.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Cümle Sıralama sorularında seçeneklerin ilk numaralarına bakarak aday giriş cümlelerini 2 seçeneğe indirin; ardından 1. cümlenin bittiği kavramla başlayan 2. cümleyi eşleştirin.",
          importance: 'critical',
        },
      ],
      summary: 'Anlatımın oluşması; cümlelerin mantıksal zincirini kurma, akışı bozan sapmaları yakalama ve bağlaçlara göre boşluk tamamlama becerisidir.',
      what_to_remember: [
        '✓ Giriş cümlesinde "bu nedenle, nitekim, oysa" gibi bağlaçlar olamaz.',
        '✓ Akışı bozan cümleyi çıkar -> Öncesi ve sonrası birbirini tamamlamalı.',
        '✓ Cümle sıralamada anahtar kelime takibi yap.',
      ],
      self_check_questions: [
        {
          question: '1. (I) Geleneksel zanaatlar, bir toplumun kültürel hafızasını ve estetik zevkini kuşaktan kuşağa aktarır.\n(II) Bakırcılık ve ahşap oymacılığı gibi kadim sanatlar bu birikimin en somut örneklerindendir.\n(III) Sanayileşmeyle birlikte seri üretimin yaygınlaşması, el emeğine dayalı bu mesleklerin icrasını zorlaştırmıştır.\n(IV) Ahşap oymacılığında genellikle ceviz ve meşe ağaçları tercih edilmektedir.\n(V) Bu nedenle somut olmayan kültürel mirasın korunması için çıraklık sisteminin desteklenmesi şarttır.\n\nBu parçadaki numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?',
          options: [
            { key: 'A', text: 'I', isCorrect: false },
            { key: 'B', text: 'II', isCorrect: false },
            { key: 'C', text: 'III', isCorrect: false },
            { key: 'D', text: 'IV', isCorrect: true },
            { key: 'E', text: 'V', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Parçada geleneksel zanaatların kültürel önemi ve sanayileşme karşısındaki sorunları tartışılırken IV. cümlede ceviz ve meşe ağacı türleri gibi konuyla ilgisiz teknik bir detaya girilmiştir.',
        },
        {
          question: '2. I. Bu durum, eleştirel düşünme becerisinin körelmesine ve yüzeysel bilgi tüketimine zemin hazırlıyor.\nII. Dijital çağda bilgiye erişim hızı arttıkça bireylerin metinleri derinlemesine okuma alışkanlığı zayıflıyor.\nIII. Oysa derinlemesine okuma, insanın olaylar arasındaki neden-sonuç bağlarını kavramasını sağlayan temel araçtır.\nIV. Hızlıca kaydırılan ekranlar, bilginin özümsenmesi yerine anlık olarak tüketilip unutulmasına neden oluyor.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir paragraf oluşturulduğunda sıralama nasıl olmalıdır?',
          options: [
            { key: 'A', text: 'II - IV - I - III', isCorrect: true },
            { key: 'B', text: 'I - III - II - IV', isCorrect: false },
            { key: 'C', text: 'II - I - III - IV', isCorrect: false },
            { key: 'D', text: 'IV - II - I - III', isCorrect: false },
            { key: 'E', text: 'III - II - IV - I', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. II en bağımsız genel giriş cümlesidir. IV bu zayıflamayı ekran kaydırmayla açıklar. I "Bu durum..." diyerek sonuca bağlar. III ise "Oysa..." ile karşıt vurucu düşünceyi koyar.',
        },
        {
          question: '3. "Bir yazar, eserini kaleme alırken sadece kendi zihnindekileri aktarmakla yetinmez; okurun da metne katılmasına alan bırakır. ----. İşte bu yüzden gerçek başyapıtlar, her okuyucuda ve her çağda yeniden yazılır."\n\nBu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?',
          options: [
            { key: 'A', text: 'Her ayrıntıyı açıkça anlatıp okura düşünecek hiçbir şey bırakmaz', isCorrect: false },
            { key: 'B', text: 'Metindeki boşlukları kendi hayal gücü ve birikimiyle doldurma görevini okura devreder', isCorrect: true },
            { key: 'C', text: 'Yalnızca belirli bir zümrenin anlayabileceği ağır bir dil kullanır', isCorrect: false },
            { key: 'D', text: 'Olay örgüsünü tamamen gerçek dışı unsurlar üzerine kurar', isCorrect: false },
            { key: 'E', text: 'Okurun eleştirilerini görmezden gelerek kendi bildiğini yazar', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Boşluktan önceki "okurun metne katılmasına alan bırakır" ve sonraki "her okuyucuda yeniden yazılır" ifadelerini en doğru tamamlayan cümle B seçeneğidir.',
        },
        {
          question: '4. Aşağıdaki cümlelerin hangisi bir paragrafın "GİRİŞ CÜMLESİ" olmaya en uygundur?',
          options: [
            { key: 'A', text: 'Bununla birlikte eleştirmenin görevi sadece eserin kusurlarını sıralamak değildir.', isCorrect: false },
            { key: 'B', text: 'Söz konusu araştırmada elde edilen bulgular daha önceki tezleri doğrulamaktadır.', isCorrect: false },
            { key: 'C', text: 'Sanat eserinin kalıcılığı, hitap ettiği dönemin sınırlarını aşarak evrensel insanlık durumlarına dokunabilmesinde saklıdır.', isCorrect: true },
            { key: 'D', text: 'Nitekim bu durum genç kuşakların edebiyata olan ilgisini artırmıştır.', isCorrect: false },
            { key: 'E', text: 'Oysa şairin ilk şiirlerinde böylesine yoğun bir imge dünyasına rastlanmaz.', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. A, B, D ve E seçeneklerinde önceki cümleye gönderme yapan bağlaçlar ("Bununla birlikte", "Söz konusu", "Nitekim", "Oysa") varken C cümlesi bağımsız bir genel yargıdır.',
        },
        {
          question: '5. Bir metin iki paragrafa bölünmek istendiğinde ikinci paragrafın başlangıç cümlesi nasıl belirlenir?',
          options: [
            { key: 'A', text: 'Metindeki en kısa olan cümle seçilir.', isCorrect: false },
            { key: 'B', text: 'Yazarın konunun yeni bir boyutuna, farklı bir bakış açısına veya yeni bir düşünce aşamasına geçtiği ilk bağımsız cümle seçilir.', isCorrect: true },
            { key: 'C', text: 'Mutlaka soru işaretiyle biten cümle seçilir.', isCorrect: false },
            { key: 'D', text: 'İçinde sayısal veri bulunan cümle seçilir.', isCorrect: false },
            { key: 'E', text: 'Metnin tam ortasındaki cümle rastgele seçilir.', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Paragraf bölme sorularında konunun yeni bir alt boyutuna geçilen ilk bağımsız cümle ikinci paragrafın başlangıcıdır.',
        },
      ],
    };
  }

  // ==========================================================================
  // 4. PARAGRAFTA ANLAM
  // ==========================================================================
  if (tid === 'topic-sozel-4' || title.includes('Paragrafta')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: 'Paragrafta Anlam',
      core_explanation: `## 🎯 Bu Soru Tipinde Nasıl Düşünmelisin?
* **1. Soru Kökünü Dikkatle Oku ve Filtrele:**
  - *"Vurgulanmak istenen / Asıl anlatılmak istenen"* -> **Ana Düşünce**
  - *"Hangisine değinilmemiştir / ulaşılamaz / çıkarılamaz"* -> **Yardımcı Düşünce**
  - *"Yazarın tutumu / Amacı"* -> **Bakış Açısı ve Üslup**
* **2. Olumsuz Köklerde Önce Seçenekleri Oku:** *"Değinilmemiştir / Ulaşılamaz"* sorularında önce şıklardaki anahtar kelimeleri gözden geçirip hafızaya al, ardından metni tarayarak eşleştir ve ele.
* **3. Kapsam Tuzağını Yakala:** Şıkta doğru bir bilgi yazıyor olabilir; ancak metinde o bilgi GEÇMİYORSA veya metnin yalnızca %10'luk bir detayını kapsıyorsa ana düşünce olamaz.
* **4. Metne Sadık Kal:** Kişisel dünya görüşünü değil, yazarın parçada çizdiği sınırları esas al.

---

## 📌 Özgün AGS Tarzı Örnek Soru
> **Soru:**  
> *"Şehirlerin hızla betonlaşması ve yeşil alanların daralması, modern insanı yalnızca doğadan değil kendi dinginliğinden de koparmıştır. Parkta geçirilen yarım saatlik bir yürüyüşün insan psikolojisi üzerindeki iyileştirici etkisi, en gelişmiş ilaçlardan daha kalıcıdır. Ne var ki modern kent planlaması insanı bir makine gibi görmekte, onun ruhsal gereksinimlerini binaların gölgesinde unutmaktadır."*  
>  
> Bu parçada asıl anlatılmak istenen düşünce aşağıdakilerden hangisidir?  
> A) Şehir hayatının sunduğu imkânların insan sağlığını tehdit ettiği  
> B) Doğadan kopuk modern kentleşmenin, insanın ruhsal ve psikolojik ihtiyaçlarını göz ardı ettiği  
> C) Şehirlerdeki yeşil alanların yalnızca hafta sonları kullanıldığı  
> D) Modern tıbbın psikolojik rahatsızlıkları tedavi etmede yetersiz kaldığı  
> E) İnsanların büyük şehirlerden kırsal alanlara göç etmesi gerektiği

---

## 🔍 Adım Adım Çözüm ve Gerekçe
1. **Metin Analizi:** Metnin ilk cümlesi ve son cümlesi *"yeşil alanların yok oluşu"*, *"insanın dinginliğini kaybetmesi"* ve *"kent planlamasının ruhsal gereksinimleri unutması"* üzerine kuruludur.
2. **Doğru Cevabın Gerekçesi (B):** Parçanın bütününde doğadan kopuk kentleşmenin insan ruhunu ve psikolojisini ihmal ettiği vurgulanmıştır.
3. **Çeldiricilerin Analizi:**
   - **D)** *"Modern tıbbın yetersizliği"* parçada genel bir iddia değildir; yürüyüşün faydasını anlatmak için yapılan bir benzetmedir (dar kapsam).
   - **E)** *"Kırsala göç edilmeli"* parçada geçmeyen aşırı kişisel bir öneridir.`,
      comparison_tables: [
        {
          title: 'Paragraf Soru Kökleri ve Hızlı Çözüm Taktikleri',
          headers: ['Soru Kökü Türü', 'Okuma Sırası', 'Eleme Yöntemi'],
          rows: [
            ['Ana Düşünce (Vurgulanmak istenen)', 'Soru kökü -> Paragraf -> Seçenekler', 'Örnek ve detay şıkları elenir, şemsiye genel yargı seçilir'],
            ['Yardımcı Düşünce (Ulaşılamaz/Değinilmemiştir)', 'Soru kökü -> Seçenekler -> Paragraf tarama', 'Metinde birebir eşleşen 4 seçenek çizilir, kalan işaretlenir'],
            ['Yazarın Amacı / Tutumu', 'Paragraftaki sıfat ve duygu bildiren kelimeler', 'Yazarın eleştirel mi, onaylayıcı mı, tarafsız mı olduğu saptanır'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Paragrafta geçen tüm olumlu cümleler ana düşünce adayıdır.',
          correct_distinction: 'Ana düşünce tek başına doğru olan değil; parçadaki diğer tüm cümlelerin onu desteklemek için yazıldığı "nihai hedef yargıdır".',
          tip: 'Metnin sonundaki "O halde, sonuç olarak, asıl mesele" bağlaçlarına odaklanınız.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Paragraf sorularında seçeneklerde 'yalnızca, kesinlikle, hiçbir şekilde, tümüyle' gibi uç ve mutlak sınır koyan ifadelere dikkat ediniz; metinde bu kesinlik yoksa o seçenek çeldiricidir.",
          importance: 'critical',
        },
      ],
      summary: 'Paragrafta anlam; ana düşünceyi saptama, yardımcı düşünceleri tarayarak eleme ve yazarın bakış açısını metne sadık kalarak çözme sürecidir.',
      what_to_remember: [
        '✓ Olumsuz sorularda (Değinilmemiştir): Önce şıkları oku, anahtar kelimeleri kafanda tut.',
        '✓ Ana fikir sorularında: Metni tek cümleyle kafanda özetle ve şıkkı bul.',
        '✓ Metin dışı genel doğrulara kanma; sadece metindeki bilgiyi doğru kabul et.',
      ],
      self_check_questions: [
        {
          question: '1. "Sanat eleştirisi, eserin zayıf yönlerini ifşa edip onu değersizleştirmek için kurulmuş bir mahkeme değildir. Gerçek bir eleştirmen, eserin arka planındaki estetik derinliği gün yüzüne çıkaran, yazar ile okur arasında köprü kuran bir rehberdir."\n\nBu parçaya göre eleştirmenin ASIL görevi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Eserdeki anlatım bozukluklarını tespit etmek', isCorrect: false },
            { key: 'B', text: 'Eserin estetik değerini ortaya koyarak okurun eseri kavramasına rehberlik etmek', isCorrect: true },
            { key: 'C', text: 'Yazarlara hangi konularda yazmaları gerektiğini dikte etmek', isCorrect: false },
            { key: 'D', text: 'Okuyucu sayısını artırmak için popüler eserleri tanıtmak', isCorrect: false },
            { key: 'E', text: 'Edebiyat dünyasındaki tartışmaları sonlandırmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Parçada eleştirmenin yargıç değil, estetik derinliği açığa çıkaran bir rehber olduğu vurgulanmıştır.',
        },
        {
          question: '2. "Geleneksel eğitim anlayışında öğretmen bilginin tek kaynağı ve dağıtıcısı konumundaydı. Ancak bilginin hızla çoğaldığı ve her an erişilebilir olduğu günümüzde öğretmenin rolü; bilgiyi aktarmaktan ziyade öğrenciye doğru bilgiye nasıl ulaşacağını, bilgiyi nasıl analiz edeceğini ve eleştirel süzgeçten geçireceğini öğreten bir kolaylaştırıcılığa dönüşmüştür."\n\nBu parçadan aşağıdaki yargılardan hangisine ULAŞILAMAZ?',
          options: [
            { key: 'A', text: 'Geleneksel eğitimde öğretmenin merkezde yer aldığına', isCorrect: false },
            { key: 'B', text: 'Günümüzde bilgiye erişim kanallarının çeşitlenip hızlandığına', isCorrect: false },
            { key: 'C', text: 'Modern eğitimde öğretmenin rehber ve yönlendirici rol üstlendiğine', isCorrect: false },
            { key: 'D', text: 'Geleneksel eğitim modellerinin tamamen hatasız uygulandığına', isCorrect: true },
            { key: 'E', text: 'Öğrencilerin eleştirel düşünme ve analiz becerilerine ihtiyaç duyduğuna', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Metinde geleneksel modellerin hatasız olduğuna dair hiçbir bilgi yoktur; aksine rollerin değiştiği anlatılmıştır.',
        },
        {
          question: '3. Paragraf sorularında "yardımcı düşünce" ararken kullanılan en etkili eleme tekniği hangisidir?',
          options: [
            { key: 'A', text: 'Soru kökünü okuduktan sonra seçeneklerdeki kilit kavramları belirleyip metinde bu kavramların karşılıklarını satır satır tarayarak eşleştirmek', isCorrect: true },
            { key: 'B', text: 'Yalnızca ilk cümleyi okuyup en uzun seçeneği işaretlemek', isCorrect: false },
            { key: 'C', text: 'Seçenekleri okumadan doğrudan metni ezberlemeye çalışmak', isCorrect: false },
            { key: 'D', text: 'Tüm seçeneklerin yanlış olduğunu varsaymak', isCorrect: false },
            { key: 'E', text: 'Sadece noktalama işaretlerine dikkat etmek', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Seçeneklerdeki anahtar kelimeleri metindeki satırlarla birebir eşleyip elemek hatasız ve hızlı çözümü sağlar.',
        },
        {
          question: '4. "Bir yazarın dili ustalıkla kullanması, süslü ve gösterişli kelimeleri art arda dizmesi demek değildir. Asıl ustalık, en karmaşık felsefi düşünceleri bile herkesin anlayabileceği duru ve berrak bir anlatımla aktarabilme yeteneğidir."\n\nBu parçada yazarın savunduğu temel düşünce hangisidir?',
          options: [
            { key: 'A', text: 'Sanatsal derinliğin sade ve duru bir dille ifade edilebilmesinde saklı olduğu', isCorrect: true },
            { key: 'B', text: 'Felsefi konuların edebiyatta işlenmemesi gerektiği', isCorrect: false },
            { key: 'C', text: 'Yazarların yalnızca halk hikâyelerini konu edinmesi gerektiği', isCorrect: false },
            { key: 'D', text: 'Ağdalı dil kullanan yazarların daha çok okunduğu', isCorrect: false },
            { key: 'E', text: 'Edebiyat ile felsefenin birbirine tamamen zıt alanlar olduğu', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Metinde ustalığın süste değil, duruluk ve sadelikle karmaşık düşünceleri aktarmada olduğu belirtilmiştir.',
        },
        {
          question: '5. Paragrafın anlatımında "Düşünceyi Geliştirme Yolları"ndan hangisi kullanıldığında, soyut bir düşünceyi somutlaştırmak için alanında tanınan yetkin bir kişinin sözü tırnak içinde aktarılır?',
          options: [
            { key: 'A', text: 'Tanık Gösterme', isCorrect: true },
            { key: 'B', text: 'Karşılaştırma', isCorrect: false },
            { key: 'C', text: 'Sayısal Verilerden Yararlanma', isCorrect: false },
            { key: 'D', text: 'Tanımlama', isCorrect: false },
            { key: 'E', text: 'Benzetme', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Düşünceyi inandırıcı kılmak için yetkin bir kişinin isminin ve sözünün paylaşılması Tanık Göstermedir.',
        },
      ],
    };
  }

  // ==========================================================================
  // 5. SÖZEL MANTIK
  // ==========================================================================
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: 'Sözel Mantık',
    core_explanation: `## 🎯 Bu Soru Tipinde Nasıl Düşünmelisin?
* **1. Sabit Değişkeni Bul ve Tablo İskeletini Kur:** Günler (Pzt-Sal-Çar...), Katlar (1-2-3-4), Sıralar (1-2-3-4-5) gibi sabit yapılar tablonun **sütun başlığı** olmalıdır.
* **2. Kesin Bilgileri Doğrudan Tabloya Yaz:** *"Ceyda 3. gündür"* veya *"Ali 2. kattadır"* gibi kesin bilgiyi hücreye yaz ve metindeki o öncülün üstünü çiz.
* **3. Blokları ve Bağıntıları Kodla:**
  - *"A, B'den hemen sonradır"* -> $[B][A]$ bitişik blok.
  - *"C ile D arasında 1 kişi vardır"* -> $[C][\\quad][D]$ veya $[D][\\quad][C]$.
  - *"E ve F aynı grupta değildir"* -> $E \\neq F$.
* **4. İhtimalleri Oklarla Göster:** Kalan 2 kişi iki farklı güne gelebiliyorsa hücrelerin arasına çift yönlü ok $(\\leftrightarrow)$ koyarak olasılığı somutlaştır.

---

## 📌 Özgün AGS Tarzı Örnek Soru
> **Soru:**  
> Bir okulda A, B, C, D ve E adlı 5 öğretmen Pazartesi, Salı, Çarşamba, Perşembe ve Cuma günleri nöbet tutacaktır. Nöbet günleriyle ilgili bilinenler şunlardır:  
> - Her gün yalnız bir öğretmen nöbetçidir.  
> - C öğretmeni Çarşamba günü nöbetçidir.  
> - A öğretmeni, B öğretmeninden hemen sonraki gün nöbetçidir.  
> - D öğretmeni Cuma günü nöbetçi değildir.  
>  
> Buna göre, E öğretmeninin Cuma günü nöbetçi olduğu biliniyorsa **Salı günü** nöbetçi olan öğretmen kimdir?  
> A) A &nbsp;&nbsp;&nbsp; B) B &nbsp;&nbsp;&nbsp; C) C &nbsp;&nbsp;&nbsp; D) D &nbsp;&nbsp;&nbsp; E) E

---

## 🔍 Adım Adım Çözüm ve Gerekçe
1. **Tablo Kurulumu (Sabit Günler):**
   - [Pzt] | [Sal] | [Çar] | [Per] | [Cum]
2. **Kesin Bilgiyi Yerleştir:**
   - [Çar] = **C**
   - Soru kökündeki ek bilgi: [Cum] = **E**
3. **Kalan Günler ve Blok:**
   - Kalan günler: Pazartesi, Salı, Perşembe.
   - Öncül: $[B][A]$ ardışık bloktur (yan yana iki boş gün gerekir).
   - Yan yana boş olan tek yer: **Pazartesi (B) ve Salı (A)** günüdür.
4. **Kalan Kişi:**
   - Perşembe gününe kalan öğretmen: **D** olur (Zaten D Cuma değildi, şart sağlandı).
5. **Doğru Cevabın Gerekçesi (A):** Salı günü nöbetçi olan öğretmen **A**'dır.`,
    comparison_tables: [
      {
        title: 'Sözel Mantık Kodlama ve Tablo Çözüm Rehberi',
        headers: ['Öncül Metni', 'Mantıksal Şema', 'Tabloya Yerleşim Kuralı'],
        rows: [
          ['"A, B’den hemen öncedir"', '$[A][B]$ Bloku', 'İki ardışık boş hücreye yapışık yerleştirilir'],
          ['"C, D’den sonraki bir gündedir"', '$D < C$', 'D daha önceki bir günde, C daha sonraki bir gündedir (Bitişik olması şart değildir)'],
          ['"K ve L aynı gün nöbetçidir"', '$K = L$', 'Aynı gün sütununa birlikte yazılırlar'],
          ['"M, 1. veya 5. sırada değildir"', '$M \\neq 1, M \\neq 5$', '1 ve 5 numaralı hücrelere M yazılamaz'],
        ],
      },
    ],
    common_confusions: [
      {
        wrong_belief: '"A, B’den sonradır" ifadesi "hemen sonrasındaki gündür" anlamına gelir.',
        correct_distinction: '"Hemen sonradır" denmedikçe arada başka günler de olabilir ($B < A$). "Hemen" kelimesi varsa bitişik blok $[B][A]$ yapılır.',
        tip: 'Öncüllerde "hemen sonra" ile "sonraki bir günde" ifadelerini birbirinden titizlikle ayırınız.',
      },
    ],
    exam_tips: [
      {
        tip: "AGS Sözel Mantık sorularında verilen 1 ana senaryoya bağlı 4 soru sorulur. Tabloyu doğru kurduğunuzda 4 soruyu 2 dakika içinde eksiksiz ve %100 doğrulukla çözersiniz.",
        importance: 'critical',
      },
    ],
    summary: 'Sözel mantık; sabit değişkenlerle tablo kurma, kesin verileri işleme, blokları yerleştirme ve olasılıkları ayrıştırma algoritmasıdır.',
    what_to_remember: [
      '✓ Günleri / sıraları sütun başlığı yap.',
      '✓ "Hemen sonra" = Bitişik Blok $[A][B]$.',
      '✓ "Sonraki bir gün" = $A < B$ (arada boşluk olabilir).',
      '✓ İhtimalleri çift yönlü okla göster.',
    ],
    self_check_questions: [
      {
        question: '1. K, L, M, N, P adlı 5 kişi bir yarışmada 1’den 5’e kadar dereceler almıştır.\n- K yarışı 2. sırada tamamlamıştır.\n- M, N’den hemen sonraki sırada bitirmiştir.\n- P yarışı sonuncu (5.) bitirmemiştir.\n\nBuna göre yarışı 1. sırada tamamlayan kişi KESİN OLARAK kimdir?',
        options: [
          { key: 'A', text: 'K', isCorrect: false },
          { key: 'B', text: 'L', isCorrect: false },
          { key: 'C', text: 'M', isCorrect: false },
          { key: 'D', text: 'P', isCorrect: true },
          { key: 'E', text: 'N', isCorrect: false },
        ],
        explanation: 'Doğru cevap D seçeneğidir. K 2. sıradadır. [N][M] bloku ardışık olmalıdır; 2. sıra dolu olduğu için bu blok ancak (3, 4) veya (4, 5) olabilir. Eğer (4, 5) olursa P sonuncu olamayacağı için P 1 veya 3 olur. Ancak N ve M (3, 4)’te olursa sonuncu (5.) L olur, 1. ise kesinlikle P olur. Her iki senaryoda da 1. sıra P’ye aittir.',
      },
      {
        question: '2. Sözel mantık sorularında "A ile B aynı katta oturmamaktadır" öncülünün sembolik ifadesi hangisidir?',
        options: [
          { key: 'A', text: '$A = B$', isCorrect: false },
          { key: 'B', text: '$A \\neq B$', isCorrect: true },
          { key: 'C', text: '$[A][B]$', isCorrect: false },
          { key: 'D', text: '$A < B$', isCorrect: false },
          { key: 'E', text: '$A > B$', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. Aynı katta olmama koşulu $A \\neq B$ olarak kodlanır.',
      },
      {
        question: '3. Bir hastanede pazartesiden cumaya kadar Dr. Ali, Dr. Burak ve Dr. Can nöbet tutacaktır. "Burak yalnızca Salı ve Perşembe günleri nöbetçidir" bilgisi verildiğinde tablonun hangi günlerine Burak yazılmalıdır?',
        options: [
          { key: 'A', text: 'Pazartesi ve Çarşamba', isCorrect: false },
          { key: 'B', text: 'Salı ve Perşembe', isCorrect: true },
          { key: 'C', text: 'Çarşamba ve Cuma', isCorrect: false },
          { key: 'D', text: 'Pazartesi ve Cuma', isCorrect: false },
          { key: 'E', text: 'Yalnızca Cuma', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. Verilen kesin bilgi doğrultusunda Salı ve Perşembe sütunlarına Burak yerleştirilir.',
      },
      {
        question: '4. Sözel akıl yürütme sorularında birden fazla bilinmeyen olduğunda en doğru çözüm stratejisi hangisidir?',
        options: [
          { key: 'A', text: 'Değişken sayısı en az ve sabit olan unsuru tablo başlığı yaparak kesin bilgilerden hareket etmek', isCorrect: true },
          { key: 'B', text: 'Hiç tablo çizmeden doğrudan şıklardan gitmek', isCorrect: false },
          { key: 'C', text: 'Tüm kişileri rastgele yerleştirmek', isCorrect: false },
          { key: 'D', text: 'Sorudaki ilk seçeneği doğru kabul etmek', isCorrect: false },
          { key: 'E', text: 'Yalnızca olumsuz öncülleri dikkate almak', isCorrect: false },
        ],
        explanation: 'Doğru cevap A seçeneğidir. Sabit değişkeni ana çatı yapmak ve kesin bilgileri yerleştirmek en hızlı ve güvenli çözüm yoludur.',
      },
      {
        question: '5. "X, Y’den önceki bir saatte mülakata girmiştir" ifadesi ile ilgili hangisi DOĞRUDUR?',
        options: [
          { key: 'A', text: 'X, Y’den hemen önceki saatte olmak zorundadır.', isCorrect: false },
          { key: 'B', text: 'X, Y’den daha önceki herhangi bir saatte olabilir; aralarında başka kişiler de bulunabilir.', isCorrect: true },
          { key: 'C', text: 'X ile Y aynı saatte mülakata girmiştir.', isCorrect: false },
          { key: 'D', text: 'Y, X’ten önce girmiştir.', isCorrect: false },
          { key: 'E', text: 'X sonuncu saatte girmiştir.', isCorrect: false },
        ],
        explanation: 'Doğru cevap B seçeneğidir. "Önceki bir saatte" ifadesi sıralamayı $X < Y$ olarak belirler ancak aralarında başka kişilerin de bulunabileceğini gösterir.',
      },
    ],
  };
};
