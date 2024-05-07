/**
 * @param {number[]} nums
 * @return {number}
 */
// 从前往后dp太慢，直接开始进来的时候直接判断能到的最远的那个位置min一下
// var jump = function(nums) {
//     let m = nums.length
//     let dp = Array(m).fill(1 << 30)
//     dp[0] = 0
//     for(let i = 1; i < m; i++){
//       let min = 1 << 30
//       for(let j = 1; i-j >= 0; j++){
//         if(nums[i - j] >= j && (dp[i-j] + 1) < min){
//           min = dp[i - j] + 1
//         }
//       }
//       dp[i] = min
//     }
//     return dp[m - 1]
// };

var jump = function(nums){
  let m = nums.length
  let dp = Array(m).fill(1 << 30)
  dp[0] = 0
  for(let i = 0; i < m; i++){
    for(let j = 1; j <= nums[i] && i + j < m; j++){
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1)
    }
  }
  return dp[m - 1]
}


var jump = function(nums){
  let [ans, mx, last] = [0,0,0]
  for(let i = 0; i < m; i++){
    mx = Math.max(mx, i + nums[i])
    if(last === i){
      ++ans
      last = mx
    }
  }
  return ans
}

jump([2,3,1,1,4])