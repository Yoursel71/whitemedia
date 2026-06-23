import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { 
  MedicalparkLogo, 
  YamanlarLogo, 
  TrabzonLogo,
  ModatepeResortLogo
} from "@/components/Logos";

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
            {/* Medicalpark — sağlık */}
            <Link className="exhibit exhibit--wide reveal" to="/portfolyo">
              <span className="exhibit__no">EX. 01</span>
              <div className="exhibit__media" style={{ backgroundColor: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                <MedicalparkLogo style={{ width: "auto", height: "auto", maxWidth: "60%", maxHeight: "55%", color: "#ffffff" }} />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Medicalpark</span>
                <span className="exhibit__tag">Sağlık · Sosyal Medya</span>
              </div>
            </Link>

            {/* Yamanlar Oto Ekspertiz */}
            <Link className="exhibit reveal" to="/portfolyo">
              <span className="exhibit__no">EX. 02</span>
              <div className="exhibit__media" style={{ backgroundColor: "#f4f4f2", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                <YamanlarLogo style={{ width: "auto", height: "auto", maxWidth: "60%", maxHeight: "55%", color: "#0a0a0a" }} />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Yamanlar Oto Ekspertiz</span>
                <span className="exhibit__tag">Oto Ekspertiz · Reklam</span>
              </div>
            </Link>

            {/* Trabzon Üniversitesi */}
            <Link className="exhibit reveal" data-d="1" to="/portfolyo">
              <span className="exhibit__no">EX. 03</span>
              <div className="exhibit__media" style={{ backgroundColor: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                <TrabzonLogo style={{ width: "auto", height: "auto", maxWidth: "60%", maxHeight: "55%", color: "#ffffff" }} />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Trabzon Üniversitesi</span>
                <span className="exhibit__tag">Eğitim · İçerik</span>
              </div>
            </Link>

            {/* Modatepe Resort */}
            <Link className="exhibit exhibit--wide reveal" to="/portfolyo">
              <span className="exhibit__no">EX. 04</span>
              <div className="exhibit__media" style={{ backgroundColor: "#f4f4f2", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                <ModatepeResortLogo style={{ width: "auto", height: "auto", maxWidth: "60%", maxHeight: "55%", color: "#0a0a0a" }} />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Modatepe Resort</span>
                <span className="exhibit__tag">Otel · Turizm</span>
              </div>
            </Link>
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
