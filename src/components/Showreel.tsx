import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, Volume2, VolumeX, X } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioProjectBySlug } from "@/data/portfolioProjects";

const SHOTS = [
  { media: portfolioProjectBySlug["tt-fest"].media[0], label: "ETKİNLİK / ENERJİ" },
  { media: portfolioProjectBySlug["pesent-restaurant"].media[0], label: "GASTRONOMİ / DENEYİM" },
  { media: portfolioProjectBySlug["medicalpark"].media[0], label: "SAĞLIK / GÜVEN" },
  { media: portfolioProjectBySlug["gursoy-insaat"].media[0], label: "YAŞAM / MEKÂN" },
  { media: portfolioProjectBySlug["ay-gida"].media[3], label: "ÜRETİM / DETAY" },
  { media: portfolioProjectBySlug["faber-gayrimenkul"].media[0], label: "GAYRİMENKUL / HİKÂYE" },
];

const SHOT_LENGTH = 4;

export default function Showreel() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [sound, setSound] = useState(false);
  const finished = index === SHOTS.length;
  const shot = SHOTS[Math.min(index, SHOTS.length - 1)];

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  function openReel() {
    setIndex(0);
    setProgress(0);
    setSound(false);
    dialogRef.current?.showModal();
    setOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeReel() {
    dialogRef.current?.close();
  }

  function onClosed() {
    setOpen(false);
    document.body.style.overflow = "";
    triggerRef.current?.focus();
  }

  function nextShot(video: HTMLVideoElement) {
    if (video.dataset.advanced) return;
    video.dataset.advanced = "true";
    setProgress(0);
    setIndex((current) => Math.min(current + 1, SHOTS.length));
  }

  return (
    <>
      <button className="film-chapter__play" type="button" onClick={openReel} ref={triggerRef}>
        <span className="film-chapter__play-icon"><Play size={18} fill="currentColor" aria-hidden="true" /></span>
        <span>SEÇİLİ İŞLERİ İZLE <small>24 SN / 6 SAHNE</small></span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <dialog
        className="showreel"
        ref={dialogRef}
        aria-labelledby="showreel-title"
        onClose={onClosed}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeReel();
        }}
      >
        <div className="showreel__shell">
          <div className="showreel__head">
            <span>WHITE MEDIA / SEÇİLİ İŞLER</span>
            <button type="button" onClick={closeReel} aria-label="Filmi kapat"><X size={21} /></button>
          </div>
          <div className="showreel__body">
            <div className="showreel__intro">
              <span className="showreel__eyebrow">FİKİRDEN EKRANA</span>
              <h2 className="display" id="showreel-title">İşler<br />konuşsun.</h2>
              <p>Farklı sektörlerden altı seçili sahne. Her biri White Media üretiminden.</p>
            </div>
            <div className="showreel__screen">
              {!finished ? (
                <video
                  key={index}
                  src={open ? shot.media.src : undefined}
                  poster={shot.media.poster}
                  autoPlay
                  muted={!sound}
                  playsInline
                  preload="auto"
                  onTimeUpdate={(event) => {
                    const video = event.currentTarget;
                    setProgress(Math.min(video.currentTime / SHOT_LENGTH, 1));
                    if (video.currentTime >= SHOT_LENGTH) nextShot(video);
                  }}
                  onEnded={(event) => nextShot(event.currentTarget)}
                  onError={(event) => nextShot(event.currentTarget)}
                />
              ) : (
                <div className="showreel__end">
                  <span>WHITE MEDIA</span>
                  <strong className="display">Fikirden<br />ekrana.</strong>
                  <button type="button" onClick={() => { setIndex(0); setProgress(0); }}>TEKRAR İZLE ↻</button>
                </div>
              )}
            </div>
            <div className="showreel__aside">
              <span className="showreel__counter">{String(Math.min(index + 1, SHOTS.length)).padStart(2, "0")} / 06</span>
              <div>
                <p className="showreel__scene">{finished ? "SIRADAKİ HİKÂYE" : shot.label}</p>
                <div className="showreel__progress" aria-hidden="true">
                  {SHOTS.map((item, shotIndex) => (
                    <span key={item.label} className={shotIndex < index ? "is-done" : ""}>
                      <i style={{ transform: `scaleX(${shotIndex === index ? progress : 0})` }} />
                    </span>
                  ))}
                </div>
                <div className="showreel__controls">
                  <button type="button" onClick={() => setSound((value) => !value)} aria-label={sound ? "Sesi kapat" : "Sesi aç"}>
                    {sound ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    {sound ? "SES AÇIK" : "SES KAPALI"}
                  </button>
                  <Link to="/portfolyo" onClick={closeReel}>TÜM İŞLER <ArrowUpRight size={17} /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
