export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const exampleSudokus = [
  [
    [0, 7, 0, 9, 8, 0, 0, 0, 1],
    [0, 0, 0, 2, 5, 0, 0, 4, 0],
    [5, 0, 0, 0, 0, 0, 8, 0, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 5],
    [9, 0, 8, 0, 6, 0, 3, 0, 0],
    [0, 0, 5, 3, 0, 8, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 9, 0],
    [0, 9, 6, 0, 4, 0, 0, 0, 0],
    [0, 0, 4, 1, 0, 0, 0, 0, 3],
  ],
  [
    [2, 5, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 9, 4, 6, 0, 0, 0],
    [0, 1, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 5, 0, 0, 0, 0, 9, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 3, 0, 0, 4, 0],
    [0, 8, 7, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 4, 3, 0, 0],
    [0, 0, 0, 0, 7, 0, 0, 0, 5],
  ],
  [
    [0, 0, 3, 0, 0, 7, 0, 0, 2],
    [0, 0, 1, 5, 0, 0, 7, 9, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 9],
    [0, 1, 0, 0, 0, 4, 3, 6, 0],
    [0, 0, 5, 0, 8, 0, 0, 0, 0],
    [3, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 6, 0, 0, 0, 3, 1, 7, 0],
  ],
  [
    [0, 6, 7, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 8, 5, 2, 0, 0, 0],
    [0, 0, 3, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 8, 0, 1, 0, 0],
    [9, 0, 4, 0, 0, 0, 6, 0, 0],
    [0, 0, 0, 9, 0, 0, 0, 7, 0],
    [0, 5, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 0, 0, 0, 0, 5, 2],
    [0, 2, 0, 1, 0, 0, 0, 0, 8],
  ],
  [
    [2, 0, 0, 8, 0, 0, 0, 0, 3],
    [0, 5, 0, 0, 2, 6, 0, 0, 9],
    [0, 0, 0, 1, 0, 0, 0, 6, 0],
    [0, 0, 7, 0, 0, 0, 0, 0, 5],
    [1, 0, 0, 0, 3, 4, 0, 9, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 3, 0, 0],
    [3, 0, 0, 0, 9, 2, 0, 4, 0],
    [0, 0, 0, 0, 8, 0, 0, 0, 0],
  ],
  [
    [0, 7, 0, 0, 4, 0, 0, 5, 0],
    [0, 6, 0, 9, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 6, 0, 0, 0, 9],
    [0, 0, 0, 0, 1, 0, 0, 0, 8],
    [6, 1, 0, 0, 5, 0, 2, 0, 0],
    [0, 0, 7, 4, 0, 0, 8, 0, 0],
    [8, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 3, 0, 0, 0, 0, 7],
  ],
  [
    [4, 3, 0, 0, 0, 0, 0, 6, 0],
    [0, 0, 0, 0, 0, 8, 0, 0, 0],
    [0, 0, 1, 5, 9, 0, 7, 0, 0],
    [0, 0, 8, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 3, 0, 0],
    [1, 0, 0, 8, 3, 0, 0, 0, 4],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 5, 3, 1, 0, 9, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 7],
  ],
  [
    [6, 0, 0, 0, 0, 0, 7, 0, 0],
    [0, 4, 0, 0, 3, 0, 0, 6, 5],
    [0, 0, 1, 0, 0, 8, 0, 0, 0],
    [0, 6, 0, 0, 5, 0, 0, 3, 9],
    [4, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 0],
    [8, 0, 0, 0, 0, 3, 0, 9, 7],
    [0, 0, 0, 0, 7, 0, 4, 0, 0],
    [0, 9, 0, 0, 0, 0, 2, 0, 0],
  ],
];

export function getSudoku() {
  const n = exampleSudokus.length;

  return exampleSudokus[Math.floor(Math.random() * n)];
}
