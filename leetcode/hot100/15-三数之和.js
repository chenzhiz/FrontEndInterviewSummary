/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 有点慢要看看官方题解
// var threeSum = function (nums) {
//   const fn = (numList, target) => {
//     let tempset = new Set()
//     let markset = new Set()
//     let result = []
//     numList.forEach((item) => {
//       mark = item < target - item ? `${item}-${target - item}` : `${target - item}-${item}`
//       if (tempset.has(item) && !markset.has(mark)) {
//         markset.add(mark)
//         result.push([target - item, item])
//       }
//       else {
//         tempset.add(target - item)
//       }
//     })
//     return result
//   }

//   let finalResult = []
//   // 去重
//   let markSet = new Set()
//   let numSet = new Set()
//   nums.sort((a, b) => a - b)
//   for (let i = 0; i < nums.length; i++) {
//     if (numSet.has(nums[i])) {
//       continue
//     }
//     numSet.add(nums[i])
//     let tempList = fn(nums.slice(i + 1, nums.length), -nums[i])
//     tempList.forEach((item) => {
//       arr = [nums[i], ...item]
//       if (!markSet.has(arr.join("-"))) {
//         markSet.add(arr.join("-"))
//         finalResult.push([nums[i], ...item])
//       }
//     })
//   }
//   return finalResult
// }

// // 先排序，减小复杂度
// var threeSum = function (nums) {
//   const fn = (numList, target) => {
//     let tempset = new Set()
//     let markset = new Set()
//     let result = []
//     numList.forEach((item) => {
//       mark = item < target - item ? `${item}-${target - item}` : `${target - item}-${item}`
//       if (tempset.has(item) && !markset.has(mark)) {
//         markset.add(mark)
//         result.push([target - item, item])
//       }
//       else {
//         tempset.add(target - item)
//       }
//     })
//     return result
//   }

//   let finalResult = []
//   // 去重
//   // let markSet = new Set()
//   let numSet = new Set()
//   nums.sort((a, b) => a - b)
//   for (let i = 0; i < nums.length; i++) {
//     if (numSet.has(nums[i])) {
//       continue
//     }
//     numSet.add(nums[i])
//     let tempList = fn(nums.slice(i + 1, nums.length), -nums[i])
//     tempList.forEach((item) => {
//       finalResult.push([nums[i], ...item])
//     })
//   }
//   return finalResult
// }

// Todo 双指针去重
var threeSum = function (nums) {
  result = []
  nums.sort((a, b) => a-b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let count = nums[i] + nums[left] + nums[right]
      if(count < 0){
        left++
        continue
      }
      if(count > 0){
        right--
        continue
      }
      if(count === 0){
        result.push([nums[i], nums[left], nums[right]])
        left++
        while(left < right && nums[left] === nums[left-1]){
          left++
        }
      }
    }
  }
  return result
}


console.log(threeSum([0,1,1]))