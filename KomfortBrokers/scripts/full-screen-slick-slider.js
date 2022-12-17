export function fullScreenSlickSlider() {
  const openButton = document.querySelector(".full-screen-button")
  const overlay = document.getElementsByClassName("full-screen-overlay")[0]
  const closeButton = document.querySelector(".close-overlay")

  openButton.addEventListener("click", () => {
    overlay.classList.add("open")
    // overlay.focus()
    document.body.style.overflow = "hidden"
  })
  closeButton.addEventListener("click", () => {
    overlay.classList.remove("open")
    document.body.style.overflow = "auto"
  })

  $(".overlay-images").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: ".overlay-previous-arrow",
    nextArrow: ".overlay-next-arrow",
    asNavFor: ".overlay-wrapper",
  })
  $(".overlay-wrapper").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: ".overlay-images",
    centerMode: true,
    focusOnSelect: true,
    draggable: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  })
}
