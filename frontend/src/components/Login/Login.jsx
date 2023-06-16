import React, { useState } from 'react'
import PlainInput from '../../UtilComponents/inputs/PlainInput'
import './Login.css'
import loginImg from '../../Assets/forms/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../Redux/features/authenticationSlice'
import { useForm } from 'react-hook-form'

export default function Login() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ EMAIL: '', PASSWORD: '' })
  const navigate = useNavigate()

  // const onFormSubmit = event => {
  //   event.preventDefault()
  //   dispatch(userLogin({ formData, navigate }))
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    dispatch(userLogin({ data, navigate }));
  };

  // const handleFieldChange = event =>
  //   setFormData({ ...formData, [event.target.name]: event.target.value })

  return (
    <div className='two-column-page'>
      <form className='main-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='form-title'>Login</h1>
        <p className='login-desc'>
          Login with your data that you have inserted during registration!
        </p>

        <PlainInput
          label='Username or Email'
          name="EMAIL"
          errors={errors}
          required={true}
          validation={{
            ...register("EMAIL", {
              required: "Email is required", pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }),
          }}
        />

        <PlainInput
          label='Password'
          type='password'
          name='PASSWORD'
          required={true}
          errors={errors}
          validation={{
            ...register("PASSWORD", { required: "Password is required" }),
          }}
        />

        <div className='remember-and-forget'>
          <label htmlFor='remember' className='remember'>
            <input type='checkbox' name='remember' id='remember' />
            <span>Remember me</span>
          </label>
          <Link to='/forgot-password'>Forgot Password?</Link>
        </div>
        <button className='btn btn--primary'>Submit</button>
        <p className='create-text'>
          Don’t have an account ? <Link to='/user-register'>Register</Link>
        </p>
      </form>
      <div className='form-content-area'>
        <div className='content-wrapper'>
          <p className='content-side-title'>Welcome Back!</p>
          <img src={loginImg} alt='' className='content-img' />
        </div>
      </div>
    </div>
  )
}
