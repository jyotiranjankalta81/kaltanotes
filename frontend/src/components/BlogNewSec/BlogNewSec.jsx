import * as React from 'react'
import './BlogNewSec.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { MessageFilled } from '@ant-design/icons'
import Comment from './Comment'
import { useParams, useSearchParams } from 'react-router-dom'
import { getBlog } from '../../Redux/features/commonSlice'
import { useDispatch, useSelector } from 'react-redux'
import { imageBacked } from '../../API/axiosInstance'
import thumbnail from '../../Assets/blogs/thumbnail.png'

function BlogNewSec () {
  let [searchParams, setSearchParams] = useSearchParams()
  const { blog, loading } = useSelector(state => ({ ...state.commons }))
  const [newBlogData, setnewBlogData] = React.useState([])
  const [check, setCheck] = React.useState(false)
  const [auth, setCheckAuth] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (blog && blog.length !== 0 && searchParams.get('BLOG_ID')) {
      const filterblog = blog.filter(
        data => data.BLOG_ID === parseInt(searchParams.get('BLOG_ID'))
      )
      setnewBlogData(filterblog)
    }
  }, [blog])

  // React.useEffect(() => {

  // }, [])

  const handleOnClick = () => {
    setCheck(!check)
  }
  return (
    <>
      <Header />

      {newBlogData &&
        newBlogData.length !== 0 &&
        newBlogData.map((data, index) => (
          <>
            <section key={index} className='Blog-N-S'>
              <img
                className='blag-New-Sec'
                // src={thumbnail}
                src={imageBacked + data.IMAGE}
                alt='img'
                crossOrigin='true'
              />
              <div>
                <p className='para1'>{data?.HEADING}</p>
                <div
                  className='para2'
                  dangerouslySetInnerHTML={{ __html: data?.CONTENT }}
                />
              </div>
            </section>
          </>
        ))}

      <Footer />
    </>
  )
}

export default BlogNewSec
