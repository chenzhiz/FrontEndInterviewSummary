/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let xs = new Set()
  let ys = new Set()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0]; j++) {
      if (matrix[i][j] === 0) {
        xs.add(i)
        ys.add(j)
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0]; j++) {
      if (xs.has(i) || ys.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
}

console.log(setZeroes())