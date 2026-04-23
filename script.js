// ── Mobile Navigation ──
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = nav.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
  spans[1].style.opacity = nav.classList.contains('open') ? '0' : '1';
  spans[2].style.transform = nav.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
});

// Close nav on link click (mobile)
nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});

// ── Header scroll shadow ──
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.style.boxShadow = window.scrollY > 30 ? '0 4px 20px rgba(0,0,0,0.12)' : '';
});

// ── WhatsApp Contact Form ──
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const interest = document.getElementById('interest').value;
  const message = document.getElementById('message').value.trim();

  let text = `Hi Mrs. Evergreen! 🌿\n\nName: ${name}\nPhone: ${phone}`;
  if (interest) text += `\nInterested in: ${interest}`;
  if (message) text += `\nMessage: ${message}`;

  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/919840580550?text=${encoded}`, '_blank');
}

// ── Intersection Observer for scroll animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.cat-layout, .feature-card, .why-card, .contact-inner').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add visible class to trigger animation
const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
