/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 偷鸡法 o(n)
var search = function(nums, target) {
  return nums.indexOf(target)
};

var search = function(nums, target) {
  if(!nums || nums.length === 0) return -1
  let i = 0;
  let j = nums.length - 1
  while(i <= j){
    let mid = Math.floor((i + j) / 2)
    if(nums[mid] === target) return mid
    // 单调
    if((nums[mid] - nums[i]) * (nums[mid] - nums[j]) <= 0){
      // 单调减
      if(nums[i] > nums[j]){
        if(nums[mid] < target ){
          j = mid - 1
        }else{
          i = mid + 1
        }
      }else{
        if(nums[mid] < target ){
          i = mid + 1
        }else{
          j = mid - 1
        }
      }
    }else{
      if(nums[mid] > nums[i]){
        if( nums[mid] > target && target >= nums[i]){
          j = mid - 1
        }else{
          i = mid + 1
        }
      }else{
        if( nums[mid] < target && target <= nums[j]){
          i = mid + 1
        }else{
          j = mid - 1
        }
      }
    }
  }
  return -1
}

console.log(search([3, 5, 1], 3))