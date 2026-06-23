import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div>
            <div className="foot__brand">WhiteMedia</div>
            <p
              style={{
                color: "rgba(255,255,255,.6)",
                maxWidth: 340,
                marginTop: 22,
              }}
            >
              Beyaz tuval, dolu sahne. Dijital ajans.
            </p>
          </div>
          <div className="foot__col">
            <h4>Site</h4>
            <Link className="ul" to="/">
              Ana Sayfa
            </Link>
            <Link className="ul" to="/hizmetler">
              Hizmetler
            </Link>
            <Link className="ul" to="/portfolyo">
              Portfolyo
            </Link>
            <Link className="ul" to="/iletisim">
              İletişim
            </Link>
          </div>
          <div className="foot__col">
            <h4>Sosyal</h4>
            <a className="ul" href="#">
              Instagram
            </a>
            <a className="ul" href="#">
              LinkedIn
            </a>
            <a className="ul" href="#">
              TikTok
            </a>
            <a className="ul" href="#">
              YouTube
            </a>
          </div>
        </div>
        <div className="foot__bottom">
          <span>© {new Date().getFullYear()} WhiteMedia Dijital Ajans</span>
          <span>Türkiye</span>
        </div>
      </div>
    </footer>
  );
}
