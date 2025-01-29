import React, { useState } from "react";
import GameTile from "./components/GameTile";
import { Game } from "./types/games";
import { games } from "./utils/games";
import FindPairs from "./components/Games/FindPairs";
import MatchPattern from "./components/Games/MatchPattern";
import "./App.css";
import ChevronLeft from "./components/Icons/ChevronLeft";
import { colors } from "./utils/colors";

const App = () => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null)
  
  const renderCurrentGame = () => {
    switch(currentGame) {
      case 'findPairs':
        return <FindPairs />
      case 'matchPattern':
        return <MatchPattern />
      default:
        return <p>No game</p>
    }
  }

  const handleBackToGameSelectClick = () => {
    setCurrentGame(null)
  }

  return (
    <div className="container" id="container">
      {currentGame && <div className="controls__wrapper" onClick={handleBackToGameSelectClick}>
        <ChevronLeft color={colors.gold}/>
        <p className="controls__text">Go back</p>
      </div>}
      {currentGame ? renderCurrentGame() : (
        <div className="games__wrapper">
          {games.map((game) => (
            <GameTile
              key={game.name}
              icon={game.icon}
              onClick={() => setCurrentGame(game.name)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
