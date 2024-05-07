/**
 * @param {number[][]} wall
 * @return {number}
 */
// 记录缝隙的位置，和出现次数，最后用总厚度减掉即可
var leastBricks = function(wall) {
  let map = new Map()
  for(let i = 0; i < wall.length; i++){
    let count = 0
    for(let j = 0; j < wall[i].length - 1; j++){
      count += wall[i][j] 
      map.set(count, (map.get(count) ?? 0) -1)
    }
  }
  if(map.size === 0) return wall.length

  let min = 1 << 30
  for(v of map){
    min = Math.min(min, v[1])
  }
  return wall.length + min
};

console.log(leastBricks([[1],[1],[1]]))