import { Link } from "react-router-dom";

const SERVICES = [
  { n: "01", name: "Sosyal Medya Yönetimi", desc: "Strateji, içerik takvimi, yayın, raporlama." },
  { n: "02", name: "İçerik Üretimi", desc: "Reels, fotoğraf, motion grafik, metin." },
  { n: "03", name: "Performans Reklamcılığı", desc: "Meta, Google, TikTok — ölçülebilir dönüşüm." },
  { n: "04", name: "Marka Stratejisi", desc: "Konumlandırma, ton, görsel kimlik." },
  { n: "05", name: "Influencer Pazarlama", desc: "Doğru isim, gerçek etkileşim, net sözleşme." },
  { n: "06", name: "Topluluk Yönetimi", desc: "7/24 yanıt, kriz yönetimi, sadık kitle." },
];

const PROCESS = [
  { n: "01", title: "Dinleme", text: "Markanı, kitleni ve hedefini anlıyoruz. Veriyle başlıyoruz, varsayımla değil." },
  { n: "02", title: "Strateji", text: "Mesaj, kanal ve takvim. Üzerinde anlaştığımız tek bir yön belirliyoruz." },
  { n: "03", title: "Üretim", text: "İçeriği üretiyor, yayınlıyor ve toplulukla konuşuyoruz." },
  { n: "04", title: "Ölçüm", text: "Net rapor, açık öğreniler. Her döngüde daha iyiye optimize ediyoruz." },
];

export default function Hizmetler() {
  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow reveal in">Hizmetler</p>
          <h1 className="display reveal in" data-d="1">
            Bir ekip,
            <br />
            tüm kanallar.
          </h1>
          <p className="reveal" data-d="2">
            Stratejiyle prodüksiyonu aynı çatı altında topluyoruz. Böylece fikir
            ile yayın arasında ne zaman kayboluyor, ne de anlam.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="srv" style={{ borderTop: 0 }}>
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

      {/* PROCESS */}
      <section className="section section--fill">
        <div className="wrap">
          <p className="kicker reveal">Nasıl çalışırız</p>
          <h2 className="display sec-title reveal" data-d="1">
            Dört adım,
            <br />
            sıfır sürpriz.
          </h2>

          <div
            style={{
              display: "grid",
              gap: 1,
              background: "var(--line)",
              border: "1px solid var(--line)",
              marginTop: 52,
            }}
          >
            {PROCESS.map((p) => (
              <div
                className="reveal"
                key={p.n}
                style={{
                  background: "var(--mist)",
                  padding: 34,
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: 18,
                  alignItems: "start",
                }}
              >
                <span className="mono" style={{ fontSize: 18 }}>
                  {p.n}
                </span>
                <div>
                  <h3 className="display" style={{ fontSize: 24, margin: "0 0 8px" }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "var(--muted)", margin: 0, maxWidth: 560 }}>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="wrap">
          <p className="kicker reveal">Başlayalım</p>
          <h2 className="display cta-title reveal" data-d="1">
            Sana uygun
            <br />
            paketi kuralım.
          </h2>
          <div className="reveal" data-d="2" style={{ marginTop: 42 }}>
            <Link className="btn" to="/iletisim" data-magnetic>
              <span>Teklif al</span>
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
