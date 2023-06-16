import React from 'react'
// import ReactDOM from "react-dom";
import { useParams } from 'react-router-dom'
import { getBlog, getComments } from '../../Redux/features/commonSlice'
import { useDispatch, useSelector } from 'react-redux'

import { Divider, Avatar, Grid, Paper } from '@material-ui/core'
import PostComment from './PostComment'

const imgLink =
  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

function Comment () {
  const { BLOGID } = useParams()
  const { comments, loading } = useSelector(state => ({ ...state.commons }))
  const [newBlogData, setnewBlogData] = React.useState([])
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (comments && comments.length !== 0) {
      const filtercomments = comments.filter(
        data => data.BLOG_ID == parseInt(BLOGID)
      )
      setnewBlogData(filtercomments)
    }
  }, [])
  React.useEffect(() => {
    dispatch(getBlog())
    dispatch(getComments())
  }, [])
  console.log(newBlogData)
  console.log(comments)
  return (
    <div
      style={{
        padding: 14,
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {newBlogData &&
        newBlogData.length !== 0 &&
        newBlogData.map((data, index) => (
          <>
            <Paper style={{ padding: '40px 20px', width: '60%' }}>
              <Grid container wrap='nowrap' spacing={2}>
                <Grid item>
                  <Avatar alt='Remy Sharp' src={imgLink} />
                </Grid>
                <Grid justifyContent='left' item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: 'left' }}>
                    Michel Michel
                  </h4>
                  <p style={{ textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                    vehicula laoreet.Suspendisse congue vulputate lobortis.
                    Pellentesque at interdum tortor. Quisque arcu quam,
                    malesuada vel mauris et, posue sagittis ipsum. Aliquam
                    ultricies a ligula nec faucibus. In elit metus, efficitur
                    lobortis nisi quis, molestie porttitor metus.Pellentesque et
                    neque risus. Aliquam vulputate, mauris vitae tincidunt
                    interdum, mauris mi vehicula urna, nec feugiat quam lectus
                    vitae ex.
                  </p>
                  <p style={{ textAlign: 'left', color: 'gray' }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
              <Divider variant='fullWidth' style={{ margin: '30px 0' }} />
              <Grid container wrap='nowrap' spacing={2}>
                <Grid item>
                  <Avatar alt='Remy Sharp' src={imgLink} />
                </Grid>
                <Grid justifyContent='left' item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: 'left' }}>
                    Michel Michel
                  </h4>
                  <p style={{ textAlign: 'left' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                    vehicula laoreet. Suspendisse congue vulputate lobortis.
                    Pellentesque at interdum tortor. Quisque arcu quam,
                    malesuada vel mauris et, posuere sagittis ipsum. Aliquam
                    ultricies a ligula nec faucibus. In elit metus, efficitur
                    lobortis nisi quis, molestie porttitor metus. Pellentesque
                    et neque risus. Aliquam vulputate, mauris vitae tincidunt
                    interdum, mauris mi vehicula urna, nec feugiat quam lectus
                    vitae ex.{' '}
                  </p>
                  <p style={{ textAlign: 'left', color: 'gray' }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
              <PostComment />
            </Paper>
          </>
        ))}
    </div>
  )
}

export default Comment
