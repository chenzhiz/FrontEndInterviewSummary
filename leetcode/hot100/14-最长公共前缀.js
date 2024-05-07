/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let m = strs.length
  let cnt = 0
  let ans = ""
  while(1){
    let mark = true
    let c 
    if(cnt > strs[0].length) break
    c = strs[0][cnt]
    for(let i = 1; i < m; i++){
      if(cnt > strs[i].length || strs[i][cnt] !== c) {
        mark = false
        break
      }
    }
    cnt++
    if(!mark) break
    ans += c
  }
  return ans
};

console.log(longestCommonPrefix(["fl","f","flight"]))