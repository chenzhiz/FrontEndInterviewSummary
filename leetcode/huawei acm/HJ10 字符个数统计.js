const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let s = new Set()
        for(let i of line){
            s.add(i)
        }
        console.log(s.size)
    }
}()
