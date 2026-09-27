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
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_USERNAME}`;
export const INSTAGRAM_APP_DM_URL = `instagram://direct/new?username=${INSTAGRAM_USERNAME}`;
export const INSTAGRAM_ANDROID_DM_URL = `intent://direct/new?username=${INSTAGRAM_USERNAME}#Intent;scheme=instagram;package=com.instagram.android;end`;

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
