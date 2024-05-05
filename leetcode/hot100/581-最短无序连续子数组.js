/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let m = nums.length
  let arr = [...nums]
  nums.sort((a, b) => a - b)
  let i = 0
  let j = m - 1

  while(i <= j && nums[i] === arr[i]) i++
  while(i <= j && nums[j] === arr[j]) j--

  return j - i + 1
};

console.log(findUnsortedSubarray([1]))