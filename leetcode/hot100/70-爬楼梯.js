/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let nums = new Array(50).fill(0)
  nums[0] = nums[1] = 1
  nums[2] = 2
  
  for(let i = 3; i<= n ; i++){
    // 记得考虑重复问题， 差两格和差一格3种走法中间有一个重复的
    nums[i] = nums[i-1] + nums[i-2]
  }
  return nums[n]
};


console.log(climbStairs(3))