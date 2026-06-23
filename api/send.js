// WhiteMedia — contact form handler (Vercel serverless function)
// Sends the İletişim form via the Resend API. No SDK needed (uses global fetch, Node 18+).
// Required env: RESEND_API_KEY. Optional: CONTACT_TO, CONTACT_FROM.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Yöntem desteklenmiyor." });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    const clean = (v) => String(v == null ? "" : v).trim();
    const name = clean(body.name);
    const email = clean(body.email);
    const brand = clean(body.brand);
    const service = clean(body.service);
    const budget = clean(body.budget);
    const message = clean(body.message);
    const website = clean(body.website); // honeypot

    // Bot trap: real users never fill this hidden field.
    if (website) return res.status(200).json({ ok: true });

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk || !message) {
      return res.status(400).json({ ok: false, error: "Lütfen ad, geçerli e-posta ve mesaj gir." });
    }
    if (message.length > 5000 || name.length > 200) {
      return res.status(400).json({ ok: false, error: "Form çok uzun." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY missing");
      return res.status(500).json({ ok: false, error: "Sunucu yapılandırması eksik." });
    }

    const TO = process.env.CONTACT_TO || "trwhitemedia@gmail.com";
    const FROM = process.env.CONTACT_FROM || "WhiteMedia <onboarding@resend.dev>";

    const esc = (s) =>
      s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;color:#0b0b0b;line-height:1.6">
        <h2 style="margin:0 0 16px;font-weight:700">Yeni iletişim formu</h2>
        <p style="margin:4px 0"><strong>Ad:</strong> ${esc(name)}</p>
        <p style="margin:4px 0"><strong>E-posta:</strong> ${esc(email)}</p>
        <p style="margin:4px 0"><strong>Şirket / Marka:</strong> ${esc(brand) || "—"}</p>
        <p style="margin:4px 0"><strong>Hizmet:</strong> ${esc(service) || "—"}</p>
        <p style="margin:4px 0"><strong>Bütçe:</strong> ${esc(budget) || "—"}</p>
        <p style="margin:12px 0 4px"><strong>Mesaj:</strong></p>
        <p style="margin:0;white-space:pre-wrap">${esc(message)}</p>
      </div>`;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: service ? `İletişim: ${service}` : `WhiteMedia — ${name} mesaj gönderdi`,
        html,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error("Resend error:", r.status, detail);
      return res.status(502).json({ ok: false, error: "E-posta gönderilemedi." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Beklenmeyen bir hata oluştu." });
  }
}
