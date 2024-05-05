/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// https://doocs.github.io/leetcode/lc/621/#_1
// 看题解，直接全部排好，倒是和我之前想的有点类似
// 但是根据任务的出现次数先排是错误的（我之前的想法，还是要整体排）
var leastInterval = function(tasks, n) {
  let code = "A".charCodeAt(0)
  let arr = Array(26 + 1).fill(0)
  let m = tasks.length
  for(t of tasks){
    arr[t.charCodeAt(0) - code]++
  }
  let max = -1 
  let count = 0
  for(let i = 0; i < 26; i++){
    if(arr[i] > max){
      max = arr[i]
      count = 1
    }else if(arr[i] === max){
      count++
    }
  }
  
  return Math.max(tasks.length, (max - 1) * (n + 1) + count)
};

console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 1)) 





