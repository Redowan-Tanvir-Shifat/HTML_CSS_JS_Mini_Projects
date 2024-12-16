const board = document.getElementById('game-board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetBtn = document.getElementById('reset');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalResetBtn = document.getElementById('modal-reset');

let currentPlayer = 'X';
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];

const checkWinner = () => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      gameActive = false;
      showModal(`${boardState[a]} Wins!`);
      return;
    }
  }

  if (!boardState.includes('')) {
    gameActive = false;
    showModal('It\'s a Draw!');
  }
};

const showModal = (message) => {
  modalMessage.textContent = message;
  modal.style.display = 'flex';
};

const handleClick = (index) => {
  if (boardState[index] !== '' || !gameActive) return;
  boardState[index] = currentPlayer;
  cells[index].textContent = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  if (gameActive) {
    status.textContent = `${currentPlayer}'s turn`;
  }
};

const resetGame = () => {
  gameActive = true;
  currentPlayer = 'X';
  boardState = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  status.textContent = `${currentPlayer}'s turn`;
  modal.style.display = 'none'; // Hide modal
};

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleClick(index));
});

resetBtn.addEventListener('click', resetGame);
modalResetBtn.addEventListener('click', resetGame);

status.textContent = `${currentPlayer}'s turn`;
