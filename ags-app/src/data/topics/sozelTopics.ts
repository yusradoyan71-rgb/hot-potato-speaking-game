import type { Topic, TopicContent } from '../../types/database';

export const getSozelSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // 1. OKUDUĞUNU ANLAMA & ANA DÜŞÜNCE (topic-sozel-1-1 & 2-1)
  if (tid === 'topic-sozel-1-1' || tid === 'topic-sozel-2-1') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Paragrafta ana düşünce; yazarın metni yazma gerekçesi olan, okuyucuya aktarmak istediği **en temel ileti ve mesajdır**.

## 1. Ana Düşünce Nedir ve Nasıl Bulunur?
* **Konu:** Parçada *"Ne anlatılıyor?"* sorusunun yanıtıdır (Kapsamı belirler).
* **Ana Düşünce:** *"Yazar bu konuyu anlatarak okuyucuya neyi benimsetmek/iletmek istiyor?"* sorusunun yanıtıdır (Yargı bildirir).
* **Ana Düşünce Cümlesinin Belirgin Konumları:**
  - **Tümdengelim Metinlerinde:** Giriş cümlesindedir (İlk 1-2 cümle).
  - **Tümevarım Metinlerinde:** Sonuç cümlesindedir (*"Kısacası, özetle, o halde, asıl önemli olan, sonuç olarak..."* gibi bağlaçlardan sonra gelir).
  - **Metnin Geneline Yayılmış (Örtük) Metinlerde:** Parçadaki örnekler, benzetmeler ve karşıtlıklar soyutlanarak tek bir ana fikre ulaşılır.

## 2. AGS Çeldirici Seçenekleri Eleme Yöntemi
* **1. Aşırı Genelleme Tuzağı:** Metinde yalnızca belirli bir durumdan (örneğin dijitalleşmenin eğitimdeki etkisinden) bahsedilirken şıkta *"Teknoloji insanlığın tüm alanlarını ele geçirmiştir"* gibi parçayı aşan genel yargılara yer verilir -> **ELE!**
* **2. Dar Kapsam / Yan Fikir Tuzağı:** Metinde geçen bir örnek veya ayrıntı şıkka konulur. İfade doğru olsa bile parçanın bütününü kapsamaz -> **ELE!**
* **3. Yön Değiştirme (Kavram Kayması) Tuzağı:** Yazarın savunduğu düşüncenin tam tersi veya alakasız bir nedeni doğruymuş gibi sunulur -> **ELE!**
* **4. Metin Dışı Öznel Yorum:** Doğru bir genel bilgi olsa bile metinde yer almayan bir yargı şıkka eklenir -> **ELE!**

## 3. Örnek AGS Paragrafı ve Çözüm Analizi
> *"Sanatçının görevi, gerçeği olduğu gibi yansıtan bir ayna olmak değildir. Fotoğraf makinesinin saniyeler içinde kaydettiği bir görüntüyü tuvale aynen aktarmak ressamı sanatçı yapmaz. Gerçek sanatçı, dış dünyadaki nesneyi kendi duygu, düşünce ve estetik süzgecinden geçirerek ona yepyeni bir ruh kazandıran kişidir."*

