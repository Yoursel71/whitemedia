import { Link } from "react-router-dom";
import InstagramContactLink from "@/components/InstagramContactLink";
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div>
            <div className="foot__brand">White Media</div>
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
            <Link className="ul" to="/hakkimizda">
              Hakkımızda
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
            <InstagramContactLink
              className="ul"
              aria-label="Instagram'da White Media profilini aç"
            >
              Instagram
            </InstagramContactLink>
            <a
              className="ul"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <div className="foot__col">
            <h4>İletişim</h4>
            <a className="ul" href="mailto:trwhitemedia@gmail.com">
              trwhitemedia@gmail.com
            </a>
            <a
              className="ul"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
            >
              {WHATSAPP_DISPLAY_NUMBER}
            </a>
            <span className="foot__text">Trabzon, Türkiye</span>
          </div>
        </div>
        <div className="foot__bottom">
          <span>© {new Date().getFullYear()} White Media Dijital Ajans</span>
          <span>Türkiye</span>
        </div>
      </div>
    </footer>
  );
}
