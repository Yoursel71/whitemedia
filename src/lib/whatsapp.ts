export const WHATSAPP_NUMBER = "905367864959";
export const WHATSAPP_DISPLAY_NUMBER = "+90 536 786 49 59";

export const WHATSAPP_MESSAGE =
  "Merhaba White Media, web siteniz üzerinden ulaşıyorum. Markam için hizmetleriniz hakkında bilgi ve teklif almak istiyorum. Uygun olduğunuzda proje detaylarını paylaşabilir miyim?";

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
