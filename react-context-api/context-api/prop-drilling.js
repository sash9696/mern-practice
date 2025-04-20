
import React from 'react'


// react context api

//prop drilling

function User3({name}){


  return (
    <>
      <h1> {name} </h1>
    </>
  )
}

function User2({name}){

  return (
    <>
      <User3 name={name} />
    </>
  )
}


function User1({name}){

  return (
    <>
      <User2 name={name} />
    </>
  )
}

function User({name}){

  return (
    <>
      <User1 name={name} />
    </>
  )
}

function App() {
  const name = 'john';

  return (
    <div>
      <User name={name} />
    </div>
  )
}

export default App