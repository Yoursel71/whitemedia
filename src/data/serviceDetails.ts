export type ServiceDetail = {
  headline: string;
  promise: string;
  scope: { title: string; text: string }[];
  useCases: { title: string; text: string }[];
  collaboration: string;
  relatedProjects?: string[];
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
    useCases: [
      { title: "Restoran ve kafeler", text: "Ürünü, mekânı ve ekibi gösteren düzenli içeriklerle markanın günlük deneyimini anlatırız." },
      { title: "Gayrimenkul", text: "Portföyleri yalnızca ilan olarak değil; konum, yaşam ve kullanım avantajlarıyla anlatan bir yayın dili kurarız." },
      { title: "Kurumsal markalar", text: "Uzmanlığı, hizmet sürecini ve ekip yüzünü anlaşılır içerik serilerine dönüştürürüz." },
    ],
    collaboration: "Strateji, yayın planı ve hesap yönetimini uzaktan yürütebiliriz. Fotoğraf veya video çekimi gerekiyorsa üretim günlerini proje kapsamına göre Trabzon'da ya da farklı şehirlerde planlarız.",
    relatedProjects: ["gursoy-insaat", "yamanlar-oto-ekspertiz", "pesent-restaurant"],
    faqs: [
      { question: "Her marka için aynı plan mı uygulanıyor?", answer: "Hayır. Dil, format, sıklık ve konu başlıkları markanın kimliğine, kitlesine ve önceliğine göre belirlenir." },
      { question: "Çekim ve tasarım dahil olabilir mi?", answer: "Evet. Fotoğraf, video, Reels ve grafik tasarım üretimini aynı kapsamda planlayabiliriz." },
    ],
    metaTitle: "Sosyal Medya Yönetimi | White Media",
    metaDescription: "Trabzon merkezli White Media ile Türkiye genelinde sosyal medya stratejisi, içerik üretimi, yayın ve raporlama. Markana özel çalışma planı oluşturuyoruz.",
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
    useCases: [
      { title: "Üretim ve sanayi", text: "Tesisi, üretim adımlarını ve insan emeğini kurumsal bir hikâyeye dönüştürürüz." },
      { title: "Yeme içme ve turizm", text: "Ürün detayını, mekân atmosferini ve deneyimi kısa, izlenebilir videolarla gösteririz." },
      { title: "Kurum ve uzmanlar", text: "Tanıtım, röportaj ve bilgilendirici içeriklerde mesajın açık ve güven veren biçimde duyulmasını sağlarız." },
    ],
    collaboration: "Çekim gereken projelerde lokasyon, gün sayısı ve teslimleri birlikte belirleriz; şehir dışı prodüksiyonları proje bazında planlarız. Uygun ham görüntülerin kurgu ve post prodüksiyonunu uzaktan da üstlenebiliriz.",
    relatedProjects: ["ay-gida", "medicalpark", "pesent-restaurant"],
    faqs: [
      { question: "Sadece video kurgu hizmeti alabilir miyim?", answer: "Evet. Uygun ham görüntüler için kurgu, renk, ses ve platform çıktısı hazırlayabiliriz." },
      { question: "Reels fikrini siz mi hazırlıyorsunuz?", answer: "Evet. Marka dili ve hedef netleşince fikir, kanca, metin ve sahne akışını oluşturabiliriz." },
    ],
    metaTitle: "Fotoğraf ve Video Prodüksiyon | White Media",
    metaDescription: "Trabzon merkezli ekiple Türkiye genelinde Reels, ürün ve mekân çekimi, tanıtım filmi, kurgu, renk ve ses düzenleme. Çekim kapsamını birlikte planlıyoruz.",
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
    useCases: [
      { title: "Gayrimenkul", text: "Arsa ve yapıların konumunu, çevresini ve ölçeğini alıcıya tek bakışta gösteririz." },
      { title: "Tesis ve inşaat", text: "Büyük alanları, üretim tesislerini ve proje ilerleyişini yerden çekimle birlikte anlatırız." },
      { title: "Turizm ve etkinlik", text: "Rota, doğa, mekân ve etkinlik alanını hikâyenin akışına hizmet eden hava görüntüleriyle tamamlarız." },
    ],
    collaboration: "Trabzon dışındaki çekimleri de proje bazında değerlendiririz. Çekim yeri, tarih, hava koşulları ve gerekli uçuş şartları netleşince planı ve teslim biçimini birlikte belirleriz.",
    relatedProjects: ["dk-gayrimenkul", "modatepe-resort", "sancak-turizm"],
    faqs: [
      { question: "Her hava koşulunda çekim yapılabilir mi?", answer: "Hayır. Rüzgâr, yağış, görüş ve güvenli uçuş koşulları değerlendirilir; gerekirse tarih yeniden planlanır." },
      { question: "Dikey Reels hazırlanabilir mi?", answer: "Evet. Çekim planını dikey kurguyu düşünerek yapıp sosyal medyaya uygun çıktı hazırlayabiliriz." },
    ],
    metaTitle: "Drone Çekimi | White Media",
    metaDescription: "Trabzon merkezli White Media ile Türkiye genelinde gayrimenkul, tesis, turizm ve etkinlikler için drone çekimi ve kurgu. Çekim koşullarını birlikte planlıyoruz.",
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
    useCases: [
      { title: "Hizmet aramaları", text: "İnsanların doğrudan hizmet aradığı kelimelerde ilgili sayfaya ve doğru iletişim kanalına yönlendiren kampanyalar kurarız." },
      { title: "Bölgesel talep", text: "Hizmet verilen şehirleri ve bölgeleri ayırarak reklamın erişimini işletmenin gerçek çalışma alanına göre düzenleriz." },
      { title: "Mevcut kampanyalar", text: "Harcamayı, arama terimlerini ve dönüşüm ölçümünü inceleyip geliştirme önceliklerini belirleriz." },
    ],
    collaboration: "Hesap analizi, kampanya kurulumu, ölçüm ve raporlamayı uzaktan yürütüyoruz. Trabzon'daki bir işletme için yerel, farklı şehirlerde hizmet veren marka için daha geniş bir bölge planı kurabiliriz.",
    faqs: [
      { question: "Reklam bütçesi hizmet ücretine dahil mi?", answer: "Reklam bütçesi doğrudan Google'a ödenir ve yönetim hizmetinden ayrıdır." },
      { question: "Mevcut hesabımı devralabilir misiniz?", answer: "Evet. Hesabı ve ölçüm yapısını inceleyip korunacak veya yeniden kurulacak alanları belirleyebiliriz." },
    ],
    metaTitle: "Google Ads Yönetimi | White Media",
    metaDescription: "Trabzon merkezli White Media ile Türkiye genelinde Google Ads kampanya kurulumu, arama terimi analizi, dönüşüm takibi, bütçe optimizasyonu ve raporlama.",
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
    useCases: [
      { title: "Marka ve ürün tanıtımı", text: "İnsanların dikkatini çeken video, görsel ve metinleri farklı kitlelerde test ederiz." },
      { title: "İletişim talebi", text: "Uygun kampanyalarda kullanıcıyı form, Instagram veya WhatsApp görüşmesine yönlendiririz." },
      { title: "Yeni kampanya dönemi", text: "Açılış, sezon veya yeni hizmet duyurusunda mesajı ve kreatifi hedef kitleye göre yeniden kurarız." },
    ],
    collaboration: "Instagram ve Facebook reklam hesaplarını uzaktan yönetebiliriz. Hedef bölgeleri markanın hizmet alanına göre belirler; çekim gereken kreatifleri ayrıca proje takvimine göre planlarız.",
    faqs: [
      { question: "Gönderiyi öne çıkarmakla aynı şey mi?", answer: "Hayır. Profesyonel yapı hedef, kitle, yerleşim, ölçüm ve test seçeneklerini daha kontrollü kullanır." },
      { question: "WhatsApp mesaj reklamı yapılabilir mi?", answer: "Evet. Satış sürecine uygunsa kullanıcıları Instagram veya WhatsApp konuşmasına yönlendirebiliriz." },
    ],
    metaTitle: "Instagram ve Meta Reklam Yönetimi | White Media",
    metaDescription: "Türkiye genelindeki markalar için Instagram ve Facebook reklamlarında kreatif, kampanya kurulumu, hedef kitle testleri, optimizasyon ve anlaşılır raporlama.",
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
    useCases: [
      { title: "Yeni kurumsal site", text: "Hizmetleri, güven unsurlarını ve iletişim yollarını ziyaretçinin kolayca bulacağı bir yapıda toplarız." },
      { title: "Mevcut siteyi yenileme", text: "İçerik sırasını, mobil kullanımı ve ziyaretçinin iletişime ulaşma yolunu yeniden ele alırız." },
      { title: "Kampanya sayfası", text: "Tek bir hizmet veya kampanya için mesajı net, aksiyonu belirgin bir sayfa hazırlayabiliriz." },
    ],
    collaboration: "Planlama, tasarım, geliştirme ve geri bildirim sürecini Türkiye'nin farklı şehirlerindeki markalarla uzaktan yürütebiliriz. Fotoğraf veya video üretimi gerekiyorsa bunu ayrıca kapsamlandırırız.",
    faqs: [
      { question: "Metin ve görselleri de hazırlıyor musunuz?", answer: "Evet. Kapsama göre metin, fotoğraf, video ve gerekli görsel üretimi aynı ekipte hazırlanabilir." },
      { question: "Mevcut sitem yenilenebilir mi?", answer: "Evet. Mevcut yapı incelenir; korunacak ve yeniden ele alınacak alanlar belirlenir." },
    ],
    metaTitle: "Kurumsal Web Sitesi ve Web Tasarım | White Media",
    metaDescription: "Trabzon merkezli White Media ile Türkiye genelinde markaya özel, mobil uyumlu kurumsal web sitesi tasarımı ve geliştirme. İçerik ve iletişim akışı birlikte planlanır.",
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
    useCases: [
      { title: "Sosyal medya düzeni", text: "Kapak, gönderi ve hikâyelerin farklı konularda da aynı markaya ait görünmesini sağlarız." },
      { title: "Reklam kreatifleri", text: "Teklif ve mesajı hızlı anlatan görselleri kampanya formatlarına göre hazırlarız." },
      { title: "Kurumsal tasarım", text: "Menü, katalog, afiş ve sunum gibi materyalleri ortak bir görsel dilde toplarız." },
    ],
    collaboration: "Brief, tasarım, revizyon ve dosya teslimini uzaktan yürütebiliriz. Trabzon dışındaki markalarla da platforma ve gerekiyorsa baskıya uygun çıktılar için çalışırız.",
    faqs: [
      { question: "Sadece sosyal medya tasarımı alabilir miyim?", answer: "Evet. Tek kampanya, içerik serisi veya düzenli tasarım için ayrı kapsam kurabiliriz." },
      { question: "Baskıya uygun dosya hazırlanıyor mu?", answer: "Evet. Tasarımlar gerekli ölçü, taşma payı ve renk ayarlarıyla hazırlanabilir." },
    ],
    metaTitle: "Grafik ve Sosyal Medya Tasarımı | White Media",
    metaDescription: "Türkiye genelindeki markalar için sosyal medya gönderileri, reklam kreatifleri, menü, katalog ve kurumsal materyallerde tutarlı grafik tasarım.",
  },
};
