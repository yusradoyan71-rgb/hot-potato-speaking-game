import type { Topic, TopicContent } from '../../types/database';

export const getMevzuatSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // 1. 7528 SAYILI ÖĞRETMENLİK MESLEĞİ KANUNU (unit-mevzuat-1)
  if (tid.startsWith('topic-mevzuat-1-1') || tid.startsWith('topic-mevzuat-1-2') || tid.startsWith('topic-mevzuat-1-3') || tid.startsWith('topic-mevzuat-1-4') || tid.startsWith('topic-mevzuat-1-5') || tid.startsWith('topic-mevzuat-1-6') || tid.startsWith('topic-mevzuat-1-7') || tid.startsWith('topic-mevzuat-1-8')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `7528 Sayılı Öğretmenlik Mesleği Kanunu (ÖMK), öğretmenlerin mesleğe kabulünü, Millî Eğitim Akademisi hazırlık eğitimini, kariyer basamaklarını ve hak-yükümlülüklerini düzenleyen temel yasadır.

## 1. Millî Eğitim Akademisi ve Hazırlık Eğitimi Esasları
* **Giriş:** Öğretmen yetiştiren lisans programları veya denklik belgesi olan mezunlar, **Akademi Giriş Sınavı (AGS)** puan üstünlüğüyle başvuru yapar.
* **Hazırlık Eğitimi Süresi:** **4 dönemdir** (Bakanlıkça gerekli görülen hallerde 3 döneme indirilebilir).
* **Özlük Hakkı:** Adaylara hazırlık eğitimi boyunca her ay **net asgari ücret** tutarında ödeme yapılır.
* **Başarı Ölçütleri:**
  - Her bir dersin teorik ve uygulamalı sınavından en az **60 puan** almak.
  - Dönem sonu genel başarı puanının en az **70 puan** olması şarttır.
* **İlişik Kesme Durumları:**
  - Kabul şartlarını taşımadığı sonradan anlaşılanlar.
  - Devamsızlık sınırını aşanlar (özürsüz toplam sürenin %5'i, özürlü %10'u).
  - Hazırlık eğitiminde başarısız olanlar.
  - Disiplin cezası alıp meslekten çıkarma gerektiren fiil işleyenler.

## 2. Sözleşmeli Öğretmenlik ve Kadroya Geçiş (3+1 Modeli)
* Hazırlık eğitimini başarıyla bitirenler başarı sıralamasına göre **Sözleşmeli Öğretmen** olarak atanır.
* Sözleşmeli öğretmen olarak **3 yıl fiilen görev yapanlar**, olumlu performans değerlendirmesiyle talepleri halinde **öğretmen kadrolarına (memurluğa)** atanır.
* Kadroya geçen öğretmenler, atandıkları yerde **en az 1 yıl daha** görev yapmak zorundadır (Toplam 3 + 1 = 4 yıl yer değiştirme kısıtı).

## 3. Kariyer Basamakları
* **Öğretmen:** Hazırlık eğitimini tamamlayıp atanan öğretmenler.
* **Uzman Öğretmen:** Öğretmenlikte en az **10 yıl fiili hizmeti** bulunan, Uzman Öğretmenlik Eğitim Programı'nı tamamlayan ve kademe ilerlemesinin durdurulması cezası bulunmayanlar.
* **Başöğretmen:** Uzman öğretmenlikte en az **10 yıl fiili hizmeti** bulunan, Başöğretmenlik Eğitim Programı'nı tamamlayan ve kademe ilerlemesinin durdurulması cezası bulunmayanlar.

## 4. Eğitim Çalışanlarına Şiddete Karşı Koruma (Madde 34)
* Öğretmenlere ve eğitim çalışanlarına karşı görevleri sebebiyle işlenen kasten yaralama, tehdit, hakaret ve görevi yaptırmamak için direnme suçlarında:
  - Türk Ceza Kanunu'nda öngörülen **cezalar YARI ORANINDA (%50) ARTIRILIR**.
  - Hapis cezasının ertelenmesi (HAGB veya tecil) hükümleri uygulanmaz.`,
      comparison_tables: [
        {
          title: '7528 Sayılı Kanun Disiplin Cezaları ve Yetkili Merciler',
          headers: ['Disiplin Cezası Türü', 'Cezayı Vermeye Yetkili Merci'],
          rows: [
            ['Uyarma ve Kınama', 'Disiplin Amiri (Okul Müdürü / İlçe MEM)'],
            ['Aylıktan Kesme', 'Disiplin Kurulu Kararından Sonra Atamaya Yetkili Amir'],
            ['Kademe İlerlemesinin Durdurulması', 'İl Disiplin Kurulu Kararı Sonrası Vali / Bakanlık Disiplin Kurulu'],
            ['Meslekten Çıkarma', 'Yüksek Disiplin Kurulu Kararı'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Akademi hazırlık eğitimini bitiren aday doğrudan 657 kadrolu memur olarak başlar.',
          correct_distinction: 'Doğrudan kadrolu değil; 3 yıl SÖZLEŞMELİ öğretmen olarak görev yapar, ardından memur kadrosuna geçer (3+1 modeli).',
          tip: 'Soruda ilk atama statüsü sorulduğunda Sözleşmeli Öğretmenlik seçilmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Mevzuat testinde 7528 sayılı Kanun'un hazırlık eğitimindeki ders barajı (60), genel ortalama barajı (70), şiddet suçlarında cezanın %50 artırılması ve 10 yıllık uzmanlık süreleri en garanti soru kalıplarıdır.",
          importance: 'critical',
        },
      ],
      summary: '7528 Sayılı ÖMK; Milli Eğitim Akademisi 4 dönem hazırlık eğitimini, 3+1 sözleşmeli modeli, 10 yıllık kariyer basamaklarını ve öğretmeni koruyan cezai yaptırımları düzenler.',
      what_to_remember: [
        '✓ Hazırlık Eğitimi: 4 dönem, burs: net asgari ücret, ders barajı 60, genel baraj 70.',
        '✓ Atama: 3 yıl sözleşmeli + 1 yıl kadrolu görev süresi şartı (3+1).',
        '✓ Uzman Öğretmen: 10 yıl | Başöğretmen: Uzmanlıkta 10 yıl.',
        '✓ Şiddet Suçları: Cezalar %50 artırılır, hapis cezası ertelenmez.',
      ],
      self_check_questions: [
        {
          question: '1. 7528 Sayılı Öğretmenlik Mesleği Kanunu’na göre, Millî Eğitim Akademisi hazırlık eğitimine kabul edilen bir adayın eğitim süresi kural olarak kaç dönemdir?',
          options: [
            { key: 'A', text: '1 dönem', isCorrect: false },
            { key: 'B', text: '2 dönem', isCorrect: false },
            { key: 'C', text: '3 dönem', isCorrect: false },
            { key: 'D', text: '4 dönem', isCorrect: true },
            { key: 'E', text: '6 dönem', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. 7528 sayılı Kanun gereğince hazırlık eğitimi kural olarak 4 dönem sürer.',
        },
        {
          question: '2. 7528 Sayılı Kanun’a göre, öğretmenlikte "Başöğretmen" unvanına başvurabilmek için aranan temel hizmet süresi şartı hangisidir?',
          options: [
            { key: 'A', text: 'Öğretmenlikte toplam 5 yıl çalışmış olmak', isCorrect: false },
            { key: 'B', text: 'Uzman öğretmenlikte en az 10 yıl fiilen görev yapmış olmak', isCorrect: true },
            { key: 'C', text: 'Doçentlik unvanı almış olmak', isCorrect: false },
            { key: 'D', text: 'Yalnızca yazılı sınavdan 80 almak', isCorrect: false },
            { key: 'E', text: '20 yıl okul müdürlüğü yapmak', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Başöğretmenlik için Uzman Öğretmenlikte en az 10 yıl fiili hizmet şartı aranır.',
        },
        {
          question: '3. 7528 Sayılı ÖMK uyarınca Millî Eğitim Akademisi hazırlık eğitimine devam eden öğretmen adaylarına her ay ödenecek tutar ne kadardır?',
          options: [
            { key: 'A', text: 'Memur taban aylığı', isCorrect: false },
            { key: 'B', text: 'Net asgari ücret tutarı', isCorrect: true },
            { key: 'C', text: 'Brüt asgari ücretin yarısı', isCorrect: false },
            { key: 'D', text: 'Uzman öğretmen maaşı', isCorrect: false },
            { key: 'E', text: 'Öğrenci kredi ve burs miktarı', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Kanun gereğince hazırlık eğitimi süresince adaylara her ay net asgari ücret ödenir.',
        },
        {
          question: '4. 7528 Sayılı Kanun’da eğitim kurumlarında görev yapan öğretmen ve yöneticilere karşı işlenen tehdit, hakaret ve kasten yaralama fiillerine ilişkin getirilen cezai yaptırım hangisidir?',
          options: [
            { key: 'A', text: 'Verilecek cezaların yarı oranında (%50) artırılması ve hapis cezasının ertelenmemesi', isCorrect: true },
            { key: 'B', text: 'Sadece adli para cezası verilmesi', isCorrect: false },
            { key: 'C', text: 'Failin yalnızca okuldan uzaklaştırılması', isCorrect: false },
            { key: 'D', text: 'Cezanın 2 yıl süreyle ertelenmesi', isCorrect: false },
            { key: 'E', text: 'Kamu davası açılmayıp uzlaşmaya gidilmesi', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Kanunla eğitim çalışanlarına şiddete karşı cezalar %50 artırılmış ve hapis ertelenmesi engellenmiştir.',
        },
        {
          question: '5. Hazırlık eğitimini başarıyla bitirip atanan bir sözleşmeli öğretmen, memur kadrosuna geçtikten sonra atandığı ilde en az kaç yıl daha görev yapmak zorundadır?',
          options: [
            { key: 'A', text: '1 yıl', isCorrect: true },
            { key: 'B', text: '2 yıl', isCorrect: false },
            { key: 'C', text: '3 yıl', isCorrect: false },
            { key: 'D', text: '4 yıl', isCorrect: false },
            { key: 'E', text: '5 yıl', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. 3 yıl sözleşmeli + kadroya geçtikten sonra 1 yıl daha görev şartı vardır (3+1 modeli).',
        },
      ],
    };
  }

  // 2. ANAYASA, 657 SAYILI DMK VE 4483 SAYILI KANUN (unit-mevzuat-2)
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `Kamu hukuku ve eğitim mevzuatı; 1982 Anayasası, 657 Sayılı Devlet Memurları Kanunu ve 4483 Sayılı Memurların Yargılanması Kanunu çerçevesinde işler.

## 1. 1982 Anayasası'nda Eğitim ve Kamu Hizmeti İlkeleri
* **Madde 42 (Eğitim ve Öğrenim Hakkı ve Ödevi):**
  - Kimse eğitim ve öğrenim hakkından yoksun bırakılamaz.
  - İlköğretim kız ve erkek bütün vatandaşlar için **zorunlu** ve devlet okullarında **parasızdır**.
  - Eğitim ve öğretim, Atatürk ilkeleri ve inkılapları doğrultusunda, çağdaş bilim ve eğitim esaslarına göre yapılır.
  - Türkçeden başka hiçbir dil, eğitim ve öğretim kurumlarında Türk vatandaşlarına ana dilleri olarak okutulamaz ve öğretilemez (Yabancı dil öğretimi saklıdır).
* **Madde 129:** Memurlara **savunma hakkı tanınmadıkça** disiplin cezası verilemez. Disiplin kararları yargı denetimi dışına itilemez.

## 2. 657 Sayılı Devlet Memurları Kanunu
* **Temel İlkeler:** **Sınıflandırma**, **Kariyer**, **Liyakat**.
* **Memurların Yasakları:** Grev yasağı, Ticaret ve diğer kazanç getirici faaliyetlerde bulunma yasağı, Hediye alma ve menfaat sağlama yasağı, Gizli bilgileri açıklama yasağı, Siyasi partiye üye olma yasağı.
* **Disiplin Cezaları ve Nedenleri:**
  - **Uyarma:** Görevde kayıtsızlık, özürsüz göreve geç gelme.
  - **Kınama:** Devlete ait araçları özel işte kullanma, kusurlu davranma.
  - **Aylıktan Kesme:** Brüt aylıktan **1/30 ile 1/8** arasında kesinti yapılır (Özürsüz 1 veya 2 gün göreve gelmeme).
  - **Kademe İlerlemesinin Durdurulması:** Bulunulan kademede ilerlemenin **1 - 3 yıl** durdurulmasıdır (Özürsüz 3-9 gün göreve gelmeme, sarhoş gelme, siyasi faaliyette bulunma).
  - **Devlet Memurluğundan Çıkarma:** Bir daha memuriyete alınmamak üzere ilişiğin kesilmesidir (Özürsüz kesintisiz **10 gün** veya bir yılda toplam **20 gün** göreve gelmeme, terör örgütleriyle iltisak).
* **Zamanaşımı:** Fiilin işlendiğinin öğrenildiği tarihten itibaren **1 ay içinde** soruşturmaya başlanmazsa ve fiilin işlendiği tarihten itibaren **2 yıl içinde** disiplin cezası verilmezse ceza verme yetkisi zamanaşımına uğrar.

## 3. 4483 Sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Kanunu
* **Amacı:** Memurların görevleri sebebiyle işledikleri suçlarda adli yargılamadan önce idari soruşturma izni prosedürünü düzenlemektir.
* **Soruşturma İzni Vermeye Yetkili Merciler:**
  - İlçede görevli memurlar için: **Kaymakam**.
  - İlde ve merkez ilçede görevli memurlar için: **Vali**.
  - Bakanlık merkez teşkilatında görevliler için: **Bakan**.
* **Ön İnceleme Süresi:** İzin vermeye yetkili merci, suç iddiasını öğrendiğinde **30 gün** içinde karar vermek zorundadır. Bu süre zorunlu hallerde en fazla **15 gün** uzatılabilir (Toplam en çok 45 gün).
* **İtiraz Yolu ve Süresi:**
  - Soruşturma izni verilmesine veya verilmemesine karşı **10 gün** içinde itiraz edilebilir.
  - Kaymakam ve Vali kararlarına itiraz: **Bölge İdare Mahkemesi**ne yapılır.
  - Bakan kararlarına itiraz: **Danıştay İkinci Dairesi**ne yapılır.
  - İtirazlar en geç **3 ay içinde** kesin karara bağlanır.`,
      comparison_tables: [
        {
          title: '4483 Sayılı Kanun: Yetkili Merci ve İtiraz Mahkemeleri',
          headers: ['Kamu Görevlisinin Görev Yeri', 'Soruşturma İzni Veren Merci', 'İtiraz Edilecek Yargı Yeri'],
          rows: [
            ['İlçedeki Okul Müdürü / Öğretmen', 'KAYMAKAM', 'Bölge İdare Mahkemesi'],
            ['İldeki / Merkez İlçedeki Öğretmen', 'VALİ', 'Bölge İdare Mahkemesi'],
            ['Bakanlık Merkez Teşkilatı Görevlisi', 'MİLLÎ EĞİTİM BAKANI', 'Danıştay İkinci Dairesi'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'İlçede görevli bir öğretmene soruşturma iznini İlçe Milli Eğitim Müdürü verir.',
          correct_distinction: 'İlçe Milli Eğitim Müdürü soruşturma izni veremez. İlçedeki memurlar için izin vermeye yetkili tek mülki amir KAYMAKAMDIR.',
          tip: 'Sorularda soruşturma izni yetkilisi sorulduğunda ilçede Kaymakam, ilde Vali seçilmelidir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Mevzuat sınavında 4483 ön inceleme süresi (30 + 15 gün), itiraz süresi (10 gün) ve 657 kesintisiz 10 gün işe gelmemenin memuriyetten çıkarma sayılması en kritik sayısal yasal verilerdir.",
          importance: 'critical',
        },
      ],
      summary: '1982 Anayasası eğitim hakkı ve savunma güvencesini; 657 DMK disiplin cezaları ve zamanaşımını; 4483 ise ön inceleme ve yargılama izinlerini düzenler.',
      what_to_remember: [
        '✓ Anayasa Md 42: İlköğretim zorunlu ve parasızdır. Savunma hakkı tanınmadan ceza verilemez (Md 129).',
        '✓ 657 Disiplin: 1 ayda soruşturma başlar, 2 yılda ceza verilmezse zamanaşımı.',
        '✓ 657 Çıkarma: Özürsüz kesintisiz 10 gün işe gelmeme.',
        '✓ 4483 Ön İnceleme: 30 gün (+15 gün ek süre). İtiraz: 10 gün (Bölge İdare / Danıştay 2. Daire).',
        '✓ İzin Mercileri: İlçede Kaymakam, İlde Vali, Merkezde Bakan.',
      ],
      self_check_questions: [
        {
          question: '1. 4483 Sayılı Memurlar ve Diğer Kamu Görevlilerinin Yargılanması Hakkında Kanun’a göre, bir ilçede görev yapan öğretmenin görevi sebebiyle işlediği iddia edilen bir suç hakkında soruşturma izni vermeye yetkili merci hangisidir?',
          options: [
            { key: 'A', text: 'İlçe Millî Eğitim Müdürü', isCorrect: false },
            { key: 'B', text: 'Kaymakam', isCorrect: true },
            { key: 'C', text: 'Okul Müdürü', isCorrect: false },
            { key: 'D', text: 'Cumhuriyet Savcısı', isCorrect: false },
            { key: 'E', text: 'İl Disiplin Kurulu', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. 4483 sayılı Kanun uyarınca ilçedeki kamu görevlileri hakkında soruşturma iznini Kaymakam verir.',
        },
        {
          question: '2. 4483 Sayılı Kanun uyarınca, yetkili merciin soruşturma izni verilmesi veya verilmemesi yönündeki kararına karşı ilgililer kaç gün içinde itiraz edebilirler?',
          options: [
            { key: 'A', text: '7 gün', isCorrect: false },
            { key: 'B', text: '10 gün', isCorrect: true },
            { key: 'C', text: '15 gün', isCorrect: false },
            { key: 'D', text: '30 gün', isCorrect: false },
            { key: 'E', text: '60 gün', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Yetkili merciin kararına karşı tebliğden itibaren 10 gün içinde itiraz edilir.',
        },
        {
          question: '3. 657 Sayılı Devlet Memurları Kanunu’na göre, özürsüz ve kesintisiz olarak 10 gün göreve gelmeyen bir devlet memuru hakkında hangi işlem tesis edilir?',
          options: [
            { key: 'A', text: 'Aylıktan kesme cezası verilir.', isCorrect: false },
            { key: 'B', text: 'Kademe ilerlemesi 1 yıl durdurulur.', isCorrect: false },
            { key: 'C', text: 'Çekilmiş (istifa etmiş) sayılarak memuriyetine son verilir.', isCorrect: true },
            { key: 'D', text: 'Yalnızca yazılı kınama cezası uygulanır.', isCorrect: false },
            { key: 'E', text: 'Başka bir ile resen tayin edilir.', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Özürsüz ve kesintisiz 10 gün göreve gelmeyen memur çekilmiş (müstafi) sayılır.',
        },
        {
          question: '4. 657 Sayılı Kanun’a göre, disiplin cezasını gerektiren bir fiilin işlendiği tarihten itibaren kaç yıl içinde ceza verilmezse ceza verme yetkisi ZAMANAŞIMINA uğrar?',
          options: [
            { key: 'A', text: '6 ay', isCorrect: false },
            { key: 'B', text: '1 yıl', isCorrect: false },
            { key: 'C', text: '2 yıl', isCorrect: true },
            { key: 'D', text: '3 yıl', isCorrect: false },
            { key: 'E', text: '5 yıl', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Fiilin işlendiği tarihten itibaren 2 yıl içinde ceza verilmezse zamanaşımına uğrar.',
        },
        {
          question: '5. 1982 Anayasası’nın 42. maddesi (Eğitim ve Öğrenim Hakkı) ile ilgili aşağıdakilerden hangisi YANLIŞTIR?',
          options: [
            { key: 'A', text: 'Kimse eğitim ve öğrenim hakkından yoksun bırakılamaz.', isCorrect: false },
            { key: 'B', text: 'İlköğretim kız ve erkek bütün vatandaşlar için zorunludur.', isCorrect: false },
            { key: 'C', text: 'Devlet okullarında ilköğretim parasızdır.', isCorrect: false },
            { key: 'D', text: 'Türkçeden başka hiçbir dil, eğitim ve öğretim kurumlarında Türk vatandaşlarına ana dilleri olarak okutulamaz ve öğretilemez.', isCorrect: false },
            { key: 'E', text: 'Üniversite eğitimi tüm vatandaşlar için zorunlu kılınmıştır.', isCorrect: true },
          ],
          explanation: 'Doğru cevap E seçeneğidir. Anayasa md. 42 uyarınca yalnızca İLKÖĞRETİM zorunludur; yükseköğretim zorunlu değildir.',
        },
      ],
    };
  };
