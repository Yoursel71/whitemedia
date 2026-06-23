import { Link } from "react-router-dom";

export default function Portfolyo() {
  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow reveal in">Portfolyo</p>
          <h1 className="display reveal in" data-d="1">
            İşler
            <br />
            konuşsun.
          </h1>
          <p className="reveal" data-d="2">
            Beğeniden çok sonuç peşindeyiz. Birlikte çalıştığımız markalar ve
            geride bıraktığımız izler.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="work">
            {/* Medicalpark — sağlık: medikal artı + EKG nabız */}
            <Link className="exhibit exhibit--wide reveal" to="/iletisim">
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
            <Link className="exhibit reveal" to="/iletisim">
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
            <Link className="exhibit reveal" data-d="1" to="/iletisim">
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

            {/* Bayburt Puruthana — kemerli bina / hane amblemi */}
            <Link className="exhibit reveal" to="/iletisim">
              <span className="exhibit__no">EX. 04</span>
              <div className="exhibit__media">
                <svg viewBox="0 0 400 300">
                  <rect width="400" height="300" fill="#f4f4f2" />
                  <g fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinejoin="round">
                    <path d="M104,120 L200,64 L296,120" />
                    <rect x="124" y="120" width="152" height="120" />
                    <path d="M170,240 V178 a30,30 0 0 1 60,0 V240" />
                    <line x1="116" y1="240" x2="284" y2="240" />
                  </g>
                </svg>
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Bayburt Puruthana</span>
                <span className="exhibit__tag">Marka · Sosyal Medya</span>
              </div>
            </Link>

            {/* Gürsoy İnşaat — kule vinç */}
            <Link className="exhibit reveal" data-d="1" to="/iletisim">
              <span className="exhibit__no">EX. 05</span>
              <div className="exhibit__media">
                <svg viewBox="0 0 400 300">
                  <rect width="400" height="300" fill="#0a0a0a" />
                  <g fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round">
                    <line x1="150" y1="70" x2="150" y2="244" />
                    <path d="M110,244 H190" />
                    <line x1="108" y1="70" x2="300" y2="70" />
                    <line x1="108" y1="70" x2="150" y2="112" />
                    <line x1="150" y1="92" x2="270" y2="70" />
                    <line x1="262" y1="70" x2="262" y2="118" />
                    <rect x="247" y="118" width="30" height="20" />
                  </g>
                </svg>
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Gürsoy İnşaat</span>
                <span className="exhibit__tag">İnşaat · Web & Reklam</span>
              </div>
            </Link>

            {/* Pessent Restorant — çatal, tabak, bıçak */}
            <Link className="exhibit exhibit--wide reveal" to="/iletisim">
              <span className="exhibit__no">EX. 06</span>
              <div className="exhibit__media">
                <svg viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid slice">
                  <rect width="1200" height="360" fill="#f4f4f2" />
                  <g fill="none" stroke="#0a0a0a" strokeWidth="3">
                    <circle cx="600" cy="180" r="92" />
                    <circle cx="600" cy="180" r="60" />
                  </g>
                  <g stroke="#0a0a0a" strokeWidth="3" fill="none" strokeLinecap="round">
                    <line x1="430" y1="252" x2="430" y2="150" />
                    <line x1="414" y1="108" x2="414" y2="150" />
                    <line x1="430" y1="108" x2="430" y2="150" />
                    <line x1="446" y1="108" x2="446" y2="150" />
                    <path d="M414,150 H446" />
                  </g>
                  <g stroke="#0a0a0a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="770" y1="252" x2="770" y2="176" />
                    <path d="M762,176 L762,122 C762,112 778,112 778,122 L778,176 Z" />
                  </g>
                </svg>
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Pessent Restorant</span>
                <span className="exhibit__tag">Restoran · Prodüksiyon</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="wrap">
          <p className="kicker reveal">Sıradaki sen ol</p>
          <h2 className="display cta-title reveal" data-d="1">
            Markanı
            <br />
            buraya koyalım.
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
