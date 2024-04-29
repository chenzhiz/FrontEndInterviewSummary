const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let num = line
        let result = 0
        let s = new Set()
        while(num > 0){
            let cn = num % 10
            if(!s.has(cn)){
                s.add(cn)
                result = result * 10 + cn
            }
            num = Math.floor(num / 10)
        }
        console.log(result)
    }
}()
