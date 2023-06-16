import React from 'react'
import './PlainInput.css'

export default function PlainTextArea ({
  name,
  label,
  type,
  onChange,
  validation,
  errors
}) {
  return (
    <label htmlFor={name} className='plain-input-wrapper'>
      <span>{label}</span>
      <textarea
        type={type ? type : 'text'}
        name={name}
        onChange={onChange}
        {...validation}
        className='plain-input'
      ></textarea>
      {errors && (
        <span className='input-error'>
          {errors[name] ? errors[name].message : ''}
        </span>
      )}
    </label>
  )
}
