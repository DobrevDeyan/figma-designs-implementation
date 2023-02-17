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
      document.body.style.overflow = "auto"
    } else {
      mobileFilterView.classList.add("show-filter")
      document.body.style.overflow = "hidden"
    }
  }
  filter.addEventListener("click", toggleFilter)

  const toggleButton = document.querySelector(".toggle")
  toggleButton.addEventListener("click", toggleFilter)
  const toggleButton2 = document.querySelector(".refuse-button")
  toggleButton2.addEventListener("click", toggleFilter)

  $(".category-select-mobile").select2({
    closeOnSelect: false,
    placeholder: "Избери опция",
  })

  const reset = document.querySelector(".reset-filter")
  reset.addEventListener("click", () => {
    $(".category-select-mobile").val(null).trigger("change")
  })
}
