import { PROJECT_INQUIRY_MESSAGE } from "@/lib/contact";

export const WHATSAPP_NUMBER = "905367864959";
export const WHATSAPP_DISPLAY_NUMBER = "+90 536 786 49 59";

export const WHATSAPP_MESSAGE = PROJECT_INQUIRY_MESSAGE;

export function getWhatsAppUrl() {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
}
