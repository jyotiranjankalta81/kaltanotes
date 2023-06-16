import React from 'react'
import PlainInput from '../UtilComponents/inputs/PlainInput'
import './TrackForm.css'
import SearchIcon from '@mui/icons-material/Search'
import { serverInstance } from '../API/ServerInstance'
import { toast } from 'react-toastify'
import axiosInstance from '../API/axiosInstance'
import { ApplicationType } from '../UtilComponents/ApplicationType/ApplicationType'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { Button, Modal } from '@mui/material'
import moment from 'moment'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const TrackForm = () => {
  const [isOrderId, setisOrderId] = React.useState(null)
  const [ismyform, setismyform] = React.useState([])
  React.useEffect(() => {
    axiosInstance.get('main/get-my-order').then(res => {
      if (res.data.success) {
        setismyform(res.data.data)
      }
    })
  }, [])

  const TrackFrom = () => {
    if (!isOrderId) {
      toast.error('please Enter Tracking id')
      return false
    }
    axiosInstance
      .post('main/check-status', { ORDER_ID: isOrderId })
      .then(res => {
        if (!res.data.data || Object.keys(res.data.data).length === 0) {
          toast.error('no order found with this tracking id')
          return false
        } else {
          const responst = res.data.data
          setismyform(responst)
        }
      })
  }

  return (
    <>
      <Header />
      <div className='track_details'>
        <div className='tracksection'>
          {/* <h2>Track Your Application</h2> */}
          <h1 className='title--primary'>Track Application</h1>
          {/* <PlainInput
            label='Track Form:'
            onChange={e => setisOrderId(e.target.value)}
          />
          <button className='btn btn--primary' onClick={TrackFrom}>
            Submit
          </button>

          <div className='status'>
            <h1 className='status_head'>Status</h1>
            <div className='process'>
              <div className='pro1'> Processing Order</div>
              <div className='pro1'>
                {ismyform[0]?.STATUS
                  ? StatusType(ismyform[0]?.STATUS)
                  : `process`}
              </div>
              <div className='pro1'>Completed</div>
            </div>
            <div className='status_cir'>
              <span
                className={`dot1 ${ismyform.length !== 0 && 'dot2'}`}
              ></span>
              <div
                className={`cir1 ${
                  ismyform.length !== 0 && ismyform[0]?.STATUS !== 0 && 'cir2'
                }`}
              ></div>
              <span
                className={`dot1 ${
                  ismyform.length !== 0 && ismyform[0]?.STATUS !== 0 && 'dot2'
                }`}
              ></span>
              <div
                className={`cir1 ${
                  ismyform.length !== 0 &&
                  ismyform[0]?.STATUS === 5000 &&
                  'cir2'
                }`}
              ></div>
              <span
                className={`dot1 ${
                  ismyform.length !== 0 &&
                  ismyform[0]?.STATUS === 5000 &&
                  'dot2'
                }`}
              ></span>
            </div>
          </div> */}
          <TrackFormTable ismyform={ismyform} />
        </div>
        {/* 
        <div className="track_table">
          <TrackFormTable />
        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default TrackForm

function TrackFormTable ({ ismyform }) {
  const [open, setOpen] = React.useState(false)
  const [isparams, setparams] = React.useState(null)

  const handlemodel = () => {
    setOpen(!open)
    setparams(null)
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
      renderCell: params => {
        return <p>{params.id}</p>
      }
    },
    {
      field: 'ORDER_ID',
      headerName: 'ORDER ID',
      width: 200,
      editable: true
    },
    {
      field: 'ORDER_TYPE',
      headerName: 'ORDER TYPE',
      width: 200,
      editable: true,
      renderCell: params => {
        console.log(params)
        return <p>{ApplicationType(params.row?.ORDER_TYPE)}</p>
      }
    },
    {
      field: 'EMAIL',
      headerName: 'EMAIL',
      width: 200,
      editable: true
    },
    {
      field: 'PATNER_TYPE',
      headerName: 'PATNER TYPE',
      width: 200,
      editable: true,
      renderCell: params => {
        console.log(params)
        return <p>{params.row?.PATNER_TYPE === 1 ? 'yes' : 'no'}</p>
      }
    },
    {
      field: 'STATUS',
      headerName: 'STATUS',
      width: 200,
      editable: true,
      renderCell: params => {
        return (
          <Button
            sx={{
              backgroundColor: '#9dc164',
              '&:hover': {
                backgroundColor: '#9dc164'
              }
            }}
            onClick={() => {
              handlemodel()
              setparams(params?.row)
            }}
            variant='contained'
          >
            Track Status
          </Button>
        )
      }
    }
  ]

  return (
    <>
      <div style={{ height: '600px', width: '100%', marginBottom: '1.5rem' }}>
        <DataGrid
          rows={ismyform}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection
          // disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
      {open && (
        <ProdcessModel open={open} data={isparams} handlemodel={handlemodel} />
      )}
    </>
  )
}

export const ProdcessModel = ({ handlemodel, open, data }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
  }

  const [rows, setrows] = React.useState([])

  const columns = [
    {
      field: 'id',
      headerName: 'S. no.'
    },
    {
      field: 'ProcessName',
      headerName: 'Process Name',
      width: 450
    },
    {
      field: 'processDate',
      headerName: 'Process Date',
      width: 200
    }
  ]

  React.useEffect(() => {
    if (open === true) {
      let arry = []
      axiosInstance
        .post('main/get-process-order', { ORDER_ID: data.ORDER_ID })
        .then(res => {
          console.log(res.data)
          if (res.data.success) {
            const body = res.data.data
            body.forEach((data, index) => {
              arry.push({
                id: index + 1,
                ProcessName: data.PERPOUS,
                processDate: moment(data.createdAt).format('YYYY-MM-DD')
              })
            })
            setrows(arry)
          }
        })
    }
  }, [open])

  return (
    <>
      <Modal
        open={open}
        onClose={handlemodel}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box
          sx={{
            height: 400,
            width: '60%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Modal>
    </>
  )
}
