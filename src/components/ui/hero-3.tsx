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
  videos: string[];
  className?: string;
}

const CARD_ROTATIONS = [-3, 2, -1, 3] as const;
const CARD_OFFSETS = [10, -6, 4, 14] as const;

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
  return match ? `/work/posters/clip-${match[1]}.webp` : undefined;
}

function MarqueeVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadedRef = useRef(false);
  const visibleRef = useRef(false);
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
        "relative w-full h-screen overflow-hidden bg-background flex flex-col items-center justify-center text-center px-4",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center">
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

      <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={
            reducesMotion
              ? { x: "-8%" }
              : {
                  x: ["-100%", "0%"],
                  transition: {
                    ease: "linear",
                    duration: 40,
                    repeat: Infinity,
                  },
                }
          }
        >
          {duplicatedVideos.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
              style={{
                rotate: `${CARD_ROTATIONS[index % CARD_ROTATIONS.length]}deg`,
                translate: `0 ${CARD_OFFSETS[index % CARD_OFFSETS.length]}px`,
              }}
            >
              <MarqueeVideo src={src} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
