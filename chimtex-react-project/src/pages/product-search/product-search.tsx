import "./product-search"
import { useState } from "react"
import { Category } from "../../interfaces/category"

const ProductSearch = ({ categories }: { categories: Category[] }) => {
  const [active, setActive] = useState<any | null>(null)

  const handleDropdown = (index: number) => {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index)
    }
  }

  return (
    <main className="product-search">
      <aside className="aside-menu">
        <h2>Product Search</h2>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <button
                className="category"
                onClick={() => handleDropdown(index)}
              >
                {category.name}
              </button>
              {active === index && (
                <ul className="subcategory-list">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className="subcategory">
                      {subcategory}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <section className="search-list"></section>
    </main>
  )
}

export default ProductSearch
