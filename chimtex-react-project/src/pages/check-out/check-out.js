/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.css"
import "./check-out.css"

function CheckOut() {
  return (
    <main id="checkout">
      <div className="container-wrap container">
        <h4 className="page-title">Завърши поръчката</h4>

        <div className="row">
          <div className="col-lg-6 col-12 justify-content-center">
            <div className="box left">
              <h4 className="box-title">Имам акаунт</h4>
              <form className="contact-form" action="#">
                <div className="form-field">
                  <label for="">E-mail aдрес*</label>
                  <input type="text" value="" />
                </div>
                <div className="form-field">
                  <label for="">Парола*</label>
                  <input type="text" value="" />
                </div>
              </form>
              <div className="misc">
                <div className="checkbox-container">
                  <input type="checkbox" id="checkbox" className="checkbox" />
                  <a>Запомни ме</a>
                </div>
                <a className="forgotten_password" href="#">
                  Забравена парола
                </a>
              </div>
              <button type="button" className="show-more">
                <p>Вход</p>
              </button>
              <div className="misc-2">
                <p>Все още нямаш регистрация?</p>
                <a className="registration" href="#">
                  Регистрирай се
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 justify-content-center">
            <div className="box right">
              <h4 className="box-title">Продължи като гост</h4>
              <button type="button" className="show-more">
                <p>Продължи</p>
              </button>
              {/* <img src={microscope} alt="microscope" className="hero-image" /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default CheckOut
