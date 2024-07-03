import { useEffect, useState } from 'react';
import axios from 'axios';
import dragon6 from '../assets/6.gif'

const PlayerInformation = ({ user, srvUrl }) => {
  const [userCard, setUserCard] = useState(null);


  useEffect(() => {
    const fetchFighter = async () => {
      if (!user) return;
      try {
          const response = await axios.get(`${srvUrl}/fighters/${user.id}`);
          setUserCard(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFighter();
  }, [user, srvUrl])

  console.log("userCard", userCard)
  const draws = userCard?.fights?.total - userCard?.fights?.wins - userCard?.fights?.losses || 0;

  return (
    <main className="container mx-auto">
      <div>
        <img src={dragon6} alt="Pokemon" className="mx-auto mb-2 h-20" />
        <h1 className="text-4xl font-bold text-center mb-4">Fighter information</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-2">
        <div className='py-2 px-4 bg-gray-700/70 rounded-md'>
          <h2 className='text-2xl font-semibold mb-2'>Personal info</h2>
          <p>Name: <span className="font-semibold">{userCard?.name}</span></p>
          <p>E-mail: <span className="font-semibold">{userCard?.email}</span></p>
          <p>Is admin: <span className="font-semibold">{userCard?.isAdmin ? 'True' : 'False'}</span></p>
          <p>User id: <span className="font-semibold">{userCard?.id}</span></p>
          <div className='grid grid-cols-4 gap-4 mt-2'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
          </div>
          <h3 className="my-2 text-xl font-semibold">Results:</h3>
          <p>Score: <span className="font-semibold">{userCard?.fights?.score || 0 }</span></p>
          <p>Wins: <span className="font-semibold">{userCard?.fights?.wins || 0 }</span></p>
          <p>Losses: <span className="font-semibold">{userCard?.fights?.losses || 0 }</span></p>
          <p>Losses: <span className="font-semibold">{draws}</span></p>
          <p>Total: <span className="font-semibold">{userCard?.fights?.total || 0 }</span></p>
        </div>
        <div className="py-2 px-4 bg-gray-700/70 rounded-md grid grid-rows-[auto_1fr]">
          <h2 className='text-2xl font-semibold mb-2'>Fighting history</h2>
          <div className='grid place-content-center bg-yellow-700/10'>Stay tunned!</div>
        </div>
      </div>
    </main>
  );
};
export default PlayerInformation;
