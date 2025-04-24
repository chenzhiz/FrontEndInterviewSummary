const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  let arr = line.split("")
  let n = arr.length
  let stk = []
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (arr[i] === "0") {
      stk.push("0")
      ans += stk.length
    } else {
      stk.pop()
      ans += stk.length
    }
  }
  console.log(ans)
}()
