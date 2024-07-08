import { useEffect, useState } from 'react';
import axios from 'axios';
import useAppState from '../hooks/useAppState';
import dragon6 from '../assets/6.gif'

const PlayerInformation = ({ user, srvUrl }) => {
  const [userCard, setUserCard] = useState(null);
  const [userFights, setUserFights] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { pokemons } = useAppState();

  useEffect(() => {
    const fetchFighter = async () => {
      if (!user) return;
      try {
        const response = await axios.get(`${srvUrl}/fighters/${user.id}`);
        setUserCard(response.data);
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await axios.get(`${srvUrl}/battles/${user.id}`);
        setUserFights(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFighter();
  }, [user, srvUrl])

  const draws = userCard?.fights?.total - userCard?.fights?.wins - userCard?.fights?.losses || 0;
  const pokeInfo = id => {
    const curPoke = pokemons?.pokeData.pokeBase[id - 1]
    return {
      name: curPoke?.name.english,
      icon: curPoke?.images?.svg,
    }
  }


  return (
    <main className="bg-blue-100 p-4">
      <div className="container mx-auto p-4">
        <div className="text-center mb-4">
          <img
            src={dragon6}
            alt="Pokemon"
            className="mx-auto mb-2 h-20 animate-bounce"
          />
          <h1 className="text-4xl font-bold text-orange-500">
            Fighter information
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="py-4 px-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
              Personal info
            </h2>
            <p className="font-semibold  text-orange-500">
              Name:{" "}
              <span className="font-semibold text-gray-700">
                {userCard?.name}
              </span>
            </p>
            <p className="font-semibold  text-orange-500">
              E-mail:{" "}
              <span className="font-semibold text-gray-700">
                {userCard?.email}
              </span>
            </p>
            <p className="font-semibold  text-orange-500">
              Is Admin:{" "}
              <span className="font-semibold text-gray-700">
                {userCard?.isAdmin ? "True" : "False"}
              </span>
            </p>
            <p className="font-semibold  text-orange-500">
              User ID:{" "}
              <span className="font-semibold text-gray-700">
                {userCard?.id}
              </span>
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* TODO: add editing functionality */}
              {editMode ? (
                <>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
            <h3 className="my-4 text-xl font-semibold text-gray-700">
              Results:
            </h3>
            <p className="font-semibold  text-orange-500">
              Score:{" "}
              <span className="font-semibold text-gray-700">
                {userCard?.fights?.score || 0}
              </span>
            </p>
            <p className="font-semibold  text-orange-500">
              Wins:{" "}
              <span className="font-semibold text-gray-700">
                {userCard?.fights?.wins || 0}
              </span>
            </p>
            <p className="font-semibold  text-orange-500">
              Losses:{" "}
              <span className="font-semibold text-gray-700">
                {userCard?.fights?.losses || 0}
              </span>
            </p>
            <p className="font-semibold  text-orange-500">
              Losses:{" "}
              <span className="font-semibold text-gray-700">{draws}</span>
            </p>
            <p className="font-semibold  text-orange-500">
              Total:{" "}
              <span className="font-semibold text-gray-700">
                {userCard?.fights?.total || 0}
              </span>
            </p>
          </div>
          <div className="py-4 px-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
              Fighting history
            </h2>
            {userFights ? (
              <ul className="space-y-2">
                {userFights.map((fight, index) => (
                  <li key={index} className="p-2 font-semibold text-orange-500 bg-yellow-100 rounded-md">
                    Opponent:{" "}
                    <span className="font-semibold text-gray-700">
                      {pokeInfo(fight.computerPokemonId).name}
                      <img className="inline h-[1cap] ps-2 pe-2 font-extralight" src={pokeInfo(fight.computerPokemonId).icon} alt={pokeInfo(fight.computerPokemonId).name} />
                    </span>
                    | Result:{" "}
                    <span className="font-semibold text-gray-700">
                      {fight.result}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 bg-yellow-100 text-center text-gray-700 rounded-md">
                No fights yet!
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlayerInformation;