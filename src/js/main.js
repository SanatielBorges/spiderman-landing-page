$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">←</button>',
    nextArrow: '<button class="slick-next">→</button>',
  });
});
