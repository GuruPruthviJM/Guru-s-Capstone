import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPayment } from "../../redux/customer_model/Payments/paymentActions";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify"; // ✅ Toast Notifications
import "react-toastify/dist/ReactToastify.css";
import "../../CSS/customer_module/PurchaseSubcription.css";

const Payment = () => {
  const [customerId, setCustomerId] = useState("");
  const [paymentType, setPaymentType] = useState("GPay");
  const [purchaseItem, setPurchaseItem] = useState("Customer-Experience-Transformation");
  const [amount, setAmount] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [prevLoading, setPrevLoading] = useState(false); // ✅ Track previous loading state

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.payments);

  const { id: urlCustomerId } = useParams();

  const itemPrices = {
    "Customer-Experience-Transformation": 500,
    "Data-and-AI": 700,
    "Product-and-Platform-Engineering": 1000,
    "Global-Design-Studio": 1200,
    "Digital-Transformation-Consulting": 1500,
    "Infrastructure-Cloud-and-Security": 1800
  };

  // ✅ Auto-fill customerId from URL
  useEffect(() => {
    setCustomerId(urlCustomerId || "");
  }, [urlCustomerId]);

  // ✅ Update amount when purchase item changes
  useEffect(() => {
    setAmount(itemPrices[purchaseItem] || "");
  }, [purchaseItem]);

  // ✅ Track payment success & show toast notifications
  useEffect(() => {
    if (prevLoading && !loading && !error) {
      toast.success("Payment Successful!", { position: "top-right" });

      // ✅ Reset form on success
      setCustomerId(urlCustomerId);
      setPaymentType("GPay");
      setPurchaseItem("Customer-Experience-Transformation");
      setAgreeTerms(false);
    }

    if (error) {
      toast.error(error, { position: "top-right" });
    }

    setPrevLoading(loading); // ✅ Track previous loading state
  }, [loading, error]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!agreeTerms) {
      toast.warn("You must agree to the terms and conditions!", { position: "top-right" });
      return;
    }

    if (customerId !== urlCustomerId) {
      toast.error("Customer ID does not match the URL parameter!", { position: "top-right" });
      return;
    }

    const paymentData = { customerId, paymentType, department: purchaseItem, amount };
    dispatch(createPayment(urlCustomerId, paymentData));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="paymentCard p-4 shadow">
        <h2 className="h2-payment">Payment Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Customer ID:
              <input 
                type="text" 
                className="form-control" 
                value={customerId} 
                readOnly // ✅ Prevent manual edits
                required 
              />
            </label>
          </div>

          <div className="form-group">
            <label className="form-label">Payment Type:
              <select 
                className="form-control" 
                value={paymentType} 
                onChange={(e) => setPaymentType(e.target.value)} 
                required
              >
                <option value="GPay">GPay</option>
                <option value="PhonePe">PhonePe</option>
                <option value="Paytm">Paytm</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label className="form-label">Purchase Item:
              <select 
                className="form-control" 
                value={purchaseItem} 
                onChange={(e) => setPurchaseItem(e.target.value)} 
                required
              >
                {Object.keys(itemPrices).map(item => (
                  <option key={item} value={item}>{item.replace(/-/g, " ")}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-group">
            <label className="form-label">Amount (in Rs):
              <input 
                type="number" 
                className="form-control" 
                value={amount} 
                readOnly 
                style={{ backgroundColor: "#f8f9fa", cursor: "not-allowed" }} // ✅ Improve UX
                required 
              />
            </label>
          </div>

          <div className="form-group form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="terms" 
              checked={agreeTerms} 
              onChange={(e) => setAgreeTerms(e.target.checked)} 
              required 
            />
            <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Processing..." : "Pay"}
          </button>
        </form>

        {/* ✅ Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Payment;
