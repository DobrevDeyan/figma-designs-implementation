/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import aaa from "../../assets/contacts-page-images/aaaa.svg"
import bg_flag from "../../assets/contacts-page-images/bg-map.svg"
import phone from "../../assets/contacts-page-images/phone.svg"
import pin from "../../assets/contacts-page-images/pin.svg"
import "./contacts.css"

function Contacts() {
  return (
    <main id="contacts" className="container-wrap">
      <section className="contact-cards-container">
        <h3 className="contacts-title">Контакти</h3>
        <div className="row">
          <div className="address-box">
            <ul className="details">
              <li>
                <h4 className="city_name">Димитровград</h4>
              </li>
              <li>
                <a href="#" className="address">
                  <img src={phone} alt="phone-number" />
                  Централа: 0391 603 55 ; 0391 603 58 <br /> Факс: 0391 603 51
                </a>
              </li>
              <li className="contacts">
                <a href="#">
                  <img src={aaa} alt="mail-address" />
                  info@chimtex.com
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <img src={pin} alt="map-pin" />
                  ул. "Бузлуджа" 33
                </a>
              </li>
              <button type="button" className="show-more">
                <p>Виж на картата</p>
              </button>
            </ul>
          </div>
          <div className="address-box">
            <ul className="details">
              <li>
                <h4 className="city_name">София</h4>
              </li>
              <li>
                <a href="#" className="address">
                  <img src={phone} alt="phone-number" />
                  Централа: 0391 603 55 ; 0391 603 58 <br /> Факс: 0391 603 51
                </a>
              </li>
              <li className="contacts">
                <a href="#">
                  <img src={aaa} alt="mail-address" />
                  info@chimtex.com
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <img src={pin} alt="map-pin" />
                  ул. "Бузлуджа" 33
                </a>
              </li>
              <button type="button" className="show-more">
                <p>Виж на картата</p>
              </button>
            </ul>
          </div>
          <div className="address-box">
            <ul className="details">
              <li>
                <h4 className="city_name">Варнa</h4>
              </li>
              <li>
                <a href="#" className="address">
                  <img src={phone} alt="phone-number" />
                  Централа: 0391 603 55 ; 0391 603 58 <br /> Факс: 0391 603 51
                </a>
              </li>
              <li className="contacts">
                <a href="#">
                  <img src={aaa} alt="mail-address" />
                  info@chimtex.com
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <img src={pin} alt="map-pin" />
                  ул. "Бузлуджа" 33
                </a>
              </li>
              <button type="button" className="show-more">
                <p>Виж на картата</p>
              </button>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="address-box">
            <ul className="details">
              <li>
                <h4 className="city_name">Плевен</h4>
              </li>
              <li>
                <a href="#" className="address">
                  <img src={phone} alt="phone-number" />
                  Централа: 0391 603 55 ; 0391 603 58 <br /> Факс: 0391 603 51
                </a>
              </li>
              <li className="contacts">
                <a href="#">
                  <img src={aaa} alt="mail-address" />
                  info@chimtex.com
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <img src={pin} alt="map-pin" />
                  ул. "Бузлуджа" 33
                </a>
              </li>
              <button type="button" className="show-more">
                <p>Виж на картата</p>
              </button>
            </ul>
          </div>
          <div className="address-box">
            <ul className="details">
              <li>
                <h4 className="city_name">Русе</h4>
              </li>
              <li>
                <a href="#" className="address">
                  <img src={phone} alt="phone-number" />
                  Централа: 0391 603 55 ; 0391 603 58 <br /> Факс: 0391 603 51
                </a>
              </li>
              <li className="contacts">
                <a href="#">
                  <img src={aaa} alt="mail-address" />
                  info@chimtex.com
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <img src={pin} alt="map-pin" />
                  ул. "Бузлуджа" 33
                </a>
              </li>
              <button type="button" className="show-more">
                <p>Виж на картата</p>
              </button>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-from">
        <div className="contact-form-wrapper">
          <h4>Свържете се с нас</h4>
          <form className="contact-form" action="#">
            <div className="form-field">
              <label htmlFor="">Име*</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="">Име на фирма*</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="">Телефон*</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="">E-mail адрес*</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="">Съобщение</label>
              <textarea name="" id=""></textarea>
            </div>
            <button type="submit" className="show-more">
              <p>Изпрати</p>
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
export default Contacts
