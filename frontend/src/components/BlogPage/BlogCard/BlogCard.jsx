import React from 'react'
import './BlogCard.css'
import thumbnail from '../../../Assets/blogs/thumbnail.png'
import { Link, useNavigate } from 'react-router-dom'
import { imageBacked } from '../../../API/axiosInstance'

export default function BlogCard (props) {
  const navigate = useNavigate()

  const handlepress_readmore = () => {
    navigate('/BlogsNewSec?BLOG_ID=' + props.BLOG_ID)
  }
  return (
    <div className='blog-card'>
      <img
        src={imageBacked + props.IMAGE}
        alt=''
        className='blog-thumbnail'
        crossOrigin='true'
      />
      {/* <p>{imageBacked + props.IMAGE}</p> */}
      <div className='blog-card-body'>
        <strong className='date'>{props.created_at}</strong>
        <h3 className='blog-title'>{props.TITLE}</h3>
        <div
          className='blog-body'
          dangerouslySetInnerHTML={{ __html: props?.CONTENT }}
        />
        <button className='btn-blog' onClick={handlepress_readmore}>
          Continue reading
        </button>
      </div>
    </div>
  )
}

// create useEffect
