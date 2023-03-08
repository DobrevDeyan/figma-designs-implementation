import ProductCard from "../../components/product-card/product-card.js"
import store_items from "../../data/store.json"

function Promotions() {
  return (
    <>
      <h1>Store</h1>
      {store_items.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ))}
    </>
  )
}

export default Promotions
