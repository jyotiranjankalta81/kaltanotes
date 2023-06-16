import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridFilterListIcon } from '@mui/x-data-grid'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link, useNavigate } from 'react-router-dom'
import FilterForm from './FilterForm'
import { Tooltip } from '@mui/material'

const handleDelete = params => {
  console.log(params, 'this is delete')
}

const columns = [
  {
    field: 'id',
    headerName: 'SI No'
  },
  {
    field: 'name',
    headerName: 'Applied By',
    width: 150,
    editable: true
  },
  {
    field: 'appliedDate',
    headerName: 'Applied Date',
    width: 150,
    editable: true
  },
  {
    field: 'type',
    headerName: 'Type'
  },
  {
    field: 'noDays',
    headerName: 'No of days',
    width: 150,
    editable: true
  },
  {
    field: 'completionDate',
    headerName: 'Completion Date',
    width: 150,
    editable: true
  },
  {
    field: 'completedBy',
    headerName: 'Completed By',
    width: 150,
    editable: true
  },
  {
    field: 'currentStatus',
    headerName: 'Current Status',
    width: 150,
    editable: true
  },
  {
    field: 'paymentStatus',
    headerName: 'Payment Status',
    width: 150,
    editable: true
  },
  {
    headerName: 'Actions',
    renderCell: params => actionElement(params)
  }
]

const rows = [
  {
    id: '1',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '2',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '3',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '4',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '5',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '6',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '7',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '8',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '9',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  },
  {
    id: '10',
    name: 'Muhsin',
    appliedDate: '19/11/2020',
    type: 2,
    noDays: '04 Days',
    completionDate: '19/07/2022',
    completedBy: 'Akash',
    currentStatus: 'Completed',
    paymentStatus: 'Completed'
  }
]

const handleView = params => {
  console.log(params, 'this is edit')
}

const actionElement = () => (
  <div className='action-wrapper'>
    <Link to='/admin-panel/view3' style={{ listStyle: 'none', color: 'black' }}>
      <RemoveRedEyeIcon
        // onClick={handleView}
        className='action-icon'
      />
    </Link>
    <DeleteIcon onClick={handleDelete} className='action-icon' />
  </div>
)

export default function ManageUser () {
  const [open, setOpen] = React.useState(false)
  const handleOnClick = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <div className='filter_sign'>
        <button
          className='filter'
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer'
          }}
        >
          <Tooltip title='Filter'>
            <GridFilterListIcon onClick={handleOnClick} />
          </Tooltip>
        </button>
      </div>
      {open && <FilterForm openform={setOpen} />}
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
