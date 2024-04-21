/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let m = nums.length
  let f = Array(m).fill(false)
  f[0] = true
  for (let i = 0; i < m; i++) {
    if (f[i] === false) break
    for (let j = Math.min(nums[i], m - i - 1); j >= 1; j--) {
      f[i + j] = true
      if(f[i + j - 1] === true) break
    }
  }
  return f[m - 1]
}

// 直接计算能到最远的地方
var canJump = function (nums){
  let k = 0
  for(let i=0; i < nums.length; i++){
    if(i > k) return false
    k = Math.max(k, i + nums[i])
  }
  return true
}

console.log(canJump([3, 2, 1, 0, 4]))