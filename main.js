/* =========================================================
   Portfolio — Youssef El Kasri : interactions
   ========================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Projets personnels : une étude de cas ouverte à la fois ---------- */
  var cards = document.querySelectorAll('.project-card');
  var details = document.querySelectorAll('.detail');

  function closeAll() {
    details.forEach(function (d) { d.hidden = true; });
    cards.forEach(function (c) {
      c.setAttribute('aria-expanded', 'false');
      c.querySelector('.cta-label').textContent = 'voir le projet';
    });
  }

  function openProject(id) {
    var card = document.querySelector('.project-card[data-project="' + id + '"]');
    var detail = document.getElementById('detail-' + id);
    var alreadyOpen = card.getAttribute('aria-expanded') === 'true';
    closeAll();
    if (alreadyOpen) return;
    detail.hidden = false;
    card.setAttribute('aria-expanded', 'true');
    card.querySelector('.cta-label').textContent = 'projet ouvert ci-dessous';
    detail.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    if (history.replaceState) history.replaceState(null, '', '#projet-' + id);
  }

  cards.forEach(function (card) {
    card.addEventListener('click', function () { openProject(card.dataset.project); });
  });

  document.querySelectorAll('[data-close]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.closest('.detail').id.replace('detail-', '');
      closeAll();
      document.querySelector('.project-card[data-project="' + id + '"]').focus();
      if (history.replaceState) history.replaceState(null, '', '#projets');
    });
  });

  // Lien direct vers un projet : monsite.com/#projet-ovlik
  var hash = location.hash.match(/^#projet-(ovlik|frontier|devil)$/);
  if (hash) openProject(hash[1]);

  /* ---------- Projets d'études : déplier le détail ---------- */
  document.querySelectorAll('.study__toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      btn.querySelector('.toggle-label').textContent = open ? 'masquer le détail' : 'voir le détail';
      btn.querySelector('.toggle-icon').textContent = open ? '−' : '+';
      btn.closest('.study').classList.toggle('is-open', open);
    });
  });

  /* ---------- Scène 3D du hero : suit la souris ---------- */
  var scene = document.querySelector('.scene');
  var tilt = document.getElementById('scene-tilt');
  if (scene && tilt && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    scene.addEventListener('mousemove', function (e) {
      var r = scene.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = 'rotateY(' + (x * 14) + 'deg) rotateX(' + (-y * 10) + 'deg)';
    });
    scene.addEventListener('mouseleave', function () { tilt.style.transform = ''; });
  }

  /* ---------- Apparition au défilement ---------- */
  var revealed = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealed.forEach(function (el) { io.observe(el); });
  } else {
    revealed.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Année du pied de page ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
