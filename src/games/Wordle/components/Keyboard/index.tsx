import { useEffect, useState } from 'react';
import { useWordleContext } from '../../../../context/WordleContext';
import './styles.css';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '⌫'],
];

const Keyboard = () => {
  const {
    guesses,
    word,
    usedLetters,
    handleLetterClick,
    handleBackspaceClick,
    handleEnterClick,
  } = useWordleContext();

  const handleKeyClick = (key: string) => {
    switch (key) {
      case '⌫': {
        handleBackspaceClick();
        break;
      }
      case 'Enter':
        handleEnterClick();
        break;
      default: {
        handleLetterClick(key);
        break;
      }
    }
  };

  return (
    <div className='wordle__keyboard'>
      {keys.map((keysRow, index) => (
        <div key={`row.${index}`} className='keyboard__keys-row'>
          {keysRow.map((key) => (
            <button
              key={key}
              className={`key__btn ${
                key === '⌫' || key === 'Enter' ? '--wider' : ''
              } ${key === 'Enter' ? '--enter' : ''}${
                usedLetters[key] ? `--${usedLetters[key]}` : ''
              }`}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