* **Metnin Konusu:** Sanatçının gerçekliği işleme biçimi.
* **Ana Düşünce:** Sanatçı, dış dünyayı taklit eden değil; ona kendi öznel yorumunu ve duygusunu katan kişidir.
* **Çeldirici Analizi:** *"Fotoğraf sanatı resim sanatından daha üstündür"* (Yanlış karşılaştırma), *"Sanatçılar gerçeğe tamamen sırt çevirmelidir"* (Aşırı uç yorum).`,
      comparison_tables: [
        {
          title: 'Konu vs. Ana Düşünce Ayrımı',
          headers: ['Ölçüt', 'Konu (Neyden Bahsediyor?)', 'Ana Düşünce (Asıl Mesaj Ne?)'],
          rows: [
            ['Biçimi', 'Genellikle bir tamlama veya kavramdır', 'Yüklemi olan, yargı bildiren tam bir cümledir'],
            ['Kapsamı', 'Metnin sınırlarını ve başlığını çizer', 'Yazarın okura vermek istediği temel ders ve öğüttür'],
            ['Örnek', 'Kitap okuma alışkanlığı', 'Kitap okumak insanın eleştirel düşünme yetisini geliştirir'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Metinde geçen her doğru cümle ana düşünce olabilir.',
          correct_distinction: 'Metinde geçen doğru bir cümle yalnızca bir "örnek" veya "yardımcı düşünce" olabilir. Ana düşünce parçanın TAMAMINI şemsiye gibi örten genel yargıdır.',
          tip: 'Soruda ana fikir aranırken "Bu cümle parçadaki tüm diğer cümleleri kapsıyor mu?" testi uygulanmalıdır.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Sözel Yetenek testinde ana düşünce sorularını çözerken önce soru kökünü, sonra seçenekleri değil; soru kökünü, ardından metni dikkatle okuyup kendi zihninizde ana fikri 1 cümleyle özetleyiniz. Şıklarda bu özete en yakın seçeneği arayınız.",
          importance: 'critical',
        },
      ],
      summary: 'Ana düşünce yazarın temel iletisidir; konudan farklı olarak yargı bildirir; dar kapsamlı ve aşırı genellenmiş çeldiriciler elenerek bulunur.',
      what_to_remember: [
        '✓ Soru kökünü oku -> Metni anla -> 1 cümlelik ana fikri kafanda kur -> Şıkla eşleştir.',
        '✓ "O halde, kısaca, asıl, önemli olan" bağlaçlarına odaklan.',
        '✓ Aşırı genelleme ve parça içi dar detay tuzaklarına düşme.',
      ],
      self_check_questions: [
        {
          question: '1. "Bir toplumda kütüphanelerin sayısı ve niteliği, o toplumun bilgiye verdiği değerin en somut göstergesidir. Ancak kütüphanelerin varlığı tek başına yeterli değildir; asıl mesele, bireylerin bu mekânları bir yaşam alanı haline getirip sorgulayan, araştıran bir zihinsel alışkanlık kazanabilmesidir."\n\nBu parçada asıl vurgulanmak istenen düşünce aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Kütüphane binalarının modern mimariyle inşa edilmesi gerektiği', isCorrect: false },
            { key: 'B', text: 'Kütüphanelerin fiziksel varlığından ziyade, toplumda araştıran ve sorgulayan bir okuma kültürüne dönüştürülmesinin önemli olduğu', isCorrect: true },
            { key: 'C', text: 'Tüm şehirlerde eşit sayıda kütüphane açılmasının zorunluluğu', isCorrect: false },
            { key: 'D', text: 'Dijital kitapların basılı kitapların yerini aldığı', isCorrect: false },
            { key: 'E', text: 'Kütüphanelerin sadece öğrencilerin ders çalıştığı mekânlar olduğu', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Parçada kütüphanelerin sayısından ziyade, bireylerin sorgulayan bir zihinsel alışkanlıkla bu mekânları kullanması (asıl mesele) vurgulanmıştır.',
        },
        {
          question: '2. Paragraf sorularında "aşırı genelleme" içeren çeldirici seçenekleri tespit etmek için hangisine dikkat edilmelidir?',
          options: [
            { key: 'A', text: 'Seçenekteki cümlenin metnin sınırlarını aşıp "tüm, herkes, hiçbir zaman, tamamen" gibi mutlak ve parçada geçmeyen uç ifadelere yer verip vermediğine', isCorrect: true },
            { key: 'B', text: 'Yalnızca cümlenin devrik yazılıp yazılmadığına', isCorrect: false },
            { key: 'C', text: 'Seçenekte yabancı kökenli kelime bulunup bulunmadığına', isCorrect: false },
            { key: 'D', text: 'Şıkkın uzunluğunun diğerlerinden kısa olmasına', isCorrect: false },
            { key: 'E', text: 'Metnin ilk cümlesiyle aynı kelimeleri taşımasına', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Aşırı genelleme çeldiricileri metnin kapsamını haksız yere genişleterek adayı yanıltmayı hedefler.',
        },
        {
          question: '3. "Eğitimde ezberci yaklaşım, öğrencinin zihnine bilgiyi geçici olarak depolar; ancak bilginin yeni durumlara transfer edilmesini ve problem çözümünde kullanılmasını engeller."\n\nBu parçadan çıkarılabilecek EN KAPSAMLI yargı hangisidir?',
          options: [
            { key: 'A', text: 'Ezberlenen bilgilerin kalıcı ve üretken beceriye dönüşmediği', isCorrect: true },
            { key: 'B', text: 'Tüm derslerde yalnızca teorik sınavlar yapılması gerektiği', isCorrect: false },
            { key: 'C', text: 'Öğrencilerin hiçbir bilgiyi zihinlerinde tutmaması gerektiği', isCorrect: false },
            { key: 'D', text: 'Matematik dersinde formül ezberlemenin şart olduğu', isCorrect: false },
            { key: 'E', text: 'Okullarda sınav uygulamasının tamamen kaldırılması gerektiği', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Metnin bütününde ezberin bilginin transferini ve problem çözmede kullanımını engellediği ifade edilmiştir.',
        },
        {
          question: '4. Paragrafın ana düşüncesi ile konusu arasındaki temel fark aşağıdakilerden hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Konu metnin ne hakkında olduğunu belirtirken; ana düşünce yazarın o konu üzerinden okuyucuya ilettiği temel yargı ve mesajdır.', isCorrect: true },
            { key: 'B', text: 'Konu daima son cümlede, ana düşünce ilk cümlede yer alır.', isCorrect: false },
            { key: 'C', text: 'Ana düşünce tek bir kelimeden oluşur, konu ise uzun bir paragraftır.', isCorrect: false },
            { key: 'D', text: 'Konu yazarın kişisel görüşüdür, ana düşünce ise bilimsel ispattır.', isCorrect: false },
            { key: 'E', text: 'Aralarında hiçbir anlamsal fark bulunmamaktadır.', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Konu içeriği, ana düşünce ise yazarın vermek istediği temel iletiyi ve dersi ifade eder.',
        },
        {
          question: '5. "Yazar son romanında sıradan insanların günlük kaygılarını o kadar yalın ve süssüz bir dille anlatmış ki okur sayfaları çevirirken kendini yanı başındaki komşusuyla sohbet ediyor gibi hissediyor."\n\nBu parçada sözü edilen yazarın ve eserinin öne çıkan niteliği hangisidir?',
          options: [
            { key: 'A', text: 'Ağdalı ve sanatlı bir dil kullanması', isCorrect: false },
            { key: 'B', text: 'Yalınlık, duruluk ve samimi/doğal bir anlatım dili', isCorrect: true },
            { key: 'C', text: 'Tarihsel olayları belgelere dayandırarak aktarması', isCorrect: false },
            { key: 'D', text: 'Yalnızca soylu kesimin hayatını konu edinmesi', isCorrect: false },
            { key: 'E', text: 'Geleceğe dair fantastik kurgular üretmesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Metinde "yalın ve süssüz dil" ile "komşusuyla sohbet eder gibi" ifadeleri doğallık ve yalınlığı vurgular.',
        },
      ],
    };
  }

  // 2. SÖZEL MANTIK VE AKIL YÜRÜTME (unit-sozel-3)
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `Sözel mantık; verilen karmaşık öncülleri analiz ederek değişkenler tablosu kurma, kesin bilgiler ile olasılıkları birbirinden ayırma ve hızlı çıkarım yapma becerisidir.

