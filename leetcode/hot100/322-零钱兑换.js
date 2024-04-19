/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 完全背包（一维写法）
var coinChange = function(coins, amount) {
  let m = coins.length
  let f = Array(amount + 1).fill(1 << 30)
  f[0] = 0
  for(let i = 0;i < m; i++){
    for(let j = coins[i]; j <= amount; j++){
      f[j] = Math.min(f[j], f[j - coins[i]] + 1)
    }
  }
  f[amount] = f[amount] == 1 << 30 ? -1 : f[amount]
  return f[amount]
};

console.log(coinChange([1], 0))