// Changes: Added functionality for updating active slide and dot on click
// Select elements
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

// Initialize dots based on the number of slides
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active'); // First dot active
  dot.addEventListener('click', () => {
    goToSlide(index); // Changes: Add click functionality to go to the selected slide
  });
  dotsContainer.appendChild(dot);
});

// Changes: Update function for active slide and dot
function updateActiveSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));

  // Add active class to the current slide and corresponding dot
  slides[index].classList.add('active');
  document.querySelectorAll('.dot')[index].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  updateActiveSlide(currentIndex); // Changes: Update active slide and dot when called
}

// Changes: Added auto slide feature (every 5 seconds)
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
  updateActiveSlide(currentIndex);
}, 5000);
// This code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');

  // Add a scroll event listener
  window.addEventListener('scroll', function() {
    // Check the scroll position
    if (window.scrollY > 0) {
      navbar.classList.remove('hide'); // Remove the hide class
      navbar.classList.add('show');     // Add the show class
    } else {
      navbar.classList.remove('show');  // Remove the show class
      navbar.classList.add('hide');      // Add the hide class
    }
  });
});
