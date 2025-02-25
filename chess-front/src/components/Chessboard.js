import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import './ChessboardComponent.css';  // Import external CSS file

const ChessboardComponent = () => {
  const [game, setGame] = useState(new Chess());

  const onDrop = (sourceSquare, targetSquare) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Always promote to a queen for simplicity
    });

    if (move === null) return false; // Illegal move
    setGame(new Chess(game.fen())); // Update the game state
    return true;
  };

  return (
    <div className="chessboard-container">
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
    </div>
  );
};

export default ChessboardComponent;
