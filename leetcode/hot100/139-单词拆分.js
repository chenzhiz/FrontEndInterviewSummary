/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 动态规划判断到以前的直接缪撒，就是要注意好范围，别字符串比对长度都算错了
var wordBreak = function(s, wordDict) {
  const match = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false
    for(let i = 0; i <= arr1.length; i++){
      if(arr1[i] !== arr2[i]) return false
    }
    return true
  }

  let m = s.length
  let dp = Array(m + 1).fill(false)
  dp[0] = true

  for(let i=1; i <= m; i++){
    for(let j = 0; j < wordDict.length; j++){
      let n = wordDict[j].length
      if(i - n >= 0 && match(s.slice((i - n), i), wordDict[j])){
        dp[i] = dp[i - n]
        if(dp[i]) break
      }
    }
  }
  console.log(dp)
  return dp[m]
};

console.log(wordBreak("leetcode", ["leet","code"]))