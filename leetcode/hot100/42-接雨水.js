/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针，为了清晰一点最后才减掉所有的高度
var trap = function(height) {
  let sum = 0
  let left = 0;
  let right = height.length - 1;
  let h = 1
  while(left < right){
    while( left < right && height[left] < h){
      left++
    }
    while( left < right && height[right] < h){
      right--
    }
    if(left >= right) break
    sum += (right - left + 1)
    h++
  }
  if(height[left] >= h){
    sum += (height[left] - h + 1)
  }
  return height.reduce((acc, item) => {
    return acc - item
  }, sum)
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))