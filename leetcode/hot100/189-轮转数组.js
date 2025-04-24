/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length
  k = k % len
  let t = [...nums.slice(len - k, len), ...nums.slice(0, len - k)]
  t.forEach((item, index) => nums[index] = item)
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))


// 三翻转
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start += 1
    end -= 1
  }
}
var rotate = function (nums, k) {
  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}