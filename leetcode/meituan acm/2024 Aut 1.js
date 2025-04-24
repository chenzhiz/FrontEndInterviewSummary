const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  const fn = (num) => {
    if (num === 1) return 1
    return fn(num - 1) * num
  }

  // Write your code here
  let n = await readline()
  let cor = await readline()
  let m = new Map()
  let s = new Set()
  while (line = await readline()) {
    if (!s.has(line)) {
      s.add(line)
    }
  }
  for (item of s) {
    let len = item.length
    m.set(len, [...(m.get(len) ?? []), item])
  }
  arr = [...m]
  arr.sort((a, b) => {
    if (a[0] > b[0]) return 1
    else {
      return -1
    }
  })
  let min = 1
  let max = 1
  console.log(arr)
  for (item of arr) {
    if (item[0] < cor.length) {
      min += item[1].length
    }
    if (item[0] === cor.length) {
      max = min + item[1].length - 1
      break
    }
  }
  console.log(`${min} ${max}`)
}()
