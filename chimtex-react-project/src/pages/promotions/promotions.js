import arrow_right from "../../assets/product-page-images/arrow-right.svg"
import home_icon from "../../assets/product-page-images/home-icon.svg"
import ProductCard from "../../components/product-card/product-card.js"
import store_items from "../../data/store.json"
import "./promotions.css"

function Promotions() {
  const items = store_items.map((item) => (
    <ProductCard
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      imageUrl={item.imageUrl}
      discount={item.discount}
      regular_price={item.regular_price}
      discounted_price={item.discounted_price}
      description={item.description}
    />
  ))

  return (
    <main id="promotions" className="container container-wrap">
      <div className="breadcrumbs">
        <img src={home_icon} alt="home-icon" />
        <img src={arrow_right} alt="arrow-right" />
        <p>Профил</p>
      </div>
      <h3 className="promotions-title">Промоции</h3>
      <div className="grid-container">{items}</div>
    </main>
  )
}

export default Promotions
