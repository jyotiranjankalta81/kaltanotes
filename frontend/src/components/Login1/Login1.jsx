import React from 'react'
import "./Login1.css";
import {Link} from "react-router-dom";

function Login1() {
    return (
        <div className="login1_container">
            <div className="lohinleft">
                <h1>Login</h1>
                <p className='login_para'>Login with your data that you
                    have inserted during registration!</p>

                  <label htmlFor="" className='login_label'>Username or Email</label> <br />
                  <input type="text"  className='login_input'/> <br /> 

                  <label htmlFor="" className='login_label'>Password</label> <br />
                  <input type="text" className='login_input'/>  <br />

                 <div className="login_checkbox"><input type="checkbox" /><label htmlFor="">Remember Me</label> <br /></div>
                  <button className='login1_btn'>Submit</button>
                 <a href="" className='forgot'>Forgot password</a> 
                  <p className='acount'>Don’t  have an account ? <Link to ="/register1">Register</Link></p>


            </div>
            <div className="login_right">
                <h1>Welcome Back</h1>
                <img className="wel_img" src={require("../Images/Vector 2.png")} />
            </div>
        </div>
    )
}

export default Login1