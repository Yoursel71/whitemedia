# WhiteMedia — Dijital Ajans Web Sitesi

Monochrome (siyah/beyaz) editorial tasarımlı dijital ajans sitesi.
Vite + React 18 + TypeScript + Tailwind + shadcn yapısı.

## Stack
- **Vite 5** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS v3** — CSS değişkenleriyle shadcn token teması
- **shadcn yapısı** — `components.json`, `@/lib/utils` (`cn`), `@/components/ui`
- **framer-motion** — hero animasyonları
- **react-router-dom** — 4 sayfa client-side routing

## Renk teması
WhiteMedia monochrome paleti shadcn token'larına maplendi (`src/index.css`):

| Token | Değer | Renk |
| --- | --- | --- |
| `--background` | `0 0% 100%` | `#ffffff` |
| `--foreground` | `0 0% 4%` | `#0a0a0a` |
| `--muted-foreground` | `60 4% 50%` | `#9b9b95` |
| `--border` | `60 8% 89%` | `#e4e4e0` |
| `--secondary` / `--muted` | `60 7% 95%` | `#f4f4f2` |

Legacy tasarım sistemi `src/styles/whitemedia.css` üzerinden korunuyor.

## Yapı
```
.
├─ index.html              # Vite giriş + Inter & Material Symbols fontları
├─ components.json         # shadcn config
├─ tailwind.config.js      # token teması + Inter
├─ videos/                 # video varlıkları
├─ api/
│  └─ send.js              # Resend iletişim formu (Vercel serverless)
└─ src/
   ├─ main.tsx             # BrowserRouter + global CSS
   ├─ App.tsx              # Layout + routes
   ├─ index.css            # Tailwind + monochrome token'lar
   ├─ styles/whitemedia.css# tasarım sistemi
   ├─ lib/utils.ts         # cn()
   ├─ hooks/
   │  └─ usePageEffects.ts # reveal / counter / magnetic / sticky nav
   ├─ components/
   │  ├─ ui/hero-3.tsx     # AnimatedMarqueeHero (monochrome)
   │  ├─ Nav.tsx           # nav + mobil sheet
   │  └─ Footer.tsx
   └─ pages/
      ├─ Home.tsx          # marquee hero + ticker + servis + stats + vitrin + CTA
      ├─ Hizmetler.tsx
      ├─ Portfolyo.tsx     # çalışılan firmalar (özel SVG amblemler)
      └─ Iletisim.tsx      # controlled form -> /api/send
```

## Çalıştırma
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc + vite build -> dist/
npm run preview    # build'i lokal sun
```

## İletişim formu (Resend)
Form `POST /api/send` çağırıyor (`api/send.js`, Vercel serverless function).

Gerekli ortam değişkenleri (`.env.example`'a bak):
```
RESEND_API_KEY=re_xxxxxxxx                       # zorunlu
CONTACT_TO=trwhitemedia@gmail.com                # opsiyonel (default bu)
CONTACT_FROM=WhiteMedia <onboarding@resend.dev>  # opsiyonel
```
Honeypot (`website` alanı) + e-posta/uzunluk doğrulaması serverless tarafında.

> **Dev notu:** Saf `vite dev` serverless fonksiyonu çalıştırmaz; formu lokal test için `vercel dev` kullan ya da deploy et.

## Deploy (Vercel)
- Framework preset: **Vite** (otomatik algılanır)
- `api/send.js` otomatik serverless function olur
- Ortam değişkenlerini (`RESEND_API_KEY` vb.) Vercel proje ayarlarına ekle
