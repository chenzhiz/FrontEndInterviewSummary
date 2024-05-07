/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 深搜第一个最小，但好像不是最优解(也不符合题目不用额外空间的要求)
var nextPermutation = function(nums) {
  let ori = [...nums];
  nums.sort((a, b) => a-b)
  let ans = null
  const dfs = (cur, mark) => {
    if(ans !== null) return
    if(cur[cur.length - 1] > ori[cur.length - 1]){
      
      for(let i = 0; i < nums.length; i++){
        if(mark[i] === false) cur.push(nums[i])
      }
      return ans = [...cur]
    }else if (cur[cur.length - 1] === ori[cur.length - 1]){
      for(let i = 0; i < nums.length; i++){
        if(mark[i] === false && nums[i] >= ori[cur.length]){
          mark[i] = true
          cur.push(nums[i])
          dfs(cur, mark)
          cur.pop()
          mark[i] = false
        }
      }
    }
    return
  }
  mark = new Array(nums.length).fill(false)
  for(let i = 0; i < nums.length; i++){
    if(ans !== null) break
    mark[i] = true
    dfs([nums[i]], mark)
    mark[i] = false
  }
  
  if(ans !== null) {
    for(let i = 0; i< nums.length; i++){
      nums[i] = ans[i]
    }
  }
};

// 看看题解
// 两边遍历(从后找到第一个下降的拐点，拐点之后的一定是单调下降)
// 第二遍从后遍历找到第一个大于拐点前的数，交换位置后（后面肯定还是单调下降的，转换成单调上升）
var nextPermutation = function(nums){
  const n = nums.length;
  let i = n - 2;
  while(i>=0 && nums[i] >= nums[i + 1]){
    i--
  }
  // 如果存在拐点
  if(i >= 0){
    let j = n - 1;
    while(j > i && nums[j] <= nums[i] ){
      j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  for(i = i+1, j = n-1; i<j; i++, j--){
    [nums[i], nums[j]] = [nums[j], nums[i]]
  } 
}