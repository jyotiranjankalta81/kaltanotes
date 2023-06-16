import React from 'react'
import InputWithIcon from '../../../UtilComponents/InputWithIcon/InputWithIcon'
import './ApplicationView.css'
import {MdPersonAddAlt1 ,MdEmail} from 'react-icons/md'
import {BsFillCalendar2CheckFill, BsFillPersonFill, BsFillTelephoneFill} from 'react-icons/bs'

export default function ApplicationView() {
  return (
    <div className="application-view-page">
        <div className="applicant-details">
            <InputWithIcon name="first_name" disabled={true} value="Muhsin" icon={<BsFillPersonFill className='input-icon' />}/>
            <InputWithIcon name="last_name" disabled={true} value="Neyyathur" icon={<BsFillPersonFill className='input-icon' />}/>
            <InputWithIcon name="email" disabled={true} value="muhsinny33@gmail.com" icon={<MdEmail className='input-icon' />}/>
            <InputWithIcon name="mobile" disabled={true} value="8606113002" icon={<BsFillTelephoneFill className='input-icon' />}/>
            <InputWithIcon name="dob" disabled={true} value="19-11-2001" icon={<BsFillCalendar2CheckFill className='input-icon' />}/>
            <InputWithIcon name="spouse" disabled={true} value="No" icon={<MdPersonAddAlt1 className='input-icon' />}/>
        </div>
    </div>
  )
}
