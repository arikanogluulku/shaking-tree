import React from "react";
import { useSelector } from "react-redux";
import Apple from "../Apple";
import treeImage from "../../assets/tree.svg";
import "./style.scss";
//store is accessed for tree shaking and apple position.to render according to change
function Tree() {
  const isShake = useSelector((state) => state.shakeReducer);
  const apples = useSelector((state) => state.appleReducer.apples);
  return (
    <div className="tree-container">
      <img
        src={treeImage}
        className={`tree ${isShake ? "tree-shake" : ""} `}
        alt="tree"
      />
      <div className="apple-container">
        {apples.map((apple, id) => {
          return <Apple key={id} style={apple} />;
        })}
      </div>
    </div>
  );
}

export default Tree;
