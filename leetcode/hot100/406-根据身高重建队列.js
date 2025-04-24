/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let n = people.length
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    }
    else {
      return a[1] - b[1]
    }
  })

  let ans = Array(n).fill(-1)
  let cur = -1
  let cursit = 0
  let count = -1
  for (let i = 0; i < n; i++) {
    if (cur !== people[i][0]) {
      cur = people[i][0]
      cursit = 0
      count = -1
    }
    for (let j = cursit; j < n; j++) {
      if (ans[j] === -1) count++
      if (count === people[i][1]) {
        ans[j] = people[i]
        cursit = j + 1
        break
      }
    }
    // console.log("------------------------------")
    // console.log(ans)
  }
  return ans
}

console.log(reconstructQueue([[9, 0], [7, 0], [1, 9], [3, 0], [2, 7], [5, 3], [6, 0], [3, 4], [6, 2], [5, 2]]))