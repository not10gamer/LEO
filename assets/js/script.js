const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.querySelector('.close');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = item.src;
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
