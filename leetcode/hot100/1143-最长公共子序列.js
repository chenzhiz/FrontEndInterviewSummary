/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length
  let n = text2.length
  let arr = Array(m).fill().map(() => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let t1 = (j - 1 >= 0 && i - 1 >= 0) ? arr[i - 1][j - 1] : 0
      if (text1[i] === text2[j]) {
        t1 = t1 + 1
      }
      let t2 = (j - 1 >= 0) ? arr[i][j - 1] : 0
      let t3 = (i - 1 >= 0) ? arr[i - 1][j] : 0
      arr[i][j] = Math.max(t1, t2, t3)
    }
  }
  console.log(arr)
  return arr[m - 1][n - 1]

}

console.log(longestCommonSubsequence("aa", "aaaa"))