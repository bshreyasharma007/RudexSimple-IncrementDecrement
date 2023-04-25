import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action/index";

const App = () => {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h2>Using React and Redux</h2>

        <div className="counter">
          <a
            className="counter_decrement"
            onClick={() => dispatch(decrement())}
          >
            <span>-</span>
          </a>

          <input className="counter_input" value={myState}></input>

          <a
            className="counter_increment"
            onClick={() => dispatch(increment())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
