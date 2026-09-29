import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import { SERVICE_DETAILS } from "@/data/serviceDetails";
import { portfolioProjectBySlug } from "@/data/portfolioProjects";
import { SERVICE_CATALOG, serviceBySlug } from "@/data/services";

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
  const relatedProjects = (detail.relatedProjects || []).map((projectSlug) => portfolioProjectBySlug[projectSlug]);

  return (
    <main>
      <PageMeta title={detail.metaTitle} description={detail.metaDescription} path={`/hizmetler/${service.slug}`} />

      <header className="page-hero service-detail-hero">
        <div className="wrap">
          <Link className="case-back ul" to="/hizmetler">← Tüm hizmetler</Link>
          <p className="eyebrow reveal in">Hizmet {service.number} · {service.shortName}</p>
          <h1 className="display reveal in" data-d="1">{service.name}</h1>
          <p className="service-detail-hero__tagline reveal in">{detail.headline}</p>
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

      <section className="section service-models service-models--detail">
        <div className="wrap">
          <div className="service-models__head reveal">
            <div><p className="kicker">Uygulama alanları</p><h2 className="display sec-title">Nerede işe yarar?</h2></div>
            <p>Aynı hizmeti her markaya aynı şekilde uygulamayız. Sektörün ve hedefin ihtiyacına göre doğru içeriği ve kanalı seçeriz.</p>
          </div>
          <div className="service-models__grid">
            {detail.useCases.map((item, index) => (
              <article className="service-model reveal" data-d={String(index)} key={item.title}>
                <span className="service-model__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-reach">
        <div className="wrap about-story">
          <div className="reveal">
            <p className="kicker">Çalışma alanımız</p>
            <h2 className="display">Trabzon'dan Türkiye'ye.</h2>
          </div>
          <div className="about-story__copy reveal" data-d="1">
            <p>{detail.collaboration}</p>
            <Link className="ul" to={contactHref}>Projenin kapsamını konuşalım →</Link>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section service-related">
          <div className="wrap">
            <div className="sec-head reveal">
              <div><p className="kicker">Seçili çalışmalar</p><h2 className="display sec-title">İşlerden örnekler.</h2></div>
              <Link className="ul mono" to="/portfolyo">TÜM PORTFÖY →</Link>
            </div>
            <div className="service-related__grid">
              {relatedProjects.map((project) => (
                <Link className="service-related__item reveal" to={`/portfolyo/${project.slug}`} key={project.slug}>
                  <span className="eyebrow">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <span className="service-related__link">PROJEYİ İNCELE <ArrowUpRight size={17} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
