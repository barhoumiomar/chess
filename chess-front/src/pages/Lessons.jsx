// src/pages/Lessons.jsx
import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

const Lessons = () => {
  const [currentLesson, setCurrentLesson] = useState(null);

  // Lessons data
  const lessons = [
    {
      id: 1,
      title: "Pawn",
      description: `
        The pawn is the most numerous piece in chess. It moves forward one square but captures diagonally. 
        On its first move, a pawn can move two squares forward. Pawns are unique because they can be promoted 
        to any other piece (except a king) if they reach the opposite side of the board.
      `,
      fen: "8/8/8/8/8/8/PPPPPPPP/8 w - - 0 1", // Only pawns
    },
    {
      id: 2,
      title: "Rook",
      description: `
        The rook is a powerful piece that moves in straight lines horizontally or vertically. 
        It can move any number of squares in a straight line, making it especially strong in open positions. 
        The rook is also involved in castling, a special move that helps protect the king.
      `,
      fen: "8/8/8/8/8/8/8/R7 w - - 0 1", // Only a rook
    },
    {
      id: 3,
      title: "Knight",
      description: `
        The knight is unique because it moves in an L-shape: two squares in one direction and then one square perpendicular. 
        Knights can jump over other pieces, making them valuable in closed positions. 
        They are the only pieces that can move to a square of the opposite color in one move.
      `,
      fen: "8/8/8/8/8/8/8/N7 w - - 0 1", // Only a knight
    },
    {
      id: 4,
      title: "Bishop",
      description: `
        The bishop moves diagonally in any direction. Each player starts with two bishops, one on a light square 
        and one on a dark square. Bishops are most effective in open positions where they can control long diagonals.
      `,
      fen: "8/8/8/8/8/8/8/B7 w - - 0 1", // Only a bishop
    },
    {
      id: 5,
      title: "Queen",
      description: `
        The queen is the most powerful piece in chess. It combines the movements of the rook and bishop, 
        allowing it to move in any direction: horizontally, vertically, or diagonally. 
        The queen is a key piece in both attack and defense.
      `,
      fen: "8/8/8/8/8/8/8/Q7 w - - 0 1", // Only a queen
    },
    {
      id: 6,
      title: "King",
      description: `
        The king is the most important piece in chess. It moves one square in any direction. 
        The objective of the game is to checkmate the opponent's king. The king is also involved in castling, 
        a special move that helps improve its safety.
      `,
      fen: "8/8/8/8/8/8/8/K7 w - - 0 1", // Only a king
    },
  ];

  // Load a lesson
  const loadLesson = (lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Chess Lessons</h1>
      <p style={styles.subtitle}>Learn how each chess piece moves.</p>
      <div style={styles.lessonList}>
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            style={styles.lessonButton}
            onClick={() => loadLesson(lesson)}
          >
            {lesson.title}
          </button>
        ))}
      </div>
      {currentLesson && (
        <div style={styles.lessonContent}>
          <h2 style={styles.lessonTitle}>{currentLesson.title}</h2>
          <p style={styles.lessonDescription}>{currentLesson.description}</p>
          <div style={styles.chessboardContainer}>
            <Chessboard
              position={currentLesson.fen}
              boardWidth={400} // Medium-sized chessboard
              boardStyle={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://c1.wallpaperflare.com/preview/979/274/351/chess-chess-men-game-chess-pieces.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    padding: "40px 20px",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
  lessonList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "40px",
  },
  lessonButton: {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  lessonContent: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "0 auto",
  },
  lessonTitle: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "'Georgia', serif",
  },
  lessonDescription: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  chessboardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center vertically
    marginTop: "20px",
    height: "450px", // Set a fixed height for the container
  },
};

export default Lessons;