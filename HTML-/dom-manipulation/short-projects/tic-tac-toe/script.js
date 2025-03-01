let cells = document.querySelectorAll(".cell");

let currentPlayer = "X";

let board = Array(9).fill(null);

let isGameActive = true;

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// alert('Game starts! X turn...');

function handleCellClick(event) {
  let cell = event.target;

  // let cellIndex  = cell.dataset.index;

  let cellIndex = parseInt(cell.getAttribute("data-index"));

  if (board[cellIndex] || !isGameActive) {
    return;
  }

  board[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;

  console.log(board);

  //   check for winner

  if (checkForWinner()) {
    isGameActive = false;

    alert(`${currentPlayer} wins!`);

    //reset game
    resetGame()
  }

  if (checkForDraw(board)) {
    isGameActive = false;
    alert("It's a draw!");
    //reset game
    resetGame()
  }

  //changing the current player
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkForWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    let combination = winningCombinations[i];

    let a  = combination[0];
    let b = combination[1];
    let c = combination[2];


    console.log('combination',combination)
    if(board[a] && (board[a] == board[b]) && (board[b] == board[c])){
        return true;
    }
  }

  return false;
}

function checkForDraw(board) {
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      return false;
    }
  }
  return true;
}

function resetGame(){
    board.fill(null);
    currentPlayer = 'X';
    isGameActive = true;

    for(let  i = 0; i < cells.length; i++){
        cells[i].textContent = '';
    }
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleCellClick);
}
