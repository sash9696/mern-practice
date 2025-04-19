import React, { useRef } from 'react'

// use ref

//1. like a react way of acess dom elements
//2. persist the values without re-rendering
    //updating a ref does not trigger re render




    function FocusInput(){

      const inputRef = useRef(null);

      console.log('inputRef',inputRef)


      function handleClick(){

        inputRef.current.focus();

      }

      return (
        <div>
          <h2 >Focus Input</h2>
          <input ref={inputRef} placeholder='click the button to focus me'/>
          <button onClick={handleClick} >Focus Input</button>
        </div>
      )
    }


function App() {
 



  return (
    <div style={{padding:'2rem'}} >
      <h1>Use ref examples</h1>

      <FocusInput />
    </div>
  )
}

export default App