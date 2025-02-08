import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../CSS/customer_module/CustomerHome.css"

export default function Card(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBuyClick = (event) => {
    event.stopPropagation();
    if (location.pathname.includes("customers")) {
      navigate("/payment");
    }else{
      navigate("/customers/login");
    }
  }

  return (
    <div className="col-md-4 mb-4">
      <div className="card" onClick={props.onClick}>
        <div className="card-body">
          <div className="card-red">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
          </div>
          <p className="card-text">{props.text}</p>
          {props.isActive && (
            <div className="buy-button">
              <button className="btn btn-color" onClick={handleBuyClick}>Buy - {props.price}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}