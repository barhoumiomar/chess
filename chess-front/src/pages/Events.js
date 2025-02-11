import React from "react";
import "./Events.css"; // Import the CSS file

const Events = () => {
  return (
    <div className="events-container">
      <h1>Events</h1>
      <p>
        Check out our upcoming events and tournaments! Whether you're looking to compete or just watch, there's something for everyone.
      </p>
      <ul>
        <li><strong>Tata Steel Chess Tournament:</strong> March 1, 2025</li>
        <li><strong>Grand Slam Chess Championship:</strong> April 10, 2025</li>
        <li><strong>FIDE World Cup:</strong> May 15, 2025</li>
      </ul>
    </div>
  );
};

export default Events;