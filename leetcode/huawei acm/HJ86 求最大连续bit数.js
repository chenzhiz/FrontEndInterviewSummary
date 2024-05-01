const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let max = 0
    while(line = await readline()){
        let cnt = parseInt(line)
        let count = 0
        while(cnt != 0){
            if(cnt % 2 === 1){
                count++
                max = Math.max(max, count)
            }else{
                count = 0
            }
            cnt = cnt >> 1
        }
        console.log(max)
    }
}()
