import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const PRINCIPLES = [
  {
    number: "01",
    title: "Önce dinleriz",
    text: "Markayı, hedefi ve asıl ihtiyacı anlamadan üretime başlamayız. Doğru fikir, doğru soruyla başlar.",
  },
  {
    number: "02",
    title: "Açık ilerleriz",
    text: "Kapsamı, üretim akışını ve sonraki adımı net tutarız. Sürecin her aşamasında aynı hedefe bakarız.",
  },
  {
    number: "03",
    title: "Bütün üretiriz",
    text: "Strateji, prodüksiyon, reklam ve web ayrı parçalar gibi değil; tek bir marka deneyimi gibi çalışır.",
  },
];

const SECTORS = [
  "Sağlık",
  "Eğitim",
  "Gastronomi",
  "Otomotiv",
  "Turizm",
  "İnşaat",
  "Etkinlik",
];

export default function Hakkimizda() {
  return (
    <main>
      <PageMeta
        title="Hakkımızda | White Media"
        description="White Media; Trabzon merkezli, strateji, sosyal medya, prodüksiyon, dijital reklam ve web hizmetlerini aynı hedefte buluşturan yaratıcı ekip."
        path="/hakkimizda"
      />

      <header className="page-hero about-hero">
        <div className="wrap">
          <p className="eyebrow reveal in">Hakkımızda</p>
          <h1 className="display reveal in" data-d="1">
            Fikrin arkasındaki
            <br />
            üretim ortağı.
          </h1>
          <p className="reveal" data-d="2">
            White Media; markaların ne söyleyeceğini, nasıl görüneceğini ve
            doğru insanlara nasıl ulaşacağını tek bir yaratıcı düzende
            buluşturur.
          </p>
        </div>
      </header>

      <section className="section section--fill">
        <div className="wrap about-story">
          <div className="reveal">
            <p className="kicker">Biz kimiz?</p>
            <h2 className="display">
              Markaya uzaktan bakan bir ajans değiliz.
            </h2>
          </div>
          <div className="about-story__copy reveal" data-d="1">
            <p>
              Trabzon merkezli yaratıcı bir ekip olarak sosyal medya,
              fotoğraf-video prodüksiyon, drone, dijital reklam ve web
              projeleri üretiyoruz.
            </p>
            <p>
              İşe hazır bir kalıpla değil, markanın kendi karakterini ve
              hedefini anlayarak başlıyoruz. Stratejiden çekime, kurgudan
              yayına kadar parçaların birbiriyle konuşmasını sağlıyoruz.
            </p>
            <p>
              Bizi bir hizmet listesi gibi değil, fikri netleştiren ve üretimi
              sonuna kadar taşıyan bir ekip arkadaşı gibi düşünebilirsin.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ink about-principles">
        <div className="wrap">
          <div className="about-principles__head reveal">
            <p className="kicker">Çalışma biçimimiz</p>
            <h2 className="display sec-title">İyi işin üç değişmezi.</h2>
          </div>
          <div className="about-principles__grid">
            {PRINCIPLES.map((principle, index) => (
              <article
                className="about-principle reveal"
                data-d={String(index)}
                key={principle.number}
              >
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-sectors">
        <div className="wrap about-sectors__grid">
          <div className="reveal">
            <p className="kicker">Farklı sektörler, tek özen</p>
            <h2 className="display sec-title">
              Her markanın
              <br />
              dili başka.
            </h2>
          </div>
          <div className="about-sectors__list reveal" data-d="1">
            {SECTORS.map((sector, index) => (
              <div key={sector}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{sector}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="wrap">
          <p className="kicker reveal">Tanışalım</p>
          <h2 className="display cta-title reveal" data-d="1">
            Hedefini anlat,
            <br />
            doğru yolu kuralım.
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
