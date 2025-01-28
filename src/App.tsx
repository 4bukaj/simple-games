import { useState } from 'react';
import './App.css';
import GameTile from './components/GameTile';
import { games } from './utils/games';
import { Game } from './types/games';

const App = () => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);

  return (
    <div className='container'>
      {currentGame ? (
        <p>{currentGame}</p>
      ) : (
        <div className='games__wrapper'>
          {games.map((game) => (
            <GameTile
              key={game.name}
              icon={game.icon}
              onClick={() => setCurrentGame(game.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
