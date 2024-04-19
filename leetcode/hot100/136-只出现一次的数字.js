/**
 * @param {number[]} nums
 * @return {number}
 */
// 两个相同的数异或后为0
// 0 异或任何数都等于原数,
var singleNumber = function(nums) {
  for(let i=1; i < nums.length; i++) nums[0] ^= nums[i]
  return nums[0]
};

console.log(singleNumber([4,1,2,1,2]))