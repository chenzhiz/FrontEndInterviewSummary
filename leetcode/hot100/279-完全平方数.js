/**
 * @param {number} n
 * @return {number}
 */
// DFS 
var numSquares = function(n) {
  let minCount = 999;
  const dfs = (remain ,deep) => {
    if(remain < 0 || deep >= minCount) return 
    if(remain ==0 ){
      minCount = deep
      return 
    }
    for(let i=Math.floor(Math.sqrt(remain));i>=1;i--){
      dfs(remain - i*i, deep + 1)
    }
  }
  dfs(n, 0)
  return minCount
};

// 完全背包
// 背包容量 n、 物品大小数字大小、 权重都是1， 取最小
var numSquares = function(n){
  const m = Math.floor(Math.sqrt(n));
  // 默认最大
  const f = Array(n + 1).fill(1 << 30);
  f[0] = 0
  // 一维背包
  // 遍历物品
  for(let i = 1;i <= m; i++ ){
    // 遍历背包大小
    for(let j = i * i; j <= n; j++){
      f[j] = Math.min(f[j], f[j - i * i] + 1)
    }
  }
  return f[n]
}

var numSquares = function(n){
  const m = Math.floor(Math.sqrt(n));
  // 默认最大
  const f = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(1 << 30))
  f[0][0] = 0
  // 二维背包
  // 遍历物品
  for(let i = 1;i <= m; i++ ){
    // 遍历背包大小
    for(let j = 0; j <= n; j++){
      f[i][j] = f[i-1][j]
      // 背包大于当前物品的大小
      if(j >= i * i){
        f[i][j] = Math.min(f[i][j - i * i] + 1, f[i][j])
      }
      console.log(f)
    }
  }
  return f[m][n]
}



console.log(numSquares(13))