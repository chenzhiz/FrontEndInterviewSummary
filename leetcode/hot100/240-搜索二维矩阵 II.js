const { join } = require("path")

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 从左下角或右上角搜索(左上没有定量关系没法判断)
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let [i, j] = [m - 1, 0]
    while(i >= 0 && j < n){
      if(matrix[i][j] === target) return true
      if(matrix[i][j] > target){
        --i
      }else{
        ++j
      }
    }
    return false
};

console.log(searchMatrix([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]], 15))