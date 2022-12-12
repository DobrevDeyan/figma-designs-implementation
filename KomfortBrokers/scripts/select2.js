// DESKTOP FILTERS
export function desktopFilter() {
  $(document).ready(function () {
    $(".category-select").select2({
      //   closeOnSelect: false,
      //   placeholder: "This is my placeholder",
      //   allowClear: true,
    })
  })

  $("#cars").select2({
    closeOnSelect: false,
    // placeholder: "Placeholder",
    // allowHtml: true,
    // allowClear: true,
    // tags: true,
  })
}

export function toggleMobileFilter() {
  const filter = document.querySelector(".filter-mobile")
  const mobileFilterView = document.querySelector(".filter-mobile-open")

  function toggleFilter() {
    if (mobileFilterView.classList.contains("show-filter")) {
      mobileFilterView.classList.remove("show-filter")
      document.body.style.overflow = "hidden"
    } else {
      mobileFilterView.classList.add("show-filter")
      document.body.style.overflow = "auto"
    }
  }
  filter.addEventListener("click", toggleFilter)
}

// MOBILE FILTERS
// function formatState(state) {
//   if (!state.id) {
//     return state.text
//   }
//   var img = "./images/icons/city_pin.svg"
//   var $state = $(
//     '<span class="city_icon"><img   src="' +
//       img +
//       '"  /> </span><span class="text">' +
//       state.text +
//       "</span>"
//   )

//   return $state
// }
// $(".dsdsd").select2({
//   minimumResultsForSearch: -1,
//   templateResult: formatState,
//   // templateSelection: formatState,
//   allowClear: false,
//   dropdownCssClass: "filter_dropdown",
// })
