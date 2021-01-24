window.addEventListener('load', startGame);

let boardEl = document.getElementById('board');
let modalEl = document.getElementById('modal');
let resetButtons = document.getElementsByClassName('reset');
// let dimensions = [3, 4, 5];

/* function setDimension(dimensions) {
  let dimsBlock = document.getElementById('dimensions');
  let dimsList = [];
  for (let dimension of dimensions) {
    dimsList.push(
        <div class="${dimension}"></div>
    )
  }
} */

for (let btn of resetButtons) {
  btn.addEventListener('click', function () {
    if (!modalEl.classList.contains('hidden')) {
      modalEl.classList.add('hidden');
    }
    startGame();
  });
}

boardEl.addEventListener('click', function (event) {
  let targetClasses = event.target.classList;
  let targetData = event.target.dataset;
  if (targetClasses.contains('field') && !targetClasses.contains('busy')) {
    click(targetData.row, targetData.col);
  }
});

function showWinner(winner) {
  console.log(winner)
  let header = modalEl.querySelector("h2");
  header.textContent = `🍾 player #${winner + 1} has won! 🍾`;
  modalEl.classList.remove('hidden');
}

function renderBoard(board) {
  const fields = [];
  for (let [i, row] of board.entries()) {
    for (let [j, value] of row.entries()) {
      fields.push(`
        <div class="field ${value ? 'busy' : 'free'}" 
            data-row="${i}" 
            data-col="${j}"
            style="grid-row:${i + 1};grid-column:${j + 1};"
        >
          ${value || ''}
        </div>
      `);
    }
  }
  boardEl.innerHTML = fields.join('');
}