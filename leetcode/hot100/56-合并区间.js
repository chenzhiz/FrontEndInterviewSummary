/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let m = intervals.length
  intervals.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0]
    else{
      return b[1] - a[1]
    }
  })
  let res = [...intervals]
  for(let i = 1; i < res.length; ){
    if(res[i][0] <= res[i-1][1]){
      res = [...res.slice(0, i-1),[res[i-1][0], Math.max(res[i-1][1], res[i][1])], ...res.slice(i+1)]
    }else{
      i++
    }
    console.log(res)
  }
  return res
};


var merge = function(intervals) {
  let m = intervals.length
  intervals.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0]
    else{
      return b[1] - a[1]
    }
  })
  let res = [...intervals]
  for(let i = 1; i < res.length; ){
    if(res[i][0] <= res[i-1][1]){
      res.splice(i - 1, 2, [res[i-1][0], Math.max(res[i-1][1], res[i][1])])
    }else{
      i++
    }
    console.log(res)
  }
  // console.log(res)
  return res
};

merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])