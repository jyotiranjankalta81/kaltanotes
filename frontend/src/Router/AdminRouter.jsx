import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../components/Admin/AdminLayout'
import Dashboard from '../components/Admin/Dashboard/Dashboard'
import AddBlogs from '../admin/addblogs/AddBlogs'
import AddUser from '../admin/adduser/AddUser'
import AdminGcmsBasic from '../admin/AdminGcmsBasic/AdminGcmsBasic'
import ContactUs from '../admin/contactus/ContactUs'
import GetOnboard from '../admin/getonboard/GetOnboard'
import ManageNews from '../admin/managenewsletter/ManageNews'
import ManagePages from '../admin/managepages/ManagePages'
import Section1 from '../admin/section1/Section1'
import Section2 from '../admin/section2/Section2'
import Section3 from '../admin/section3/Section3'
import Section4 from '../admin/section4/Section4'
import Section5 from '../admin/section5/Section5'
import View from '../admin/View/View'
import View1 from '../admin/View1/View1'
import View2 from '../admin/View2/View2'
import View3 from '../admin/View3/View3'
import ViewUser from '../admin/viewuser/ViewUser'
import ManageUser from '../components/Admin/ManageUser/ManageUser'
import ApplicationView from '../components/Admin/ApplicationView/ApplicationView'
import PartnerWithUs from '../admin/texttestomonial/TextTestomonial'
import MailSendingTemplate from '../components/Admin/ManageUser/MailSendingTemplate'
import ProtectedRoutes from '../admin/Gaurds/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getallorder, getblog } from '../Redux/features/adminSlice'
import ProcessLog from '../components/Admin/ManageUser/ProcessLog'
import { getBlog } from '../Redux/features/commonSlice'
import AddNewUser from '../components/UserRegister/AddNewUser'
import AdminCManageUser from '../admin/manageUser/ManageUser'

export default function AdminRouter () {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getallorder({}));
    dispatch(getblog({}));
    dispatch(getBlog({}));
  }, []);

  return (
    <Routes>
      <Route element={<ProtectedRoutes role='1' />}>
        <Route path='/admin-panel' element={<AdminLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route exact path='view' element={<View />} />
          <Route exact path='view1' element={<View1 />} />
          <Route exact path='view2' element={<View2 />} />
          <Route exact path='view3' element={<View3 />} />
          <Route exact path='add-new-user' element={<AdminCManageUser />} />
          <Route exact path='manage-users' element={<ManageUser />} />
          <Route exact path='admin-gcms-basic' element={<AdminGcmsBasic />} />
          <Route exact path='adduser' element={<AddUser />} />
          <Route exact path='viewuser' element={<ViewUser />} />
          <Route exact path='blogs-pages' element={<ManagePages />} />
          <Route exact path='contact-us' element={<ContactUs />} />
          <Route exact path='managenews' element={<ManageNews />} />
          <Route exact path='partner-us' element={<PartnerWithUs />} />
          <Route exact path='getonboard' element={<GetOnboard />} />
          <Route exact path='addblogs' element={<AddBlogs />} />
          <Route exact path='section1' element={<Section1 />} />
          <Route exact path='section2' element={<Section2 />} />
          <Route exact path='section3' element={<Section3 />} />
          <Route exact path='section4' element={<Section4 />} />
          <Route exact path='section5' element={<Section5 />} />
          <Route path='application/:id' element={<ApplicationView />} />
          <Route exact path='mail' element={<MailSendingTemplate />} />
          <Route exact path='Processlog' element={<ProcessLog />} />
        </Route>
      </Route>
    </Routes>
  )
}
