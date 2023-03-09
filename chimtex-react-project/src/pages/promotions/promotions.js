import ProductCard from "../../components/product-card/product-card.js"
import store_items from "../../data/store.json"

function Promotions() {
  return (
    <main id="promotions" className="container container-wrap">
      <h1>Store</h1>
      <div className="row justify-content-between">
        {store_items.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </main>
  )
}

export default Promotions
