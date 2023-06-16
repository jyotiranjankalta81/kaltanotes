import * as React from 'react'
import PlainInput from '../../UtilComponents/inputs/PlainInput'
import PlainTextArea from '../../UtilComponents/inputs/PlainTextArea'
import './ContactUs.css'
import logo from '../Images/Footer/flogo.png'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { postContactDetail } from '../../Redux/features/commonSlice'

const initialState = {
  FULLNAME: '',
  EMAIL: '',
  SUBJECT: '',
  TRACKINGID: '',
  MESSAGE: ''
}
export default function ContactUs () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()
  const [formValue, setFormValue] = React.useState(initialState)
  const dispatch = useDispatch()

  const onSubmit = (data, e) => {
    e.preventDefault()
    dispatch(postContactDetail({ data, toast }))
  }



  return (
    <div className='contact-us-page'>
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='contact-title'>Contact Us</h1>
        <PlainInput
          label='Full Name:'
          type='text'
          name='FULLNAME'
          errors={errors}
          validation={{
            ...register('FULLNAME', { required: 'Fullname is required' })
          }}
        />
        <PlainInput
          label='Email Address:'
          type='email'
          name='EMAIL'
          errors={errors}
          validation={{
            ...register('EMAIL', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })
          }}
        />
        <PlainInput
          label='Subject:'
          type='text'
          name='SUBJECT'
          errors={errors}
          validation={{
            ...register('SUBJECT', { required: 'Subject Field is required' })
          }}
        />
        <PlainInput
          label='Tracking Number'
          type='text'
          name='TRACKINGID'
          errors={errors}
          validation={{
            ...register('TRACKINGID', { required: 'Tracking Id is required' })
          }}
        />
        <PlainTextArea
          label='Messages'
          type='text'
          name='MESSAGE'
          errors={errors}
          validation={{
            ...register('MESSAGE', { required: 'Message Field is required' })
          }}
        />
        <div className='btn-wrapper'>
          <button className='btn btn--primary'>Submit</button>
        </div>
      </form>
      <div className='contact-bg-section'>
        <img src={logo} className='contact-image' alt='' />
      </div>
    </div>
  )
}
