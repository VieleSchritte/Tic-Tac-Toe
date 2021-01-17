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
  renderBoard(playboard);
}

function ifThereIsWin(player) {
  //
  for (let i = 0; i < playboard.length; i++) {
    for (let j = 0; j < playboard[i].length; j++) {
      let win = false;
      if (playboard[i][j] === players[activePlayer]) {
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