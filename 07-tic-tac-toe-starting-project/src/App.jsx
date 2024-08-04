import Player from "./components/player.jsx"
import GameBoard from "./components/GameBoard.jsx"

function App() {
  

  return (
    
    <main>
      <div id = "game-container">
        <ol id="players">
          <Player initialname='player 1' symbol = 'X'/>
          <Player initialname='player2' symbol='O'/>
        </ol>
        
        <GameBoard />
      </div>
      LOG
    </main>
  )
}

export default App
