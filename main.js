window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('main-content');

  // Tambahkan delay 3 detik sebelum menyembunyikan preloader
  setTimeout(() => {
    preloader.style.display = 'none';
    content.style.display = 'block';
    content.style.opacity = 1;
  }, 3000); // 3000 milidetik = 3 detik
});
