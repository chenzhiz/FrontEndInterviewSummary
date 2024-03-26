/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法
var longestPalindrome = function (s) {
  if (s == null || s == "") {
    return ""
  }
  let start = 0
  let end = 0
  const fn = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    return right - left - 1
  }
  for (let i = 0; i < s.length; i++) {
    // 奇数串
    let len1 = fn(s, i, i)
    // 偶数串
    let len2 = fn(s, i, i + 1)
    if(Math.max(len1, len2) > end - start + 1){
      if(len1 > len2){
        start = i - (len1 - 1) / 2
        end = i + (len1 - 1) / 2
      }else{
        start = i + 1 - len2 / 2
        end = i + len2 / 2
      }
    }
  }
  return s.slice(start, end + 1)
}

// Todo
// 以后可能考虑用DP算法做一次


console.log(longestPalindrome("aacabdkacaa"))