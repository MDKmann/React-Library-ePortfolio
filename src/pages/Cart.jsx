import React from "react";

function Cart({ books }) {
  return (
    <div id="books__body">
      <main id="books_-main">
        <div className="books_-container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="" className="cart__book--img" />
                  <div className="cart__book--info">
                    <span className="cart__book--title">Crack the Coding Interview</span>
                    <span className="cart__book--price">$20</span>
                    <button className="cart__book--remove">Remove</button>
                  </div>
                </div>
                <div className="cart__quantity">
                  <input type="text" className="cart__input" />
                </div>
                <div className="cart__total">

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
