/* auth.js — STACKLY login / register / session (localStorage demo) */
(function () {
  "use strict";
  const KEY = "stackly_user";
  const dashboardForRole = role => role === "admin" ? "seller-dashboard.html" : "dashboard.html";
  const store = {
    get() { try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; } },
    set(u) { localStorage.setItem(KEY, JSON.stringify(u)); },
    clear() { localStorage.removeItem(KEY); }
  };
  window.SLAuth = {
    store,
    logout() { store.clear(); location.href = "index.html"; },
    require(role) {
      const u = store.get();
      if (!u) { location.href = "login.html"; return null; }
      if (role && u.role !== role) { location.href = dashboardForRole(u.role); return null; }
      return u;
    }
  };

  document.addEventListener("DOMContentLoaded", () => {

    /* ---- Password toggles ---- */
    document.querySelectorAll(".pass-toggle").forEach(t => {
      t.addEventListener("click", () => {
        const inp = t.parentElement.querySelector("input");
        const show = inp.type === "password";
        inp.type = show ? "text" : "password";
        t.innerHTML = show ? window.SL.icons.eyeOff : window.SL.icons.eye;
      });
    });

    /* ---- LOGIN ---- */
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      const msg = document.getElementById("authMsg");
      loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const V = window.SLValidate;
        const email = loginForm.querySelector('[data-f="email"]');
        const pass = loginForm.querySelector('[data-f="password"]');
        const role = loginForm.querySelector('[data-f="role"]').value;
        let ok = true;
        ok = V.setState(email.closest(".field"), V.email(email.value), "Enter a valid email.") && ok;
        ok = V.setState(pass.closest(".field"), pass.value.length >= 6, "Password must be at least 6 characters.") && ok;
        if (!ok) return;
        const users = JSON.parse(localStorage.getItem("stackly_users") || "[]");
        const found = users.find(u => u.email === email.value.trim().toLowerCase() && u.role === role);
        const normalizedEmail = email.value.trim().toLowerCase();
        const name = found ? found.name : normalizedEmail.split("@")[0];
        store.set({ name, email: normalizedEmail, role });
        msg.className = "auth-msg show ok";
        msg.textContent = `Welcome back, ${name.split(" ")[0]}! Redirecting…`;
        setTimeout(() => location.assign(dashboardForRole(role)), 1100);
      });
    }

    /* ---- REGISTER ---- */
    const regForm = document.getElementById("registerForm");
    if (regForm) {
      const msg = document.getElementById("authMsg");
      const pass = regForm.querySelector('[data-f="password"]');
      const strength = document.getElementById("passStrength");
      pass.addEventListener("input", () => {
        const { score } = window.SLValidate.strongPass(pass.value);
        strength.className = "pass-strength strength-" + score;
      });
      regForm.addEventListener("submit", e => {
        e.preventDefault();
        const V = window.SLValidate;
        const f = n => regForm.querySelector(`[data-f="${n}"]`);
        const F = n => f(n).closest(".field");
        let ok = true;
        ok = V.setState(F("name"), V.name(f("name").value), "Name should contain only letters and spaces.") && ok;
        ok = V.setState(F("email"), V.email(f("email").value), "Enter a valid email address.") && ok;
        ok = V.setState(F("phone"), V.phone(f("phone").value), "Enter a valid phone number.") && ok;
        const sp = V.strongPass(f("password").value);
        ok = V.setState(F("password"), sp.ok, "Use 8+ chars with uppercase, number & symbol.") && ok;
        ok = V.setState(F("confirm"), f("confirm").value === f("password").value && f("confirm").value !== "", "Passwords do not match.") && ok;
        const terms = regForm.querySelector('[data-f="terms"]');
        if (!terms.checked) { ok = false; msg.className = "auth-msg show err"; msg.textContent = "Please accept the Terms & Conditions."; }
        if (!ok) { if (terms.checked) { msg.className = "auth-msg show err"; msg.textContent = "Please fix the highlighted fields."; } return; }
        const users = JSON.parse(localStorage.getItem("stackly_users") || "[]");
        const email = f("email").value.trim().toLowerCase();
        if (users.some(u => u.email === email)) {
          msg.className = "auth-msg show err";
          msg.textContent = "This email is already registered. Please log in.";
          return;
        }
        users.push({ name: f("name").value.trim(), email, phone: f("phone").value.trim(), role: f("role").value });
        localStorage.setItem("stackly_users", JSON.stringify(users));
        msg.className = "auth-msg show ok";
        msg.textContent = "Registration successful! Redirecting to login…";
        setTimeout(() => location.href = "login.html", 1300);
      });
    }

    /* ---- Dashboard guards ---- */
    if (document.body.classList.contains("dash-user")) {
      const u = window.SLAuth.require("user");
      if (u) fillUser(u);
    }
    if (document.body.classList.contains("dash-admin")) {
      const u = window.SLAuth.require("admin");
      if (u) fillUser(u);
    }
    function fillUser(u) {
      document.querySelectorAll(".js-user-name").forEach(el => el.textContent = u.name);
      document.querySelectorAll(".js-user-email").forEach(el => el.textContent = u.email);
      document.querySelectorAll(".js-user-initial").forEach(el => el.textContent = u.name.charAt(0).toUpperCase());
    }

    /* ---- Logout buttons ---- */
    document.querySelectorAll("[data-logout]").forEach(b =>
      b.addEventListener("click", e => { e.preventDefault(); window.SLAuth.logout(); }));

    /* ---- Sidebar toggle (mobile) ---- */
    const tgl = document.getElementById("sideToggle");
    const sb = document.querySelector(".dash-sidebar");
    if (tgl && sb) tgl.addEventListener("click", () => {
      const isOpen = sb.classList.toggle("open");
      tgl.setAttribute("aria-expanded", String(isOpen));
    });
  });
})();
