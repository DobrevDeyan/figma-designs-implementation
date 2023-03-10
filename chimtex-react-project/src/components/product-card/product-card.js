import "bootstrap/dist/css/bootstrap.css"
import "./product-card.css"

function ProductCard({
  id,
  name,
  price,
  imageUrl,
  discount,
  regular_price,
  discounted_price,
  description,
}) {
  return (
    <div className="product-card">
      <div className="card">
        <div className="card-image-container">
          <img src={imageUrl} alt="gloves" className="card-image" />
          <div className="discount-amount">
            <p>{-discount}%</p>
          </div>
        </div>
        <h4 className="card-title">{name}</h4>
        <p className="card-description">{description}</p>
        <div className="pricing">
          <p>{regular_price} лв.</p>
          <p>{discounted_price} лв.</p>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
