/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 两次遍历，前后的结果，取当前位置两边的相乘就行
var productExceptSelf = function(nums) {
  let m = nums.length
  let l = new Array(m).fill(1)
  let r = new Array(m).fill(1)

  for(let i = 0; i < m ; i++){
    l[i] = (i-1 < 0 ? 1 : l[i-1]) * nums[i]
    r[m - i - 1] = (m - i >= m ? 1 : r[m - i]) * nums[m - i - 1]
  }
  console.log(l)
  console.log(r)
  let res = new Array(m).fill(1)
  for(let i = 0; i < m ; i++){
    res[i] = (i - 1 < 0 ? 1 : l[i-1]) * (i + 1 >= m ? 1 : r[i+1])
  }
  return res
};

productExceptSelf([1,2,3,4])
