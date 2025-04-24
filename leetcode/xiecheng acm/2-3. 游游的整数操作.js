const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  let [n, k] = line.split(" ").map((item) => parseInt(item))
  line = await readline()
  let arr = line.split(" ").map((item) => parseInt(item))
  const modnum = 1000000000 + 7
  let count = 0
  for (let i = 0; i < k; i++) {
    line = await readline()
    let [op, num] = line.split(" ").map((item) => parseInt(item))
    if (op === 1) {
      count = (count + num) % modnum
    } else {
      count = count - num
    }
    if (count < 0) {
      count = 0
      let t = arr.map((item) => {
        if (item < num) return 0
        else return item - num
      })
      arr = t
    }
  }
  if (count !== 0) {
    let t = arr.map((item) => {
      return (item + count) % modnum
    })
    arr = t
  }
  let ans = arr.reduce((acc, item) => {
    return (acc + item) % modnum
  }, 0)
  console.log(ans)
}()
