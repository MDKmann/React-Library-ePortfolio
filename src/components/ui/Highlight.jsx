import React from "react";

function Highlight({ icon, highlightTitle, highlightPara }) {
  return (
    <div className="highlight">
      <div className="highlight__img">{icon}</div>
      <h3 className="highlight__subtitle"> {highlightTitle} </h3>
      <p className="highlight__para"> {highlightPara} </p>
    </div>
  );
}

export default Highlight;
