/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 偷鸡法
var searchRange = function(nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(nums)]
};

// log(n) 方法
var searchRange = function(nums, target) {
  if(nums === null || nums.length === 0 ) return [-1, -1]
  let mark = false;
  let left = 0
  let right = nums.length - 1
  // 找到第一个最小的target, right 会超导下面因此选left
  while(left <= right){
    let mid = Math.floor((left + right) / 2)
    if(target === nums[mid]){
      mark = true
    } 
    if(target <= nums[mid]){
      right = mid - 1
    }else{
      left = mid + 1
    }
  }
  if(mark === false) return [-1, -1]
  let resultL = left
  left = 0
  right = nums.length - 1
  // 找到第一个最大的target,left 会超到上面因此选right
  while(left <= right){
    let mid = Math.ceil((left + right) / 2)
    if(target < nums[mid]){
      right = mid - 1
    }else{
      left = mid + 1
    }
  }
  return [resultL, right]
};

console.log(searchRange([1], 1))