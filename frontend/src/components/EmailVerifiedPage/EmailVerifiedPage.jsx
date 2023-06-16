import React from 'react'
import './EmailVerifiedPage.css'
import { MdVerified } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function EmailVerifiedPage() {
    const navigate = useNavigate()
    return (
        <div className="email-verified-page">
            <div className="email-verified-container">
                <h1 className="email-verified-title">Email Verified <MdVerified className='verified-icon' /></h1>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tenetur numquam quam quisquam placeat exercitationem minima labore voluptatem? Voluptas, aliquid!</p>
                <button className="btn-verified" onClick={() => navigate('/login')} >Login Now</button>
            </div>
        </div>
    )
}
