import LoadingNote from "../components/LoadingNote";
import LeaderCard from "../components/LeaderCard";
import useImportData from "../hooks/useImportData";

const imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif";

const LeaderBoard = ({ srvUrl }) => {
  
  const leadersUrl = `${srvUrl}/fighters/top`;
  const { data, error, loading } = useImportData(leadersUrl);

  if (loading) {
    return LoadingNote({ msg: "Loading...This may take up to 2 minutes on first load" });
  }

  if (error) {
    return LoadingNote({ msg: error.message });
  }

  if (!data || !Array.isArray(data)) {
    return LoadingNote({ msg: "Unexpected data format" });
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <img src={imageURL} alt="Pokemon" className="mb-4" />

      <h1 className="text-4xl font-bold">LEADERBOARD</h1>
      
      <ul className="grid gap-2">
        {data.map((leader) => (
          <LeaderCard key={leader.id} leader={leader} />
        ))}
      </ul>
    </main>

  );
};
export default LeaderBoard;
