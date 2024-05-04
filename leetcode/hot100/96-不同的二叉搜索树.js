/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for(let i = 2; i <= n; i++){
    for(let j = 0; j <= (i - 1) / 2; j++){
      if(j === (i - 1) / 2) dp[i] += dp[i - 1 - j] * dp[j]
      else dp[i] += (dp[ i - 1 - j] * dp[j]) * 2
    }
  }
  return dp[n]
};
numTrees(5)