import React, { createContext, useContext, useState } from 'react'


//react context api

//create the context

const ThemeContext = createContext();



//provide the context

//child component using the context


function App() {

  const [theme, setTheme] = useState('light');


  function toggleTheme(){
    setTheme(prev => (prev === 'light' ? 'dark' :'light'))
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}} >
    <div style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding:'20px',
      textAlign:'center'
    }} >
      <h1>React Context API Example</h1>
      <ThemeSwitcher />

    </div>
    </ThemeContext.Provider>
  )
}

function ThemeSwitcher(){

  const data = useContext(ThemeContext);


  return (
    <>
      <p>Current Theme: <strong> {data.theme} </strong> </p>
      <button onClick={data.toggleTheme} >Toggle Theme</button>
    </>
  )
}

export default App