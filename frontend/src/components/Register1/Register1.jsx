import React from 'react'
import "./Register1.css";

function Register1() {
  return (
    <div className="Regsiter_parent">
      <div className="form_container">
        <h1 className="register_heading">Register</h1>
        <form action="">
          <label htmlFor="">UserName</label> <br />
          <input type="text" /> <br />
          <label htmlFor="">First Name</label> <br />
          <input type="text" /> <br />
          <label htmlFor="">Last Name</label><br />
          <input type="text" /><br />
          <label htmlFor="">Email</label><br />
          <input type="text" /><br />
          <label htmlFor="">Password</label><br />
          <input type="text" /><br />
          <label htmlFor="">Confirm Password</label><br />
          <input type="text" /> <br />

          <div className="checkbox_div"><input type="checkbox" className='check' /><label htmlFor="" className='check_label'>Send’s these credential via email</label></div>
          <button className='register_btn'>Register</button>

        </form>
      </div>
      <div className="img_container">
        <div className='Hello_again'>Hello Again!</div>
        <img className="reg_pic" src={require("../Images/Picturee.png")} />
      </div>
    </div>
  )
}

export default Register1