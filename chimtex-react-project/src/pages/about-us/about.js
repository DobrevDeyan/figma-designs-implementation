/* eslint-disable jsx-a11y/anchor-is-valid */
import lab from "../../assets/about-page-images/lab.png"
import store from "../../assets/about-page-images/store.png"
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
import "./about.css"

function About() {
  return (
    <main>
      <h3>За нас</h3>
      <p>Кои сме ние и какво предлагаме</p>
      <section className="container about-us">
        <div className="row">
          <div className="col-xl-6">
            <img src={lab} alt="labPicture" />
          </div>
          <div className="col-xl-6">
            <p>
              Фирма „Химтекс” ООД е на българския пазар от 1994 год.
              Специализирана е в търговията с лабораторни и медицински
              консумативи, ареометри и термометри, технически химикали и
              лабораторни реактиви, филтърни и индикаторни хартии, апаратура,
              уреди за пробовземане и помпи. Екслузивни представители за
              България сме на Glaswarenfabrik Karl Hecht Co.Kg Германия,Buerkle
              GmbH Германия, KAVALIERGLASS a.s.Чехия, Panreac Quimika
              S.A.&Applichem GmbH, filtraTECH Франция, DELTALAB S.L Испания,
              Normax - Fábrica de Vidros Científicos, Lda Португалия, SOCOREX
              ISBA SA Швейцария, Duran Group Германия Наши партньори в Европа са
              още фирмите - Amarell GmbH Германия, Kern&Sohn GmbH Германия,
              VITLAB GmbH Германия, GAMA Group a.s. Чехия, Vacutest KIMA Италия,
              BOURNAS MEDICALS Гърция, SENTINEL CH. SpA Италия и др.
            </p>
          </div>
        </div>
      </section>
      <h4>Сертификати</h4>
      <section className="container certificates">
        <div className="row justify-content-around">
          <div className="col-xl-3">
            <div className="iso-container">
              <p>Сертифициран</p>
              <p>9001:2022</p>
              <p>ISO</p>
              <span className="stroke-1"></span>
              <span className="stroke-2"></span>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="iso-container">
              <p>Сертифициран</p>
              <p>45001:2022</p>
              <p>ISO</p>
              <span className="stroke-1"></span>
              <span className="stroke-2"></span>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="iso-container">
              <p>Сертифициран</p>
              <p>14001:2022</p>
              <p>ISO</p>
              <span className="stroke-1"></span>
              <span className="stroke-2"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="container our-partners">
        <h3>Нашите партньори</h3>
        <div className="p-container">
          <p>
            На българския пазар предлагаме голямо разнообразие от химически и
            лабораторни консумативи, като се стремим да поддържаме високи
            складови наличности с оглед бързото задоволяване нуждите на нашите
            клиенти. Постоянни клиенти на фирмата ни са:
          </p>
        </div>
        <div className="logos">
          <div className="manufacturer-img-container">
            <img src={logo_1} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_2} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_3} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_4} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_5} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_6} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_7} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_8} alt="logo" />
          </div>
        </div>
        <div className="logos">
          <div className="manufacturer-img-container">
            <img src={logo_9} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_10} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_11} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_12} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_13} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_14} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_15} alt="logo" />
          </div>
          <div className="manufacturer-img-container">
            <img src={logo_16} alt="logo" />
          </div>
        </div>
      </section>
      <section className="container our-facilities">
        <h3>Нашата база</h3>
        <div className="p-container">
          <p>
            Химтекс ООД разполага със собствена складова база в Димитровград,
            лаборатория за разфасовка и собствен автопарк за големи тонажи и
            малки товари. Фирмата ни има открити клонове в градовете София,
            Плевен, Русе и Варна за удобство На нашите клиенти. Ръководителите
            на фирмата са специалисти в областта на медицината и химията и
            предлагат висок професионализъм и гъвкавост в търговските
            взаимоотношения. Във фирмата ни работят 28 служители, като по този
            начин ви гарантираме бързо и компетентно обслужване на клиентите.
            Екипът на Химтекс ООД гарантира честност и лоялност към сегашни и
            бъдещи партньори!
          </p>
        </div>
      </section>
      <img src={store} alt="store" />
      <h3 className="questions">Имате ли въпроси?</h3>
      <div className="cont-pad">
        <button type="button" className="show-more">
          <a href="#">Свържете се с нас</a>
        </button>
      </div>
    </main>
  )
}
export default About
