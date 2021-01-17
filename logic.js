let players = ['x', 'o'];
let activePlayer = 0;
let secondPlayer = 0;
let playboard = [];

// for a start
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
function counterCheck(win, counter) {
  if (counter === 3) {
    win = true;
  }
  counter = 0;
  return win, counter;
}

function ifThereIsWin() {
  for (let i = 0; i < playboard.length; i++) {
    for (let j = 0; j < playboard[i].length; j++) {
      let win = false;
      let counter = 0
      for (let k = 0; k < 3; k++) {
        if (playboard[i][k] === players[activePlayer]) {
          counter += 1;
        }
      }
      win, counter = counterCheck(win, counter)

      for (let k = 0; k < 3; k++) {
        if (playboard[k][j] === players[activePlayer]) {
          counter += 1;
        }
      }
      win, counter = counterCheck(win, counter)

      for (let k = 0; k < 3; k++) {
        if (playboard[k][k] === players[activePlayer]) {
          counter += 1;
        }
      }
      win, counter = counterCheck(win, counter)

      for (let k = 0; k < 3; k++) {
        if (playboard[k][Math.abs(k - 2)] === players[activePlayer]) {
          counter += 1;
        }
      }
      win, counter = counterCheck(win, counter)
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
  if (ifThereIsWin()) {
    showWinner(activePlayer);
  }
  
  activePlayer = 1 - activePlayer;
}