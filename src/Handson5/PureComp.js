import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  //Just extend class with purecomponent
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("render");

    return (
      <div className="App">
        <div className="comp1">
          <h1>What is Pure Component??</h1>
        </div>
        <div className="comp2">
          <p>
            React components let us split the UI into independent, reusable
            pieces, and think about each piece in isolation. React components
            can be defined by extending from React.Component Class or
            React.PureComponent Class. We have created different Component
            classes until now and all these classes were extending
            React.Component Class. There are few use cases where we can use
            React Pure Components.
          </p>
          <h3>{this.state.count}</h3>
          <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default PureComp;
