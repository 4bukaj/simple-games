import { useWordleContext } from '../../../../context/WordleContext';
import { LetterStatus } from '../../../../types/games';
import './styles.css';

interface LetterProps {
  rowIndex: number;
  letterIndex: number;
  status: LetterStatus;
}

const Letter = ({ rowIndex, letterIndex, status }: LetterProps) => {
  const { guesses } = useWordleContext();
  return (
    <div className='input__wrapper'>
      <input
        className={`letter__input${status ? ` --${status}` : ''}`}
        value={guesses[rowIndex][letterIndex] || ''}
        disabled
      />
    </div>
  );
};

export default Letter;
