const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let line = await readline()
    let m = new Map()
    while(line = await readline()){
        let tokens = line.split(' ');
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        m.set(a, (m.get(a) ?? 0) + b)
    }
    let arr = [...m].sort((a,b) => a[0]-b[0])
    for(let i of arr){
        console.log(i[0] + " " + i[1])
    }
}()
