import React from "react";
import ChoiceButtons from "./ChoiceButtons";
import GameOverActions from "./GameOverActions";

const GameControls = ({
  choices,
  playerChoice,
  setPlayerChoice,
  handleSubmit,
  result,
  damageMessage,
  gameOver,
  gameOverMessage,
  handleRematch,
  handleNewGame,
}) => {
  console.log("gameOverMessage in GameControls:", gameOverMessage);

  return (
    <>
      <ChoiceButtons
        choices={choices}
        playerChoice={playerChoice}
        setPlayerChoice={setPlayerChoice}
        handleSubmit={handleSubmit}
      />
      <div className="w-full bg-gray-800 bg-opacity-50 py-4 flex justify-center">
        {result && (
          <p className="text-2xl font-bold text-green-600">{result} </p>
        )}
        {damageMessage && (
          <p className="text-2xl text-red-600"> {damageMessage}</p>
        )}
      </div>
      {gameOver && (
        <GameOverActions
          message={gameOverMessage}
          handleRematch={handleRematch}
          handleNewGame={handleNewGame}
        />
      )}
    </>
  );
};

export default GameControls;
