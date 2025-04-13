import React, { useEffect, useState } from "react";

// useEffect hook

// setup

//useEffect(callback, dependecyArray(optional))

function User() {
  const [changeName, setChangeName] = useState(false);
  const [change, setChange] = useState(false);

  //3 phases of a component
  //mount phase, update phase , unmount

  // useEffect(() => {

  //   console.log('User useEffect ran1')

  //   //fetching users data here

  // }, [])

  // //first case when u use empty dependency array
  // //use effect will run only once

  // useEffect(() => {

  //   console.log('User useEffect ran2')

  // })

  // //second case with no  dependency array

  // console.log('User component rendered')

  // useEffect(() => {
  //   console.log("User useEffect ran");
  // }, [changeName]);

  //update phase
  //third case with dependencies in  dependency array
  //it will run once after the component mounts
  //and then it will run when either of the dependencies changes

  useEffect(() => {

    console.log("User useEffect ran after mount");

    return () => {
      console.log("User useEffect runs before unmount");
      //cleanup
      //unmount phase
    }

  }, [])

  console.log("User component rendered");

  return (
    <div>
      <h1>{changeName ? "John" : "Peter"}</h1>
      <button onClick={() => setChange(!change)}>Change </button>

      <button onClick={() => setChangeName(!changeName)}>Change Name</button>
    </div>
  );
}

function App() {

  const [toggleUser, setToggleUser] = useState(false);
  // useEffect(() => {

  //   console.log('App useEffect ran')

  // }, [])

  console.log("App component rendered");

  

  return (
    <div>
      {toggleUser &&   <User />}
    

      <button onClick={() => setToggleUser(!toggleUser)} >Toggle</button>
    </div>
  );
}

export default App;
