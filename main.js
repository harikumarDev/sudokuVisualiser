import { getSudoku, sleep } from "./helper.js";

const solveBtn = document.getElementById("solve");
const sudokuDiv = document.querySelector(".sudoku");

let sudoku = getSudoku();

const isValid = (row, col, k) => {
  for (let i = 0; i < sudoku.length; ++i) {
    if (sudoku[i][col] == k) return false;

    if (sudoku[row][i] == k) return false;

    let a = Math.floor(3 * Math.floor(row / 3) + Math.floor(i / 3));
    let b = Math.floor(3 * Math.floor(col / 3) + (i % 3));
    if (sudoku[a][b] == k) return false;
  }

  return true;
};

const solveSudoku = async () => {
  const rows = sudokuDiv.childNodes;

  for (let i = 0; i < sudoku.length; ++i) {
    const curRow = rows[i].childNodes;
    for (let j = 0; j < sudoku[i].length; ++j) {
      if (sudoku[i][j] == 0) {
        for (let k = 1; k <= 9; ++k) {
          if (isValid(i, j, k)) {
            sudoku[i][j] = k;
            curRow[j].innerText = k;

            await sleep(2);

            if (await solveSudoku()) return true;
            else {
              sudoku[i][j] = 0;
              curRow[j].innerText = 0;
            }
          }
        }

        return false;
      }
    }
  }

  return true;
};

function init() {
  for (let i = 0; i < sudoku.length; ++i) {
    const row = document.createElement("div");

    for (let j = 0; j < sudoku[i].length; ++j) {
      const ele = document.createElement("span");
      ele.innerText = sudoku[i][j];

      row.appendChild(ele);
    }

    sudokuDiv.appendChild(row);
  }
}

init();

solveBtn.addEventListener("click", () => {
  solveSudoku();
});
