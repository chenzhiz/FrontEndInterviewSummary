/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Map 偷鸡，看看题解
var findTargetSumWays = function (nums, target) {
  let m = new Map()
  if(nums[0] === 0){
    m.set(0, 2)
  }else{
    m.set(nums[0], 1)
    m.set(-nums[0], 1)
  }
  for (let i = 1; i < nums.length; i++) {
    let nm = new Map()
    for (item of m) {
      nm.set(item[0] + nums[i], (m.get(item[0]) ?? 0) + (nm.get(item[0] + nums[i]) ?? 0))
      nm.set(item[0] - nums[i], (m.get(item[0]) ?? 0) + (nm.get(item[0] - nums[i]) ?? 0))
    }
    m = nm
  }
  return (m.get(target) ?? 0)
}

console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1))