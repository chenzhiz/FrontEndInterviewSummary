/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 偷鸡法
var moveZeroes = function(nums) {
  let m = nums.length
  let f = nums.filter(item => item !== 0)
  let newArr = [...f, ...Array(m - f.length).fill(0)]
  for(let i = 0; i < m; i++){
    nums[i] = newArr[i]
  }
  // return [...f, ...Array(m - f.length).fill(0)]
};

// 交换法
var moveZeroes = function(nums){
  let l = 0
  let r = 0
  let m = nums.length
  while(r < m){
    if(nums[r] === 0){
      r++;
      continue
    }
    [nums[l],nums[r]] = [nums[r],nums[l]]
    l++
    r++
  }
}

console.log(moveZeroes([0,1,0,3,12]))