import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { SERVICE_CATALOG } from "@/data/services";

const PROCESS = [
  { n: "01", title: "İhtiyaç", text: "Markanın öncelikli hedefini, hedef kitlesini ve çözülmesi gereken asıl konuyu netleştiriyoruz." },
  { n: "02", title: "Mesaj", text: "Kurumsal kimliğe uygun dili, içeriğin kancasını ve insanlarda bırakması gereken etkiyi belirliyoruz." },
  { n: "03", title: "İçerik", text: "Fotoğrafı, videoyu ve tasarımı belirlenen hedefe hizmet edecek şekilde markaya özel üretiyoruz." },
  { n: "04", title: "Dağıtım", text: "İçeriği organik yayın ve reklamla doğru kitleye ulaştırıyor, geri dönüşlere göre geliştiriyoruz." },
];

const WORKING_MODELS = [
  {
    number: "01",
    title: "Sürekli marka iletişimi",
    text: "Sosyal medya planı, düzenli içerik üretimi, yayın ve reklam yönetimini aynı çizgide yürütürüz.",
    fit: "Düzenli görünürlük isteyen markalar için",
  },
  {
    number: "02",
    title: "Tek seferlik prodüksiyon",
    text: "Ürün, mekân, etkinlik veya kampanya için ihtiyaca özel fotoğraf, video ve drone üretimi yaparız.",
    fit: "Belirli bir çekim ihtiyacı olanlar için",
  },
  {
    number: "03",
    title: "Kampanya ve dijital büyüme",
    text: "Kreatif üretimi Google ve Meta reklamlarıyla bir araya getirir, kampanyayı hedefe göre geliştiririz.",
    fit: "Talep ve dönüşüm oluşturmak isteyenler için",
  },
];

const FAQS = [
  {
    question: "Yalnızca fotoğraf veya video çekimi alabilir miyim?",
    answer:
      "Evet. İhtiyacın tek bir prodüksiyon, etkinlik çekimi ya da belirli bir kampanya içeriğiyse kapsamı yalnızca bunun üzerine kurabiliriz.",
  },
  {
    question: "Sosyal medya yönetimi ve reklam birlikte olmak zorunda mı?",
    answer:
      "Hayır. Hizmetleri markanın mevcut ekibine ve ihtiyacına göre ayrı ayrı ya da birbirini tamamlayan bir yapı halinde planlarız.",
  },
  {
    question: "Türkiye genelinde çalışıyor musunuz?",
    answer:
      "Evet. Trabzon merkezliyiz; proje kapsamına göre Türkiye'nin farklı şehirlerindeki markalarla çalışabiliyoruz.",
  },
  {
    question: "Teklif nasıl hazırlanıyor?",
    answer:
      "Kanal sayısı, üretim sıklığı, çekim günleri, reklam kapsamı ve ihtiyaç duyulan teslimleri netleştirip markaya özel bir kapsam çıkarıyoruz.",
  },
  {
    question: "İlk görüşmeye gelirken ne hazırlamalıyım?",
    answer:
      "Markanı, ulaşmak istediğin hedefi ve varsa örnek aldığın işleri kısaca anlatman yeterli. Doğru sorularla geri kalanını birlikte netleştiririz.",
  },
];

