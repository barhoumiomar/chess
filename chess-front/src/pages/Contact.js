import React from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? We'd love to hear from you! Reach out to us via email, phone, or visit our club in person.
      </p>
      <ul>
        <li><strong>Email:</strong> contact@chessclub.com</li>
        <li><strong>Phone:</strong> +216 33 205 205</li>
        <li><strong>Address:</strong> 123 Chess Avenue, Chess City, CC 12345</li>
      </ul>
    </div>
  );
};

export default Contact;