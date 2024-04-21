/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 利用JS自带的函数实现
var topKFrequent = function (nums, k) {
  let map = new Map()
  for (const v of nums) {
    map.set(v, (map.get(v) ?? 0) + 1)
  }
  let arr = [...map]
  arr.sort((a, b) => b[1] - a[1])
  let result = []
  for (let i = 0; i < k; i++) {
    result.push(arr[i][0])
  }
  return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))