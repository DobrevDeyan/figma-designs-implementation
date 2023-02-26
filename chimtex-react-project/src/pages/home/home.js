/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.css"
import $ from "jquery"
import React, { useEffect } from "react"
import "slick-carousel"
import "slick-carousel/slick/slick.css"
import chemical_bottles from "../../assets/home-page-images/chemicals-bottles.png"
import client_1 from "../../assets/home-page-images/client-1.svg"
import client_2 from "../../assets/home-page-images/client-2.svg"
import client_3 from "../../assets/home-page-images/client-3.svg"
import client_4 from "../../assets/home-page-images/client-4.svg"
import client_5 from "../../assets/home-page-images/client-5.svg"
import client_6 from "../../assets/home-page-images/client-6.svg"
import client_7 from "../../assets/home-page-images/client-7.svg"
import client_8 from "../../assets/home-page-images/client-8.svg"
import logo_1 from "../../assets/home-page-images/logos/logo-1.png"
import logo_10 from "../../assets/home-page-images/logos/logo-10.png"
import logo_11 from "../../assets/home-page-images/logos/logo-11.png"
import logo_12 from "../../assets/home-page-images/logos/logo-12.png"
import logo_13 from "../../assets/home-page-images/logos/logo-13.png"
import logo_14 from "../../assets/home-page-images/logos/logo-14.png"
import logo_15 from "../../assets/home-page-images/logos/logo-15.png"
import logo_16 from "../../assets/home-page-images/logos/logo-16.png"
import logo_2 from "../../assets/home-page-images/logos/logo-2.png"
import logo_3 from "../../assets/home-page-images/logos/logo-3.png"
import logo_4 from "../../assets/home-page-images/logos/logo-4.png"
import logo_5 from "../../assets/home-page-images/logos/logo-5.png"
import logo_6 from "../../assets/home-page-images/logos/logo-6.png"
import logo_7 from "../../assets/home-page-images/logos/logo-7.png"
import logo_8 from "../../assets/home-page-images/logos/logo-8.png"
import logo_9 from "../../assets/home-page-images/logos/logo-9.png"
import gloves_1 from "../../assets/home-page-images/new-products-images/gloves-1.png"
import gloves_2 from "../../assets/home-page-images/new-products-images/gloves-2.png"
import gloves_3 from "../../assets/home-page-images/new-products-images/gloves-3.png"
import gloves_4 from "../../assets/home-page-images/new-products-images/gloves-4.png"
import gloves_5 from "../../assets/home-page-images/new-products-images/gloves-5.png"
import slider_left from "../../assets/home-page-images/new-products-left.svg"
import slider_right from "../../assets/home-page-images/new-products-right.svg"
import service_1 from "../../assets/home-page-images/slider-services-1.png"
import service_2 from "../../assets/home-page-images/slider-services-2.png"
import service_3 from "../../assets/home-page-images/slider-services-3.png"
import service_4 from "../../assets/home-page-images/slider-services-4.png"
import service_5 from "../../assets/home-page-images/slider-services-5.png"
import service_6 from "../../assets/home-page-images/slider-services-6.png"

import "./home.css"

