// JQUERY NAV DIAL UP FUNCTIONALITY
$(document).ready(function () {
  $("#call-us, #call-us-mobile, #call-us-mobile-2").click(function (e) {
    e.preventDefault()
    const phoneNumber = "+359898443134"
    window.location.href = "tel:" + phoneNumber
  })
})

// CLOS/OPEN FUNCTIONALITY MENU_MOBILE DROPDOWN
$(document).ready(function () {
  $(".navigation-menu-mobile-dropdown").css("display", "none")
  $(".nav-btn-mobile").click(function () {
    $(".navigation-menu-mobile-dropdown").slideToggle().css("display", "flex")
  })
  $(".navigation-menu-mobile-dropdown a").click(function () {
    $(".navigation-menu-mobile-dropdown").slideToggle().css("display", "none")
  })
})

// JQUERY NAV TABS FUNCTIONALITY
$(".placeholder-image").addClass("active")
$(document).ready(function () {
  $("#properties ul li a").click(function () {
    $("#properties ul li a").removeClass("clicked")
    $(this).addClass("clicked")
    const target = $(this).attr("href")
    $(".tab").removeClass("active")
    $(target).addClass("active")
    $(".placeholder-image").removeClass("active")
  })

  $("select.mobile-tabs").change(function () {
    $("select.mobile-tabs option").removeAttr("selected")
    $(this).find("option:selected").attr("selected", "selected")
    const target = $(this).val()
    $(".placeholder-image").removeClass("active")
    $(".tab").removeClass("active")
    $(target).addClass("active")
  })
})

// JQUERY PICKING AN APARTMENT AND SETTING IT IN THE CONTACT FORM FUNCTIONALITY

$(document).ready(function () {
  $(".apartment-row.sold").css("background-color", "#F4DEDE")
  $(".apartment-row.sold .cell-4").text("Продаден").css("color", "red")
})
$(document).ready(function () {
  $(".apartment-row.free").css("background-color", "")
  $(".apartment-row.free").hover(
    function () {
      $(this).css("background-color", "#DDECE3")
    },
    function () {
      $(this).css("background-color", "")
    }
  )
})

if ($("select.mobile-tabs").is(":hidden")) {
  $(document).ready(function () {
    $(".sold").off("click")
    $(".apartment-row.free").click(function () {
      let activeTab = $("#properties ul li a.clicked")
      let tabValue = activeTab.text()
      const apartmentID = $(this).attr("id")
      $('input[name="apartment-choice"]').val(tabValue + ", " + apartmentID)
      // window.location.hash = "#contact-us"
      $("html, body").animate(
        {
          scrollTop: $("#contact-us").offset().top,
        },
        800
      )
    })
  })
}

$(document).ready(function () {
  $(".sold").off("click")
  $(".apartment-row.free").click(function () {
    let activeTab = ""
    if ($("select.mobile-tabs").is(":hidden")) {
      let tabValue = $("#properties ul li a.clicked").text()
      activeTab = tabValue
    } else {
      activeTab = $("select.mobile-tabs option:selected").text()
    }

    const apartmentID = $(this).attr("id")
    $('input[name="apartment-choice"]').val(activeTab + ", " + apartmentID)
    $("html, body").animate(
      {
        scrollTop: $("#contact-us").offset().top,
      },
      800
    )
  })
})

// JQUERY VALIDATING EMAIL FUNCTIONALITY

const inputElement = $("#email")
const inputLabel = $(".email.validation > label.error")
const errorMessage = $(".email.validation > p.error-message")
errorMessage.hide()

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

inputElement.on("keyup", function (e) {
  if ($(this).val() === "") {
    errorMessage.hide()
    inputElement.css({
      borderColor: "var(--shade-2)",
    })
    inputLabel.css({
      color: "",
    })
    return
  }
  if (validateEmail($(this).val())) {
    errorMessage.hide()
    inputLabel.css({
      color: "",
    })
    inputElement.css({
      borderColor: "",
    })
  } else {
    errorMessage.show()
    inputLabel.css({
      color: "var(--error-warning)",
    })
    inputElement.css({
      borderColor: "var(--error-warning)",
      borderWidth: "1px",
    })
  }
})

// JQUERY MESSAGE SENT POP UP MODAL FUNCTIONALITY

$(document).ready(function () {
  $("#message-sent").click(function (e) {
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

// SMOOTH SCROLLING ON LINK PRESS

$('a[href^="#"]')
  .not(".desktop-tabs a, #call-us, #call-us-mobile, #call-us-mobile-2")
  .on("click", function (event) {
    const target = $($(this).attr("href"))
    if (target.length) {
      event.preventDefault()
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        800
      )
    }
  })
