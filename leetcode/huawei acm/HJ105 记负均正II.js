const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let count = 0
    let ncount = 0
    let res = 0
    while(line = await readline()){
        let num = parseInt(line)
        if(num > 0){
            res += num 
            count++
        }else{
            ncount++
        }
    }
    console.log(ncount)
    if(res === 0){
        console.log("0.0")
    }else{
        console.log((res/count).toFixed(1))
    }
}()
