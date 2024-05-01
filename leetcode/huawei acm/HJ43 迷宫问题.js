const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 迷宫DFS， 最短路径可以用BFS（不好记走过的路径倒是）
void async function () {
    // Write your code here
    line = await readline()
    let [n, m] = line.split(' ').map((item) => parseInt(item))
    let arr = []
    while (line = await readline()) {
        let tarr = line.split(' ').map((item) => parseInt(item));
        arr.push(tarr)
    }
    let res = []
    let cur = []
    let move = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const dfs = (x, y) => {
        if (x === n - 1 && y === m - 1) {
            res = [...cur]
            return
        }
        for (let i = 0; i < 4; i++) {
            let nx = x + move[i][0]
            let ny = y + move[i][1]
            if ((nx >= 0 && nx < n) && (ny >= 0 && ny < m) && arr[nx][ny] === 0) {
                cur.push([nx, ny])
                arr[nx][ny] = -1
                dfs(nx, ny)
                arr[nx][ny] = 0
                cur.pop()
            }
        }
    }
    cur.push([0, 0])
    arr[0][0] = -1
    dfs(0, 0)
    for (let t of res) {
        console.log(`(${t[0]},${t[1]})`)
    }
}()
