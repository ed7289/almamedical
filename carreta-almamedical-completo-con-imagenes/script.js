const initAlmaMedical = () => {
  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.specialist-item').forEach((item) => {
        const visible = filter === 'all' || item.dataset.category.split(' ').includes(filter);
        item.classList.toggle('d-none', !visible);
      });
    });
  });

  const toggleExpandable = (card) => {
    const expanded = card.getAttribute('aria-expanded') !== 'true';
    card.setAttribute('aria-expanded', String(expanded));
    card.classList.toggle('is-expanded', expanded);
    const details = card.querySelector('.specialist-details');
    if (details) details.hidden = !expanded;
    const icon = card.querySelector('.expand-hint i');
    if (icon) icon.className = expanded ? 'bi bi-chevron-up' : 'bi bi-chevron-down';
  };

  document.addEventListener('click', (event) => {
    const card = event.target.closest('[data-expandable]');
    if (!card || event.target.closest('a') || event.target.closest('.specialist-details')) return;
    toggleExpandable(card);
  });

  document.addEventListener('keydown', (event) => {
    const card = event.target.closest('[data-expandable]');
    if (!card || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    toggleExpandable(card);
  });

  const nav = document.getElementById('mainNav');
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAlmaMedical, { once: true });
} else {
  initAlmaMedical();
}
