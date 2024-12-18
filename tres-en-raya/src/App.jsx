import {useState} from "react";
import confetti from "canvas-confetti"
import {Square} from "./components/Square.jsx";
import {TURNS} from "./constans.js";
import {checkWinner, checkEndGame} from "./logic/board.js";
import {WinnerModal} from "./components/WinnerModal.jsx";
import {saveGameToStorage, resetGameStorage} from "./logic/storage/index.js";

function App() {
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem("board");
        if (boardFromStorage) return JSON.parse(boardFromStorage);
        return Array(9).fill(null)
    });

    const [turn, setTurn] = useState(() => {
        const turnFormStorage = window.localStorage.getItem("turn");
        return turnFormStorage ?? TURNS.X
    });

    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        //No actrualizamos la posición si ya contiene algo
        if (board[index] || winner) {
            return
        }

        // Actualizar el tablero

        // copia del estado
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard); // nuevo estado colocado

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        //Guardar la partida
        saveGameToStorage({board: newBoard, turn: newTurn});

        // revisar si hay un ganador
        const newWinner = checkWinner(newBoard);
        if (newWinner) {
            confetti()
            setWinner(newWinner);
        } else if (checkEndGame(newBoard)) {
            setWinner(false);
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null);

        resetGameStorage()

    }

    return (
        <main className="board">
            <h1>Tres en raya</h1>
            <button onClick={resetGame}>Reiniciar</button>
            <section className="game">
                {
                    board.map((square, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {square}
                            </Square>
                        )
                    })
                }
            </section>
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>

            <WinnerModal resetGame={resetGame} winner={winner}/>
        </main>

    )
}

export default App
