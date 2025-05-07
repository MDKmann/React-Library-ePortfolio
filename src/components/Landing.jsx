import React from "react";
import books_logo from "../assets/books_logo.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's Most Awarded Online Library Platform</h1>
            <h2>
              Grow your thinking with{" "}
              <span className="purple">
                SMART<span className="header__span">BOOKS</span>
              </span>
            </h2>
            <Link to="/Books">
              <button className="btn">Browse Books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={books_logo} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
