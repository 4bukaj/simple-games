import { useEffect, useState } from 'react';
import './styles.css';
import Tile from './components/Tile';
import confetti from 'canvas-confetti';
import Lives from './components/Lives';

const MAX_LIVES = 3;
const INITIAL_GRID_SIZE = 3;
const INITIAL_PATTERN_LENGTH = 3;

const MatchPattern = () => {
  const [lives, setLives] = useState(MAX_LIVES);
  const [gridSize, setGridSize] = useState(INITIAL_GRID_SIZE);
  const [patternLength, setPatternLength] = useState(INITIAL_PATTERN_LENGTH);
  const [tiles, setTiles] = useState([]);
  const [pattern, setPattern] = useState<number[]>([]);
  const [guessedPattern, setGuessedPattern] = useState<number[]>([]);
  const [highlightedTile, setHighlightedTile] = useState<number | null>(null);

  const handleTileClick = (tileIndex: number) => {
    const currentIndex = guessedPattern.length;

    if (tileIndex === pattern[currentIndex]) {
      setGuessedPattern((prevState) => [...prevState, tileIndex]);
    } else {
      setLives((prevState) => prevState - 1);
    }
  };

  const loadNextLevel = () => {
    setGridSize((prevState) => prevState + 1);
    setPatternLength((prevState) => prevState + 1);
    setGuessedPattern([]);

    if (lives < MAX_LIVES) {
      setLives((prevState) => prevState + 1);
    }
  };

  const resetGame = () => {
    setLives(MAX_LIVES);
    setGridSize(INITIAL_GRID_SIZE);
    setPatternLength(INITIAL_PATTERN_LENGTH);
    setGuessedPattern([]);
    randomizePattern();
  };

  const randomizePattern = () => {
    const randomNumbers = new Set();
    while (randomNumbers.size !== patternLength) {
      randomNumbers.add(Math.floor(Math.random() * (gridSize * gridSize)) + 0);
    }

    setPattern([...randomNumbers] as number[]);
  };

  useEffect(() => {
    setTiles(Array.from({ length: gridSize * gridSize }));
    randomizePattern();
  }, [gridSize]);

  // Listed for win
  useEffect(() => {
    if (guessedPattern.length && guessedPattern.length === pattern.length) {
      confetti();
      loadNextLevel();
    }
  }, [guessedPattern]);

  useEffect(() => {
    const highlightTilesSequentially = async () => {
      for (const index of pattern) {
        await new Promise<void>((resolve) =>
          setTimeout(() => {
            setHighlightedTile(index);
            resolve();
          }, 1000)
        );
      }

      // clear last highlighted tile
      setTimeout(() => {
        setHighlightedTile(null);
      }, 1000);
    };

    highlightTilesSequentially();
  }, [pattern]);

  return (
    <div className='match-pattern__wrapper'>
      <Lives lives={lives} maxLives={MAX_LIVES} />
      <div
        className='tiles__wrapper'
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {lives === 0 && (
          <div className='lose__wrapper'>
            <p>YOU LOSE</p>
            <button onClick={resetGame}>Play again</button>
          </div>
        )}
        {tiles.map((_, index) => (
          <Tile
            isHighlighted={
              highlightedTile === index || guessedPattern.includes(index)
            }
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchPattern;
