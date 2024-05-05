/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
  let base = "a".charCodeAt(0)
  let n = s.length
  let m = p.length
  if(n < m) return []

  let arr = Array(26).fill(0) 
  let cur = Array(26).fill(0)
  let set = new Set()
  for(let i = 0; i < m; i++){
    arr[p[i].charCodeAt(0) - base]++
    cur[s[i].charCodeAt(0) - base]++ 
    set.add(p[i].charCodeAt(0) - base)
  }
  let res = []

  for(let i = 0; i + m <= n; i++){
    let mark = true
    for(v of set){
      if(arr[v] !== cur[v]){
        mark = false
        break
      }
    }
    if(mark) res.push(i)
    cur[s[i].charCodeAt(0) - base]--
    if(i + m < n)
      cur[s[i + m].charCodeAt(0) - base]++
  }
  return res
};

console.log(findAnagrams("abab", "ab"))