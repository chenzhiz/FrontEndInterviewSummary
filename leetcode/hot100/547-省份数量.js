/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// 并查集加路径压缩，注意输入的下标数值和 p 的下标数值
var findCircleNum = function(isConnected) {
  let m = isConnected.length
  let p = new Array(m + 1).fill(-1)

  const find = (i) => {
    if(p[i] === -1 || p[i] === i){
      return i
    }else{
      p[i] = find(p[i])
      return p[i]
    }
  }

  const union = (a, b) => {
    let pa = find(a)
    let pb = find(b)
    if(pa === pb) return 
    else{
      p[pa] = pb
    }
  }

  for(let i = 1 ; i <= m; i++){
    for(let j = i + 1; j <= m; j++){
      if(isConnected[i-1][j-1] === 1)
        union(i, j)
    }
  }
  let ans = 0
  for(let i = 1; i < p.length; i++){
    if(find(i) === i){
      ans++
    } 
  }
  return ans
};

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))