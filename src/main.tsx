import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GamesContextProvider } from './context/GamesContext.tsx';

createRoot(document.getElementById('root')!).render(
  <GamesContextProvider>
    <App />
  </GamesContextProvider>
);
