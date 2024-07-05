import React from "react";

const Scoreboard = ({
  roundCount,
  roundBonus,
  currentCombo,
  bestCombo,
  score,
  gameOver,
  gameOverMessage,
}) => {
  console.log("gameOverMessage in Scoreboard:", gameOverMessage);

  return (
    <div className="bg-blue-500 bg-opacity-80 rounded-lg p-4 mb-8 text-center">
      <p className="text-2xl mb-2">
        Round Bonus: {roundCount} = {Math.max(0, roundBonus)} pts
      </p>
      <p className="text-2xl mb-2">Current Combo: {currentCombo}</p>
      <p className="text-2xl mb-2">
        Best Combo: {bestCombo} = {bestCombo * 1000} pts
      </p>
      <p className="text-4xl font-bold text-blue-800 mb-4">
        Score: {score} pts
      </p>
      {gameOver && <p className="text-3xl font-bold">{gameOverMessage}</p>}
    </div>
  );
};

export default Scoreboard;
