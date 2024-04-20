/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 动态规划，把大问题拆成小问题（适用于两边范围固定的题目）
var minDistance = function (word1, word2) {
  let m = word1.length
  let n = word2.length
  let f = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(1 << 30))

  for (let j = 0; j <= n; j++) {
    f[0][j] = j
  }
  for (let i = 0; i <= m; i++) {
    f[i][0] = i
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        f[i][j] = f[i - 1][j - 1]
      }
      else {
        f[i][j] = Math.min(f[i - 1][j - 1], f[i][j - 1], f[i - 1][j]) + 1
      }
    }
  }
  return f[m][n]
}

console.log(minDistance("horse", "ros"))