import { useState } from "react";
import "./App.css";



function App() {
  let [counter, setCounter] = useState(0); //hook

  function increment() {
    setCounter(counter++);
  }
  console.log(counter);

  console.log(`App component rendered`);

  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "200px" }}>
      <h1>Count: {counter} </h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
