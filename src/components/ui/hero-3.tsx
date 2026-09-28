import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline?: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  videos: readonly string[];
  className?: string;
}

const CARD_ROTATIONS = [-3, 2, -1, 3] as const;
const CARD_OFFSETS = [10, -6, 4, 14] as const;
const VIDEO_START_RATIOS = [0.22, 0.34, 0.28, 0.4, 0.18, 0.31] as const;

const MotionLink = motion(Link);

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

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

function getPoster(src: string) {
  const match = src.match(/\/videos\/clip-(\d+)\.mp4$/);
  if (match) return `/work/posters/clip-${match[1]}.webp`;
  return src.endsWith(".mp4") ? src.replace(/\.mp4$/, ".webp") : undefined;
}

function MarqueeVideo({ src, position }: { src: string; position: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadedRef = useRef(false);
  const visibleRef = useRef(false);
  const startPositionSetRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const savesData = (navigator as NavigatorWithConnection).connection?.saveData === true;
    const reducesMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (savesData || reducesMotion) return;

    if (!("IntersectionObserver" in window)) {
      visibleRef.current = true;
      loadedRef.current = true;
      setLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!loadedRef.current) {
            loadedRef.current = true;
            setLoaded(true);
          } else {
            videoRef.current?.play().catch(() => undefined);
          }
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "160px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (loaded && visibleRef.current) {
      videoRef.current?.play().catch(() => undefined);
    }
  }, [loaded]);

  return (
    <video
      ref={videoRef}
      src={loaded ? src : undefined}
      poster={getPoster(src)}
      onLoadedMetadata={(event) => {
        if (startPositionSetRef.current) return;

        const video = event.currentTarget;
        if (!Number.isFinite(video.duration) || video.duration <= 1) return;

        const ratio = VIDEO_START_RATIOS[position % VIDEO_START_RATIOS.length];
        video.currentTime = Math.min(video.duration * ratio, video.duration - 0.5);
        startPositionSetRef.current = true;
      }}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className="w-full h-full object-cover rounded-2xl shadow-md"
    />
  );
}

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  videos,
  className,
}) => {
  const reducesMotion = useReducedMotion();

  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.9 },
    },
  };

  const duplicatedVideos = [...videos, ...videos];

  return (
    <section
      className={cn(
        "hero-marquee bg-background text-center",
        className
      )}
    >
      <div className="hero-marquee__content">
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
                staggerChildren: 0.1,
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
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
          className="hero-marquee__actions"
        >
          <ActionButton href={ctaHref}>{ctaText}</ActionButton>
          {secondaryCtaText && (
            <ActionButton href={secondaryCtaHref} secondary>
              {secondaryCtaText}
            </ActionButton>
          )}
        </motion.div>
      </div>

      <div className="hero-marquee__reel" aria-hidden="true">
        <motion.div
          className="hero-marquee__track"
          animate={
            reducesMotion
              ? { x: "-8%" }
              : {
                  x: ["-50%", "0%"],
                  transition: {
                    ease: "linear",
                    duration: 64,
                    repeat: Infinity,
                  },
                }
          }
        >
          {duplicatedVideos.map((src, index) => (
            <div
              key={index}
              className="hero-marquee__card"
              style={{
                rotate: `${CARD_ROTATIONS[index % CARD_ROTATIONS.length]}deg`,
                translate: `0 ${CARD_OFFSETS[index % CARD_OFFSETS.length]}px`,
              }}
            >
              <MarqueeVideo src={src} position={index % videos.length} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
