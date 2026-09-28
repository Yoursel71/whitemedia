export type ServiceDetail = {
  headline: string;
  promise: string;
  scope: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "sosyal-medya-yonetimi": {
    headline: "Takvimi değil, markanın hikâyesini yönetiriz.",
    promise:
      "Aynı şablonu farklı markalara uygulamayız. Markanın kimliğini, hedef kitlesini ve gerçek ihtiyacını anlayıp ona ait bir içerik sistemi kurarız.",
    scope: [
      { title: "Marka analizi", text: "Dili, hedefi, rakip alanını ve ulaşılması gereken kitleyi netleştiririz." },
      { title: "İçerik stratejisi", text: "Markaya özel konu başlıkları, seri formatlar ve aylık yayın planı oluştururuz." },
      { title: "Üretim ve yayın", text: "Metin, tasarım, fotoğraf ve videoyu tek görsel dilde üretip planlarız." },
      { title: "Raporlama", text: "Erişimden talebe uzanan sonuçları okuyup içerik yönünü geliştiririz." },
    ],
    faqs: [
      { question: "Her marka için aynı plan mı uygulanıyor?", answer: "Hayır. Dil, format, sıklık ve konu başlıkları markanın kimliğine, kitlesine ve önceliğine göre belirlenir." },
      { question: "Çekim ve tasarım dahil olabilir mi?", answer: "Evet. Fotoğraf, video, Reels ve grafik tasarım üretimini aynı kapsamda planlayabiliriz." },
    ],
    metaTitle: "Sosyal Medya Yönetimi Trabzon | White Media",
    metaDescription: "Trabzon ve Türkiye geneli için markaya özel sosyal medya stratejisi, içerik üretimi, yayın planı ve raporlama.",
  },
  "fotograf-video-produksiyon": {
    headline: "Görüntü güzel olsun diye değil, doğru şeyi anlatsın diye.",
    promise:
      "İlk saniyedeki kancadan son karedeki çağrıya kadar her sahneyi markanın ihtiyacına göre tasarlarız; çekim, kurgu, renk ve sesi tek hikâyede buluştururuz.",
    scope: [
      { title: "Konsept ve senaryo", text: "Amacı, açılış kancasını, mesajı ve sahne akışını belirleriz." },
      { title: "Ürün ve mekân çekimi", text: "Ürünün detayını ve mekânın atmosferini doğru ışık ve kadrajla kaydederiz." },
      { title: "Reels ve tanıtım filmi", text: "Kısa video ile kurumsal anlatımı platforma ve hedefe göre üretiriz." },
      { title: "Kurgu, renk ve ses", text: "Ham görüntüyü ritim, renk, müzik, ses ve hareketli metinlerle tamamlarız." },
    ],
    faqs: [
      { question: "Sadece video kurgu hizmeti alabilir miyim?", answer: "Evet. Uygun ham görüntüler için kurgu, renk, ses ve platform çıktısı hazırlayabiliriz." },
      { question: "Reels fikrini siz mi hazırlıyorsunuz?", answer: "Evet. Marka dili ve hedef netleşince fikir, kanca, metin ve sahne akışını oluşturabiliriz." },
    ],
    metaTitle: "Video Prodüksiyon ve Kurgu Trabzon | White Media",
    metaDescription: "Reels, ürün ve mekân çekimi, tanıtım filmi, profesyonel video kurgu, renk ve ses düzenleme hizmetleri.",
  },
  "drone-cekimi": {
    headline: "Projenin ölçeğini ve hikâyesini yukarıdan göster.",
    promise:
      "Havadan görüntüyü yalnızca etkileyici bir plan olarak değil, mekânı ve çevresini anlaşılır kılan anlatımın parçası olarak kullanırız.",
    scope: [
      { title: "Mekân ve tesis", text: "İşletmenin konumunu ve fiziksel bütününü tek bakışta gösteririz." },
      { title: "Gayrimenkul ve inşaat", text: "Arsa, konut, şantiye ve projeleri çevresiyle birlikte anlatırız." },
      { title: "Turizm ve rota", text: "Destinasyonun doğasını, ulaşımını ve deneyimini görünür kılarız." },
      { title: "Kurguya hazır teslim", text: "Görüntüleri renk düzenlemesi ve dikey/yatay seçeneklerle hazırlarız." },
    ],
    faqs: [
      { question: "Her hava koşulunda çekim yapılabilir mi?", answer: "Hayır. Rüzgâr, yağış, görüş ve güvenli uçuş koşulları değerlendirilir; gerekirse tarih yeniden planlanır." },
      { question: "Dikey Reels hazırlanabilir mi?", answer: "Evet. Çekim planını dikey kurguyu düşünerek yapıp sosyal medyaya uygun çıktı hazırlayabiliriz." },
    ],
    metaTitle: "Profesyonel Drone Çekimi Trabzon | White Media",
    metaDescription: "Gayrimenkul, turizm, inşaat, mekân ve etkinlikler için Trabzon profesyonel drone çekimi.",
  },
  "google-ads-yonetimi": {
    headline: "İnsanlar ihtiyacını ararken markan karşılarına çıksın.",
    promise:
      "Bütçeyi yalnızca tıklama almak için değil, markaya değer sağlayan arama, iletişim ve talep hareketlerini büyütmek için yönetiriz.",
    scope: [
      { title: "Hedef ve hesap analizi", text: "Hizmeti, bölgeyi, rekabeti ve beklenen dönüşümü değerlendiririz." },
      { title: "Anahtar kelime planı", text: "Arama niyetini yansıtan kelimeleri belirler, ilgisiz aramaları ayıklarız." },
      { title: "Kampanya ve ölçüm", text: "Reklam yapısını, metinleri ve dönüşüm takibini doğru biçimde kurarız." },
      { title: "Optimizasyon", text: "Maliyet ve dönüşüm verilerine göre kampanyayı düzenli geliştiririz." },
    ],
    faqs: [
      { question: "Reklam bütçesi hizmet ücretine dahil mi?", answer: "Reklam bütçesi doğrudan Google'a ödenir ve yönetim hizmetinden ayrıdır." },
      { question: "Mevcut hesabımı devralabilir misiniz?", answer: "Evet. Hesabı ve ölçüm yapısını inceleyip korunacak veya yeniden kurulacak alanları belirleyebiliriz." },
    ],
    metaTitle: "Google Ads Yönetimi Trabzon | White Media",
    metaDescription: "Google Ads arama ağı, YouTube, dönüşüm takibi, bütçe optimizasyonu ve anlaşılır raporlama hizmeti.",
  },
  "meta-reklam-yonetimi": {
    headline: "Doğru içerik, doğru kitle ve ölçülebilir hedef.",
    promise:
      "Meta reklamlarında hedeflemeyi kreatiften ayrı düşünmeyiz. İnsanları durduran mesajı, markaya uygun görüntüyü ve kampanya amacını birlikte test ederiz.",
    scope: [
      { title: "Hesap kontrolü", text: "Business Manager, sayfa, piksel, erişim ve temel ayarları kontrol ederiz." },
      { title: "Kitle stratejisi", text: "Konum, ilgi ve etkileşim sinyallerine göre test grupları kurarız." },
      { title: "Kreatif üretim", text: "Video, görsel, metin ve açılış kancasını kampanya hedefine göre tasarlarız." },
      { title: "Test ve geliştirme", text: "Kreatif, kitle ve yerleşim sonuçlarına göre bütçeyi geliştiririz." },
    ],
    faqs: [
      { question: "Gönderiyi öne çıkarmakla aynı şey mi?", answer: "Hayır. Profesyonel yapı hedef, kitle, yerleşim, ölçüm ve test seçeneklerini daha kontrollü kullanır." },
      { question: "WhatsApp mesaj reklamı yapılabilir mi?", answer: "Evet. Satış sürecine uygunsa kullanıcıları Instagram veya WhatsApp konuşmasına yönlendirebiliriz." },
    ],
    metaTitle: "Meta ve Instagram Reklam Yönetimi | White Media",
    metaDescription: "Instagram ve Facebook reklamlarında kreatif, hedef kitle, kampanya kurulumu, test ve optimizasyon.",
  },
  "web-sitesi-hizmetleri": {
    headline: "Dijital vitrinin yalnızca güzel değil, işlevli de olsun.",
    promise:
      "İnsanların aradığını hızla bulduğu, markayı doğru anladığı ve kolayca iletişime geçtiği sade web deneyimleri tasarlarız.",
    scope: [
      { title: "İçerik mimarisi", text: "Bilginin sırasını ve kullanıcı yolculuğunu hedefe göre kurarız." },
      { title: "Markaya özel arayüz", text: "Hazır şablon hissinden uzak, kurumsal kimliği taşıyan tasarım hazırlarız." },
      { title: "Mobil ve hızlı geliştirme", text: "Siteyi tüm ekranlarda kolay kullanılan, hızlı bir yapıda geliştiririz." },
      { title: "İletişim ve SEO temeli", text: "Aksiyonları, başlıkları, URL'leri ve indeksleme ayarlarını doğru kurarız." },
    ],
    faqs: [
      { question: "Metin ve görselleri de hazırlıyor musunuz?", answer: "Evet. Kapsama göre metin, fotoğraf, video ve gerekli görsel üretimi aynı ekipte hazırlanabilir." },
      { question: "Mevcut sitem yenilenebilir mi?", answer: "Evet. Mevcut yapı incelenir; korunacak ve yeniden ele alınacak alanlar belirlenir." },
    ],
    metaTitle: "Web Tasarım ve Web Sitesi Hizmetleri Trabzon | White Media",
    metaDescription: "Trabzon web tasarım: markaya özel, hızlı, mobil uyumlu ve iletişim odaklı kurumsal web siteleri.",
  },
  "grafik-tasarim": {
    headline: "Her mecrada aynı markaya ait hissettiren bir görsel dil.",
    promise:
      "Tasarımı süsleme olarak değil; mesajı anlaşılır kılan, markayı tanınır hâle getiren ve tüm içerikleri bir arada tutan sistem olarak görürüz.",
    scope: [
      { title: "Görsel yön", text: "Tipografi, renk, kompozisyon ve fotoğraf kullanım dilini netleştiririz." },
      { title: "Sosyal medya tasarımı", text: "Gönderi, hikâye, kapak ve seri içerikleri aynı sistemde hazırlarız." },
      { title: "Kampanya kreatifleri", text: "Duyuru ve reklamlarda mesajı öne çıkaran görseller üretiriz." },
      { title: "Kurumsal materyaller", text: "Sunum, katalog, menü ve afişleri marka bütünlüğünde tasarlarız." },
    ],
    faqs: [
      { question: "Sadece sosyal medya tasarımı alabilir miyim?", answer: "Evet. Tek kampanya, içerik serisi veya düzenli tasarım için ayrı kapsam kurabiliriz." },
      { question: "Baskıya uygun dosya hazırlanıyor mu?", answer: "Evet. Tasarımlar gerekli ölçü, taşma payı ve renk ayarlarıyla hazırlanabilir." },
    ],
    metaTitle: "Grafik Tasarım ve Sosyal Medya Tasarımı | White Media",
    metaDescription: "Sosyal medya, kampanya, reklam ve kurumsal iletişim için markaya özel grafik tasarım hizmeti.",
  },
};
