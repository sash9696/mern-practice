import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, useCounter } from './features/counter/counterSlice';

function App() {


  // useSelector

  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const counter = useCounter();


  //useDispatch




  return (
    <div style={{marginLeft:'200px'}} >
      <h1>Redux Toolkit</h1>

      <h2>Count: {counter.value} </h2>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default App