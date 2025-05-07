import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose{" "}
            <span className="purple">
              SMART<span className="header__span">BOOKS</span>
            </span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              highlightTitle="Easy and Quick"
              highlightPara="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              highlightTitle="10,000+ Books"
              highlightPara="Library has books in all your favorite categories."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              highlightTitle="Affordable"
              highlightPara="Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
