import React from 'react'
import { useRef } from 'react'
import './FaqAccordian.css'

export default function FaqAccordian ({ datas }) {
  const accordianRef = useRef()

  const handleExpansion = event => {
    event.preventDefault()
    accordianRef.current.classList.toggle('faq-accordian--active')
  }
  return (
    <div className='faq-accordian' ref={accordianRef}>
      <div className='initial-component' onClick={handleExpansion}>
        <h2 className='faq-title'>{datas?.title}</h2>
        <div className='expander-icon'>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
      <div className='expandable-component'>
        <p
          className='faq-content'
          style={{ color: 'white', fontSize: '1.2rem' }}
        >
          {datas?.des}
        </p>
      </div>
    </div>
  )
}
