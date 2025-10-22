document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const checkbox = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  // Initialize checkbox state
  checkbox.checked = savedTheme === 'light';
  root.setAttribute('data-theme', savedTheme);

  checkbox.addEventListener('change', () => {
    const theme = checkbox.checked ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});

