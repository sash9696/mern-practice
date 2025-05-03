import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./actions";


//redux flow

//UI

//dispatching the action

//reducer

//store the store holds enitre state of the application 

//ui update

//redux
//single source of truth that is redux store

//store => central place where you app's state lives

//Action => an object that describes what happened

//Reducer => a pure function that decides how the state changes based on action

//Dispatch => a way to send the actions to the store

//two hooks

//useSelector => to pull the data from store
//useDispatch to dispatch the actions from ui

function App() {
  //access the data from the reduz store
  const count = useSelector((state) => state.count);

  //create dispatch function

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
