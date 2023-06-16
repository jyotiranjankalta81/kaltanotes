import React from 'react';
import '../assets/Styles.css';
import logoadmin from '../assets/images/logoadmin.png'
import user from '../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import AdminSidebar from '../AdminSideBar/AdminSidebar';
import AdminNavbar from '../AdminNavbaar/AdminNavbar';

export default function AddUser() {
    return (
        <>
            <div className='addusercontainer'>
            <AdminSidebar/>
                <div className="adminbody">
                      <AdminNavbar/>
                    <div className="adduser">
                        <div className="buttons">
                            <NavLink to="/adduser">
                                <button className="adduserbtn">
                                    Add User
                                </button>
                            </NavLink>
                            <NavLink to="/viewuser">
                                <button className="viewuserbtn">
                                    View User
                                </button>
                            </NavLink>
                        </div>
                        <br />
                        <br />
                        <div className="inputfields">
                            <label>Email</label>
                            <input type="text" />
                            <br /><br />
                            <label>Password</label>
                            <input type="text" />
                        </div>
                        <br /><br />
                        <div className="addbtn">
                            <button >
                                Add
                            </button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
