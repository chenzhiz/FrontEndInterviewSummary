/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// 错误的并查集（权重要在find里面进行整合，但是不要放到参数里不然会出很多问题）
// var calcEquation = function(equations, values, queries) {
//   // 
//   let m = new Map()
//   let mv = new Map()
//   const find = (i) => {
//     if(!m.get(i) || m.get(i) === i){
//       return i
//     }else{
//       let t = find(m.get(i))
//       m.set(i, t)
//       return t 
//     }
//   }

//   const union = (i, j) => {
//     if(find(i) === find(j)){
//       return 
//     }else{
//       m.set(find(j), find(i))
//     }
//   }

//   for(let i = 0; i < values.length; i++){
//     let [a, b] = equations[i]
//     m.set(a, find(a))
//     m.set(b, find(b))
//     union(a, b)
//     // console.log(m)
//     if(!mv.get(a) || !mv.get(b)){
//       if(mv.get(a)) mv.set(b, (mv.get(a)) * (1 / values[i]))
//       else if(mv.get(b)) mv.set(a, mv.get(b) * values[i])
//       else {
//         mv.set(b, 100)
//         mv.set(a, 100 * values[i])
//       }
//     }
//   }
//   let res = []
//   for(let i = 0; i < queries.length; i++){
//     let [a, b] = queries[i]
//     if(!m.get(a) || !m.get(b)){
//       res.push((-1.0).toFixed(5))
//     }
//     else if(find(a) !== find(b)){
//       res.push((-1.0).toFixed(5))
//     }
//     else{
//       res.push((mv.get(a) / mv.get(b)).toFixed(5))
//     }
//   }
//   return res
// };


/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries){
  let p = new Map()
  // w 是根节点的多少倍
  let w = new Map()
  let n = equations.length
  const find = (x) => {
    if(!(p.get(x) === x)){
      let origin = p.get(x)
      p.set(x, find(p.get(x)))
      w.set(x, w.get(x) * w.get(origin))
    }
    return p.get(x)
  }

  for(e of equations){
    p.set(e[0], e[0])
    p.set(e[1], e[1])
    w.set(e[0], 1.0)
    w.set(e[1], 1.0)
  }
  // union
  for(let i = 0; i < n; i++){
    let [a, b] = equations[i]
    let fa = find(a)
    let fb = find(b)
    if(fa === fb){
      continue
    }else{
      p.set(fa, fb)
      w.set(fa, w.get(b) * values[i] / w.get(a))
    }
  }
  

  let m = queries.length
  let ans = Array(m)
  for(let i = 0; i < m; i++){
    let [c, d] = queries[i]
    // find 子节点就会把子节点的数据也更新掉
    ans[i] = (!p.has(c) || !p.has(d) || !(find(c) === find(d)))
      ? -1.0
      : w.get(c) / w.get(d)
  } 
  return ans
}



console.log(calcEquation([["a","b"],["e","f"],["b","e"]], [3.4,1.4,2.3], [["b","a"],["a","f"],["f","f"],["e","e"],["c","c"],["a","c"],["f","e"]]))