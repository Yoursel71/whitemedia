import { Link, useParams } from "react-router-dom";
import BrandMark from "@/components/BrandMark";
import ProjectVideo from "@/components/ProjectVideo";
import { portfolioProjectBySlug } from "@/data/portfolioProjects";

export default function ProjeDetay() {
  const { slug = "" } = useParams();
  const project = portfolioProjectBySlug[slug];

  if (!project) {
    return (
      <main className="case-not-found">
        <div className="wrap">
          <p className="eyebrow">404</p>
          <h1 className="display">Proje bulunamadı.</h1>
          <Link className="btn" to="/portfolyo">
            <span>Portfolyoya dön</span>
            <span className="icon">arrow_back</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <header className="case-hero">
        <div className="wrap">
          <Link className="case-back ul" to="/portfolyo">
            ← Portfolyo
          </Link>

          <div className="case-hero__head">
            <div>
              <p className="eyebrow reveal in">EX. {project.index} · {project.category}</p>
              <h1 className="display reveal in" data-d="1">{project.name}</h1>
            </div>
            <p className="case-hero__summary reveal" data-d="2">{project.summary}</p>
          </div>

          <div className={`case-logo case-logo--${project.panel} reveal`}>
            <BrandMark
              project={project}
              className={`case-logo__mark case-logo__mark--${project.logoShape}`}
            />
          </div>
        </div>
      </header>

      <section className="case-info section">
        <div className="wrap case-info__grid">
          <div>
            <p className="kicker reveal">Çalışma kapsamı</p>
            <h2 className="display reveal" data-d="1">Markaya özel üretim.</h2>
          </div>
          <ul className="case-services reveal" data-d="2">
            {project.services.map((service, index) => (
              <li key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-work section">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <p className="kicker">Seçili işler</p>
              <h2 className="display sec-title">Ürettiklerimiz</h2>
            </div>
            <span className="case-work__count">
              {String(project.media.length).padStart(2, "0")} içerik
            </span>
          </div>

          {project.media.length > 0 ? (
            <div className="case-gallery">
              {project.media.map((media) => (
                <ProjectVideo key={media.src} media={media} />
              ))}
            </div>
          ) : (
            <div className="case-empty reveal">
              <span className="case-empty__index">EX. {project.index}</span>
              <p>Bu markaya ait seçili işleri ekliyoruz.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section cta-band">
        <div className="wrap">
          <p className="kicker reveal">Benzer bir proje için</p>
          <h2 className="display cta-title reveal" data-d="1">
            Markanı birlikte
            <br />
            büyütelim.
          </h2>
          <div className="reveal" data-d="2" style={{ marginTop: 42 }}>
            <Link className="btn" to="/iletisim#form" data-magnetic>
              <span>Projeni anlat</span>
              <span className="icon">arrow_outward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
