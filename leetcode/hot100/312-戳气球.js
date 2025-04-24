// 区间动态规划，没有想出来，结果是按照区间划分还是不够敏感
// https://doocs.github.io/leetcode/lc/312/
// 这里区间概念还是有点难理解的，为什么是乘上区间的两个端点，而不是乘上 k-1 和 k+1
// 因为整个区间可以认为都是为k服务的，他是这个区间最后一个戳掉的，i,j实际可以认为在区间外用于辅助确定范围的，这也就是为什么小于3长的区间都是0
// 这样看上去ik jk 和 k 有重叠，实际上每个区间只服务于区间内最后一个戳掉的气球，所以自然是乘上边界，而不是之前已经没掉的气球（内部的小区间对应的气球）
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length
  const arr = Array(n + 2).fill(1)
  for (let i = 0; i < n; i++) {
    arr[i + 1] = nums[i]
  }

  const f = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0))
  console.log(f)
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j <= n + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        f[i][j] = Math.max(f[i][j], f[i][k] + f[k][j] + arr[i] * arr[k] * arr[j])
      }
      console.log(f)
    }
  }
  return f[0][n + 1]
}

console.log(maxCoins([3, 2]))
