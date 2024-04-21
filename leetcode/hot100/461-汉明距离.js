/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let n = x ^ y
  let count = 0
  // 将最低位的1及其之后的位数都变成0，平时用就一位位算就行了，昨天学到就用一下
  while(n){
    n &= n - 1
    count++
  }
  return count
};

console.log(hammingDistance(1, 4))