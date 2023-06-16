import React from 'react'
import AdminSidebar from '../AdminSideBar/AdminSidebar'
import AdminNavbar from '../AdminNavbaar/AdminNavbar'
import { NavLink } from 'react-router-dom'
import mail from '../../admin/assets/images/Mail.png'
import cal from '../../admin/assets/images/calender.png'
import con from '../../admin/assets/images/conatct.png'
import vec from '../../admin/assets/images/Vector.png'
import User1 from '../../admin/assets/images/User1.png'
import ok from '../../admin/assets/images/Ok.png'
import './View.css'
import AdminApp from '../AdminApp/AdminApp'

function View () {
  return (
    <div className='addusercontainer'>
      <div className='adminbody'>
        <AdminApp />
        <div className='status'>
          <h1 className='status_head'>Status</h1>
          <div className='process'>
            <div className='pro1'>Processing Order</div>
            <div className='pro1'>Awaiting Consent</div>
            <div className='pro1'>Notes Applied</div>
            <div className='pro1'>Completed</div>
          </div>
          <div className='status_cir'>
            <span className='dot1 dot2'></span>
            <div className='cir1'></div>
            <span className='dot1'></span>
            <div className='cir1'></div>
            <span className='dot1'></span>
            <div className='cir1'></div>
            <span className='dot1'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
