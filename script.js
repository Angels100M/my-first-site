// hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// contact form
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(f => {
      f.style.borderColor = f.value.trim() ? 'var(--border)' : 'rgba(239,68,68,.6)';
      if (!f.value.trim()) valid = false;
    });
    if (!valid) return;
    form.style.display = 'none';
    successMsg.style.display = 'block';
  });
}
