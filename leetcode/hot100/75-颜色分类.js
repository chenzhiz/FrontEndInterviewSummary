/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 偷鸡排序
var sortColors = function(nums) {
  nums.sort((a,b) => a-b)
};

// 不偷鸡
var sortColors = function(nums) {
  let i = -1
  let j = nums.length;
  let k = 0
  while(k < j){
    if (nums[k] === 0){
      ++i;
      [nums[k], nums[i]] = [nums[i], nums[k]]
      ++k
    }else if(nums[k] === 2){
      --j;
      [nums[k], nums[j]] = [nums[j], nums[k]]
    }else{
      ++k;
    }
  }
};

console.log(sortColors([2,0,2,1,1,0]))