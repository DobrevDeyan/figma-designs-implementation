/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react"
import check_in from "../../assets/home-page-images/check-in-map.svg"
import facebook_logo from "../../assets/home-page-images/facebook-footer.svg"
import footer_logo_2 from "../../assets/home-page-images/footer-logo.svg"
import linkedin_logo from "../../assets/home-page-images/linkedin-footer.svg"
import footer_logo from "../../assets/home-page-images/logo-footer.svg"
import mail from "../../assets/home-page-images/mail.svg"
import phone from "../../assets/home-page-images/phone.svg"
import "./footer.css"

function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <footer>
      <div className="container container-wrap">
        <ul className="details">
          <li>
            <a href="#" className="logo">
              {/* <img src={footer_logo_2} alt="logo" className="logo" /> */}
              <img
                src={isMobile ? footer_logo_2 : footer_logo}
                alt="logo"
                className="logo"
              />
            </a>
          </li>
          <li>
            <a href="#" className="copyright">
              {" "}
              1994-2022 © All right reserved{" "}
            </a>
          </li>
          <li>
            <a href="#" className="socials">
              <img src={facebook_logo} alt="socialIcon" />
              <img src={linkedin_logo} alt="socialIcon" />
            </a>
          </li>
          <li>
            <a href="#" className="address">
              <img src={check_in} alt="checkIn" />
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
              <img src={mail} alt="mail" />
              info@chimtex.com
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <h4>Локации</h4>
          </li>
          <li>
            <a href="#">София</a>
          </li>
          <li>
            <a href="#">Плевен</a>
          </li>
          <li>
            <a href="#">Димитровград</a>
          </li>
          <li>
            <a href="#">Русе</a>
          </li>
          <li>
            <a href="#">Варна</a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <h4>Информация</h4>
          </li>
          <li>
            <a href="#">Сертификати</a>
          </li>
          <li>
            <a href="#">GDPR и Лични Данни</a>
          </li>
          <li>
            <a href="#">Правила и условия</a>
          </li>
          <li>
            <a href="#">Често задавни въпроси</a>
          </li>
          <li>
            <a href="#">Условия за доставка</a>
          </li>
          <li>
            <a href="#">Гаранция и връщане</a>
          </li>
          <li>
            <a href="#">Продукти изискващи сертификат</a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <h4>Категории</h4>
          </li>
          <li>
            <a href="#">Медицински консумативи</a>
          </li>
          <li>
            <a href="#">Химикали и реактиви</a>
          </li>
          <li>
            <a href="#">Лабораторни консумативи</a>
          </li>
          <li>
            <a href="#">Ареометри и термометри</a>
          </li>
          <li>
            <a href="#">Домакинско стъкло SIMAX</a>
          </li>
          <li>
            <a href="#">Коронавирус КОВИД-19</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
