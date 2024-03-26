/**
 * @param {number[]} height
 * @return {number}
 */
// 假设水面逐渐升高，两边会逐渐向中间靠拢
var maxArea = function(height) {
  let maxVal = -1;
  let left = 0
  let right = height.length - 1
  let curheight = 1;
  while(right > left){
    while(height[left] < curheight && left < right){
      left++
    }
    while(height[right] < curheight && left < right){
      right--
    }
    let val = (right - left) * curheight
    if(val > maxVal){
      maxVal = val
    }
    curheight++
  }
  return maxVal
};

console.log(maxArea([1,1]))