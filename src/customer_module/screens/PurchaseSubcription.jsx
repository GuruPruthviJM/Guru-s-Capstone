import { useState } from "react";
import '../../CSS/customer_module/PurchaseSubcription.css'; // Import the CSS file

const Payment = () => {
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentType, setPaymentType] = useState("GPay"); // Default value for the dropdown
  const [purchaseItem, setPurchaseItem] = useState("Subscription"); // Default purchase item
  const [amount, setAmount] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Sign Up Successful!\nCustomer ID: ${customerId}\nName: ${customerName}\nEmail: ${customerEmail}\nPayment Type: ${paymentType}\nPurchase Item: ${purchaseItem}\nAmount: ${amount}`);
  }

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
                onChange={(e) => setCustomerId(e.target.value)}
                placeholder="Enter customer ID"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Customer Name:
              <input
                type="text"
                className="form-control"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter customer name"
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Customer Email:
              <input
                type="email"
                className="form-control"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="Enter your email"
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
                <option value="Customer-Experience-Transformation">Customer Experience Transformation</option>
                <option value="Data-and-AI">Data and AI</option>
                <option value="Product-and-Platform-Engineering">Product and Platform Engineering</option>
                <option value="Global-Design-Studio">Global Design Studio</option>
                <option value="Digital-Transformation-Consulting">Digital Transformation Consulting</option>
                <option value="Infrastructure-Cloud-and-Security">Infrastructure, Cloud, and Security</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label className="form-label">Amount:
              <input
                type="number"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
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
          <button type="submit" className="btn btn-primary">Pay</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
