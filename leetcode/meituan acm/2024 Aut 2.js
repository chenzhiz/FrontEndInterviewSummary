const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  const MEX = (arr) => {
    let s = new Set(arr)
    for (let i = 0; i <= arr.length; i++) {
      if (!s.has(i)) return i
    }
  }

  let T = await readline()
  let count = 0
  while (count < T) {
    count++
    let line = await readline()
    let [n, k, x] = line.split(" ").map((item) => parseInt(item))
    line = await readline()
    let arr = line.split(" ").map((item) => parseInt(item))

    let mex = MEX(arr)
    let min = Number.MAX_SAFE_INTEGER
    while (arr.length > 0) {
      let cost = mex * k + (n - arr.length) * x
      if (cost < min) {
        min = cost
      }
      if (mex === 0) break
      let t = arr.shift()
      if (t < mex) {
        mex = t
      }
    }
    console.log(min)
  }
}()
