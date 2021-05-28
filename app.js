let GameBoard = (() => {
    'use strict';

    let boardID = document.getElementById("gameBoard");

    let gameBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ];

    const createGameBoard = () => {
        gameBoard = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
        let counter = 0;
        for(let x = 0; x < 3; x++) {
            for(let y = 0; y < 3; y++) {
                counter += 1;
                gameBoard[x][y] = document.createElement("div");
                gameBoard[x][y].className = "block";
                gameBoard[x][y].id = "block_" + counter;
                boardID.appendChild(gameBoard[x][y]);
            }
            
        }
        console.table(gameBoard)
    }

    return {
        createGameBoard,
    };
})();

GameBoard.createGameBoard();