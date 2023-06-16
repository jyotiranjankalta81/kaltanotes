import React from 'react'
import { NavLink } from "react-router-dom";
import AdminSidebar from '../AdminSideBar/AdminSidebar';
import AdminNavbar from '../AdminNavbaar/AdminNavbar';
import eye from "../../admin/assets/images/eye.png";
import pencil from "../../admin/assets/images/pencil-circle.png";

function AdminGcmsBasic() {
  return (
    <div className='addusercontainer'>
            <AdminSidebar />
            <div className="adminbody">
                <AdminNavbar />
                <div className="viewall">
                    <div className="sections1">
                        <NavLink to="/dashboard"><h4>View all</h4></NavLink>
                        <NavLink to="/admin-gcms-basic"><h4>GCMS/Basic</h4></NavLink>
                        <NavLink to="/view"><h4>GCMS Advance Plus</h4></NavLink>
                        <NavLink to="/view1"><h4>CBSA Notes</h4></NavLink>
                        <NavLink to="/view2"><h4>MyImmiTracker</h4></NavLink>
                    </div>
                
                <table className='v_table'>
                    <thead>
                    <tr>
                        <th>Last name</th>
                        <th>First name</th>
                        <th>Types of Order</th>
                        <th>D.O.B</th>
                        <th>Application no</th>
                        <th>Email address</th>
                        <th>Current Status</th>
                        <th>ATIP no</th>
                        <th>Notes applied</th>
                        <th>Days Left</th>
                        <th>Completion date</th>
                        <th>Payment gateway</th>
                        <th>Applied by</th>
                        <th>Completed by</th>
                        <th>Action</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
  )
}

export default AdminGcmsBasic