import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import "./Quiz.css";

const Quiz = () => {
  const [game, setGame] = useState(new Chess());
  const [puzzle, setPuzzle] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [hintIndex, setHintIndex] = useState(0);
  const [moveIndex, setMoveIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const puzzles = [
    {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      solution: ["f3g5"],
      hints: [
        "Consider moving your knight.",
        "Your knight can attack the pawn on e5.",
        "Move your knight to g5 to attack the pawn on e5.",
      ],
    },
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["e4"],
      hints: [
        "This is a classic opening move.",
        "Consider controlling the center with a pawn.",
        "Move the pawn from e2 to e4.",
      ],
    },
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["d4"],
      hints: [
        "This move also controls the center.",
        "It's another common opening move in chess.",
        "Move the pawn from d2 to d4.",
      ],
    },
    {
      fen: "r1bqkbnr/pppppppp/8/8/8/4P3/PPP1P1PP/RNBQKBNR w KQkq - 0 1",
      solution: ["e5"],
      hints: [
        "Consider advancing the pawn to e5.",
        "This can lead to more open positions.",
        "Move the pawn from e4 to e5.",
      ],
    },
    {
      fen: "r1bqkbnr/pppppppp/8/8/8/5P2/PPP1P1PP/RNBQKBNR w KQkq - 0 1",
      solution: ["g4"],
      hints: [
        "This is an aggressive move that can put pressure on the opponent.",
        "Consider advancing the pawn to g4.",
      ],
    },
  ];
  

  const generateRandomPuzzle = () => {
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    setPuzzle(randomPuzzle);
    setGame(new Chess(randomPuzzle.fen));
    setFeedback("");
    setHintIndex(0);
    setMoveIndex(0);
    setQuizCompleted(false);
  };

  const onDrop = (sourceSquare, targetSquare) => {
    if (quizCompleted) return false;

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

    if (puzzle.solution[moveIndex] === `${sourceSquare}${targetSquare}`) {
      setMoveIndex(moveIndex + 1);
      if (moveIndex === puzzle.solution.length + 1) {
        setFeedback("Correct move! Well done! ✅");
        setQuizCompleted(true);
        setTimeout(() => {
          generateRandomPuzzle();
        }, 3000);
      } else {
        setFeedback("Good move! Keep going.");
      }
    } else {
      setFeedback("Incorrect move. Keep trying!");
      setMoveIndex(0);
    }

    setGame(new Chess(game.fen()));
    return true;
  };

  const repeatPuzzle = () => {
    setGame(new Chess(puzzle.fen));
    setFeedback("");
    setHintIndex(0);
    setMoveIndex(0);
    setQuizCompleted(false);
  };

  const handleShowHint = () => {
    if (hintIndex < puzzle.hints.length) {
      // Show the hint
      setHintIndex(hintIndex + 1);
      
      // Get the next move from the solution
      const nextMove = puzzle.solution[moveIndex];
      if (nextMove) {
        const move = game.move(nextMove); // Directly pass the move string, e.g., "d2d4"
        if (move) {
          setGame(new Chess(game.fen())); // Update the game state with the new position
          setFeedback(`Computer played: ${nextMove}`);
          setMoveIndex(moveIndex + 1);
        } else {
          setFeedback("Invalid move by computer.");
        }
      }
      
      // Check if the puzzle is completed
      if (moveIndex === puzzle.solution.length) {
        setQuizCompleted(true);
        setFeedback("Congratulations! You've completed the puzzle.");
        setTimeout(() => {
          generateRandomPuzzle();
        }, 3000);
      }
    }
  };
  
    


  return (
    <div className="quiz-container">
      <div className="overlay"></div>
      <h1 className="quiz-title">Chess Quiz</h1>
      <p className="quiz-subtitle">Solve the puzzle below. Find the best move!</p>
      {puzzle && (
        <>
          <div className="task-container">
            {puzzle.hints.map((hint, index) => (
              <p
                key={index}
                className={`task ${index < hintIndex ? "completed" : ""}`}
              >
                {hint}
              </p>
            ))}
          </div>
          <div className="chessboard-container">
            <Chessboard
              position={game.fen()}
              onPieceDrop={onDrop}
              boardWidth={400}
              boardStyle={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              isDraggable={quizCompleted === false}
            />
          </div>
        </>
      )}
      {feedback && <p className="feedback">{feedback}</p>}
      <div className="button-container">
        <button className="button" onClick={generateRandomPuzzle} disabled={quizCompleted}>
          {puzzle ? "Next Puzzle" : "Start Quiz"}
        </button>
        {puzzle && (
          <button className="button" onClick={repeatPuzzle}>
            Repeat
          </button>
        )}
       {puzzle && !quizCompleted && (
  <button className="button" onClick={handleShowHint}>
    Show Hint
  </button>
)}

      </div>
    </div>
  );
};

export default Quiz;
