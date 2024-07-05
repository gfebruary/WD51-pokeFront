import React from "react";

const ChoiceButtons = ({
  choices,
  playerChoice,
  setPlayerChoice,
  handleSubmit,
}) => {
  if (!choices) {
    return null;
  }

  return (
    <div className="flex justify-center mt-4">
      {choices.map((choice) => (
        <button
          key={choice}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  ${
            playerChoice === choice ? "bg-blue-700" : ""
          }`}
          onClick={() => setPlayerChoice(choice)}>
          {choice}
        </button>
      ))}
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
        onClick={handleSubmit}>
        Attack
      </button>
    </div>
  );
};

export default ChoiceButtons;
