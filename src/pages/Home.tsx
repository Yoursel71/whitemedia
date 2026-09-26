import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import BrandMark from "@/components/BrandMark";
import {
  portfolioProjectBySlug,
  portfolioProjects,
} from "@/data/portfolioProjects";

// Per-line slide-in for the hero title (staggered by the h1 in hero-3)
const TITLE_LINE = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.9 },
  },
};

// Showcase reels (web-optimized clips in public/videos) — all 16 sources
const SHOWCASE_VIDEOS = Array.from(
  { length: 16 },
  (_, i) => `/videos/clip-${i + 1}.mp4`
);

const TICKER = [
  { t: "Sosyal Medya", o: false },
  { t: "İçerik", o: true },
  { t: "Performans", o: false },
  { t: "Strateji", o: true },
  { t: "Influencer", o: false },
  { t: "Topluluk", o: true },
];

const SERVICES = [
  { n: "01", name: "Sosyal Medya Yönetimi", desc: "Strateji, içerik takvimi, yayın, topluluk." },
  { n: "02", name: "Fotoğraf & Video Prodüksiyon", desc: "Reels, tanıtım filmi, ürün çekimi, kurgu." },
  { n: "03", name: "Drone Çekimi", desc: "Havadan görüntü, mekan ve etkinlik çekimleri." },
  { n: "04", name: "Google Ads Yönetimi", desc: "Arama, görüntülü ve YouTube kampanyaları." },
  { n: "05", name: "Meta Business Reklam Yönetimi", desc: "Instagram & Facebook performans reklamları." },
  { n: "06", name: "Web Sitesi Hizmetleri", desc: "Tasarım, geliştirme, bakım ve hız optimizasyonu." },
];

const FEATURED_SLUGS = [
  "medicalpark",
  "trabzon-universitesi",
  "yamanlar-oto-ekspertiz",
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
        ctaHref="/iletisim"
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
            {SERVICES.map((s) => (
              <div className="srv__row reveal" key={s.n}>
                <span className="srv__num">{s.n}</span>
                <span className="srv__name">{s.name}</span>
                <span className="srv__desc">{s.desc}</span>
              </div>
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
              <span className="brand-proof__count">
                {String(portfolioProjects.length).padStart(2, "0")}
              </span>
              <span className="brand-proof__label">marka ile ürettik.</span>
            </div>
            <p className="brand-proof__copy">
              Vitrindeki dört iş yalnızca seçki. Sağlıktan eğitime, otomotivden
              turizme uzanan farklı sektörlerde markalarla birlikte çalıştık.
            </p>
            <Link className="brand-proof__link" to="/portfolyo">
              TÜM MARKALARI GÖR <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="brand-rail reveal" data-d="1" aria-label="Diğer çalıştığımız markalar">
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
            <Link className="btn" to="/iletisim" data-magnetic>
              <span>Projeni anlat</span>
              <span className="icon" style={{ fontSize: 18 }}>
                arrow_outward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
