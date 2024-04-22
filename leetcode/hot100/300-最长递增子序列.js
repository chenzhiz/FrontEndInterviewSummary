/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length
  // 以 i 为结尾的，枚举之前是否能加,动态规划思维要活跃一点
  const f = new Array(n).fill(1)
  // 枚举遍历之前的所有结尾的结果，而不是看单个数字

  for (let i = 1; i < n; i++) {
    for(let j = 0; j < i; j++){
      if(nums[i] > nums[j]){
        f[i] = Math.max(f[i], f[j] + 1)
      }
    }
  }
  return Math.max(...f)
}

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))