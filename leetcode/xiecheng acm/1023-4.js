const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  let n = parseInt(line)
  line = await readline()
  let arr = [-1, ...line.split(' ').map((item) => parseInt(item))]
  let cnt = new Map()
  const modmum = 1000000000 + 7
  while (line = await readline()) {
    let tokens = line.split(' ')
    let a = parseInt(tokens[0])
    let b = parseInt(tokens[1])
    cnt.set(a, [...(cnt.get(a) ?? []), b])
    cnt.set(b, [...(cnt.get(b) ?? []), a])
  }
  let vis = Array(n + 1).fill(false)

  let ansa = 0
  let ansb = 0
  const dfs = (root) => {
    vis[root] = true
    let cntlist = (cnt.get(root) ?? []).filter((item) => !vis[item])
    if (cntlist.length === 0) {
      if (arr[root] > 0) {
        return [1, 0]
      } else if (arr[root] < 0) {
        return [0, 1]
      } else {
        return [0, 0]
      }
    }
    let ablist = []
    for (let i = 0; i < cntlist.length; i++) {
      if (!vis[cntlist[i]]) {
        ablist.push(dfs(cntlist[i]))
      }
    }
    console.log(ablist)
    // 00 特殊处理一下
    if (arr[root] === 0) {
      for (let i = 0; i < ablist.length; i++) {
        ansa += ablist[i][0]
        ansb += ablist[i][1]
      }
      return [0, 0]
    }
    if (ablist.length === 0) {
      if (arr[root] > 0) {
        return [1, 0]
      } else if (arr[root] < 0) {
        return [0, 1]
      } else {
        return [0, 0]
      }
    }
    let anum = ablist[0][0]
    let bnum = ablist[0][1]
    for (let i = 1; i < ablist.length; i++) {
      let ta = anum * ablist[i][0] + bnum * ablist[i][1] + ablist[i][0]
      let tb = anum * ablist[i][1] + bnum * ablist[i][0] + ablist[i][1]
      anum = ta
      bnum = tb
    }
    if (arr[root] > 0) {
      return [anum * 2 + 1, bnum * 2]
    } else {
      return [bnum * 2, anum * 2 + 1]
    }
  }
  let [a, b] = dfs(1)
  console.log((a + ansa) + " " + (b + ansb))
}()
