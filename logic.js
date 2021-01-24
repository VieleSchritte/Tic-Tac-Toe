let players = ['x', 'o'];
let activePlayer = 0;
let secondPlayer = 0;
let playboard = [];

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
function isWin() {
  let win = false;
  let counters = [0, 0, 0, 0]
  for (let i = 0; i < playboard.length; i++) {
    for (let j = 0; j < playboard.length; j++) {
      let cases = [
          playboard[i][j] === players[activePlayer],
          playboard[j][i] === players[activePlayer],
          playboard[j][j] === players[activePlayer],
          playboard[j][Math.abs(j - 2)] === players[activePlayer]
      ]
      for (let k = 0; k < cases.length; k++) {
        if (cases[k]) {
          counters[k]++;
        }
      }
    }
  }
  for (let counter of counters) {
    if (counter === 3) {
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