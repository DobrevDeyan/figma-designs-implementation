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
    // just in case if slow connectivity and link does not redirect instantly
    // keeping animation for closing working
    menuToggle.setAttribute("aria-expanded", "false")
  })
}
