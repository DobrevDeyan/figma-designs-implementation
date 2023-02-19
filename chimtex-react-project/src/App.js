import { Container } from "react-bootstrap"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"

function App() {
  return (
    <Container>
      <Header></Header>
      <Footer></Footer>
    </Container>
  )
}

export default App
