import React from "react";
import "./Membership.css"; 

const Membership = () => {
  
  return (
    <div className="membership-container">
      <h1>Membership</h1>
      <p>
        Join Chess Club today and enjoy exclusive benefits, including access to tournaments, training sessions, and a vibrant community of chess lovers.
      </p>
      <h2>Membership Plans</h2>
      <ul>
        <li><strong>Basic Plan:</strong> Free access to online resources and forums.</li>
        <li><strong>Premium Plan:</strong> $10/month - Access to all events, training sessions, and exclusive content.</li>
        <li><strong>Pro Plan:</strong> $20/month - All Premium benefits plus one-on-one coaching sessions.</li>
      </ul>
    </div>
  );
};

export default Membership;