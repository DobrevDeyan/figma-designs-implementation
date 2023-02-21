/* eslint-disable jsx-a11y/anchor-is-valid */
import "./check-out.css"

function CheckOut() {
  return (
    <main id="checkout">
      <div class="container-wrap">
        <h4 class="page-title">Завърши поръчката</h4>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-12 d-flex align-items-center justify-content-center">
              <div class="box left">
                <h4 class="box-title">Имам акаунт</h4>
                <form class="contact-form" action="#">
                  <div class="form-field">
                    <label for="">E-mail aдрес*</label>
                    <input type="text" value="" />
                  </div>
                  <div class="form-field">
                    <label for="">Парола*</label>
                    <input type="text" value="" />
                  </div>
                </form>
                <div class="misc">
                  <div class="checkbox-container">
                    <input type="checkbox" id="checkbox" class="checkbox" />
                    <a>Запомни ме</a>
                  </div>
                  <a class="forgotten_password" href="#">
                    Забравена парола
                  </a>
                </div>
                <button type="button" class="show-more">
                  <p>Вход</p>
                </button>
                <div class="misc-2">
                  <p>Все още нямаш регистрация?</p>
                  <a class="registration" href="#">
                    Регистрирай се
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-12 d-flex align-items-center justify-content-center">
              <div class="box right">
                <h4 class="box-title">Продължи като гост</h4>
                <button type="button" class="show-more">
                  <p>Продължи</p>
                </button>
                {/* <img src={microscope} alt="microscope" class="hero-image" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default CheckOut
