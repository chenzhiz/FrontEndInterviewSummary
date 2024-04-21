/**
 * @param {number[]} nums
 * @return {number}
 */
// 偷鸡先解决了,想一下不偷鸡
var findDuplicate = function(nums) {
  let hashset = new Set()
  for(let i = 0;i < nums.length ; i++){
    if(hashset.has(nums[i])) return nums[i]
    hashset.add(nums[i])
  }
};

// 计算1到x之间数目的个数，如果数量超过x则重复数字一定在其中，否则在另一个范围内
var findDuplicate = function(nums){
  // l r 是真实数字不是下标
  let l = 0
  let r = nums.length - 1
  while(l < r){
    const mid = (l + r) >> 1
    let cnt = 0
    for(const v of nums){
      if(v <= mid ) cnt++ 
    }
    if(cnt > mid){
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l;
}


console.log(findDuplicate([3,1,3,4,2]))