window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('main-content');

  // Hilangkan preloader dan tampilkan konten utama
  preloader.style.display = 'none';
  content.style.display = 'block';
  content.style.opacity = 1;
});
