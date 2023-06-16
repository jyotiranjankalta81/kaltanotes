import React from 'react'
import './Services.css'
import pic from './service.png'
import service from '../Images/Service/Group 10.png'
import circle from '../Images/Service/circle.png'
import vector from '../Images/Service/Vector 2.png'
import circle1 from '../Images/Service/semicircle2.png'
import dot from '../Images/Service/dot.png'
import next from '../Images/Service/next.png'
import search from '../Images/Service/search1.png'
import bulb from '../Images/Service/bulb.png'
import HomeAnimationSlider from '../HomeAnimationSlider/HomeAnimationSlider'
import Header from '../Header/Header'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import a1 from './Services_A1.png'
import a2 from './Services_A2.png'
import a3 from './Services_A3.png'
import Footer from '../Footer/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import cir from './cir.png'
import service1 from './servies_1.png'
import ServicesPart from '../ServicesPart/ServicesPart'

function Services () {
  const [pop, setPop] = useState(false)
  const [pop1, setPop1] = useState(false)
  const [pop2, setPop2] = useState(false)
  const [pop3, setPop3] = useState(false)
  const [pop4, setPop4] = useState(false)

  const popHandler = () => {
    setPop(!pop)
    setPop1(false)
    setPop2(false)
    setPop3(false)
    setPop4(false)
  }

  const popHandler1 = () => {
    setPop1(!pop1)
    setPop(false)
    setPop2(false)
    setPop3(false)
    setPop4(false)
  }
  const popHandler2 = () => {
    setPop2(!pop2)
    setPop(false)
    setPop3(false)
    setPop4(false)
    setPop1(false)
  }
  const popHandler3 = () => {
    setPop3(!pop3)
    setPop(false)
    setPop2(false)
    setPop4(false)
    setPop1(false)
  }
  const popHandler4 = () => {
    setPop4(!pop4)
    setPop(false)
    setPop2(false)
    setPop3(false)
    setPop1(false)
  }

  return (
    <>
      <div className='Service_Container'>
        <Header />

        {/* <section className='Services_heading_Section'>
        <img src={cir} alt=""  className='cir'/>
        <img src={service1} alt="" className='rec'/>
        <div  className={pop ? "pop":"none"}>
           <div className="exit" onClick={()=>{setPop(false)}} >X</div>
          <h1 className='pop_head'>Kalta Notes</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
        </div>
        <div  className={pop1?"pop1":"none"}>
        <div className="exit" onClick={()=>{setPop1(false)}} >X</div>
          <h1 className='pop_head'>CBSA Notes </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
        </div>
        <div  className={pop2?"pop2":"none"}>
        <div className="exit" onClick={()=>{setPop2(false)}} >X</div>
          <h1 className='pop_head'>CSIS Notes </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
        </div>
        <div  className={pop3?"pop3":"none"}>
        <div className="exit" onClick={()=>{setPop3(false)}} >X</div>
          <h1 className='pop_head'>Notes Reviews </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
        </div>
        <div  className={pop4?"pop4":"none"}>
        <div className="exit" onClick={()=>{setPop4(false)}} >X</div>
          <h1 className='pop_head'>Pan Application Status  </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
        </div>

        <div className='Services_heading'>
          <h1 >Kalta Notes <img src={require('./Services_2.png')} alt="img" className={pop?"border":"n"}   onClick={popHandler}  /></h1>
        </div>
        <div className='Services_heading1'>
          <h1 >CBSA Notes  <img src={require('./Services_2.png')} alt="img" className={pop1?"border":"n"} onClick={popHandler1}/></h1>

        </div>
        <div className='Services_heading2'>
          <h1  >CSIS Notes <img src={require('./Services_2.png')} alt="img" className={pop2?"border":"n"} onClick={popHandler2}/> </h1>
        </div>
        <div className='Services_heading3'>
          <h1  >Notes Reviews  <img src={require('./Services_2.png')} alt="img" className={pop3?"border":"n"} onClick={popHandler3}/></h1>
        </div>
        <div className='Services_heading4'>
          <h1  >Pan Application Status     <img src={require('./Services_2.png')} className={pop4?"border":"n"} alt="img" onClick={popHandler4}/></h1>
        </div>
        <div >
          <img className='Servics_image_div1' src={require('./Vector 10.png')} alt="img" />
        </div>
        <div>
          <img className='Servics_image_div2' src={require('./Vector 11.png')} alt="img" />
        </div>
        <div>
          <img className='Servics_image_div3' src={require('./Vector 29.png')} alt="img" />
        </div>
        <div>
        <img className='Servics_image_div4' src={require('./Vector 28.png')} alt="img" />
        </div>

      </section> */}

        <ServicesPart />

        {/* <div className="our_tab">

          <div className={pop ? "pop" : "none"}>
            <div className="exit" onClick={() => { setPop(false) }} >X</div>
            <h1 className='pop_head'>Kalta Notes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
          </div>
          <div className={pop1 ? "pop1" : "none"}>
            <div className="exit" onClick={() => { setPop1(false) }} >X</div>
            <h1 className='pop_head'>CBSA Notes </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
          </div>
          <div className={pop2 ? "pop2" : "none"}>
            <div className="exit" onClick={() => { setPop2(false) }} >X</div>
            <h1 className='pop_head'>CSIS Notes </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
          </div>
          <div className={pop3 ? "pop3" : "none"}>
            <div className="exit" onClick={() => { setPop3(false) }} >X</div>
            <h1 className='pop_head'>Notes Reviews </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
          </div>
          <div className={pop4 ? "pop4" : "none"}>
            <div className="exit" onClick={() => { setPop4(false) }} >X</div>
            <h1 className='pop_head'>Pan Application Status  </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti unde consequuntur ex aliquam beatae tempora voluptatem iusto assumenda fugiat, quibusdam hic deserunt eos? Iste magnam accusamus dolorum eos perferendis nam.</p>
          </div>

          <div className="our_tab_card">
            <img src={require('./Services_2.png')} alt="img" onClick={() => { setPop(!pop) }} />
            <h2>Kalta Notes</h2>
          </div>
          <div className="our_tab_card">
            <img src={require('./Services_2.png')} alt="img" onClick={() => { setPop1(!pop1) }} />
            <h2>CBSA Notes</h2>
          </div>
          <div className="our_tab_card">
            <img src={require('./Services_2.png')} alt="img" onClick={() => { setPop2(!pop2) }} />
            <h2>CSIS Notes</h2>
          </div>
          <div className="our_tab_card">
            <img src={require('./Services_2.png')} alt="img" onClick={() => { setPop3(!pop3) }} />
            <h2>Notes Reviews</h2>
          </div>
          <div className="our_tab_card">
            <img src={require('./Services_2.png')} alt="img" onClick={() => { setPop4(!pop4) }} />
            <h2>Pan Application Status</h2>
          </div>
        </div> */}

        <section className='Servics_image_div5_Section'>
          <h1 className='Services_heading5_heading'>What are Kalta Notes? </h1>
          <span className='Our_service_line_1'></span>
          <p className='Services_Paragraph11'>
            Global Case Management System (Kalta) is a centralized system used
            by Immigration, Refugees and Citizenship Canada (IRCC) to process
            applications for immigration and citizenship. The Kalta notes
            contains detailed records of each application to IRCC, which
            includes, the complete applicationfile, the supporting documents
            submitted by the applicant, correspondences sent to and/or from IRCC
            and detailed comments made by the officers who review the
            applications. These notes can be used to get an insight in to the
            processing of the applications. They also help in knowing the status
            of the application and taking the necessary steps, if required.
          </p>
          {/* <button className='Services_btn'>Read More </button> */}
          <img src={circle1} alt='' className='circle1' />
          <img src={circle} alt='' className='circle' />
          <img src={vector} alt='' className='vector' />
        </section>

        <div className='order'>
          <h1 className='ordr_head'>Why Order Kalta Notes</h1>
          <div className='head_span1 green'></div>
          <div className='order_parent'>
            <div className='order_child'>
              {' '}
              <p>
                <img src={search} alt='' /> To Track your <br /> application
                status{' '}
              </p>
            </div>
            <div className='order_child'>
              <p>
                <img src={bulb} alt='' />
                Understand your <br /> application file{' '}
              </p>
            </div>
            <div className='order_child'>
              <p>
                <img src={next} alt='' />
                Prepare for your <br />
                next step{' '}
              </p>
            </div>
            <div className='order_child'>
              <p>
                <img src={dot} alt='' />
                Know reason for <br />
                refusal{' '}
              </p>
            </div>
          </div>
        </div>

        <section className='Section-Servies_Heading7 '>
          <h1 className='Servies_Heading7'>How to Order Kalta notes</h1>
          <div className='head_span1 green'></div>
        </section>

        {/* <section className='Services_he1_Section'>
          <div>
            <h1 className='Services_he1'>Create an account</h1>
            <h1 className='Services_he2'>Choose the type of notes you want</h1>
            <h1 className='Services_he3'>Select the payment currency</h1>
            <h1 className='Services_he4'>
              {' '}
              Provide the relevant information about your application
            </h1>
            <h1 className='Services_he5'>
              Checkout using a Secured Payment Gateway
            </h1>
            <h1 className='Services_he6'>Send us the Consent Form</h1>
            <h1 className='Services_he7'>Receive Acknowledgement </h1>
            <h1 className='Services_he8'>Notes Delivered:</h1>
            <h1 className='Services_he9'> Check Status: </h1>
          </div>

          <img
            className='Services_C1'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Services_C11' src={require('./S1.png')} alt='img' />

          <img
            className='Services_C2'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Servicess_C12' src={require('./S2.png')} alt='img' />

          <img
            className='Services_C3'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Services_C13' src={require('./S3.png')} alt='img' />

          <img
            className='Services_C4'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Services_C14' src={require('./S5.png')} alt='img' />

          <img
            className='Services_C5'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Services_C15' src={require('./S4.png')} alt='img' />

          <img
            className='Services_C6'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Services_C16' src={require('./S6.png')} alt='img' />

          <img
            className='Services_C7'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Services_C17' src={require('./S7.png')} alt='img' />

          <img
            className='Services_C8'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Services_C18' src={require('./S8.png')} alt='img' />

          <img
            className='Services_C9'
            src={require('./Services_Ci.png')}
            alt='img'
          />
          <img className='Services_C19' src={require('./S9.png')} alt='img' />

          <img
            className='Service_lin1'
            src={require('./Service_li1.png')}
            alt='img'
          />
          <img
            className='Service_lin2'
            src={require('./Service_li2.png')}
            alt='img'
          />
          <img
            className='Service_lin3'
            src={require('./Service_li3.png')}
            alt='img'
          />
          <img
            className='Service_lin4'
            src={require('./Service_li4.png')}
            alt='img'
          />
          <img
            className='Service_lin5'
            src={require('./Service_li5.png')}
            alt='img'
          />
          <img
            className='Service_lin6'
            src={require('./Service_li6.png')}
            alt='img'
          />
          <img
            className='Service_lin7'
            src={require('./Service_li7.png')}
            alt='img'
          />
          <img
            className='Sservicee_lin8'
            src={require('./Service_li7.png')}
            alt='img'
          />
        </section> */}
        <div className='process_img'>
          <img src='/Images/process.png' alt='' />
        </div>
        <div className='how'>
          <how className='how-card'>
            <img src={require('./Group 108.png')} alt='img' />
            <h2>Create an account</h2>
          </how>
          <how className='how-card'>
            <img src={require('./Group 109.png')} alt='img' />
            <h2>Choose the type you want</h2>
          </how>
          <how className='how-card'>
            <img src={require('./Group 110.png')} alt='img' />
            <h2>Select the payment currency </h2>
          </how>
          <how className='how-card'>
            <img src={require('./Group 111.png')} alt='img' />
            <h2>Checkout using a Secured Payment Gateway</h2>
          </how>
        </div>
        <div className='how'>
          <how className='how-card'>
            <img src={require('./Group 112.png')} alt='img' />
            <h2>Provide the relevant information about your application</h2>
          </how>
          <how className='how-card'>
            <img src={require('./Group 113.png')} alt='img' />
            <h2>Send us conset form</h2>
          </how>
          <how className='how-card'>
            <img src={require('./Group 114.png')} alt='img' />
            <h2>Received Acknowlwdgement</h2>
          </how>
          <how className='how-card'>
            <img src={require('./Group 115.png')} alt='img' />
            <h2>Check Status</h2>
          </how>
          <how className='how-card'>
            <img src={require('./Group 116.png')} alt='img' />
            <h2>Notes Delivered</h2>
          </how>
        </div>

        <HomeAnimationSlider />
        <section className='Section-Servies_Heading7 '>
          <h1 className='Servies_Heading7'>What client say’s</h1>
          <div className=' green head_span2'></div>
        </section>
        {/* <section >
        <div className='Whats_Client_Pic_Service'>

          <img className='Services_A1' src={require('./Services_A1.png')} alt="img" />
          <img className='Services_A2' src={require('./Services_A2.png')} alt="img" />
          <img className='Services_A3' src={require('./Services_A3.png')} alt="img" />
        </div>
        <div className='services_para'>
          <p className='Services_font_Para'> Omkar Hill, it is situated in developing area of Vatva, Narol. It is very nearby the old and famous lambha temple. It has five blocks having 1, 2 and 3 BHK option. It has very beautiful garden. All blocks have their own parking space. It has it's shopping complex itself. Divine Life International School is also nearby this place. </p>
        </div>
      </section> */}
        <div className='carousel_div'>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
          >
            <div className='card1'>
              <div className='carousel_img_div'>
                <img src={a1} alt='img' />
              </div>
              <p className='caraousel_Para'>
                Omkar Hill, it is situated in developing area of Vatva, Narol.
                It is very nearby the old and famous lambha temple. It has five
                blocks having 1, 2 and 3 BHK option. It has very beautiful
                garden. All blocks have their own parking space. It has it's
                shopping complex itself. Divine Life International School is
                also nearby this place.{' '}
              </p>
            </div>

            <div className='card1'>
              <div className='carousel_img_div'>
                <img src={a2} alt='img' />
              </div>
              <p className='caraousel_Para'>
                Omkar Hill, it is situated in developing area of Vatva, Narol.
                It is very nearby the old and famous lambha temple. It has five
                blocks having 1, 2 and 3 BHK option. It has very beautiful
                garden. All blocks have their own parking space. It has it's
                shopping complex itself. Divine Life International School is
                also nearby this place.{' '}
              </p>
            </div>
            <div className='card1'>
              <div className='carousel_img_div'>
                <img src={a3} alt='img' />
              </div>
              <p className='caraousel_Para'>
                Omkar Hill, it is situated in developing area of Vatva, Narol.
                It is very nearby the old and famous lambha temple. It has five
                blocks having 1, 2 and 3 BHK option. It has very beautiful
                garden. All blocks have their own parking space. It has it's
                shopping complex itself. Divine Life International School is
                also nearby this place.{' '}
              </p>
            </div>
          </Carousel>
        </div>
        {/* <section className='Services_A1_Section' >
        <div className='Services_H_Ak'>
          <h1 >Akash Singh</h1>
          <h1 >UI UX Designer</h1>
        </div>
        <div className='Services_H_Ak1'>
          <h1 >Akash Singh</h1>
          <h1 >UI UX Designer</h1>
        </div>
      </section> */}
        <section className='Services_font_p_section'>
          <h1 className='Services_font_H'>
            Let’s Get The Information About Your Application
          </h1>
          <button className='Services_font_Btn'>
            <Link to='/order-now'>Order Now</Link>
          </button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Services
