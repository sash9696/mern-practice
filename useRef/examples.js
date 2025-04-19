import React, { useEffect, useRef, useState } from 'react'

//stopwatch



function Stopwatch(){

  const timerRef = useRef(null);
  const countRef = useRef(0);

  // const [count, setCount] = useState(0);
  
  const [dummy, setDummy] = useState(false);
  function startTimer(){

    if(!timerRef.current){

      timerRef.current = setInterval(() => {
        countRef.current +=1;
        setDummy(d => !d);
        console.log({timerRef, countRef})
      }, 1000)
    }

  }


  function stopTimer(){
    
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){

    stopTimer();
    countRef.current = 0;
    setDummy(d => !d);
    
  }

  return (
    <div>
      <h2>Stopwatch:</h2>
      <p>Seconds: {countRef.current } </p>
      <button onClick={startTimer} >Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>


    </div>
  )
}

function PreviousValue(){

  const [input, setInput] = useState('');
  const previnputRef = useRef('');

  useEffect(() => {
    previnputRef.current = input;
  }, [input])

  return(
    <div>
      <h2>Previous Value</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Current: {input}</p>
      <p>Previous: {previnputRef.current}</p>

    </div>
  )
}


function App() {

  

  return (
    <div>
      
      {/* <Stopwatch/> */}

      <PreviousValue />
    </div>
  )
}

export default App