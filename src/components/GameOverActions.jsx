import React from "react";

const GameOverActions = ({ message, handleRematch, handleNewGame }) => {
  return (
    <div className="mt-4">
      <button
        className="px-4 py-2 mr-2 bg-green-500 hover:bg-green-600 font-bold text-white rounded transition duration-300 ease-in-out"
        onClick={handleRematch}>
        Rematch
      </button>
      <button
        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded transition duration-300 ease-in-out"
        onClick={handleNewGame}>
        Battle with New Pokemon
      </button>
    </div>
  );
};

export default GameOverActions;
