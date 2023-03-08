/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from "react"
import arrow_right from "../../assets/product-page-images/arrow-right.svg"
import home_icon from "../../assets/product-page-images/home-icon.svg"
import order from "../../assets/profile-page-images/copy-order.svg"
import cell from "../../assets/profile-page-images/id-cell.svg"
import password from "../../assets/profile-page-images/password-icon.svg"
import pen from "../../assets/profile-page-images/pen.svg"
import "./profile.css"

function Profile() {
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showRetypePassword, setShowRetypePassword] = useState(false)

  const toggleShowPassword = (inputName) => {
    switch (inputName) {
      case "old":
        setShowOldPassword(!showOldPassword)
        break
      case "new":
        setShowNewPassword(!showNewPassword)
        break
      case "retype":
        setShowRetypePassword(!showRetypePassword)
        break
      default:
        break
    }
  }

  return (
    <main id="profile">
      <div className="breadcrumbs container container-wrap">
        <img src={home_icon} alt="home-icon" />
        <img src={arrow_right} alt="arrow-right" />
        <p>Профил</p>
      </div>
      <section className="container-wrap information container">
        <h4 className="section-title">Информация</h4>
        <article className="user-info col-xl-7">
          <div className="article-intro">
            <h4 className="article-heading">Информация за потребителя</h4>
            <div className="change-button">
              <img src={pen} alt="pencil-edit-button" />
              <p>Промени</p>
            </div>
          </div>
          <p>Георги Стефанов</p>
          <p>george_stephanow@gmail.com</p>
          <p>0875 625 852</p>
          <p>Частно лице</p>
        </article>
        <article className="user-info col-xl-7">
          <div className="article-intro">
            <h4 className="article-heading">Адреси</h4>
          </div>
          <div className="article-row">
            <div>
              <input type="radio" name="adress" className="address" />
              <p>ул. „Марагидик“ №10, 12, 1185 Оборище, София</p>
            </div>
            <div>
              <a href="#" className="edit">
                Редактирай
              </a>
              <a href="#" className="delete">
                Изтрий
              </a>
            </div>
          </div>
          <div className="article-row">
            <div>
              <input type="radio" name="adress" className="address" />
              <p>ул. „Марагидик“ №10, 12, 1185 Оборище, София</p>
            </div>
            <div>
              <a href="#" className="edit">
                Редактирай
              </a>
              <a href="#" className="delete">
                Изтрий
              </a>
            </div>
          </div>
          <button type="button" className="add-address">
            <p>Добави нов адрес</p>
          </button>
        </article>
        <article className="user-info col-xl-7">
          <div className="article-intro">
            <h4 className="article-heading">Смяна на парола</h4>
          </div>
          <form method="post" action="">
            <label htmlFor="old-password">Текуща Парола</label>
            <div className="password-container">
              <input
                id="old-password"
                type={showOldPassword ? "text" : "password"}
                className="old-password"
                placeholder=" "
              />
              <img
                src={password}
                alt="visibility"
                className="toggle-password-visibility first-input"
                onClick={() => toggleShowPassword("old")}
              />
            </div>
            <p>Паролата трябва да съдържа поне 8 символа и 1 цифра</p>
            <label htmlFor="new-password">Нова Парола</label>
            <div className="password-container">
              <input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                className="new-password"
                placeholder=" "
              />
              <img
                src={password}
                alt="visibility"
                className="toggle-password-visibility first-input"
                onClick={() => toggleShowPassword("new")}
              />
            </div>
            <p>Паролата трябва да съдържа поне 8 символа и 1 цифра</p>
            <label htmlFor="retype-new-password">Повтори паролата</label>
            <div className="password-container">
              <input
                id="retype-new-password"
                type={showRetypePassword ? "text" : "password"}
                className="retype-password"
                placeholder=" "
              />
              <img
                src={password}
                alt="visibility"
                className="toggle-passwqord-visibility first-input"
                onClick={() => toggleShowPassword("retype")}
              />
            </div>
            <p>Паролата трябва да съдържа поне 8 символа и 1 цифра</p>
            <button type="button" className="add-address">
              <p>Запази промените</p>
            </button>
          </form>
        </article>
      </section>
      <div className="container-wrap container">
        <h4 className="orders-title">История на поръчките</h4>
      </div>
      <section className="container-wrap container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  <p>ID</p>
                  <img src={cell} alt="icon-id" />
                </th>
                <th>
                  <p>Дата на поръчка</p>
                </th>
                <th>
                  <p>Стойност</p>
                </th>
                <th>
                  <p>Тип доставка</p>
                </th>
                <th>
                  <p>Начин на плащане</p>
                </th>
                <th>
                  <p>Дата на доставка</p>
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <p>03072254</p>
                </th>
                <th>
                  <p>23 Септември, 2022</p>
                </th>
                <th>
                  <p>13,985.00 лв.</p>
                </th>
                <th>
                  <p>До адрес</p>
                </th>
                <th>
                  <p>По банков път</p>
                </th>
                <th>
                  <p>25 Септември, 2022</p>
                </th>
                <th>
                  <img src={order} alt="copy-button" />
                  <a href="#">Дублирай поръчка</a>
                </th>
                <th>
                  <a href="#">Виж поръчката</a>
                </th>
              </tr>
              <tr>
                <th>
                  <p>03072254</p>
                </th>
                <th>
                  <p>23 Септември, 2022</p>
                </th>
                <th>
                  <p>13,985.00 лв.</p>
                </th>
                <th>
                  <p>До адрес</p>
                </th>
                <th>
                  <p>По банков път</p>
                </th>
                <th>
                  <p>25 Септември, 2022</p>
                </th>
                <th>
                  <img src={order} alt="copy-button" />
                  <a href="#">Дублирай поръчка</a>
                </th>
                <th>
                  <a href="#">Виж поръчката</a>
                </th>
              </tr>
              <tr>
                <th>
                  <p>03072254</p>
                </th>
                <th>
                  <p>23 Септември, 2022</p>
                </th>
                <th>
                  <p>13,985.00 лв.</p>
                </th>
                <th>
                  <p>До адрес</p>
                </th>
                <th>
                  <p>По банков път</p>
                </th>
                <th>
                  <p>25 Септември, 2022</p>
                </th>
                <th>
                  <img src={order} alt="copy-button" />
                  <a href="#">Дублирай поръчка</a>
                </th>
                <th>
                  <a href="#">Виж поръчката</a>
                </th>
              </tr>
              <tr>
                <th>
                  <p>03072254</p>
                </th>
                <th>
                  <p>23 Септември, 2022</p>
                </th>
                <th>
                  <p>13,985.00 лв.</p>
                </th>
                <th>
                  <p>До адрес</p>
                </th>
                <th>
                  <p>По банков път</p>
                </th>
                <th>
                  <p>25 Септември, 2022</p>
                </th>
                <th>
                  <img src={order} alt="copy-button" />
                  <a href="#">Дублирай поръчка</a>
                </th>
                <th>
                  <a href="#">Виж поръчката</a>
                </th>
              </tr>
              <tr>
                <th>
                  <p>03072254</p>
                </th>
                <th>
                  <p>23 Септември, 2022</p>
                </th>
                <th>
                  <p>13,985.00 лв.</p>
                </th>
                <th>
                  <p>До адрес</p>
                </th>
                <th>
                  <p>По банков път</p>
                </th>
                <th>
                  <p>25 Септември, 2022</p>
                </th>
                <th>
                  <img src={order} alt="copy-button" />
                  <a href="#">Дублирай поръчка</a>
                </th>
                <th>
                  <a href="#">Виж поръчката</a>
                </th>
              </tr>
              <tr>
                <th>
                  <p>03072254</p>
                </th>
                <th>
                  <p>23 Септември, 2022</p>
                </th>
                <th>
                  <p>13,985.00 лв.</p>
                </th>
                <th>
                  <p>До адрес</p>
                </th>
                <th>
                  <p>По банков път</p>
                </th>
                <th>
                  <p>25 Септември, 2022</p>
                </th>
                <th>
                  <img src={order} alt="copy-button" />
                  <a href="#">Дублирай поръчка</a>
                </th>
                <th>
                  <a href="#">Виж поръчката</a>
                </th>
              </tr>
              <tr>
                <th>
                  <p>03072254</p>
                </th>
                <th>
                  <p>23 Септември, 2022</p>
                </th>
                <th>
                  <p>13,985.00 лв.</p>
                </th>
                <th>
                  <p>До адрес</p>
                </th>
                <th>
                  <p>По банков път</p>
                </th>
                <th>
                  <p>25 Септември, 2022</p>
                </th>
                <th>
                  <img src={order} alt="copy-button" />
                  <a href="#">Дублирай поръчка</a>
                </th>
                <th>
                  <a href="#">Виж поръчката</a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
export default Profile
