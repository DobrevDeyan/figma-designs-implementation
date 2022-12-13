export function fullScreenSlickSlider() {
  const openButton = document.querySelector(".full-screen-button")
  const overlay = document.querySelector(".full-screen-overlay")
  const closeButton = document.querySelector(".close-overlay")
  openButton.addEventListener("click", () => {
    overlay.style.display = "flex"
    document.body.style.overflow = "hidden"
  })
  closeButton.addEventListener("click", () => {
    overlay.style.display = "none"
    document.body.style.overflow = "auto"
  })

  $(".overlay-images").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: ".overlay-previous-arrow",
    nextArrow: ".overlay-next-arrow",
    asNavFor: ".overlay-wrapper",
    initialSlide: 4,
  })
  $(".overlay-wrapper").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: ".overlay-images",
    centerMode: true,
    focusOnSelect: true,
    draggable: true,
    swipeToSlide: true,
    arrows: false,
  })
}
