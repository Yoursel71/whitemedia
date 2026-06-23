import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ports the vanilla `app.js` interactions to React:
 * reveal-on-scroll, animated counters, magnetic buttons, sticky-nav border,
 * and the `loaded` body class. Re-runs on every route change so freshly
 * mounted `.reveal` / `[data-count]` / `[data-magnetic]` nodes get wired up.
 */
export function usePageEffects() {
  const location = useLocation();

  // sticky nav border + loaded flag — attach once
  useEffect(() => {
    requestAnimationFrame(() => document.body.classList.add("loaded"));

    const nav = document.querySelector(".nav");
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // reveal + counters + magnetic — re-run per route
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo(0, 0);

    const cleanups: Array<() => void> = [];

    // reveal on scroll
    const items = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // counters
    const nums = document.querySelectorAll<HTMLElement>("[data-count]");
    const runCount = (el: HTMLElement) => {
      const raw = el.dataset.count || "0";
      const target = parseFloat(raw);
      const suffix = el.dataset.suffix || "";
      const decimals = (raw.split(".")[1] || "").length;
      if (reduce) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
      }
      const dur = 1500;
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (nums.length) {
      const io2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              runCount(en.target as HTMLElement);
              io2.unobserve(en.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      nums.forEach((el) => io2.observe(el));
      cleanups.push(() => io2.disconnect());
    }

    // magnetic buttons (fine pointer only)
    if (!reduce && window.matchMedia("(pointer:fine)").matches) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const s = 0.3;
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * s}px, ${
            (e.clientY - (r.top + r.height / 2)) * s
          }px)`;
        };
        const leave = () => {
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [location.pathname]);
}
