const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let s = new Set()
    let cnt = undefined
    while((line = await readline()) && (!cnt || cnt > 0)){
        if(!cnt){
            cnt = line
        }else{
            s.add(line)
            cnt--
        }
    }
    let arr = [...s].sort((a,b) => a-b)
    for(let i of arr){
        console.log(i)
    }
    
}()
