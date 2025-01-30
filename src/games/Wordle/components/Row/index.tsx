import './styles.css';
import Letter from '../Letter';
import { LETTERS, useWordleContext } from '../../../../context/WordleContext';
import { useEffect } from 'react';

interface RowProps {
  rowIndex: number;
}

const Row = ({ rowIndex }: RowProps) => {
  const { word, currentRow, guesses, usedLetters, setIsWin, setUsedLetters } =
    useWordleContext();

  const checkRow = () => {
    const guessedWord = guesses[rowIndex];
    const statuses = [];

    for (let i = 0; i < guessedWord.length; i++) {
      const letter = guessedWord[i];
      let status = 'incorrect';

      if (guessedWord[i] === word[i]) {
        status = 'correct';
      } else if (word.includes(letter)) {
        // letters that are already matched and repeating in guessed word
        // but not the original should be marked as incorrect
        const letterOccurrencesInPassword = getLetterOccurrences(letter, word);
        const letterOccurrencesInGuessedWord = getLetterOccurrences(
          letter,
          guessedWord
        );

        if (
          letterOccurrencesInGuessedWord > letterOccurrencesInPassword &&
          statuses.some(
            (item) => item.letter === letter && item.status === 'correct'
          )
        ) {
          status = 'incorrect';
        } else {
          status = 'missplaced';
        }
      }

      statuses.push({ letter, status });
    }

    setUsedLetters((prevState) => [...prevState, statuses]);

    if (guessedWord === word) {
      setIsWin(true);
      return;
    }
  };

  const getLetterOccurrences = (letter: string, word: string) => {
    return word.split('').filter((l) => l === letter).length;
  };

  useEffect(() => {
    if (currentRow === 0 || currentRow - rowIndex !== 1) return;

    checkRow();
  }, [currentRow]);

  return (
    <div className='row__wrapper'>
      {Array.from({ length: LETTERS }).map((_, index) => (
        <Letter
          key={`${rowIndex}-${index}`}
          rowIndex={rowIndex}
          letterIndex={index}
          status={usedLetters?.[rowIndex]?.[index]?.status || null}
        />
      ))}
    </div>
  );
};

export default Row;
