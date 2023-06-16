import React from 'react';
import '../assets/Styles.css';
import logoadmin from '../assets/images/logoadmin.png'
import user from '../assets/images/user.png'
import { Link } from 'react-router-dom';
import ImageUploader from '../ImageUploader/ImageUploader';

export default function Section1() {
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

                        <div className="sections">
                            <Link to="/managepages"><h4>Section 1</h4></Link>
                            <Link to="/section2"><h4>Section 2</h4></Link>
                            <Link to="/section3"><h4>Section 3</h4></Link>
                            <Link to="/section4"><h4>Section 4</h4></Link>
                            <Link to="/section5"><h4>Section 5</h4></Link>
                        </div>
                        <br />
                        <br />
                        <h3>Section 1</h3>

                        <ImageUploader />

                        <br />
                        <br />




                    </div>
                </div>
            </div>


        </>
    )
}
