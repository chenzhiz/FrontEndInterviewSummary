/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ans = []
  let vis = Array(nums.length).fill(false)
  const fn = (cur, sit) => {
    ans.push(cur)
    for (let i = sit + 1; i < nums.length; i++) {
      if (!vis[i]) {
        vis[i] = true
        fn([...cur, nums[i]], i)
        vis[i] = false
      }
    }
  }
  fn([], -1)
  return ans
}

console.log(subsets([1, 2, 3]))