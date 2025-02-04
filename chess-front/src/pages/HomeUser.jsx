import React from "react";

const HomeUser = ({ user }) => {
  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h2 style={styles.greeting}>
          Hey ! welcome back <span style={styles.username}>{user.username}</span>! how are you today?
        </h2>

        {/* Get Started Section */}
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

        {/* Chess Series Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Chess Series</h2>
          <p style={styles.sectionText}>
            Dive into our carefully crafted chess series to understand the game from beginner to advanced levels. Each series will take you through various chess tactics, strategies, and famous historical games.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              🌟 <strong>Beginner's Guide:</strong> Learn the basic rules, movements, and setups for chess.
              <a href="" style={styles.link}>tutorial chess</a>
            </li>
            <li style={styles.listItem}>
              🔍 <strong>Intermediate Tactics:</strong> Master intermediate strategies like pins, forks, and skewers.
              <a href="https://www.youtube.com/watch?v=goW1cFHaxtU" style={styles.link}>intermediate tactics</a>
            </li>
            <li style={styles.listItem}>
              🏆 <strong>Advanced Techniques:</strong> Explore high-level strategies used by grandmasters.
              <a href="https://www.youtube.com/watch?v=fGFl4GjVvrA" style={styles.link}>advanced techniques</a>
            </li>
            <li style={styles.listItem}>
              🎓 <strong>Famous Chess Games:</strong> Analyze some of the most famous games in chess history.
              <a href="https://www.youtube.com/watch?v=LzmSy2N5GaQ" style={styles.link}>Famous chess Games</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
  },
  overlay: {
    content: "",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: "-1",
  },
  mainContent: {
    flex: 1,
    marginRight: "20px",
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
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  greeting: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  username: {
    color: "#0968AF",
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
    fontWeight: "bold",
  },
  sectionText: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
  link: {
    color: "#0968AF",
    textDecoration: "none",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  button: {
    backgroundColor: "#0968AF",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    textDecoration: "none",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba( 0, 0, 0, 0.1)", 
    fontWeight: "bold",
    transition: "background-color 0.3s, transform 0.3s",
  },
  buttonHover: {
    backgroundColor: "#14afbe",
    transform: "scale(1.05)",
  },
  linkHover: {
    color: "#14afbe",
  },
};

export default HomeUser;
