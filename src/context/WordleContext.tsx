import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { UsedLetter, GameEndType } from '../types/games';

interface WordleContextProps {
  possibleWords: string[];
  setPossibleWords: Dispatch<SetStateAction<string[]>>;
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
  currentRow: number;
  setCurrentRow: Dispatch<SetStateAction<number>>;
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
  gameEnd: GameEndType;
  setGameEnd: Dispatch<SetStateAction<GameEndType>>;
  usedLetters: UsedLetter[][];
  showError: boolean;
  setShowError: Dispatch<SetStateAction<boolean>>;
  setUsedLetters: Dispatch<SetStateAction<UsedLetter[][]>>;
  handleLetterClick: (letter: string) => void;
  handleEnterClick: () => void;
  handleBackspaceClick: () => void;
}

interface WordleContextProviderProps {
  children: JSX.Element;
}

export const ROWS = 6;
export const LETTERS = 5;

export const WordleContext = createContext<WordleContextProps>({
  possibleWords: [],
  setPossibleWords: () => {},
  word: null,
  setWord: () => {},
  currentRow: null,
  setCurrentRow: () => {},
  guesses: [],
  setGuesses: () => {},
  gameEnd: null,
  setGameEnd: () => {},
  usedLetters: [],
  showError: false,
  setShowError: () => {},
  setUsedLetters: () => {},
  handleLetterClick: () => {},
  handleEnterClick: () => {},
  handleBackspaceClick: () => {},
});

export const WordleContextProvider = ({
  children,
}: WordleContextProviderProps) => {
  const [possibleWords, setPossibleWords] = useState([]);
  const [word, setWord] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [guesses, setGuesses] = useState(Array(ROWS).fill(''));
  const [gameEnd, setGameEnd] = useState(null);
  const [usedLetters, setUsedLetters] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleLetterClick = (letter: string) => {
    setGuesses((prevState) => {
      const newValue = [...prevState];
      newValue[currentRow] = newValue[currentRow] + letter;

      return newValue;
    });
  };

  const handleEnterClick = () => {
    if (!possibleWords.includes(guesses[currentRow])) {
      setShowError(true);
      setTimeout(() => setShowError(false), 1000);
      return;
    }

    const newRowValue = currentRow + 1;

    if (newRowValue === 6) {
      setGameEnd('lose');
      return;
    }

    setCurrentRow(newRowValue);
  };

  const handleBackspaceClick = () => {
    setGuesses((prevState) => {
      const newValue = [...prevState];
      newValue[currentRow] = newValue[currentRow].substring(
        0,
        newValue[currentRow].length - 1
      );

      return newValue;
    });
  };

  return (
    <WordleContext.Provider
      value={{
        possibleWords,
        setPossibleWords,
        word,
        setWord,
        currentRow,
        setCurrentRow,
        guesses,
        setGuesses,
        gameEnd,
        setGameEnd,
        usedLetters,
        showError,
        setShowError,
        setUsedLetters,
        handleLetterClick,
        handleEnterClick,
        handleBackspaceClick,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};

export const useWordleContext = () => {
  return useContext(WordleContext);
};
