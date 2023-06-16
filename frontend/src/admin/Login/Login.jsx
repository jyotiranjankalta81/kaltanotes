import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='loginadmin'>
            <div className="username">
                <label>UserName</label>
                <input type="text" />
            </div>
            <br />
            <div className="password">
                <label>Password</label>
                <input type="text" />
            </div>
            <br />
            <Link to='/adduser'> <button>Login</button></Link>

        </div>
    )
}
