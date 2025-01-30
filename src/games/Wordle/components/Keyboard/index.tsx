import { useWordleContext } from '../../../../context/WordleContext';
import './styles.css';

const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '⌫'],
];

const Keyboard = () => {
  const {
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
        handleLetterClick(key.toLowerCase());
        break;
      }
    }
  };

  const getButtonStatus = (key: string) => {
    if (
      usedLetters.some((guess) =>
        guess.some(
          (letter) => letter.letter === key && letter.status === 'correct'
        )
      )
    ) {
      return 'correct';
    }

    if (
      usedLetters.some((guess) =>
        guess.some(
          (letter) => letter.letter === key && letter.status === 'missplaced'
        )
      )
    ) {
      return 'missplaced';
    }

    if (
      usedLetters.some((guess) =>
        guess.some(
          (letter) => letter.letter === key && letter.status === 'incorrect'
        )
      )
    ) {
      return 'incorrect';
    }

    return 'unused';
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
              } ${key === 'Enter' ? '--enter' : ''} --${getButtonStatus(key)}`}
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
