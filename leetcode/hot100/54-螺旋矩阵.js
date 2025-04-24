/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ans = []
  const fn = (matrix, k) => {
    let res = []
    if (matrix.length - 2 * k === 1) {
      for (let i = k; i < matrix[0].length - k; i++) {
        res.push(matrix[k][i])
      }
    } else if (matrix[0].length - 2 * k === 1) {
      for (let i = k; i < matrix.length - k; i++) {
        res.push(matrix[i][matrix[0].length - k - 1])
      }
    } else {
      for (let i = k; i < matrix[0].length - k; i++) {
        res.push(matrix[k][i])
      }
      res.pop()
      for (let i = k; i < matrix.length - k; i++) {
        res.push(matrix[i][matrix[0].length - k - 1])
      }
      res.pop()
      for (let i = k; i < matrix[0].length - k; i++) {
        res.push(matrix[matrix.length - k - 1][matrix[0].length - i - 1])
      }
      res.pop()
      for (let i = k; i < matrix.length - k; i++) {
        res.push(matrix[matrix.length - i - 1][k])
      }
      res.pop()
    }
    return res
  }

  let round = (Math.min(matrix.length, matrix[0].length) - 1) / 2
  for (let i = 0; i <= round; i++) {
    ans = [...ans, ...fn(matrix, i)]
  }
  return ans
}

console.log(spiralOrder([[6, 9, 7]]))