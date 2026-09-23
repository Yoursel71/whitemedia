export type ProjectMedia = {
  src: string;
  poster: string;
  title: string;
};

export type PortfolioProject = {
  index: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  services: string[];
  logo?: string;
  logoAlt: string;
  logoShape: "wide" | "square";
  logoTreatment: "dark" | "light" | "on-dark";
  panel: "dark" | "light";
  media: ProjectMedia[];
};

const video = (clip: number, title: string): ProjectMedia => ({
  src: `/videos/clip-${clip}.mp4`,
  poster: `/work/posters/clip-${clip}.webp`,
  title,
});

export const portfolioProjects: PortfolioProject[] = [
  {
    index: "01",
    slug: "medicalpark",
    name: "Medical Park Yıldızlı",
    category: "Sağlık · Kurumsal İçerik",
    summary:
      "Medical Park Yıldızlı'nın kurumsal tanıtımını ve uzman görüşlerini, güven veren sağlık iletişimi içeriklerine dönüştürdük.",
    services: ["Reels prodüksiyonu", "Sosyal medya içeriği", "Kurgu & post prodüksiyon"],
    logo: "/logos/medicalpark.webp",
    logoAlt: "Medical Park Yıldızlı Hastanesi logosu",
    logoShape: "wide",
    logoTreatment: "light",
    panel: "dark",
    media: [
      {
        src: "/work/medicalpark-yildizli/hastane-tanitim-filmi.mp4",
        poster: "/work/medicalpark-yildizli/hastane-tanitim-filmi.webp",
        title: "Medical Park Yıldızlı Hastanesi tanıtım filmi",
      },
      {
        src: "/work/medicalpark-yildizli/can-kece-cerrahi-onkoloji.mp4",
        poster: "/work/medicalpark-yildizli/can-kece-cerrahi-onkoloji.webp",
        title: "Prof. Dr. Can Keçe — Cerrahi onkolojinin önemi",
      },
      {
        src: "/work/medicalpark-yildizli/tugce-turkcan-goz-kapagi.mp4",
        poster: "/work/medicalpark-yildizli/tugce-turkcan-goz-kapagi.webp",
        title: "Op. Dr. Tuğçe Türkcan Soğuksulu — Göz kapağı sarkması",
      },
    ],
  },
  {
    index: "02",
    slug: "yamanlar-oto-ekspertiz",
    name: "Yamanlar Oto Ekspertiz",
    category: "Oto Ekspertiz · Reklam",
    summary:
      "Ekspertiz hizmetlerini açık, güvenilir ve satış odaklı bir dille anlatan dijital içerik çalışmaları hazırladık.",
    services: ["Reklam kreatifleri", "Sosyal medya yönetimi", "İçerik prodüksiyonu"],
    logo: "/logos/yamanlar-oto-ekspertiz.webp",
    logoAlt: "Yamanlar Bağımsız Oto Ekspertiz logosu",
    logoShape: "wide",
    logoTreatment: "dark",
    panel: "light",
    media: [
      {
        src: "/work/yamanlar-oto-ekspertiz/salihli-sube-acilisi.mp4",
        poster: "/work/yamanlar-oto-ekspertiz/salihli-sube-acilisi.webp",
        title: "Salihli şubesi açılış filmi",
      },
      {
        src: "/work/yamanlar-oto-ekspertiz/izmir-subeler-lokasyon.mp4",
        poster: "/work/yamanlar-oto-ekspertiz/izmir-subeler-lokasyon.webp",
        title: "İzmir şubeleri drone lokasyon tanıtımı",
      },
    ],
  },
  {
    index: "03",
    slug: "trabzon-universitesi",
    name: "Trabzon Üniversitesi",
    category: "Eğitim · İçerik",
    summary:
      "Üniversitenin iletişim ihtiyaçlarına uygun, kurumsal çizgiyi koruyan dijital içerik ve prodüksiyon çalışmaları ürettik.",
    services: ["Kurumsal içerik", "Video prodüksiyon", "Sosyal medya iletişimi"],
    logo: "/logos/trabzon-universitesi.png",
    logoAlt: "Trabzon Üniversitesi logosu",
    logoShape: "wide",
    logoTreatment: "light",
    panel: "dark",
    media: [
      {
        src: "/work/trabzon-universitesi/iletisim-fakultesi-tanitim.mp4",
        poster: "/work/trabzon-universitesi/iletisim-fakultesi-tanitim.webp",
        title: "İletişim Fakültesi tanıtım filmi",
      },
    ],
  },
  {
    index: "04",
    slug: "maziden-atiye-puruthana",
    name: "Bayburt Puruthana",
    category: "Marka · Sosyal Medya",
    summary:
      "Geleneksel üretim hikâyesini yakın plan detaylar ve anlatı odaklı dikey videolarla sosyal medyaya taşıdık.",
    services: ["Reels prodüksiyonu", "Hikâye anlatımı", "Kurgu & altyazı"],
    logo: "/logos/maziden-atiye-puruthana.png",
    logoAlt: "Bayburt Puruthana logosu",
    logoShape: "square",
    logoTreatment: "on-dark",
    panel: "dark",
    media: [
      {
        src: "/work/bayburt-puruthana/ustalik-kultur-hikayesi.mp4",
        poster: "/work/bayburt-puruthana/ustalik-kultur-hikayesi.webp",
        title: "Ustalık ve kültür hikâyesi",
      },
      {
        src: "/work/bayburt-puruthana/tandir-guclendirme-sevkiyat.mp4",
        poster: "/work/bayburt-puruthana/tandir-guclendirme-sevkiyat.webp",
        title: "Tandırın güçlendirme ve sevkiyat süreci",
      },
      {
        src: "/work/bayburt-puruthana/loloz-geleneksel-ustalik.mp4",
        poster: "/work/bayburt-puruthana/loloz-geleneksel-ustalik.webp",
        title: "Loloz tekniği ve geleneksel ustalık",
      },
      {
        src: "/work/bayburt-puruthana/geleneksel-tandir-yapimi-belgesel.mp4",
        poster: "/work/bayburt-puruthana/geleneksel-tandir-yapimi-belgesel.webp",
        title: "Geleneksel tandır yapımı — uzun anlatım",
      },
    ],
  },
  {
    index: "05",
    slug: "gursoy-insaat",
    name: "Gürsoy İnşaat",
    category: "İnşaat · Web & Reklam",
    summary:
      "Markanın projelerini dijitalde daha güçlü sunmak için web ve reklam iletişimini ortak bir görsel dilde buluşturduk.",
    services: ["Web tasarım", "Reklam kreatifleri", "Dijital marka iletişimi"],
    logo: "/logos/gursoy-insaat.png",
    logoAlt: "Gürsoy İnşaat logosu",
    logoShape: "wide",
    logoTreatment: "light",
    panel: "dark",
    media: [],
  },
  {
    index: "06",
    slug: "pesent-restaurant",
    name: "Pesent Restaurant",
    category: "Restoran · Prodüksiyon",
    summary:
      "Mekânın sofrasını, mutfağını ve ürün çeşitliliğini iştah açıcı yakın planlarla satış odaklı içeriklere dönüştürdük.",
    services: ["Yemek çekimi", "Reels prodüksiyonu", "Sosyal medya içeriği"],
    logo: "/logos/pesent-restaurant.png",
    logoAlt: "Pesent Restaurant logosu",
    logoShape: "wide",
    logoTreatment: "dark",
    panel: "light",
    media: [
      {
        src: "/work/pesent/pesent-3.mp4",
        poster: "/work/pesent/pesent-3.webp",
        title: "Deniz manzaralı lezzet deneyimi",
      },
      {
        src: "/work/pesent/pesent-6.mp4",
        poster: "/work/pesent/pesent-6.webp",
        title: "Usta dokunuşuyla Adana kebap",
      },
      {
        src: "/work/pesent/pesent-8.mp4",
        poster: "/work/pesent/pesent-8.webp",
        title: "Sahil restoranı drone tanıtımı",
      },
      {
        src: "/work/pesent/pesent-13.mp4",
        poster: "/work/pesent/pesent-13.webp",
        title: "Pide hazırlık süreci",
      },
      {
        src: "/work/pesent/pesent-14.mp4",
        poster: "/work/pesent/pesent-14.webp",
        title: "Deniz manzaralı serpme kahvaltı",
      },
      {
        src: "/work/pesent/pesent-19.mp4",
        poster: "/work/pesent/pesent-19.webp",
        title: "Mutfaktan masaya servis deneyimi",
      },
      {
        src: "/work/pesent/pesent-20.mp4",
        poster: "/work/pesent/pesent-20.webp",
        title: "Ocakbaşı lezzet hazırlığı",
      },
      {
        src: "/work/pesent/pesent-17.mp4",
        poster: "/work/pesent/pesent-17.webp",
        title: "Lahmacun ve kebap sunumu",
      },
      video(10, "Pide prodüksiyonu"),
    ],
  },
  {
    index: "07",
    slug: "depaul-cafe-restaurant",
    name: "Depaul Cafe&Restaurant",
    category: "Kafe · Restoran",
    summary:
      "Mekân deneyimini, menü ürünlerini ve servis atmosferini sosyal medyada öne çıkaran içerikler hazırladık.",
    services: ["Mekân çekimi", "Ürün prodüksiyonu", "Sosyal medya içeriği"],
    logo: "/logos/depaul.svg",
    logoAlt: "Depaul Cafe & Restaurant logosu",
    logoShape: "wide",
    logoTreatment: "light",
    panel: "dark",
    media: [video(4, "Mutfak ve ürün prodüksiyonu")],
  },
  {
    index: "08",
    slug: "the-vera-cafe-restaurant",
    name: "The Vera Cafe & Restaurant",
    category: "Kafe · Restoran",
    summary:
      "The Vera'nın ürünlerini ve mekân atmosferini modern, ritmik ve marka diline uygun dikey içeriklerle anlattık.",
    services: ["Reels prodüksiyonu", "Ürün çekimi", "Kurgu & renk"],
    logo: "/logos/the-vera.png",
    logoAlt: "The Vera Cafe & Restaurant logosu",
    logoShape: "square",
    logoTreatment: "dark",
    panel: "light",
    media: [video(7, "İçecek prodüksiyonu"), video(14, "Mekân ve ürün içeriği")],
  },
  {
    index: "09",
    slug: "dk-gayrimenkul",
    name: "DK Gayrimenkul",
    category: "Gayrimenkul · Danışmanlık",
    summary:
      "Portföyleri konum, kullanım avantajı ve yatırım değerini öne çıkaran drone destekli kısa videolarla sunduk.",
    services: ["Drone çekimi", "Portföy videosu", "Reklam içeriği"],
    logo: "/logos/dk-gayrimenkul.png",
    logoAlt: "DK Gayrimenkul logosu",
    logoShape: "square",
    logoTreatment: "light",
    panel: "dark",
    media: [
      {
        src: "/work/dk-gayrimenkul/dk-26.mp4",
        poster: "/work/dk-gayrimenkul/dk-26.webp",
        title: "Modern müstakil villa tanıtımı",
      },
      {
        src: "/work/dk-gayrimenkul/dk-28.mp4",
        poster: "/work/dk-gayrimenkul/dk-28.webp",
        title: "470 m² kiralık iş yeri",
      },
      {
        src: "/work/dk-gayrimenkul/dk-25.mp4",
        poster: "/work/dk-gayrimenkul/dk-25.webp",
        title: "Mersin Mahallesi 300 m² arsa",
      },
      {
        src: "/work/dk-gayrimenkul/dk-20.mp4",
        poster: "/work/dk-gayrimenkul/dk-20.webp",
        title: "Deniz manzaralı yatırım mülkü",
      },
      {
        src: "/work/dk-gayrimenkul/dk-12.mp4",
        poster: "/work/dk-gayrimenkul/dk-12.webp",
        title: "Sıfır daire ve site yaşamı",
      },
      {
        src: "/work/dk-gayrimenkul/dk-8.mp4",
        poster: "/work/dk-gayrimenkul/dk-8.webp",
        title: "Ana yola yakın müstakil konut",
      },
      {
        src: "/work/dk-gayrimenkul/dk-5.mp4",
        poster: "/work/dk-gayrimenkul/dk-5.webp",
        title: "Gayrimenkul satış danışmanlığı",
      },
    ],
  },
  {
    index: "10",
    slug: "modatepe-resort",
    name: "Modatepe Resort",
    category: "Otel · Turizm",
    summary:
      "Konaklama deneyimini, doğayı ve tesisin öne çıkan alanlarını turizm iletişimine uygun içeriklerle anlattık.",
    services: ["Tesis çekimi", "Drone prodüksiyonu", "Sosyal medya içeriği"],
    logo: "/logos/modatepe-resort.png",
    logoAlt: "Modatepe Resort logosu",
    logoShape: "square",
    logoTreatment: "dark",
    panel: "light",
    media: [
      {
        src: "/work/modatepe-resort/modatepe-11.mp4",
        poster: "/work/modatepe-resort/modatepe-11.webp",
        title: "Doğayla iç içe resort deneyimi",
      },
      {
        src: "/work/modatepe-resort/modatepe-5.mp4",
        poster: "/work/modatepe-resort/modatepe-5.webp",
        title: "Konaklamada %20 indirim kampanyası",
      },
      {
        src: "/work/modatepe-resort/modatepe-7.mp4",
        poster: "/work/modatepe-resort/modatepe-7.webp",
        title: "Panoramik manzaralı bungalov",
      },
      {
        src: "/work/modatepe-resort/modatepe-9.mp4",
        poster: "/work/modatepe-resort/modatepe-9.webp",
        title: "Bungalovda manzaralı konaklama",
      },
      {
        src: "/work/modatepe-resort/modatepe-3.mp4",
        poster: "/work/modatepe-resort/modatepe-3.webp",
        title: "Manzaraya karşı serpme kahvaltı",
      },
      {
        src: "/work/modatepe-resort/modatepe-2.mp4",
        poster: "/work/modatepe-resort/modatepe-2.webp",
        title: "Izgara et hazırlığı ve sunumu",
      },
      {
        src: "/work/modatepe-resort/modatepe-12.mp4",
        poster: "/work/modatepe-resort/modatepe-12.webp",
        title: "Gün batımında drone turu",
      },
    ],
  },
  {
    index: "11",
    slug: "kardesler-oto-lastik",
    name: "Kardeşler & Beyazlı Oto Lastik",
    category: "Otomotiv · Jant & Lastik",
    summary:
      "Jant ve lastik hizmetlerini; süreç, ustalık ve ürün detaylarını öne çıkaran dinamik otomotiv içerikleriyle anlattık.",
    services: ["Jant & lastik prodüksiyonu", "Hizmet anlatımı", "Reels prodüksiyonu"],
    logo: "/logos/kardesler-oto-lastik.png",
    logoAlt: "Kardeşler & Beyazlı Oto Lastik logosu",
    logoShape: "square",
    logoTreatment: "light",
    panel: "dark",
    media: [
      {
        src: "/work/kardesler-beyazli/kardesler-beyazli-12.mp4",
        poster: "/work/kardesler-beyazli/kardesler-beyazli-12.webp",
        title: "Profesyonel jant düzeltme",
      },
      {
        src: "/work/kardesler-beyazli/kardesler-beyazli-18.mp4",
        poster: "/work/kardesler-beyazli/kardesler-beyazli-18.webp",
        title: "Hasarlı jant yenileme",
      },
      {
        src: "/work/kardesler-beyazli/kardesler-beyazli-19.mp4",
        poster: "/work/kardesler-beyazli/kardesler-beyazli-19.webp",
        title: "Kardeşler & Beyazlı Oto Lastik tanıtımı",
      },
      {
        src: "/work/kardesler-beyazli/kardesler-beyazli-33.mp4",
        poster: "/work/kardesler-beyazli/kardesler-beyazli-33.webp",
        title: "Mercedes AMG jant tanıtımı",
      },
      {
        src: "/work/kardesler-beyazli/kardesler-beyazli-34.mp4",
        poster: "/work/kardesler-beyazli/kardesler-beyazli-34.webp",
        title: "Citroën Berlingo jant tanıtımı",
      },
      video(9, "Lastik ürün tanıtımı"),
    ],
  },
  {
    index: "12",
    slug: "sancak-turizm",
    name: "Sancak Turizm",
    category: "Turizm · Seyahat",
    summary:
      "Rota ve destinasyonları, seyahat isteği uyandıran manzara ve drone görüntüleriyle dijital vitrine taşıdık.",
    services: ["Drone çekimi", "Destinasyon içeriği", "Reels prodüksiyonu"],
    logo: "/logos/sancak-turizm-v2.png",
    logoAlt: "Sancak Turizm logosu",
    logoShape: "wide",
    logoTreatment: "dark",
    panel: "light",
    media: [
      {
        src: "/work/sancak-turizm/uzungol-destinasyon.mp4",
        poster: "/work/sancak-turizm/uzungol-destinasyon.webp",
        title: "Uzungöl destinasyon tanıtımı",
      },
      {
        src: "/work/sancak-turizm/bungalov-konaklama.mp4",
        poster: "/work/sancak-turizm/bungalov-konaklama.webp",
        title: "Bungalov konaklama tanıtımı",
      },
      {
        src: "/work/sancak-turizm/turizm-hizmetleri.mp4",
        poster: "/work/sancak-turizm/turizm-hizmetleri.webp",
        title: "Sancak Turizm hizmet tanıtımı",
      },
    ],
  },
  {
    index: "13",
    slug: "kayi-1461-turizm",
    name: "Kayı 1461 Turizm",
    category: "Turizm · Acente",
    summary:
      "Tur planlarını, dijital görünürlüğü ve reklam iletişimini aynı marka çizgisinde bir araya getirdik.",
    services: ["Sosyal medya düzeni", "Reklam optimizasyonu", "Tur içerikleri"],
    logoAlt: "Kayı 1461 Turizm logosu",
    logoShape: "wide",
    logoTreatment: "light",
    panel: "dark",
    media: [],
  },
  {
    index: "14",
    slug: "flowers-dugun-salonu",
    name: "Flowers Düğün Salonu",
    category: "Organizasyon · Etkinlik",
    summary:
      "Mekânın atmosferini ve etkinlik deneyimini duyguya odaklanan fotoğraf ve video içerikleriyle anlattık.",
    services: ["Etkinlik çekimi", "Mekân tanıtımı", "Sosyal medya içeriği"],
    logoAlt: "Flowers Düğün Salonu logosu",
    logoShape: "wide",
    logoTreatment: "dark",
    panel: "light",
    media: [
      {
        src: "/work/flowers-dugun-salonu/dugun-gecesi-tanitim.mp4",
        poster: "/work/flowers-dugun-salonu/dugun-gecesi-tanitim.webp",
        title: "Düğün gecesi tanıtım filmi",
      },
      {
        src: "/work/flowers-dugun-salonu/salon-organizasyon-tanitim.mp4",
        poster: "/work/flowers-dugun-salonu/salon-organizasyon-tanitim.webp",
        title: "Salon ve organizasyon tanıtımı",
      },
    ],
  },
  {
    index: "15",
    slug: "macka-bungalov",
    name: "Maçka Bungalov",
    category: "Konaklama · Doğa Turizmi",
    summary:
      "Doğa içindeki konaklama deneyimini, tesisin karakterini ve çevresini öne çıkaran içeriklerle sunduk.",
    services: ["Drone çekimi", "Konaklama tanıtımı", "Reels prodüksiyonu"],
    logo: "/logos/macka-bungalov.png",
    logoAlt: "Maçka Bungalov logosu",
    logoShape: "square",
    logoTreatment: "light",
    panel: "dark",
    media: [],
  },
  {
    index: "16",
    slug: "tt-fest",
    name: "TT Fest",
    category: "Etkinlik · Festival",
    summary:
      "Festival enerjisini, kalabalığı ve sahne atmosferini hızlı tempolu etkinlik içerikleriyle görünür kıldık.",
    services: ["Etkinlik prodüksiyonu", "Reels içeriği", "Kurgu & post prodüksiyon"],
    logo: "/logos/tt-fest.png",
    logoAlt: "TT Fest logosu",
    logoShape: "square",
    logoTreatment: "dark",
    panel: "light",
    media: [
      {
        src: "/work/tt-fest/tt-fest-etkinlik-filmi.mp4",
        poster: "/work/tt-fest/tt-fest-etkinlik-filmi.webp",
        title: "TT Fest etkinlik ve festival filmi",
      },
    ],
  },
  {
    index: "17",
    slug: "kozalaklar-oyun-atolyesi",
    name: "Kozalaklar Ormanda",
    category: "Eğitim · Çocuk Atölyesi",
    summary:
      "Çocukların keşfetme, hareket etme ve birlikte öğrenme deneyimini sıcak, samimi ve hareketli içeriklerle anlattık.",
    services: ["Atölye çekimi", "Sosyal medya içeriği", "Fotoğraf & video"],
    logoAlt: "Kozalaklar Ormanda Oyun Atölyesi logosu",
    logoShape: "wide",
    logoTreatment: "light",
    panel: "dark",
    media: [
      {
        src: "/work/kozalaklar-ormanda/tirmanis-atolyesi.mp4",
        poster: "/work/kozalaklar-ormanda/tirmanis-atolyesi.webp",
        title: "Tırmanış atölyesi",
      },
      {
        src: "/work/kozalaklar-ormanda/yeni-yil-duyusal-oyun.mp4",
        poster: "/work/kozalaklar-ormanda/yeni-yil-duyusal-oyun.webp",
        title: "Yeni yıl duyusal oyun etkinliği",
      },
      {
        src: "/work/kozalaklar-ormanda/yeni-yil-kar-etkinligi.mp4",
        poster: "/work/kozalaklar-ormanda/yeni-yil-kar-etkinligi.webp",
        title: "Yeni yıl kar etkinliği",
      },
    ],
  },
];

export const portfolioProjectBySlug = Object.fromEntries(
  portfolioProjects.map((project) => [project.slug, project])
) as Record<string, PortfolioProject>;
