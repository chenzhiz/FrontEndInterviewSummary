/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param A string字符串 
 * @return int整型
 */
function getLongestPalindrome( A ) {
  // write code here
  let max = -1
  for(let i = 0; i < A.length; i++){
      let count = 1
      for(let j = 1; (i - j >= 0) && (i + j < A.length); j++){
          if(A[i - j] === A[i + j]) count += 2
          else break
      }
      max = Math.max(max, count)
      if(i + 1 < A.length && A[i] === A[i+1]){
          count = 2 
          for(let j = 1; (i - j >= 0) && (i + j + 1< A.length); j++){
              if(A[i - j] === A[i + j + 1]) count += 2
              else break
          }
      }
      max = Math.max(max, count)
  }
  return max
}
module.exports = {
  getLongestPalindrome : getLongestPalindrome
};