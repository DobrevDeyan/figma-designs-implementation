import "./product-card.css"

function ProductCard({ id, name, price, imageUrl }) {
  console.log("imageUrl:", imageUrl)
  return (
    <>
      <div className="col-lg-2 col-6 hidden-card">
        <div className="card">
          <div className="card-image-container">
            <img src={imageUrl} alt="gloves" className="card-image" />
          </div>
          <h4 className="card-title">{name}</h4>
          <p className="card-description">
            Латексова нестерилна ръкавица без пудра с номер {id}
          </p>
          <p>{price}</p>
        </div>
      </div>
    </>
  )
}
export default ProductCard
