// Close offer bar when X is clicked
document.addEventListener("DOMContentLoaded", function () {
    const offerClose = document.getElementById("offer-close");
    const offerBar = document.querySelector(".offer-bar");

    if (offerClose && offerBar) {
        offerClose.addEventListener("click", () => {
            offerBar.style.display = "none";
        });
    }
});


// Select necessary elements
const sliderContainer = document.querySelector('.slider-image-container');
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;

let currentSlide = 0;

// Function to move slides
function updateSliderPosition() {
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

// Left button click
document.getElementById('slider-left-activate').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
});

// Right button click
document.getElementById('slider-right-activate').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSliderPosition();
});

// Toggle like button image on click
document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', () => {
    const currentSrc = button.getAttribute('src');
    if (currentSrc.includes('blackheart')) {
      button.setAttribute('src', 'Images/redheart icon.png');
    } else {
      button.setAttribute('src', 'Images/blackheart icon.png');
    }
  });
});

// Scroll Most Wanted section with keyboard arrows
const mostWantedSection = document.querySelector('.most-wanted');

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    mostWantedSection.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  } else if (event.key === 'ArrowLeft') {
    mostWantedSection.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }
});

//Transition effect

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".initial-scroll-animate");

    function revealOnScroll() {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inView = rect.top < window.innerHeight - 100;
            if (inView) {
                el.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
});


document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("side-navbar-activate");
    const closeBtn = document.getElementById("side-navbar-close");
    const sideNav = document.querySelector(".side-navbar");

    if (openBtn && closeBtn && sideNav) {
        openBtn.addEventListener("click", () => {
            sideNav.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            sideNav.classList.remove("active");
        });
    }
});
