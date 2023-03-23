// JQUERY MESSAGE SENT POP UP MODAL FUNCTIONALITY

$(document).ready(function () {
  $(".query").click(function (e) {
    e.preventDefault()

    $("#message-modal").fadeIn(1200)
    $("#modal-overlay").fadeIn()
    $("body").css("overflow", "hidden")
    $(".close-modal").click(function () {
      $("body").css("overflow", "auto")
      $("#modal-overlay").fadeOut(500)
      $("#message-modal").fadeOut(1200)
    })
  })
})

// INDIVIDUAL ITEM SLIDER FOR MOBILE

$(".full-screen-button").on("click", function () {
  if ($(window).width() < 767) {
    $(".full-screen-overlay").addClass("open")
    $("body").css("overflow", "hidden")
  }
})

// close the overlay when a click event is triggered outside the slider
$(".full-screen-overlay").on("click", function (event) {
  // check if the click event originated from the overlay or its child elements
  if (event.target === this) {
    $(".full-screen-overlay").removeClass("open")
    $("body").css("overflow", "auto")
  }
})

// $(".close-overlay").on("click", function () {
//   if ($(window).width() < 767) {
//     $(".full-screen-overlay").removeClass("open")
//     $("body").css("overflow", "auto")
//   }
// })

$(window).on("resize", function () {
  if ($(window).width() >= 767) {
    $(".full-screen-overlay").removeClass("open")
    $("body").css("overflow", "auto")
  }
})

// code to initialize the slider
$(".overlay-images").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  prevArrow: ".overlay-previous-arrow",
  nextArrow: ".overlay-next-arrow",
  asNavFor: ".overlay-wrapper",
})

$(".overlay-wrapper").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".overlay-images",
  focusOnSelect: true,
  draggable: true,
  infinite: true,
  arrows: false,
})
