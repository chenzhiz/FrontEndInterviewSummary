// 当时没想出来看的答案，前缀和相减，还以为是树状数组的问题，其实也是简化版的树状数组

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let cnt = new Map()
  cnt.set(0, 1)
  let ans = 0
  let s = 0
  for (x of nums) {
    s += x
    ans += (cnt.get(s - k) ?? 0)
    cnt.set(s, (cnt.get(s) ?? 0) + 1)
  }
  return ans
}

console.log(subarraySum([1, 2, 1], 2))