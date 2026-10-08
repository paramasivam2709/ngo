/* animation.js — STACKLY scroll animations, typing, parallax */
(function () {
  "use strict";

  /* ---------- AOS (CDN) init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    if (window.AOS) {
      AOS.init({ duration: 850, easing: "ease-out-cubic", once: true, offset: 90 });
    }

    /* ---------- Custom reveal system (IntersectionObserver + rAF) ---------- */
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.18 });
    document.querySelectorAll(".anim-up,.anim-left,.anim-right,.anim-zoom,.reveal-line,.img-reveal,.d-stagger")
      .forEach(el => io.observe(el));

    /* ---------- Typing effect ---------- */
    document.querySelectorAll("[data-typing]").forEach(el => {
      const words = JSON.parse(el.dataset.typing);
      let wi = 0, ci = 0, del = false;
      el.classList.add("typing-caret");
      (function tick() {
        const w = words[wi];
        el.textContent = w.slice(0, ci);
        if (!del && ci < w.length) { ci++; setTimeout(tick, 70); }
        else if (!del) { del = true; setTimeout(tick, 1800); }
        else if (ci > 0) { ci--; setTimeout(tick, 35); }
        else { del = false; wi = (wi + 1) % words.length; setTimeout(tick, 400); }
      })();
    });

    /* ---------- Parallax on .parallax elements ---------- */
    const px = document.querySelectorAll(".parallax");
    if (px.length && matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (ticking) return; ticking = true;
        requestAnimationFrame(() => {
          px.forEach(el => {
            const sp = parseFloat(el.dataset.speed || 0.15);
            const r = el.getBoundingClientRect();
            const off = (r.top + r.height / 2 - innerHeight / 2) * sp;
            el.style.transform = `translateY(${off}px)`;
          });
          ticking = false;
        });
      }, { passive: true });
    }

    /* ---------- Magnetic buttons ---------- */
    if (matchMedia("(hover:hover)").matches) {
      document.querySelectorAll("[data-magnet]").forEach(btn => {
        btn.addEventListener("mousemove", e => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
        });
        btn.addEventListener("mouseleave", () => btn.style.transform = "");
      });
    }
  });
})();
