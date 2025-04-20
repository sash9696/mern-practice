import React, { createContext, useContext } from "react";

//problem
//prop drilling

//solutions
// react context api
//state management tools like redux , flux, zudstand
//create own state management tool // react context api + use state or use reducer
//render props
//composition

//setup required

//create the context

const UserContext = createContext();

console.log(UserContext);


const name = "john";

function User3() {
//use the consumer component to extract value in any component we want
//u can also use use context hook

const name =  useContext(UserContext);

console.log('name',name)

  return (
    // <>
    // <UserContext.Consumer>
    //   {(name) =>  <h1> {name} </h1>}
    // </UserContext.Consumer>
      
    // </>
    <>
          <h1>{name}</h1>

    </>
  );
}

function User2() {
  return (
    <>
      <User3 />
    </>
  );
}

function User1() {
  return (
    <>
      <User2 />
    </>
  );
}

function User() {
  return (
    <>
      <User1 />
    </>
  );
}

function App() {
  //use the provider component to make the data accessible
  return (
    <div>
      <UserContext.Provider value={name}>
        <User />
      </UserContext.Provider>
    </div>
  );
}

export default App;
