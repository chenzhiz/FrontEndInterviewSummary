const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  let [x, y, t] = line.split(" ").map((item) => parseInt(item))
  let arr = []
  arr.push([x, y])
  arr.push([y, -x])
  arr.push([-x, -y])
  arr.push([-y, x])
  let count = 0
  while (line = await readline()) {
    let t = parseInt(line)
    if (t === 1) {
      count = count + 1
    }
    if (t === 2) {
      count = count + 4 - 1
    }
    count = count % 4
    console.log(arr[count].join(" "))
  }
}()
