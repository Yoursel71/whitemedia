export type ServiceItem = {
  number: string;
  name: string;
  description: string;
  role: string;
  impact: string;
  benefits: string[];
};

export const SERVICE_CATALOG: ServiceItem[] = [
  {
    number: "01",
    name: "Sosyal Medya Yönetimi",
    description: "Markana özel strateji, içerik takvimi, yayın, topluluk yönetimi ve anlaşılır raporlama.",
    role: "Markanın her gün görünen yüzü.",
    impact:
      "Tutarlı bir yayın dili; markanın tanınmasını, güven oluşturmasını ve hedef kitlesiyle düzenli bağ kurmasını sağlar.",
    benefits: ["Marka dili", "Düzenli görünürlük", "Topluluk bağı"],
  },
  {
    number: "02",
    name: "Fotoğraf & Video Prodüksiyon",
    description: "Ürününü, mekânını ve hikâyeni güçlü fotoğraflar, Reels ve tanıtım filmleriyle anlatırız.",
    role: "Değerini ilk bakışta anlatır.",
    impact:
      "Doğru görüntü ve hikâye; ürünün, mekânın veya hizmetin gerçek değerini insanların kolayca anlayacağı bir içeriğe dönüştürür.",
    benefits: ["Ürün & mekân", "Reels & tanıtım", "Kampanya içeriği"],
  },
  {
    number: "03",
    name: "Drone Çekimi",
    description: "Mekân, proje, etkinlik ve rotaları havadan etkileyici bir bakışla gösteririz.",
    role: "Bütünü tek bakışta gösterir.",
    impact:
      "Mekânın, tesisin, rotanın veya projenin ölçeğini ve çevresiyle ilişkisini izleyicinin hızlıca kavramasını sağlar.",
    benefits: ["Mekân", "Proje", "Destinasyon"],
  },
  {
    number: "04",
    name: "Google Ads Yönetimi",
    description: "Arama, görüntülü reklam ve YouTube kampanyalarını hedeflerine göre kurar ve geliştiririz.",
    role: "Arandığın anda görünür olmanı sağlar.",
    impact:
      "Sunduğun ürün veya hizmeti aktif olarak arayan kişilerin karşısına Google'ın reklam alanlarında çıkarak ilgili talebi markana yönlendirir.",
    benefits: ["Arama niyeti", "Bölgesel erişim", "Ölçülebilir trafik"],
  },
  {
    number: "05",
    name: "Meta Business Reklam Yönetimi",
    description: "Instagram ve Facebook reklamlarında kreatif, hedefleme ve optimizasyonu birlikte yönetiriz.",
    role: "İlgiyi doğru kitlede büyütür.",
    impact:
      "Instagram ve Facebook'ta konum, ilgi ve etkileşim sinyallerinden yararlanarak mesajını markanla ilgilenme ihtimali yüksek kişilere taşır.",
    benefits: ["Instagram & Facebook", "Kitle eşleştirme", "Erişim & dönüşüm"],
  },
  {
    number: "06",
    name: "Web Sitesi Hizmetleri",
    description: "Marka kimliğinle uyumlu, hızlı, mobil ve kullanımı kolay web deneyimleri geliştiririz.",
    role: "Dijital dünyadaki merkezini kurar.",
    impact:
      "Hızlı, mobil uyumlu ve güven veren bir site; sosyal medya ile reklamlardan gelen ilgiyi bilgiye, iletişime ve talebe dönüştürmeye yardımcı olur.",
    benefits: ["Güven", "Mobil deneyim", "İletişim & talep"],
  },
];
