import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Ana Sayfa", idx: "01" },
  { to: "/hizmetler", label: "Hizmetler", idx: "02" },
  { to: "/portfolyo", label: "Portfolyo", idx: "03" },
  { to: "/iletisim", label: "İletişim", idx: "04" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close sheet on route change + lock body scroll while open
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="nav">
        <div className="wrap nav__inner">
          <Link className="brand" to="/">
            <span className="brand__mark" />
            WhiteMedia
          </Link>
          <div className="nav__links">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link ul"
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="nav__right">
            <Link className="btn nav__cta" to="/iletisim" data-magnetic>
              <span>Teklif Al</span>
            </Link>
            <button
              className="nav__burger"
              aria-label="Menü"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="icon" style={{ fontSize: 30 }}>
                {open ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
        <span className="nav__progress" />
      </nav>

      <div
        className={open ? "sheet open" : "sheet"}
        role="dialog"
        aria-label="Menü"
      >
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to}>
            <span>{l.label}</span>
            <span className="idx">{l.idx}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
