import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='font-extrabold text-xl'>{post.title}</span>
      </NavLink>
      <p>
        By {" "}
        <span className='italic'>{post.author}</span>
        {" "} on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-semibold text-green-600'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-amber-950'> [ Posted on {post.date} ]</p>
      <p className='mt-2 italic text-xl'> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-600'>{`#${tag}`} </span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
