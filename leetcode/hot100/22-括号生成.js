/**
 * @param {number} n
 * @return {string[]}
 */
const dfs = (left, right, n, s, res) => {
  if (left === n && right === n) {
    res.push(s)
  }
  if (left < n) {
    dfs(left + 1, right, n, s + "(", res)
  }
  if (right < left) {
    dfs(left, right + 1, n, s + ")", res)
  }
}

var generateParenthesis = function (n) {
  let res = []
  dfs(0, 0, n, "", res)
  return res
}

console.log(generateParenthesis(3))

