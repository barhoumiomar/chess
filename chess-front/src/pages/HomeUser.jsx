import React, { useState } from "react";

const HomeUser = ({ user }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h2 style={styles.greeting}>
          Hey ! welcome back <span style={styles.username}>{user.username}</span>! how are you today?
        </h2>

        {/* Get Started Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Get Started ! </h2>
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

        {/* Chess Championships 2025 Section */}
        <div style={styles.championshipSection}>
          <h2 style={styles.sectionTitle}>Chess Championships 2025</h2>
          <p style={styles.sectionText}>
            Stay updated with the latest news and insights on the 2025 Chess Championships. The year promises some of the most exciting games with top grandmasters competing for the crown.
          </p>

          {/* Flex container to arrange articles in columns */}
          <div style={styles.articleContainer}>
            {/* Article 1 */}
            <div style={styles.article}>
              <h3 style={styles.articleTitle}>Gukesh Scores 5th Win! Abdusattorov, Praggnanandhaa In Hot Pursuit</h3>
              <p style={styles.articleText}>
                GM Gukesh Dommaraju pounced on a far from obvious mistake by GM Max Warmerdam to retain the sole lead on 7.5/10 going into the final 2025 Tata Steel Chess Masters rest day...
              </p>
              <a href="https://www.chess.com/news/view/2025-tata-steel-chess-round-10" style={styles.articleLink}>Read More</a>
            </div>

            {/* Article 2 */}
            <div style={styles.article}>
              <h3 style={styles.articleTitle}>King Of Bullet Brawl Returns To Win 35th Title</h3>
              <p style={styles.articleText}>
                The king of Bullet Brawl, GM Hikaru Nakamura, returned to the top of Chess.com's high-speed titled arena on Saturday, claiming the $400 first prize and extending his all-time win count to 35...
              </p>
              <a href="https://www.chess.com/news/view/hikaru-nakamura-wins-bullet-brawl-february-1-2025" style={styles.articleLink}>Read More</a>
            </div>

            {/* Article 3 */}
            <div style={styles.article}>
              <h3 style={styles.articleTitle}>Carlsen Returns To Classical, Set For 1st Meeting With World Champion Gukesh</h3>
              <p style={styles.articleText}>
                The 13th edition of Norway Chess will see the first classical meeting between World Champion GM Gukesh Dommaraju and world number-one GM Magnus Carlsen...
              </p>
              <a href="https://www.chess.com/news/view/2025-norway-chess-announced-carlsen-faces-world-champion-gukesh" style={styles.articleLink}>Watch Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    backgroundImage: "url('https://c1.wallpaperflare.com/preview/979/274/351/chess-chess-men-game-chess-pieces.jpg')",
  },
  mainContent: {
    flex: 1,
    marginRight: "20px",
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
  championshipSection: {
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  },
  articleContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // This creates the columns dynamically
    gap: "20px",
    marginTop: "20px",
  },
  article: {
    backgroundColor: "#0968AF",
    color: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  articleTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  articleText: {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "15px",
  },
  articleLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
  showMoreContainer: {
    marginTop: "20px",
  },
  showMoreButton: {
    backgroundColor: "#0968AF",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
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
};

export default HomeUser;
