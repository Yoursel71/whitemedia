import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { getCoverMedia } from "@/data/portfolioProjects";
import type { PortfolioProject } from "@/data/portfolioProjects";
import BrandMark from "@/components/BrandMark";

export default function ProjectCover({ project }: { project: PortfolioProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [playing, setPlaying] = useState(false);
  const coverMedia = getCoverMedia(project);
  const firstWork = coverMedia[0];

  useEffect(() => () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    videoRef.current?.pause();
  }, []);

  function startPreview(event: PointerEvent<HTMLDivElement>) {
    if (
      !firstWork || event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      ("connection" in navigator &&
        (navigator.connection as { saveData?: boolean })?.saveData)
    ) return;

    hoverTimeout.current = setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;
      if (!video.src) video.src = firstWork.src;
      video.currentTime = 0;
      void video.play().then(() => setPlaying(true)).catch(() => undefined);
    }, 250);
  }

  function stopPreview() {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setPlaying(false);
  }

  if (!firstWork) {
    return (
      <div className={`exhibit__media brand-panel brand-panel--${project.panel}`}>
        <BrandMark project={project} className={`brand-logo brand-logo--${project.logoShape}`} />
      </div>
    );
  }

  return (
    <div className={`exhibit__media exhibit__media--work${coverMedia.length >= 3 ? " exhibit__media--gallery" : coverMedia.length === 2 ? " exhibit__media--pair" : ""}`} onPointerEnter={startPreview} onPointerLeave={stopPreview}>
      <img className="exhibit__poster" src={firstWork.poster} alt="" loading="lazy" decoding="async" />
      {coverMedia.slice(1, 3).map((media, index) => (
        <img className={`exhibit__poster exhibit__poster--tile-${index + 2}`} key={media.poster} src={media.poster} alt="" loading="lazy" decoding="async" />
      ))}
      <video
        ref={videoRef}
        className={`exhibit__preview${playing ? " is-playing" : ""}`}
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onTimeUpdate={(event) => {
          if (event.currentTarget.currentTime >= 3) stopPreview();
        }}
        onEnded={stopPreview}
      />
      <div className="exhibit__film-meta" aria-hidden="true">
        <span>WHITE MEDIA / SEÇİLİ İŞ</span>
        <span>GÖRÜNTÜYÜ KEŞFET <span className="exhibit__film-arrow">↗</span></span>
      </div>
    </div>
  );
}
