import { useGamesContext } from '../../context/GamesContext';
import FindPairs from '../../games/FindPairs';
import MatchPattern from '../../games/MatchPattern';
import { games } from '../../utils/games';
import GameTile from '../GameTile';

import './styles.css';

const GameWrapper = () => {
  const { currentGame, setCurrentGame } = useGamesContext();

  const renderCurrentGame = () => {
    switch (currentGame) {
      case null:
        return (
          <div className='games__wrapper'>
            {games.map((game) => (
              <GameTile
                key={game.name}
                icon={game.icon}
                onClick={() => setCurrentGame(game.name)}
              />
            ))}
          </div>
        );
      case 'findPairs':
        return <FindPairs />;
      case 'matchPattern':
        return <MatchPattern />;
      default:
        return null;
    }
  };

  return renderCurrentGame();
};

export default GameWrapper;
