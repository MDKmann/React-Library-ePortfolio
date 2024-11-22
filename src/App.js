import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function updateQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item,
      ),
    );
  }
  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  function numberCartItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberCartItems={numberCartItems()} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Books" element={<Books books={books} />}></Route>
          <Route
            path="/Books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          ></Route>
          <Route
            path="/Cart"
            element={
              <Cart
                books={books}
                cart={cart}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// function changeQuantity(book, quantity) {
//   setCart(
//     cart.map((item) => {
//       if (item.id === book.id) {
//         return {
//           ...item,
//           quantity: +quantity,
//         };
//       } else {
//         return item;
//       }
//     })
//   );
// }

// function addToCart(book) {
//   const dupeItem = cart.find((item) => +item.id === +book.id);
//   if (dupeItem) {
//     setCart(
//       cart.map((item) => {
//         if (item.id === dupeItem.id) {
//           return {
//             ...item,
//             quantity: item.quantity + 1,
//           };
//         } else {
//           return item;
//         }
//       })
//     );
//   }
//   else {
//     setCart([...cart, {...book, quantity: 1}])
//   }
// }
