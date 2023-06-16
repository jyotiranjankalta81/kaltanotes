import React from 'react'
import "./AdminNavbar.css";
import user from '../assets/images/user.png'

    function AdminNavbar() {
        return (
            <div className="adminnavbar1">
                <h2>Welcome to: Beklom</h2>
                <span><img src={user} alt="" /><br />Akash Singh</span>
            </div>
        )
    }

export default AdminNavbar