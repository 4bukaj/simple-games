import { useGamesContext } from '../../context/GamesContext';
import ChevronLeftIcon from '../Icons/ChevronLeftIcon';
import RestartIcon from '../Icons/RestartIcon';

import './styles.css';

const GameControls = () => {
  const { currentGame, setCurrentGame } = useGamesContext();

  const handleBackToGameSelect = () => {
    setCurrentGame(null);
  };

  const handleRestartGame = () => {};

  if (!currentGame) return null;

  return (
    <div className='controls__wrapper'>
      <div className='icon__wrapper' onClick={handleBackToGameSelect}>
        <ChevronLeftIcon />
      </div>
      <div className='icon__wrapper' onClick={handleRestartGame}>
        <RestartIcon />
      </div>
    </div>
  );
};

export default GameControls;
