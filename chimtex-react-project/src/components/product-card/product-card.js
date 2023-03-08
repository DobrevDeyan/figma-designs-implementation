import "./product-card.css"

function ProductCard({ id, name, price, imageUrl }) {
  return (
    <>
      {id}
      {name}
      {price}
      {imageUrl}
    </>
  )
}
export default ProductCard
