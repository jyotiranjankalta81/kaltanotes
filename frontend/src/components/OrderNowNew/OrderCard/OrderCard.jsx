import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OrderCard.css";

export default function OrderCard({ cardData }) {
  const navigate = useNavigate();
  const movetoContactus = () => {navigate('/contact')};

  return (
    <div className="order-card">
      <h2 className="order-card-title">{cardData.title}</h2>
      <ul className="order-card-points order-side-padding">
        {cardData.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="order-price-wrapper order-side-padding">
        <Link to={`${cardData.link}?payment=usd&ordertype=${cardData.type}`}>
          <button className="btn-price">USD: {cardData.USD}</button>
        </Link>
        <Link to={`${cardData.link}?payment=inr&ordertype=${cardData.type}`}>
          <button className="btn-price">INR: {cardData.INR}</button>
        </Link>
      </div>
      <span className="or-divider">OR</span>
      <p className="order-note order-side-padding">
        In case you are not able to use any of the above payment method please
        let us know{" "}
      </p>
      <button className="btn-price" onClick={movetoContactus}>
        Contact Us
      </button>
    </div>
  );
}
