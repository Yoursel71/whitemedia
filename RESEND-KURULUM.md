# WhiteMedia — İletişim formu (Resend) kurulumu

Form `/api/send` adresine POST atar; `api/send.js` Resend ile e-posta gönderir.
API anahtarı **sunucuda** durur, tarayıcıya hiç düşmez.

## 1. Resend hesabı
1. https://resend.com → kayıt ol.
2. **API Keys** → yeni anahtar oluştur (`re_...`).
3. (Önerilir) **Domains** → `whitemedia.com` ekle, DNS kayıtlarını doğrula.
   - Domaini doğrulayana kadar gönderici olarak `onboarding@resend.dev` kullan.

## 2. Ortam değişkenleri
`.env.example` dosyasını kopyala → `.env` yap, doldur:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO=merhaba@whitemedia.com
CONTACT_FROM=WhiteMedia <onboarding@resend.dev>
```

> Domain doğrulanınca `CONTACT_FROM` değerini kendi adresinle değiştir:
> `WhiteMedia <merhaba@whitemedia.com>`

## 3. Vercel'e deploy (önerilen yol)
`api/` klasörü Vercel'de otomatik serverless function olur.

```
npm i -g vercel      # bir kez
vercel               # ilk deploy + proje bağla
vercel --prod        # canlı
```

Değişkenleri Vercel'e ekle:
- Vercel Dashboard → Project → **Settings → Environment Variables**
- `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` üçünü de ekle → tekrar deploy.

## 4. Lokal test
`file://` ile açınca `/api/send` çalışmaz (sunucu yok). Test için:

```
vercel dev
```
→ http://localhost:3000/iletisim.html üzerinden formu dene.

## Notlar
- Spam koruması: gizli `company` (honeypot) alanı + sunucu tarafı doğrulama var.
- Başka host (Netlify/Cloudflare) kullanacaksan `api/send.js` mantığı aynı,
  sadece fonksiyon imzası değişir — söyle, uyarlayayım.
