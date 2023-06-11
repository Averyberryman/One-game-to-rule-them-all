//Variables:

var player1 = createPlayer('one', '🗡');  // Aragorn
var player2 = createPlayer('two', '👁');  // Sauron
var currentPlayer = player1;
var gameBoard = makeGameBoard();
var player1Wins = document.querySelector("#player-1-wins");
var player2Wins = document.querySelector("#player-2-wins");

// Functions:

function createPlayer(id, token) {
    return {
      id: id,
      token: token,
      wins: 0
    };
  }

  function makeGameBoard() {
    var board = array(9).fill('');

    function findSquare(row, column) {
        return board[row * 3 + column];
    }

    function fillSquare (row, column, emoji) {
        var index = row * 3 + col;
        board[index] = emoji;
    }
    return {
        findSquare,
        fillSquare,
    }
  }

  function checkWins(player) {
    var winningNumbers = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // winning rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // winning columns
      [0, 4, 8], [2, 4, 6] // winning diagonals
    ];
  
    for (var condition of winningNumbers) {
      var [a, b, c] = condition;
      if (
        gameBoard.findSquare(Math.floor(a / 3), a % 3) === player.token &&
        gameBoard.findSquare(Math.floor(b / 3), b % 3) === player.token &&
        gameBoard.findSquare(Math.floor(c / 3), c % 3) === player.token
      ) {
        return true;  
      }
    }
  
    return false; 
  }
  
  function checkDraws() {
    for (var square of gameBoard) {
      if (square === '') {
        return false; // There is an empty square, game not a draw
      }
    }
  
    return true; // All squares are filled, game is a draw
  }
  

  
