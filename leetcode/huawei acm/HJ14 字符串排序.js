const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline()
    let arr = []
    while(line = await readline()){
        arr.push(line)
    }
    arr.sort((a, b) => a > b ? 1 : -1)
    for(let i of arr){
        console.log(i)
    }
}()
