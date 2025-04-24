const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  let n = parseInt(line)
  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false
    }
    return true
  }

  const fn = (list) => {
    for (let i = 1; i < list.length; i++) {
      if (isPrime(list[i] + list[i - 1])) return false
    }
    return true
  }

  let arr = []
  let mark = Array(n + 1).fill(false)
  let dfs = (cur) => {
    if (cur.length === n) {
      if (fn(cur)) {
        arr.push([...cur])
      }
      return
    }
    for (let i = 1; i <= n; i++) {
      if (!mark[i]) {
        mark[i] = true
        dfs([...cur, i])
        mark[i] = false
      }
    }
  }
  dfs([])
  //   console.log(fn( [ 1, 2, 3, 4, 5 ]))
  //   console.log(arr)
  console.log(arr.length)
}()
