'use strict';

/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('pageLoader').classList.add('hidden');
  }, 1600);
});

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── MOBILE MENU ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  const [a,b,c] = hamburger.querySelectorAll('span');
  a.style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
  b.style.opacity   = open ? '0' : '1';
  c.style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
  navLinks.classList.remove('open');
  hamburger.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity='1'; });
}));

/* ── REVEAL ON SCROLL ── */
const revealEls = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin:'0px 0px -50px 0px' });
revealEls.forEach(el => revObs.observe(el));

/* ── COUNTERS ── */
let counted = false;
const counters = document.querySelectorAll('.sb-num');
const cntObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !counted) {
    counted = true;
    counters.forEach(el => {
      const target = parseInt(el.dataset.t, 10);
      const dur = 2000;
      const step = target / (dur / 16);
      let cur = 0;
      const tick = () => { cur += step; if (cur < target) { el.textContent = Math.floor(cur).toLocaleString(); requestAnimationFrame(tick); } else { el.textContent = target.toLocaleString(); } };
      requestAnimationFrame(tick);
    });
    cntObs.disconnect();
  }
}, { threshold: 0.5 });
const statsEl = document.querySelector('.stats-band');
if (statsEl) cntObs.observe(statsEl);

/* ── SKILL BARS ── */
const fills = document.querySelectorAll('.skl-fill');
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.width = e.target.dataset.w + '%'; skillObs.unobserve(e.target); } });
}, { threshold: 0.5 });
fills.forEach(f => skillObs.observe(f));

/* ── ACTIVE NAV ── */
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(s => {
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
      links.forEach(l => l.classList.remove('active'));
      const a = document.querySelector(`.nav-links a[href="#${s.id}"]`);
      if (a) a.classList.add('active');
    }
  });
});

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior:'smooth', block:'start' });
  });
});

/* ── CONTACT FORM ── */
const form = document.getElementById('contactForm');
const formOk = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span>Envoi en cours...</span>';
    btn.disabled = true;
    setTimeout(() => {
      form.reset();
      btn.innerHTML = '<span>✓ Message envoyé !</span>';
      formOk.classList.add('show');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        formOk.classList.remove('show');
      }, 4000);
    }, 1600);
  });
}

/* ── CHART BARS ANIMATE ── */
const chartBars = document.querySelectorAll('.cbar');
setTimeout(() => {
  chartBars.forEach((bar, i) => {
    setTimeout(() => {
      bar.style.opacity = '1';
    }, i * 80);
  });
}, 2000);

/* ── CURSOR GLOW (desktop) ── */
if (window.innerWidth > 768) {
  const glow = document.createElement('div');
  glow.style.cssText = 'position:fixed;width:350px;height:350px;border-radius:50%;background:radial-gradient(circle,rgba(204,255,0,0.035) 0%,transparent 70%);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:left 0.08s,top 0.08s;';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });
}

/* ── SERVICE CARDS HOVER EFFECT ── */
const srvCards = document.querySelectorAll('.srv-card');
srvCards.forEach(card => {
  card.addEventListener('mouseenter', () => srvCards.forEach(c => { if (c !== card) { c.style.opacity='.65'; c.style.transform='scale(0.98)'; } }));
  card.addEventListener('mouseleave', () => srvCards.forEach(c => { c.style.opacity=''; c.style.transform=''; }));
});

/* ── FLOATING CARDS PARALLAX (subtle) ── */
if (window.innerWidth > 1024) {
  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
    document.querySelectorAll('.flt-card').forEach((card, i) => {
      const f = (i + 1) * 4;
      card.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
    });
  });
}

console.log('%c OCG Consulting v2.0 — Casablanca, Maroc 🟢', 'background:#CCFF00;color:#07090A;padding:8px 20px;font-weight:800;border-radius:6px;font-size:13px;');