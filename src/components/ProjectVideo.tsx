import { useEffect, useRef, useState } from "react";
import type { ProjectMedia } from "@/data/portfolioProjects";

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

export default function ProjectVideo({ media }: { media: ProjectMedia }) {
  const ref = useRef<HTMLVideoElement>(null);
  const autoplayAllowedRef = useRef(true);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const savesData = (navigator as NavigatorWithConnection).connection?.saveData === true;
    const reducesMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    autoplayAllowedRef.current = !savesData && !reducesMotion;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else {
          element.pause();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !shouldLoad || !isVisible || !autoplayAllowedRef.current) return;

    void element.play().catch(() => undefined);
  }, [isVisible, shouldLoad]);

  return (
    <article className="case-media reveal">
      <video
        ref={ref}
        className="case-media__video"
        muted
        loop
        playsInline
        controls
        preload="none"
        poster={media.poster}
        aria-label={media.title}
        src={shouldLoad ? media.src : undefined}
      />
      <p className="case-media__caption">{media.title}</p>
    </article>
  );
}
