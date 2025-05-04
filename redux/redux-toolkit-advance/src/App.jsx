import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  useCounter,
} from "./features/counter/counterSlice";
import { fetchUser, useUser } from "./features/user/userSlice";

function Counter() {
  // useSelector

  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const counter = useCounter();

  //useDispatch

  return (
    <div style={{ marginLeft: "200px" }}>
      <h2>Count: {counter.value} </h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

function User() {
  const { loading, user, error } = useUser();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);

  console.log("User", { loading, user, error });

  return (
    <div style={{ marginLeft: "200px", marginTop: "200px" }}>
      {loading && <p>Loading ...</p>}
      {user && <p>Name: {user.name}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ marginLeft: "200px" }}>
      <h1>Redux Toolkit</h1>

      <Counter />

      <User />
    </div>
  );
}

export default App;
