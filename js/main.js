/* =====================================================
   STACKLY — main.js (Vanilla JS core)
   ===================================================== */
(function () {
  "use strict";

  /* ---------- Icons ---------- */
  const I = {
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    med: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    li: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5.5 5.5 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.85-.46-5.58a2.78 2.78 0 0 0-2-2C18.88 4 12 4 12 4s-6.88 0-8.57.46a2.78 2.78 0 0 0-2 2C1 8.15 1 12 1 12s0 3.85.46 5.58a2.78 2.78 0 0 0 2 2C5.12 20 12 20 12 20s6.88 0 8.57-.46a2.78 2.78 0 0 0 2-2C23 15.85 23 12 23 12z"/><polygon points="9.75 15.5 15.5 12 9.75 8.5" fill="#fff"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.9 7.9L23.3 22h-6.4l-5-6.6L6.1 22H3l7.4-8.5L1 2h6.6l4.5 6L18.9 2zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.2l7.1-.6z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.27-1.4.7L6 12"/><path d="M8 16.5 10.5 14h4.5a2 2 0 1 0 0-4h-3c-.6 0-1.1-.27-1.4-.7L8 8.5"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>'
  };

  const PAGE = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const onDark = !document.body.hasAttribute("data-light-header");

  /* ---------- Inject header ---------- */
  const headerMount = document.getElementById("site-header");
  if (headerMount) {
    const links = [
      ["index.html", "Home"], ["about.html", "About"], ["services.html", "Services"],
      ["index.html#projects", "Projects"], ["blog.html", "Blog"], ["pricing.html", "Pricing"],
      ["faq.html", "FAQ"], ["contact.html", "Contact"]
    ];
    const isActive = (href) => {
      const f = href.split("#")[0];
      if (f === "index.html") return PAGE === "index.html" && !href.includes("#");
      return PAGE === f;
    };
    headerMount.outerHTML = `
    <header class="header ${onDark ? "on-dark" : ""}" id="header">
      <div class="container nav-wrap">
        <a href="index.html" class="brand" aria-label="STACKLY home">
          <img src="img/logo.webp" alt="" width="44" height="44">
          <span class="brand-text"><strong>STACKLY</strong><small>Small Acts. Big Change.</small></span>
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          ${links.map(l => `<a href="${l[0]}" class="${isActive(l[0]) ? "active" : ""}">${l[1]}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <a href="login.html" class="nav-login">Login</a>
          <a href="index.html#donate" class="donate-btn">${I.heart}<span>Donate Now</span></a>
          <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>
    <div class="mobile-nav" id="mobileNav">
      <div class="mobile-nav-top">
        <a href="index.html" class="mobile-brand" aria-label="STACKLY home"><img src="img/logo.webp" alt=""><span>STACKLY</span></a>
        <div class="mobile-nav-actions"><a href="login.html" class="mobile-login">Login</a><button class="mobile-close" id="mobileClose" aria-label="Close menu">×</button></div>
      </div>
      <nav class="mobile-links" aria-label="Mobile navigation">
        ${links.map((l, i) => `<a href="${l[0]}" class="mlink" style="transition-delay:${0.05 * i + 0.12}s"><i>0${i + 1}</i>${l[1]}</a>`).join("")}
      </nav>
      <a href="index.html#donate" class="btn btn-primary m-donate">${I.heart} Donate Now</a>
    </div>`;
  }

  /* ---------- Inject footer ---------- */
  const footerMount = document.getElementById("site-footer");
  if (footerMount) {
    footerMount.outerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <a href="index.html" class="brand">
              <img src="img/logo.webp" alt="" width="44" height="44">
              <span class="brand-text"><strong>STACKLY</strong><small>Small Acts. Big Change.</small></span>
            </a>
            <p>STACKLY is a global NGO working to unlock education, healthcare, clean environments and thriving communities — one small act at a time.</p>
            <div class="social-row">
              <a href="#" aria-label="Facebook">${I.fb}</a><a href="#" aria-label="Instagram">${I.ig}</a>
              <a href="#" aria-label="LinkedIn">${I.li}</a><a href="#" aria-label="YouTube">${I.yt}</a>
              <a href="#" aria-label="X">${I.x}</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li><li><a href="index.html#projects">Projects</a></li>
              <li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Programs</h4>
            <ul class="footer-links">
              <li><a href="services.html">Education</a></li><li><a href="services.html">Healthcare</a></li>
              <li><a href="services.html">Environment</a></li><li><a href="services.html">Community</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul class="footer-contact">
              <li>${I.mail}<span>hello@stackly.org</span></li>
              <li>${I.phone}<span>+91 98765 43210</span></li>
              <li>${I.pin}<span>14 Hope Avenue, Green Park,<br>New Delhi 110016, India</span></li>
            </ul>
            <form class="footer-news" id="footNews" novalidate>
              <input type="email" placeholder="Your email" aria-label="Email for newsletter">
              <button type="submit" aria-label="Subscribe">${I.send}</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} STACKLY NGO. All rights reserved.</span>
          <div class="legal"><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
        </div>
      </div>
    </footer>
    <button id="toTop" aria-label="Back to top">${I.up}</button>
    <div id="scrollProgress"></div>`;
  }

  /* ---------- Preloader ---------- */
  if (!document.body.hasAttribute("data-no-preloader")) {
    const pre = document.createElement("div");
    pre.id = "preloader";
    pre.innerHTML = `
      <svg width="0" height="0" style="position:absolute"><defs><linearGradient id="preGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFB703"/><stop offset="1" stop-color="#FF6B1A"/></linearGradient></defs></svg>
      <div class="pre-logo"><img src="img/logo.webp" alt=""><span>STACK<em>LY</em></span></div>
      <div class="pre-ring">
        <svg class="ring" viewBox="0 0 120 120"><circle class="bgc" cx="60" cy="60" r="50"/><circle class="fgc" id="preArc" cx="60" cy="60" r="50"/></svg>
        <div class="pre-count" id="preCount">0%</div>
      </div>
      <div class="pre-tag">Making Change Happen</div>`;
    document.body.appendChild(pre);
    let p = 0;
    const arc = () => document.getElementById("preArc");
    const cnt = () => document.getElementById("preCount");
    const tick = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4);
      if (arc()) arc().style.strokeDashoffset = 314 - (314 * p) / 100;
      if (cnt()) cnt().textContent = Math.floor(p) + "%";
      if (p >= 100) {
        clearInterval(tick);
        setTimeout(() => { const el = document.getElementById("preloader"); if (el) el.classList.add("hide"); }, 350);
        setTimeout(() => { const el = document.getElementById("preloader"); if (el) el.remove(); }, 1200);
      }
    }, 120);
  }

  document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Sticky header ---------- */
    const header = document.getElementById("header");
    const onScroll = () => {
      if (header) header.classList.toggle("scrolled", window.scrollY > 40);
      const sp = document.getElementById("scrollProgress");
      if (sp) {
        const h = document.documentElement;
        sp.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
      }
      const tt = document.getElementById("toTop");
      if (tt) tt.classList.toggle("show", window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile menu ---------- */
    const burger = document.getElementById("hamburger");
    const mNav = document.getElementById("mobileNav");
    if (burger && mNav) {
      const close = document.getElementById("mobileClose");
      const setMenu = (open) => {
        mNav.classList.toggle("open", open);
        burger.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", String(open));
        burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.classList.toggle("no-scroll", open);
      };
      burger.addEventListener("click", () => setMenu(!mNav.classList.contains("open")));
      if (close) close.addEventListener("click", () => setMenu(false));
      mNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        setMenu(false);
      }));
      document.addEventListener("keydown", e => { if (e.key === "Escape" && mNav.classList.contains("open")) setMenu(false); });
    }

    /* ---------- Back to top ---------- */
    const tt = document.getElementById("toTop");
    if (tt) tt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    /* ---------- Button ripple ---------- */
    document.querySelectorAll(".btn,.donate-btn,.amount-chip").forEach(btn => {
      btn.addEventListener("click", e => {
        const r = btn.getBoundingClientRect();
        const s = document.createElement("span");
        s.className = "ripple";
        const d = Math.max(r.width, r.height);
        s.style.width = s.style.height = d + "px";
        s.style.left = (e.clientX - r.left - d / 2) + "px";
        s.style.top = (e.clientY - r.top - d / 2) + "px";
        btn.appendChild(s);
        setTimeout(() => s.remove(), 650);
      });
    });

    /* ---------- Hero particles ---------- */
    const pc = document.querySelector(".particles");
    if (pc) {
      for (let i = 0; i < 18; i++) {
        const s = document.createElement("span");
        const size = Math.random() * 8 + 3;
        s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;bottom:-10px;animation-duration:${Math.random() * 8 + 6}s;animation-delay:${Math.random() * 8}s;`;
        pc.appendChild(s);
      }
    }

    /* ---------- Counters ---------- */
    const counters = document.querySelectorAll("[data-count]");
    if (counters.length) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          const el = en.target; io.unobserve(el);
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const dur = 2000, t0 = performance.now();
          const step = now => {
            const k = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - k, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      }, { threshold: 0.5 });
      counters.forEach(c => io.observe(c));
    }

    /* ---------- Progress bars ---------- */
    const bars = document.querySelectorAll(".bar i[data-w]");
    if (bars.length) {
      const bio = new IntersectionObserver(es => es.forEach(en => {
        if (en.isIntersecting) { en.target.style.width = en.target.dataset.w + "%"; bio.unobserve(en.target); }
      }), { threshold: 0.4 });
      bars.forEach(b => bio.observe(b));
    }

    /* ---------- Testimonials slider ---------- */
    const track = document.getElementById("testiTrack");
    if (track) {
      const slides = track.children.length;
      const dotsBox = document.getElementById("testiDots");
      let idx = 0, timer;
      for (let i = 0; i < slides; i++) {
        const d = document.createElement("button");
        d.setAttribute("aria-label", "Go to testimonial " + (i + 1));
        d.addEventListener("click", () => go(i));
        dotsBox.appendChild(d);
      }
      const dots = dotsBox.children;
      function go(i) {
        idx = (i + slides) % slides;
        track.style.transform = `translateX(-${idx * 100}%)`;
        [...dots].forEach((d, k) => d.classList.toggle("active", k === idx));
        restart();
      }
      function restart() { clearInterval(timer); timer = setInterval(() => go(idx + 1), 5200); }
      document.getElementById("tPrev").addEventListener("click", () => go(idx - 1));
      document.getElementById("tNext").addEventListener("click", () => go(idx + 1));
      let sx = 0;
      track.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
      track.addEventListener("touchend", e => {
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1));
      }, { passive: true });
      go(0);
    }

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll(".faq-item").forEach(item => {
      const q = item.querySelector(".faq-q"), a = item.querySelector(".faq-a");
      q.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach(o => {
          o.classList.remove("open"); o.querySelector(".faq-a").style.maxHeight = null;
        });
        if (!isOpen) { item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
      });
    });

    /* ---------- Donation chips ---------- */
    const chips = document.querySelectorAll(".amount-chip");
    const customIn = document.getElementById("customAmount");
    if (chips.length) {
      chips.forEach(c => c.addEventListener("click", () => {
        chips.forEach(x => x.classList.remove("active"));
        c.classList.add("active");
        if (customIn) customIn.value = c.dataset.amount;
      }));
    }
    const donateGo = document.getElementById("donateGo");
    if (donateGo) donateGo.addEventListener("click", () => {
      const amt = (customIn && customIn.value.trim()) || (document.querySelector(".amount-chip.active") || {}).dataset?.amount || "1000";
      donateGo.textContent = `Donating ₹${amt}…`;
      setTimeout(() => { donateGo.innerHTML = `${I.check} Thank You for ₹${amt}!`; }, 1200);
      setTimeout(() => { donateGo.innerHTML = `${I.heart} Donate Now`; }, 3600);
    });

    /* ---------- Newsletter (footer + section) ---------- */
    const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    function bindNews(formId, msgId) {
      const f = document.getElementById(formId); if (!f) return;
      const msg = document.getElementById(msgId);
      f.addEventListener("submit", e => {
        e.preventDefault();
        const inp = f.querySelector("input[type=email]");
        if (emailOk(inp.value.trim())) {
          if (msg) { msg.textContent = "Welcome aboard! You're now part of the change."; msg.className = "form-msg ok"; }
          inp.value = "";
        } else if (msg) {
          msg.textContent = "Please enter a valid email address."; msg.className = "form-msg err";
        }
      });
    }
    bindNews("footNews", "footNewsMsg");
    bindNews("newsForm", "newsMsg");

    /* ---------- Blog filter + search ---------- */
    const blogCards = document.querySelectorAll("#blogGrid .blog-card");
    if (blogCards.length) {
      const search = document.getElementById("blogSearch");
      const tabs = document.querySelectorAll(".filter-tab");
      let cat = "all";
      function apply() {
        const q = (search?.value || "").toLowerCase();
        let visible = 0;
        blogCards.forEach(card => {
          const okCat = cat === "all" || card.dataset.cat === cat;
          const okQ = !q || card.textContent.toLowerCase().includes(q);
          const show = okCat && okQ;
          card.style.display = show ? "" : "none";
          if (show) visible++;
        });
        const empty = document.getElementById("blogEmpty");
        if (empty) empty.style.display = visible ? "none" : "block";
        buildPagination(visible);
      }
      tabs.forEach(t => t.addEventListener("click", () => {
        tabs.forEach(x => x.classList.remove("active"));
        t.classList.add("active"); cat = t.dataset.cat; apply();
      }));
      if (search) search.addEventListener("input", apply);

      const pagBox = document.getElementById("blogPagination");
      const PER = 6;
      function buildPagination(total) {
        if (!pagBox) return;
        const pages = Math.max(1, Math.ceil(total / PER));
        let cur = 1;
        pagBox.innerHTML = "";
        for (let i = 1; i <= pages; i++) {
          const b = document.createElement("button");
          b.textContent = i;
          b.className = "amount-chip" + (i === 1 ? " active" : "");
          b.style.cssText = cat !== undefined ? "" : "";
          b.addEventListener("click", () => {
            cur = i;
            pagBox.querySelectorAll("button").forEach((x, k) => x.classList.toggle("active", k === i - 1));
            const shown = [...blogCards].filter(c => c.style.display !== "none");
            shown.forEach((c, k) => c.style.opacity = (k >= (cur - 1) * PER && k < cur * PER) ? "1" : ".25");
          });
          pagBox.appendChild(b);
        }
      }
      apply();
    }

    /* ---------- FAQ page: search + category tabs ---------- */
    const faqSearch = document.getElementById("faqSearch");
    if (faqSearch) {
      const faqTabs = document.querySelectorAll(".faq-tab");
      let fcat = "all";
      const items = document.querySelectorAll("#faqList .faq-item");
      function fApply() {
        const q = faqSearch.value.toLowerCase();
        items.forEach(it => {
          const okC = fcat === "all" || it.dataset.cat === fcat;
          const okQ = !q || it.textContent.toLowerCase().includes(q);
          it.style.display = (okC && okQ) ? "" : "none";
        });
      }
      faqTabs.forEach(t => t.addEventListener("click", () => {
        faqTabs.forEach(x => x.classList.remove("active"));
        t.classList.add("active"); fcat = t.dataset.cat; fApply();
      }));
      faqSearch.addEventListener("input", fApply);
    }

    /* ---------- Cursor glow ---------- */
    if (matchMedia("(hover:hover)").matches && !document.body.hasAttribute("data-no-glow")) {
      const glow = document.createElement("div");
      glow.className = "glow-cursor";
      document.body.appendChild(glow);
      window.addEventListener("mousemove", e => {
        glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px";
      }, { passive: true });
    }

    /* ---------- Footer year ---------- */
    document.querySelectorAll(".js-year").forEach(el => el.textContent = new Date().getFullYear());
  });

  window.SL = { icons: I };
})();
