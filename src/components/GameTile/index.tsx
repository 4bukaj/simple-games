import './styles.css';

interface GameTileProps {
  icon: JSX.Element;
  onClick: () => void;
}

export default function GameTile({ icon, onClick }: GameTileProps) {
  return (
    <div className='tile__wrapper' onClick={onClick}>
      {icon}
    </div>
  );
}
