import './styles.css';
import { useWordleContext } from '../../../../context/WordleContext';
import { useEffect, useState } from 'react';
import { LetterStatus } from '../../../../types/games';

interface LetterProps {
  rowIndex: number;
  index: number;
}

const Letter = ({ rowIndex, index }: LetterProps) => {
  const { word, guesses, currentRow, usedLetters, setIsWin, setUsedLetters } =
    useWordleContext();
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isMissplaced, setIsMissplaced] = useState(false);
  const letter = guesses[rowIndex][index];

  const checkLetter = () => {
    const guessedWord = guesses[rowIndex];

    if (guessedWord === word) {
      setIsCorrect(true);
      setIsWin(true);
      return;
    }

    let letterStatus: LetterStatus;

    if (word[index] === letter) {
      setIsCorrect(true);
      letterStatus = 'correct';
    } else if (word.includes(letter)) {
      if (usedLetters[letter] === 'correct') {
        setIsIncorrect(true);
      } else {
        setIsMissplaced(true);
      }

      letterStatus = 'missplaced';
    } else {
      setIsIncorrect(true);
      letterStatus = 'incorrect';
    }

    setUsedLetters((prevState) => {
      const newValue = { ...prevState };
      const wasLetterCorrect = newValue[letter] === 'correct';

      if (!wasLetterCorrect) newValue[letter] = letterStatus;

      return newValue;
    });
  };

  useEffect(() => {
    if (currentRow === 0 || currentRow - rowIndex !== 1) return;

    checkLetter();
  }, [currentRow]);

  return (
    <div className='input__wrapper'>
      <input
        className={`letter__input ${isIncorrect ? '--incorrect' : ''} ${
          isMissplaced ? '--missplaced' : ''
        } ${isCorrect ? '--correct' : ''}`}
        value={letter || ''}
        disabled
      />
    </div>
  );
};

export default Letter;
