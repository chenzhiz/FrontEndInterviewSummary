const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline()
    let znum = 0
    let sum = 0
    line = await readline()
    let arr = line.split(" ").map((item) => parseInt(item))
    for(item of arr){
        if(item === 0) znum++
        else sum += item
    }
    while(line = await readline()){
        let tokens = line.split(' ');
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        if(a>b){
            [a, b] = [b, a]
        }
        console.log(`${sum + znum * a} ${sum + znum * b}`)
    }
}()
