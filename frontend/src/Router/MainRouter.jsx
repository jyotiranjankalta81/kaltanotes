import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../admin/Login/Login";
import BlogNewSec from "../components/BlogNewSec/BlogNewSec";
import BlogPage from "../components/BlogPage/BlogPage";
import CBSABasic from "../components/CBSA Notes/CBSA";
import FAQs from "../components/FAQs/FAQs";
import GCMSPrimary from "../components/GCMSDocument/GCMSPrimary";
import MyTracker from "../components/Mymlli Tracker/Mymlli";
import OrderForm from "../components/OrderForms/OrderForm";
import OrderNowNew from "../components/OrderNowNew/OrderNowNew";
import OurPartner from "../components/OurPartnerPage/OurPartner";
import Services from "../components/Services/Services";
import UserRegister from "../components/UserRegister/UserRegister";
import UserLogin from "../components/Login/Login";
import ContactNew from "../components/ContactUs/ContactUs";
import ConsentUpload from "../components/ConsentUpload/ConsentUpload";
import EmailVerifiedPage from "../components/EmailVerifiedPage/EmailVerifiedPage";
import PreventedRoutes from "../admin/Gaurds/PreventedRoutes";
import TrackForm from "../components/TrackForm";
import ForgotPasswordMail from "../components/ResetPassword/ForgotPasswordMail";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import UserProfile from "../components/userprofile/UserProfile";
import { useDispatch } from "react-redux";
import { getuserdetails } from "../Redux/features/authenticationSlice";
import PaymentSuccess from "../components/paymentsuccess/PaymentSuccess";
import RejectPayment from "../components/rejectpayment/RejectPayment";

export default function MainRouter() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/loginadmin" element={<Login />} />
        {/* Admin Pannel */}
        <Route exact path="/" element={<Services />} />
        <Route exact path="/faqs" element={<FAQs />} />
        <Route exact path="/blogs" element={<BlogPage />} />
        <Route exact path="/BlogsNewSec" element={<BlogNewSec />} />
        <Route exact path="/contact" element={<ContactNew />} />
        <Route element={<PreventedRoutes />}>
          <Route exact path="/login" element={<UserLogin />} />
          <Route exact path="/user-register" element={<UserRegister />} />
        </Route>
        <Route exact path="/order-now" element={<OrderNowNew />} />
        <Route exact path="/partner" element={<OurPartner />} />
        <Route exact path="/gcmsprimary" element={<GCMSPrimary />} />
        <Route exact path="/cbsaBasic" element={<CBSABasic />} />
        <Route exact path="/mytracker" element={<MyTracker />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordMail />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route path="/order-form" element={<OrderForm />} />
        <Route path="/consent-uploader" element={<ConsentUpload />} />
        <Route path="/email-verified" element={<EmailVerifiedPage />} />
        <Route path="/trackform" element={<TrackForm />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/payment-complete" element={<PaymentSuccess />} />
        <Route path="/payment-reject" element={<RejectPayment />} />
      </Routes>
    </Fragment>
  );
}
