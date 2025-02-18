import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayments } from "../../redux/customer_model/Payments/paymentActions";
import { useParams, useNavigate } from "react-router-dom";
import "../../CSS/customer_module/MyTicket.css";


const PaymentList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { payments, loading, error } = useSelector((state) => state.payments);
  
  const { id: customerId } = useParams(); 

  useEffect(() => {
    if (customerId) {
      dispatch(fetchPayments(customerId));
    }
  }, [dispatch, customerId]);

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 text-danger">Error: {error}</div>;
  if (!payments || payments.length === 0) return <div className="container mt-5">No payments available</div>;

  return (
    <div className="container mt-5">
      <h2>My Payments</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Amount</th>
              <th>Subscribed To</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td style={{ color: "blue" }}>{payment.payId}</td>
                <td>{payment.amount}</td>
                <td>{payment.department}</td>
                <td>{new Date(payment.paymentDate).toLocaleDateString("en-GB")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentList;
