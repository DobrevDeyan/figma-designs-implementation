/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

// import $ from "jquery"
import "bootstrap/dist/css/bootstrap.css"
import arrow_right from "../../assets/product-page-images/arrow-right.svg"
import home_icon from "../../assets/product-page-images/home-icon.svg"
import order from "../../assets/profile-page-images/copy-order.svg"
import cell from "../../assets/profile-page-images/id-cell.svg"
import password from "../../assets/profile-page-images/password-icon.svg"
import pen from "../../assets/profile-page-images/pen.svg"
import "./profile.css"

function Profile() {
  return (
    <main>
      <div class="breadcrumbs container container-wrap">
        <img src={home_icon} alt="home-icon" />
        <img src={arrow_right} alt="arrow-right" />
        <p>Профил</p>
      </div>
      <section class="container-wrap information">
        <h4 class="section-title">Информация</h4>
        <article class="user-info col-xl-7">
          <div class="article-intro">
            <h4 class="article-heading">Информация за потребителя</h4>
            <div class="change-button">
              <img src={pen} alt="pencil-edit-button" />
              <p>Промени</p>
            </div>
          </div>
          <p>Георги Стефанов</p>
          <p>george_stephanow@gmail.com</p>
          <p>0875 625 852</p>
          <p>Частно лице</p>
        </article>

        <article class="user-info col-xl-7">
          <div class="article-intro">
            <h4 class="article-heading">Адреси</h4>
          </div>
          <div class="article-row">
            <div>
              <input type="radio" name="adress" class="address" />
              <p>ул. „Марагидик“ №10, 12, 1185 Оборище, София</p>
            </div>
            <div>
              <a href="#" class="edit">
                Редактирай
              </a>
              <a href="#" class="delete">
                Изтрий
              </a>
            </div>
          </div>
          <div class="article-row">
            <div>
              <input type="radio" name="adress" class="address" />
              <p>ул. „Марагидик“ №10, 12, 1185 Оборище, София</p>
            </div>
            <div>
              <a href="#" class="edit">
                Редактирай
              </a>
              <a href="#" class="delete">
                Изтрий
              </a>
            </div>
          </div>
          <button type="button" class="add-address">
            <p>Добави нов адрес</p>
          </button>
        </article>

        <article class="user-info col-xl-7">
          <div class="article-intro">
            <h4 class="article-heading">Смяна на парола</h4>
          </div>
          <form method="post" action="">
            <label for="old-password">Текуща Парола</label>
            <div class="password-container">
              <input type="password" class="old-password" placeholder=" " />
              <img
                src={password}
                alt="visibility"
                class="toggle-password-visibility first-input"
              />
            </div>
            <p>Паролата трябва да съдържа поне 8 символа и 1 цифра</p>
            <label for="new-password">Нова Парола</label>
            <div class="password-container">
              <input type="password" class="new-password" placeholder=" " />
              <img
                src={password}
                alt="visibility"
                class="toggle-password-visibility first-input"
              />
            </div>
            <p>Паролата трябва да съдържа поне 8 символа и 1 цифра</p>
            <label for="retype-new-password">Повтори паролата</label>
            <div class="password-container">
              <input type="password" class="retype-password" placeholder=" " />
              <img
                src={password}
                alt="visibility"
                class="toggle-password-visibility first-input"
              />
            </div>
            <p>Паролата трябва да съдържа поне 8 символа и 1 цифра</p>
            <button type="button" class="add-address">
              <p>Запази промените</p>
            </button>
          </form>
        </article>
      </section>
      <div class="container-wrap">
        <h4 class="orders-title">История на поръчките</h4>
      </div>
      <section class="container-wrap">
        <div class="table-container">
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
