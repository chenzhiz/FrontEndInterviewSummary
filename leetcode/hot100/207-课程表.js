/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 拓扑排序(可以加一个队列来存储入度已经是0的加快速度)
var canFinish = function(numCourses, prerequisites) {
  let f = Array(numCourses).fill(0)
  let count = 0
  for(v of prerequisites){
    f[v[0]]++
  }
  let index = f.indexOf(0)
  while(index !== -1){
    prerequisites = prerequisites.filter((item) => {
      if(item[1] === index) {
        f[item[0]]--
        return false
      }
      return true
    })
    f[index] = -1
    count++
    index = f.indexOf(0)
  }
  return count === numCourses
};
// 

console.log(canFinish(2, [[1,0]]))

