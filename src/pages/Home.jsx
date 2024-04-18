import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className='lg:flex'>
      <Header/>
      <div>
        <SearchBar/>
      </div>
      
    </div>
  )
}

export default Home
