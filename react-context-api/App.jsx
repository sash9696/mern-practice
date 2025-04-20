import React from 'react'
import useTheme from './contexts/theme/useTheme';
import ThemeToggler from './components/ThemeToggler';

function App() {
  const {theme} = useTheme();

  const isLight = theme === 'light';

  const containerStyles = {
    backgroundColor: isLight ? '#fff' : '#333',
    color: isLight ? '#000' : '#fff',
    padding:'20px',
    textAlign:'center'
  }

  return (
    <div style={containerStyles}>
        <h1>Theme Toggler</h1>

        <ThemeToggler/>
    </div>

  )
}

export default App