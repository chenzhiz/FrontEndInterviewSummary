// 自己想的方法
// 从最大正方形开始计算
// 但是没有优化效率有比较多的重复计算
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length

  let arr = Array.from({ length: m }, () => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        arr[i][j] = Math.min((i > 0 ? arr[i - 1][j] : 0), (j > 0 ? arr[i][j - 1] : 0),
          (i > 0 && j > 0) ? arr[i - 1][j - 1] : 0) + 1
      }
    }
  }
  // console.log(arr)
  let maxnum = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] > 0) {
        // 竖直方向上的矩形
        let count1 = 0
        for (let u = i + 1; u < m; u++) {
          if (arr[u][j] >= arr[i][j]) count1++
          else break
        }
        for (let u = i - 1; u >= 0; u--) {
          if (arr[u][j] >= arr[i][j]) count1++
          else break
        }
        // 水平方向上的矩形
        let count2 = 0
        for (let u = j + 1; u < n; u++) {
          if (arr[i][u] >= arr[i][j]) count2++
          else break
        }
        for (let u = j - 1; u >= 0; u--) {
          if (arr[i][u] >= arr[i][j]) count2++
          else break
        }
        maxnum = Math.max(maxnum, (Math.max(count1, count2) + arr[i][j]) * arr[i][j])
      }
    }
  }
  return maxnum
}

console.log(maximalRectangle([["1", "0", "0", "0", "1"], ["1", "1", "0", "1", "1"], ["1", "1", "1", "1", "1"]]))

// 题解方法
// 将矩形的每一行视为柱状图的底部，对每一行求柱状图的最大面
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
  })
  let ans = -1
  for (let i = 0; i < heights.length; i++) {
    ans = Math.max(heights[i] * (r[i] - l[i] - 1), ans)
  }
  return ans
}


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  heights = Array(n).fill(0)
  ans = 0
  for (row of matrix) {
    row.forEach((item, index) => {
      if (item === "1") {
        heights[index]++
      }
      else {
        heights[index] = 0
      }
    })
    ans = Math.max(ans, largestRectangleArea(heights))
  }
  return ans
}