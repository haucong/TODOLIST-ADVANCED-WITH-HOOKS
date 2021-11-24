import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { AUTH_TOGGLE } from '../Reducer/type';
const Navbar = () => {
  const {theme} = useContext(ThemeContext)
  const {isLightTheme,light,dark} = theme
  const style = isLightTheme ? light : dark

  const { isAuthenticated, dispatch } = useContext(AuthContext)
  return (
    <div className='navbar' style={style}>
      <h2>DANH SÁCH CÁC CÔNG VIỆC</h2>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>
          <button onClick={() => {
            dispatch({
              type: AUTH_TOGGLE
            })
          }}>
            {isAuthenticated ? 'LOGOUT' : 'LOGIN🔑'}
          </button>
        </li>
      </ul>
      {isAuthenticated ? 'You are longged in ✔ ' : ''}
    </div>
  )
}

export default Navbar
