import './styles.css';

interface TileProps {
  isHighlighted: boolean;
  onClick: () => void;
}

const Tile = ({ isHighlighted, onClick }: TileProps) => {
  return (
    <div
      className={`tile ${isHighlighted && '--highlighted'}`}
      onClick={onClick}
    />
  );
};

export default Tile;
