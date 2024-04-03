/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//存储索引
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  let result = []
  const dfs = (cur, sum) => {
    if(sum >= target) {
      if(sum === target){
        result.push([...cur])
        return
      } 
      return
    }
    let lastindex = cur[cur.length - 1]
    for(let i = lastindex; i < candidates.length; i++){
      if(sum + candidates[i] > target) break
      cur.push(i)
      dfs(cur, sum + candidates[i])
      cur.pop()
    }
  }
  for(let i = 0; i < candidates.length; i++){
    dfs([i], candidates[i])
  }
  return result.map((item) => {
    return item.map((e) => candidates[e])
  })
};

// 直接存数据
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  let result = []
  const dfs = (cur, sum, index) => {
    if(sum >= target) {
      if(sum === target){
        result.push([...cur])
        return
      } 
      return
    }
    for(let i = index; i < candidates.length; i++){
      if(sum + candidates[i] > target) break
      cur.push(candidates[i])
      dfs(cur, sum + candidates[i], i)
      cur.pop()
    }
  }
  for(let i = 0; i < candidates.length; i++){
    dfs([candidates[i]], candidates[i], i)
  }
  return result
};

// 

console.log(combinationSum([2,3,6,7], 7))