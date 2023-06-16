import React from 'react'
import PlainTextArea from '../../UtilComponents/inputs/PlainTextArea'
import partnerImg from '../../Assets/forms/partner.png'
import PlainInput from '../../UtilComponents/inputs/PlainInput'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { postPartnerDetails } from '../../Redux/features/commonSlice'

const initialState = {
  FULLNAME: '',
  EMAIL: '',
  WHATSAPP: '',
  MESSAGE: ''
}

export default function OurPartner () {
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
    dispatch(postPartnerDetails({ data, toast }))
  }

  return (
    <div className='two-column-page'>
      <form className='main-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form-title'>Partner With Us</h1>
        <PlainInput
          label='Full Name'
          type='text'
          name='FULLNAME'
          errors={errors}
          validation={{
            ...register('FULLNAME', { required: 'Fullname is required' })
          }}
        />
        <PlainInput
          label='Email Address'
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
          label='Whatsapp Number'
          type='number'
          name='WHATSAPP'
          errors={errors}
          validation={{
            ...register('WHATSAPP', { required: 'Tracking Id is required' })
          }}
        />
        <PlainTextArea
          label='Message'
          name='MESSAGE'
          errors={errors}
          validation={{
            ...register('MESSAGE', { required: 'Message Field is required' })
          }}
        />
        <button className='btn btn--primary'>Submit</button>
      </form>
      <div className='form-content-area'>
        <div className='content-wrapper'>
          <img src={partnerImg} alt='' className='content-img' />
        </div>
      </div>
    </div>
  )
}
