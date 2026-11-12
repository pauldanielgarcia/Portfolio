// CUSTOMIZE YOUR PORTFOLIO HERE
// Replace each videoUrl with a public YouTube/Vimeo URL or a direct video file URL.
// Update titles, descriptions, and categories to match your real projects.
const projects = [
  { title: 'Built Different', category: 'Fitness / Short-form', videoUrl: '', message: 'Add your video URL for this project in script.js.' },
  { title: 'The Long Game', category: 'YouTube / Storytelling', videoUrl: '', message: 'Add your video URL for this project in script.js.' },
  { title: 'Form Matters', category: 'Fitness / Motion Graphics', videoUrl: '', message: 'Add your video URL for this project in script.js.' },
  { title: 'The Daily Cut', category: 'Social / Short-form', videoUrl: '', message: 'Add your video URL for this project in script.js.' }
];

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Project category filters
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  filter.classList.add('active');
  const selected = filter.dataset.filter;
  cards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    card.classList.toggle('hidden', selected !== 'all' && !categories.includes(selected));
  });
}));

// Project preview modal. Add videoUrl values above to show a link in the preview.
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[Number(button.dataset.project)];
  modalTitle.textContent = project.title.toUpperCase();
  modalMessage.textContent = project.videoUrl ? `Project link: ${project.videoUrl}` : project.message;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}));
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
