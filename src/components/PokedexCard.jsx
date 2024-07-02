// PIXEL ANIMATED POKEMON
// const pokemonImgURL =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";

// MODERN ANIMATED POKEMON
const pokemonImgURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown";


const PokedexCard = ({ pokemon, showPokemon }) => (

    <li key={pokemon.id} className="flex flex-col items-center">
        {showPokemon && (
            <img
                src={`${pokemonImgURL}/${pokemon.id}.gif`}
                alt={pokemon.name.english}
                className="mb-2"
                loading="lazy"
            />
        )}

        <p className="text-lg font-semibold">
            {pokemon.name.english} ({pokemon.id})
        </p>
    </li>
)

export default PokedexCard;
