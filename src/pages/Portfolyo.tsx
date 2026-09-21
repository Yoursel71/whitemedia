import { Link } from "react-router-dom";
import {
  Kayi1461Logo,
  FlowersDugunSalonuLogo,
  KozalaklarAtolyeLogo,
} from "@/components/Logos";

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
            {/* Medicalpark — sağlık */}
            <Link className="exhibit exhibit--wide reveal" to="/iletisim">
              <span className="exhibit__no">EX. 01</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <img className="brand-logo brand-logo--wide brand-logo--light" src="/logos/medicalpark.webp" alt="Medical Park logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Medicalpark</span>
                <span className="exhibit__tag">Sağlık · Sosyal Medya</span>
              </div>
            </Link>

            {/* Yamanlar Oto Ekspertiz */}
            <Link className="exhibit reveal" to="/iletisim">
              <span className="exhibit__no">EX. 02</span>
              <div className="exhibit__media brand-panel brand-panel--light">
                <img className="brand-logo brand-logo--wide brand-logo--dark" src="/logos/yamanlar-oto-ekspertiz.webp" alt="Yamanlar Bağımsız Oto Ekspertiz logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Yamanlar Oto Ekspertiz</span>
                <span className="exhibit__tag">Oto Ekspertiz · Reklam</span>
              </div>
            </Link>

            {/* Trabzon Üniversitesi */}
            <Link className="exhibit reveal" data-d="1" to="/iletisim">
              <span className="exhibit__no">EX. 03</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <img className="brand-logo brand-logo--wide brand-logo--light" src="/logos/trabzon-universitesi.png" alt="Trabzon Üniversitesi logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Trabzon Üniversitesi</span>
                <span className="exhibit__tag">Eğitim · İçerik</span>
              </div>
            </Link>

            {/* Maziden Atiye Puruthana */}
            <Link className="exhibit reveal" to="/iletisim">
              <span className="exhibit__no">EX. 04</span>
              <div className="exhibit__media brand-panel brand-panel--light">
                <img className="brand-logo brand-logo--square brand-logo--grayscale" src="/logos/maziden-atiye-puruthana-v2.png" alt="Maziden Atiye Puruthana logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Maziden Atiye Puruthana</span>
                <span className="exhibit__tag">Marka · Sosyal Medya</span>
              </div>
            </Link>

            {/* Gürsoy İnşaat */}
            <Link className="exhibit reveal" data-d="1" to="/iletisim">
              <span className="exhibit__no">EX. 05</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <img className="brand-logo brand-logo--wide brand-logo--light" src="/logos/gursoy-insaat.png" alt="Gürsoy İnşaat logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Gürsoy İnşaat</span>
                <span className="exhibit__tag">İnşaat · Web & Reklam</span>
              </div>
            </Link>

            {/* Pesent Restaurant */}
            <Link className="exhibit exhibit--wide reveal" to="/iletisim">
              <span className="exhibit__no">EX. 06</span>
              <div className="exhibit__media brand-panel brand-panel--light">
                <img className="brand-logo brand-logo--wide brand-logo--dark" src="/logos/pesent-restaurant.png" alt="Pesent Restaurant logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Pesent Restaurant</span>
                <span className="exhibit__tag">Restoran · Prodüksiyon</span>
              </div>
            </Link>

            {/* Depaul Cafe&Restaurant */}
            <Link className="exhibit reveal" to="/iletisim">
              <span className="exhibit__no">EX. 07</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <img className="brand-logo brand-logo--wide brand-logo--light" src="/logos/depaul.svg" alt="Depaul Cafe & Restaurant logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Depaul Cafe&Restaurant</span>
                <span className="exhibit__tag">Kafe · Restoran</span>
              </div>
            </Link>

            {/* The Vera Cafe & Restaurant */}
            <Link className="exhibit reveal" data-d="1" to="/iletisim">
              <span className="exhibit__no">EX. 08</span>
              <div className="exhibit__media brand-panel brand-panel--light">
                <img className="brand-logo brand-logo--square brand-logo--dark" src="/logos/the-vera.png" alt="The Vera Cafe & Restaurant logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">The Vera Cafe & Restaurant</span>
                <span className="exhibit__tag">Kafe · Restoran</span>
              </div>
            </Link>

            {/* DK gayrimenkul */}
            <Link className="exhibit exhibit--wide reveal" to="/iletisim">
              <span className="exhibit__no">EX. 09</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <img className="brand-logo brand-logo--square brand-logo--light" src="/logos/dk-gayrimenkul.png" alt="DK Gayrimenkul logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">DK Gayrimenkul</span>
                <span className="exhibit__tag">Gayrimenkul · Danışmanlık</span>
              </div>
            </Link>

            {/* Modatepe Resort */}
            <Link className="exhibit reveal" to="/iletisim">
              <span className="exhibit__no">EX. 10</span>
              <div className="exhibit__media brand-panel brand-panel--light">
                <img className="brand-logo brand-logo--square brand-logo--dark" src="/logos/modatepe-resort.png" alt="Modatepe Resort logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Modatepe Resort</span>
                <span className="exhibit__tag">Otel · Turizm</span>
              </div>
            </Link>

            {/* Kardeşler oto lastik */}
            <Link className="exhibit reveal" data-d="1" to="/iletisim">
              <span className="exhibit__no">EX. 11</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <img className="brand-logo brand-logo--square brand-logo--light" src="/logos/kardesler-oto-lastik.png" alt="Kardeşler Oto Lastik logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Kardeşler Oto Lastik</span>
                <span className="exhibit__tag">Otomotiv · Hizmet</span>
              </div>
            </Link>

            {/* Sancak Turizm */}
            <Link className="exhibit exhibit--wide reveal" to="/iletisim">
              <span className="exhibit__no">EX. 12</span>
              <div className="exhibit__media brand-panel brand-panel--light">
                <img className="brand-logo brand-logo--wide brand-logo--dark" src="/logos/sancak-turizm-v2.png" alt="Sancak Turizm logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Sancak Turizm</span>
                <span className="exhibit__tag">Turizm · Seyahat</span>
              </div>
            </Link>

            {/* Kayı 1461 Turizm */}
            <Link className="exhibit reveal" to="/iletisim">
              <span className="exhibit__no">EX. 13</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <Kayi1461Logo className="brand-logo brand-logo--wide" aria-label="Kayı 1461 Turizm logosu" role="img" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Kayı 1461 Turizm</span>
                <span className="exhibit__tag">Turizm · Acente</span>
              </div>
            </Link>

            {/* Flowers düğün salonu */}
            <Link className="exhibit reveal" data-d="1" to="/iletisim">
              <span className="exhibit__no">EX. 14</span>
              <div className="exhibit__media brand-panel brand-panel--light">
                <FlowersDugunSalonuLogo className="brand-logo brand-logo--wide" aria-label="Flowers Düğün Salonu logosu" role="img" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Flowers Düğün Salonu</span>
                <span className="exhibit__tag">Organizasyon · Etkinlik</span>
              </div>
            </Link>

            {/* Maçka bungalov */}
            <Link className="exhibit exhibit--wide reveal" to="/iletisim">
              <span className="exhibit__no">EX. 15</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <img className="brand-logo brand-logo--square brand-logo--light" src="/logos/macka-bungalov.png" alt="Maçka Bungalov logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Maçka Bungalov</span>
                <span className="exhibit__tag">Konaklama · Doğa Turizmi</span>
              </div>
            </Link>

            {/* TT Fest */}
            <Link className="exhibit reveal" to="/iletisim">
              <span className="exhibit__no">EX. 16</span>
              <div className="exhibit__media brand-panel brand-panel--light">
                <img className="brand-logo brand-logo--square brand-logo--dark" src="/logos/tt-fest.png" alt="TT Fest logosu" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">TT Fest</span>
                <span className="exhibit__tag">Etkinlik · Festival</span>
              </div>
            </Link>

            {/* Kozalaklar ormanda oyun atölyesi */}
            <Link className="exhibit reveal" data-d="1" to="/iletisim">
              <span className="exhibit__no">EX. 17</span>
              <div className="exhibit__media brand-panel brand-panel--dark">
                <KozalaklarAtolyeLogo className="brand-logo brand-logo--wide" aria-label="Kozalaklar Oyun Atölyesi logosu" role="img" />
              </div>
              <div className="exhibit__bar">
                <span className="exhibit__name">Kozalaklar Oyun Atölyesi</span>
                <span className="exhibit__tag">Eğitim · Çocuk Atölyesi</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* İŞ BİRLİĞİ YAPTIĞIMIZ ÜNLÜ İSİMLER */}
      <section className="section" style={{ paddingTop: 60, paddingBottom: 60, backgroundColor: "#f4f4f2", color: "#0a0a0a" }}>
        <div className="wrap">
          <p className="kicker reveal">Kollaborasyonlar</p>
          <h2 className="display reveal" data-d="1" style={{ marginBottom: 40 }}>
            İş birliği yaptığımız
            <br />
            ünlü isimler.
          </h2>
          
          <div className="work collab-grid">
            <a href="https://instagram.com/erdemsanlii" target="_blank" rel="noreferrer" className="exhibit reveal collab-card">
              <img className="collab-card__image" src="/logos/erdem-sanli.jpg" alt="Erdem Şanlı" />
              <h3 className="collab-card__title">Erdem Şanlı</h3>
              <p className="collab-card__handle">@erdemsanlii</p>
            </a>

            <a href="https://instagram.com/kadmfutbol" target="_blank" rel="noreferrer" className="exhibit reveal collab-card" data-d="1">
              <img className="collab-card__image" src="/logos/kadim-futbol.jpg" alt="Kadim Futbol logosu" />
              <h3 className="collab-card__title">Kadim Futbol</h3>
              <p className="collab-card__handle">@kadmfutbol</p>
            </a>
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
