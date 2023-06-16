import React from 'react'
import PlainTextArea from '../../UtilComponents/inputs/PlainTextArea'

const PostComment = () => {
  return (
    <>
      <div>
        <PlainTextArea label='Add Comment:' />
        <br />
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
          }}
        >
          <button className='btn btn--primary'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default PostComment
