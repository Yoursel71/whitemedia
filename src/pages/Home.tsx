import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

// Per-line slide-in for the hero title (staggered by the h1 in hero-3)
const TITLE_LINE = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.9 },
  },
};

// Unsplash showcase images (verified-format CDN URLs from the demo)
const SHOWCASE_IMAGES = [
  "https://images.unsplash.com/photo-1756312148347-611b60723c7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1757865579201-693dd2080c73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1756786605218-28f7dd95a493?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzh8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1757519740947-eef07a74c4ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1757263005786-43d955f07fb1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzB8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1757207445614-d1e12b8f753e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODZ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1757269746970-dc477517268f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1755119902709-a53513bcbedc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDF8fHxlbnwwfHx8fHw%3D",
];

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
        tagline="240+ marka · İstanbul merkezli dijital ajans"
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
        images={SHOWCASE_IMAGES}
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

      {/* STATS */}
      <section className="section section--fill">
        <div className="wrap">
          <p className="kicker reveal">Rakamlarla</p>
          <div className="stats reveal" style={{ marginTop: 30 }}>
            <div className="stat">
              <div className="stat__num">
                <span data-count="240" data-suffix="+">
                  0
                </span>
              </div>
              <div className="stat__label">YÖNETİLEN MARKA</div>
            </div>
            <div className="stat">
              <div className="stat__num">
                <span data-count="84" data-suffix="M">
                  0
                </span>
              </div>
              <div className="stat__label">AYLIK GÖRÜNTÜLENME</div>
            </div>
            <div className="stat">
              <div className="stat__num">
                <span data-count="320" data-suffix="%">
                  0
                </span>
              </div>
              <div className="stat__label">ORT. BÜYÜME</div>
            </div>
            <div className="stat">
              <div className="stat__num">
                <span data-count="52">0</span>
              </div>
              <div className="stat__label">SEKTÖR ÖDÜLÜ</div>
            </div>
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
            {/* Medicalpark — sağlık: medikal artı + EKG nabız */}
            <Link className="exhibit exhibit--wide reveal" to="/portfolyo">
              <span className="exhibit__no">EX. 01</span>
              <div className="exhibit__media">
                <svg viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid slice">
                  <rect width="1200" height="360" fill="#0a0a0a" />
                  <g fill="#fff">
                    <rect x="150" y="110" width="60" height="140" rx="8" />
                    <rect x="110" y="150" width="140" height="60" rx="8" />
                  </g>
                  <path
                    d="M300,190 H520 l30,-80 l40,150 l35,-120 l25,50 H900 l40,-60 l40,110 l30,-50 H1200"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Medicalpark</span>
                <span className="exhibit__tag">Sağlık · Sosyal Medya</span>
              </div>
            </Link>

            {/* Yamanlar Oto Ekspertiz — diagnostik gösterge saati */}
            <Link className="exhibit reveal" to="/portfolyo">
              <span className="exhibit__no">EX. 02</span>
              <div className="exhibit__media">
                <svg viewBox="0 0 400 300">
                  <rect width="400" height="300" fill="#f4f4f2" />
                  <g fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round">
                    <path d="M110,205 A95,95 0 0 1 290,205" />
                    <line x1="122" y1="196" x2="138" y2="188" />
                    <line x1="200" y1="110" x2="200" y2="128" />
                    <line x1="278" y1="196" x2="262" y2="188" />
                  </g>
                  <line x1="200" y1="205" x2="248" y2="158" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="200" cy="205" r="9" fill="#0a0a0a" />
                </svg>
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Yamanlar Oto Ekspertiz</span>
                <span className="exhibit__tag">Oto Ekspertiz · Reklam</span>
              </div>
            </Link>

            {/* Trabzon Üniversitesi — mezuniyet kepi */}
            <Link className="exhibit reveal" data-d="1" to="/portfolyo">
              <span className="exhibit__no">EX. 03</span>
              <div className="exhibit__media">
                <svg viewBox="0 0 400 300">
                  <rect width="400" height="300" fill="#0a0a0a" />
                  <path d="M200,108 L322,158 L200,208 L78,158 Z" fill="#fff" />
                  <path
                    d="M128,178 V214 a72,26 0 0 0 144,0 V178"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line x1="322" y1="158" x2="322" y2="206" stroke="#fff" strokeWidth="2" />
                  <circle cx="322" cy="210" r="7" fill="#fff" />
                </svg>
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Trabzon Üniversitesi</span>
                <span className="exhibit__tag">Eğitim · İçerik</span>
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
