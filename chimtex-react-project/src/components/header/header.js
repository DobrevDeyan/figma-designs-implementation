/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import arrow_down from "../../assets/home-page-images/arrow-down.svg"
import arrow_right from "../../assets/home-page-images/arrow-right.svg"
import arrow_up from "../../assets/home-page-images/arrow-up.svg"
import bg_flag_icon from "../../assets/home-page-images/bg-flag-icon.svg"
import close_search from "../../assets/home-page-images/close-search.svg"
import en_flag_icon from "../../assets/home-page-images/en-flag-icon.svg"
import site_logo from "../../assets/home-page-images/logo-chimtex.svg"
import logout from "../../assets/home-page-images/logout.svg"
import menu_mobile from "../../assets/home-page-images/menu-mobile.svg"
import orders from "../../assets/home-page-images/orders.svg"
import profile from "../../assets/home-page-images/profile.svg"
import search_item from "../../assets/home-page-images/search-item.png"
import search from "../../assets/home-page-images/search.svg"
import shopping_cart from "../../assets/home-page-images/shopping-cart.svg"
import "./header.css"

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleDropdownClick = () => {
    setIsOpen(!isOpen)
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  function handleMobileMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const [isOpenLang, setIsOpenLang] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedLangClass, setSelectedLangClass] = useState("")
  const [flagIcon, setFlagIcon] = useState(bg_flag_icon)

  const handleLangDropdownClick = () => {
    setIsOpenLang(!isOpenLang)
  }

  const handleLanguageClick = (e) => {
    const languageIcons = document.querySelectorAll(".language > div > img")
    const clickedLangClass = e.currentTarget.classList[1]

    // Remove the `selected` class from all language icons
    languageIcons.forEach((icon) => {
      icon.classList.remove("selected")
    })

    // Add the `selected` class to the clicked element
    e.currentTarget.querySelector("div > img").classList.add("selected")

    if (e.currentTarget.classList.contains("en")) {
      setFlagIcon(en_flag_icon)
      setSelectedLanguage("English")
      setSelectedLangClass("en")
    } else if (e.currentTarget.classList.contains("bg")) {
      setFlagIcon(bg_flag_icon)
      setSelectedLanguage("Български")
      setSelectedLangClass("bg")
    }

    // Set the corresponding language icon as selected in the mobile section
    const mobileLanguageIcons = document.querySelectorAll(
      ".language-mobile > div > img"
    )
    if (clickedLangClass === "en") {
      mobileLanguageIcons[1]?.classList.add("selected")
      mobileLanguageIcons[0]?.classList.remove("selected")
    } else if (clickedLangClass === "bg") {
      mobileLanguageIcons[0]?.classList.add("selected")
      mobileLanguageIcons[1]?.classList.remove("selected")
    }

    setIsOpenLang(false)
  }

  // const [isOpenLang, setIsOpenLang] = useState(false)
  // const [selectedLanguage, setSelectedLanguage] = useState("")
  // const [flagIcon, setFlagIcon] = useState(bg_flag_icon)

  // const handleLangDropdownClick = () => {
  //   setIsOpenLang(!isOpenLang)
  // }
  // const handleLanguageClick = (e) => {
  //   const languageIcons = document.querySelectorAll(".language > div > img")
  //   languageIcons.forEach((icon) => {
  //     icon.classList.remove("selected")
  //   })

  //   // Add the `selected` class to the clicked element
  //   const languageCode = e.currentTarget.classList[1]
  //   console.log(languageCode)
  //   e.currentTarget.querySelector("img").classList.add("selected")
  //   setSelectedLanguage(languageCode)

  //   setIsOpenLang(false)

  //   // Set the corresponding language icon as selected in the desktop dropdown
  //   if (languageCode === "en") {
  //     setFlagIcon(en_flag_icon)
  //     languageIcons[1]?.classList.add("selected")
  //   } else if (languageCode === "bg") {
  //     setFlagIcon(bg_flag_icon)
  //     languageIcons[0]?.classList.add("selected")
  //   }

  //   // Set the corresponding language icon as selected in the mobile dropdown
  //   const mobileLanguageIcons = document.querySelectorAll(
  //     ".language-dropdown-mobile > .language > div > img"
  //   )
  //   mobileLanguageIcons.forEach((icon) => {
  //     icon.classList.remove("selected")
  //   })
  //   if (languageCode === "en") {
  //     mobileLanguageIcons[1]?.classList.add("selected")
  //   } else if (languageCode === "bg") {
  //     mobileLanguageIcons[0]?.classList.add("selected")
  //   }
  // }
  // const handleLanguageClick = (e) => {
  //   const language_icons = document.querySelectorAll(".language > div > img")
  //   language_icons.forEach((icon) => {
  //     icon.classList.remove("selected")
  //   })

  //   // Add the `selected` class to the clicked element
  //   const textContent = e.currentTarget.querySelector("p")?.textContent
  //   if (textContent) {
  //     setSelectedLanguage(textContent)
  //   }
  //   e.currentTarget
  //     .querySelector(".language > div > img")
  //     .classList.add("selected")

  //   setIsOpenLang(false)

  //   if (e.currentTarget.className === "language en") {
  //     setFlagIcon(en_flag_icon)
  //     language_icons[0]?.classList.add("selected")
  //     language_icons[1]?.classList.add("selected")
  //   } else if (e.currentTarget.className === "language bg") {
  //     setFlagIcon(bg_flag_icon)
  //     language_icons[0]?.classList.remove("selected")
  //     language_icons[1]?.classList.remove("selected")
  //   }
  // }

  return (
    <header>
      <nav className="container-wrap container">
        <ul className="navigation-menu-mobile">
          <li
            className="mobile-menu-handle"
            id="mobile-menu-handle"
            onClick={handleMobileMenuClick}
          >
            <img src={menu_mobile} alt="menu-mobile-button" />
          </li>
          <li className="mobile-menu-handle-2">
            <a href="/">
              <img src={site_logo} alt="chimtexLogo" />
            </a>
          </li>
          <div
            className={`navigation-menu-mobile-dropdown ${
              isMobileMenuOpen ? "open" : ""
            }`}
            id="navigation-menu-mobile-dropdown"
          >
            <li>
              <a href="./">Начало</a>
            </li>
            <li>
              <a href="#" className="products">
                <p>Каталог продукти</p>
                <img src={arrow_right} alt="arrowRight" />
              </a>
            </li>
            <li>
              <a href="#">
                <p>Магазин</p>
                <img src={arrow_right} alt="arrowRight" />
              </a>
            </li>
            <li>
              <a href="#">Промоции</a>
            </li>
            <li>
              <a href="/about">За нас</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
            <li>
              <a href="#">Вход</a>
            </li>
            <li className="languages">
              <span className="language en" onClick={handleLanguageClick}>
                <div>
                  <img src={en_flag_icon} alt="englishLangIcon" />
                </div>
              </span>
              <span className="language bg" onClick={handleLanguageClick}>
                <div>
                  <img src={bg_flag_icon} alt="bulgarianLangIcon" />
                </div>
              </span>
            </li>
          </div>
        </ul>
        <ul className="navigation-menu">
          <li>
            <a href="/">
              <img src={site_logo} alt="chimtexLogo" />
            </a>
          </li>
          <li>
            <a href="/">Начало</a>
          </li>
          <li
            className="dropdown-menu-container products "
            onClick={handleDropdownClick}
          >
            <a href="#" className="dropdown-button">
              <p>Продукти</p>
              <img
                src={isOpen ? arrow_up : arrow_down}
                alt="arrowDown"
                className={isOpen ? "arrow-up" : "arrow-down"}
              />
            </a>
          </li>
          <li>
            <a href="#">Промоции</a>
          </li>
          <li>
            <a href="./about">За нас</a>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
        </ul>
        <div className="search-container">
          <input type="text" className="search-field" placeholder="Търси..." />
          <div className="search-box">
            <div className="first-row">
              <h4>Резултати за “колб”</h4>
              <img src={close_search} alt="close-search" />
            </div>
            <div className="search-items">
              <div className="search-item">
                <img src={search_item} alt="search-item" />
                <div className="details">
                  <div className="content">
                    <h4>Бюрета кип с колба</h4>
                    <p>4094.5ВР</p>
                  </div>
                  <p className="brand">Simax</p>
                </div>
              </div>
              <div className="search-item">
                <img src={search_item} alt="search-item" />
                <div className="details">
                  <div className="content">
                    <h4>
                      Филтрувална система за пречистване- шлифована връзка
                    </h4>
                    <p>4094.5ВР</p>
                  </div>
                  <p className="brand">Simax</p>
                </div>
              </div>
              <div className="search-item">
                <img src={search_item} alt="search-item" />
                <div className="details">
                  <div className="content">
                    <h4>Колба със шлиф, капковидна форма</h4>
                    <p>4094.5ВР</p>
                  </div>
                  <p className="brand">Simax</p>
                </div>
              </div>
            </div>
            <div className="last-row">
              <button type="button" className="show-more">
                <a href="#">Виж всички</a>
              </button>
              <p>5 от 13 резултатa</p>
            </div>
          </div>
        </div>
        <ul className="tools-menu">
          <ul>
            <li className="search-container-mobile-button">
              <a href="#">
                <img src={search} alt="search" />
              </a>
            </li>
            <li className="account-profile" onClick={toggleMenu}>
              <a href="#">
                <img src={profile} alt="profileIcon" />
              </a>
            </li>
            {showMenu && (
              <div className="account-profile-menu">
                <div className="account-profile-menu-row">
                  <img src={orders} alt="orders" />
                  <p>История на поръчките</p>
                </div>
                <div className="account-profile-menu-row">
                  <img src={profile} alt="profileIcon" />
                  <p>Профил</p>
                </div>
                <hr />
                <div className="account-profile-menu-row">
                  <img src={logout} alt="logout" />
                  <p>Изход</p>
                </div>
              </div>
            )}
            <li className="shopping-cart">
              <a href="#">
                <img src={shopping_cart} alt="shoppingCartIcon" />
              </a>
            </li>
            <li className="language-dropdown">
              <a href="#" onClick={handleLangDropdownClick}>
                <div>
                  <img src={flagIcon} alt="languageIcon" />
                </div>
                <img src={arrow_down} alt="arrowDown" />
              </a>
              <div className={`dropdown ${isOpenLang ? "active" : ""}`}>
                <span className="language en" onClick={handleLanguageClick}>
                  <div>
                    <img src={en_flag_icon} alt="englishLangIcon" />
                  </div>
                  <p>English</p>
                </span>
                <span className="language bg" onClick={handleLanguageClick}>
                  <div>
                    <img src={bg_flag_icon} alt="bulgarianLangIcon" />
                  </div>
                  <p>Български</p>
                </span>
              </div>
            </li>
          </ul>
          <div className="search-box-mobile">
            <div className="first-row">
              <h4>Резултати за “колб”</h4>
              <img src={close_search} alt="close-search" />
            </div>
            <div className="search-items">
              <div className="search-item">
                <img src={search_item} alt="search-item" />
                <div className="details">
                  <div className="content">
                    <h4>Бюрета кип с колба</h4>
                    <p>4094.5ВР</p>
                  </div>
                  <p className="brand">Simax</p>
                </div>
              </div>
              <div className="search-item">
                <img src={search_item} alt="search-item" />
                <div className="details">
                  <div className="content">
                    <h4>
                      Филтрувална система за пречистване- шлифована връзка
                    </h4>
                    <p>4094.5ВР</p>
                  </div>
                  <p className="brand">Simax</p>
                </div>
              </div>
              <div className="search-item">
                <img src={search_item} alt="search-item" />
                <div className="details">
                  <div className="content">
                    <h4>Колба със шлиф, капковидна форма</h4>
                    <p>4094.5ВР</p>
                  </div>
                  <p className="brand">Simax</p>
                </div>
              </div>
            </div>
            <div className="last-row">
              <button type="button" className="show-more">
                <a href="#">Виж всички</a>
              </button>
              <p>5 от 13 резултатa</p>
            </div>
          </div>
        </ul>
        <TransitionGroup>
          {isOpen && (
            <CSSTransition classNames="fade" timeout={800}>
              <div className="megamenu" key="megamenu">
                <ul className="megamenu-row">
                  <h4>Медицински консумативи</h4>
                  <li>
                    <a href="#">Кръвни изследвания и инвитро</a>
                  </li>
                  <li>
                    <a href="#">Контейнери </a>
                  </li>
                  <li>
                    <a href="#">Тампони</a>
                  </li>
                  <li>
                    <a href="#">Епруветки и микроепруветки</a>
                  </li>
                  <li>
                    <a href="#">Пипети</a>
                  </li>
                  <li>
                    <a href="#">Автоматични пипети</a>
                  </li>
                  <li>
                    <a href="#">Ръкавици</a>
                  </li>
                  <li>
                    <a href="#">Транспортиране на проби</a>
                  </li>
                  <li>
                    <a href="#">Архиватори, стативи и кутии за съхранение</a>
                  </li>
                  <li>
                    <a href="#">Връхчета</a>
                  </li>
                  <li>
                    <a href="#">Предметни и покривни стъкла</a>
                  </li>
                  <li>
                    <a href="#">Общ болничен консуматив</a>
                  </li>
                  <li>
                    <a href="#">Ветеринарна медицина</a>
                  </li>
                  <li>
                    <a href="#">Йозета</a>
                  </li>
                  <li>
                    <a href="#">Стоматология</a>
                  </li>
                  <li>
                    <a href="#">Блюда петри</a>
                  </li>
                </ul>
                <ul className="megamenu-row">
                  <h4>Химикали и реактиви</h4>
                  <li>
                    <a href="#">Стандартни разтвори</a>
                  </li>
                  <li>
                    <a href="#">Хроматография</a>
                  </li>
                  <li>
                    <a href="#">Техническо качество</a>
                  </li>
                  <li>
                    <a href="#">Реактиви за лабораторни анализи</a>
                  </li>
                  <li>
                    <a href="#">Буферни разтворипети</a>
                  </li>
                  <li>
                    <a href="#">Хранителни и чисти</a>
                  </li>
                  <li>
                    <a href="#">Индикатори</a>
                  </li>
                  <li>
                    <a href="#">Фармацевтично качество</a>
                  </li>
                  <li>
                    <a href="#">Тестове</a>
                  </li>
                </ul>
                <ul className="megamenu-row">
                  <h4>Лабораторни консумативи</h4>
                  <li>
                    <a href="#">Колби</a>
                  </li>
                  <li>
                    <a href="#">Филтърна и индикаторна хартия</a>
                  </li>
                  <li>
                    <a href="#">Лабораторни уреди</a>
                  </li>
                  <li>
                    <a href="#">Пипети стъклени</a>
                  </li>
                  <li>
                    <a href="#">Адаптери и преходници</a>
                  </li>
                  <li>
                    <a href="#">Банки и шишета</a>
                  </li>
                  <li>
                    <a href="#">Метални</a>
                  </li>
                  <li>
                    <a href="#">Общ лабораторен консуматив</a>
                  </li>
                  <li>
                    <a href="#">Порцелан</a>
                  </li>
                  <li>
                    <a href="#">Бюрети</a>
                  </li>
                  <li>
                    <a href="#">Везни</a>
                  </li>
                  <li>
                    <a href="#">Тръби</a>
                  </li>
                  <li>
                    <a href="#">Фунии</a>
                  </li>
                  <li>
                    <a href="#">Пластмасови изделия</a>
                  </li>
                </ul>
                <ul className="megamenu-row">
                  <h4>Ареометри и термометри</h4>
                  <li>
                    <a href="#">Ареометри</a>
                  </li>
                  <li>
                    <a href="#">Термометри контактни</a>
                  </li>
                  <li>
                    <a href="#">Термометри индустриални</a>
                  </li>
                  <li>
                    <a href="#">Термометри дигитални</a>
                  </li>
                  <li>
                    <a href="#">Термометри лабораторниби</a>
                  </li>
                  <li>
                    <a href="#">Вискозиметри</a>
                  </li>
                  <li>
                    <a href="#">Влагомери</a>
                  </li>
                </ul>
                <ul className="megamenu-row">
                  <h4>Домакинско стъкло SIMAX</h4>
                  <li>
                    <a href="#">Съдове за печене</a>
                  </li>
                  <li>
                    <a href="#">Съдове за готвене</a>
                  </li>
                  <li>
                    <a href="#">Съдове за сервиране</a>
                  </li>
                  <li>
                    <a href="#">Съдове за съхранение</a>
                  </li>
                  <h4>Коронавирус КОВИД-19</h4>
                </ul>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </nav>
    </header>
  )
}
export default Header
