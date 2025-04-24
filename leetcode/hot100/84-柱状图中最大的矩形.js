// 自己写的方法超时，推荐单调栈
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const fn = (x) => {
    let l = x
    let r = x
    let h = heights[x]
    while (l - 1 >= 0 && heights[l - 1] >= h) l = l - 1
    while (r + 1 < heights.length && heights[r + 1] >= h) r = r + 1
    return r - l + 1
  }
  let max = heights[0] * fn(0)
  let cur = heights[0]
  for (let i = 1; i < heights.length; i++) {
    if (heights[i] !== cur || max < heights[i] * heights.length) {
      cur = heights[i]
      let t = heights[i] * fn(i)
      if (t > max) max = t
    }
  }
  // let max = - 1
  // for (let i = 0; i < heights.length; i++) {
  //   let t = heights[i] * fn(i)
  //   if (t > max) max = t
  // }
  // return max
}

// 单调栈详解，找两边比自己小的元素(根据情况寻找，
// 寻找左右第一个小于当前元素的（单调递增），或者大于当前元素（单调减栈）)
// 单增，如果大于栈顶那么栈顶就是左侧第一个小于当前元素，如果小于栈顶，
// 那么对于目前在栈中大于当前元素的项目来说，当前元素是右侧第一个小于自身的元素
// 单减同理，如果两边不一样，可以分别使用两种栈结合一下
// 参考：
// https://blog.csdn.net/zy_dreamer/article/details/131036101
// https://doocs.github.io/leetcode/lc/84/#_2
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let n = heights.length
  let stk = []
  let l = Array(n).fill(-1)
  let r = Array(n).fill(n)

  heights.forEach((h, index) => {
    while (stk.length !== 0 && heights[stk[stk.length - 1]] >= h) {
      r[stk[stk.length - 1]] = index
      stk.pop()
    }
    if (stk.length !== 0) {
      l[index] = stk[stk.length - 1]
    }
    stk.push(index)
    console.log(stk)
  })
  // console.log("----------")
  let ans = -1
  for (let i = 0; i < heights.length; i++) {
    // console.log("[", l[i], r[i], "]")
    // console.log((r[i] - l[i] - 1))
    // console.log(heights[i])
    ans = Math.max(heights[i] * (r[i] - l[i] - 1), ans)
  }
  return ans
}

console.log(largestRectangleArea([1, 2, 1, 1, 1, 1]))
// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))