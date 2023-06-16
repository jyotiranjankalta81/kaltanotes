import React from 'react'
import "./AdminSidebar.css";
import { NavLink } from 'react-router-dom';
import logoadmin from '../assets/images/logoadmin.png'



function AdminSidebar() {
  return (

    <div className="adminsidebar1">
    <img src={logoadmin} alt="logo" />
    <NavLink to="/dashboard">Dashboard </NavLink>
    <NavLink to="/adduser">Manage User</NavLink>
    <NavLink to="/managepages">Manage Pages</NavLink>
    {/* <NavLink to="/getonboard"><h3>Get Onboard </h3></NavLink> */}
    {/* <NavLink to="/texttestomonial"><h3>Text Testimonials </h3></NavLink>
    <NavLink to="/partnerwithus"><h3>Partner with us </h3></NavLink> */}
    <NavLink to="/contactus">Contact Us</NavLink>
    {/* <NavLink to="/managenews"><h3>Manage Newsletter </h3></NavLink> */}
    <NavLink to="/">Logout</NavLink>

</div>
  )
}

export default AdminSidebar