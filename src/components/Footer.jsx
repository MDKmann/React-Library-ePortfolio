import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            {/* <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure> */}
            <h2 className="purple nav__logo">
              SMART<span className="footer__logo--span">BOOKS</span>
            </h2>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/Books" className="footer__link">
              Books
            </Link>
            <Link to="/Cart" className="footer__link">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2021 Library</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
