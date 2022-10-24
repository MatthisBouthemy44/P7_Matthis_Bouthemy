//react Framework
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
//style by Sass Partials
import "./styles/style.css";

//pages by React BrowserRouter
import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Accommodation";
import Error from "./pages/Error";

//components Header && Footer
import StyledNavbar from "./components/Header/StyledNavbar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <StyledNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products/:productId" element={<Singleproduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);

//localhost:3000/products/{id}
//localhost:3000/about
//localhost:3000/err
//localhost:3000/
