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
          <h2 className="section-title">Chess Series</h2>
          <p className="section-text">
            Dive into our carefully crafted chess series to understand the game from beginner to advanced levels. Each series will take you through various chess tactics, strategies, and famous historical games.
          </p>
          <ul classN
          
          
          
          ame="list">
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

        {/* Chess Championships 2025 Section */}
        <div className="section-championships">
          <h2 className="section-title">Chess Championships 2025</h2>
          <p className="section-text">
            Stay updated with the latest news and insights on the 2025 Chess Championships. The year promises some of the most exciting games with top grandmasters competing for the crown.
          </p>

          {/* Flex container to arrange articles in columns */}
          <div className="article-container">
            {/* Article 1 */}
            <div className="article">
              <h3 className="article-title">Gukesh Scores 5th Win! Abdusattorov, Praggnanandhaa In Hot Pursuit</h3>
              <p className="article-text">
                GM Gukesh Dommaraju pounced on a far from obvious mistake by GM Max Warmerdam to retain the sole lead on 7.5/10 going into the final 2025 Tata Steel Chess Masters rest day...
              </p>
              <a href="https://www.chess.com/news/view/2025-tata-steel-chess-round-10" className="article-link">Read More</a>
            </div>

            {/* Article 2 */}
            <div className="article">
              <h3 className="article-title">King Of Bullet Brawl Returns To Win 35th Title</h3>
              <p className="article-text">
                The king of Bullet Brawl, GM Hikaru Nakamura, returned to the top of Chess.com's high-speed titled arena on Saturday, claiming the $400 first prize and extending his all-time win count to 35...
              </p>
              <a href="https://www.chess.com/news/view/hikaru-nakamura-wins-bullet-brawl-february-1-2025" className="article-link">Read More</a>
            </div>

            {/* Article 3 */}
            <div className="article">
              <h3 className="article-title">Carlsen Returns To Classical, Set For 1st Meeting With World Champion Gukesh</h3>
              <p className="article-text">
                The 13th edition of Norway Chess will see the first classical meeting between World Champion GM Gukesh Dommaraju and world number-one GM Magnus Carlsen...
              </p>
              <a href="https://www.chess.com/news/view/2025-norway-chess-announced-carlsen-faces-world-champion-gukesh" className="article-link">Watch Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        {/* Top 10 Famous Players Section */}
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

        

        {/* Upcoming Events Section */}
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

        {/* News Section */}
        <div className="sidebar-section">
          <h2 className="sidebar-title">Latest Chess News</h2>
          <ul className="news-list">
            <li><a href="https://www.chess.com/news/view/latest-chess-news" className="news-link">Latest News</a></li>
            <li><a href="https://www.chess.com/news/view/famous-chess-games" className="news-link">Famous Games</a></li>
            <li><a href="https://www.chess.com/news/view/chess-tournaments" className="news-link">Upcoming Tournaments</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeUser;
