// DESKTOP FILTERS
export function desktopFilter() {
  $(document).ready(function () {
    $(".category-select").select2({
      closeOnSelect: true,
      placeholder: "Избери опция",
      allowClear: true,
    })
  })
}

// MOBILE FILTERS
export function toggleMobileFilter() {
  const filter = document.querySelector(".filter-mobile")
  const mobileFilterView = document.querySelector(".filter-mobile-open")

  function toggleFilter() {
    if (mobileFilterView.classList.contains("show-filter")) {
      mobileFilterView.classList.remove("show-filter")
      //   document.body.style.overflow = "hidden"
    } else {
      mobileFilterView.classList.add("show-filter")
      //   document.body.style.overflow = "auto"
    }
  }
  filter.addEventListener("click", toggleFilter)

  const toggleButton = document.querySelector(".toggle")
  toggleButton.addEventListener("click", toggleFilter)
  const toggleButton2 = document.querySelector(".refuse-button")
  toggleButton2.addEventListener("click", toggleFilter)

  $(document).ready(function () {
    $(".category-select-mobile").select2({
      closeOnSelect: true,
      placeholder: "Избери опция",
      //   allowClear: true,
    })
  })

  const reset = document.querySelector(".reset-filter")
  reset.addEventListener("click", () => {
    $(".category-select-mobile").val(null).trigger("change")
  })
}

function formatState(state) {
  if (!state.id) {
    return state.text
  }

  var baseUrl = "../images/building-page-images"
  var $state = $("arrow-right-slider")

  // Use .text() instead of HTML string concatenation to avoid script injection issues
  $state.find("span").text(state.text)
  $state.find("img").attr("src", baseUrl + "/" + "arrow-right-slider.svg")
  // .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + "arrow-right-slider.svg")

  return $state
}
$(".category-select-mobile").select2({
  //   minimumResultsForSearch: -1,
  templateResult: formatState,
  templateSelection: formatState,
  //   allowClear: false,
  //   dropdownCssClass: "filter_dropdown",
})
