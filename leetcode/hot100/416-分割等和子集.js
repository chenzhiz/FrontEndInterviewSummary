/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 用集合方法
var canPartition = function(nums) {
  let sum = nums.reduce((acc, item) => acc + item, 0)
  if(sum%2 !== 0) return false
  let t = sum / 2
  let set = new Set()
  for(let v of nums){
    if(v === t){
      return true
    } 
    let ts = [...set]
    for(let s of ts){
      if(s + v === t){
        return true 
      } 
      if(s + v < t){
        set.add(s + v)
      }
    }
    set.add(v)
  }
  return false
};

// 动态规划，来集合
// f[i][j] i 表示前i个， j表示有和正好为 j  状态转移 f[i][j] = f[i-1][j] || f[i-1][j-x] ,只和当前维有关，因此可以压缩到一维
var canPartition = function(nums){
  const s = nums.reduce((a, b) => a + b, 0);
  if (s % 2 === 1) {
    return false;
  }
  const m = s >> 1;
  const f = Array(m + 1).fill(false);
  f[0] = true
  for(const x of nums){
    for(let j = m; j >= x; j--){
      f[j] = f[j] || f[j - x];
    }
  }
  return f[m]
}

console.log(canPartition([2,2,3,5]))