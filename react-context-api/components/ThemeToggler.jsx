import React from 'react'
import useTheme from '../contexts/theme/useTheme'

function ThemeToggler() {
    const {theme, toggleTheme} = useTheme();


  return (
    <div>
        <p>Current Theme: <strong>{theme}</strong></p>
        <button onClick={toggleTheme} >Toggle Theme</button>
    </div>
  )
}

export default ThemeToggler