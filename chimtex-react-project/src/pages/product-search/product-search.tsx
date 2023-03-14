/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import arrow_right from "../../assets/product-page-images/arrow-right.svg"
import home_icon from "../../assets/product-page-images/home-icon.svg"
import { Category } from "../../interfaces/category"
import "./product-search.css"

const ProductSearch = ({ categories }: { categories: Category[] }) => {
  const [activeCategory, setActiveCategory] = useState<any | null>(null)
  const [activeSubcategory, setActiveSubcategory] = useState<any | null>(null)

  const handleDropdown = (categoryIndex: number, subcategoryIndex?: number) => {
    if (subcategoryIndex !== undefined) {
      setActiveSubcategory(subcategoryIndex)
    } else if (activeCategory === categoryIndex) {
      setActiveCategory(null)
      setActiveSubcategory(null)
    } else {
      setActiveCategory(categoryIndex)
      setActiveSubcategory(null)
    }
  }

  const activeCategoryName =
    activeCategory !== null ? categories[activeCategory].name : ""
  const activeSubcategoryName =
    activeSubcategory !== null
      ? categories[activeCategory!].subcategories[activeSubcategory]
      : ""

  return (
    <main id="product-search" className="container container-wrap">
      <div className="breadcrumbs">
        <img src={home_icon} alt="home-icon" />
        <img src={arrow_right} alt="arrow-right" />
        <a href="#">Продукти</a>
        {activeCategory !== null && (
          <>
            <img src={arrow_right} alt="arrow-right" />
            <a href="#" onClick={() => handleDropdown(activeCategory)}>
              {activeCategoryName}
            </a>
          </>
        )}
        {activeSubcategory !== null && (
          <>
            <img src={arrow_right} alt="arrow-right" />
            <a href="#" className="active">
              {activeSubcategoryName}
            </a>
          </>
        )}
      </div>
      <aside className="aside-menu">
        <ul className="category-list">
          {categories.map((category, categoryIndex) => (
            <li key={categoryIndex}>
              <button
                className="category"
                onClick={() => handleDropdown(categoryIndex)}
              >
                {category.name}
              </button>
              <CSSTransition
                in={activeCategory === categoryIndex}
                timeout={500}
                classNames="subcategories"
                unmountOnExit
              >
                <ul className="subcategory-list">
                  {category.subcategories.map(
                    (subcategory, subcategoryIndex) => (
                      <li
                        key={subcategoryIndex}
                        className={`subcategory ${
                          activeSubcategory === subcategoryIndex ? "active" : ""
                        }`}
                        onClick={() =>
                          handleDropdown(categoryIndex, subcategoryIndex)
                        }
                      >
                        {subcategory}
                      </li>
                    )
                  )}
                </ul>
              </CSSTransition>
            </li>
          ))}
        </ul>
      </aside>
      <section className="search-list"></section>
    </main>
  )
}
export default ProductSearch

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from "react"
// import { CSSTransition } from "react-transition-group"
// import arrow_right from "../../assets/product-page-images/arrow-right.svg"
// import home_icon from "../../assets/product-page-images/home-icon.svg"
// import { Category } from "../../interfaces/category"
// import "./product-search.css"

// const ProductSearch = ({ categories }: { categories: Category[] }) => {
//   const [active, setActive] = useState<any | null>(null)

//   const handleDropdown = (index: number) => {
//     if (active === index) {
//       setActive(null)
//     } else {
//       setActive(index)
//     }
//   }

//   return (
//     <main id="product-search" className="container container-wrap">
//       <div className="breadcrumbs">
//         <img src={home_icon} alt="home-icon" />
//         <img src={arrow_right} alt="arrow-right" />
//         <a href="#">Продукти</a>
//         <img src={arrow_right} alt="arrow-right" />
//         <a href="#">Медицински консумативи</a>
//         <img src={arrow_right} alt="arrow-right" />
//         <a href="#">Контейнери</a>
//       </div>
//       <aside className="aside-menu">
//         <ul className="category-list">
//           {categories.map((category, index) => (
//             <li key={index}>
//               <button
//                 className="category"
//                 onClick={() => handleDropdown(index)}
//               >
//                 {category.name}
//               </button>
//               <CSSTransition
//                 in={active === index}
//                 timeout={500}
//                 classNames="subcategories"
//                 unmountOnExit
//               >
//                 <ul className="subcategory-list">
//                   {category.subcategories.map((subcategory, subIndex) => (
//                     <li key={subIndex} className="subcategory">
//                       {subcategory}
//                     </li>
//                   ))}
//                 </ul>
//               </CSSTransition>
//             </li>
//           ))}
//         </ul>
//       </aside>
//       <section className="search-list"></section>
//     </main>
//   )
// }

// export default ProductSearch
