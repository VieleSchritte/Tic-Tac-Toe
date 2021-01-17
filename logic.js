let players = ['x', 'o'];
let activePlayer = 0;
let playboard = [];

// for a start
function startGame() {
  playboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(playboard);
}

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

// What happens on click
function click(row, column) {
  // Making step
  playboard[row][column] = players[activePlayer];
  renderBoard(playboard);

  // Winner check
  if (ifThereIsWin(players[activePlayer])) {
    showWinner(activePlayer);
  }
  
  activePlayer = 1 - activePlayer;
}