import React from 'react'
import './BLogNew.css'
import { useNavigate } from 'react-router-dom'
import bg1 from '../../components/Images/Blog1Pic.png'
import bg2 from '../../components/Images/Blog2Pic.png'
import bg3 from '../../components/Images/Blog3Pic.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function BlogsNew () {
  const navigate = useNavigate()

  function handleClick () {
    navigate('/BlogsNewSec')
  }
  return (
    <>
      <Header />
      <div className='blogs-New-Container'>
        <h1 className='heading_BlogN'>Our Blogs</h1>
        <span className='Our_linee'></span>

        <section className='Blog1_PicN-Section'>
          <div>
            <img className='Blog1_PicN' src={bg1} />
          </div>
          <div className='Calendar1_BlogN-div'>
            <h1 className='Calendar1_BlogN'>4 July 2022 </h1>
            <p className='p1'>
              Which is the Best CMS Software to Build a Website for better
              outcomes?
            </p>
            <p className='p2'>
              Content Management Systems (CMS) is software that helps you
              create, manage and modify the content of your website without any
              technical knowledge of coding and development.
            </p>

            <button className='Btn1' onClick={handleClick}>
              Continue reading
            </button>
          </div>
        </section>
        <div className='Blog2_PicN-Section-new'>
          <section className='Blog2_PicN-Section'>
            <div>
              <img className='Blog2_PicN' src={bg2} />
            </div>
            <div className='Calendar2_BlogN-div'>
              <h1 className='Calendar2_BlogN'>4 July 2022</h1>
              <p className='paragraph3_BlogN'>
                Top 6 Programming languages for Web development in 2021
              </p>

              <p className='paragraph5_BlogN'>
                Here is a saying about “right tool for the right job” and it
                very much applies to a programming language. Not all programming
                languages are designed the same and that’s why they are not
                equally good for everything.
              </p>
              <button className='Btn1-n' onClick={handleClick}>
                Continue reading
              </button>
            </div>
          </section>

          <section className='Blog2_PicN-Section'>
            <div>
              <img className='Blog2_PicN' src={bg3} />
            </div>
            <div className='Calendar2_BlogN-div'>
              <h1 className='Calendar2_BlogNe'>4 July 2022</h1>
              <p className='paragraph3_BlogNe'>
                Top 5 programming languages for software development in 2021
              </p>

              <p className='paragraph5_BlogNe'>
                Programming languages are now slowly gaining momentum with time
                especially with companies now embracing technologies at a fast
                rate. In the last decade, the demand for developers has
                increased with three popular languages such as PHP, Perl, and
                C++ (that keeps on changing).
              </p>
              <button className='Btn1-New' onClick={handleClick}>
                Continue reading
              </button>
            </div>
          </section>
        </div>

        <div className='Blog2_PicN-Section-new'>
          <section className='Blog2_PicN-Section'>
            <div>
              <img className='Blog2_PicN' src={bg2} />
            </div>
            <div className='Calendar2_BlogN-div'>
              <h1 className='Calendar2_BlogN'>4 July 2022</h1>
              <p className='paragraph3_BlogN'>
                Top 6 Programming languages for Web development in 2021
              </p>

              <p className='paragraph5_BlogN'>
                Here is a saying about “right tool for the right job” and it
                very much applies to a programming language. Not all programming
                languages are designed the same and that’s why they are not
                equally good for everything.
              </p>
              <button className='Btn1-n' onClick={handleClick}>
                Continue reading
              </button>
            </div>
          </section>

          <section className='Blog2_PicN-Section'>
            <div>
              <img className='Blog2_PicN' src={bg3} />
            </div>
            <div className='Calendar2_BlogN-div'>
              <h1 className='Calendar2_BlogNe'>4 July 2022</h1>
              <p className='paragraph3_BlogNe'>
                Top 5 programming languages for software development in 2021
              </p>

              <p className='paragraph5_BlogNe'>
                Programming languages are now slowly gaining momentum with time
                especially with companies now embracing technologies at a fast
                rate. In the last decade, the demand for developers has
                increased with three popular languages such as PHP, Perl, and
                C++ (that keeps on changing).
              </p>
              <button className='Btn1-New' onClick={handleClick}>
                Continue reading
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogsNew
