const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue
} = require('@datastructures-js/priority-queue')

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
}

// 快速选择，是在未排序数组中查找第k个最大最小元素的算法，因为每次分下次期望是从 1/2 中继续分 1 + 1/2 + 1/4 ... 期望是 O(n) 复杂度
// https://zhuanlan.zhihu.com/p/64627590 快速选择图解
// https://doocs.github.io/leetcode/lc/215/#_1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const n = nums.length
  k = n - k
  const quickSort = (l, r) => {
    if (l === r) {
      return nums[l]
    }
    let [i, j] = [l - 1, r + 1]
    const x = nums[(l + r) >> 1]
    while (i < j) {
      while (nums[++i] < x);
      while (nums[--j] > x);
      if (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
    if (j < k) {
      return quickSort(j + 1, r)
    }
    return quickSort(l, j)
  }
  return quickSort(0, n - 1)
}

// 优先队列，JS的小根堆学一下
// leetcode 带大小根堆的库
// https://heibaimeng.com/post/89.html
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minQ = new MinPriorityQueue()

  for (const x of nums) {
    minQ.enqueue(x)
    if (minQ.size() > k) {
      minQ.dequeue()
    }
  }
  return minQ.front().element
}

// 计数排序，从大到小减掉，加上一个哈希表，减到小于0或等于零的时候就结束了
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const cnt = new Map()
  for (const x of nums) {
    cnt.set(x, (cnt.get(x) ?? 0) + 1)
    // cnt[x] = (cnt[x] || 0) + 1
  }
  console.log(cnt)
  const m = Math.max(...nums)
  for (let i = m; ; --i) {
    k -= (cnt.get(i) ?? 0)
    if (k <= 0) {
      return i
    }
  }
}
console.log(findKthLargest([-1, -1], 2))