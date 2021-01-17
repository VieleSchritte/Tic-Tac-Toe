let players = ['x', 'o'];
let activePlayer = 0;
let secondPlayer = 0;
let playboard = [];

// Generates random choice of an active player
function setActivePlayer(zero, one) {
  return Math.floor(Math.random() * (one - zero + 1)) + zero;
}
// Generates random numbers from 0 to 2
function setcell(zero, two) {
  return Math.floor(Math.random() * (two - zero + 1)) + zero;
}

//Что происходит при старте
function startGame() {
  playboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 0;
  secondPlayer = 1;

  renderBoard(playboard);
}

// Winner check
function ifThereIsWin(player) {
  let win = false;
  for (let i = 0; i < playboard.length; i++) {
    for (let j = 0; j < playboard[i].length; j++) {
      if (
        playboard[i][0] === players[activePlayer] &&
        playboard[i][1] === players[activePlayer] &&
        playboard[i][2] === players[activePlayer]) {
          win = true;
        } else if (
          playboard[0][j] === players[activePlayer] &&
          playboard[1][j] === players[activePlayer] &&
          playboard[2][j] === players[activePlayer]
        ) {
          win = true;
        } else if (
          playboard[0][0] === players[activePlayer] &&
          playboard[1][1] === players[activePlayer] &&
          playboard[2][2] === players[activePlayer]
        ) {
          win = true;
        } else if (
          playboard[0][2] === players[activePlayer] &&
          playboard[1][1] === players[activePlayer] &&
          playboard[2][0] === players[activePlayer]
        ) {
          win = true;
        }
    }
  }
  return win;
}

// Click action
function click(row, column) {
  // Making step
  playboard[row][column] = players[activePlayer];
  renderBoard(playboard);

  // Winner check in the end
  if (ifThereIsWin(players[activePlayer])) {
    showWinner(activePlayer);
  }
  
  activePlayer = 1 - activePlayer;
}