// src/pages/Quiz.jsx
import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

const Quiz = () => {
  const [game, setGame] = useState(new Chess());
  const [puzzle, setPuzzle] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [hintIndex, setHintIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [moveIndex, setMoveIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Multiple puzzles with progressive hints
  const puzzles = [
    {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      solution: ["f3g5"], // Knight moves to g5 to attack the pawn on e5
      hints: [
        "Consider moving your knight.",
        "Your knight can attack the pawn on e5.",
        "Move your knight to g5 to attack the pawn on e5.",
      ],
    },
    {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
      solution: ["f3e5"], // Knight captures the pawn on e5
      hints: [
        "Think about capturing the pawn on e5.",
        "Your knight on f3 can capture the pawn on e5.",
        "Capture the pawn on e5 with your knight on f3.",
      ],
    },
    {
      fen: "rnbqkbnr/ppp2ppp/8/3pp3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4",
      solution: ["e4d5"], // Pawn captures the pawn on d5
      hints: [
        "Consider capturing with your pawn.",
        "Your pawn on e4 can capture the pawn on d5.",
        "Capture the pawn on d5 with your pawn on e4.",
      ],
    },
    {
      fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
      solution: ["e4e5"], // Pawn pushes to e5
      hints: [
        "Think about controlling the center.",
        "Your pawn on e4 can push to e5.",
        "Push your pawn from e4 to e5 to control the center.",
      ],
    },
    {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      solution: ["e1g1"], // Castle kingside
      hints: [
        "Consider castling to secure your king.",
        "You can castle kingside to move your king to safety.",
        "Castle kingside by moving your king to g1.",
      ],
    },
    {
      fen: "rnbqkbnr/ppp2ppp/8/3pp3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4",
      solution: ["f3d4"], // Knight moves to d4 to fork the pawn on e5 and the pawn on d5
      hints: [
        "Look for a tactical opportunity with your knight.",
        "Your knight on f3 can move to d4 to attack both the pawn on e5 and the pawn on d5.",
        "Move your knight to d4 to fork the pawns on e5 and d5.",
      ],
    }
  ];

  // Generate a random puzzle from the list
  const generateRandomPuzzle = () => {
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    setPuzzle(randomPuzzle);
    setGame(new Chess(randomPuzzle.fen));
    setFeedback("");
    setHintIndex(0);
    setShowHint(false);
    setMoveIndex(0);
    setQuizCompleted(false);
  };

  // Handle user moves
  const onDrop = (sourceSquare, targetSquare) => {
    const piece = game.get(sourceSquare);
    if (!piece) {
      setFeedback("No piece on the selected square. Try again!");
      return false;
    }

    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece.type === "p" && targetSquare[1] === "8" ? "q" : undefined,
    });

    if (move === null) {
      setFeedback("Invalid move. Try again!");
      return false;
    }

    // Check if the move matches the puzzle solution
    if (puzzle.solution[moveIndex] === `${sourceSquare}${targetSquare}`) {
      setMoveIndex(moveIndex + 1);
      if (moveIndex === puzzle.solution.length - 1) {
        setFeedback("Correct move! Well done! ✅");
        setQuizCompleted(true); // Mark quiz as completed
        setTimeout(() => {
          generateRandomPuzzle(); // Load a new puzzle after a short delay
        }, 3000);
      } else {
        setFeedback("Good move! Keep going.");
      }
    } else {
      setFeedback("Incorrect move. Keep trying!");
      setMoveIndex(0);
    }

    setGame(new Chess(game.fen())); // Update the game state
    return true;
  };

  // Repeat the same puzzle
  const repeatPuzzle = () => {
    setGame(new Chess(puzzle.fen));
    setFeedback("");
    setHintIndex(0);
    setShowHint(false);
    setMoveIndex(0);
    setQuizCompleted(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Chess Quiz</h1>
      <p style={styles.subtitle}>Solve the puzzle below. Find the best move!</p>
      {puzzle && (
        <>
          {/* Display hints as tasks above the chessboard */}
          <div style={styles.taskContainer}>
            {puzzle.hints.map((hint, index) => (
              <p
                key={index}
                style={{
                  ...styles.task,
                  textDecoration: index < hintIndex ? "line-through" : "none",
                  color: index < hintIndex ? "#888" : "#333",
                }}
              >
                {hint}
              </p>
            ))}
          </div>
          <div style={styles.chessboardContainer}>
            <Chessboard
              position={game.fen()}
              onPieceDrop={onDrop}
              boardWidth={400}
              boardStyle={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </>
      )}
      {feedback && <p style={styles.feedback}>{feedback}</p>}
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={generateRandomPuzzle}>
          {puzzle ? "Next Puzzle" : "Start Quiz"}
        </button>
        {puzzle && (
          <button style={styles.button} onClick={repeatPuzzle}>
            Repeat
          </button>
        )}
      </div>
    </div>
  );
};

// Enhanced CSS styles
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
  },
  taskContainer: {
    marginBottom: "20px",
    textAlign: "left",
  },
  task: {
    fontSize: "1rem",
    margin: "5px 0",
  },
  chessboardContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  feedback: {
    marginTop: "20px",
    fontSize: "1.1rem",
    color: "#333",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};

export default Quiz;