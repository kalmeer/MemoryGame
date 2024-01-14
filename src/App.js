import { useState } from "react";
import "./App.css";
import Difficulty from "./Difficulty";

function App() {
  const [gameMode, setGameMode] = useState("");
  const [showGameMode, setShowGameMode] = useState(true);

  const handleClick = (mode) => {
    setGameMode(mode);
    setShowGameMode(false);
  };
  // before chosing the game mode
  if (showGameMode) {
    return (
      <div className="App-header">
        <h1>Memory Game</h1>
        <div className="GameMode">
          <div className="Mode" onClick={() => handleClick("Easy")}>
            Easy
          </div>

          <div className="Mode" onClick={() => handleClick("Med")}>
            Medium
          </div>

          <div className="Mode" onClick={() => handleClick("Hard")}>
            Hard
          </div>
        </div>
      </div>
    );
  } else {
    // display the game
    return (
      <div className="App-header">
        <Difficulty GameMode={gameMode} />
      </div>
    );
  }
}

export default App;
