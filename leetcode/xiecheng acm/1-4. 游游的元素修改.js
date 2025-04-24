const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  while (line = await readline()) {
    let [n, l, r] = line.split(' ').map((item) => parseInt(item))
    line = await readline()
    let arr = line.split(" ").map((item) => parseInt(item))
    let sum = 0
    for (item of arr) sum += item
    if (sum < n * l || sum > n * r) {
      console.log(-1)
      continue
    }
    let lowcount = 0
    let highcount = 0
    for (item of arr) {
      if (item > r) {
        highcount += item - r
      }
      if (item < l) {
        lowcount += l - item
      }
    }
    console.log(Math.max(highcount, lowcount))
  }
}()
