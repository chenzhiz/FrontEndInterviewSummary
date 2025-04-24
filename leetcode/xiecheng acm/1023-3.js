const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  let n = parseInt(line)
  while (line = await readline()) {
    let arr = line.split(' ').map((item) => parseInt(item))
    let ans = 0
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j <= n; j++) {
        let t = Math.max(...arr.slice(i, j))
        if (t >= j - i) ans++
      }
    }
    console.log(ans)
  }
}()
