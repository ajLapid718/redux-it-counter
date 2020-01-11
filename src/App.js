import React, { Component } from 'react';
import './App.css';

// eventually, at the bottom of this file, I will explicitly connect this component to the redux store via connect;
import { connect } from "react-redux";
// this is the action creator that will return an object that looks like this...
//...{type: INCREMENT};
import { increment } from "./store/utilities/counter";

class App extends Component {
  constructor() {
    super();
  }

  handleIncrement = () => {
    this.props.incrementCounter();
    // console.log(this.props, "heyyy what are the props");
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{this.props.currentCount}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </header>
    </div>
  );
  }
}

// anything in this function will go onto the component's "props" object;
// in other words, you can now have access to this.props.currentCount;
function mapState(state) {
  console.log("in mapState", state);
  return {
    currentCount: state.counterReducer
  }
}

// anything in this function will be accessible on the component's "props" object;
// in other words, you can now call this.props.incrementCounter;
function mapDispatch(dispatch) {
  return {
    incrementCounter: () => dispatch(increment())
  }
}

// explicitly connect to the Redux store;
// HOC: higher-order component;
export default connect(mapState, mapDispatch)(App);
