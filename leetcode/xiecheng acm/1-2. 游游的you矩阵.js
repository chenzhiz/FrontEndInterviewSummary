const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  let line = await readline()
  let [n, m] = line.split(" ").map((item) => parseInt(item))
  let arr = []
  while (line = await readline()) {
    arr.push(line.split(""))
  }
  iy = Array(n).fill(0)
  jy = Array(m).fill(0)

  io = Array(n).fill(0)
  jo = Array(m).fill(0)

  iu = Array(n).fill(0)
  ju = Array(m).fill(0)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === "y") {
        iy[i]++
        jy[j]++
      }
      if (arr[i][j] === "o") {
        io[i]++
        jo[j]++
      }
      if (arr[i][j] === "u") {
        iu[i]++
        ju[j]++
      }
    }
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === "y") {
        ans += io[i] * ju[j] + iu[i] * jo[j]
      }
      if (arr[i][j] === "o") {
        ans += iy[i] * ju[j] + iu[i] * jy[j]
      }
      if (arr[i][j] === "u") {
        ans += iy[i] * jo[j] + io[i] * jy[j]
      }
    }
  }
  console.log(ans)
}()