export default function Hizmetler() {
  return (
    <main>
      <PageMeta
        title="Hizmetler | White Media Dijital Ajans"
        description="Sosyal medya yönetimi, fotoğraf ve video prodüksiyon, drone çekimi, Google Ads, Meta reklamları ve web sitesi hizmetleri."
        path="/hizmetler"
      />
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow reveal in">Hizmetler</p>
          <h1 className="display reveal in" data-d="1">
            Bir ekip,
            <br />
            tüm kanallar.
          </h1>
          <p className="reveal" data-d="2">
            Önce hangi hizmeti vereceğimizi değil, markanın neye ihtiyacı
            olduğunu konuşuyoruz. Sonra mesajı, üretimi ve dağıtımı aynı hedefe
            bağlıyoruz.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="srv" style={{ borderTop: 0 }}>
            {SERVICE_CATALOG.map((s) => (
              <div className="srv__row reveal" key={s.number}>
                <span className="srv__num">{s.number}</span>
                <span className="srv__name">{s.name}</span>
                <span className="srv__desc">{s.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink service-explain">
        <div className="wrap">
          <div className="service-explain__head">
            <div className="reveal">
              <p className="kicker">Hizmetlerin rolü</p>
              <h2 className="display sec-title">
                Her aracın
                <br />
                ayrı bir görevi var.
              </h2>
            </div>
            <p className="service-explain__intro reveal" data-d="1">
              Amaç bütün hizmetleri aynı pakete eklemek değil; markanın
              ihtiyacına en doğru cevabı veren araçları birlikte çalıştırmak.
            </p>
          </div>

          <div className="service-explain__grid">
            {SERVICE_CATALOG.map((service, index) => (
              <article
                className="service-explain__card reveal"
                data-d={String(index % 2)}
                key={service.number}
              >
                <div className="service-explain__title-row">
                  <span>{service.number}</span>
                  <h3>{service.name}</h3>
                </div>
                <p className="service-explain__role">{service.role}</p>
                <p className="service-explain__impact">{service.impact}</p>
                <div
                  className="service-explain__benefits"
                  aria-label={`${service.name} katkıları`}
                >
                  {service.benefits.map((benefit) => (
                    <span key={benefit}>{benefit}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-models">
        <div className="wrap">
          <div className="service-models__head reveal">
            <div>
              <p className="kicker">İhtiyacına göre</p>
              <h2 className="display sec-title">Nasıl birlikte çalışabiliriz?</h2>
            </div>
            <p>
              Her markayı aynı pakete sıkıştırmıyoruz. Hedefe göre tek bir
              üretimden devamlı iletişime uzanan doğru kapsamı kuruyoruz.
            </p>
          </div>

          <div className="service-models__grid">
            {WORKING_MODELS.map((model, index) => (
              <article
                className="service-model reveal"
                data-d={String(index)}
                key={model.number}
              >
                <span className="service-model__number">{model.number}</span>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
                <span className="service-model__fit">{model.fit}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section service-process">
        <div className="wrap">
          <p className="kicker reveal">Nasıl çalışırız</p>
          <h2 className="display sec-title reveal" data-d="1">
            Dört adım,
            <br />
            sıfır sürpriz.
          </h2>

          <div
            style={{
              display: "grid",
              gap: 1,
              background: "var(--line)",
              border: "1px solid var(--line)",
              marginTop: 52,
            }}
          >
            {PROCESS.map((p) => (
              <div
                className="reveal"
                key={p.n}
                style={{
                  background: "var(--mist)",
                  padding: 34,
                  display: "grid",
                  gridTemplateColumns: "64px 1fr",
                  gap: 18,
                  alignItems: "start",
                }}
              >
                <span className="mono" style={{ fontSize: 18 }}>
                  {p.n}
                </span>
                <div>
                  <h3 className="display" style={{ fontSize: 24, margin: "0 0 8px" }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "var(--muted)", margin: 0, maxWidth: 560 }}>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="wrap faq-layout">
          <div className="reveal">
            <p className="kicker">Sık sorulanlar</p>
            <h2 className="display sec-title">
              Başlamadan önce
              <br />
              merak edilenler.
            </h2>
          </div>
          <div className="faq-list reveal" data-d="1">
            {FAQS.map((item, index) => (
              <details className="faq-item" key={item.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                  <span className="faq-item__icon" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="wrap">
          <p className="kicker reveal">Başlayalım</p>
          <h2 className="display cta-title reveal" data-d="1">
            Sana uygun
            <br />
            paketi kuralım.
          </h2>
          <div className="reveal" data-d="2" style={{ marginTop: 42 }}>
            <Link className="btn" to="/iletisim#form" data-magnetic>
              <span>Teklif al</span>
              <ArrowUpRight className="button-icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
