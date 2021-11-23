import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const ThemeToggle = () => {
    const  {toggleTheme} = useContext(ThemeContext);
    return (
      <div className='toggle-btn' onClick={toggleTheme}>
        <button>🌞🌙</button>
      </div>
    )
}

export default ThemeToggle
