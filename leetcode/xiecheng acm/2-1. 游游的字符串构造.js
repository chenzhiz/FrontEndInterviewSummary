const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  while (line = await readline()) {
    let [n, k] = line.split(" ")
    if (n < k * 3) {
      console.log(-1)
      break
    }

    let ans = ""
    ans += "you".repeat(k)
    ans += "y".repeat(n - k * 3)
    console.log(ans)
  }
}()


