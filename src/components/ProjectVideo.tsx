import { useEffect, useRef } from "react";
import type { ProjectMedia } from "@/data/portfolioProjects";

export default function ProjectVideo({ media }: { media: ProjectMedia }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void element.play().catch(() => undefined);
        } else {
          element.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="case-media reveal">
      <video
        ref={ref}
        className="case-media__video"
        muted
        loop
        playsInline
        controls
        preload="metadata"
        poster={media.poster}
        aria-label={media.title}
      >
        <source src={media.src} type="video/mp4" />
      </video>
      <p className="case-media__caption">{media.title}</p>
    </article>
  );
}
