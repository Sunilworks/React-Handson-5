import React from "react";
import { useState } from "react";

function HOC() {
  return (
    <div className="App">

      <div className="comp1">
      <h1>What is HOC??</h1>
        
          <HOCRed cmp={Counter} />
          <HOCGreen cmp={Counter} />
          <HOCBlue cmp={Counter} />
        
      </div>
    <div className="comp2">
      <p>It is also known as HOC. In React, HOC is an advanced technique for reusing component logic. It is a function that takes a component and returns a new component. According to the official website, it is not the feature(part) in React API, but a pattern that emerges from React compositional nature. They are similar to JavaScript functions used for adding additional functionalities to the existing component.
      <br/>
      A higher order component function accepts another function as an argument. The map function is the best example to understand this. The main goal of this is to decompose the component logic into simpler and smaller functions that can be reused as you need.</p>
    </div>
    </div>
  );
}
function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      Red
      <props.cmp />
    </h2>
  );
}
function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100 }}>
      Grren
      <props.cmp />
    </h2>
  );
}
function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100 }}>
      blue <props.cmp />
    </h2>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default HOC;
