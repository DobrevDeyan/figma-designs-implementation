// CLOS/OPEN FUNCTIONALITY PRODUCTS DROPDOWN
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

// CLOS/OPEN FUNCTIONALITY PROFILE DROPDOWN
$(document).ready(function () {
  $(".account-profile-menu").hide();
  $(".account-profile").click(function () {
    $(".account-profile-menu").toggle();
  });
});
// CLOS/OPEN FUNCTIONALITY MENU_MOBILE DROPDOWN
$(document).ready(function () {
  $(".navigation-menu-mobile-dropdown").css("display", "none");
  $(".mobile-menu-handle").click(function () {
    $(".navigation-menu-mobile-dropdown").slideToggle().css("display", "flex");
  });
});
