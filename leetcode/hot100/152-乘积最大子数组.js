// 二维动态规划超时
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let n = nums.length
  let dp = Array(n).fill(0).map(() => Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i]
  }
  let max = Math.max(...nums)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] * nums[j]
      max = Math.max(max, dp[i][j])
    }
  }
  return max
}

// 记录最大最小值，最小有可能乘上负数变成最大
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let [f, g, ans] = [nums[0], nums[0], nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const [ff, gg] = [f, g]
    f = Math.max(nums[i], ff * nums[i], gg * nums[i])
    g = Math.min(nums[i], ff * nums[i], gg * nums[i])
    ans = Math.max(ans, f)
  }
  return ans
}

console.log(maxProduct([-2, 0, -1]))