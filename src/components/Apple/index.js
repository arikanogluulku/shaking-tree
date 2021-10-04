import React from "react";
import appleImage from "../../assets/apple.svg";
import "./style.scss";
//apple component 
function Apple({style}) {
  return (
    <div>
      <img
        src={appleImage}
        className="apple"
        alt="apple"
        style={style}
      />
    </div>
  );
}

export default Apple;
