export function fullScreenSlickSlider() {
  const openButton = document.querySelector(".full-screen-button");
  const overlay = document.getElementsByClassName("full-screen-overlay")[0];
  const closeButton = document.querySelector(".close-overlay");

  console.log(overlay);
  openButton.addEventListener("click", () => {
      console.log(overlay.classList);
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
  });
  closeButton.addEventListener("click", () => {
      overlay.classList.remove("open");
      document.body.style.overflow = "auto";
  });

  $(".overlay-images").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: ".overlay-previous-arrow",
      nextArrow: ".overlay-next-arrow",
      asNavFor: ".overlay-wrapper",
      initialSlide: 4,
  });
  $(".overlay-wrapper").slick({
      slidesToShow: 9,
      slidesToScroll: 1,
      asNavFor: ".overlay-images",
      centerMode: true,
      focusOnSelect: true,
      draggable: true,
      // swipeToSlide: true,
      arrows: false,
      responsive: [
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              },
          },
      ],
  });
}
