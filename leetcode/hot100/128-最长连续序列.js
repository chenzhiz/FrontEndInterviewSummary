/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length === 0) return 0
  nums.sort((a, b) => a - b)
  let max = 1
  let count = 1
  let pre = nums[0]
  for(let i = 1; i < nums.length; i++){
    if(nums[i] === pre + 1){
      pre = nums[i]
      count++
      max = Math.max(max, count)
    }
    else if (nums[i] > pre + 1){
      pre = nums[i]
      count = 1
    }
  }
  return max
};