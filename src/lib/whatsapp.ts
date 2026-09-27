import { PROJECT_INQUIRY_MESSAGE } from "@/lib/contact";

export const WHATSAPP_NUMBER = "905367864959";
export const WHATSAPP_DISPLAY_NUMBER = "+90 536 786 49 59";

export const WHATSAPP_MESSAGE = PROJECT_INQUIRY_MESSAGE;

export function getWhatsAppUrl() {
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const endpoint = isMobile
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";

  return `${endpoint}?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
}
