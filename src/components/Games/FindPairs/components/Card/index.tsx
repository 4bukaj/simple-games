import './styles.css';

interface CardProps {
  symbol: string;
  isFlipped: boolean;
  onClick: () => void;
}

const Card = ({ symbol, isFlipped, onClick }: CardProps) => {
  return (
    <div className={`card ${isFlipped && '--flipped'}`} onClick={onClick}>
      {symbol}
    </div>
  );
};

export default Card;
