import React from 'react';
import '../assets/Styles.css';
import logoadmin from '../assets/images/logoadmin.png'
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom';

export default function ManageNews() {
    return (
        <>
            <div className='addusercontainer'>
                <div className="adminsidebar">
                    <img src={logoadmin} alt="logo" />

                    <Link to="/adduser"><h3>Manage User </h3></Link>
                    <Link to="/managepages"><h3>Manage Pages </h3></Link>
                    <Link to="/getonboard"><h3>Get Onboard </h3></Link>
                    <Link to="/texttestomonial"><h3>Text Testimonials </h3></Link>
                    <Link to="/partnerwithus"><h3>Partner with us </h3></Link>
                    <Link to="/contactus"><h3>Contact Us </h3></Link>
                    <Link to="/managenews"><h3>Manage Newsletter </h3></Link>
                    <Link to="/"><h3>Logout </h3></Link>

                </div>

                <div className="adminbody">
                    <div className="adminnavbar">
                        <h2>Welcome to: Beklom</h2>
                        <span><img src={user} alt="" /><br />Akash Singh</span>
                    </div>

                    <div className="adduser">

                        <br />   <br />

                        <div className="tables">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Delete User</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Akash Singh</td>
                                        <td><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5001 0.916504C23.5647 0.916504 30.0834 7.43525 30.0834 15.4998C30.0834 23.5644 23.5647 30.0832 15.5001 30.0832C7.4355 30.0832 0.916748 23.5644 0.916748 15.4998C0.916748 7.43525 7.4355 0.916504 15.5001 0.916504ZM22.7917 8.20817H19.1459L17.6876 6.74984H13.3126L11.8542 8.20817H8.20841V11.1248H22.7917V8.20817ZM11.1251 24.2498H19.8751C20.2619 24.2498 20.6328 24.0962 20.9063 23.8227C21.1798 23.5492 21.3334 23.1783 21.3334 22.7915V12.5832H9.66675V22.7915C9.66675 23.1783 9.82039 23.5492 10.0939 23.8227C10.3674 24.0962 10.7383 24.2498 11.1251 24.2498Z" fill="#4A4B4B" />
                                        </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Sakshi Singh</td>
                                        <td><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5001 0.916504C23.5647 0.916504 30.0834 7.43525 30.0834 15.4998C30.0834 23.5644 23.5647 30.0832 15.5001 30.0832C7.4355 30.0832 0.916748 23.5644 0.916748 15.4998C0.916748 7.43525 7.4355 0.916504 15.5001 0.916504ZM22.7917 8.20817H19.1459L17.6876 6.74984H13.3126L11.8542 8.20817H8.20841V11.1248H22.7917V8.20817ZM11.1251 24.2498H19.8751C20.2619 24.2498 20.6328 24.0962 20.9063 23.8227C21.1798 23.5492 21.3334 23.1783 21.3334 22.7915V12.5832H9.66675V22.7915C9.66675 23.1783 9.82039 23.5492 10.0939 23.8227C10.3674 24.0962 10.7383 24.2498 11.1251 24.2498Z" fill="#4A4B4B" />
                                        </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Sudhanshu Singh</td>
                                        <td><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5001 0.916504C23.5647 0.916504 30.0834 7.43525 30.0834 15.4998C30.0834 23.5644 23.5647 30.0832 15.5001 30.0832C7.4355 30.0832 0.916748 23.5644 0.916748 15.4998C0.916748 7.43525 7.4355 0.916504 15.5001 0.916504ZM22.7917 8.20817H19.1459L17.6876 6.74984H13.3126L11.8542 8.20817H8.20841V11.1248H22.7917V8.20817ZM11.1251 24.2498H19.8751C20.2619 24.2498 20.6328 24.0962 20.9063 23.8227C21.1798 23.5492 21.3334 23.1783 21.3334 22.7915V12.5832H9.66675V22.7915C9.66675 23.1783 9.82039 23.5492 10.0939 23.8227C10.3674 24.0962 10.7383 24.2498 11.1251 24.2498Z" fill="#4A4B4B" />
                                        </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>Pratibha Singh</td>
                                        <td><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5001 0.916504C23.5647 0.916504 30.0834 7.43525 30.0834 15.4998C30.0834 23.5644 23.5647 30.0832 15.5001 30.0832C7.4355 30.0832 0.916748 23.5644 0.916748 15.4998C0.916748 7.43525 7.4355 0.916504 15.5001 0.916504ZM22.7917 8.20817H19.1459L17.6876 6.74984H13.3126L11.8542 8.20817H8.20841V11.1248H22.7917V8.20817ZM11.1251 24.2498H19.8751C20.2619 24.2498 20.6328 24.0962 20.9063 23.8227C21.1798 23.5492 21.3334 23.1783 21.3334 22.7915V12.5832H9.66675V22.7915C9.66675 23.1783 9.82039 23.5492 10.0939 23.8227C10.3674 24.0962 10.7383 24.2498 11.1251 24.2498Z" fill="#4A4B4B" />
                                        </svg>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>Komal Singh</td>
                                        <td><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5001 0.916504C23.5647 0.916504 30.0834 7.43525 30.0834 15.4998C30.0834 23.5644 23.5647 30.0832 15.5001 30.0832C7.4355 30.0832 0.916748 23.5644 0.916748 15.4998C0.916748 7.43525 7.4355 0.916504 15.5001 0.916504ZM22.7917 8.20817H19.1459L17.6876 6.74984H13.3126L11.8542 8.20817H8.20841V11.1248H22.7917V8.20817ZM11.1251 24.2498H19.8751C20.2619 24.2498 20.6328 24.0962 20.9063 23.8227C21.1798 23.5492 21.3334 23.1783 21.3334 22.7915V12.5832H9.66675V22.7915C9.66675 23.1783 9.82039 23.5492 10.0939 23.8227C10.3674 24.0962 10.7383 24.2498 11.1251 24.2498Z" fill="#4A4B4B" />
                                        </svg>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}
