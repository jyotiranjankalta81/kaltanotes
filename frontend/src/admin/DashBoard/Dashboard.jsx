import React from 'react'
import AdminSidebar from '../AdminSideBar/AdminSidebar'
import AdminNavbar from '../AdminNavbaar/AdminNavbar'
import { NavLink } from 'react-router-dom'
import './Dashboard.css'
import eye from '../../admin/assets/images/eye.png'
import pencil from '../../admin/assets/images/pencil-circle.png'

function Dashboard () {
  return (
    <div className='addusercontainer'>
      <AdminSidebar />
      <div className='adminbody'>
        <AdminNavbar />
        <div className='viewall'>
          <div className='sections1'>
            <NavLink to='/dashboard'>
              <h4>View all</h4>
            </NavLink>
            <NavLink to='/admin-gcms-basic'>
              <h4>Kalta/Basic</h4>
            </NavLink>
            <NavLink to='/view'>
              <h4>Kalta Advance Plus</h4>
            </NavLink>
            <NavLink to='/view1'>
              <h4>CBSA Notes</h4>
            </NavLink>
            <NavLink to='/view2'>
              <h4>MyImmiTracker</h4>
            </NavLink>
          </div>

          <table className='v_table'>
            <thead>
              <tr>
                <th>Applied By</th>
                <th>Applied Date</th>
                <th>Types of Order</th>
                <th>No of Days</th>
                <th>Applied By</th>
                <th>Applied By</th>
                <th>Applied By</th>
                <th>Applied By</th>
                <th>Applied By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Akash Singh</td>
                <td>15-07-2022</td>
                <td>2</td>
                <td>04 Days</td>
                <td>19-07-2022</td>
                <td>Akash Singh</td>
                <td>Completed</td>
                <td>Completed</td>
                <td>
                  <img src={eye} alt='' className='eye' />
                  <img src={pencil} alt='' className='pencil' />
                </td>
              </tr>
              <tr>
                <td>Akash Singh</td>
                <td>15-07-2022</td>
                <td>2</td>
                <td>04 Days</td>
                <td>19-07-2022</td>
                <td>Akash Singh</td>
                <td>Completed</td>
                <td>Completed</td>
                <td>
                  <img src={eye} alt='' className='eye' />
                  <img src={pencil} alt='' className='pencil' />
                </td>
              </tr>
              <tr>
                <td>Akash Singh</td>
                <td>15-07-2022</td>
                <td>2</td>
                <td>04 Days</td>
                <td>19-07-2022</td>
                <td>Akash Singh</td>
                <td>Completed</td>
                <td>Completed</td>
                <td>
                  <img src={eye} alt='' className='eye' />
                  <img src={pencil} alt='' className='pencil' />
                </td>
              </tr>
              <tr>
                <td>Akash Singh</td>
                <td>15-07-2022</td>
                <td>2</td>
                <td>04 Days</td>
                <td>19-07-2022</td>
                <td>Akash Singh</td>
                <td>Completed</td>
                <td>Completed</td>
                <td>
                  <img src={eye} alt='' className='eye' />
                  <img src={pencil} alt='' className='pencil' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
