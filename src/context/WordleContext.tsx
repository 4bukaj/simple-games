import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { UsedLetter } from '../types/games';

interface WordleContextProps {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
  currentRow: number;
  setCurrentRow: Dispatch<SetStateAction<number>>;
  guesses: string[];
  setGuesses: Dispatch<SetStateAction<string[]>>;
  isWin: boolean;
  setIsWin: Dispatch<SetStateAction<boolean>>;
  usedLetters: UsedLetter[][];
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
  word: null,
  setWord: () => {},
  currentRow: null,
  setCurrentRow: () => {},
  guesses: [],
  setGuesses: () => {},
  isWin: false,
  setIsWin: () => {},
  usedLetters: [],
  setUsedLetters: () => {},
  handleLetterClick: () => {},
  handleEnterClick: () => {},
  handleBackspaceClick: () => {},
});

export const WordleContextProvider = ({
  children,
}: WordleContextProviderProps) => {
  const [word, setWord] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [guesses, setGuesses] = useState(Array(ROWS).fill(''));
  const [isWin, setIsWin] = useState(false);
  const [usedLetters, setUsedLetters] = useState([]);

  const handleLetterClick = (letter: string) => {
    setGuesses((prevState) => {
      const newValue = [...prevState];
      newValue[currentRow] = newValue[currentRow] + letter;

      return newValue;
    });
  };

  const handleEnterClick = () => {
    setCurrentRow((prevState) => prevState + 1);
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
        word,
        setWord,
        currentRow,
        setCurrentRow,
        guesses,
        setGuesses,
        isWin,
        setIsWin,
        usedLetters,
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
