/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
// 超时，和数据相关了不对
var findRadius = function(houses, heaters) {
    let count = 0
    let set = new Set(houses)
    let hm = Math.max(...houses);  
    let hot = new Array(hm + 1).fill(false)
    while(1){
      for(v of heaters){
        if(v + count <= hm) hot[v + count] = true
        if(v - count >= 0) hot[v - count] = true
      }
      let mark = true
      for(s of set){
        if(!hot[s]){
          mark = false
          break
        }
      }
      if(mark){
        return count
      }
      count++
    }
};
// 先排序
// 找到第一个大于等目标房屋的加热器,前一位则小于该房屋，计算两边的距离（取小）和历史最大值之间的比较
var findRadius = function(houses, heaters) {
  let max = -1
  let r = 0
  
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  for(let i = 0; i < houses.length; i++){
    while(heaters[r] < houses[i] && r < heaters.length - 1){
      r++
    }
    if(r - 1 >= 0) max = Math.max(max, Math.min(Math.abs(houses[i] - heaters[r - 1]), Math.abs(houses[i] - heaters[r])))
    else max = Math.max(max, Math.abs(houses[i] - heaters[r]))
  }
  return max
};

console.log(findRadius([1,5], [2]))