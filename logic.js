let players = ['x', 'o'];
let activePlayer = 0;
let secondPlayer = 0;
let playboard = [];

// What happens on start
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

function isWinCase(i) {
  let winCases = [
    playboard[i][0] === players[activePlayer] &&
    playboard[i][1] === players[activePlayer] &&
    playboard[i][2] === players[activePlayer],

    playboard[0][i] === players[activePlayer] &&
    playboard[1][i] === players[activePlayer] &&
    playboard[2][i] === players[activePlayer],

    playboard[0][0] === players[activePlayer] &&
    playboard[1][1] === players[activePlayer] &&
    playboard[2][2] === players[activePlayer],

    playboard[0][2] === players[activePlayer] &&
    playboard[1][1] === players[activePlayer] &&
    playboard[2][0] === players[activePlayer]
  ];

  for (let i = 0; i < winCases.length; i++) {
    if (winCases[i]) {
      return true;
    }
  }
}

// Winner check
function isWin() {
  let win = false;
  for (let i = 0; i < 3; i++) {
    if (isWinCase(i)) {
      win = true;
    }
  }
  return win
}

// What happens on click
function click(row, column) {
  // Making step
  playboard[row][column] = players[activePlayer];
  renderBoard(playboard);

  // Winner check
  if (isWin(players[activePlayer])) {
    showWinner(activePlayer);
  }
  activePlayer = 1 - activePlayer;
}