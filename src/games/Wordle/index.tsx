import axios from 'axios';
import { useEffect } from 'react';
import { randomNumber } from '../../utils/numbers';
import Row from './components/Row';
import confetti from 'canvas-confetti';

import './styles.css';
import { LETTERS, ROWS, useWordleContext } from '../../context/WordleContext';
import Keyboard from './components/Keyboard';

export const Wordle = () => {
  const {
    currentRow,
    guesses,
    isWin,
    setWord,
    handleLetterClick,
    handleEnterClick,
    handleBackspaceClick,
  } = useWordleContext();

  useEffect(() => {
    setWord('hello');
    // const fetchWord = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       'https://api.frontendexpert.io/api/fe/wordle-words'
    //     );

    //     setWord(data[randomNumber(0, data.length)]);
    //   } catch (error) {
    //     console.log(error);
    //     setWord('hello');
    //   }
    // };

    // fetchWord();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isWin) return;

      const { key } = event;

      const isLetter = /^[a-zA-Z]$/;
      const isBackspace = /^Backspace$/;
      const isEnter = /^Enter$/;

      if (isLetter.test(key) && guesses[currentRow].length < LETTERS) {
        handleLetterClick(key);
      } else if (isBackspace.test(key)) {
        handleBackspaceClick();
      } else if (isEnter.test(key) && guesses[currentRow].length === LETTERS) {
        handleEnterClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [guesses, currentRow]);

  useEffect(() => {
    if (!isWin) return;

    confetti();
  }, [isWin]);

  return (
    <div className='wordle__wrapper'>
      {Array.from({ length: ROWS }).map((_, index) => (
        <Row key={index} rowIndex={index} />
      ))}
      <Keyboard />
    </div>
  );
};

export default Wordle;
