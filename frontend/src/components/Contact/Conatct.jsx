import React from 'react'
import "./Contact.css";

function Conatct() {
  return (
    <div className='contact1'>
        <div className="contact_left">
             <h1>Contact US</h1>
             <form action="">
                <label htmlFor="">Full Name:</label> <br />
                <input type="text" /><br />
                <label htmlFor="">Email Address:</label> <br />
                <input type="text" /><br />
                <label htmlFor="">Subject:</label> <br />
                <input type="text" /><br />
                <label htmlFor="">Tracking Number:</label> <br />
                <input type="text" /><br />
               
                <label htmlFor="">Message:</label> <br />
                <textarea name="" id="" cols="30" rows="10"></textarea> <br />
                 <div className="conatct_btn_div"> <button className='sbmit'>Submit</button> <button className='cncl'>Cancel</button></div>
             </form>
        </div>

        <div className="contact_right">
        <img className="c_right_img" src={require('../Images/Img.png')} />
        </div>
        </div>
  )
}

export default Conatct