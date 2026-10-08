/* dashboard.js — STACKLY user dashboard (Vanilla JS charts) */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (!document.body.classList.contains("dash-user")) return;

    /* Bar chart */
    const chart = document.getElementById("donationChart");
    if (chart) {
      const data = JSON.parse(chart.dataset.values);
      const labels = JSON.parse(chart.dataset.labels);
      const max = Math.max(...data);
      data.forEach((v, i) => {
        const col = document.createElement("div");
        col.className = "bar-col";
        col.innerHTML = `<div class="bar ${i % 2 ? "alt" : ""}" data-v="₹${v}k" title="₹${v}k"><span></span></div><span class="bar-label">${labels[i]}</span>`;
        chart.appendChild(col);
      });
      const io = new IntersectionObserver(es => es.forEach(en => {
        if (en.isIntersecting) {
          chart.querySelectorAll(".bar").forEach((b, i) =>
            setTimeout(() => b.style.height = (data[i] / max * 100) + "%", i * 90));
          io.disconnect();
        }
      }), { threshold: 0.3 });
      io.observe(chart);
    }

    /* Progress rows */
    document.querySelectorAll(".prog-row .bar i[data-w]").forEach(b => {
      const io = new IntersectionObserver(es => es.forEach(en => {
        if (en.isIntersecting) { b.style.width = b.dataset.w + "%"; io.disconnect(); }
      }), { threshold: 0.4 });
      io.observe(b);
    });

    /* Animate stat numbers */
    document.querySelectorAll("[data-dashcount]").forEach(el => {
      const target = parseFloat(el.dataset.dashcount);
      const prefix = el.dataset.prefix || "", suffix = el.dataset.suffix || "";
      const io = new IntersectionObserver(es => es.forEach(en => {
        if (!en.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now(), dur = 1600;
        (function step(now) {
          const k = Math.min(1, (now - t0) / dur);
          el.textContent = prefix + (target % 1 ? (target * (1 - Math.pow(1 - k, 3))).toFixed(1) : Math.round(target * (1 - Math.pow(1 - k, 3)))) + suffix;
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      }), { threshold: 0.4 });
      io.observe(el);
    });
  });
})();
