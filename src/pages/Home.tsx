import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import BrandMark from "@/components/BrandMark";
import PageMeta from "@/components/PageMeta";
import {
  portfolioProjectBySlug,
  portfolioProjects,
} from "@/data/portfolioProjects";
import { SERVICE_CATALOG } from "@/data/services";

// Per-line slide-in for the hero title (staggered by the h1 in hero-3)
const TITLE_LINE = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.9 },
  },
};

// Alternate sectors and visual styles so similar work does not cluster together.
const SHOWCASE_VIDEO_ORDER = [
  1, // sağlık
  14, // kafe
  8, // otomotiv / lokasyon
  10, // restoran prodüksiyonu
  12, // tatlı prodüksiyonu
  2, // geleneksel üretim
  7, // içecek prodüksiyonu
  15, // sağlık
  13, // pizza prodüksiyonu
  6, // turizm / drone
  5, // restoran deneyimi
  11, // gastronomi / manzara
  9, // otomotiv / ürün
  4, // mutfak prodüksiyonu
  3, // geleneksel üretim
  16, // restoran sunumu
] as const;

const SHOWCASE_VIDEOS = SHOWCASE_VIDEO_ORDER.map(
  (clip) => `/videos/clip-${clip}.mp4`
);

const TICKER = [
  { t: "Sosyal Medya", o: false },
  { t: "Prodüksiyon", o: true },
  { t: "Drone", o: false },
  { t: "Google Ads", o: true },
  { t: "Meta Ads", o: false },
  { t: "Web Sitesi", o: true },
];

const APPROACH = [
  {
    number: "01",
    title: "Markaya özel yön",
    text: "Her markayı aynı kalıba sokmadan sektörünü, hedefini ve kitlesini merkeze alırız.",
  },
  {
    number: "02",
    title: "Tek ekip, tek akış",
    text: "Strateji, çekim, kurgu ve reklam birbirinden kopmadan aynı yönde ilerler.",
  },
  {
    number: "03",
    title: "Yayından sonra da devam",
    text: "İçeriği yalnızca paylaşmayız; veriye bakar, sonraki üretimi geliştiririz.",
  },
];

const FEATURED_SLUGS = [
  "medicalpark",
  "trabzon-universitesi",
  "gursoy-insaat",
  "the-vera-cafe-restaurant",
];

const FEATURED_PROJECTS = FEATURED_SLUGS.map(
  (slug) => portfolioProjectBySlug[slug]
);

const OTHER_PROJECTS = portfolioProjects.filter(
  (project) => !FEATURED_SLUGS.includes(project.slug)
);

