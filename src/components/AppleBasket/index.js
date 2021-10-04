import React from "react";
import { useSelector } from "react-redux";
import Apple from "../Apple";
import basket from "../../assets/basket.svg";
import "./style.scss";
//basket component -> failling apples are added to basket array.this component basket array returns
function AppleBasket() {
  const appleBasket = useSelector((state) => state.appleReducer.basket);
  return (
    <div className="basket-container">
      <img src={basket} className="basket" alt="apple basket" />
      <div className="basket-apple">
        {appleBasket.map((item) => {
          return <Apple key ={item.id}  />
        })}
      </div>
    </div>
  );
}

export default AppleBasket;
