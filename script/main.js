// Menu Moba

let navBar = document.querySelector(".header .nav");

document.querySelector("#menu-btn").addEventListener("click", () => {
  navBar.classList.add("active");
});

document.querySelector("#nav-close").addEventListener("click", () => {
  navBar.classList.remove("active");
});

/* Scroll Header efeito
=======================================================*/

window.onscroll = (e) => {
  navBar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  e.stopPropagation;
};

// Slide Home

var swiper = new Swiper(".home__slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Slide de Produtos
========================================================*/

var swiper = new Swiper(".produtos-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* Slide de Produtos end
======================================================== */

/* slide dos comentarios 
======================================================== */

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 18,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

/* slide dos comentarios / End
======================================================== */

/* Slide Cliente
============================================================== */

var swiper = new Swiper(".blog__slide", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

/* Slide Cliente / End
============================================================== */

/* Slide Cliente
============================================================== */

var swiper = new Swiper(".cliente__slide", {
  loop: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/* Slide Cliente / End
============================================================== */
