import { createContext } from 'react';
import useImportData from '../hooks/useImportData';

const pokemonURL = "https://wd51-pokeserver.onrender.com/api/v1/pokes/";

export const AppStateContext = createContext();
  
export const AppStateProvider = ({ children }) => {
    const { data: pokeData, error: pokeError, loading: pokeLoading } = useImportData(pokemonURL);
    const pokemons = { pokeData, pokeError, pokeLoading };

    return (
        <AppStateContext.Provider value={{ pokemons }}>
            {children}
        </AppStateContext.Provider>
    );
};