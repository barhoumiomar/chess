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

  const puzzles = [
    {

      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["h2h4"],
      hints: [
        "consider playing h2h4", 
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["h2h3"],
      hints: [
        "consider playing h2h3",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["g2g3"],
      hints: [
        "consider playing g2g3",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["g2g4"],
      hints: [
        "consider playing g2g4",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["g1h3"],
      hints: [
        "try to move your right knight  from g1 to h3",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["f2f3"],
      hints: [
        "move the pawn from f2 to f3",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["f2f4"],
      hints: [
        "move the pawn from f2 to f4",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["e2e3"],
      hints: [
        "consider moving your pawn from e2 to e3",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["e2e4"],
      hints: [
        "try to move pawn from e2 to e4",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["d2d3"],
      hints: [
        "consider moving pawn from d2 to d3",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["d2d4"],
      hints: [
        "try to move pawn from d2 to d4",
      ],
},
{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["c2c3"],
      hints: [
        "consider playing pawn from c2 to c3",
      ],
},{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["c2c4"],
      hints: [
        "try to move pawn from c2 to c4",
      ],
},{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["b2b3"],
      hints: [
        "try to move pawn from b2 to b3",
      ],
},{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["b2b4"],
      hints: [
        "consider moving b2 to b4",
      ],
},{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["a2a3"],
      hints: [
        "move the pawn from a2 to a3",
      ],
},{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["a2a4"],
      hints: [
        "move the pawn from a2 to a4 ",
      ],
},{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["b1c3"],
      hints: [
        "move your left knight to c3",
      ],
},{
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      solution: ["b1a3"],
      hints: [
        "move your left knight to a3",
      ],
},{
      fen:"rnbqkbnr/ppp2ppp/8/3pp3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 1",
      solution: ["d2d3"],
      hints: [
        "try to defend your pawn in the middle",
      ],
},{
      fen:"r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 1",
      solution: ["f3d4"],
      hints: [
        "take the pawn",
      ],
},{
      fen:"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 1",
      solution: ["g1f3"],
      hints: [
        "black played e5, try to attack his pawn with your knight",
      ],
},
{
      fen:"rnbqkbnr/ppp3pp/3p1p2/8/3pP3/5N2/PPP1BPPP/RNBQK2R w KQkq - 0 1",
      solution: ["d1d4"],
      hints: [
        "take pawn with your queen",
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
        "attack the opponent's king with your queen",
      ],
},{
      fen:"r6r/pb2k1bp/5p1p/1B6/3N4/1P6/P1P2PPP/R3K2R w KQkq - 0 1",
      solution: ["d4f5"],
      hints: [
        "fork the opponent's king",
      ],
},{
      fen:"kr6/pp3pp1/N6b/8/7P/6P1/2PP4/K1B5 w - - 0 1",
      solution: ["a6c7"],
      hints: [
        "move the knight to checkmate ! ",
      ],
},{
      fen:"rnbqkbnr/ppppp2p/5p2/6p1/8/4P3/PPPP1PPP/RNBQKBNR w KQkq g6 0 1",
      solution: ["d1h5"],
      hints: [
        "easiest checkmate ever ! you can do it",
      ],
},{
      fen:"rnb1kbnr/ppppqppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1",
      solution: ["c3d5"],
      hints: [
        "attack the queen ",
      ],
},
{
  fen:"rnbqkbnr/ppppp1pp/8/5p2/4P3/8/PPPP1PPP/RNBQKBNR w KQkq f6 0 1",
  solution: ["e4f5"],
  hints: [
    "take the pawn",
  ],
},
{
  fen:"r1b1kb1r/ppppqppp/5n2/4p3/2BnP3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1",
  solution: ["f3g1"],
  hints: [
    "black wants to trade knights, then attacking your other knight with his pawn, don't take it and retreat !",
  ],
},
{
  fen:"rnbqkbnr/pp1p1ppp/2p5/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
  solution: ["f3f7"],
  hints: [
    "checkmate in 1 move",
  ],
},
, {
  fen:"1R5K/8/8/8/8/8/R7/6k1 w - - 0 1",
  solution: ["b8b1"],
  hints: [
    "checkmate in 1 move ! ",
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

    const attemptedMove = `${sourceSquare}${targetSquare}`;
    const expectedMove = puzzle.solution[moveIndex];

    // Check if move is correct
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
          generateRandomPuzzle();
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
            generateRandomPuzzle();
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
