/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import bg_flag from "../../assets/contacts-page-images/bg-map.svg"
import phone from "../../assets/contacts-page-images/phone.svg"
import pin from "../../assets/contacts-page-images/pin.svg"
import aaa from "../../assets/contacts-page-images/aaaa.svg"
import "bootstrap/dist/css/bootstrap.css"
import "./contacts.css"

function Contacts() {
  return (
    <main id="contacts container container-wrap">
      <h3 className="contacts-title">Промоции</h3>
      <div className="row">
        <div className="address-box">
          <h4 className="city_name">Варна</h4>
          <ul className="details">
            <li>
              <a href="#" className="address">
                <img src={pin} alt="checkIn" />
                Димитровград, ул. "Бузлуджа" 33
              </a>
            </li>
            <li className="contacts">
              <a href="#">
                <img src={phone} alt="phone" />
                Централа: 0391-60-355; Пласмент: 0391-60-358; Факс: 0391-60-351
              </a>
            </li>
            <li>
              <a href="#" className="">
                <img src={phone} alt="mail" />
                info@chimtex.com
              </a>
            </li>
            <button type="button" className="show-more">
              <p>Виж още</p>
            </button>
          </ul>
        </div>
      </div>
      <div className="row"></div>
    </main>
  )
}
export default Contacts
