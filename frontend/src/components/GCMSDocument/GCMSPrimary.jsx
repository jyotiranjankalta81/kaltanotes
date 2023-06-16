import React from 'react'
import "./GCMSPrimary.css";
import mob from "../../components/Images/s_img.png"
import {useState} from "react";

function GCMSPrimary() {
  const [visible, setVisible] = useState(true);
  return (
     <>
    <div className='primary'>

      <div className="primary_left">
        <form action="">
          <h1>Primary Applicant</h1>
          <label htmlFor="" className='p_lable'>Family Name</label> <br />
          <input type="text"  className='p_input'/><br />
          <label htmlFor="" className='p_lable'>Date of Birth</label><br />
          <input type="date" className='p_input'/><br />
          <label htmlFor="" className='p_lable'>Email Address</label> <br />
          <input type="text" className='p_input'/><br />
        </form>
      </div>

      <div className="primary_right">
        <label htmlFor="" className='p_lable'>Given name</label> <br />
        <input type="text" className='r_input'/><br />
        <label htmlFor="" className='p_lable'>Visa application number</label> <br />
        <input type="text" className='r_input'/><br />
        <label htmlFor="" className='p_lable'>Spouse/ Law partner</label> <br />
        <div className="radio_conatiner"><input type="radio" name='radio' className='radio'onClick={() => setVisible(true)}/><label htmlFor="">Yes</label>
         <input type="radio" name='radio' onClick={() => setVisible(false)}/><label htmlFor="">No</label></div> <br />

      </div>
    </div>
      
      {visible &&(<div className="Spouce">
          <div className="spouse_left">
            <form action="">
          <h1>Spouse</h1>
          <label htmlFor="" className='p_lable'>Family Name</label> <br />
          <input type="text"  className='p_input'/><br />
          <label htmlFor="" className='p_lable'>Date of Birth</label><br />
          <input type="date" className='p_input'/><br />
          <label htmlFor="" className='p_lable'>How did you hear about us?</label><br />
          <textarea name="" id="" cols="30" rows="10" className='s_textarea'></textarea>
          </form>
          </div>
          <div className="spouce_right">
            <form action="">
          <label htmlFor="" className='p_lable'>Family Name</label> <br />
          <input type="text"  className='p_input'/><br />
          </form>
          <div className="spouce_img "><img src={mob} alt="" /></div>
          </div>
      </div>)}
      <div className="spouce_btn">
      <button>Submit</button>
        </div> 
      </>
  )
}

export default GCMSPrimary