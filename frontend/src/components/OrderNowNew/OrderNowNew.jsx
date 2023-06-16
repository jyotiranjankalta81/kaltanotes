import React from 'react'
import './OrderNowNew.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import OrderCard from './OrderCard/OrderCard'
import orderCollection from '../../JSONCollection/orderCollection'

function OrderNowNew () {
  return (
    <>
      <Header />
      <section className='Order-new-Section'>
        <div className='Order-new-page'>
          <p className='p1-order'>
            Now you can order Explanation Report with your Kalta/CBSA Notes.
            Scroll down the page to see details.
          </p>
          <p className='p2-order'>
            After the successful payment, if there is any issue with the order,
            please login to your account and fill the Missing Order Form under
            order status tab.
          </p>
          <p className='p3-order'>
            Please select the type of Notes you would like to order. In case you
            need CSIS Notes or any other information from an institution/agency
            in Canada, please use the contact form.
          </p>
        </div>
      </section>

      <section className='order-cards-wrapper'>
        {orderCollection.map((order, index) => (
          <OrderCard cardData={order} key={index} />
        ))}
      </section>
      <Footer />
    </>
  )
}

export default OrderNowNew
