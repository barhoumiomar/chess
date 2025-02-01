import React from "react";

const Home = () => {
  return (
    
    <div style={styles.container}>
      <div style={styles.mainContent}>
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

        {/* Chess History Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>The History of Chess</h2>
          <p style={styles.sectionText}>
            Chess, one of the oldest and most popular board games, has a rich history that dates back over 1,500 years. Originating in India as "Chaturanga," the game spread to Persia, where it became known as "Shatranj." From there, it traveled to Europe, evolving into the modern game we know today.
          </p>
          <p style={styles.sectionText}>
            Chess is more than just a game; it's a battle of wits, strategy, and foresight. It has been played by kings, scholars, and enthusiasts alike, transcending cultures and generations. Today, chess is recognized as a sport by the International Olympic Committee and is celebrated worldwide for its intellectual depth and beauty.
          </p>
        </div>

        {/* Chess Series Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Chess Series</h2>
          <p style={styles.sectionText}>Explore our curated series to deepen your chess knowledge and sharpen your skills.</p>
          <div style={styles.seriesContainer}>
            <div style={styles.seriesCard}> 
              <img
                src="https://images.unsplash.com/photo-1505762299457-5a2c97a8fbe9"
                alt="Tutorial Series"
                style={styles.seriesImage}
              />
              <h3 style={styles.seriesTitle}>Chess Basics Series</h3>
              <p style={styles.seriesDescription}>Learn the fundamentals of chess, from rules to strategies, in our beginner-friendly series.</p>
              <a href="/series/basics" style={styles.seriesLink}>Start Series</a>
            </div>

            <div style={styles.seriesCard}>
              <img
                src="https://images.unsplash.com/photo-1517243130814-7dbfdfddc7b1"
                alt="Expert Games Series"
                style={styles.seriesImage}
              />
              <h3 style={styles.seriesTitle}>Master Game Analysis</h3>
              <p style={styles.seriesDescription}>Dive into legendary chess games and understand the thought process of grandmasters.</p>
              <a href="/series/master-games" style={styles.seriesLink}>Watch Now</a>
            </div>

            <div style={styles.seriesCard}>
              <img
                src="https://images.unsplash.com/photo-1505478365455-df19b9c58c5f"
                alt="Chess Tactics Series"
                style={styles.seriesImage}
              />
              <h3 style={styles.seriesTitle}>Chess Tactics & Strategies</h3>
              <p style={styles.seriesDescription}>Hone your tactical skills with in-depth lessons on forks, pins, skewers, and more.</p>
              <a href="/series/tactics" style={styles.seriesLink}>Learn Tactics</a>
            </div>
          </div>
        </div>

        {/* Other Sections */}
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
      </div>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.article}>
          <h3 style={styles.articleTitle}>How to Improve Your Chess Skills</h3>
          <p style={styles.articleText}>
            Improve your chess skills by practicing regularly, studying tactics, and reviewing your games. Here's a guide on how to start:
            <ul>
              <li>Focus on your opening strategy.</li>
              <li>Learn key endgame techniques.</li>
              <li>Play against stronger opponents.</li>
            </ul>
          </p>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>Top 10 Chess Books for Beginners</h3>
          <p style={styles.articleText}>
            Discover the best books that will help you develop a solid chess foundation and improve your strategy:
            <ol>
              <li>"Bobby Fischer Teaches Chess" by Bobby Fischer</li>
              <li>"Chess for Dummies" by James Eade</li>
              <li>"The Complete Idiot's Guide to Chess" by Patrick Wolff</li>
            </ol>
          </p>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>Famous Chess Players Throughout History</h3>
          <p style={styles.articleText}>
            Learn about the greatest chess players who shaped the game and became legends in the chess world, such as:
            <ul>
              <li>Bobby Fischer</li>
              <li>Garry Kasparov</li>
              <li>Magnus Carlsen</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  mainContent: {
    flex: 1,
    marginRight: "20px",
  },
  sidebar: {
    flex: 0.35,
    backgroundColor: "#fff",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px",
    position: "sticky",
    top: "12",
    height: "fit-content",
  },
  title: {
    fontSize: "48px",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "'Georgia', serif",
    fontWeight: "bold",
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
    transition: "transform 0.3s ease",
  },
  seriesContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  seriesCard: {
    width: "30%",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    textAlign: "center",
  },
  seriesImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  seriesTitle: {
    fontSize: "20px",
    color: "#333",
    marginTop: "10px",
  },
  seriesDescription: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  seriesLink: {
    textDecoration: "none",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "5px",
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
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#555",
    transform: "scale(1.05)",
  },
  imageContainer: {
    margin: "40px 0",
  },
  image: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  article: {
    marginBottom: "20px",
  },
  articleTitle: {
    fontSize: "22px",
    color: "#333",
    marginBottom: "10px",
    fontFamily: "'Georgia', serif",
  },
  articleText: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
    fontFamily: "'Arial', sans-serif",
  },
};

export default Home;
