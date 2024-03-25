/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let left = 0;
//     let maxSize = 0;
//     const charSet = new Set();
//     for(let i = 0; i < s.length; i++){
//       const char = s.charAt(i)
//       if(charSet.has(char)){
//         if(maxSize < charSet.size){
//           maxSize = charSet.size
//         }
//         charSet.clear()
//         i = left + 1;
//         left = left + 1;
//         charSet.add(s.charAt(i))
//       } else {
//         charSet.add(char)
//       }
//     }
//     // console.log(maxSize)
//     if(maxSize < charSet.size){
//       maxSize = charSet.size
//     }
//     // console.log(maxSize)
//     return maxSize
// };

// 滑动窗口
// var lengthOfLongestSubstring = function(s) {
//   if (s.length <=1) return s.length;
//   let left = 0;
//   let right = 1;
//   let maxSize = 0;
//   while(right < s.length){
//     tempstring = s.slice(left, right)
//     if(tempstring.indexOf(s[right]) > -1){
//       left++
//     }else{
//       right++
//       if(maxSize < right - left){
//         maxSize = right - left
//       }
//     }
//   }
//   return maxSize
// };

// set 滑动窗口
var lengthOfLongestSubstring = function(s) {
  let charSet = new Set()
  let rightPos = 0
  let maxLen = 0
  for(let i = 0; i < s.length; i++){
    // 确定最远的右位置
    while(!charSet.has(s[rightPos]) && rightPos < s.length){
      charSet.add(s[rightPos])
      rightPos++
    }
    charSet.delete(s[i])
    maxLen = Math.max(maxLen, rightPos - i);
    if(rightPos >= s.length){
      break;
    }
  }
  // console.log(maxLen)
  return maxLen
};


lengthOfLongestSubstring("pwwkew")