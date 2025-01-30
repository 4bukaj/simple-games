import axios from 'axios';
import { useEffect } from 'react';
import { randomNumber } from '../../utils/numbers';
import Row from './components/Row';

import './styles.css';
import { LETTERS, ROWS, useWordleContext } from '../../context/WordleContext';
import Keyboard from './components/Keyboard';
import ErrorPopup from './components/ErrorPopup';
import GameEndScreen from './components/GameEndScreen';

export const Wordle = () => {
  const {
    currentRow,
    guesses,
    gameEnd,
    setWord,
    setPossibleWords,
    handleLetterClick,
    handleEnterClick,
    handleBackspaceClick,
  } = useWordleContext();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (gameEnd) return;

      const { key } = event;

      const isLetter = /^[a-zA-Z]$/;
      const isBackspace = /^Backspace$/;
      const isEnter = /^Enter$/;

      if (isLetter.test(key) && guesses[currentRow].length < LETTERS) {
        handleLetterClick(key.toLowerCase());
      } else if (isBackspace.test(key)) {
        handleBackspaceClick();
      } else if (isEnter.test(key) && guesses[currentRow].length === LETTERS) {
        handleEnterClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [guesses, currentRow, gameEnd]);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const { data } = await axios.get(
          'https://api.frontendexpert.io/api/fe/wordle-words'
        );

        const words = data.map((word: string) => word.toLowerCase());
        setPossibleWords(words);
        setWord(words[randomNumber(0, data.length)]);
      } catch (error) {
        console.log(error);
        setWord('error');
      }
    };

    fetchWord();
  }, []);

  return (
    <div className='wordle__wrapper'>
      {Array.from({ length: ROWS }).map((_, index) => (
        <Row key={index} rowIndex={index} />
      ))}

      <Keyboard />
      <ErrorPopup />
      <GameEndScreen />
    </div>
  );
};

export default Wordle;
