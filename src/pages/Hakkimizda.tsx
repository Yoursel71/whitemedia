import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";

const PRINCIPLES = [
  {
    number: "01",
    title: "İhtiyacı netleştiririz",
    text: "Markanın o anki önceliğini anlamadan üretime başlamayız. Doğru iş, doğru soruyla ve net bir hedefle başlar.",
  },
  {
    number: "02",
    title: "Markaya ait üretiriz",
    text: "Kurumsal kimliği, dili ve hedef kitlesini içeriğin merkezine alır; hazır bir fikri farklı markalara kopyalamayız.",
  },
  {
    number: "03",
    title: "Doğru kişiye ulaştırırız",
    text: "Mesajı, kancayı, organik yayını ve reklamı aynı hedefe bağlar; içeriği geri dönüşlerle geliştirmeye devam ederiz.",
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
            Her markaya
            <br />
            kendine ait bir yön.
          </h1>
          <p className="reveal" data-d="2">
            Hazır kalıpları markalara uydurmuyoruz. Önce kimliği, hedef kitleyi
            ve gerçek ihtiyacı anlıyor; içeriği oradan üretiyoruz.
          </p>
        </div>
      </header>

      <section className="section section--fill">
        <div className="wrap about-story">
          <div className="reveal">
            <p className="kicker">İşin özü</p>
            <h2 className="display">
              Doğru içerik, doğru kişiye ulaşmanın başlangıcıdır.
            </h2>
          </div>
          <div className="about-story__copy reveal" data-d="1">
            <p>
              Her markanın kurumsal kimliği, dili, hedef kitlesi ve önceliği
              farklıdır. Bu yüzden bir yerde işe yarayan fikri başka bir
              markaya kopyalamıyoruz.
            </p>
            <p>
              Önce markanın o anki ihtiyacını netleştiriyoruz. Sonra dikkati
              yakalayan kancayı, verilecek mesajı ve içeriğin nasıl
              anlatılacağını bu ihtiyaca göre tasarlıyoruz.
            </p>
            <p>
              İçerik doğru kurulmadan reklamın tek başına yeterli olmadığını
              biliyoruz. Reklam erişimi büyütebilir; ama içeriğin söylemediğini
              söyleyemez. Bu yüzden üretim ve dağıtımı aynı bütün içinde ele
              alıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ink about-principles">
        <div className="wrap">
          <div className="about-principles__head reveal">
            <p className="kicker">Çalışma biçimimiz</p>
            <h2 className="display sec-title">Her işte yeniden başlayan üç adım.</h2>
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
            <p className="kicker">Farklı sektörler, farklı diller</p>
            <h2 className="display sec-title">
              Her işin ayrı
              <br />
              bir değeri var.
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
