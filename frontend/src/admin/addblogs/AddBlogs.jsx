import React from 'react';
import '../assets/Styles.css';
import logoadmin from '../assets/images/logoadmin.png'
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom';

export default function AddBlogs() {
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
                        <div className="buttons">
                            <Link to="/managepages"><button className="viewuserbtn">
                                Homepage
                            </button></Link>
                            <Link to="/addblogs"><button className="viewuserbtn">
                                Blogs
                            </button></Link>
                            <Link to="/**"><button className="viewuserbtn">
                                Our Services
                            </button></Link>
                            <Link to="/**"><button className="viewuserbtn">
                                About Us
                            </button></Link>
                        </div>

                        <br /><br />

                        <div className="addreview">
                            <h2>Add Blogs</h2>
                            <input type="text" />
                            <button>Add</button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
