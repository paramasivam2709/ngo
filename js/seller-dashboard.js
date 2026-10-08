/* seller-dashboard.js — STACKLY admin dashboard (Vanilla JS charts) */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (!document.body.classList.contains("dash-admin")) return;

    /* Revenue bar chart */
    const chart = document.getElementById("revenueChart");
    if (chart) {
      const data = JSON.parse(chart.dataset.values);
      const labels = JSON.parse(chart.dataset.labels);
      const max = Math.max(...data);
      data.forEach((v, i) => {
        const col = document.createElement("div");
        col.className = "bar-col";
        col.innerHTML = `<div class="bar ${i % 2 ? "" : "alt"}" data-v="₹${v}L"><span></span></div><span class="bar-label">${labels[i]}</span>`;
        chart.appendChild(col);
      });
      const io = new IntersectionObserver(es => es.forEach(en => {
        if (en.isIntersecting) {
          chart.querySelectorAll(".bar").forEach((b, i) =>
            setTimeout(() => b.style.height = (data[i] / max * 100) + "%", i * 80));
          io.disconnect();
        }
      }), { threshold: 0.3 });
      io.observe(chart);
    }

    /* Donut chart — pure SVG */
    const donut = document.getElementById("donutChart");
    if (donut) {
      const segs = JSON.parse(donut.dataset.segments); // [{v,color,label}]
      const total = segs.reduce((s, x) => s + x.v, 0);
      const R = 66, C = 2 * Math.PI * R;
      let offset = 0;
      segs.forEach(s => {
        const frac = s.v / total;
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("r", R); c.setAttribute("cx", 85); c.setAttribute("cy", 85);
        c.setAttribute("stroke", s.color);
        c.setAttribute("stroke-dasharray", `${frac * C - 4} ${C - frac * C + 4}`);
        c.setAttribute("stroke-dashoffset", -offset * C + C * 0.25);
        donut.appendChild(c);
        offset += frac;
      });
      const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
      label.setAttribute("x", 85); label.setAttribute("y", 82);
      label.setAttribute("text-anchor", "middle");
      label.setAttribute("style", "font:800 22px Sora;fill:#0B1F33");
      label.textContent = "₹" + total + "L";
      donut.appendChild(label);
      const sub = document.createElementNS("http://www.w3.org/2000/svg", "text");
      sub.setAttribute("x", 85); sub.setAttribute("y", 102);
      sub.setAttribute("text-anchor", "middle");
      sub.setAttribute("style", "font:600 10px 'Plus Jakarta Sans';fill:#6B7A88");
      sub.textContent = "THIS QUARTER";
      donut.appendChild(sub);
    }

    /* Animated stats */
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

    /* Progress bars */
    document.querySelectorAll(".prog-row .bar i[data-w]").forEach(b => {
      const io = new IntersectionObserver(es => es.forEach(en => {
        if (en.isIntersecting) { b.style.width = b.dataset.w + "%"; io.disconnect(); }
      }), { threshold: 0.4 });
      io.observe(b);
    });
  });
})();
