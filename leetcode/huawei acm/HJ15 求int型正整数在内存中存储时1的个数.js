const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let cnt = 0
        let num = line
        while(num > 0){
            num &= num - 1
            ++cnt
        }
        console.log(cnt)
    }
}()
