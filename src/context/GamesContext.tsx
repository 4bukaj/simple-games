import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Game } from '../types/games';

interface GamesContextProps {
  currentGame: Game;
  setCurrentGame: Dispatch<SetStateAction<Game>>;
}

interface GamesContextProviderProps {
  children: JSX.Element;
}

export const GamesContext = createContext<GamesContextProps>({
  currentGame: null,
  setCurrentGame: () => {},
});

export const GamesContextProvider = ({
  children,
}: GamesContextProviderProps) => {
  const [currentGame, setCurrentGame] = useState<Game>(null);

  return (
    <GamesContext.Provider
      value={{
        currentGame,
        setCurrentGame,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGamesContext = () => {
  return useContext(GamesContext);
};
