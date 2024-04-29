const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        // let tokens = line.split(' ');
        // let a = parseInt(tokens[0]);
        // let b = parseInt(tokens[1]);
        // console.log(a + b);
        let cnt = line.length
        let cur = 0
        while(cnt > 0){
            let cs = line.slice(cur, cur+8)
            let adds =  8 - cs.length
            cs = cs + "0".repeat(adds) 
            console.log(cs)
            cur += 8
            cnt -= 8
        }
        
    }
}()
