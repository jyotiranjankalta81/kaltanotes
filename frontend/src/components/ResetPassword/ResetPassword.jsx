import React, { useState } from 'react'
import Button from '@mui/material/Button'
import PlainInput from '../../UtilComponents/inputs/PlainInput'
import './ResetPassword.css'

export default function ResetPassword () {
  return (
    <>
      <div className='background_img'>
        <div className='forgotpassword_container1'>
          <div className='forgotpassword_container2'>
            <div className='otp_container'>
              <div className='forgotheading2'>
                <h3>Enter OTP</h3>
                <p style={{ textAlign: 'center' }}>
                  Please enter OTP which you have recieved on <br />
                  your email address for the verification purpose
                </p>
              </div>
            </div>
            <div className='rememberpassword_container'>
              <div className='forgot_input1'>
                <PlainInput label='Enter OTP:' />
              </div>
              <PlainInput label='New Password:' />
              <PlainInput label='Confirm Password:' />
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#AECB80',
                  width: '64%',
                  color: '#FFFFF',
                  '&:hover': { backgroundColor: '#AECB80' }
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
