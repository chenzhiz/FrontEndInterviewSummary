/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let indexStack = []
  let mainStack = []
  let currentnum = 999999

  let result = new Array(temperatures.length).fill(0)
  temperatures.forEach((item, index) => {
    if (item < currentnum) {
      indexStack.push(index)
      mainStack.push(item)
      currentnum = item
    }
    else {
      for (let i = mainStack.length - 1; i >= 0; i--) {
        if (item > mainStack[i]) {
          let curindex = indexStack.pop()
          mainStack.pop()
          // 根据当前元素的位置和之前元素进入stack时的位置计算count
          result[curindex] = index - curindex
        } else {
          break
        }
      }
      indexStack.push(index)
      mainStack.push(item)
      currentnum = item
    }
  })
  return result
}

dailyTemperatures([73,74,75,71,69,72,76,73])