function Home() {
  useEffect(() => {
    $(document).ready(() => {
      $(".slider").slick({
        dots: true,
        arrows: false,
        appendDots: $(".dots"),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: false,
            },
          },
        ],
      })

      $(".manufacturers-slider").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        infinite: true,
        slidesToShow: 10,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1340,
            settings: {
              slidesToShow: 9,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 467,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2,
            },
          },
        ],
      })

      $(".slider-new-products").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        loop: true,
        centerMode: true,
        centerPadding: "50px",
        prevArrow: ".slider-arrow-prev",
        nextArrow: ".slider-arrow-next",
        responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1040,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      })
    })
  }, [])

  return (
    <main id="home">
      <section className="hero-images">
        <div className="slider">
          <div className="slide">
            <div className="slide-view">
              <div className="slider-content container container-wrap">
                <h3>Заглавие</h3>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.
                </p>
                <button type="button" className="show-more">
                  <p>Виж повече</p>
                </button>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-view">
              <div className="slider-content container container-wrap">
                <h3>Заглавие</h3>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.
                </p>
                <button type="button" className="show-more">
                  <p>Виж повече</p>
                </button>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-view">
              <div className="slider-content container container-wrap">
                <h3>Заглавие</h3>
                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.
                </p>
                <button type="button" className="show-more">
                  <p>Виж повече</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dots"></div>
      </section>
      <section className="services-cards container container-wrap">
        <div className="row justify-content-between">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="card">
              <div className="card-img-container">
                <img src={service_1} alt="service-1" />
              </div>
              <h4>
                Медицински <br />
                консумативи
              </h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="card">
              <div className="card-img-container">
                <img src={service_2} alt="service-2" />
              </div>
              <h4>
                Химикали и<br />
                реактиви
              </h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="card">
              <div className="card-img-container">
                <img src={service_3} alt="service-3" />
              </div>
              <h4>
                Лабораторни <br />
                консумативи
              </h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="card">
              <div className="card-img-container">
                <img src={service_4} alt="service-4" />
              </div>
              <h4>
                Термометри и <br />
                аерометри
              </h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="card">
              <div className="card-img-container">
                <img src={service_5} alt="service-5" />
              </div>
              <h4>
                Домакинско <br />
                стъкло Simax
              </h4>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="card">
              <div className="card-img-container">
                <img src={service_6} alt="service-6" />
              </div>
              <h4>
                Коронавирус <br />
                Covid-19
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="manufacturers">
        <h4>Производители</h4>
        <div className="manufacturers-slider">
          <div className="manufacturer-img-container">
            <img src={logo_1} alt="logo-1" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_2} alt="logo-2" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_3} alt="logo-3" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_4} alt="logo-4" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_5} alt="logo-5" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_6} alt="logo-6" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_7} alt="logo-7" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_8} alt="logo-8" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_9} alt="logo-9" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_10} alt="logo-10" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_11} alt="logo-11" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_12} alt="logo-12" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_13} alt="logo-13" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_14} alt="logo-14" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_15} alt="logo-15" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_16} alt="logo-16" />
          </div>
        </div>
      </section>
      <section className="new-products">
        <div className="container container-wrap">
          <h3>Нови продукти</h3>
          <div className="row justify-content-between">
            <div className="col-lg-2 col-6 hidden-card">
              <div className="card">
                <div className="card-image-container">
                  <img src={gloves_1} alt="gloves" className="card-image" />
                </div>
                <h4 className="card-title">Ръкавици медицински</h4>
                <p className="card-description">
                  Латексова нестерилна ръкавица без пудра
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-6 hidden-card">
              <div className="card">
                <div className="card-image-container">
                  <img src={gloves_2} alt="gloves" className="card-image" />
                </div>
                <h4 className="card-title">
                  Ръкавици медицински, латекс без пудра
                </h4>
                <p className="card-description">
                  Латексова нестерилна ръкавица без пудра
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-6 hidden-card">
              <div className="card">
                <div className="card-image-container">
                  <img src={gloves_3} alt="gloves" className="card-image" />
                </div>
                <h4 className="card-title">
                  Ръкавици медицински, латекс без пудра
                </h4>
                <p className="card-description">
                  Латексова нестерилна ръкавица без пудра
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-6 hidden-card">
              <div className="card">
                <div className="card-image-container">
                  <img src={gloves_4} alt="gloves" className="card-image" />
                </div>
                <h4 className="card-title">
                  Ръкавици медицински, латекс без пудра
                </h4>
                <p className="card-description">
                  Латексова нестерилна ръкавица без пудра
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-6 hidden-card">
              <div className="card">
                <div className="card-image-container">
                  <img src={gloves_1} alt="gloves" className="card-image" />
                </div>
                <h4 className="card-title">
                  Ръкавици медицински, латекс без пудра
                </h4>
                <p className="card-description">
                  Латексова нестерилна ръкавица без пудра
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-6 hidden-card">
              <div className="card">
                <div className="card-image-container">
                  <img src={gloves_2} alt="gloves" className="card-image" />
                </div>
                <h4 className="card-title">
                  Ръкавици медицински, латекс без пудра
                </h4>
                <p className="card-description">
                  Латексова нестерилна ръкавица без пудра
                </p>
              </div>
            </div>
            <div className="slider-new-products">
              <div className="col-lg-2 col-sm-6">
                <div className="card">
                  <div className="card-image-container">
                    <img src={gloves_1} alt="gloves" className="card-image" />
                  </div>
                  <h4 className="card-title">
                    Ръкавици медицински, латекс без пудра
                  </h4>
                  <p className="card-description">
                    Латексова нестерилна ръкавица без пудра
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="card">
                  <div className="card-image-container">
                    <img src={gloves_2} alt="gloves" className="card-image" />
                  </div>
                  <h4 className="card-title">
                    Ръкавици медицински, латекс без пудра
                  </h4>
                  <p className="card-description">
                    Латексова нестерилна ръкавица без пудра
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="card">
                  <div className="card-image-container">
                    <img src={gloves_3} alt="gloves" className="card-image" />
                  </div>
                  <h4 className="card-title">
                    Ръкавици медицински, латекс без пудра
                  </h4>
                  <p className="card-description">
                    Латексова нестерилна ръкавица без пудра
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="card">
                  <div className="card-image-container">
                    <img src={gloves_4} alt="gloves" className="card-image" />
                  </div>
                  <h4 className="card-title">
                    Ръкавици медицински, латекс без пудра
                  </h4>
                  <p className="card-description">
                    Латексова нестерилна ръкавица без пудра
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="card">
                  <div className="card-image-container">
                    <img src={gloves_5} alt="gloves" className="card-image" />
                  </div>
                  <h4 className="card-title">
                    Ръкавици медицински, латекс без пудра
                  </h4>
                  <p className="card-description">
                    Латексова нестерилна ръкавица без пудра
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="card">
                  <div className="card-image-container">
                    <img src={gloves_1} alt="gloves" className="card-image" />
                  </div>
                  <h4 className="card-title">
                    Ръкавици медицински, латекс без пудра
                  </h4>
                  <p className="card-description">
                    Латексова нестерилна ръкавица без пудра
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="card">
                  <div className="card-image-container">
                    <img src={gloves_2} alt="gloves" className="card-image" />
                  </div>
                  <h4 className="card-title">
                    Ръкавици медицински, латекс без пудра
                  </h4>
                  <p className="card-description">
                    Латексова нестерилна ръкавица без пудра
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={slider_left}
            alt="arrowLeft"
            className="slider-arrow-prev"
          />
          <img
            src={slider_right}
            alt="arrowRight"
            className="slider-arrow-next"
          />
          <button type="button" className="show-more">
            <p>Виж още</p>
          </button>
        </div>
      </section>
      <section className="medical-branch">
        <div className="container container-wrap">
          <div className="medical-content">
            <h3>Медицински бранш</h3>
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </p>
            <button type="button" className="show-more">
              <p>Научи повече</p>
            </button>
          </div>
        </div>
      </section>
      <section className="laboratory-branch">
        <div className="container container-wrap">
          <div className="laboratory-content">
            <h3>Лабораторна стъклария и консумативи</h3>
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </p>
            <button type="button" className="show-more">
              <p>Научи повече</p>
            </button>
          </div>
        </div>
      </section>
      <section className="who-are-we">
        <div className="container container-wrap">
          <div className="row justify-space-between">
            <div className="col-xl-6 d-flex center-pic">
              <div className="bottles-container">
                <img
                  src={chemical_bottles}
                  alt="checmicalBottles"
                  className="bottles-pic"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div>
                <h3>Кои сме ние?</h3>
                <p>
                  Фирма „Химтекс” ООД е на българския пазар от 1994 год.
                  Специализирана е в търговията с лабораторни и медицински
                  консумативи, ареометри и термометри, технически химикали и
                  лабораторни реактиви, филтърни и индикаторни хартии,
                  апаратура, уреди за пробовземане и помпи На българския пазар
                  предлагаме голямо разнообразие от химически и лабораторни
                  консумативи, като се стремим да поддържаме високи складови
                  наличности с оглед бързото задоволяване нуждите на нашите
                  клиенти.
                  <img
                    src={chemical_bottles}
                    alt="checmicalBottles"
                    className="bottles-pic-mobile"
                  />
                  Химтекс ООД разполага със собствена складова база в
                  Димитровград, лаборатория за разфасовка и собствен автопарк за
                  големи тонажи и малки товари. Фирмата ни има открити клонове в
                  градовете София, Плевен, Русе и Варна за удобство на нашите
                  клиенти. Ръководителите на фирмата са специалисти в областта
                  на медицината и химията и предлагат висок професионализъм и
                  гъвкавост в търговските взаимоотношения. Във фирмата ни
                  работят 28 служители, като по този начин ви гарантираме бързо
                  и компетентно обслужване на клиентите. Екипът на Химтекс ООД
                  гарантира честност и лоялност към сегашни и бъдещи партньори!
                </p>
              </div>
              <button type="button" className="show-more">
                <p>Научи повече</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <h3 className="our-clients-heading">Нашите клиенти споделиха</h3>
      <section className="our-clients container container-wrap">
        <div className="client-item box client-item-1 a">
          <div className="banner">
            <img src={client_1} alt="clientLogo" />
            <h4>УМБАЛ Свети Георги ЕАД</h4>
          </div>
          <div className="description">
            Дружеството разполага с достатъчно количество от продуктите на склад
            и спазва стриктно сроковете за доставка по нашите заявки.
            Доставяните стоки съответстват на изискванията на УМБАЛ Свети Георги
            ЕАД гр. Пловдив, като срокът на годност е винаги по-голям или равен
            на 75%. Качеството на реактивите и консумативите съответства на
            Европейските директиви за медицински изделия и ин-виро диагностични
            продукти.
          </div>
        </div>
        <div className="client-item box client-item-2 a">
          <div className="banner">
            <img src={client_2} alt="clientLogo" />
            <h4>Топлофикация София ЕАД</h4>
          </div>
          <div className="description">
            Доставките се изпълняват в предвидените срокове и с много добро
            качество!
          </div>
        </div>
        <div className="client-item box client-item-3 a">
          <div className="banner">
            <img src={client_3} alt="clientLogo" />
            <h4>Александровска болница</h4>
          </div>
          <div className="description">
            "Химтекс" ООД спазва стриктно договорните си взаимоотношения с УМБАЛ
            "Александровска" ЕАД, осигурява своевременни доставки и е доказала
            своя професионализъм в ежедневната си дейност.
          </div>
        </div>
        <div className="client-item box client-item-4 b">
          <div className="banner">
            <img src={client_4} alt="clientLogo" />
            <h4>УМБАЛ Света Екатерина</h4>
          </div>
          <div className="description">
            В процеса на взаимна работа "Химтекс" ООД се доказа като коректен
            изпълнител на доставките, доставените стоки са качествени и
            отговарят на съвременните изисквания.
          </div>
        </div>
        <div className="client-item box client-item-5 b">
          <div className="banner">
            <img src={client_5} alt="clientLogo" />
            <h4>Университетска болница “Лозенец”</h4>
          </div>
          <div className="description">
            Фирмата изпълнява задълженията си по сключените договори с
            изключителна коректност и се отличава с гъвкавата си търговска
            политика. Доставените консумативи са с много високо качество,
            отговарящи напълно на завишените изисквания на Болница "Лозенец".
            Считам, че фирмата е в състояние да отговори максимално на нуждите
            на всяка болница или лечебно заведение, благодарение на своя опит и
            професионализъм.
          </div>
        </div>
        <div className="client-item box client-item-6 b">
          <div className="banner">
            <img src={client_6} alt="clientLogo" />
            <h4>СБАЛББ Света София ЕАД</h4>
          </div>
          <div className="description">
            Дружеството разполага с широка гама консумативи и реактиви на склад
            и спазва стриктно сроковете за доставка по нашите заявки.
            Доставяните продукти са с доказано качество и произход.
          </div>
        </div>
        <div className="client-item box client-item-7 c">
          <div className="banner">
            <img src={client_7} alt="clientLogo" />
            <h4>Военнамедицинска Академия</h4>
          </div>
          <div className="description">
            Военномедицинска Академия, гр. София издава референция на фирма
            "Химтекс" ООД в уверение на това, че същата е наш многогодишен
            търговски партньор. Доставените консумативи са с високо качество,
            произведени са от реномирани производители и напълно удовлетворяват
            специалистите работещи с тях. Фирмата винаги е спазвала стриктно
            търговските договори.
          </div>
        </div>
        <div className="client-item box client-item-8 c">
          <div className="banner">
            <img src={client_8} alt="clientLogo" />
            <h4>Брикел ЕАД</h4>
          </div>
          <div className="description">
            Качеството на продуктите отговаря напълно на нашите изисквания и
            потребности, като всички доставки се осъществяват в определения за
            целта срок, придружени от всички изискуеми документи.Дружеството
            разполага с необходимата складова база, транспортен парк съгласно
            нормативните изисквания и необходимия квалифициран
            персонал.Потвърждаваме, че "Химтекс" ООД е надежден и лоялен
            партньор, на който може да се разчита, както за регулярни доставки,
            така и при спешно възникнали потребности.
          </div>
        </div>
      </section>
      <section className="background">
        <div className="bg-cont-padding">
          <h3 className="questions">Имате ли въпроси?</h3>
          <button type="button" className="show-more">
            <p>Свържете се с нас</p>
          </button>
        </div>
      </section>
    </main>
  )
}
export default Home
