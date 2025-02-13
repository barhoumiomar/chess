import React from "react";
import "./Watch.css"; // Import CSS for styling

const Watch = ({user}) => {
  const videos = [
    { id: 1, title: "Chess Openings Explained", embedId: "8IlJ3v8I4Z8" },
    { id: 2, title: "Top 10 Checkmate Patterns", embedId: "rwGHKfE39mg" },
    { id: 3, title: "How to Play the Sicilian Defense", embedId: "qM4e7g2RukI" },
    { id: 4, title: "Magnus Carlsen's Best Games", embedId: "fKRQT5-wAmg" },
    { id: 5, title: "Magnus Carlsen vs Alireza Firouzja", embedId: "1WEyUZ1SpHY" },
    { id: 6, title: "chess tricks", embedId: "yhBY1K6-aWE" },
    { id: 7, title: "learn the french defense", embedId: "5pec-u6PSvA" },
    { id: 8, title: "Best Chess Player: Garry Kasparov?", embedId: "dJ6P2qTbE48" },
    { id: 9, title: "WIN EVERY GAME With This Opening", embedId: "VDUIyv7--SU" },
    { id: 10, title: "Win Chess Game in Just 7 Moves Using this Trick!", embedId: "3uO3wezHpSQ" },
    { id: 11, title: "The 4 BEST Openings for white", embedId: "c9-Nlqy7wxg" },
    { id: 12, title: "The 4 BEST Openings for black", embedId: "yixL2I7s6co" },
    { id: 13, title: "The ONLY Opening you need as Black", embedId: "5XyayUs6J1M" },
    { id: 14, title: "DOMINATE as Black with the Caro-Kann", embedId: "0p_881Nwoo4" },
    { id: 14, title: "La tactique que trop de 600 Elo ", embedId: "icCtQFIr89I" },
    
  ];
  if (!user) {
    return <div className="verify">Please log in to access this page.  <a href="/">login here</a></div>;
  }
  return (
    <div className="watch-container">
      <h1 className="watch-title">Watch Chess Videos</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="video-title">{video.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;
