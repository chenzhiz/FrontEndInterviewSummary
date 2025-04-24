// 普通的新加节点重新计算最大值，暴力算法会超时
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const fn = (arr) => {
    let max = Number.MIN_SAFE_INTEGER
    for (x of arr) {
      if (x > max) {
        max = x
      }
    }
    return max
  }
  let curmax = fn(nums.slice(0, k))
  let result = [curmax]
  for (let i = k; i < nums.length; i++) {
    if (nums[i] >= curmax) {
      curmax = nums[i]
      result.push(curmax)
    } else {
      if (nums[i - k] >= curmax) {

        curmax = fn(nums.slice(i - k + 1, i + 1))
        // console.log(i - k + 1, i + 1)
      }
      result.push(curmax)
    }
  }
  return result
}


// https://doocs.github.io/leetcode/lc/239/#_4
// 堆排序算法加速
// 用一个数组模拟堆，要更熟练一点,(这个记录最大值位置的大根堆，比当前位置小的前面的内容就可以删掉了没用)
// 非常巧妙地设计
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let ans = []
  let q = []
  for (let i = 0; i < nums.length; ++i) {
    console.log("-----------------------------")
    // 窗口下限超过第一个位置则删掉
    if (q && i - k + 1 > q[0]) {
      q.shift()
    }
    console.log("===>: " + q)
    console.log("N ===>: " + q.map((item) => nums[item]))
    // 如果要加入的值比之前的值要大删除之前的值，因为只看最大值这些值没有意义了，而且位置也已经记录了
    while (q && nums[q[q.length - 1]] <= nums[i]) {
      q.pop()
    }
    console.log("==>>: " + q)
    console.log("N ==>>: " + q.map((item) => nums[item]))
    // 删除到合适的位置，将当前值推进去
    q.push(i)
    console.log("=>>>: " + q)
    console.log("N =>>>: " + q.map((item) => nums[item]))
    if (i >= k - 1) {
      ans.push(nums[q[0]])
    }
    console.log(">>>>: " + q)
    console.log("N >>>>: " + q.map((item) => nums[item]))
  }
  return ans
}

// 单调队列跟上面的思想有点像，挺有意思的(怎么感觉跟上面的实现完全相同)
// https://www.bilibili.com/video/BV1pV4y1n7kG/?t=15.080751&spm_id_from=333.1350.jump_directly&vd_source=a4b30279c4ec9726d5c95d620e167b62
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let ans = []
  let q = []
  for (let i = 0; i < nums.length; i++) {
    // 位置判断，绑定位置
    if (q && i - k + 1 > q[0]) {
      q.shift()
    }
    while (q && nums[q[q.length - 1]] < nums[i]) {
      q.pop()
    }
    q.push(i)
    if (i >= k - 1) {
      ans.push(nums[q[0]])
    }
  }
  return ans
}


console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))