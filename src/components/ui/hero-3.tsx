import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import BrandGlyph from "@/components/BrandGlyph";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline?: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  posters: readonly string[];
  playIntro?: boolean;
  className?: string;
}

const CARD_ROTATIONS = [-3, 2, -1, 3] as const;
const CARD_OFFSETS = [10, -6, 4, 14] as const;
const MotionLink = motion(Link);

const ActionButton = ({
  children,
  href = "/iletisim#form",
  secondary = false,
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
}) => {
  const className = cn(
    "btn hero-marquee__cta",
    secondary && "btn-ghost hero-marquee__cta--secondary"
  );
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="button-icon" aria-hidden="true" />
    </>
  );

  if (/^https?:\/\//.test(href)) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        data-magnetic
      >
        {content}
      </motion.a>
    );
  }

  return (
    <MotionLink to={href} className={className} data-magnetic>
      {content}
    </MotionLink>
  );
};

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  posters,
  playIntro = false,
  className,
}) => {
  const reducedMotion = useReducedMotion();
  const entranceDelay = reducedMotion ? 0 : playIntro ? 1.05 : 0;
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.9 },
    },
  };

  const duplicatedPosters = [...posters, ...posters];

  return (
    <section
      className={cn(
        "hero-marquee bg-background text-center",
        playIntro && "hero-marquee--intro",
        className
      )}
    >
      {playIntro && (
        <div className="site-intro" aria-hidden="true">
          <div className="site-intro__meta">
            <span>WM / 001</span>
            <span>TRABZON · TÜRKİYE</span>
          </div>
          <div className="site-intro__center">
            <BrandGlyph className="site-intro__glyph" />
            <span className="site-intro__name">WHITE MEDIA</span>
            <span className="site-intro__sub">STRATEJİ / PRODÜKSİYON / DİJİTAL</span>
          </div>
          <div className="site-intro__footer">
            <span>Fikirden ekrana.</span>
            <span className="site-intro__progress"><span /></span>
            <span>01 / 01</span>
          </div>
        </div>
      )}
      <div className="hero-marquee__content">
        <div className="hero-marquee__eyebrow" aria-hidden="true">
          <span />
          WHITE MEDIA / DİJİTAL AJANS
          <span />
        </div>
        {tagline && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="mb-4 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm"
          >
            {tagline}
          </motion.div>
        )}

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                delayChildren: entranceDelay,
                staggerChildren: 0.16,
              },
            },
          }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground"
        >
          {typeof title === "string" ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: entranceDelay + (reducedMotion ? 0 : 0.34) }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: entranceDelay + (reducedMotion ? 0 : 0.47) }}
          className="hero-marquee__actions"
        >
          <ActionButton href={ctaHref}>{ctaText}</ActionButton>
          {secondaryCtaText && (
            <ActionButton href={secondaryCtaHref} secondary>
              {secondaryCtaText}
            </ActionButton>
          )}
        </motion.div>
        <a className="hero-marquee__scroll" href="#secili-isler">
          <span className="hero-marquee__scroll-line" aria-hidden="true"><span /></span>
          <span>Aşağı kaydır</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="hero-marquee__reel" aria-hidden="true">
        <div className="hero-marquee__track">
          {duplicatedPosters.map((src, index) => (
            <div
              key={index}
              className="hero-marquee__card"
              style={{
                rotate: `${CARD_ROTATIONS[index % CARD_ROTATIONS.length]}deg`,
                translate: `0 ${CARD_OFFSETS[index % CARD_OFFSETS.length]}px`,
              }}
            >
              <img
                src={src}
                alt=""
                loading={index < 5 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
