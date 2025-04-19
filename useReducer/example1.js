import React, { act, useReducer, useState } from "react";

//useState, useReducer =>is for complex state management

function counterReducer(state, action) {
  // based on the action it updates the state
  //actions are interpret bu reduce and it updates the state

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

function Counter() {
  //  [state, dispatch] = useReducer(reducer, intitalValue)
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  console.log("state", state);

  return (
    <div>
      <h2>Counter : {state.count} </h2>
      <button onClick={() => dispatch({type:'INCREMENT'})} >+</button>
      <button onClick={() => dispatch({type:'DECREMENT'})} >-</button>
      <button onClick={() => dispatch({type:'RESET'})} >Reset</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>USe reducer example</h1>
      <Counter />
    </div>
  );
}

export default App;
