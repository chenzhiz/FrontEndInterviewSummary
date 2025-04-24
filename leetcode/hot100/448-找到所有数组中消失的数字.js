/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let s = new Set(nums)
  let n = nums.length
  let ans = []
  for (let i = 1; i <= n; i++) {
    if (!s.has(i)) ans.push(i)
  }
  return ans
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))