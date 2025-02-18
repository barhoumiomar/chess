import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import "./Quiz.css";

const Quiz = ({ user }) => {
  const [game, setGame] = useState(new Chess());
  const [puzzle, setPuzzle] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [hintIndex, setHintIndex] = useState(0);
  const [moveIndex, setMoveIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [allQuizzesCompleted, setAllQuizzesCompleted] = useState(false); // New state

  const puzzles = [

    {

      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["e2e4"],
      hints: [
        "how can we open game?", 
      ],
},
{
      fen:"rnbqkbnr/p1pppppp/1p6/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1",
      solution: ["d2d4"],
      hints: [
        "how can we control the center ?",
      ],
},


{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["g1h3"],
      hints: [
        "try to move your  knight to h3",
      ],
},

{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["b1c3"],
      hints: [
        "move your knight to c3",
      ],
},{
      fen:"rnbqkbnr/ppp2ppp/8/3pp3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 1",
      solution: ["d2d3"],
      hints: [
        "how to defend your pawn in the middle?",
      ],
},{
      fen:"r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 1",
      solution: ["f3d4"],
      hints: [
        "take it ",
      ],
},{
      fen:"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 1",
      solution: ["g1f3"],
      hints: [
        "how to attack pawn with knight?",
      ],
},
{
      fen:"rnbqkbnr/ppp3pp/3p1p2/8/3pP3/5N2/PPP1BPPP/RNBQK2R w KQkq - 0 1",
      solution: ["d1d4"],
      hints: [
        "take pawn with the queen",
      ],
},{
      fen:"rnbqkb1r/p1p3pp/1p1p1p1n/8/3QP3/1PN2N2/P1P1BPPP/R1B1K2R w KQkq - 0 1",
      solution: ["c1h6"],
      hints: [
        "take the opponent's knight with your bishop",
      ],
},{
      fen:"r1bqk2r/p5bp/1pn2p1p/3N4/3Q4/1P1B1N2/P1P2PPP/R3K2R w KQkq - 0 1",
      solution: ["d4e4"],
      hints: [
        "how to make a check?",
      ],
},{
      fen:"r6r/pb2k1bp/5p1p/1B6/3N4/1P6/P1P2PPP/R3K2R w KQkq - 0 1",
      solution: ["d4f5"],
      hints: [
        "try check your opponent's king",
      ],
},{
      fen:"kr6/pp3pp1/N6b/8/7P/6P1/2PP4/K1B5 w - - 0 1",
      solution: ["a6c7"],
      hints: [
        "find a checkmate",
      ],
},{
      fen:"rnbqkbnr/ppppp2p/5p2/6p1/8/4P3/PPPP1PPP/RNBQKBNR w KQkq g6 0 1",
      solution: ["d1h5"],
      hints: [
        "end the game",
      ],
},

{
  fen:"r1b1kb1r/ppppqppp/5n2/4p3/2BnP3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1",
  solution: ["f3g1"],
  hints: [
    "retreat !",
  ],
},
{
  fen:"rnbqkbnr/pp1p1ppp/2p5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
  solution: ["f3f7"],
  hints: [
    "checkmate ",
  ],
},


  ];

  const loadPuzzle = (index) => {
    if (index >= puzzles.length) {
      setPuzzle(null);
      setQuizCompleted(true);
      setAllQuizzesCompleted(true); // Set to true when all quizzes are completed
      setFeedback("Congratulations! You've completed all the puzzles. 🎉");
      return;
    }

    const selectedPuzzle = puzzles[index];
    setPuzzle(selectedPuzzle);
    setGame(new Chess(selectedPuzzle.fen));
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

    const attemptedMove = `${sourceSquare}${targetSquare}`;
    const expectedMove = puzzle.solution[moveIndex];

    if (attemptedMove === expectedMove) {
      setGame((prevGame) => {
        const newGame = new Chess(prevGame.fen());
        newGame.move({ from: sourceSquare, to: targetSquare });
        return newGame;
      });

      const newMoveIndex = moveIndex + 1;
      setMoveIndex(newMoveIndex);

      if (newMoveIndex === puzzle.solution.length) {
        setFeedback("Correct move! Well done! ✅");
        setQuizCompleted(true);
        setTimeout(() => {
          setCurrentPuzzleIndex(currentPuzzleIndex + 1);
          loadPuzzle(currentPuzzleIndex + 1);
        }, 2000);
      } else {
        setFeedback("Good move! Keep going.");
      }
    } else {
      setFeedback("Incorrect move. Try again!");
    }

    return false;
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
      setHintIndex(hintIndex + 1);

      const nextMove = puzzle.solution[moveIndex];
      if (nextMove) {
        setGame((prevGame) => {
          const newGame = new Chess(prevGame.fen());
          newGame.move(nextMove);
          return newGame;
        });

        setFeedback(`Computer played: ${nextMove}`);
        setMoveIndex(moveIndex + 1);

        if (moveIndex + 1 === puzzle.solution.length) {
          setQuizCompleted(true);
          setFeedback("Congratulations! You've completed the puzzle.");
          setTimeout(() => {
            setCurrentPuzzleIndex(currentPuzzleIndex + 1);
            loadPuzzle(currentPuzzleIndex + 1);
          }, 3000);
        }
      }
    }
  };

  if (!user) {
    return <div className="verify">Please log in to access this page.  <a href="/">login here</a> </div>;
  }

  return (
    <div className="quiz-container">
      <div className="overlay"></div>
      <h1 className="quiz-title">Chess Quiz</h1>
      <p className="quiz-subtitle">Solve the puzzle below. Find the best move!</p>
      {allQuizzesCompleted ? ( // Display greeting message if all quizzes are completed
        <div className="congratulations">
          <h2>Good job! 🎉</h2>
          <p>You've successfully completed all the quizzes. Well done!</p>
        </div>
      ) : (
        <>
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
                  isDraggable={!quizCompleted}
                />
              </div>
            </>
          )}
          {feedback && <p className="feedback">{feedback}</p>}
          <div className="button-container">
            <button
              className="button"
              onClick={() => loadPuzzle(currentPuzzleIndex)}
              disabled={quizCompleted}
            >
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
        </>
      )}
    </div>
  );
};

export default Quiz;
