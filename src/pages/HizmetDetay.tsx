import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { SERVICE_DETAILS } from "@/data/serviceDetails";
import { SERVICE_CATALOG, serviceBySlug } from "@/data/services";

const PROCESS = [
  { number: "01", title: "Dinler ve analiz ederiz", text: "Markayı, hedefi, hedef kitleyi ve çözülmesi gereken asıl ihtiyacı birlikte netleştiririz." },
  { number: "02", title: "Markaya özel üretiriz", text: "Mesajı, görsel dili ve gerekli kanalları tek bir fikir etrafında planlayıp üretiriz." },
  { number: "03", title: "Yayınlar ve geliştiririz", text: "İşi kontrollü biçimde yayına alır, sonuçlardan öğrendiklerimizle bir sonraki adımı güçlendiririz." },
];

export default function HizmetDetay() {
  const { slug = "" } = useParams();
  const service = serviceBySlug[slug];
  const detail = SERVICE_DETAILS[slug];

  if (!service || !detail) {
    return (
      <main className="case-not-found">
        <PageMeta title="Hizmet Bulunamadı | White Media" description="Aradığınız hizmet bulunamadı." path={`/hizmetler/${slug}`} noIndex />
        <div className="wrap">
          <p className="eyebrow">404</p>
          <h1 className="display">Hizmet bulunamadı.</h1>
          <Link className="btn" to="/hizmetler"><ArrowLeft className="button-icon" /><span>Hizmetlere dön</span></Link>
        </div>
      </main>
    );
  }

  const current = SERVICE_CATALOG.findIndex((item) => item.slug === slug);
  const nextService = SERVICE_CATALOG[(current + 1) % SERVICE_CATALOG.length];
  const contactHref = `/iletisim?service=${encodeURIComponent(service.name)}#form`;

  return (
    <main>
      <PageMeta title={detail.metaTitle} description={detail.metaDescription} path={`/hizmetler/${service.slug}`} />

      <header className="page-hero service-detail-hero">
        <div className="wrap">
          <Link className="case-back ul" to="/hizmetler">← Tüm hizmetler</Link>
          <p className="eyebrow reveal in">Hizmet {service.number} · {service.shortName}</p>
          <h1 className="display reveal in" data-d="1">{detail.headline}</h1>
          <p className="reveal" data-d="2">{detail.promise}</p>
          <div className="reveal service-detail-hero__cta" data-d="2">
            <Link className="btn" to={contactHref} data-magnetic>
              <span>Bu hizmet için teklif al</span>
              <ArrowUpRight className="button-icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      <section className="section section--fill">
        <div className="wrap about-story">
          <div className="reveal">
            <p className="kicker">Bu hizmetin rolü</p>
            <h2 className="display">{service.role}</h2>
          </div>
          <div className="about-story__copy reveal" data-d="1">
            <p>{service.impact}</p>
            <p>Her projede önce ihtiyacı ve verilecek mesajı netleştirir; kapsamı hazır paketle değil, markaya göre kurarız.</p>
          </div>
        </div>
      </section>

      <section className="section section--ink service-explain">
        <div className="wrap">
          <div className="service-explain__head">
            <div className="reveal">
              <p className="kicker">Hizmet kapsamı</p>
              <h2 className="display sec-title">Neleri birlikte yaparız?</h2>
            </div>
            <p className="service-explain__intro reveal" data-d="1">Gereksiz kalemlerle değil, hedefe hizmet eden doğru parçalarla ilerleriz.</p>
          </div>
          <div className="service-explain__grid">
            {detail.scope.map((item, index) => (
              <article className="service-explain__card reveal" data-d={String(index % 2)} key={item.title}>
                <div className="service-explain__title-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                </div>
                <p className="service-explain__role">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-models">
        <div className="wrap">
          <div className="service-models__head reveal">
            <div><p className="kicker">Çalışma akışı</p><h2 className="display sec-title">Fikirden sonuca.</h2></div>
            <p>Kimin neyi, neden yaptığını bildiği açık ve kontrollü bir süreçle ilerleriz.</p>
          </div>
          <div className="service-models__grid">
            {PROCESS.map((step, index) => (
              <article className="service-model reveal" data-d={String(index)} key={step.number}>
                <span className="service-model__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="wrap faq-layout">
          <div className="reveal"><p className="kicker">Sık sorulanlar</p><h2 className="display sec-title">Kısa ve net cevaplar.</h2></div>
          <div className="faq-list reveal" data-d="1">
            {detail.faqs.map((item, index) => (
              <details className="faq-item" key={item.question}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<span className="faq-item__icon" aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="case-next">
        <div className="wrap">
          <Link className="case-next__link reveal" to={`/hizmetler/${nextService.slug}`}>
            <span className="case-next__kicker">Sıradaki hizmet</span>
            <span className="case-next__title-row"><span className="display case-next__title">{nextService.shortName}</span><ArrowUpRight className="case-next__arrow" /></span>
            <span className="case-next__category">{nextService.role}</span>
          </Link>
        </div>
      </section>

      <section className="section cta-band"><div className="wrap"><p className="kicker reveal">Hazırsan konuşalım</p><h2 className="display cta-title reveal" data-d="1">İhtiyacına göre<br />doğru kapsamı kuralım.</h2><div className="reveal" data-d="2" style={{ marginTop: 42 }}><Link className="btn" to={contactHref}><span>Projeni anlat</span><ArrowUpRight className="button-icon" /></Link></div></div></section>
    </main>
  );
}
