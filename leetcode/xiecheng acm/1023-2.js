const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  let n = parseInt(line)
  let minlist = Array(n)
  let maxlist = Array(n)
  while (line = await readline()) {
    let arr = line.split(" ").map((item) => parseInt(item))
    minlist[0] = Math.min(arr[0], -arr[0])
    maxlist[0] = Math.max(arr[0], -arr[0])
    for (let i = 1; i < n; i++) {
      minlist[i] = Math.min(arr[i] - minlist[i - 1], arr[i] - maxlist[i - 1], minlist[i - 1] - arr[i], maxlist[i - 1] - arr[i])
      maxlist[i] = Math.max(arr[i] - minlist[i - 1], arr[i] - maxlist[i - 1], minlist[i - 1] - arr[i], maxlist[i - 1] - arr[i])
    }
    console.log(maxlist[n - 1])
  }
}()
