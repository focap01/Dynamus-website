// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('nav-open'));
  });
}

// Contact form — placeholder handling.
// NOTE: This does not send email yet. See README for how to connect
// a form service (e.g. Formspree) in about 5 minutes.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "Thanks — this form isn't wired up to send email yet. See the README for a 5-minute fix, or email hello@dynamustraining.com directly for now.";
    status.style.color = '#4a3aa0';
  });
}
