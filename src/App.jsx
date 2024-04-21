// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import Header from './components/Header'
import SearchBar from './components/SearchBar'


const App = () => {
  return (
    <div className='font-outfit  min-h-screen bg-primaryDark lg:flex'>
      <Router>
        <Header/>
        <div>
          <SearchBar/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/movies' />
          </Routes>
        </div>
        
      </Router>
      
    </div>
  )
}

export default App
