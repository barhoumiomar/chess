import React from "react";
import { useEffect,useState } from "react";
const Home = ({ user }) => {
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    if (user && user.username) {
      setGreetingMessage(`Hello ${user.username}, how are you today?`);
    } else {
      setGreetingMessage("Hello, Guest!");
    }
  }, [user]);

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
      <h1>Welcome to chessClub</h1>
      {user ? (
        <h2 style={styles.greeting}>Hello <span style={styles.username}>{user.username}</span>!</h2>
      ) : (
        <h2>Please log in to see personalized content.</h2>
      )}
        
        {/* Chessboard Image */}
        <div style={styles.imageContainer}>
          <img
            src="https://www.original-political-cartoon.com/media/filer_public_thumbnails/filer_public/2020/06/27/illingworth_chess.jpg__600x400_q85.jpg"
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
<div style={styles.section}>
  <h2 style={styles.sectionTitle}>The Relationship Between Chess and Philosophy</h2>
  <p style={styles.sectionText}>
    Chess and philosophy, at first glance, might seem like entirely different pursuits—one is a game, the other a discipline of thought. However, these two worlds are deeply connected in many ways. Both demand clarity of thought, an understanding of logic, and a strategy that can transcend the immediate to look at the bigger picture.
  </p>
  <p style={styles.sectionText}>
    In philosophy, the study of logic involves understanding patterns, relationships, and consequences—ideas that are at the core of chess. Philosophers like René Descartes, Immanuel Kant, and even the ancient Greek philosophers emphasized the importance of clear thinking, something that is mirrored in every move a chess player makes. Chess is often considered a metaphor for life: a battle of wits where strategy, decision-making, and foresight are essential.
  </p>
  <p style={styles.sectionText}>
    Chess requires the player to constantly question, analyze, and reconsider each move, not unlike how philosophical thinking challenges assumptions, pushes boundaries, and seeks the most rational outcomes. Just as a philosopher formulates arguments based on premises and conclusions, a chess player analyzes each position based on the current state of the game, eventually building to a solution. The game’s endless variations echo the infinite complexity of philosophical reasoning.
  </p>
  <p style={styles.sectionText}>
    Chess also teaches the value of patience and discipline—qualities that are emphasized in philosophy. The philosopher spends years contemplating ideas, carefully structuring arguments and considering every counterargument. Similarly, a skilled chess player practices, studies, and meticulously prepares for each game, anticipating every possible outcome. Whether in a game of chess or a philosophical debate, the journey is as important as the destination.
  </p>
  <div style={styles.imageContainer}>
    <img
      src="https://png.pngtree.com/thumb_back/fh260/background/20230414/pngtree-chess-player-achieving-success-surreal-and-conceptual-scene-of-a-tiny-photo-image_2423278.jpg"
      alt="Chess and Philosophy"
      style={styles.image}
    />
  </div>
  <p style={styles.sectionText}>
    For philosophers like Plato, chess can even be seen as a metaphor for the mind’s relationship with the world. Plato's "Allegory of the Cave" speaks to the notion of understanding reality through intellectual progress, and similarly, in chess, a player gradually increases their understanding of the game as they move from basic concepts to advanced strategies.
  </p>
  <p style={styles.sectionText}>
    In conclusion, chess and philosophy share a profound connection that extends beyond mere logic. Both are intellectual pursuits that foster deep thinking, strategic planning, and self-discipline. The next time you sit down at the chessboard, remember: each move is more than just a step toward checkmate—it's an exercise in the very philosophy of thought itself.
  </p>
</div>
     
        {/* Chess in Real Life Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Chess in Real Life</h2>
          <p style={styles.sectionText}>
            Chess is not just a game confined to the chessboard. It has significant real-life applications and has influenced various aspects of society. From improving cognitive skills to fostering strategic thinking in business and education, chess has far-reaching implications.
          </p>
          <p style={styles.sectionText}>
            Many renowned leaders and thinkers have used chess as a metaphor for strategy and decision-making. It is said that playing chess regularly can help improve memory, problem-solving skills, and concentration. Additionally, its ability to teach patience, perseverance, and the importance of planning makes it an excellent tool for personal growth.
          </p>
          <div style={styles.imageContainer}>
            {/* Replace this with your own image */}
            <img
              src="https://cartoonmovement.typepad.com/.a/6a014e5f5d3c7c970c02788021f334200d-pi"
              alt="Chess in Real Life"
              style={styles.image}
            />
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

        {/* New Sidebar Elements */}
        <div style={styles.article}>
          <h3 style={styles.articleTitle}>Chess Strategy Tips</h3>
          <p style={styles.articleText}>
            Mastering chess requires understanding key strategies. Here are a few tips to improve your game:
            <ul>
              <li>Control the center of the board early.</li>
              <li>Develop your pieces quickly.</li>
              <li>Don’t move the same piece multiple times in the opening.</li>
              <li>Look for tactical opportunities like pins and forks.</li>
            </ul>
          </p>
        </div>

        <div style={styles.article}>
          <h3 style={styles.articleTitle}>Chess Online Resources</h3>
          <p style={styles.articleText}>
            There are several online resources to help you practice and improve your chess skills:
            <ul>
              <li><a href="https://www.chess.com" target="_blank" style={styles.link}>Chess.com</a> - Play games and solve puzzles.</li>
              <li><a href="https://lichess.org" target="_blank" style={styles.link}>Lichess.org</a> - Free chess platform with tutorials and games.</li>
              <li><a href="https://www.chessbase.com" target="_blank" style={styles.link}>ChessBase</a> - Database of famous chess games and analysis tools.</li>
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
  link: {
    color: "#1a73e8", // Blue color for the link
    textDecoration: "none", // Remove underline
    fontWeight: "bold", // Make the text bold
    transition: "color 0.3s ease", // Smooth transition for hover effect
  },
  linkHover: {
    color: "#ff5733", // Change color on hover
    textDecoration: "underline", // Underline on hover
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  greeting: {
    fontSize: "2.5em",
    color: "#333",
    marginTop: "20px",
    fontWeight: "bold",
    animation: "fadeIn 1s ease-in-out",
  },
  username: {
    color: "#ff6f61", // This adds a pop of color to the username
    fontStyle: "italic",
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
  link: {
    color: "#1a73e8",
    textDecoration: "none",
  },
};

export default Home;
