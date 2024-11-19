import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"
import Books from "./pages/Books.jsx"
import { books } from "./data.js"
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Books" element={<Books books={books} />}></Route>
            <Route path="/Books/:id" element={<BookInfo books={books} />}></Route>
            <Route path="/Cart" element={<Cart books={books} />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
