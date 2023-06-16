import React from 'react'
import './Footer.css'
import flogo from '../../components/Images/Footer/flogo.png'
import fb from '../../components/Images/Footer/fb.png'
import tw from '../../components/Images/Footer/tw.png'
import insta from '../../components/Images/Footer/insta.png'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='gcms_footer'>
      <div className='gcms_f1'>
        <img src={flogo} alt='' />
      </div>
      <div className='gcms_f2'>
        <h2>Contact Info</h2>
        <div className='f-line'></div>
        <div className='email'>
          Email:{' '}
          <a href='mailto:support@gcmsbudddy.com'>support@Kaltabudddy.com</a>
        </div>
        <div className='email'>
          Whatsapp:<a href='https://wa.me/+1 716-253-1415'>+1 716-253-1415</a>
        </div>
        <div className='add'>Mon-Fri: 9am to 5pm EST</div>
        <div className='social'>
          <img src={fb} alt='' />
          <img src={tw} alt='' />
          <img src={insta} alt='' />
        </div>
      </div>
      <div className='gcms_f2'>
        <h2>Our services</h2>
        <div className='f-line'></div>
        <div className='f_service'>
          <a href=''>Kalta Notes</a>
        </div>
        <div className='f_service'>
          <a href=''>CBSA Notes</a>
        </div>
        <div className='f_service'>
          <a href=''>Kalta Review</a>
        </div>
        <div className='f_service'>
          <a href=''>Settlement Services</a>
        </div>
      </div>
      <div className='gcms_f2'>
        <h2>Important Links</h2>
        <div className='f-line'></div>
        <div className='f_service'>
          <a href=''>Terms & Conditions</a>
        </div>
        <div className='f_service'>
          <a href=''>Privacy Policy</a>
        </div>
        <div className='f_service'>
          <a href=''>Refund Policy</a>
        </div>
        <div className='f_service'>
          <Link to='/partner'>Partner with us</Link>
        </div>
      </div>
      <p className='copy'>Copyright@2022 Kaltabuddy</p>
    </div>
  )
}

export default Footer
