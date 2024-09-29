let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Show specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

// Next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-change slides every 5 seconds
setInterval(nextSlide, 5000);

// Initialize slideshow
showSlide(currentSlide);
