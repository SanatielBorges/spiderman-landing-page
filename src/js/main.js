$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">←</button>',
    nextArrow: '<button class="slick-next">→</button>',
  });
});

// ação do menu hamburger
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".header__toggle");
  const navMenu = document.querySelector(".header__nav");

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
