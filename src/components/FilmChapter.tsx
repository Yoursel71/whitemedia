import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Showreel from "@/components/Showreel";
import { portfolioProjectBySlug } from "@/data/portfolioProjects";

const FRAMES = [
  portfolioProjectBySlug["tt-fest"].media[0],
  portfolioProjectBySlug["pesent-restaurant"].media[0],
  portfolioProjectBySlug["ay-gida"].media[3],
];

export default function FilmChapter() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.78, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section className="film-chapter" ref={sectionRef} aria-labelledby="film-chapter-title">
      <div className="wrap film-chapter__wrap">
        <div className="film-chapter__top" aria-hidden="true">
          <span>WHITE MEDIA / SEÇİLİ KARELER</span>
          <span>01 — 03</span>
        </div>
        <motion.div className="film-chapter__stage" style={reducedMotion ? undefined : { scale, y }}>
          <div className="film-chapter__frames" aria-hidden="true">
            {FRAMES.map((frame) => (
              <img key={frame.poster} src={frame.poster} alt="" loading="lazy" decoding="async" />
            ))}
          </div>
          <div className="film-chapter__copy">
            <p className="film-chapter__kicker">FİKİRDEN EKRANA / 2026 SEÇKİSİ</p>
            <h2 className="display" id="film-chapter-title">Her karede<br />bir iz bırak.</h2>
            <Showreel />
          </div>
        </motion.div>
        <p className="film-chapter__bottom">STRATEJİ <span>·</span> PRODÜKSİYON <span>·</span> DİJİTAL</p>
      </div>
    </section>
  );
}
