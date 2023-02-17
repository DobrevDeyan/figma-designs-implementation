export function slickSlider() {
  $(".building-views").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: ".previous-arrow",
    nextArrow: ".next-arrow",
    asNavFor: ".slider-wrapper",
  })
  $(".slider-wrapper").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".building-views",
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  })
}
