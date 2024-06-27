import React from "react";

const CreateAccount = () => {
  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/384.gif";

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={imageURL} alt="Pokemon" className="mb-4" />
      <h1 className="text-4xl font-bold">CREATE ACCOUNT</h1>
    </div>
  );
};

export default CreateAccount;
