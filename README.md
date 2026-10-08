# STACKLY — NGO Charity Platform

> **"Small Acts. Big Change."**

A premium, fully responsive NGO website built with **pure HTML5, CSS3 and Vanilla JavaScript** — no React, no jQuery, no Bootstrap JS.

## Features

**13 pages:** Home, About, Services, Blog, Pricing (donation plans), FAQ, Contact, Login, Register, 404, User Dashboard, Admin Dashboard, plus shared partials injected by JS.

- Animated preloader with progress ring, sticky glass navbar, clip-path mobile menu
- AOS scroll animations + custom IntersectionObserver reveals, typing effect, parallax, magnetic buttons, cursor glow, particles, ripple buttons
- Animated counters, progress bars, testimonial slider (auto + swipe + dots), FAQ accordion, blog/FAQ search & category filtering, donation amount picker, newsletter validation
- Role-based auth (localStorage): User → dashboard.html, Admin → seller-dashboard.html
- Pure-JS/SVG bar charts and donut chart — no chart library
- Optimized WebP images, lazy loading, transform-based 60fps animations

## Getting Started

1. Unzip and open `index.html` in a browser (or serve: `npx serve .`).
2. Demo auth: Register on `register.html` (pick User or Admin), then login — you'll be redirected to the matching dashboard.

## Structure

```
stackly-ngo/
├── *.html              (13 pages)
├── css/   style · responsive · animation · dashboard · auth
├── js/    main · animation · validation · auth · dashboard · seller-dashboard
├── img/   hero · about · services · projects · blog · team · testimonials (WebP)
├── svg/   logo.svg · heart.svg
└── README.md
```

## Palette
`#087F5B` green · `#064E3B` dark green · `#FF6B1A` orange · `#FFB703` gold · `#0B1F33` navy · `#FFF9F2` cream

© STACKLY NGO — demo project.
