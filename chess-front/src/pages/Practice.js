  import React, { useState, useEffect } from "react";
  import { Chessboard } from "react-chessboard";
  import { Chess } from "chess.js";
  import "./Practice.css"; // Import the CSS file for styles

  const Practice = () => {
    const [game, setGame] = useState(new Chess());
    const [isComputerTurn, setIsComputerTurn] = useState(false);
    const [gameResult, setGameResult] = useState(null);
    const [selectedSquare, setSelectedSquare] = useState(null);
    const [validMoves, setValidMoves] = useState([]);
    const [customSquareStyles, setCustomSquareStyles] = useState({});

    const makeComputerMove = () => {
      const possibleMoves = game.moves();
      if (possibleMoves.length === 0 || game.isGameOver()) {
        checkGameResult();
        return;
      }

      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      game.move(randomMove);
      setGame(new Chess(game.fen()));
      setIsComputerTurn(false);
      checkGameResult();
    };

    const onDrop = (sourceSquare, targetSquare) => {
      const move = game.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
      if (move === null) return false;

      setGame(new Chess(game.fen()));
      setIsComputerTurn(true);
      checkGameResult();
      setSelectedSquare(null);
      setValidMoves([]);
      return true;
    };

    const checkGameResult = () => {
      if (game.isCheckmate()) {
        setGameResult(game.turn() === "b" ? "win" : "lose");
      } else if (game.isStalemate() || game.isDraw()) {
        setGameResult("draw");
      }
    };

    useEffect(() => {
      if (isComputerTurn && !gameResult) {
        const timer = setTimeout(() => {
          makeComputerMove();
        }, 500);
        return () => clearTimeout(timer);
      }
    }, [isComputerTurn, gameResult]);

    const resetGame = () => {
      setGame(new Chess());
      setIsComputerTurn(false);
      setGameResult(null);
      setSelectedSquare(null);
      setValidMoves([]);
      setCustomSquareStyles({});
    };

    const onSquareClick = (square) => {
      const piece = game.get(square);
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
        const moves = game.moves({ square, verbose: true });
        setValidMoves(moves.map((move) => move.to));
      } else if (selectedSquare && validMoves.includes(square)) {
        onDrop(selectedSquare, square);
      } else {
        setSelectedSquare(null);
        setValidMoves([]);
      }
    };

    return (
      <div className="practice-container">
        <h1 className="practice-title">Practice Chess</h1>
        
        <div className="chessboard-wrapper">
          <Chessboard
            position={game.fen()}
            onPieceDrop={onDrop}
            onSquareClick={onSquareClick}
            customSquareStyles={customSquareStyles}
            boardWidth={380}
            boardStyle={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>

        <div className="status-message">
          {gameResult === null && (
            <p className={`turn-text ${isComputerTurn ? "computer-turn" : "player-turn"}`}>
              {isComputerTurn ? "Computer is thinking..." : "Your turn!"}
            </p>
          )}
        </div>

        {gameResult && (
          <div className="result-container">
            {gameResult === "win" && <h2 className="win-text">🎉 You Win! 🎉</h2>}
            {gameResult === "lose" && <h2 className="lose-text">😢 You Lose! 😢</h2>}
            {gameResult === "draw" && <h2 className="draw-text">🤝 It's a Draw! 🤝</h2>}
            <button className="reset-button" onClick={resetGame}>Play Again</button>
          </div>
        )}
      </div>
    );
  };

  export default Practice;
