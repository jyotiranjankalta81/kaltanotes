import './App.css';
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import MainRouter from './Router/MainRouter';
import AdminRouter from './Router/AdminRouter';
import Navbar from './components/Navbaar/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getuserdetails, resetAuthNotification, selectAuthErrorStatus, selectAuthMessage } from './Redux/features/authenticationSlice';
import 'react-toastify/dist/ReactToastify.css';
import {
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51L2wFuSIakMfogRlBv6oKJ2I8URD64dOgagmMLemBzxpRrNF2lAmcZPG76ywDHAOX07pOvEPmKosjUjqFxdaBEsG00QuC1gacQ');
function App() {
  const location = useLocation()
  const [isAdmin, setAdmin] = useState(false);
  const authErrorStatus = useSelector(selectAuthErrorStatus);
  const authMessage = useSelector(selectAuthMessage)
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
    if (location.pathname.split('/').includes('admin-panel')) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [location])

  useEffect(() => {
    if (authMessage) {
      if (authErrorStatus) {
        toast.error(authMessage)
      } else {
        toast.success(authMessage)
      }
      dispatch(resetAuthNotification());
    }
  }, [authErrorStatus, authMessage])

useEffect(() => {
  if (localStorage.getItem("token")) {
    dispatch(getuserdetails());
  } 
  }, [])

  return (
    <Elements stripe={stripePromise}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      {
        !isAdmin &&
        <Navbar />
      }
      <MainRouter />
      <AdminRouter />
    </Elements>
  );
}

export default App;
