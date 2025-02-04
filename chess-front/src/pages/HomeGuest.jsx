import React from "react";
const HomeGuest = () => {
  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h1 style={styles.title}>♟️ Welcome to ChessClub ♟️</h1>
        <h2 style={styles.subtitle}>Ready to make your next move? Log in to track your progress, save your games, and access exclusive chess puzzles!</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://c1.wallpaperflare.com/preview/979/274/351/chess-chess-men-game-chess-pieces.jpg')",
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
    maxWidth: "1000000000px",
    margin: "0 auto",
    backgroundColor: "transparent", // Light background for better readability
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "80px",
    color: "#F8E7BB",
    marginBottom: "20px",
    fontFamily: "'Georgia', serif",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "40px",
    color: "#F8E7BB",
    marginBottom: "30px",
    fontFamily: "'Arial', sans-serif",
  },
};

export default HomeGuest;
