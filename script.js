/**
 * HackITon'26 — Coming Soon — script.js
 * Handles staggered entrance animations on page load.
 * No external dependencies. Pure vanilla JS.
 */

(function () {
  'use strict';

  /**
   * Sequentially trigger CSS animation classes on elements.
   * Each element receives the 'anim-in' class after its delay.
   * @param {Array<{selector: string, delay: number}>} sequence
   */
  function runEntranceSequence(sequence) {
    sequence.forEach(function (item) {
      var el = document.getElementById(item.id);
      if (!el) return;
      setTimeout(function () {
        el.classList.add('anim-in');
      }, item.delay);
    });
  }

  /**
   * Staggered page-load animation sequence.
   * Mirrors the spec: logo → cat → heading → support text → divider → card → bottom → branding
   */
  var animSequence = [
    { id: 'logo-ring',        delay: 80  },
    { id: 'cat-wrapper',      delay: 320 },
    { id: 'heading-wrapper',  delay: 560 },
    { id: 'support-text',     delay: 760 },
    { id: 'divider',          delay: 920 },
    { id: 'status-card',      delay: 1050 },
    { id: 'bottom-message',   delay: 1200 },
    { id: 'brand-signature',  delay: 1380 },
  ];

  /**
   * Apply 'anim-in' to logo-section wrapper separately
   * (since the logo-section contains the logo-ring and handles its own fade)
   */
  function animateLogoSection() {
    var logoSection = document.querySelector('.logo-section');
    if (logoSection) {
      setTimeout(function () {
        logoSection.classList.add('anim-in');
      }, 60);
    }
  }

  /**
   * Animated dots in status card (fallback for CSS @keyframes content trick
   * which doesn't work in all browsers).
   */
  function initStatusDots() {
    var dotsEl = document.querySelector('.status-dots');
    if (!dotsEl) return;

    var states = ['.', '..', '...'];
    var idx = 0;

    // Use CSS animation if supported, otherwise JS fallback
    dotsEl.textContent = '';
    setInterval(function () {
      dotsEl.textContent = states[idx % states.length];
      idx++;
    }, 600);
  }

  /**
   * Init on DOM ready.
   */
  function init() {
    // Respect user's prefers-reduced-motion setting
    var prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Make everything visible immediately
      var allAnimated = document.querySelectorAll(
        '.logo-section, #cat-wrapper, #heading-wrapper, #support-text, #divider, #status-card, #bottom-message, #brand-signature'
      );
      allAnimated.forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    } else {
      animateLogoSection();
      runEntranceSequence(animSequence);
    }

    initStatusDots();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
