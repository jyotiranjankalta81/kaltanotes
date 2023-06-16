import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import PlainInput from '../../../UtilComponents/inputs/PlainInput'
import './FilterForm.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
}

export default function FilterForm ({ openform }) {
  const handleClose = () => openform(false)

  return (
    <div style={{ outline: 'none' }}>
      <Modal
        open={openform}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='filter_container'>
          <h3 style={{ textAlign: 'center' }}>Filter User</h3>
          <PlainInput label='Name:' />
          <PlainInput label='Email:' />
          <PlainInput label='Applied Date:' />
          <Button
            type='buttton'
            variant='contained'
            className='profile_btn'
            sx={{
              width: 'auto',
              display: 'flex',
              margin: '2rem auto 0rem auto',
              textTransform: 'none',
              color: '#000000',
              backgroundColor: '#AECB80',
              '&:hover': {
                backgroundColor: '#AECB80'
              }
            }}
          >
            Check
          </Button>
        </div>
      </Modal>
    </div>
  )
}
