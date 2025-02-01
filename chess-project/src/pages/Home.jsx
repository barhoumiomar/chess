// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Chess Learning!</h1>
      <p style={styles.subtitle}>Learn chess from zero to hero, practice your skills, and test your knowledge with quizzes.</p>

      {/* Chessboard Image */}
      <div style={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          alt="Chessboard"
          style={styles.image}
        />
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>The History of Chess</h2>
        <p style={styles.sectionText}>
          Chess, one of the oldest and most popular board games, has a rich history that dates back over 1,500 years. Originating in India as "Chaturanga," the game spread to Persia, where it became known as "Shatranj." From there, it traveled to Europe, evolving into the modern game we know today.
        </p>
        <p style={styles.sectionText}>
          Chess is more than just a game; it's a battle of wits, strategy, and foresight. It has been played by kings, scholars, and enthusiasts alike, transcending cultures and generations. Today, chess is recognized as a sport by the International Olympic Committee and is celebrated worldwide for its intellectual depth and beauty.
        </p>
      </div>

      {/* Chess Pieces Image */}
      <div style={styles.imageContainer}>
        <img
          src="https://cdn11.bigcommerce.com/s-5p6k1/images/stencil/1280x1280/products/6811/70471/chess-set-classic-staunton-brown-white-both-pieces-1500x1360__64862.1713998378.jpg?c=2"
          alt="Chess Pieces"
          style={styles.image}
        />
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Chess is the Best Game in the World</h2>
        <p style={styles.sectionText}>
          Chess is often called the "game of kings" because it challenges the mind like no other game. Here is why chess stands out:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>🧠 <strong>Mental Exercise:</strong> Chess improves memory, problem-solving skills, and critical thinking.</li>
          <li style={styles.listItem}>🌍 <strong>Universal Appeal:</strong> Chess is played and loved by millions of people worldwide, regardless of age, language, or culture.</li>
          <li style={styles.listItem}>🏆 <strong>Competitive Spirit:</strong> Chess tournaments bring together the best minds to compete at the highest level.</li>
          <li style={styles.listItem}>🎨 <strong>Art and Science:</strong> Chess combines the creativity of art with the logic of science, making it a unique intellectual pursuit.</li>
          <li style={styles.listItem}>🤝 <strong>Social Connection:</strong> Chess fosters friendships and connections across the globe.</li>
        </ul>
      </div>

      {/* Historical Chess Set Image */}
      <div style={styles.imageContainer}>
        <img
          src="https://www.chesshouse.com/cdn/shop/products/house-of-hauteville-chess-set-and-board-combo-antique-white-and-brown-marble-28294420004951.jpg?v=1654373634&width=900"
          alt="Historical Chess Set"
          style={styles.image}
        />
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Get Started</h2>
        <p style={styles.sectionText}>
          Ready to dive into the world of chess? Explore our lessons, practice on the chessboard, and test your skills with quizzes.
        </p>
        <div style={styles.buttonContainer}>
          <a href="/lessons" style={styles.button}>Start with Lessons</a>
          <a href="/practice" style={styles.button}>Practice on the Chessboard</a>
          <a href="/quiz" style={styles.button}>Take a Quiz</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "48px",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "'Georgia', serif",
  },
  subtitle: {
    fontSize: "20px",
    color: "#555",
    marginBottom: "40px",
    fontFamily: "'Arial', sans-serif",
  },
  section: {
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto 40px",
  },
  sectionTitle: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "'Georgia', serif",
  },
  sectionText: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  list: {
    textAlign: "left",
    listStyleType: "none",
    padding: "0",
  },
  listItem: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "10px",
    fontFamily: "'Arial', sans-serif",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  button: {
    padding: "15px 30px",
    backgroundColor: "#333",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "18px",
    fontFamily: "'Arial', sans-serif",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#555",
  },
  imageContainer: {
    margin: "40px 0",
  },
  image: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Home;