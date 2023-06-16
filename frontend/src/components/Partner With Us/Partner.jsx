import React from 'react'
import "./partner.css";

function PartnerWithUs() {
  return (
    <div className='Partner_Container'>
     <form className='form_partner'>
      <div className='Heading_Partner'>Partner With us</div>

       <div className="Username_Partner">
            <label className="form__label" for="fullName">Full Name:</label>
            <br></br>
          
         </div>
         <div>
            <input className='input_Partner'type="text" id="fullName" placeholder="" />
          </div>
         

          <div className="email_partner">
            <label className="form__label" for="email"> Email Addess:</label>
            </div>
            <div>
            <input  className='input_email' type="email" id="email" placeholder="" />
          </div>

          <div className="Whatsapp_partner">
            <label className="form__label" for="number"> Whatsapp Number:</label>
            </div>
            <div>
            <input  className='input_number' type="number" id="number" placeholder="" />
          </div>

          <div className="messages_Partner">
            <label className="form__label" for="messages" id="message1">
              Messages:
            </label><br></br>
            </div>
            <div>
            <textarea className='text_partner' rows="4" cols="75"></textarea>
          </div>


          <div class="submit_Partner">
          <button className="button1_partner" type="submit">Submit
          </button>

          <button className="button2_Partner" type="cancel">Cancel</button>
        </div>
          
      </form>
           
          

              <img className="Partner_Pic" src={require("../Images/Partner_Pic.png")} />

    </div>
  )
}

export default PartnerWithUs;