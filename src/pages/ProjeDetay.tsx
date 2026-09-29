import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BrandMark from "@/components/BrandMark";
import PageMeta from "@/components/PageMeta";
import ProjectVideo from "@/components/ProjectVideo";
import {
  portfolioProjectBySlug,
  portfolioProjects,
} from "@/data/portfolioProjects";

export default function ProjeDetay() {
  const { slug = "" } = useParams();
  const project = portfolioProjectBySlug[slug];

  if (!project) {
    return (
      <main className="case-not-found">
        <PageMeta
          title="Proje Bulunamadı | White Media"
          description="Aradığınız portfolyo projesi bulunamadı. White Media portfolyosundaki diğer işleri inceleyin."
          path={`/portfolyo/${slug}`}
          noIndex
        />
        <div className="wrap">
          <p className="eyebrow">404</p>
          <h1 className="display">Proje bulunamadı.</h1>
          <Link className="btn" to="/portfolyo">
            <ArrowLeft className="button-icon" aria-hidden="true" />
            <span>Portfolyoya dön</span>
          </Link>
        </div>
      </main>
    );
  }

  const projectsWithWork = portfolioProjects.filter(
    (portfolioProject) => portfolioProject.media.length > 0
  );
  const currentPosition = projectsWithWork.findIndex(
    (portfolioProject) => portfolioProject.slug === project.slug
  );
  const nextProject =
    currentPosition >= 0
      ? projectsWithWork[(currentPosition + 1) % projectsWithWork.length]
      : projectsWithWork[0];

  return (
    <main>
      <PageMeta
        title={`${project.name} | White Media Portfolyo`}
        description={project.summary}
        path={`/portfolyo/${project.slug}`}
        type="article"
      />
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

          {project.media.length > 0 ? (
            <div className={`case-feature case-feature--${Math.min(project.media.length, 3)} reveal`}>
              {project.media.length === 1 && (
                <img className="case-feature__backdrop" src={project.media[0].poster} alt="" />
              )}
              <div className="case-feature__frames" aria-hidden="true">
                {project.media.slice(0, 3).map((media) => (
                  <img key={media.poster} src={media.poster} alt="" decoding="async" />
                ))}
              </div>
              <div className="case-feature__overlay">
                <span>WHITE MEDIA / EX. {project.index}</span>
                <a href="#case-work">İŞLERİ İZLE <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          ) : (
            <div className={`case-logo case-logo--${project.panel} reveal`}>
              <BrandMark
                project={project}
                className={`case-logo__mark case-logo__mark--${project.logoShape}`}
              />
            </div>
          )}
        </div>
      </header>

      <section className="case-story section" aria-labelledby="case-story-title">
        <div className="wrap">
          <div className="case-story__head reveal">
            <p className="kicker">Proje dosyası / EX. {project.index}</p>
            <h2 className="display" id="case-story-title">İşin arkasındaki fikir.</h2>
          </div>
          <div className="case-story__rows">
            <article className="case-story__row reveal">
              <span>01 / ODAK</span>
              <p>{project.story?.focus || project.summary}</p>
            </article>
            <article className="case-story__row reveal">
              <span>02 / YAKLAŞIM</span>
              <p>{project.story?.approach || `Çalışmanın kapsamı: ${project.services.join(", ")}.`}</p>
            </article>
            <article className="case-story__row reveal">
              <span>03 / ÜRETİM</span>
              <div className="case-story__output">
                <p>{project.media.length > 0 ? `${project.media.length} seçili içerik aşağıda izlenebilir.` : "Bu markaya ait seçili işleri yakında paylaşacağız."}</p>
                <div className="case-story__tags">
                  {project.services.map((service) => <span key={service}>{service}</span>)}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="case-work section" id="case-work">
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

      {nextProject && nextProject.slug !== project.slug ? (
        <section className="case-next">
          <div className="wrap">
            <Link
              className="case-next__link reveal"
              to={`/portfolyo/${nextProject.slug}`}
            >
              <span className="case-next__kicker">Sıradaki proje</span>
              <span className="case-next__title-row">
                <span className="display case-next__title">
                  {nextProject.name}
                </span>
                <ArrowUpRight className="case-next__arrow" aria-hidden="true" />
              </span>
              <span className="case-next__category">{nextProject.category}</span>
            </Link>
          </div>
        </section>
      ) : null}

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
              <ArrowUpRight className="button-icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
