/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0
  let mi = prices[0]
  for (v of prices) {
    ans = Math.max(ans, v - mi)
    mi = Math.min(mi, v)
  }
  return ans
}