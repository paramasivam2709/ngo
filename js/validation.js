/* validation.js — STACKLY form validators */
(function () {
  "use strict";
  window.SLValidate = {
    name(v) { return /^[A-Za-z][A-Za-z\s.'-]{1,59}$/.test(v.trim()); },
    email(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); },
    phone(v) { return /^(\+?\d[\d\s()-]{7,15})$/.test(v.trim()); },
    message(v) { return v.trim().length >= 10; },
    strongPass(v) {
      let s = 0;
      if (v.length >= 8) s++;
      if (/[A-Z]/.test(v)) s++;
      if (/[0-9]/.test(v)) s++;
      if (/[^A-Za-z0-9]/.test(v)) s++;
      return { score: s, ok: s >= 3 };
    },
    setState(fieldEl, ok, msg) {
      fieldEl.classList.toggle("invalid", !ok);
      const err = fieldEl.querySelector(".err");
      if (err && msg) err.textContent = msg;
      return ok;
    }
  };

  /* Contact form wiring (contact.html) */
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const V = window.SLValidate;
    const F = n => form.querySelector(`[data-f="${n}"]`).closest(".field");
    const nameInput = form.querySelector('[data-f="name"]');
    const phoneInput = form.querySelector('[data-f="phone"]');
    const keepMatchingCharacters = (input, allowedCharacters) => {
      input.addEventListener("input", () => {
        const cursor = input.selectionStart;
        const beforeCursor = input.value.slice(0, cursor);
        const filteredBeforeCursor = beforeCursor.replace(allowedCharacters, "");
        input.value = input.value.replace(allowedCharacters, "");
        const nextCursor = Math.min(filteredBeforeCursor.length, input.value.length);
        input.setSelectionRange(nextCursor, nextCursor);
      });
    };
    keepMatchingCharacters(nameInput, /[^A-Za-z ]/g);
    keepMatchingCharacters(phoneInput, /[^0-9]/g);
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = form.querySelector('[data-f="name"]');
      const email = form.querySelector('[data-f="email"]');
      const phone = form.querySelector('[data-f="phone"]');
      const msg = form.querySelector('[data-f="message"]');
      let ok = true;
      ok = V.setState(F("name"), /^[A-Za-z ]{2,60}$/.test(name.value.trim()), "Name should contain only letters and spaces.") && ok;
      ok = V.setState(F("email"), V.email(email.value), "Please enter a valid email address.") && ok;
      ok = V.setState(F("phone"), /^\d{8,15}$/.test(phone.value), "Please enter an 8–15 digit phone number.") && ok;
      ok = V.setState(F("message"), V.message(msg.value), "Message must be at least 10 characters.") && ok;
      const box = document.getElementById("contactMsg");
      if (ok) {
        box.className = "auth-msg show ok";
        box.textContent = "Message sent! Our team will reach out within 24 hours.";
        form.reset();
        setTimeout(() => box.classList.remove("show"), 5000);
      } else {
        box.className = "auth-msg show err";
        box.textContent = "Please fix the highlighted fields and try again.";
      }
    });
    form.querySelectorAll("input,textarea").forEach(el =>
      el.addEventListener("input", () => el.closest(".field").classList.remove("invalid")));
  });
})();
