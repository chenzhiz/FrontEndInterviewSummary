/**
 * @param {number[]} nums
 * @return {string}
 */
// 自定义排序
var largestNumber = function(nums) {
  let arr = []
  for(v of nums){
    arr.push(String(v).split(""))
  }
  arr.sort((a, b) => {    
    let con1 = [...a, ...b]
    let con2 = [...b, ...a]
    for(let i = 0; i < a.length + b.length; i++)
      if(con1[i] !== con2[i]) 
        return (parseInt(con2[i]) - parseInt(con1[i]))
    return -1
  })
  let ans = ""
  for(let i = 0; i< arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      ans += arr[i][j]
    }
  }
  if(nums[0] === "0") return "0"
  return ans
};

var largestNumber = function(nums) {
  nums.sort((x, y) => { // 降序
      const a = x.toString() + y.toString();
      const b = y.toString() + x.toString();
      if (a > b) {
          return -1;
      } else if (a < b) {
          return 1;
      } else {
          return 0
      }
  })
  if (nums[0] == 0) return '0';
  return nums.join('')
};


console.log(largestNumber([0,0]))