const matrix = [
  [2, 3, 9],
  [5, 11, -2],
  [20, 10, 5],
];

function diagonalDifference(arr: number[][]): number {
  const l1 = arr.length;
  let sum1 = 0;
  for (let i = 0; i < l1; i++) {
    sum1 += arr[i][i];
  }

  let sum2 = 0;
  for (let i = 0; i < l1; i++) {
    sum2 += arr[i][l1 - i - 1];
  }

  return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference(matrix));
