const heroName = document.getElementById('hero-name');

heroName.addEventListener('mousemove', e => {
  const rect = heroName.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  heroName.style.background = `radial-gradient(circle at ${x}px ${y}px, #95a3ea 0%, #b97a8b 32%, #f3917c 62%, #fec288 100%)`;
  heroName.style.webkitBackgroundClip = 'text';
  heroName.style.backgroundClip = 'text';
  heroName.style.webkitTextFillColor = 'transparent';
});

heroName.addEventListener('mouseleave', () => {
  heroName.style.background = '';
  heroName.style.webkitBackgroundClip = '';
  heroName.style.backgroundClip = '';
  heroName.style.webkitTextFillColor = '';
});