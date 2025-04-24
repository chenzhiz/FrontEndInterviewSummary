const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here


  while (line = await readline()) {
    let n = parseInt(line)
    if (n % 3 !== 0) {
      console.log(Math.floor(n / 3) * 2)
    } else {
      let ans = []
      for (let i = 3; i < n; i += 3) {
        ans.push([i, n - i])
      }
      console.log(ans.length)
    }
  }
}()

// let n = 9
// let ans = []
// for (let i = 3; i < n; i += 3) {
//   ans.push([i, n - i])
// }
// console.log(ans)
// console.log(ans.length)