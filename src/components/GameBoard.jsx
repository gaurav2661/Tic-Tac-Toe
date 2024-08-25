import {useState} from "react";

const   initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({ onSelectSquare,activePlayerSymbol}) {
    const [gameBoard,setGameBoard, set] = useState(initialGameBoard);

   function handleGameBoard(rowIndex,colIndex) {
        setGameBoard((prevGameBoard => {
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            console.log("Active player symbol: ", activePlayerSymbol);
            return newGameBoard;
        }));
       onSelectSquare();
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => <li key={colIndex}>
                    <button onClick={() => handleGameBoard(rowIndex,colIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
            </li>
            )}
        </ol>
    );
}