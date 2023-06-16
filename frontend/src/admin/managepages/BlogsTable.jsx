import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosInstance, { imageBacked } from '../../API/axiosInstance'
import { toast } from 'react-toastify'

export default function BlogTable () {
  const { blogs } = useSelector(state => state.admin)

  const [rows, setrow] = React.useState([])

  React.useEffect(() => {
    if (blogs?.length !== 0) {
      const datas = []
      blogs.forEach((data, index) => {
        datas.push({
          id: index + 1,
          HEADING: data.HEADING,
          CONTENT: data.CONTENT,
          IMAGE: imageBacked + data.IMAGE
        })
      })
      setrow(datas)
    }
  }, [blogs])

  const columns = [
    {
      field: 'id',
      headerName: 'SI No'
    },
    {
      field: 'HEADING',
      headerName: 'Title',
      width: 250,
      editable: true
    },
    {
      field: 'CONTENT',
      headerName: 'Content',
      width: 250,
      editable: true
    },
    {
      field: 'IMAGE',
      headerName: 'Image',
      width: 200,
      renderCell: params => imagecell(params),
      editable: true
    },
    {
      headerName: 'Actions',
      renderCell: params => actionElement(params)
    }
  ]

  const imagecell = params => (
    <div className='action-wrapper'>
      {/* // <div> */}
      <img src={params.row.IMAGE} alt='' srcset='' crossOrigin='true' />
      {/* // </div> */}
    </div>
  )

  const handleDelete = params => {
    if (window.confirm('Do You really want to delete blog') === true) {
      axiosInstance
        .delete('main/mycreate-blog?BLOG_ID=' + params.row.id)
        .then(res => {
          if (res.data.success) {
            toast.success(res.data.message)
            // window.location.reload();
          }
        })
    }
  }

  const handleedit = params => {}

  const actionElement = params => (
    <div className='action-wrapper'>
      {/* <RemoveRedEyeIcon
        onClick={() => handleedit(params)}
        className="action-icon"
      /> */}
      <DeleteIcon
        onClick={() => handleDelete(params)}
        className='action-icon'
      />
    </div>
  )

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}
