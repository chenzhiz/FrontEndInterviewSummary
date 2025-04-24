const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  while (line = await readline()) {
    let tokens = line.split(' ')
    let a = parseInt(tokens[0])
    let b = parseInt(tokens[1])
    let s = new Set()
    for (let i = 1; i * i <= a * b; i++) {
      if ((a * b) % i === 0) {
        s.add(i)
        s.add((a * b) / i)
      }
    }
    let arr = Array(...s)
    arr.sort((a, b) => a - b)
    console.log(arr.length)
    console.log(arr.join(" "))
  }
}()
