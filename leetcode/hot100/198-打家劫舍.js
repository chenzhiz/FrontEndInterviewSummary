/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length
  let f = Array(n).fill(0)
  f[0] = nums[0]
  for (let i = 1; i < n; i++) {
    f[i] = Math.max((i - 1 > 0 ? f[i - 2] : 0) + nums[i], f[i - 1])
  }
  return f[f.length - 1]
}

console.log(rob([2, 7, 9, 3, 1]))