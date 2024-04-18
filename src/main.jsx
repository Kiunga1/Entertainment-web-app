import React from 'react'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
         <App />
      </ThemeContextProvider>
    </BrowserRouter>   
  </React.StrictMode>,
)