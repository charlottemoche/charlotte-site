const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const targets = new Map();
navLinks.forEach(link => {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) targets.set(link, target);
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = targets.get(link);
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 16;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});