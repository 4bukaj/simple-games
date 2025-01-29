import './App.css';
import GameWrapper from './components/GameWrapper';
import GameControls from './components/GameControls';

const App = () => {
  return (
    <div className='container'>
      <GameControls />
      <GameWrapper />
    </div>
  );
};

export default App;
