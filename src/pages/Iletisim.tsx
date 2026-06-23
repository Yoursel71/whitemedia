import { FormEvent, useState } from "react";

const EMPTY = {
  name: "",
  email: "",
  brand: "",
  service: "",
  budget: "",
  message: "",
  website: "", // honeypot
};

const SERVICES = [
  "Sosyal Medya Yönetimi",
  "Fotoğraf & Video Prodüksiyon",
  "Drone Çekimi",
  "Google Ads Yönetimi",
  "Meta Business Reklam Yönetimi",
  "Web Sitesi Hizmetleri",
  "Diğer",
];

const BUDGETS = [
  "₺10.000 altı",
  "₺10.000 – ₺25.000",
  "₺25.000 – ₺50.000",
  "₺50.000 – ₺100.000",
  "₺100.000+",
];

export default function Iletisim() {
  const [form, setForm] = useState(EMPTY);
  const [note, setNote] = useState("");
  const [noteInk, setNoteInk] = useState(false); // true = --ink, false = --muted
  const [sending, setSending] = useState(false);

  const set =
    (key: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name.trim() || !emailOk || !form.service || !form.message.trim()) {
      setNoteInk(true);
      setNote("Lütfen ad, e-posta, hizmet ve mesaj alanlarını doldur.");
      return;
    }

    setNoteInk(false);
    setNote("Gönderiliyor…");
    setSending(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const out = await res.json().catch(() => ({}));
      setNoteInk(true);
      if (res.ok && out && out.ok) {
        const first = form.name.trim().split(" ")[0] || "";
        setNote(
          `Teşekkürler${first ? " " + first : ""}! Mesajın bize ulaştı, 1 iş günü içinde döneceğiz.`
        );
        setForm(EMPTY);
      } else {
        setNote(out && out.error ? out.error : "Bir şeyler ters gitti. Lütfen tekrar dene.");
      }
    } catch {
      setNoteInk(true);
      setNote("Bağlantı hatası. Lütfen daha sonra tekrar dene.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow reveal in">İletişim</p>
          <h1
            className="display reveal in"
            data-d="1"
            style={{ fontSize: "clamp(48px,11vw,150px)", marginTop: 12 }}
          >
            Yeni bir
            <br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>projeye</span>{" "}
            başlayalım.
          </h1>
          <p
            className="reveal"
            data-d="2"
            style={{ maxWidth: 560, marginTop: 26, fontSize: 17, color: "var(--ink-72)" }}
          >
            Dijital varlığını güçlendirmek ya da markanı bir sonraki seviyeye
            taşımak için buradayız. İhtiyaçlarını dinlemek için
            sabırsızlanıyoruz.
          </p>
        </div>
      </header>

      <section className="section" id="form" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="contact-grid">
            {/* INFO */}
            <div className="reveal">
              <div className="info-card">
                <div className="info-card__icon">
                  <span className="icon" style={{ fontSize: 22 }}>
                    location_on
                  </span>
                </div>
                <h3>Konum</h3>
                <p className="info-card__k">Trabzon, Türkiye</p>
              </div>
              <div className="info-card">
                <div className="info-card__icon">
                  <span className="icon" style={{ fontSize: 22 }}>
                    mail
                  </span>
                </div>
                <h3>E-posta</h3>
                <p className="info-card__k">
                  <a
                    className="ul"
                    href="mailto:trwhitemedia@gmail.com"
                    style={{ color: "var(--ink)", fontWeight: 500 }}
                  >
                    trwhitemedia@gmail.com
                  </a>
                </p>
              </div>
              <div className="info-card">
                <div className="info-card__icon">
                  <span className="icon" style={{ fontSize: 22 }}>
                    call
                  </span>
                </div>
                <h3>Telefon</h3>
                <p className="info-card__k">
                  <a
                    className="ul"
                    href="tel:+905367864959"
                    style={{ color: "var(--ink)", fontWeight: 500 }}
                  >
                    +90 536 786 49 59
                  </a>
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="reveal" data-d="1">
              <form className="form-card" onSubmit={onSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Adınız Soyadınız</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Örn: Ayşe Yılmaz"
                      value={form.name}
                      onChange={set("name")}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Kurumsal E-posta</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ayse@sirketiniz.com"
                      value={form.email}
                      onChange={set("email")}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="brand">Şirket / Marka</label>
                  <input
                    id="brand"
                    name="brand"
                    type="text"
                    placeholder="Örn: Nova Kozmetik"
                    value={form.brand}
                    onChange={set("brand")}
                  />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="service">
                      Hangi konuda hizmet almak istiyorsunuz?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={set("service")}
                      required
                    >
                      <option value="" disabled>
                        Seçiniz…
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="budget">Bütçe aralığı</label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={set("budget")}
                      style={{ color: form.budget ? "var(--ink)" : "#c2c2bc" }}
                    >
                      <option value="" disabled>
                        Seçiniz…
                      </option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Projenden veya hedeflerinden kısaca bahset…"
                    value={form.message}
                    onChange={set("message")}
                    required
                  />
                </div>
                {/* honeypot: bots fill this, humans don't */}
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}
                >
                  <label htmlFor="website">Web sitesi (boş bırak)</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={set("website")}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                  <button className="btn" type="submit" data-magnetic disabled={sending}>
                    <span>Mesajı gönder</span>
                    <span className="icon" style={{ fontSize: 18 }}>
                      arrow_outward
                    </span>
                  </button>
                </div>
                <p
                  role="status"
                  style={{
                    margin: "18px 0 0",
                    fontSize: 14,
                    color: noteInk ? "var(--ink)" : "var(--muted)",
                    minHeight: 20,
                  }}
                >
                  {note}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
