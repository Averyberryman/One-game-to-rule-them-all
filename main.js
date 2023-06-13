// Variables
var player1 = createPlayer(1, '🗡');
var player2 = createPlayer(2, '💍');
var currentPlayer = player1;
var gameBoard = makeGameBoard();
var player1Wins = document.querySelector("#player-1-wins");
var player2Wins = document.querySelector("#player-2-wins");
var playerTurn = document.querySelector("#player-turn")
var square = document.querySelectorAll(".square")

// Functions
function createPlayer(id, token) {
  return {
    id: id,
    token: token,
    wins: 0
  };
}

function makeGameBoard() {
  var board = Array(9).fill('');

  function findSquare(row, column) {
    return board[row * 3 + column];
  }

  function fillSquare(row, column, emoji) {
    var index = row * 3 + column;
    board[index] = emoji;
  }

  return {
    findSquare,
    fillSquare,
  };
}

function resetBoard() {
    setTimeout(function() {
      gameBoard = makeGameBoard();
      updateDisplay();
      currentPlayer = (currentPlayer === player1) ? player2 : player1;
      playerTurn.textContent = `It's ${currentPlayer.token}'s Turn!`;;
    }, 3000);
  }
  

function checkWins(player) {
  var winningNumbers = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
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
  for (var i = 0; i < square.length; i++) {
    if (gameBoard.findSquare(Math.floor(i / 3), i % 3) === '') {
      return false;
    }
  }

  return true;
}


function increaseWins(player) {
    player.wins++;
    updateDisplay();
    playerTurn.textContent = `${player.token} won!`;
  }
  
function changeTurn() {
  currentPlayer = (currentPlayer === player1) ? player2 : player1;
  updateDisplay();

}

function updateDisplay() {
  player1Wins.textContent = player1.wins;
  player2Wins.textContent = player2.wins;
  playerTurn.textContent = `It's ${currentPlayer.token}'s Turn!`;
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = gameBoard.findSquare(Math.floor(i / 3), i % 3);
  }
}

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function(event) {
    var clickedSquare = event.target;
    var cellIndex = parseInt(clickedSquare.dataset.cell);

    if (gameBoard.findSquare(Math.floor(cellIndex / 3), cellIndex % 3) === '') {
      gameBoard.fillSquare(Math.floor(cellIndex / 3), cellIndex % 3, currentPlayer.token);

      updateDisplay();

      if (checkWins(currentPlayer)) {
          increaseWins(currentPlayer);
          resetBoard();
      } else if (checkDraws()) {
        playerTurn.textContent = "It's a draw!";
        resetBoard();
      } else {
        changeTurn();
      }
    }
  });
}

