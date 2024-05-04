/**
 * @param {string} s
 * @return {number}
 */
// 遍历法
var countSubstrings = function(s) {
  let count = 0
  for(let i = 0; i < s.length; i++){
    // 奇数字符
    for(let j = 0; i - j >= 0 && i + j < s.length; j++){
      if(s[i - j] === s[i + j]){
        count++
      }else{
        break
      }
    }
    // 偶数字符
    for(let j = 0; i - j >= 0 && i + j + 1 < s.length; j++){
      if(s[i - j] === s[i + j + 1]){
        count++
      }else{
        break
      }
    }
  }
  return count
};

console.log(countSubstrings("fdsklf"))