/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import arrow_down from "../../assets/home-page-images/arrow-down.svg"
import arrow_right from "../../assets/home-page-images/arrow-right.svg"
import bg_flag_icon from "../../assets/home-page-images/bg-flag-icon.svg"
import close_search from "../../assets/home-page-images/close-search.svg"
import en_flag_icon from "../../assets/home-page-images/en-flag-icon.svg"
import site_logo from "../../assets/home-page-images/logo-chimtex.svg"
import logout from "../../assets/home-page-images/logout.svg"
import orders from "../../assets/home-page-images/orders.svg"
import profile from "../../assets/home-page-images/profile.svg"
import search_item from "../../assets/home-page-images/search-item.png"
import search from "../../assets/home-page-images/search.svg"
import shopping_cart from "../../assets/home-page-images/shopping-cart.svg"

import "./header.css"

function Header() {
  return (
    <header>
      <nav className="container-wrap container">
        <ul className="navigation-menu-mobile">
          <li className="mobile-menu-handle">
            <img src="" alt="menu-mobile-button" />
          </li>
          <li className="mobile-menu-handle-2">
            <a href="/">
              <img src={site_logo} alt="chimtexLogo" />
            </a>
          </li>
          <div className="navigation-menu-mobile-dropdown">
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
              <img src={bg_flag_icon} alt="bulgarianLangIcon" />
              <img src={en_flag_icon} alt="englishLangIcon" />
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
          <li className="dropdown-menu-container products">
            <a href="#" className="dropdown-button">
              <p>Продукти</p>
              <img src={arrow_down} alt="arrowDown" />
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
            <li className="account-profile">
              <a href="#">
                <img src={profile} alt="profileIcon" />
              </a>
            </li>
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
            <li>
              <a href="#">
                <img src={shopping_cart} alt="shoppingCartIcon" />
              </a>
            </li>
            <li className="language-dropdown bg">
              <a href="#">
                <img src={bg_flag_icon} alt="bulgarianLangIcon" />
                <img src={arrow_down} alt="arrowDown" />
              </a>
            </li>
            <li className="language-dropdown en hidden">
              <a href="#">
                <img src={en_flag_icon} alt="englishLangIcon" />
                <img src={arrow_down} alt="arrowDown" />
              </a>
            </li>
            <div className="dropdown">
              <div className="language bg">
                <img src={bg_flag_icon} alt="bulgarianLangIcon" />
                <p>Български</p>
              </div>
              <div className="language en">
                <img src={en_flag_icon} alt="englishLangIcon" />
                <p>English</p>
              </div>
            </div>
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
        <div className="megamenu">
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
      </nav>
    </header>
  )
}
export default Header
