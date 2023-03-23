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
