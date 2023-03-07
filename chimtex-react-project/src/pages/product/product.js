/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from "react"
// import $ from "jquery"
import alert from "../../assets/product-page-images/alert.svg"
import arrow_right from "../../assets/product-page-images/arrow-right.svg"
import home_icon from "../../assets/product-page-images/home-icon.svg"
import image_1 from "../../assets/product-page-images/image-1.png"
import image_2 from "../../assets/product-page-images/image-2.png"
import card_1 from "../../assets/product-page-images/image-3.png"
import minus from "../../assets/product-page-images/minus.svg"
import plus from "../../assets/product-page-images/plus.svg"
import product from "../../assets/product-page-images/product-img.png"
import "./product.css"

function Product() {
  const [quantity, setQuantity] = useState(1)

  const handleMinusClick = (e) => {
    e.preventDefault()
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const handlePlusClick = (e) => {
    e.preventDefault()
    if (quantity < 100) {
      setQuantity(quantity + 1)
    }
  }

  return (
    <main id="product">
      <div className="breadcrumbs container container-wrap">
        <img src={home_icon} alt="home-icon" />
        <img src={arrow_right} alt="arrow-right" />
        <a href="#">Продукти</a>
        <img src={arrow_right} alt="arrow-right" />
        <a href="#">Медицински консумативи</a>
        <img src={arrow_right} alt="arrow-right" />
        <a href="#">Ръкавици</a>
        <img src={arrow_right} alt="arrow-right" />
        <p>Колба със шлиф, капковидна форма</p>
      </div>
      <div className="container container-wrap product-listing">
        <div className="row">
          <div className="col-lg-5 d-flex col-12 justify-content-center">
            <div className="product-img-container">
              <img src={product} alt="product-img" />
              <div className="availability-message">
                <p>Налично на склад</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 justify-content-center">
            <h4>Колба със шлиф, капковидна форма</h4>
            <div>
              <p className="price">4094.5ВР</p>
              <p className="manufacturer">Производител</p>
            </div>
            <p className="brand">Simax</p>
            <div className="product-labels">
              <img src={image_1} alt="label-1" />
              <img src={image_2} alt="label-1" />
              <img src={image_2} alt="label-1" />
              <img src={image_2} alt="label-1" />
              <img src={image_2} alt="label-1" />
            </div>
            <form action="#" method="#" className="product-submission">
              <div className="form-field">
                <p>Размер</p>
                <input
                  type="radio"
                  name="bottle-size"
                  value="10 мл."
                  id="size-10"
                  className="bottle-size"
                  //   checked
                />
                <label for="size-10">10 мл.</label>
                <input
                  type="radio"
                  name="bottle-size"
                  value="25 мл."
                  id="size-25"
                  className="bottle-size"
                />
                <label for="size-25">25 мл.</label>
                <input
                  type="radio"
                  name="bottle-size"
                  value="50 мл."
                  id="size-50"
                  className="bottle-size"
                />
                <label for="size-50">50 мл.</label>
                <input
                  type="radio"
                  name="bottle-size"
                  value="100 мл."
                  id="size-100"
                  className="bottle-size"
                />
                <label for="size-100">100 мл.</label>
                <input
                  type="radio"
                  name="bottle-size"
                  value="250 мл."
                  id="size-250"
                  className="bottle-size"
                />
                <label for="size-250">250 мл.</label>
              </div>

              <div className="form-field">
                <p>Брой в опаковка</p>
                <input
                  type="radio"
                  name="bottle-quantity"
                  value="7 бр."
                  id="quantity-7"
                  className="bottle-quantity"
                  checked
                />
                <label for="quantity-7">7 бр.</label>
                <input
                  type="radio"
                  name="bottle-quantity"
                  value="10 бр."
                  id="quantity-10"
                  className="bottle-quantity"
                />
                <label for="quantity-10">10 бр.</label>
                <input
                  type="radio"
                  name="bottle-quantity"
                  value="60 бр."
                  id="quantity-60"
                  className="bottle-quantity"
                />
                <label for="quantity-60">60 бр.</label>
              </div>

              <div className="form-field">
                <div>
                  <p>Количество</p>
                  <div className="quantity-container">
                    <button className="minus-btn" onClick={handleMinusClick}>
                      <img src={minus} alt="minus-symbol" />
                    </button>
                    <input
                      type="number"
                      className="quantity-input"
                      value={quantity}
                      min="1"
                      max="100"
                      readOnly
                    />
                    <button className="plus-btn" onClick={handlePlusClick}>
                      <img src={plus} alt="plus-symbol" />
                    </button>
                  </div>
                </div>
                <div className="summary">
                  <div className="summary-row">
                    <p>Цена</p>
                    <div className="prices-container">
                      <p className="old-price">28.48 лв.</p>
                      <p className="new-price">24,90 лв.</p>
                      <p className="discount">-15%</p>
                      <img src={alert} alt="alert" />
                    </div>
                  </div>
                  <div className="summary-row">
                    <p>ДДС</p>
                    <div className="prices-container">
                      <p className="new-price">+20%</p>
                    </div>
                  </div>
                  <div className="summary-row">
                    <p>Общо</p>
                    <div className="prices-container">
                      <p className="total-price">29.88 лв.</p>
                    </div>
                  </div>
                  <div className="summary-row">
                    <p>
                      При поръчка над 10 броя, единична цена 4.50 лв. без ддс.
                    </p>
                  </div>
                </div>
              </div>
              <button type="button" className="add-checkout">
                <p>Добави в количката</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <section className="similar-products container container-wrap">
        <div className="row justify-content-center">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 card my-2 mx-2">
            <div className="card-image-container">
              <img src={card_1} alt="Image" className="card-image" />
            </div>
            <h4 className="card-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam, quod?s
            </h4>
            <p className="card-description">
              Латексова нестерилна ръкавица без пудра
            </p>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 card my-2 mx-2">
            <div className="card-image-container">
              <img src={card_1} alt="Image" className="card-image" />
            </div>
            <h4 className="card-title">
              Ръкавици медицински, латекс без пудра
            </h4>
            <p className="card-description">
              Латексова нестерилна ръкавица без пудра
            </p>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 card my-2 mx-2">
            <div className="card-image-container">
              <img src={card_1} alt="Image" className="card-image" />
            </div>
            <h4 className="card-title">
              Ръкавици медицински, латекс без пудра
            </h4>
            <p className="card-description">
              Латексова нестерилна ръкавица без пудра
            </p>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 card my-2 mx-2">
            <div className="card-image-container">
              <img src={card_1} alt="Image" className="card-image" />
            </div>
            <h4 className="card-title">
              Ръкавици медицински, латекс без пудра
            </h4>
            <p className="card-description">
              Латексова нестерилна ръкавица без пудра
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Product
