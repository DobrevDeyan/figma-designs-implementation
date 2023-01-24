$(".dropdown-menu-container").mouseenter(function () {
  $(".megamenu").stop(true, true).slideDown(600);
  $(".megamenu").css("display", "flex");
  $(".dropdown-menu-container").css();
});
$(".megamenu").mouseleave(function () {
  if (!$(".megamenu:hover").length) {
    $(".megamenu").stop(true, true).slideUp(600);
  }
});
$(".dropdown-menu-container").click(function () {
  $(".megamenu").stop(true, true).slideToggle(200);
  $(".megamenu").css("display", "flex");
});
$(".dropdown-menu-container").click(function () {
  $(".dropdown-button p").toggleClass("bordered");
});
