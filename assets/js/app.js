// Hide the loader after 1 second
setTimeout(() => {
  document.querySelector(".loading").style.display = "none";
}, 1000);

// Reusable carousel initializer
function initCarousel(selector, options) {
  $(selector).owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    ...options,
  });
}

// Companys Carousel
initCarousel(".companys-section .owl-carousel", {
  margin: 10,
  autoplayTimeout: 1000,
  responsive: {
    0: { items: 2, dots: false },
    600: { items: 4, dots: false },
    1000: { items: 6, dots: true },
  },
});

// Areas Work Carousel
initCarousel(".areas-work-section .owl-carousel", {
  margin: 20,
  autoplayTimeout: 5000,
  items: 1,
  navText: ["<span>السابق</span>", "<span>التالي</span>"],
  responsive: {
    0: { dots: false },
    600: { dots: false },
    1000: { dots: true },
  },
});

// Projects Carousel
const owl = $(".projects-section .owl-carousel");
initCarousel(owl, {
  margin: 20,
  autoplayTimeout: 5000,
  navText: ["<span>السابق</span>", "<span>التالي</span>"],
  responsive: {
    0: { items: 1, dots: false },
    600: { items: 2, dots: false },
    1000: { items: 3, dots: true },
  },
});

// Owl autoplay control
$(".play").on("click", () => {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", () => {
  owl.trigger("stop.owl.autoplay");
});

// Animated Counter
const nums = document.querySelectorAll(".nums .num");
const section = document.querySelector(".experience-section");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop - 400 && !started) {
    nums.forEach((num) => startCount(num));
    started = true;
  }
});

function startCount(el) {
  const goal = +el.dataset.goal;
  let count = 0;
  const increment = Math.ceil(goal / (3000 / 16)); // ~60fps
  const update = () => {
    count += increment;
    if (count >= goal) {
      el.textContent = goal;
    } else {
      el.textContent = count;
      requestAnimationFrame(update);
    }
  };
  update();
}

// Bootstrap form validation
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });
})();
