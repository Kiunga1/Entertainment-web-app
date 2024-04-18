// import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"


const App = () => {
  return (
    <div className='font-outfit  min-h-screen bg-primaryDark '>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/movies' />
     </Routes>
    </div>
  )
}

export default App
