export function handleSliderButton() {
  $("#right-button").click(function (event) {
    event.preventDefault()
    $(".table-cont").animate({ scrollLeft: "+=220px" }, "slow")
  })
}
