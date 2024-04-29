const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let cnt = line;
        let curn = 2
        let arr = [];
        while (cnt > 1) {
            let cur = cnt
            for (let i = curn; i <= Math.sqrt(cnt); i++) {
                if (cnt % i === 0) {
                    curn = i
                    arr.push(i);
                    cnt /= i;
                    break;
                }
            }
            if(cur === cnt){
                arr.push(cnt)
                break
            }
        }
        let result = ""
        for (let i = 0; i < arr.length; i++) {
            if(i!==0) result = result + " " + arr[i]
            else result = arr[i]
        }
        console.log(result)
    }
})();
