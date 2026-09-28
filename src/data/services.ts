export type ServiceItem = {
  number: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  role: string;
  impact: string;
  benefits: string[];
};

export const SERVICE_CATALOG: ServiceItem[] = [
  {
    number: "01",
    slug: "sosyal-medya-yonetimi",
    name: "Sosyal Medya Yönetimi",
    shortName: "Sosyal Medya",
    description: "Markana özel strateji, içerik takvimi, yayın, topluluk yönetimi ve anlaşılır raporlama.",
    role: "Markanın her gün görünen yüzü.",
    impact:
      "Tutarlı bir yayın dili; markanın tanınmasını, güven oluşturmasını ve hedef kitlesiyle düzenli bağ kurmasını sağlar.",
    benefits: ["Marka dili", "Düzenli görünürlük", "Topluluk bağı"],
  },
  {
    number: "02",
    slug: "fotograf-video-produksiyon",
    name: "Fotoğraf & Video Prodüksiyon",
    shortName: "Prodüksiyon",
    description: "Ürününü, mekânını ve hikâyeni güçlü fotoğraflar, Reels ve tanıtım filmleriyle anlatırız.",
    role: "Değerini ilk bakışta anlatır.",
    impact:
      "Doğru görüntü ve hikâye; ürünün, mekânın veya hizmetin gerçek değerini insanların kolayca anlayacağı bir içeriğe dönüştürür.",
    benefits: ["Ürün & mekân", "Reels & tanıtım", "Kampanya içeriği"],
  },
  {
    number: "03",
    slug: "drone-cekimi",
    name: "Drone Çekimi",
    shortName: "Drone",
    description: "Mekân, proje, etkinlik ve rotaları havadan etkileyici bir bakışla gösteririz.",
    role: "Bütünü tek bakışta gösterir.",
    impact:
      "Mekânın, tesisin, rotanın veya projenin ölçeğini ve çevresiyle ilişkisini izleyicinin hızlıca kavramasını sağlar.",
    benefits: ["Mekân", "Proje", "Destinasyon"],
  },
  {
    number: "04",
    slug: "google-ads-yonetimi",
    name: "Google Ads Yönetimi",
    shortName: "Google Ads",
    description: "Arama, görüntülü reklam ve YouTube kampanyalarını hedeflerine göre kurar ve geliştiririz.",
    role: "Arandığın anda görünür olmanı sağlar.",
    impact:
      "Sunduğun ürün veya hizmeti aktif olarak arayan kişilerin karşısına Google'ın reklam alanlarında çıkarak ilgili talebi markana yönlendirir.",
    benefits: ["Arama niyeti", "Bölgesel erişim", "Ölçülebilir trafik"],
  },
  {
    number: "05",
    slug: "meta-reklam-yonetimi",
    name: "Meta Business Reklam Yönetimi",
    shortName: "Meta Ads",
    description: "Instagram ve Facebook reklamlarında kreatif, hedefleme ve optimizasyonu birlikte yönetiriz.",
    role: "İlgiyi doğru kitlede büyütür.",
    impact:
      "Instagram ve Facebook'ta konum, ilgi ve etkileşim sinyallerinden yararlanarak mesajını markanla ilgilenme ihtimali yüksek kişilere taşır.",
    benefits: ["Instagram & Facebook", "Kitle eşleştirme", "Erişim & dönüşüm"],
  },
  {
    number: "06",
    slug: "web-sitesi-hizmetleri",
    name: "Web Sitesi Hizmetleri",
    shortName: "Web Sitesi",
    description: "Marka kimliğinle uyumlu, hızlı, mobil ve kullanımı kolay web deneyimleri geliştiririz.",
    role: "Dijital dünyadaki merkezini kurar.",
    impact:
      "Hızlı, mobil uyumlu ve güven veren bir site; sosyal medya ile reklamlardan gelen ilgiyi bilgiye, iletişime ve talebe dönüştürmeye yardımcı olur.",
    benefits: ["Güven", "Mobil deneyim", "İletişim & talep"],
  },
  {
    number: "07",
    slug: "grafik-tasarim",
    name: "Grafik Tasarım",
    shortName: "Grafik Tasarım",
    description:
      "Markanın görsel dilini sosyal medya, kampanya ve kurumsal materyallerde tutarlı hâle getiririz.",
    role: "Markayı tek bakışta tanınır kılar.",
    impact:
      "Tutarlı tipografi, renk ve tasarım sistemi; farklı kanallardaki iletişimi aynı markaya ait hissettirir ve algıyı güçlendirir.",
    benefits: ["Görsel kimlik", "Kampanya tasarımı", "Dijital & basılı"],
  },
];

export const serviceBySlug = Object.fromEntries(
  SERVICE_CATALOG.map((service) => [service.slug, service])
) as Record<string, ServiceItem>;
