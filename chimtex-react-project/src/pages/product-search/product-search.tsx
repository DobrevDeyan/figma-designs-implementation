/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"
import arrow_right from "../../assets/product-page-images/arrow-right.svg"
import home_icon from "../../assets/product-page-images/home-icon.svg"
import Search from "../../components/search-view/search-view"
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
      <div className="search-menu">
        <aside className="aside-menu">
          <ul className="category-list">
            {categories.map((category, categoryIndex) => (
              <li key={categoryIndex}>
                <button
                  className={`category ${
                    activeCategory === categoryIndex ? "active-category" : ""
                  }`}
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
                            activeSubcategory === subcategoryIndex
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleDropdown(categoryIndex, subcategoryIndex)
                          }
                        >
                          <a href="#">{subcategory}</a>
                        </li>
                      )
                    )}
                  </ul>
                </CSSTransition>
              </li>
            ))}
          </ul>
        </aside>
        <section className="search-list">
          <Search></Search>
        </section>
      </div>
    </main>
  )
}
export default ProductSearch

// This code defines a React component called ProductSearch that takes a single prop categories of type Category[], where Category is a custom type. The component returns a markup structure for a product search page that displays a list of categories and subcategories in a dropdown menu.

// The component uses React hooks to manage state. Specifically, it uses the useState hook to define two pieces of state: activeCategory and activeSubcategory. These are initialized to null.

// The handleDropdown function is used as a callback function for when a category or subcategory button is clicked. It takes two arguments: categoryIndex, which is the index of the category button that was clicked, and subcategoryIndex, which is the index of the subcategory button that was clicked (if applicable).

// If subcategoryIndex is defined, it sets the activeSubcategory state to the value of subcategoryIndex. If subcategoryIndex is not defined and activeCategory is equal to categoryIndex, it resets both activeCategory and activeSubcategory to null. Otherwise, it sets activeCategory to categoryIndex and activeSubcategory to null.

// The component also defines two variables, activeCategoryName and activeSubcategoryName, which hold the names of the active category and subcategory, respectively. These are used in the breadcrumb trail that appears above the list of categories and subcategories.
///

/* This markup will render a list of products with their images, names, descriptions, and prices. It will only display the products if a subcategory has been selected. If no subcategory is selected, the search-list section will be empty. Note that this assumes that the items property exists for each subcategory in the categories array, and that each item has an image, name, description, and price property. You may need to modify the markup if the data structure is different. */

//

/* <section className="search-list">
        {activeSubcategory !== null && (
          <div className="search-results">
            <h2>{activeSubcategoryName}</h2>
            <ul>
              {categories[activeCategory!].subcategories[
                activeSubcategory
              ].items.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>Price: {item.price} USD</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section> */
