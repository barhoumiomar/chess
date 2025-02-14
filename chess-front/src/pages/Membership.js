import React, { useState } from "react";
import "./Membership.css"; 

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    plan: "premium",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Membership request submitted successfully!");
  };

  return (
    <div className="membership-container">
      <h1>Membership</h1>
      <p className="p">
        Join Chess Club today and enjoy exclusive benefits, including access to tournaments, training sessions, and a vibrant community of chess lovers.
      </p>

      <h2>Membership Plans</h2>
      <ul className="membership-list">
        <li><strong>Basic Plan:</strong> Free access to online resources and forums.</li>
        <li><strong>Premium Plan:</strong> $10/month - Access to all events, training sessions, and exclusive content.</li>
        <li><strong>Pro Plan:</strong> $20/month - All Premium benefits plus one-on-one coaching sessions.</li>
      </ul>

      <h2>Upgrade to Premium</h2>
      <form onSubmit={handleSubmit} className="membership-form">
        <label>Full Name</label>
        <input 
          type="text" 
          name="fullName" 
          placeholder="Enter your full name" 
          value={formData.fullName} 
          onChange={handleChange} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Phone Number</label>
        <input 
          type="tel" 
          name="phone" 
          placeholder="Enter your phone number" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />

        <label>Select Plan</label>
        <select name="plan" value={formData.plan} onChange={handleChange}>
          <option value="premium">Premium - $10/month</option>
          <option value="pro">Pro - $20/month</option>
        </select>

        <h4 className="paymenttext">Payment Details</h4>
        <label>Card Number</label>
        <input 
          type="text" 
          name="cardNumber" 
          placeholder="Enter your card number" 
          value={formData.cardNumber} 
          onChange={handleChange} 
          required 
        />

        <div className="row">
          <div>
            <label>Expiry Date</label>
            <input 
              type="text" 
              name="expiryDate" 
              placeholder="MM/YY" 
              value={formData.expiryDate} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>CVV</label>
            <input 
              type="text" 
              name="cvv" 
              placeholder="CVV" 
              value={formData.cvv} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Membership;
