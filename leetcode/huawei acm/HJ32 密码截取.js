const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    // 最长回文符串题
    while (line = await readline()) {
        let m = line.length
        let max = -1
        for (let i = 0; i < m; i++) {
            let res = 1
            for (let j = 1; 0 <= i - j && i + j < m; j++) {
                if (line[i - j] === line[i + j]) res += 2
                else break
            }
            max = Math.max(max, res)

            if (i + 1 < m && line[i] === line[i + 1]) {
                res = 2
                for (let j = 1; 0 <= i - j && i + j + 1 < m; j++) {
                    if (line[i - j] === line[i + j + 1]) res += 2
                    else break
                }
                max = Math.max(max, res)
            }
        }
        console.log(max)
    }   
}()
