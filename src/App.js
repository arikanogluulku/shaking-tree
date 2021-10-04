import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tree, AppleBasket } from "./components";
import { startShake, stopShake } from "./store/shake/actions";
import {
  setAppleDrop,
  setBasket,
  setApples,
  restart,
} from "./store/apple/actions";
import { randomNum, randomID } from "./utils/random";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const apples = useSelector((state) => state.appleReducer.apples);

  const handleClikRestart = () => {
    //returns all apples to their initial position.
    dispatch(restart());
  };
  const handleShake = () => {
    dispatch(startShake()); //shake is set true
    setTimeout(function () {
      //After 3 seconds, the dropApple function is called for the apple to drop.
      dispatch(stopShake());
      dropApple();
    }, 3000);
  };

  const dropApple = () => {
    let appleCount = apples.length; //Number of apples found in the state
    let dropApplesId = randomID(randomNum(1, appleCount), appleCount); //array holding the ids of apples falling from the tree

    dropApplesId.forEach((id) => {
      let apple = apples[id]; //apple expected to fall
      let randTime = randomNum(1, 5); //apple falling second
      dispatch(
        setAppleDrop({
          //apple drops with setAppleDrop function,
          id: apple.id,
          left: apple.left,
          top: "90%",
          transition: `${randTime}s`,
        })
      );
      setTimeout(function () {
        //When the apple's time and adding time have passed, the apples added to the basket are deleted from the apples.
        dispatch(setBasket(apple)); //apple added to basket.
        dispatch(setApples(id)); //added apple to basket deleted from apples
      }, randTime * 1000 + 1000);
    });
  };

  return (
    <div className="container">
      <Tree />
      <div className="button-container">
        <button // button to shake tree
          className="button-shake"
          onClick={() => {
            handleShake();
          }}
        >
          SHAKE
        </button>
        <button // button to restart
          className="button-restart"
          onClick={() => {
            handleClikRestart();
          }}
        >
          RESTART
        </button>
      </div>
      <AppleBasket />
    </div>
  );
}

export default App;
