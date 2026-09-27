export const PROJECT_INQUIRY_MESSAGE = [
  "Merhaba White Media,",
  "",
  "Markam / projem için hizmetleriniz hakkında bilgi ve teklif almak istiyorum.",
  "",
  "Ad Soyad:",
  "Marka / Şirket:",
  "İlgilendiğim hizmet:",
  "Proje detayları:",
  "",
  "İyi çalışmalar.",
].join("\n");

export const INSTAGRAM_USERNAME = "whitemedia_tr";
export const INSTAGRAM_PROFILE_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

export async function copyProjectInquiryMessage() {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(PROJECT_INQUIRY_MESSAGE);
    return true;
  } catch {
    return false;
  }
}
