/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// O(n)
// var findMedianSortedArrays = function (nums1, nums2) {
//   let indexleft = Math.floor((nums1.length + nums2.length - 1) / 2)
//   let index1 = 0
//   let index2 = 0
//   let result = -1
//   for (let i = 0; i <= indexleft; i++) {
//     if (index2 >= nums2.length || nums1[index1] <= nums2[index2]) {
//       result = nums1[index1]
//       index1++
//       continue
//     }
//     if (index1 >= nums1.length || nums1[index1] > nums2[index2]) {
//       result = nums2[index2]
//       index2++
//       continue
//     }
//   }
//   if ((nums1.length + nums2.length) % 2 === 0) {
//     if (index1 >= nums1.length) {
//       result = (result + nums2[index2]) / 2
//       return result
//     }
//     if (index2 >= nums2.length) {
//       result = (result + nums1[index1]) / 2
//       return result
//     }
//     return (result + Math.min(nums1[index1], nums2[index2])) / 2
//   }
//   return result
// }

// 偷鸡方法 O(nlogn)
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b)
  let len = arr.length
  if (len % 2 == 0) {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2
  } else {
    return arr[(len - 1) / 2]
  }
}

// 正统方法用二分，下次补一下
// Todo 没写出来

// var findMedianSortedArrays = function (nums1, nums2) {
//   let indexleft = Math.floor((nums1.length + nums2.length - 1) / 2)
//   let indexRemain = indexleft
//   // 左标识
//   let index1 = 0
//   let index2 = 0
//   let pdsub = 0
//   let mid1 = -1
//   let mid2 = -1
//   while (index1 < nums1.length && index2 < nums2.length && indexRemain > 0) {
//     mid1 = Math.floor((nums1.length - 1 + index1) / 2)
//     mid2 = Math.floor((nums2.length - 1 + index2) / 2)
//     if (nums1[mid1] < nums2[mid2] || nums1[index1] < nums2[index2]) {
//       pdsub = mid1 - index1
//       if (pdsub <= 0 || indexRemain - pdsub < 0) {
//         // index1++
//         break
//       }else{
//         indexRemain -= pdsub
//         index1 = mid1
//       }
//     } else{
//       pdsub = mid2 - index2
//       if (pdsub <= 0 || indexRemain - pdsub < 0) {
//         // index2++
//         break
//       }else{
//         indexRemain -= pdsub
//         index2 = mid2
//       }
//     }

//   }
//   let result = -1

//   for(let i = 0; i <= indexRemain; i++){
//     if(index1 >= nums1.length){
//       result = nums2[index2]
//       index2++
//       continue
//     }
//     if(index2 >= nums2.length){
//       result = nums1[index1]
//       index1++
//       continue
//     }
//     if(nums1[index1] <= nums2[index2]){
//       result = nums1[index1]
//       index1++
//     }else{
//       result = nums2[index2]
//       index2++
//     }
//   }

//   if((nums1.length + nums2.length) % 2 === 0){
//     if(index1 >= nums1.length){
//       result = (result + nums2[index2]) / 2 
//       return result
//     }
//     if(index2 >= nums2.length){
//       result = (result + nums1[index1]) / 2
//       return result
//     }
//     return (result + Math.min(nums1[index1], nums2[index2])) / 2
//   }
//   return result
// }

console.log(findMedianSortedArrays([1, 2], [3, 4]))
