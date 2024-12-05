import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();


// useSelector
// Used to read/select state from the Redux store.
// It takes a function (called a selector) as an argument, which extracts a specific part of the state.
// Automatically subscribes the component to updates. If the selected state changes, the component re-renders.

// useDispatch
// Used to dispatch actions to the Redux store.
// It returns the dispatch function, which is used to trigger state changes by sending actions to reducers.

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