export default function Home() {
  return (
    <main>
      <PageMeta
        title="White Media | Sosyal Medya, Prodüksiyon ve Dijital Reklam"
        description="White Media; sosyal medya yönetimi, fotoğraf ve video prodüksiyon, drone çekimi, dijital reklam ve web hizmetleri sunan Trabzon merkezli dijital ajans."
        path="/"
      />
      <AnimatedMarqueeHero
        title={
          <>
            <motion.span variants={TITLE_LINE} className="inline-block">
              Sosyal medyada
            </motion.span>
            <br />
            <motion.span variants={TITLE_LINE} className="inline-block">
              markanı büyütüyoruz.
            </motion.span>
          </>
        }
        description="Strateji, içerik ve reklamı tek ekipte topluyoruz. Markanı kalabalıkta fark edilen, hatırlanan ve satan bir sahneye çeviriyoruz."
        ctaText="Teklif Al"
        ctaHref="/iletisim#form"
        videos={SHOWCASE_VIDEOS}
      />

      {/* TICKER */}
      <section style={{ padding: "46px 0" }}>
        <hr className="hairline" />
        <div className="marquee" aria-hidden="true" style={{ padding: "32px 0" }}>
          <div className="marquee__track">
            {[...TICKER, ...TICKER].map((item, i) => (
              <span key={i} style={{ display: "contents" }}>
                <span className="marquee__item">{item.t}</span>
                <span className="marquee__dot" />
              </span>
            ))}
          </div>
        </div>
        <hr className="hairline" />
      </section>

      {/* MANIFESTO */}
      <section className="section section--fill">
        <div className="wrap manifesto-grid">
          <div className="reveal">
            <p className="kicker">00 — Manifesto</p>
            <p className="manifesto">
              Markan beyaz bir tuval. Biz onu{" "}
              <span className="dim">boş bırakmıyoruz.</span>
            </p>
          </div>
          <div className="manifesto-aside reveal" data-d="1">
            <p>
              Beğeni saymıyoruz. Büyüme, dönüşüm ve sadık kitle peşindeyiz —
              veriyle başlar, içerikle büyütürüz.
            </p>
            <p>
              Strateji, prodüksiyon ve reklam aynı ekipte. Fikir ile yayın
              arasında kaybolan zaman da, anlam da yok.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <p className="kicker">Hizmetler</p>
              <h2 className="display sec-title">Ne yapıyoruz</h2>
            </div>
            <Link className="ul mono" to="/hizmetler" style={{ fontSize: 13 }}>
              TÜMÜ →
            </Link>
          </div>

          <div className="srv" style={{ marginTop: 52 }}>
            {SERVICE_CATALOG.map((s) => (
              <div className="srv__row reveal" key={s.number}>
                <span className="srv__num">{s.number}</span>
                <span className="srv__name">{s.name}</span>
                <span className="srv__desc">{s.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="approach-head">
            <div className="reveal">
              <p className="kicker">Çalışma yaklaşımımız</p>
              <h2 className="display sec-title">
                İyi iş,
                <br />
                iyi süreçle çıkar.
              </h2>
            </div>
            <p className="approach-head__copy reveal" data-d="1">
              İşin nasıl ilerlediğini baştan sona açık tutuyoruz: markayı
              dinleyen, üretimi birleştiren ve sonucu takip eden bir süreç.
            </p>
          </div>

          <div className="approach-grid">
            {APPROACH.map((item, index) => (
              <article
                className="approach-card reveal"
                data-d={String(index)}
                key={item.number}
              >
                <span className="approach-card__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITS */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <p className="kicker">Seçili İşler</p>
              <h2 className="display sec-title">Vitrin</h2>
            </div>
            <Link className="ul mono" to="/portfolyo" style={{ fontSize: 13 }}>
              PORTFOLYO →
            </Link>
          </div>

          <div className="work" style={{ marginTop: 52 }}>
            {FEATURED_PROJECTS.map((project, position) => {
              const isWide = position === 0 || position === FEATURED_PROJECTS.length - 1;

              return (
                <Link
                  className={`exhibit${isWide ? " exhibit--wide" : ""} reveal`}
                  data-d={position === 2 ? "1" : undefined}
                  key={project.slug}
                  to={`/portfolyo/${project.slug}`}
                >
                  <span className="exhibit__no">EX. {project.index}</span>
                  <div className={`exhibit__media brand-panel brand-panel--${project.panel}`}>
                    <BrandMark
                      project={project}
                      className={`brand-logo brand-logo--${project.logoShape}`}
                    />
                  </div>
                  <div className="exhibit__bar">
                    <span className="exhibit__name">{project.name}</span>
                    <span className="exhibit__tag">{project.category}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="brand-proof reveal">
            <div className="brand-proof__stat">
              <span className="brand-proof__eyebrow">Vitrinin devamı</span>
              <h3 className="brand-proof__title">Daha fazlası.</h3>
            </div>
            <p className="brand-proof__copy">
              Vitrindeki dört iş yalnızca seçki. Sağlıktan eğitime, otomotivden
              turizme uzanan farklı sektörlerde markalarla birlikte çalıştık.
            </p>
            <Link className="brand-proof__link" to="/portfolyo">
              TÜM MARKALARI GÖR <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="brand-rail reveal" data-d="1" aria-label="Birlikte çalıştığımız diğer markalar">
            <div className="brand-rail__track">
              {[0, 1].map((group) => (
                <div
                  className="brand-rail__group"
                  aria-hidden={group === 1 ? "true" : undefined}
                  key={group}
                >
                  {OTHER_PROJECTS.map((project) => (
                    <Link
                      className="brand-rail__item"
                      key={`${group}-${project.slug}`}
                      tabIndex={group === 1 ? -1 : undefined}
                      to={`/portfolyo/${project.slug}`}
                    >
                      <span className="brand-rail__name">{project.name}</span>
                      <span className="brand-rail__sector">
                        {project.category.split("·")[0].trim()}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="wrap">
          <p className="kicker reveal">Hadi başlayalım</p>
          <h2 className="display cta-title reveal" data-d="1">
            Tuvali birlikte
            <br />
            dolduralım.
          </h2>
          <div className="reveal" data-d="2" style={{ marginTop: 42 }}>
            <Link className="btn" to="/iletisim#form" data-magnetic>
              <span>Projeni anlat</span>
              <ArrowUpRight className="button-icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
