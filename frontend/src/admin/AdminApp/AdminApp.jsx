/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react'
import mail from '../../admin/assets/images/Mail.png'
import cal from '../../admin/assets/images/calender.png'
import con from '../../admin/assets/images/conatct.png'
import vec from '../../admin/assets/images/Vector.png'
import User1 from '../../admin/assets/images/User1.png'
import ok from '../../admin/assets/images/Ok.png'
import './AdminApp.css'
import AppliedNotes from '../View3/AppliedNotes'
import axiosInstance, { imageBacked } from '../../API/axiosInstance'
import { ApplicationType } from '../../UtilComponents/ApplicationType/ApplicationType'
import { toast } from 'react-toastify'

function AdminApp ({ ismyform }) {
  const [openNote, setOpenNote] = React.useState(false)

  const handleOpenNote = () => setOpenNote(!openNote)

  const downloadconsent = () => {
    if (ismyform[0]?.DOCUMENT_STATUS === 1) {
      window.open(imageBacked + ismyform[0]?.DOCUMENTS)
    } else {
      toast.error('consent is not submitted till now')
    }
  }

  const handleComplete = () => {
    axiosInstance
      .put('main/complete-process', {
        ORDER_ID: ismyform[0]?.ORDER_ID
      })
      .then(res => {
        if (res.data.success) {
          toast.success(res.data.message)
          window.location.reload()
        } else {
          toast.error(res.data.message)
        }
      })
  }

  return (
    <>
      <div className='applicant_container'>
        <div className='application'>
          <div className='app_div'>
            <img src={User1} alt='' />{' '}
            <input type='text' value={ismyform[0]?.L_NAME} disabled />
          </div>
          <div className='app_div'>
            <img src={User1} alt='' />{' '}
            <input type='text' value={ismyform[0]?.F_NAME} disabled />
          </div>
          <div className='app_div'>
            <img src={mail} alt='' />
            {ismyform[0]?.EMAIL}
          </div>
          <div className='app_div'>
            <img src={vec} />
            Viza Application no.: {ismyform[0].VISA_APP_NO}
          </div>
          <div className='app_div'>
            <img src={vec} />
            ATIP. / UTP. NO. :{' '}
            {ismyform[0].UCI_NUMBER !== ''
              ? ismyform[0].UCI_NUMBER
              : ismyform[0].ATIP}
          </div>
          <div className='app_div'>
            <img src={cal} alt='' />
            {ismyform[0]?.DOB}
          </div>

          <div className='app_div'>
            <img src={cal} alt='' />
            Application Type:
            <b> {'  ' + ApplicationType(ismyform[0]?.ORDER_TYPE)}</b>
          </div>

          <div className='app_div'>
            <button className='btn btn--primary' onClick={downloadconsent}>
              Download Consent
            </button>
          </div>
        </div>

        {!ismyform[0]?.COMPLETED_BY && (
          <div className='notes_applied'>
            {!ismyform[0]?.NOTES_APPLIEDON ? (
              <button className='btn btn--primary' onClick={handleOpenNote}>
                Notes Applied
              </button>
            ) : (
              <button className='btn btn--primary' onClick={handleComplete}>
                Complete Process
              </button>
            )}
          </div>
        )}
      </div>

      <br />
      <br />
      <br />

      {ismyform[0]?.PATNER_TYPE === 1 && (
        <>
          <h1 style={{ color: '#938C8C', textAlign: 'center' }}>
            {' '}
            <u> suppose details </u>
          </h1>
          <div className='applicant_container'>
            <div className='application'>
              <div className='app_div'>
                <img src={User1} alt='' />{' '}
                <input
                  type='text'
                  value={ismyform[0]?.SUPPOSE_L_NAME}
                  disabled
                />
              </div>
              <div className='app_div'>
                <img src={User1} alt='' />{' '}
                <input
                  type='text'
                  value={ismyform[0]?.SUPPOSE_F_NAME}
                  disabled
                />
              </div>
              <div className='app_div'>
                <img src={cal} alt='' />
                {ismyform[0]?.SUPPOSE_DOB}
              </div>
            </div>
          </div>
        </>
      )}
      {openNote && (
        <AppliedNotes NotesApplied={setOpenNote} ismyform={ismyform} />
      )}
    </>
  )
}

export default AdminApp
