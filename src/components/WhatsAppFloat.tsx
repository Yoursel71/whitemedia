import { ArrowUpRight, MessageCircle } from "lucide-react";
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
      <span className="whatsapp-float__icon" aria-hidden="true">
        <MessageCircle size={20} />
      </span>
      <span className="whatsapp-float__copy">
        <strong>WhatsApp</strong>
        <small>Hızlı iletişim</small>
      </span>
      <ArrowUpRight
        className="whatsapp-float__arrow"
        size={16}
        aria-hidden="true"
      />
    </a>
  );
}
