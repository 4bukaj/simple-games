import { colors } from '../../../../../utils/colors';
import HeartIcon from '../../../../Icons/HeartIcon';
import './styles.css';

interface LivesProps {
  lives: number;
  maxLives: number;
}

const Lives = ({ lives, maxLives }: LivesProps) => {
  return (
    <div className='lives__wrapper'>
      {Array.from({ length: maxLives }).map((_, index) => (
        <div className='icon__wrapper' key={index}>
          <HeartIcon color={index < lives ? colors.gold : colors.mediumGray} />
        </div>
      ))}
    </div>
  );
};

export default Lives;
