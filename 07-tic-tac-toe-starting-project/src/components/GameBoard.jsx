import { useState } from "react";
const initialGameBoard = [
    [null, null,null],
    [null, null,null],
    [null, null,null],
]; 
export default function Gameboard({onSelectSquare, activePlayerSymbol}){
  const [GameBoard, setGameBoard] = useState(initialGameBoard) 

  function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((previousGameBoard) => {
        const updatedGameBoard = [...previousGameBoard.map((innerArray)=>[...innerArray])]
        updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
        return updatedGameBoard
    })

    onSelectSquare(); 
  
  }

    return(
        <ol id='game-board'>
            {GameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li> )}
        </ol>
    )
}