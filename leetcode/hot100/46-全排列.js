/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if(nums === null || nums.length === 0) return []
  // nums.sort((a, b) => a - b)
  let result = []
  const dfs = (cur, mark) => {
    if(cur.length === nums.length){
      result.push([...cur])
      return
    }
    for(let i =0; i< nums.length ; i++){
      if(!mark[i]){
        mark[i] = true
        cur.push(nums[i])
        dfs(cur, mark)
        cur.pop()
        mark[i] = false
      }
    }
  }
  let mark = new Array(nums.length).fill(false)
  dfs([],mark)
  return result
};


console.log(permute([1]))