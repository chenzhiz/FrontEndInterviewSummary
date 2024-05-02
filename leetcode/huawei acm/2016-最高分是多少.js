const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here



    // console.log(score)
    let res = []
    while (line = await readline()) {
        let [sn, qn] = line.split(" ").map((item) => parseInt(item))
        let score = Array(sn + 1).fill(-1)
        line = await readline()
        let arr = line.split(" ").map((item) => parseInt(item))
        for (let i = 0; i < arr.length; i++) {
            score[i + 1] = arr[i]
        }
        for (let round = 0; round < qn; round++) {
            line = await readline()
            let tokens = line.split(' ');
            if (tokens[0] === "Q") {
                let max = -1
                let st = Math.min(parseInt(tokens[1]), parseInt(tokens[2]))
                let ed = Math.max(parseInt(tokens[1]), parseInt(tokens[2]))
                for (let i = st; i <= ed; i++) {
                    max = Math.max(score[i], max)
                }
                res.push(max)
            } else {
                score[parseInt(tokens[1])] = parseInt(tokens[2])
            }
        }


        // console.log(score)
    }
    for (let i = 0; i < res.length; i++) {
        console.log(res[i])
    }
}()
