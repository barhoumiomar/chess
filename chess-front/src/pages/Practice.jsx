import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

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
      const turn = game.turn();
      const kingSquare = Object.entries(game.board()).flat().find(
        (piece) => piece && piece.type === "k" && piece.color === turn
      )?.square;

      if (kingSquare) {
        setCustomSquareStyles((prevStyles) => ({
          ...prevStyles,
          [kingSquare]: {
            background: "red",
          },
        }));
      }

      setGameResult(turn === "b" ? "win" : "lose");
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
    <div style={styles.container}>
      <h1 style={styles.title}>Practice Chess</h1>
      <div style={styles.chessboardContainer}>
        <div style={styles.chessboardWrapper}>
          <Chessboard
            position={game.fen()}
            onPieceDrop={onDrop}
            onSquareClick={onSquareClick}
            customSquareStyles={customSquareStyles}
            boardWidth={500}
            boardStyle={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>
      {gameResult === null && <p style={styles.turnText}>{isComputerTurn ? "Computer is thinking..." : "Your turn!"}</p>}
      {gameResult === "win" && (
        <div style={styles.resultContainer}>
          <h2 style={styles.winText}>🎉 You Win! 🎉</h2>
          <button style={styles.resetButton} onClick={resetGame}>Play Again</button>
        </div>
      )}
      {gameResult === "lose" && (
        <div style={styles.resultContainer}>
          <h2 style={styles.loseText}>😢 You Lose! 😢</h2>
          <button style={styles.resetButton} onClick={resetGame}>Try Again</button>
        </div>
      )}
      {gameResult === "draw" && (
        <div style={styles.resultContainer}>
          <h2 style={styles.drawText}>🤝 It's a Draw! 🤝</h2>
          <button style={styles.resetButton} onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: "40px 20px", textAlign: "center", backgroundColor: "#f9f9f9", minHeight: "100vh" },
  title: { fontSize: "48px", color: "#333", marginBottom: "20px", fontFamily: "'Georgia', serif" },
  chessboardContainer: { display: "flex", justifyContent: "center", marginTop: "20px" },
  chessboardWrapper: { padding: "20px", backgroundColor: "#fff", borderRadius: "15px", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
  turnText: { marginTop: "20px", fontSize: "18px", color: "#333" },
  resultContainer: { marginTop: "20px" },
  winText: { fontSize: "32px", color: "green" },
  loseText: { fontSize: "32px", color: "red" },
  drawText: { fontSize: "32px", color: "orange" },
  resetButton: { marginTop: "20px", padding: "10px 20px", backgroundColor: "#333", color: "#fff", border: "none", borderRadius: "5px", fontSize: "18px", cursor: "pointer" },
};

export default Practice;