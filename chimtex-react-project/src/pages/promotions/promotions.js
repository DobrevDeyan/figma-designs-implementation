import store_items from "../../data/store.json"
import ProductCard from "../../components/product-card/product-card.js"

function Promotions() {
  return (
    <>
      <h1> Store</h1>
      {store_items.map((item) => (
        <div>{JSON.stringify(item)}</div>
      ))}
    </>
  )
}
export default Promotions
