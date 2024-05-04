/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Map 偷鸡，看看题解
var findTargetSumWays = function (nums, target) {
  let m = new Map()
  if(nums[0] === 0){
    m.set(0, 2)
  }else{
    m.set(nums[0], 1)
    m.set(-nums[0], 1)
  }
  for (let i = 1; i < nums.length; i++) {
    let nm = new Map()
    for (item of m) {
      nm.set(item[0] + nums[i], (m.get(item[0]) ?? 0) + (nm.get(item[0] + nums[i]) ?? 0))
      nm.set(item[0] - nums[i], (m.get(item[0]) ?? 0) + (nm.get(item[0] - nums[i]) ?? 0))
    }
    m = nm
  }
  return (m.get(target) ?? 0)
}


// dp 转化成0-1背包问题，总和为s ， x = 添加 - 号的元素之和， s-x则为 添加 + 号的元素之和
// s - 2x = target  x = (s - target) / 2
// 问题就转化成选 几个数凑成 x 经典动态规划 0-1背包
var findTargetSumWays = function (nums, target) {
  let s = 0
  for(let v of nums){
    s += v
  }
  if(s < target || (s - target) % 2 != 0){
    return 0
  }
  const m = nums.length
  const n = (s - target) / 2
  let dp = Array( n + 1).fill(0)
  // i 轮表示当前第几个物品,这题因为只用到i-1,所以二维可以压缩 j 是目标的大小
  dp[0] = 1
  for(let i = 0; i < m ; i++){
    for(let j = n; j>= nums[i]; j--){
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[n]
}
console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1))