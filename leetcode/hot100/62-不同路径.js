/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = Array(n + 1).fill(1)
  for(let i = 2; i <= m; i++){
    for(let j = 2; j <= n; j++){
      dp[j] += dp[j-1] 
    }
  }
  return dp[n]
};

// 也可以用数学里面选几个位置的公式, 要注意以下数值
var uniquePaths = function(m, n) {
  let u = m + n - 2
  let v = Math.min(m - 1, n -1)
  let number = 1
  let count = 1
  for(let i = 1; i <= v; i++){
    number *= (u - i + 1)
    if(number % i === 0){
      number /= i
    }else{
      count *= i
    }
    
  }
  return number / count
};