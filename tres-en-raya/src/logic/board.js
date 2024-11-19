import {winnerCombos} from "../constans.js";

export const checkWinner = (boardToCheck) => {
    for (const combo of winnerCombos) {
        const [a, b, c] = combo;
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
    null;
}

export const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate
    // y si no ha más espacios vacios en el tablero
    return newBoard.every((square) => square !== null)
}