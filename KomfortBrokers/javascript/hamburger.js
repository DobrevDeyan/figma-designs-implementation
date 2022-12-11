export function toggleMobileMenuButton() {
  const menu = document.querySelector(".mobile-menu")
  const menuItems = document.querySelectorAll(".menu-item")
  const menuToggle = document.querySelector(".menu-toggle")

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu")
      menuToggle.setAttribute("aria-expanded", "false")
    } else {
      menu.classList.add("showMenu")
      menuToggle.setAttribute("aria-expanded", "true")
    }
  }

  menuToggle.addEventListener("click", toggleMenu)

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu)
    menuToggle.setAttribute("aria-expanded", "false")
  })
}
