// 这个从1开始数有点难蚌
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1 && nums[i] <= nums.length && nums[i] >= 1) {
      let cur = nums[i]
      while (cur <= nums.length && cur >= 1 && nums[cur - 1] != cur) {
        let t = nums[cur - 1]
        nums[cur - 1] = cur
        cur = t
      }
    }
    // console.log(nums)
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1
  }
  return nums.length + 1
}

console.log(firstMissingPositive([3, 4, -1, 1]))