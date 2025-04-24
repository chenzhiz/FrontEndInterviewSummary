// 这个确实不太会看的题解（看懂题解先，动态规划的能力也要提升，不要陷入滑动窗口的思维定式，
// 因为股票增长就是一维的，前面都是要经历的,所以时间维度就1维）
// https://doocs.github.io/leetcode/lc/309/#_1

// 记忆化搜索(避免了dfs大量的重复计算剪枝)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length
  let f = Array(n).fill(0).map(() => Array(2).fill(-1))

  // i 表示从第i天开始, j表示当前状态,0：不持有股票，1：持有股票
  const dfs = (i, j) => {
    if (i >= n) return 0
    if (f[i][j] !== -1) return f[i][j]
    // 表示不进行交易
    let ans = dfs(i + 1, j)
    if (j) {
      // 卖出判断
      ans = Math.max(ans, prices[i] + dfs(i + 2, 0))
    } else {
      // 买入
      ans = Math.max(ans, -prices[i] + dfs(i + 1, 1))
    }
    return (f[i][j] = ans)
  }
  return dfs(0, 0)
}

// 动态规划， i表示到第 i 天，且状态为 j 时能获得的最大利润 0:不持有股票， 1:持有股票
// f[i][j] 表示第 i 天且状态为 j 时能获得的最大利润
// f[i][0] = max(f[i - 1][0], f[i - 1][1] + prices[i])
// f[i][1] = max(f[i - 1][1], f[i - 2][0] - prices[i])
// f[0][0] = 0, f[0][1] = -prices[1]
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  const f = Array(n).fill(0).map(() => Array(2).fill(0))

  f[0][1] = -prices[0]
  for (let i = 1; i < n; i++) {
    f[i][0] = Math.max(f[i - 1][0], f[i - 1][1] + prices[i])
    f[i][1] = Math.max(f[i - 1][1], (i > 1 ? f[i - 2][0] : 0) - prices[i])
  }
  return f[n - 1][0]
}
