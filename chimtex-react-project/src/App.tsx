import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import About from "./pages/about-us/about"
import CheckOut from "./pages/check-out/check-out"
import Home from "./pages/home/home"
import Product from "./pages/product/product"
import Profile from "./pages/profile/profile"
import Promotions from "./pages/promotions/promotions"
import Contacts from "./pages/contacts/contacts"
import ProductSearch from "./pages/product-search/product-search"
import categories from "./data/store-categories.json"
// import categories from "./data/store-categories.json"

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/product-search"
          element={<ProductSearch categories={categories} />}
        />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
