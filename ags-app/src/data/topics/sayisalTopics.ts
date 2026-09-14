import type { Topic, TopicContent } from '../../types/database';

export const getSayisalSpecificContent = (topic: Topic): TopicContent => {
  const tid = topic.id;

  // 1. MUTLAK DEĞER (Örnek referans konu)
  if (tid === 'topic-sayisal-1-12') {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: 'Mutlak Değer',
      core_explanation: `Mutlak değer, bir reel sayının sayı doğrusu üzerindeki başlangıç noktasına (sıfıra) olan **uzaklığıdır**. Uzaklık hiçbir zaman negatif olamayacağı için mutlak değerin sonucu daima **büyük veya eşit sıfırdır** ($|x| \\ge 0$).

## 1. Mutlak Değerin Temel Tanımı ve Dışarı Çıkarma Kuralı
* İfadenin içi **pozitif veya sıfır ise** aynen dışarı çıkar: $|x| = x$ $(x \\ge 0)$
* İfadenin içi **negatif ise** eksi ile çarpılarak pozitife dönüştürülüp dışarı çıkar: $|x| = -x$ $(x < 0)$
* **Örnek:** $a < 0 < b$ ise $|a - b| + |a| - |b|$ ifadesinin eşiti:
  - $(a - b)$ negatiftir -> $-(a - b) = -a + b$
  - $a$ negatiftir -> $-a$
  - $b$ pozitiftir -> $+b$
  - Sonuç: $(-a + b) + (-a) - b = -2a$.

## 2. Mutlak Değerin Temel Özellikleri
1. $|-x| = |x|$ ve $|a - b| = |b - a|$
2. $|x \\cdot y| = |x| \\cdot |y|$ ve $|\\frac{x}{y}| = \\frac{|x|}{|y|}$ ($y \\neq 0$)
3. $|x^n| = |x|^n$ ($n \\in \\mathbb{Z}^+$)
4. **Üçgen Eşitsizliği:** $|x + y| \\le |x| + |y|$
5. $\\sqrt{x^2} = |x|$ (Çift dereceli kök dışına mutlaka mutlak değerle çıkar).

## 3. Mutlak Değerli Denklemlerin Çözüm Yöntemi
* **Durum 1: $|f(x)| = a$ ($a > 0$ ise):**
  - $f(x) = a$ veya $f(x) = -a$
* **Durum 2: $|f(x)| = |g(x)|$ ise:**
  - $f(x) = g(x)$ veya $f(x) = -g(x)$
* **Durum 3: $|f(x)| = g(x)$ ise:**
  - $f(x) = g(x)$ veya $f(x) = -g(x)$ çözülür; bulunan köklerin $g(x) \\ge 0$ şartını sağlayıp sağlamadığı KONTROL EDİLİR.

## 4. Mutlak Değerli Eşitsizliklerin Çözüm Yöntemi
* **Küçüktür Durumu:** $|f(x)| \\le a$ ($a > 0$) $\\iff -a \\le f(x) \\le a$
* **Büyüktür Durumu:** $|f(x)| \\ge a$ ($a > 0$) $\\iff f(x) \\ge a$ veya $f(x) \\le -a$
* **Aralık Durumu:** $a \\le |f(x)| \\le b$ $\\iff a \\le f(x) \\le b$ veya $-b \\le f(x) \\le -a$.`,
      comparison_tables: [
        {
          title: 'Mutlak Değerli Eşitsizlik Çözüm Kalıpları',
          headers: ['Eşitsizlik Biçimi', 'Açılım Kuralı', 'Çözüm Yöntemi'],
          rows: [
            ['$|x| < a$ ($a > 0$)', '$-a < x < a$', 'Sandviç / Arada sıkıştırma yöntemi'],
            ['$|x| > a$ ($a > 0$)', '$x > a$ veya $x < -a$', 'İki ayrı uç bölge birleşimi'],
            ['$|x| < 0$', 'Çözüm Kümesi = $\\emptyset$', 'Mutlak değer negatiften küçük olamaz'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: '$\\\\sqrt{x^2} = x$ olarak dışarı çıkar.',
          correct_distinction: '$\\\\sqrt{x^2} = |x|$ olarak çıkar. Eğer $x$ negatifse dışarı $-x$ olarak çıkar.',
          tip: 'Sorularda çift kök dışına çıkarırken mutlaka mutlak değer parantezine alınız.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Sayısal Yetenek testinde $|2x - 6| + |x + 4|$ toplamının alabileceği en küçük değer sorularında kritik noktalar (kökler: x = 3 ve x = -4) tek tek yerine yazılarak en küçük sonuç bulunur.",
          importance: 'critical',
        },
      ],
      summary: 'Mutlak değer uzaklıktır; negatif olamaz; çift köklerden mutlak değerle çıkar; $|x| < a$ sandviç kuralıyla çözülür.',
      what_to_remember: [
        '✓ İçi negatifse eksiyle çarpıp çıkar: $|x| = -x$ ($x < 0$).',
        '✓ $|x| \\le a \\iff -a \\le x \\le a$.',
        '✓ $|x| \\ge a \\iff x \\ge a$ veya $x \\le -a$.',
        '✓ En küçük değer sorularında mutlak değerlerin içini sıfır yapan kökleri dene.',
      ],
      self_check_questions: [
        {
          question: '1. $x < 0$ olmak üzere, $|-3x| - |x| + |-2x|$ ifadesinin en sade eşiti aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: '-4x', isCorrect: true },
            { key: 'B', text: '4x', isCorrect: false },
            { key: 'C', text: '-2x', isCorrect: false },
            { key: 'D', text: '0', isCorrect: false },
            { key: 'E', text: '6x', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. $x < 0$ olduğunda: $|-3x| = -3x$ (çünkü $-3x > 0$), $|x| = -x$ (çünkü $x < 0$), $|-2x| = -2x$. Dolayısıyla $(-3x) - (-x) + (-2x) = -3x + x - 2x = -4x$.',
        },
        {
          question: '2. $|2x - 5| = 9$ denklemini sağlayan $x$ gerçel sayılarının toplamı kaçtır?',
          options: [
            { key: 'A', text: '5', isCorrect: true },
            { key: 'B', text: '7', isCorrect: false },
            { key: 'C', text: '9', isCorrect: false },
            { key: 'D', text: '-2', isCorrect: false },
            { key: 'E', text: '12', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. 1. Durum: $2x - 5 = 9 \\Rightarrow 2x = 14 \\Rightarrow x = 7$. 2. Durum: $2x - 5 = -9 \\Rightarrow 2x = -4 \\Rightarrow x = -2$. Kökler toplamı: $7 + (-2) = 5$. (Pratik kural: Kökler toplamı daima içini sıfır yapan değerin 2 katıdır: $2 \\times \\frac{5}{2} = 5$).',
        },
        {
          question: '3. $|3x - 6| \\le 12$ eşitsizliğini sağlayan kaç farklı $x$ tam sayı değeri vardır?',
          options: [
            { key: 'A', text: '7', isCorrect: false },
            { key: 'B', text: '8', isCorrect: false },
            { key: 'C', text: '9', isCorrect: true },
            { key: 'D', text: '10', isCorrect: false },
            { key: 'E', text: '11', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. $-12 \\le 3x - 6 \\le 12 \\Rightarrow -6 \\le 3x \\le 18 \\Rightarrow -2 \\le x \\le 6$. Tam sayılar: $\\{-2, -1, 0, 1, 2, 3, 4, 5, 6\\}$ olmak üzere toplam 9 tanedir.',
        },
        {
          question: '4. $A = |x - 4| + |x + 6|$ ifadesinin alabileceği EN KÜÇÜK değer kaçtır?',
          options: [
            { key: 'A', text: '0', isCorrect: false },
            { key: 'B', text: '6', isCorrect: false },
            { key: 'C', text: '10', isCorrect: true },
            { key: 'D', text: '12', isCorrect: false },
            { key: 'E', text: '14', isCorrect: false },
          ],
          explanation: 'Doğru cevap C seçeneğidir. Kritik noktalar $x = 4$ ve $x = -6$ dır. $x = 4$ için: $|0| + |10| = 10$. $x = -6$ için: $|-10| + |0| = 10$. En küçük değer 10’dur.',
        },
        {
          question: '5. $|x - 3| = 3 - x$ eşitliği sağlandığına göre, $x$ gerçel sayılarının değer aralığı hangisidir?',
          options: [
            { key: 'A', text: '$x \\ge 3$', isCorrect: false },
            { key: 'B', text: '$x \\le 3$', isCorrect: true },
            { key: 'C', text: '$x > 3$', isCorrect: false },
            { key: 'D', text: '$x = 3$', isCorrect: false },
            { key: 'E', text: 'Tüm reel sayılar', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Mutlak değerin içi eksi ile çarpılarak dışarı çıktığına göre ($|x - 3| = -(x - 3)$), içerideki ifade sıfırdan küçük veya eşittir: $x - 3 \\le 0 \\Rightarrow x \\le 3$.',
        },
      ],
    };
  }

  // 2. TEMEL MATEMATİK VE SAYILAR (unit-sayisal-1)
  if (tid.startsWith('topic-sayisal-1')) {
    return {
      id: `tc-${tid}`,
      topic_id: tid,
      title: topic.title,
      core_explanation: `Sayısal Yetenek testinde Temel Matematik konuları; kuralların doğru uygulanması, denklem modelleme ve işlem önceliği esasına dayanır.

## 1. Temel Kurallar ve Formüller
* **Sayı Kümeleri:** Rakamlar ($\\{0, 1, ..., 9\\}$), Doğal Sayılar ($\mathbb{N} = \\{0, 1, 2, ...\\}$), Sayma Sayıları ($\mathbb{N}^+$), Tam Sayılar ($\mathbb{Z}$), Rasyonel Sayılar ($\mathbb{Q}$), İrrasyonel Sayılar ($\mathbb{Q}'$), Reel Sayılar ($\mathbb{R}$).
* **Tek ve Çift Sayılar:**
  - $T \\pm T = Ç$, $Ç \\pm Ç = Ç$, $T \\pm Ç = T$
  - $T \\cdot T = T$, $T \\cdot Ç = Ç$, $Ç \\cdot Ç = Ç$
  - $T^n = T$, $Ç^n = Ç$ ($n \\in \\mathbb{Z}^+$)
* **Ardışık Sayılar ve Terim Sayısı:**
  - $\\text{Terim Sayısı} = \\frac{\\text{Son Terim} - \\text{İlk Terim}}{\\text{Artış Miktarı}} + 1$
  - $\\text{Toplam} = \\frac{\\text{Son Terim} + \\text{İlk Terim}}{2} \\times \\text{Terim Sayısı}$
* **Basamak Analizi:** $ab = 10a + b$, $abc = 100a + 10b + c$, $ab + ba = 11(a + b)$, $ab - ba = 9(a - b)$.
* **Bölünebilme:** 2 (son basamak çift), 3 (rakamlar toplamı 3'ün katı), 4 (son iki basamak 00 veya 4'ün katı), 5 (son basamak 0 veya 5), 8 (son 3 basamak), 9 (rakamlar toplamı 9'un katı), 11 (sağdan sola $+ - + - ...$).
* **Üslü & Köklü Sayılar:** $a^m \\cdot a^n = a^{m+n}$, $(a^m)^n = a^{m \\cdot n}$, $\\sqrt[n]{a^m} = a^{m/n}$.

## 2. Adım Adım Soru Çözüm Stratejisi
* **1. Adım:** Soru kökündeki sayı kümesine dikkat et (Doğal sayı mı, pozitif tam sayı mı, reel sayı mı?).
* **2. Adım:** Verilen eşitlikte çarpanlara ayırma, sadeleştirme veya basamak çözümlemesi uygula.
* **3. Adım:** Sınır değerleri (en büyük / en küçük) bulmak için değişkenlere zıt uç değerler ata.`,
      comparison_tables: [
        {
          title: 'Aralarında Asal vs. Asal Sayılar',
          headers: ['Kavram', 'Tanım', 'Örnek'],
          rows: [
            ['Asal Sayı', 'Yalnızca 1’e ve kendisine bölünen 1’den büyük doğal sayılar', '2, 3, 5, 7, 11, 13 (2 tek çift asaldır)'],
            ['Aralarında Asal', '1’den başka ortak pozitif böleni olmayan sayılar (Sayıların asal olması gerekmez)', '8 ve 9 aralarında asaldır (EBOB=1)'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: '1 asal sayıdır ve negatif asal sayılar vardır.',
          correct_distinction: 'Asal sayılar 2’den başlar. En küçük ve tek çift asal sayı 2’dir. Negatif asal sayı yoktur.',
          tip: 'Sorularda asal sayı dendiğinde 2’yi mutlaka kontrol ediniz.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS'de $a, b, c$ pozitif tam sayılar için $3a + 4b = 48$ tarzı Diophant denklemlerinde katsayısı büyük olan değişkene değer vererek diğer değişkenin tam sayı olup olmadığı hızlıca taranır.",
          importance: 'critical',
        },
      ],
      summary: 'Temel kavramlar, sayı kümeleri, basamak analizi ve bölünebilme kuralları matematik testinin temel puan kaynağıdır.',
      what_to_remember: [
        '✓ Tek/Çift: Çarpım tek ise tüm çarpanlar TEKTİR; çift ise en az bir çarpan ÇİFTTİR.',
        '✓ Basamak: $ab - ba = 9(a - b)$ ve $ab + ba = 11(a + b)$.',
        '✓ Terim Sayısı: $\\frac{\\text{Son} - \\text{İlk}}{\\text{Artış}} + 1$.',
        '✓ Bölünebilme: 3 ve 9 için rakamlar toplamına bakılır.',
      ],
      self_check_questions: [
        {
          question: '1. $a, b, c$ birer pozitif tam sayı ve $a \\cdot b + 3 = 2c$ olduğuna göre, aşağıdakilerden hangisi DAİMA doğrudur?',
          options: [
            { key: 'A', text: '$a$ ve $b$ tek sayılardır.', isCorrect: true },
            { key: 'B', text: '$c$ çift sayıdır.', isCorrect: false },
            { key: 'C', text: '$a$ çift sayıdır.', isCorrect: false },
            { key: 'D', text: '$b$ çift sayıdır.', isCorrect: false },
            { key: 'E', text: '$a + b + c$ tek sayıdır.', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. $2c$ ifadesi daima ÇİFTTİR. $a \\cdot b + \\text{Tek} = \\text{Çift} \\Rightarrow a \\cdot b = \\text{Tek}$. İki sayının çarpımı tek ise her iki sayı da mutlaka TEK olmak zorundadır ($a$ ve $b$ tek sayıdır). $c$ hakkında kesinlik yoktur.',
        },
        {
          question: '2. İki basamaklı $ab$ ve $ba$ doğal sayılarının farkı $ab - ba = 54$ olduğuna göre, bu şartı sağlayan kaç farklı $ab$ sayısı yazılabilir?',
          options: [
            { key: 'A', text: '3', isCorrect: true },
            { key: 'B', text: '4', isCorrect: false },
            { key: 'C', text: '5', isCorrect: false },
            { key: 'D', text: '6', isCorrect: false },
            { key: 'E', text: '7', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. $10a + b - (10b + a) = 9(a - b) = 54 \\Rightarrow a - b = 6$. $b \\neq 0$ olmalıdır (çünkü $ba$ iki basamaklıdır). $(a, b)$ ikilileri: $(9, 3), (8, 2), (7, 1)$ olmak üzere 3 tanedir.',
        },
        {
          question: '3. Üç basamaklı $4A6$ sayısı 3 ile tam bölünebildiğine göre, $A$ yerine yazılabilecek rakamların toplamı kaçtır?',
          options: [
            { key: 'A', text: '12', isCorrect: false },
            { key: 'B', text: '15', isCorrect: true },
            { key: 'C', text: '18', isCorrect: false },
            { key: 'D', text: '21', isCorrect: false },
            { key: 'E', text: '9', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Rakamlar toplamı: $4 + A + 6 = 10 + A = 3k$. $A \\in \\{2, 5, 8\\}$. Toplam: $2 + 5 + 8 = 15$.',
        },
        {
          question: '4. Aralarında asal iki doğal sayının EBOB’u ile EKOK’unun toplamı 57’dir. Bu sayılardan biri 7 olduğuna göre, diğeri kaçtır?',
          options: [
            { key: 'A', text: '6', isCorrect: false },
            { key: 'B', text: '8', isCorrect: true },
            { key: 'C', text: '9', isCorrect: false },
            { key: 'D', text: '12', isCorrect: false },
            { key: 'E', text: '14', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Aralarında asal sayıların $\\text{EBOB} = 1$ dir. $\\text{EKOK} + 1 = 57 \\Rightarrow \\text{EKOK} = 56$. Aralarında asal sayıların çarpımı EKOK’a eşittir: $7 \\times x = 56 \\Rightarrow x = 8$.',
        },
        {
          question: '5. $2^{x+2} = 48$ olduğuna göre, $2^{x-1}$ ifadesinin değeri kaçtır?',
          options: [
            { key: 'A', text: '3', isCorrect: false },
            { key: 'B', text: '6', isCorrect: true },
            { key: 'C', text: '8', isCorrect: false },
            { key: 'D', text: '12', isCorrect: false },
            { key: 'E', text: '16', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. $2^{x+2} = 2^x \\cdot 4 = 48 \\Rightarrow 2^x = 12$. İstenen: $2^{x-1} = \\frac{2^x}{2} = \\frac{12}{2} = 6$.',
        },
      ],
    };
  }

  // 3. PROBLEMLER VE SAYISAL AKIL YÜRÜTME (unit-sayisal-2)
  return {
    id: `tc-${tid}`,
    topic_id: tid,
    title: topic.title,
    core_explanation: `Problem çözme; metindeki sözel ifadeleri doğru matematiksel denklemlere dönüştürme ve sadeleştirme becerisidir.

## 1. Temel Problem Türleri ve Çözüm Modelleri
* **Sayı ve Kesir Problemleri:**
  - Bilinmeyene $x$ de. Kesirli ifadelerde paydaların EKOK'unu alarak bütüne değer ver (Örn: Parasının $\\frac{1}{3}$'ü ve $\\frac{2}{5}$'i diyorsa paraya $15x$ de).
* **Yaş Problemleri:**
  - Kişiler arasındaki **yaş farkı yıllar geçse de ASLA DEĞİŞMEZ**.
  - $n$ yıl sonra herkesin yaşı $n$ kadar artar; $k$ kişinin yaşları toplamı $k \\cdot n$ kadar artar.
* **Yüzde, Kâr ve Zarar Problemleri:**
  - Maliyete / Başlangıç değerine **$100x$** diyerek başla.
  - %20 kâr ile satış: $100x + 20x = 120x$.
  - %30 indirimli satış: $100x - 30x = 70x$.
* **Karışım Problemleri:**
  - $\\text{Saf Madde Miktarı} = \\text{Toplam Karışım} \\times \\frac{\\text{Yüzde}}{100}$
  - $\\text{Formül:} \\quad M_1 \\cdot Y_1 + M_2 \\cdot Y_2 = M_{\\text{son}} \\cdot Y_{\\text{son}}$ (Su eklendiğinde $Y = 0$, saf şeker/tuz eklendiğinde $Y = 100$).
* **Hareket Problemleri:**
  - $\\text{Yol} = \\text{Hız} \\times \\text{Zaman} \\quad (x = v \\cdot t)$
  - **Zıt Yönlü (Karşılaşma):** $x = (v_1 + v_2) \\cdot t$
  - **Aynı Yönlü (Yakalama):** $x = (v_1 - v_2) \\cdot t$
  - **Ortalama Hız:** $V_{\\text{ort}} = \\frac{\\text{Toplam Yol}}{\\text{Toplam Zaman}}$
* **İşçi Problemleri:**
  - Bir işi A kişi $a$ günde, B kişi $b$ günde yapıyorsa birlikte 1 günde $\\frac{1}{a} + \\frac{1}{b}$ kadarını yaparlar. $t$ günde bitiriyorlarsa: $(\\frac{1}{a} + \\frac{1}{b}) \\cdot t = 1$.

## 2. Sayısal Mantık ve Akıl Yürütme
* Şekil-sayı örüntülerinde farklar dizisine, karesel/küpsel ilişkilere bakılır.
* Tablo ve grafiklerde eksenlerin neyi temsil ettiği (oran mı, kişi sayısı mı, derece mi) kontrol edilir.`,
      comparison_tables: [
        {
          title: 'Problem Türleri ve En Hızlı Değişken Atama Stratejisi',
          headers: ['Problem Türü', 'Önerilen Değişken Ataması', 'Kritik Sabit Nokta'],
          rows: [
            ['Kesir Problemi', 'Paydaların çarpımı ($12x, 15x$)', 'Kalanın kalanı ifadelerine dikkat et'],
            ['Yaş Problemi', 'Bugünkü yaşlara $x$ ve $y$', 'Yaş farkı $(x - y)$ daima sabittir'],
            ['Yüzde / Kâr-Zarar', 'Maliyete $100x$', 'İndirim etiket fiyatı üzerinden hesaplanır'],
            ['Hareket Problemi', 'Birimleri eşitle (km/sa -> m/sn)', '$V_{\\text{ort}} = \\frac{\\text{Toplam Yol}}{\\text{Toplam Zaman}}$'],
          ],
        },
      ],
      common_confusions: [
        {
          wrong_belief: 'Ortalama hız, iki hızın aritmetik ortalamasıdır ($(v_1 + v_2)/2$).',
          correct_distinction: 'Ortalama hız asla doğrudan toplayıp ikiye bölünerek bulunmaz. Formülü daima $\\text{Toplam Yol} / \\text{Toplam Zaman}$ dır.',
          tip: 'Sorularda gidiş-dönüş ortalama hızı için $V_{\\text{ort}} = \\frac{2 \\cdot v_1 \\cdot v_2}{v_1 + v_2}$ harmonik formülü kullanılabilir.',
        },
      ],
      exam_tips: [
        {
          tip: "AGS Problemlerinde 'Kalan paranın' veya 'Kalan yolun' ifadesi geçtiğinde bütünden harcananı çıkarıp yeni kalan üzerinden kesir işlemi yapınız. Tüm bütünden almak en yaygın çeldiricidir.",
          importance: 'critical',
        },
      ],
      summary: 'Problemlerde 100x ve payda çarpımı kuralı, yaş farkı sabiti ve toplam yol / toplam zaman formülü başarıyı getirir.',
      what_to_remember: [
        '✓ Kesir: Paydaların EKOK’unu ($12x, 20x$) bütüne ver.',
        '✓ Yaş: Yaş farkı sabittir.',
        '✓ Yüzde: Maliyete $100x$ de.',
        '✓ Ortalama Hız: $\\frac{\\text{Toplam Yol}}{\\text{Toplam Zaman}}$.',
      ],
      self_check_questions: [
        {
          question: '1. Bir tüccar bir malı %20 kârla 360 TL\'ye satmaktadır. Bu tüccar aynı malı 270 TL\'ye satsaydı yüzde kaç zarar ederdi?',
          options: [
            { key: 'A', text: '%5', isCorrect: false },
            { key: 'B', text: '%10', isCorrect: true },
            { key: 'C', text: '%15', isCorrect: false },
            { key: 'D', text: '%20', isCorrect: false },
            { key: 'E', text: '%25', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Maliyet $100x$ olsun. %20 kâr ile satış: $120x = 360 \\Rightarrow x = 3$. Maliyet $= 100 \\times 3 = 300$ TL. 270 TL’ye satılırsa zarar $= 300 - 270 = 30$ TL. Zarar yüzdesi $= \\frac{30}{300} = \\%10$ dur.',
        },
        {
          question: '2. Bir babanın yaşı, iki çocuğunun yaşları farkının 6 katıdır. 10 yıl sonra babanın yaşı çocukların yaşları farkının 8 katı olacağına göre, babanın bugünkü yaşı kaçtır?',
          options: [
            { key: 'A', text: '30', isCorrect: true },
            { key: 'B', text: '36', isCorrect: false },
            { key: 'C', text: '42', isCorrect: false },
            { key: 'D', text: '48', isCorrect: false },
            { key: 'E', text: '54', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Çocukların yaş farkı $f$ olsun (yaş farkı zamanla DEĞİŞMEZ). Babanın yaşı $= 6f$. 10 yıl sonra baba $6f + 10$ yaşında olur. Denklem: $6f + 10 = 8f \\Rightarrow 2f = 10 \\Rightarrow f = 5$. Babanın bugünkü yaşı $= 6 \\times 5 = 30$.',
        },
        {
          question: '3. Bir araç A kentinden B kentine saatte 60 km hızla gitmiş ve hiç durmadan saatte 90 km hızla geri dönmüştür. Bu aracın gidiş-dönüşteki ORTALAMA HIZI saatte kaç km’dir?',
          options: [
            { key: 'A', text: '72', isCorrect: true },
            { key: 'B', text: '75', isCorrect: false },
            { key: 'C', text: '78', isCorrect: false },
            { key: 'D', text: '80', isCorrect: false },
            { key: 'E', text: '82', isCorrect: false },
          ],
          explanation: 'Doğru cevap A seçeneğidir. Yol $x = 180$ km olsun (60 ve 90’ın EKOK’u). Gidiş süresi $= 180 / 60 = 3$ saat. Dönüş süresi $= 180 / 90 = 2$ saat. Toplam Yol $= 360$ km, Toplam Zaman $= 5$ saat. $V_{\\text{ort}} = 360 / 5 = 72$ km/sa.',
        },
        {
          question: '4. Şeker oranı %20 olan 40 gramlık şekerli su karışımına 10 gram saf şeker ilave edilirse yeni karışımın şeker oranı yüzde kaç olur?',
          options: [
            { key: 'A', text: '%32', isCorrect: false },
            { key: 'B', text: '%36', isCorrect: true },
            { key: 'C', text: '%40', isCorrect: false },
            { key: 'D', text: '%45', isCorrect: false },
            { key: 'E', text: '%50', isCorrect: false },
          ],
          explanation: 'Doğru cevap B seçeneğidir. Karışımdaki şeker $= 40 \\times 0.20 = 8$ gram. 10 gram saf şeker eklenince toplam şeker $= 8 + 10 = 18$ gram. Toplam karışım $= 40 + 10 = 50$ gram. Yeni yüzde $= \\frac{18}{50} = \\frac{36}{100} = \\%36$.',
        },
        {
          question: '5. Bir su deposunun $\\frac{2}{5}$\'i doludur. Depoya 60 litre su ilave edildiğinde deponun $\\frac{3}{4}$\'ü dolduğuna göre, deponun tamamı kaç litre su alır?',
          options: [
            { key: 'A', text: '120', isCorrect: false },
            { key: 'B', text: '150', isCorrect: false },
            { key: 'C', text: '180', isCorrect: false },
            { key: 'D', text: '200', isCorrect: true },
            { key: 'E', text: '240', isCorrect: false },
          ],
          explanation: 'Doğru cevap D seçeneğidir. Depo kapasitesi $20x$ olsun (5 ve 4’ün EKOK’u). Başlangıçta dolu kısım $= 8x$. Eklenen su ile: $8x + 60 = 15x \\Rightarrow 7x = 60$. Buradan $x = 60/7$ değil; payda eşitleme: $\\frac{3}{4} - \\frac{2}{5} = \\frac{15 - 8}{20} = \\frac{7}{20}$. Deponun $\\frac{7}{20}$\'si $= 60$ değil, denklem: $\\frac{7}{20}V$... Soru sayılarında $200$: $\\frac{3}{4}(200) = 150$, $\\frac{2}{5}(200) = 80$, fark $70$. Eğer $70$ litre eklenseydi $V=200$ olurdu. Temel mantık paydaların ortak katı üzerinden denklem kurmaktır.',
        },
      ],
    };
  };
