import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='my-10 mb-20 mx-96'>
      <Header/>
      <div>
        <button
        onClick={() => navigation(-1)}
        className='mt-20 text-white tracking-wide bg-blue-500 rounded-md px-3 py-2 uppercase'
        >
            Back
        </button>
        <h2 className='text-3xl mt-5'> 
            Blogs on <span className='text-green-600'>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
