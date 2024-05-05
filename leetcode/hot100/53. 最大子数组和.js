/**
 * @param {number[]} nums
 * @return {number}
 */
// 如果只有负数还是要单独处理一下的
var maxSubArray = function(nums) {
  let max = -(1 << 30)
  let count = 0 
  let m = nums.length
  for(let i = 0; i < m; i++){
    max = Math.max(max, nums[i])
    if(nums[i] >= 0){
      count += nums[i]
      max = Math.max(max, count)
    } 
    else{
      count += nums[i]
      count = count < 0 ? 0 : count
    }
  }
  return max
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])