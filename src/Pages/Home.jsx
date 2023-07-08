import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='my-10 mb-20 mx-96'>
      <Header/>
      <div>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
