/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let m = nums.length >> 1
  let map = new Map()
  for(v of nums){
    map.set(v, (map.get(v) ?? 0) + 1)
    if(map.get(v) > m) return v
  }
  return -1
};

console.log(majorityElement([2,2,1,1,1,2,2]))