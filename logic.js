let players = ['x', 'o'];
let activePlayer = 0;
let secondPlayer = 0;
let playboard = [];

//Функция генерит случайный выбор активного игрока
function setActivePlayer(zero, one) {
  return Math.floor(Math.random() * (one - zero + 1)) + zero;
}
/*Функция генерит случайные числа от 0 до 2 - на случай, если активный игрок - нолик, и первый ход - за программой, которой надо сделать выбор на ячейке*/
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

  /*если активный игрок - нолик, первый ход реализует программа*/
  //if (activePlayer == 1) {
  //playboard[setcell(0, 2)][setcell(0, 2)] = players[0];
  //}

  renderBoard(playboard);
}

//проверка победителя
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

//Что происходит на клик
function click(row, column) {
  //ход
  playboard[row][column] = players[activePlayer];
  renderBoard(playboard);

  /*while (ifThereIsWin(activePlayer) == false || ifThereIsWin(players[1 - activePlayer] == false)) {
    continue;
  }*/

  //проверка победителя
  if (ifThereIsWin(players[activePlayer])) {
    showWinner(activePlayer);
  }

  activePlayer = 1 - activePlayer;
}