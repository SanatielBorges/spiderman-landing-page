$(document).ready(function () {
  $(".multiple-items").slick({
    slidesToShow: 3, // Exibe 3 slides por vez
    slidesToScroll: 1,
    prevArrow: '<div class="custom-prev"></div>',
    nextArrow: '<div class="custom-next"></div>',
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      {
        breakpoint: 768, // Para tablets e telas menores
        settings: {
          slidesToShow: 2, // Exibe 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Para smartphones
        settings: {
          slidesToShow: 1, // Exibe 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// ação do menu hamburger

document.addEventListener("DOMContentLoaded", function () {
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const navMenu = document.querySelector(".header__nav ul");

  menuHamburguer.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
