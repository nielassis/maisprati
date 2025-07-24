function isSafe(board, row, col, num) {
  for (let x = 0; x < 4; x++) {
    if (board[row][x] === num || board[x][col] === num) {
      return false;
    }
  }

  const startRow = row - (row % 2);
  const startCol = col - (col % 2);

  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 2; c++) {
      if (board[startRow + r][startCol + c] === num) {
        return false;
      }
    }
  }

  return true;
}

function solveSudoku(board) {
  let row = -1;
  let col = -1;
  let foundEmpty = false;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) {
        row = i;
        col = j;
        foundEmpty = true;
        break;
      }
    }
    if (foundEmpty) break;
  }

  if (!foundEmpty) return true;

  for (let num = 1; num <= 4; num++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;

      if (solveSudoku(board)) {
        return true;
      }

      board[row][col] = 0;
    }
  }

  return false;
}

function generateSudoku4x4() {
  const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  solveSudoku(board);
  return board;
}

function gerarSudoku() {
  const sudoku = generateSudoku4x4();
  const board = document.getElementById("board");
  board.innerHTML = "";

  sudoku.forEach((linha) => {
    linha.forEach((valor) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = valor;
      board.appendChild(cell);
    });
  });
}

window.onload = gerarSudoku;
