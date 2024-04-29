/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) { 
  let mark = grid.map(item => new Array(item.length).fill(0))
  const m = grid.length
  const n = grid[0].length
  let queue = []
  let count = 0;
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(grid[i][j] === "0"){
        mark[i][j] = 1
        continue
      } 
      if(mark[i][j] === 0 && grid[i][j] === "1"){
        count++
        queue.push([i, j])
        mark[i][j] = 1
        while(queue.length !== 0){
          [ci, cj] = queue.shift()
          // console.log(`cur --> ci:${ci}  cj:${cj}`)
          if(ci - 1 >=0 && mark[ci - 1][cj] === 0 && grid[ci - 1][cj] === "1"){
            queue.push([ci - 1, cj]);
            mark[ci - 1][cj] = 1
          }
          if(cj - 1 >=0 && mark[ci][cj - 1] === 0 && grid[ci][cj - 1] === "1"){
            queue.push([ci, cj - 1])
            mark[ci][cj - 1] = 1
          }  
          if(ci + 1 < m && mark[ci + 1][cj] === 0 && grid[ci + 1][cj] === "1"){
            queue.push([ci + 1, cj]) 
            mark[ci + 1][cj] = 1
          } 
          if(cj + 1 < n && mark[ci][cj + 1] === 0 && grid[ci][cj + 1] === "1"){
            queue.push([ci, cj + 1])
            mark[ci][cj + 1] = 1
          }  
        }
      }
      mark[i][j] = 1
    }
  }
  return count
};

// Flood fill 算法
// 直接让grid变成0减少mark，用dfs和bfs都行
function numIslands(grid){
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  function dfs(i, j) {
      grid[i][j] = '0';
      const dirs = [-1, 0, 1, 0, -1];
      for (let k = 0; k < 4; ++k) {
          const x = i + dirs[k];
          const y = j + dirs[k + 1];
          if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == '1') {
              dfs(x, y);
          }
      }
  }
  for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
          if (grid[i][j] == '1') {
              dfs(i, j);
              ++ans;
          }
      }
  }
  return ans;
}

// 并查集模版
// n 表示节点数
// p 存储每个点的父节点，初始时每个点的父节点都是自己
// size 只有当节点是祖宗节点时才有意义，表示祖宗节点所在集合中，点的数量
// find(x) 函数用于查找 x 所在集合的祖宗节点
// union(a, b) 函数用于合并 a 和 b 所在的集合
 

// p = list(range(n))
// size = [1] * n


// def find(x):
//     if p[x] != x:
//         # 路径压缩
//         p[x] = find(p[x])
//     return p[x]


// def union(a, b):
//     pa, pb = find(a), find(b)
//     if pa == pb:
//         return
//     p[pa] = pb
//     size[pb] += size[pa]

// 并查集代码
// Todo 下次补一下

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))