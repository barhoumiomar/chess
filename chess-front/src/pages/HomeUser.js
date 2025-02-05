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
          <h2 className="section-title">Chess Series</h2>
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
    </div>
  );
};

export default HomeUser;
