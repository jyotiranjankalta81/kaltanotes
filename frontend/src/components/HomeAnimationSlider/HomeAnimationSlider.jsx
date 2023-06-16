import React, { useEffect } from 'react'
import './HomeAnimationSlider.css'
import database from '../../Assets/icons/Database.png'
import order from '../../Assets/icons/Order.png'
import payment from '../../Assets/icons/Payment.png'
import priceTarget from '../../Assets/icons/Price Target.png'
import securityAccess from '../../Assets/icons/Security Access.png'
import ssl from '../../Assets/icons/ssl.png'
import support from '../../Assets/icons/Support.png'
import time from '../../Assets/icons/Time.png'
import PointingArrow from '../../Assets/icons/pointing arrow.png'
import { useRef } from 'react'
import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

let sliderData = [
  {
    title: 'Same Day Order Processing',
    description:
      'The order is processed on the same business day on which we receive the consent form. For the consent forms received after the business hours on Friday, we process the orders on Monday.'
  },
  {
    title: 'Payment in Multiple Currencies',
    description:
      'Our website accepts payment in USD and INR using secured payment gateways. Alternate payment options also available upon request.'
  },
  {
    title: 'Quick Response Time',
    description: 'We reply to the emails or messages within 24 hours.'
  },
  {
    title: 'Multi-Channel Support',
    description:
      'We offer support via multiple channels: WhatsApp Messenger, Facebook Messenger and Email.'
  },
  {
    title: 'Competitive Prices?',
    description:
      'We offer the most competitive prices than others on all of our services. We are not here to make profits but to help the applicants in ordering their Kalta/CBSA Notes, and that’s why our prices are low.'
  },
  {
    title: 'Secured Account for Easy Access?',
    description:
      'Only on KaltaBuddy you create an account which helps in securely storing your information. This account can be used to track the orders and place multiple orders.'
  },
  {
    title: 'Data Security & Privacy',
    description:
      'Data security and privacy is our #1 concern and we do everything to protect it. We use secured servers and emails. Your personal information has restricted access across our organization.'
  },
  {
    title: 'SSL Encryption',
    description:
      'We use SSL Encryption to securely transmit the data. This ensures that any data transmitted between your web browser and our server remains private and integral.'
  }
]

export default function HomeAnimationSlider () {
  const [iconDistance, setIconDistance] = useState(0)
  const [sliderIndex, setSliderIndex] = useState(0)
  const [revRot, setRevRot] = useState([0, 1, 2, 3, 4, 5, 6, 7])
  const circleRef = useRef()
  const sliderContentRef = useRef()
  let icons = [
    order,
    payment,
    time,
    support,
    priceTarget,
    securityAccess,
    database,
    ssl
  ]

  useEffect(() => {
    setIconDistance(circleRef.current.offsetWidth / 2)
  }, [])

  useEffect(() => {
    console.log(sliderIndex)
    circleRef.current.style.transform = `rotate(-${sliderIndex * 45}deg)`
    sliderContentRef.current.style.opacity = '0'
    setTimeout(() => {
      sliderContentRef.current.style.opacity = '1'
    }, 300)
  }, [sliderIndex])

  const handleRevRotChange = (activeIndex, index) => {
    console.log(activeIndex, index)
    let sum = 0
    const rawArr = [0, 1, 2, 3, 4, 5, 6, 7]
    let splitIndex = rawArr.indexOf(index)
    let firstSplit = rawArr.slice(0, splitIndex)
    let secondSplit = rawArr.slice(splitIndex)
    for (let i = 0; i < secondSplit.length; i++) {
      secondSplit[i] = sum
      sum++
    }
    for (let i = 0; i < firstSplit.length; i++) {
      firstSplit[i] = sum
      sum++
    }
    setRevRot([...firstSplit, ...secondSplit])
  }

  const handleSliderIndex = dir => {
    if (dir === 1) {
      setSliderIndex(prevIndex => {
        return prevIndex === 7 ? 0 : prevIndex + 1
      })
    } else {
      setSliderIndex(prevIndex => {
        return prevIndex === 0 ? 7 : prevIndex - 1
      })
    }
  }
  return (
    <div className='home-animation-slider-wrapper'>
      <span className='curve-top'></span>
      <div className='mobile-title-wrapper'>
        <h1>Why Use KaltaBuddy</h1>
        <p>Here’s Why KaltaBuddy Beats All The Other Websites</p>
      </div>
      <div className='home-animation-slider'>
        <div className='navigation-icons-wrapper'>
          <AiOutlineLeft
            className='nav-icon nav-icon-left'
            onClick={() => handleSliderIndex(-1)}
          />
          <AiOutlineRight
            className='nav-icon nav-icon-right'
            onClick={() => handleSliderIndex(1)}
          />
        </div>
        <div className='slide-content' ref={sliderContentRef}>
          <h2 className='content-title'>{sliderData[sliderIndex].title}</h2>
          <p className='content-para'>{sliderData[sliderIndex].description}</p>
        </div>
        <img src={PointingArrow} alt='' className='slider-pointing-arrow' />
        <div
          className='slider-circle'
          ref={circleRef}
          style={{ '--tr': `${iconDistance}px` }}
        >
          {icons.map((icon, index) => (
            <div
              className={
                'slider-icon-wrapper' +
                (sliderIndex === index ? ' slider-icon-wrapper--active' : '')
              }
              key={index}
              style={{
                '--rot': `calc(${index} * var(--i))`,
                '--rev-rot': `calc(${revRot[index]} * var(--i))`
              }}
              onClick={() => {
                setSliderIndex(prevIndex => {
                  handleRevRotChange(prevIndex, index)
                  return index
                })
              }}
            >
              <img src={icon} alt='' className='slider-icon' />
            </div>
          ))}
          <div
            className='circle-title-wrapper'
            style={{
              transform: `rotate(${sliderIndex * 45}deg)`,
              transition: 'all 0.3s ease'
            }}
          >
            <h1>Why Use KaltaBuddy</h1>
            <p>Here’s Why KaltaBuddy Beats All The Other Websites</p>
          </div>
        </div>
      </div>
      <span className='curve-bottom'></span>
    </div>
  )
}
