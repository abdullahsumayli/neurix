/* ===========================================================
   NEURIX — site interactions
   - Bilingual (AR/EN) toggle with localStorage persistence
   - Direction (RTL/LTR) + font switching via <html lang/dir>
   - Mobile nav, active link, scroll reveal
   =========================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'neurix-lang';
  var DEFAULT_LANG = 'ar';

  /* ---- Language ---------------------------------------- */
  function applyLang(lang) {
    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Fill every translatable node
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val === null) return;
      if (el.hasAttribute('data-attr')) {
        el.setAttribute(el.getAttribute('data-attr'), val);
      } else {
        el.textContent = val;
      }
    });

    // Update toggle label: show the OTHER language
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'ar' ? 'EN' : 'عربي';
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    });

    // Update <title> if it carries translations
    var t = document.querySelector('title[data-en]');
    if (t) document.title = t.getAttribute('data-' + lang) || document.title;
  }

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; }
    catch (e) { return DEFAULT_LANG; }
  }
  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  // Apply as early as possible
  applyLang(getLang());

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());

    /* ---- Lang toggle ---------------------------------- */
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(getLang() === 'ar' ? 'en' : 'ar');
      });
    });

    /* ---- Mobile nav ----------------------------------- */
    var menuBtn = document.querySelector('.menu-btn');
    var navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          menuBtn.classList.remove('open');
          navLinks.classList.remove('open');
        });
      });
    }

    /* ---- Active nav link ------------------------------ */
    var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (page === '') page = 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').toLowerCase();
      if (href === page) a.classList.add('active');
    });

    /* ---- Scroll reveal -------------------------------- */
    var items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && items.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      items.forEach(function (el, i) {
        el.style.transitionDelay = (Math.min(i % 6, 5) * 70) + 'ms';
        io.observe(el);
      });
    } else {
      items.forEach(function (el) { el.classList.add('in'); });
    }

    /* ---- Contact form (mailto, no backend) ------------ */
    var form = document.querySelector('#contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = (form.querySelector('[name=name]') || {}).value || '';
        var email = (form.querySelector('[name=email]') || {}).value || '';
        var msg = (form.querySelector('[name=message]') || {}).value || '';
        var subject = encodeURIComponent('Website inquiry — ' + name);
        var body = encodeURIComponent(msg + '\n\n— ' + name + ' (' + email + ')');
        window.location.href = 'mailto:info@neurix.sa?subject=' + subject + '&body=' + body;
      });
    }
  });
})();
