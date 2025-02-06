import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import "./Lessons.css"; // Import external CSS
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
    <div className="">
      <h1 className="title">Chess Lessons</h1>
      <p className="subtitle">Learn how each chess piece moves.</p>
      <div className="lessonList">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            className="lessonButton"
            onClick={() => loadLesson(lesson)}
          >
            {lesson.title}
          </button>
        ))}
      </div>
      {currentLesson && (
  <div className="lessonContent">
    <h2 className="lessonTitle">{currentLesson.title}</h2>
    <div className="chessboardAndDescriptionContainer">
      <p className="lessonDescription">{currentLesson.description}</p>
      <div className="chessboardContainer">
        <Chessboard
          position={currentLesson.fen}
          boardWidth={310} // Medium-sized chessboard
          boardStyle={{
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Lessons;
