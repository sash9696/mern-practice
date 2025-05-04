import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./actions";
import Counter from "./Counter";

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
  //mapStateToProps
  //HOC
  //this function allows ur component to access redux store state as props
  //use it when ur component needs to read data from the store

  //mapDispatchToProps
  //this object allows ur component to dispatch actions to the redux store
  //use it when ur component needs to update the state via actions

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
