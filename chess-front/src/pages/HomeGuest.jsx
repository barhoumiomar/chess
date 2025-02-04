import React from "react";
const HomeGuest = () => {
  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h1 style={styles.title}>♟️ Welcome to ChessClub ♟️</h1>
        <h2 style={styles.subtitle}>You need an account to see the site's content</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  },
  mainContent: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for better readability
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "80px",
    color: "#0968AF",
    marginBottom: "20px",
    fontFamily: "'Georgia', serif",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "40px",
    color: "#14afbe",
    marginBottom: "30px",
    fontFamily: "'Arial', sans-serif",
  },
};

export default HomeGuest;
