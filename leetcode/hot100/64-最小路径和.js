/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let minpath = grid.map(innerArray => innerArray.map(() => -1));  
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++ ){
      if(i-1 < 0){
        minpath[i][j] = grid[i][j] + (j-1 >= 0 ? minpath[i][j-1] : 0)
        continue
      }
      if(j-1 < 0){
        minpath[i][j] = minpath[i-1][j] + grid[i][j]
        continue
      }
      minpath[i][j] = Math.min(minpath[i-1][j], minpath[i][j-1]) + grid[i][j]
    }
  }
  // console.log(minpath)
  return minpath[grid.length - 1][grid[0].length - 1]
};

console.log(minPathSum([[1,2,3],[4,5,6]]))