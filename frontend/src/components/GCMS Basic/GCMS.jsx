import React, { useState } from "react";
import "./GCMS.css";
import "../../components/Images/s_img.png"

function GCMSBasic() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="primary_container">
         <h1 className="heading_Primary">Primary Applicant</h1>
         
      <form className="documents">
        <div className="Username_GCMS">
          <label for="name">Family name</label>
          <input className="input_GCMS_1" type="text" id="name" placeholder="" />
        </div>

        <div className="Date_GCMS">
          <label for="name"> Date of birth</label>
          <input className="input_GCMS_2" type="date" name="dob" data-placeholder="" required aria-required="true" />
        </div>

        <div className="Email_GCMS">
          <label for="email"> Email Addess</label>
          <input
            className="input_GCMS_3"
            type="email"
            id="email"
            placeholder=""
          />
        </div>

    

        {visible && (
          <div>
            <div className="Username1_GCMS">
              <label for="name"> Family name</label>
              <input
                className="input_GCMS_4"
                type="text"
                id="name"
                placeholder=""
              />
            </div>

            <div className="Date1_GCMS">
              <label for="name"> Date of birth</label>
              <input className="input_GCMS_5" type="date" placeholder="" />
            </div>

            <p className="GCMS_About">How did you hear about us?</p>
            <textarea
              className="textArea_GCMS"
              type="text"
              id="text"
              rows="4"
              cols="50"
            ></textarea>

            <div className="Given1_GCMS">
              <label for="name"> Given name</label>
              <input  className="input_GCMS_8"type="text"id="name" placeholder=""/>
            </div>

            <h1 className="Spouse_GCMS">Spouse</h1>

          </div>
        )}

        <button className="GCMS_Button">Submit</button>

        <div className="Given_GCMS">
          <label for="name"> Given name</label>
          <input className="input_GCMS_6" type="text" id="name" placeholder="" />
        </div>
        <div className="Visa_GCMS">
          <label for="name"> Visa application number</label>
          <input
            className="input_GCMS_7"
            type="number"
            id="number"
            placeholder=""
          />
        </div>

        <p className="Spouse1_GCMS">Spouse/ Law partner</p>

        <label className="Radio_GCMS">
           <input type="radio"name="sample"checked onClick={() => setVisible(true)}/>
            <span className="Sapan1_GCMS">Yes</span>
        </label>

        <label className="Radio1_GCMS">
          <input type="radio"name="sample"checked onClick={() => setVisible(false)}/>
          <span className="Span2_GCMS">No</span>
        </label>
      </form>
    </div>
  );
}

export default GCMSBasic;
