import './styles.css';
import Letter from '../Letter';
import { LETTERS } from '../../../../context/WordleContext';

interface RowProps {
  rowIndex: number;
}

const Row = ({ rowIndex }: RowProps) => {
  return (
    <div className='row__wrapper'>
      {Array.from({ length: LETTERS }).map((_, index) => (
        <Letter
          key={`${rowIndex}-${index}`}
          rowIndex={rowIndex}
          index={index}
        />
      ))}
    </div>
  );
};

export default Row;
