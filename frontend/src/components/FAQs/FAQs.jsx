import React from 'react'
import './FAQs.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FaqAccordian from './FaqAccordian/FaqAccordian'

const data = [
  {
    title: 'Who is your target audience?',
    des: "Knowing your target audience allows you to tailor your website's messaging and design to effectively engage and serve your visitors."
  },
  {
    title: 'What key features and functionalities do you need on your website?',
    des: 'Consider the specific features and functionalities required, such as e-commerce capabilities, contact forms, blog integration, or membership portals.'
  },
  {
    title: 'Do you have branding guidelines or a preferred design aesthetic?',
    des: 'If you have established branding guidelines or a preferred design aesthetic, share this information with the website developer to ensure consistency.'
  },
  {
    title: 'What content will be included on your website?',
    des: 'Determine the type of content you want to present on your website, such as text, images, videos, testimonials, or case studies.'
  },
  {
    title: 'Do you require search engine optimization (SEO) services?',
    des: 'Discuss whether you need assistance with optimizing your website for search engines to improve its visibility and organic traffic.'
  },
  {
    title: 'Will you need ongoing maintenance and support for your website?',
    des: "Consider whether you require ongoing maintenance, updates, and technical support for your website after it's built."
  },
  {
    title: 'What is your desired timeline for website development?',
    des: 'Communicate your desired timeline to the website developer so they can plan and allocate resources accordingly.'
  }
]

function FAQs () {
  return (
    <>
      <Header />
      <h1 className='title--primary'>FAQ's</h1>
      <div className='accordian-wrapper'>
        {data.map(item => {
          return (
            <>
              <FaqAccordian datas={item} />
            </>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default FAQs
