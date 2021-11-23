import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemeContextProvider from './context/ThemeContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
