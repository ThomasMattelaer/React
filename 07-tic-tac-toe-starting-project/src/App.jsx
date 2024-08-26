import { useState } from "react"; 

import Player from "./components/player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";

function App() {
  const[gameTurns, setGameTurns] = useState([])
  const[active, setActive] = useState('X')

  function handleSelectSquare(){
    setActive((curActivePlayer) => curActivePlayer == 'X' ? 'O' : 'X'); 
    setGameTurns()
  }

  return (
    
    <main>
      <div id = "game-container">
        <ol id="players" className="highlight-player">
          <Player initialname='player 1' symbol = 'X' isActive={active === "X"}/>
          <Player initialname='player2'  symbol = 'O' isActive={active === "O"}/>
        </ol>
        
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={active}/>
      </div>
      <Log></Log>
    </main>
  )
}

export default App
