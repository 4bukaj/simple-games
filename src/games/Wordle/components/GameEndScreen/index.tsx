import { useEffect } from 'react';
import { useWordleContext } from '../../../../context/WordleContext';
import './styles.css';
import confetti from 'canvas-confetti';

const GameEndScreen = () => {
  const { gameEnd, word } = useWordleContext();

  useEffect(() => {
    if (gameEnd !== 'win') return;

    confetti();
  }, [gameEnd]);

  if (!gameEnd) return;

  return (
    <div className='game-end__wrapper'>
      <h1>{`You ${gameEnd}!`}</h1>
      {gameEnd === 'lose' && (
        <p>
          The word was <span className='word-wrapper'>{word}</span>{' '}
        </p>
      )}
    </div>
  );
};

export default GameEndScreen;
