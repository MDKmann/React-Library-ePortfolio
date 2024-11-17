import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

function BookInfo({ books }) {
  return (
    <div id="books__body">
      <div id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
                  alt=""
                  className="book__selected--ig"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  Crack the Coding Interview
                </h2>
                <Rating 
                rating ={4.5}
                />
                <Price 
                salePrice={books.salePrice}
                originalPrice={books.originalPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
