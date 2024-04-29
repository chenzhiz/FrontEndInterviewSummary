const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let num16 = line.split("0x")[1]
        let arr = Array.from(num16)
        let num = 0
        for(let i of arr){
            let tn = i.charCodeAt(0) - "0".charCodeAt(0)
            if(tn < 10 && tn >= 0){
                num = num * 16 + tn
            }else{
                num = num * 16 + i.charCodeAt(0) - "A".charCodeAt(0) + 10
            }
        }
        console.log(num)
    }
}()
