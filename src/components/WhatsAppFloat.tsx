import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp üzerinden White Media'ya hızlıca yaz"
    >
      <span className="whatsapp-float__icon icon" aria-hidden="true">
        chat
      </span>
      <span className="whatsapp-float__copy">
        <strong>WhatsApp</strong>
        <small>Hızlı iletişim</small>
      </span>
      <span className="whatsapp-float__arrow icon" aria-hidden="true">
        north_east
      </span>
    </a>
  );
}
