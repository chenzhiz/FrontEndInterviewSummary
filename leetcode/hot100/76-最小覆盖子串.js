/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 超时
var minWindow = function (s, t) {
  let f = []
  let m = s.length
  let ct = t
  for (let i = 0; i < s.length; i++) {
    let index = ct.indexOf(s[i])
    if (index !== -1) {
      f.push(i)
      ct = ct.slice(0, index) + ct.slice(index + 1, ct.length)
    }
  }
  if (ct.length > 0) return ""
  let l = f[0]
  let min = f[f.length - 1] - f[0] + 1
  let cur = f[0] + 1
  let char = s[f.shift()]

  while (cur < m) {
    if (s[cur] !== char || f.indexOf(cur) !== -1) {
      cur++
      continue
    }
    f.push(cur)
    f.sort((a, b) => a - b)
    if (min > f[f.length - 1] - f[0] + 1) {
      l = f[0]
      min = f[f.length - 1] - f[0] + 1
    }
    cur = f[0] + 1
    char = s[f.shift()]
  }

  return s.slice(l, l + min)
}
// 滑动窗口题
// 双指针 + 计数，滑动窗口统计中间单词数量，再来一个额外的变量统计够不够匹配上数量
var minWindow = function (s, t){
  const need = new Array(128).fill(0);
  const window = new Array(128).fill(0);
  for(const c of t){
    ++need[c.charCodeAt(0)] 
  }
  let cnt = 0
  let j = 0
  let k = -1
  let min =  1 << 30
  for(let i = 0; i < s.length; i++){
    ++window[s.charCodeAt(i)];
    if(need[s.charCodeAt(i)] >= window[s.charCodeAt(i)]){
      ++cnt;
    }
    while(cnt === t.length){
      if(i - j + 1 < min){
        min = i - j + 1
        k = j
      }
      if(need[s.charCodeAt(j)] >= window[s.charCodeAt(j)]){
        --cnt
      }
      --window[s.charCodeAt(j)]
      ++j
    }
  }
  return k < 0 ? "" : s.slice(k, k + min)
}

console.log(minWindow("aa", "aa"))