// ============================================================
// ENRIKO FAZAR MAULANA — PORTFOLIO
// main.js — boot sequence, typed role line, scroll reveal,
// progress bar, active nav link tracking
// ============================================================

// --- fade in once everything is ready ---
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  setTimeout(() => {
    document.querySelector('.loader')?.classList.add('hide');
  }, 1200);
});

// --- typed role line ---
if (window.Typed) {
  new Typed('.typing', {
    strings: [
      'electrical engineer',
      'gas distribution operator',
      'renewable energy enthusiast',
      'telecommunication & IoT',
      'field & safety oriented'
    ],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1400,
    loop: true
  });
}

// --- scroll reveal ---
if (window.ScrollReveal) {
  ScrollReveal().reveal(
    '.panel-card, .focus-card, .log-item, .gallery-frame, .contact-card',
    {
      distance: '50px',
      duration: 1000,
      origin: 'bottom',
      interval: 90,
      reset: false,
      easing: 'cubic-bezier(.2,.8,.2,1)'
    }
  );
}

// --- scroll progress bar ---
const progressBar = document.querySelector('.progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = scrolled + '%';

  updateActiveNav();
});

// --- active nav link based on section in view ---
const navLinks = document.querySelectorAll('nav ul li a');
const sections = Array.from(navLinks)
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function updateActiveNav() {
  const scrollPos = window.scrollY + window.innerHeight * 0.35;
  let currentIndex = 0;

  sections.forEach((sec, i) => {
    if (sec.offsetTop <= scrollPos) currentIndex = i;
  });

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[currentIndex]?.classList.add('active');
}

updateActiveNav();
