import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"
import Books from "./pages/Books.jsx"
import { books } from "./data.js"
import BookInfo from "./pages/BookInfo.jsx";

function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Books" element={<Books books={books} />}></Route>
            <Route path="/Books/1" element={<BookInfo books={books} />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
