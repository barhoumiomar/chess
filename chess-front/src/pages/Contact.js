import React from "react";
import { QRCodeSVG } from "qrcode.react"; // Import QRCodeSVG
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const email = "contact@chessclub.com";
  const emailLink = `mailto:${email}`;

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? We'd love to hear from you! Reach out to us via email, phone, or visit our club in person.
      </p>
      <ul>
        <li><strong>Email:</strong> <a href={emailLink}>{email}</a></li>
        <li><strong>Phone:</strong> +216 33 205 205</li>
        <li><strong>Address:</strong> 123 Chess Avenue, Chess City, CC 12345</li>
      </ul>
      
      {/* QR Code Section */}
      <div className="qr-code-container">
        <h2>Scan to Email Us</h2>
        <QRCodeSVG value={emailLink} size={228} className="qr-code" /> {/* Add className to QRCodeSVG */}
      </div>
    </div>
  );
};

export default Contact;