## 1. Sözel Mantık Sorularını Çözme Metodolojisi
* **1. Adım: Değişkenleri ve Sabitleri Belirle:**
  - Değişken sayısı en az ve sabit olan unsuru (günler, katlar, sıralar, aylar) **tablonun ana iskeleti (başlıkları)** yap.
  - Hareketli unsurları (kişiler, nesneler, dersler) tablonun içine yerleştir.
* **2. Adım: Kesin Bilgileri Yerleştir:**
  - *"Ali 3. kattadır"*, *"Salı günü Ayşe nöbetçidir"* gibi kesin bilgileri tabloya doğrudan yaz ve öncülün üstünü çiz.
* **3. Adım: Koşullu ve Bağıntılı Öncülleri Not Al:**
  - *"B, A'dan hemen sonradır"* -> $[A][B]$ blok kur.
  - *"C ve D aynı gruptadır"* -> $(C = D)$.
  - *"E ve F farklı gruptadır"* -> $(E \\neq F)$.
* **4. Adım: Olasılıkları Ayrıştır (Çift İhtimalli Tablo):**
  - İki farklı durum kalırsa tabloyu ikiye böl veya ok işaretiyle $(\\leftrightarrow)$ yer değiştirebileceklerini belirt.

## 2. En Sık Karşılaşılan Soru Kalıpları
* **"Buna göre aşağıdakilerden hangisi KESİNLİKLE DOĞRUDUR?"** -> Tüm olasılıklarda değişmeyen tek kesin bilgiyi ara.
* **"Hangisi KESİNLİKLE YANLIŞTIR?"** -> Öncüllere doğrudan aykırı olan çelişkiyi bul.
* **"Hangisinin yeri/sırası KESİN OLARAK BİLİNMEKTEDİR?"** -> Tek bir hücreye yerleşen değişkeni seç.
* **"Ahmet'in 4. sırada olduğu biliniyorsa..."** -> Yeni verilen bilgiyi tabloya ekleyip kilitlenen diğer değişkenleri çöz.`,
      comparison_tables: [
        {
          title: 'Sözel Mantık İfade Sembolleri ve Tabloya Aktarımı',
          headers: ['Sözel Öncül İfadesi', 'Mantıksal Kodlama', 'Tablodaki Karşılığı'],
          rows: [
            ['"A, B’den hemen sonradır"', '$[B][A]$ Bloku', 'B ile A yan yana/alt alta yapışık bloktur'],
            ['"C ile D arasında yalnız bir kişi vardır"', '$[C][\\quad][D]$ veya $[D][\\quad][C]$', 'Aralarında tam 1 boşluk olan simetrik blok'],
            ['"E ve F aynı grupta değildir"', '$E \\neq F$', 'Aynı sütuna veya satıra yazılamazlar'],
            ['"G ne birinci ne de sonuncudur"', '$G \\neq 1, G \\neq \\text{son}$', '1 ve sonuncu hücrelere çarpı atılır'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Sözel mantık soruları zihinden tablo çizmeden daha hızlı çözülebilir.',
          correct_distinction: 'Zihinden çözmeye çalışmak olasılıkların karışmasına ve %90 oranında hata yapılmasına neden olur. Küçük ve net bir şema/tablo çizmek soruyu 1 dakikada hatasız çözdürür.',
          tip: 'Soruyu okumaya başlamadan önce sabit değişkeni tespit edip hemen ızgara tabloyu çiziniz.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Sözel Mantık sorularında 4 soru tek bir ana metne bağlıdır. Tabloyu 1.5 dakikada eksiksiz kurduğunuzda kalan 4 soruyu 30'ar saniyede çözerek sınavda muazzam zaman kazanırsınız.",
          importance: 'critical',
        },
      ],
      summary: 'Sözel mantıkta sabit değişkeni tablo başlığı yapmak, kesin verileri yazıp blokları yerleştirmek ve olasılıkları oklarla göstermek temel çözüm algoritmasıdır.',
      what_to_remember: [
        '✓ Sabit olanı (gün, sıra, kat) tablo başlığı yap.',
        '✓ Kesin bilgileri yaz, öncülü çiz.',
        '✓ "Hemen arkasında" diyorsa blok yap: $[A][B]$.',
        '✓ İhtimalleri okla (A <-> B) göster.',
      ],
      self_check_questions: [
        {
          question: '1. Ahmet, Burak, Ceyda, Deniz ve Emre adlı 5 öğrenci bir sınav sonucuna göre 1’den 5’e kadar sıralanmıştır. Bilinenler şunlardır:\n- Ahmet 3. sıradadır.\n- Burak, Ceyda’dan hemen sonraki sıradadır.\n- Deniz sonuncu (5.) değildir.\n\nBuna göre aşağıdakilerden hangisi KESİNLİKLE YANLIŞTIR?',
          options: [
            { key: 'A', text: 'Ceyda 1. sıradadır.', isCorrect: false },
            { key: 'B', text: 'Burak 2. sıradadır.', isCorrect: false },
            { key: 'C', text: 'Burak 4. sıradadır.', isCorrect: true },
            { key: 'D', text: 'Emre 5. sıradadır.', isCorrect: false },
            { key: 'E', text: 'Deniz 1. sıradadır.', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Ahmet 3. sıradadır. Burak Ceyda’dan hemen sonra olduğuna göre [Ceyda][Burak] bloku ya (1, 2) ya da (4, 5) sıralarında olmalıdır. Eğer (4, 5) olursa Ceyda 4, Burak 5 olur. Dolayısıyla Burak asla 4. sırada OLAMAZ (4. sırada olursa Ceyda 3 olmalıdır ama 3’te Ahmet vardır).',
        },
        {
          question: '2. Sözel akıl yürütme sorularında birden fazla ihtimal ortaya çıktığında izlenecek en güvenli yol hangisidir?',
          options: [
            { key: 'A', text: 'Tabloyu çift ihtimalli olarak iki sütunda göstermek veya değişkenler arasına çift yönlü ok (A <-> B) koymak', isCorrect: true },
            { key: 'B', text: 'İhtimallerden birini rastgele doğru kabul edip tabloyu silmek', isCorrect: false },
            { key: 'C', text: 'Tüm soruyu çözmeden boş bırakmak', isCorrect: false },
            { key: 'D', text: 'Yalnızca şıkları deneyerek geriye doğru gitmek', isCorrect: false },
            { key: 'E', text: 'Öncülleri sırasıyla tekrar tekrar okumak', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Olasılıkları net biçimde çift tablo veya oklarla ayırmak kesin yargı sorularını saniyeler içinde çözdürür.',
        },
        {
          question: '3. Bir binanın 1, 2, 3 ve 4. katlarında oturan K, L, M, N kişileri için "L, M’nin üstündeki bir kattadır" ve "N 1. kattadır" bilgisi veriliyorsa, hangisinin oturduğu kat KESİN olarak bilinmektedir?',
          options: [
            { key: 'A', text: 'K', isCorrect: false },
            { key: 'B', text: 'L', isCorrect: false },
            { key: 'C', text: 'M', isCorrect: false },
            { key: 'D', text: 'N', isCorrect: true },
            { key: 'E', text: 'Hiçbiri', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. N’nin 1. katta oturduğu doğrudan ve kesin olarak belirtilmiştir.',
        },
        {
          question: '4. Sözel mantık tablosu kurgulanırken tablonun ana başlığı (iskeleti) olarak aşağıdakilerden hangisinin seçilmesi çözümü en çok kolaylaştırır?',
          options: [
            { key: 'A', text: 'Sabit, değişmeyen ve sıralı olan unsurların (Günler, Aylar, Kat numaraları, 1-2-3-4-5 sıraları)', isCorrect: true },
            { key: 'B', text: 'En çok hareket eden ve belirsiz olan kişi isimlerinin', isCorrect: false },
            { key: 'C', text: 'Metindeki en son cümlenin', isCorrect: false },
            { key: 'D', text: 'Yalnızca sesli harfle başlayan kelimelerin', isCorrect: false },
            { key: 'E', text: 'Seçeneklerdeki ilk harflerin', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Günler, katlar ve sıra numaraları gibi sabit yapılar tablonun omurgasını oluşturmalıdır.',
        },
        {
          question: '5. "A ve B aynı gün nöbet tutmamaktadır" öncülü tabloya aktarılırken hangi mantıksal gösterim kullanılmalıdır?',
          options: [
            { key: 'A', text: '$A = B$', isCorrect: false },
            { key: 'B', text: '$A \\neq B$ (Aynı sütuna yazılamazlar)', isCorrect: true },
            { key: 'C', text: '$[A][B]$ bloku', isCorrect: false },
            { key: 'D', text: '$A \\rightarrow B$', isCorrect: false },
            { key: 'E', text: '$A + B = 1$', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Aynı gün olmama şartı $A \\neq B$ olarak kodlanır ve aynı gün sütununa yerleşmeleri engellenir.',
        },
      ],
    };
  };
