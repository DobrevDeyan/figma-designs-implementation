import store_items from "../../data/store.json"

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
