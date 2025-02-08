import React, { useState } from "react";
import "./HomeUser.css"; // Import the CSS file

const HomeUser = ({ user }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Sample list of famous players and their careers
  const topPlayers = [
    { name: "Magnus Carlsen", career: "World Champion since 2013, Grandmaster" },
    { name: "Garry Kasparov", career: "Former World Champion, Grandmaster" },
    { name: "Bobby Fischer", career: "World Champion 1972, Grandmaster" },
    { name: "Anatoly Karpov", career: "World Champion 1975–1985, Grandmaster" },
    { name: "Hikaru Nakamura", career: "Top player in Bullet Chess, Grandmaster" },
    { name: "Viswanathan Anand", career: "World Champion 2000–2002, Grandmaster" },
    { name: "Levon Aronian", career: "Top 5 player, Grandmaster" },
    { name: "Wang Hao", career: "Top Chinese player, Grandmaster" },
    { name: "Ding Liren", career: "Top Chinese player, World Championship contender" },
    { name: "Fabiano Caruana", career: "World Championship contender, Grandmaster" },
  ];

  // Upcoming events
  const upcomingEvents = [
    { name: "Tata Steel Chess Tournament 2025", date: "March 1, 2025" },
    { name: "Grand Slam Chess Championship", date: "April 10, 2025" },
    { name: "FIDE World Cup", date: "May 15, 2025" },
  ];

  return (
    <div className="home-user-container">
      {/* Left Sidebar */}
      
      <div className="left-sidebar">
        <div className="sidebar-section">
          <h2 className="sidebar-title">Upcoming Events</h2>
          <ul className="events-list">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="event-item">
                <strong>{event.name}</strong> - {event.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <h2 className="sidebar-title">Latest Chess News</h2>
          <ul className="news-list">
            <li><a href="https://www.chess.com/news/view/latest-chess-news" className="news-link">Latest News</a></li>
            <li><a href="https://www.chess.com/news/view/famous-chess-games" className="news-link">Famous Games</a></li>
            <li><a href="https://www.chess.com/news/view/chess-tournaments" className="news-link">Upcoming Tournaments</a></li>
          </ul>
        </div>
      </div>

      {/* Main Content (Center) */}
      <div className="main-content">
        <h2 className="greeting">
          Hey! Welcome back <span className="username">{user.username}</span>! How are you today?
        </h2>

        {/* Get Started Section */}
        <div className="section get-started">
          <h2 className="section-title">Get Started!</h2>
          <p className="section-text">
            Ready to dive into the world of chess? Explore our lessons, practice on the chessboard, and test your skills with quizzes.
          </p>
          <div className="button-container">
            <a href="/lessons" className="button">Start with Lessons</a>
            <a href="/practice" className="button">Practice on the Chessboard</a>
            <a href="/quiz" className="button">Take a Quiz</a>
          </div>
        </div>

        {/* Chess Series Section */}
        <div className="section chess-series">
          <h2 className="section-title"> Series</h2>
          <p className="section-text">
            Dive into our carefully crafted chess series to understand the game from beginner to advanced levels. Each series will take you through various chess tactics, strategies, and famous historical games.
          </p>
          <ul className="list">
            <li className="list-item">
              🌟 <strong>Beginner's Guide:</strong> Learn the basic rules, movements, and setups for chess.
              <a href="" className="link">tutorial chess</a>
            </li>
            <li className="list-item">
              🔍 <strong>Intermediate Tactics:</strong> Master intermediate strategies like pins, forks, and skewers.
              <a href="https://www.youtube.com/watch?v=goW1cFHaxtU" className="link">intermediate tactics</a>
            </li>
            <li className="list-item">
              🏆 <strong>Advanced Techniques:</strong> Explore high-level strategies used by grandmasters.
              <a href="https://www.youtube.com/watch?v=fGFl4GjVvrA" className="link">advanced techniques</a>
            </li>
            <li className="list-item">
              🎓 <strong>Famous Chess Games:</strong> Analyze some of the most famous games in chess history.
              <a href="https://www.youtube.com/watch?v=LzmSy2N5GaQ" className="link">Famous chess Games</a>
            </li>
          </ul>
        </div>
        
      </div>
        
      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="sidebar-section">
          <h2 className="sidebar-title">Top 10 Famous Chess Players</h2>
          <ul className="player-list">
            {topPlayers.map((player, index) => (
              <li key={index} className="player-item">
                <strong>
                  <a
                    href={`https://en.wikipedia.org/wiki/${player.name.replace(" ", "_")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="player-link"
                  >
                    {player.name}
                  </a>
                </strong> - {player.career}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      {/* Chess Images Section */}
<div className="chess-carousel">
<h2 className="section-title">this is what you need to learn about chess</h2>

  <div className="chess-images-container">
    <div className="chess-image">
      <p className="image-caption">Famous chess openings</p>
      <img
        src="https://i1.wp.com/chesspathways.com/wp-content/uploads/2019/08/1a-300x300.png?ssl=1"
        alt="Chess Board"
        className="image"
      />
    </div>
    <div className="chess-image">
      <p className="image-caption">How to checkmate only with two bishops</p>
      <img
        src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpsOI19f.png"
        alt="Chess Pieces"
        className="image"
      />
    </div>
    <div className="chess-image">
      <p className="image-caption">4 Move Checkmate: How to Win Chess in 4 Moves</p>
      <img
        src="https://herculeschess.com/wp-content/uploads/2020/04/bc4.png"
        alt="Chess Strategy"
        className="image"
      />
    </div>
    <div className="chess-image">
      <p className="image-caption"> 10 Brutal Chess Tactics For Beginners </p>
      <img
        src="https://files.herculeschess.com/file/herculeschess/2020/04/fried-300x298.png"
        alt="Chess Strategy"
        className="image"
      />
    </div>
    <div className="chess-image">
      <p className="image-caption">beautiful trap </p>
      <img
        src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpRA1aXs.png"
        alt="Chess Strategy"
        className="image"
      />
    </div>
    <div className="chess-image">
      <p className="image-caption">nice trap </p>
      <img
        src="https://files.herculeschess.com/file/herculeschess/2020/04/Picture8-300x300.png"
        alt="Chess Strategy"
        className="image"
      />
    </div>
    <div className="chess-image">
      <p className="image-caption">threatening king and rook </p>
      <img
        src="https://thechessworld.com/wp-content/uploads/2020/12/fork-300x300.jpg"
        alt="Chess Strategy"
        className="image"
      />
    </div>
    <div className="chess-image">
      <p className="image-caption">free queen</p>
      <img
        src="https://chesseasy.com/wp-content/uploads/2022/01/10.jpeg"
        alt="Chess Strategy"
        className="image"
      />
    </div>
    <div className="chess-image">
      <p className="image-caption"> beautiful fork</p>
      <img
        src="https://chesspuzzle.net/Images/Blog/medium/GcArrows.png"
        alt="Chess Strategy"
        className="image"
      />
    </div>
  </div>
</div>



      {/* Articles Section */}
<div className="section articles-section">
  
  <div className="article-container">
    {/* Article 1 */}
    <div className="article">
      <h3 className="article-title">The Evolution of Chess</h3>
      <p className="article-text">
        Chess has evolved over centuries, from its origins in India to the modern game we know today. Learn about its fascinating history.
      </p>
      <a href="https://en.wikipedia.org/wiki/History_of_chess" className="article-link">Read More</a>
    </div>

    {/* Article 2 */}
    <div className="article">
      <h3 className="article-title">Top Chess Openings</h3>
      <p className="article-text">
        Discover the most popular chess openings used by grandmasters and how they can improve your game.
      </p>
      <a href="https://www.chess.com/openings" className="article-link">Read More</a>
    </div>

    {/* Article 3 */}
    <div className="article">
      <h3 className="article-title">The Psychology of Chess</h3>
      <p className="article-text">
        Chess is not just about strategy; it's also a mental battle. Explore the psychological aspects of the game.
      </p>
      <a href="https://www.psychologytoday.com/us/blog/the-intelligent-brain/201207/the-psychology-chess" className="article-link">Read More</a>
    </div>

    {/* Article 4 */}
    <div className="article">
      <h3 className="article-title">Chess and Artificial Intelligence</h3>
      <p className="article-text">
        How AI has revolutionized chess, from Deep Blue to AlphaZero. Learn about the impact of technology on the game.
      </p>
      <a href="https://en.wikipedia.org/wiki/Artificial_intelligence_in_chess" className="article-link">Read More</a>
    </div>
  </div>
  
</div>
<div className="chess-tutorials section">

  <div className="tutorial-guide article">
    <h3 className="guide-title article-title">Beginner's Guide to Chess</h3>
    <p className="guide-description article-text">
      If you're new to chess, don't worry—this guide will help you learn the basics. We cover everything from how the pieces move to basic strategies to get you started. By the end of this guide, you'll be able to play a basic game of chess and understand the rules behind each move.
    </p>
    <ul className="guide-points">
      <li><strong>How the Pieces Move:</strong> Learn the movement patterns for each piece—pawns, knights, bishops, rooks, queens, and kings.</li>
      <li><strong>Basic Chess Rules:</strong> Understand the rules of check, checkmate, castling, en passant, and pawn promotion.</li>
      <li><strong>First Steps in Playing:</strong> Learn the opening principles, controlling the center, and developing your pieces efficiently.</li>
      <li><strong>Simple Tactics:</strong> Get familiar with fundamental tactical motifs like forks, pins, and skewers.</li>
      <li><strong>How to Win:</strong> Understand the concept of checkmate and how to use your pieces to create a winning position.</li>
    </ul>
  </div>

  <div className="tutorial-guide article">
    <h3 className="guide-title article-title">Advanced  Strategies</h3>
    <p className="guide-description article-text">
      Once you've mastered the basics, it's time to delve into more advanced concepts and strategies. In this section, we will discuss different types of positions, plans, and advanced opening theory. Understanding these strategies will help you play at a higher level and win against more experienced opponents.
    </p>
    <ul className="guide-points">
      <li><strong>Positional Play:</strong> Learn how to evaluate positions based on piece activity, pawn structure, and space control.</li>
      <li><strong>Planning and Strategy:</strong> Develop a deeper understanding of how to form long-term plans and adjust them based on your opponent's moves.</li>
      <li><strong>Endgame Techniques:</strong> Master key endgame concepts like king and pawn versus king, opposition, and creating passed pawns.</li>
      <li><strong>Advanced Openings:</strong> Explore common opening systems such as the Ruy Lopez, Sicilian Defense, and Queen's Gambit, and understand their tactical ideas.</li>
      <li><strong>Calculation Skills:</strong> Improve your ability to calculate multiple moves ahead and assess different variations.</li>
    </ul>
  </div>

  <div className="tutorial-guide article">
    <h3 className="guide-title article-title">Chess Puzzles for Skill Improvement</h3>
    <p className="guide-description article-text">
      Puzzles are a fantastic way to improve your tactical vision and calculation skills. In this section, we offer a collection of puzzles of varying difficulty, each designed to challenge your thinking and improve your ability to spot tactical opportunities during real games.
    </p>
    <ul className="guide-points">
      <li><strong>Tactics Puzzles:</strong> Focus on recognizing forks, pins, skewers, discovered attacks, and more.</li>
      <li><strong>Endgame Puzzles:</strong> Practice how to checkmate with limited material and solve complex endgame positions.</li>
      <li><strong>Pattern Recognition:</strong> Solve puzzles to develop an intuition for common tactical patterns that appear frequently in games.</li>
      <li><strong>Time-Pressure Puzzles:</strong> Challenge yourself to solve puzzles quickly, simulating a real game scenario where you need to think fast.</li>
      <li><strong>Strategy Puzzles:</strong> Puzzles that require you to formulate a plan and execute it step by step to achieve victory.</li>
    </ul>
  </div>

  

<div className="tutorial-guide article">
  <h3 className="guide-title article-title">Brilliant Chess Moves</h3>
  <p className="guide-description article-text">
    Chess is not just a game of calculation, but also one of creativity and surprise. Over the years, many brilliant moves have astonished players and spectators alike. These moves often showcase extraordinary foresight, strategy, and tactical brilliance that set new benchmarks in the game.
  </p>
  <ul className="guide-points">
    <li><strong>Kasparov's Immortal Move (1999):</strong> In a game against Karpov, Garry Kasparov played a move that made even his opponent gasp. His 24th move, Qd5!, sacrificed his queen but led to an inevitable victory.</li>
    <li><strong>Fischer's Queen Sacrifice (1958):</strong> In his game against Donald Byrne, Bobby Fischer, at the age of 15, sacrificed his queen for a dazzling tactical combination that led to a spectacular checkmate.</li>
    <li><strong>Tal's Sacrifice of the Knight (1960):</strong> Mikhail Tal's sacrifice of a knight in a game against Karpov opened up his opponent's defenses, leading to an unstoppable attack and checkmate.</li>
    <li><strong>Magnus Carlsen's Rook Lift (2014):</strong> Magnus Carlsen's rook lift against Topalov in the 2014 World Chess Championship allowed him to dominate the center and launch an overwhelming attack, ultimately winning the game.</li>
    <li><strong>Deep Blue's Victory Over Kasparov (1997):</strong> In this historic match, IBM's Deep Blue played several brilliant moves that led to its victory, showcasing the potential of artificial intelligence in chess.</li>
  </ul>
</div>
<div className="tutorial-guide article">
  <h3 className="guide-title article-title">Famous Chess Moves</h3>
  <p className="guide-description article-text">
    Over the course of history, chess has witnessed numerous famous and game-changing moves that have gone down in history. These moves are not only great in their technical accuracy but also in their ability to surprise, strategize, and influence the course of the game.
  </p>
  <ul className="guide-points">
    <li><strong>Queen's Gambit (Played by multiple Grandmasters):</strong> One of the oldest and most respected openings, the Queen's Gambit involves a strategic sacrifice of a pawn for positional gain and control of the center of the board.</li>
    <li><strong>The King's Indian Defense (Played by Garry Kasparov):</strong> A defensive opening where Black aims to control the center with pawns while gradually building counterplay on the queenside.</li>
    <li><strong>The Ruy Lopez (Played by Bobby Fischer and others):</strong> This opening, one of the oldest in chess, begins with 1.e4 e5 2.Nf3 Nc6 3.Bb5 and leads to rich, complex positions with many variations.</li>
    <li><strong>The Sicilian Defense (Played by Magnus Carlsen):</strong> Known for its counter-attacking nature, the Sicilian Defense is often played at the highest level for its ability to create unbalanced positions and lead to dynamic play.</li>
    <li><strong>En Passant (Classic Tactical Move):</strong> A rarely seen but brilliant tactical move where a pawn can capture another pawn diagonally as it passes by an adjacent square. This unique rule was introduced in the 15th century.</li>
  </ul>
</div>
<div className="tutorial-guide article">
  <h3 className="guide-title article-title">How to Checkmate</h3>
  <p className="guide-description article-text">
    Understanding how to checkmate is one of the most important aspects of mastering chess. Checkmating your opponent means trapping their king in a position where it cannot escape capture, ending the game in victory. Here are some essential checkmating techniques:
  </p>
  <ul className="guide-points">
    <li><strong>Basic Checkmate with King and Queen:</strong> The simplest checkmate occurs when you have a king and a queen versus a lone king. The key is to force the opposing king to the edge of the board and deliver a check with the queen, supported by the king.</li>
    <li><strong>King and Rook vs. King:</strong> In this endgame, the goal is to use the rook to restrict the opposing king's movement and then checkmate using your king's support.</li>
    <li><strong>Back Rank Checkmate:</strong> This occurs when the opponent's king is trapped on the back rank, and your rook or queen moves in to deliver a check, often with the opponent's own pawns blocking the escape.</li>
    <li><strong>Smothered Mate:</strong> A smothered mate happens when the opposing king is surrounded by its own pieces, leaving it unable to escape. The checkmate is usually delivered by a knight.</li>
    <li><strong>Fool's Mate:</strong> The quickest checkmate in chess, achieved in just two moves by Black, involves White making poor opening moves that leave their king exposed. This illustrates the importance of thinking carefully from the start.</li>
  </ul>
</div><div className="tutorial-guide article">
  <h3 className="guide-title article-title">How to Think Like a Chess Player</h3>
  <p className="guide-description article-text">
    To become a great chess player, it's not just about memorizing openings or tactical motifs; it's about developing the right mindset. Here are some ways to think like a true chess player:
  </p>
  <ul className="guide-points">
    <li><strong>Think in Terms of Plans:</strong> Instead of just reacting to moves, focus on creating a long-term plan. Think about how your pieces work together and how to advance toward your goal, whether it's controlling the center, attacking the opponent's king, or preparing for an endgame.</li>
    <li><strong>Consider Your Opponent's Threats:</strong> Always ask yourself: "What is my opponent threatening?" Don't just look at your own moves. Consider how your opponent might respond to any given move and what threats they might be setting up.</li>
    <li><strong>Calculate Variations:</strong> Always try to calculate your moves and your opponent's responses ahead of time. A great chess player anticipates what might happen several moves ahead and prepares for all possibilities.</li>
    <li><strong>Stay Flexible:</strong> While planning is essential, be ready to change your approach based on the circumstances. Flexibility is key to adapting to your opponent's strategy and shifting the momentum in your favor.</li>
    <li><strong>Think Positional:</strong> Beyond material gain, think about the position of your pieces. Sometimes sacrificing material to gain a better position or create attacking chances is more important than simply capturing pieces.</li>
    <li><strong>Stay Calm Under Pressure:</strong> Chess is a game of concentration, and it can get intense. Maintaining composure during difficult situations, such as being in a losing position, is a vital trait of top players. Always look for ways to fight back, even when the situation seems dire.</li>
  </ul>
</div>
</div>

    </div>
  );
};

export default HomeUser;
