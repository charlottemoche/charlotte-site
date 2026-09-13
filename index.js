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

const roles = [
  "Product engineer based in Brooklyn",
  "Painting major turned coder",
  "Bread baker and watercolor enthusiast",
  "Mediocre player of musical instruments"
];

const roleEl = document.getElementById('role-text');
let roleIndex = 0;

function typeRole(text, i = 0) {
  if (i === 0) roleEl.textContent = '';
  if (i < text.length) {
    roleEl.textContent += text[i];
    setTimeout(() => typeRole(text, i + 1), 50);
  } else {
    setTimeout(eraseRole, 1000);
  }
}

function eraseRole() {
  const text = roleEl.textContent;
  if (text.length > 0) {
    roleEl.textContent = text.slice(0, -1);
    setTimeout(eraseRole, 20);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(() => typeRole(roles[roleIndex]), 400);
  }
}

typeRole(roles[roleIndex]);