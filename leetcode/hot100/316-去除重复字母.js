/**
 * @param {string} s
 * @return {string}
 */
// 多看看这题确实不太会
// https://doocs.github.io/leetcode/lc/316/#_1
var removeDuplicateLetters = function(s) {
  let map = new Map()
  for(let i = 0; i < s.length; i++){
    map.set(s[i], i)
  }
  let stk = []
  let vis = new Set()
  for(let i = 0; i < s.length; i++){
    if(vis.has(s[i])){
      continue
    }
    while(stk.length !== 0 && stk[stk.length - 1] > s[i] && map.get(stk[stk.length - 1]) > i){
      vis.delete(stk.pop())
    }
    stk.push(s[i])
    vis.add(s[i])
  }
  return stk.join("")
};
