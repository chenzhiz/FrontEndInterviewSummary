const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let A = 0
    let B = 0
    let C = 0
    let D = 0
    let E = 0
    let Err = 0
    let priv = 0
    while(line = await readline()){
        let tokens = line.split('~');
        let ip = tokens[0].split(".").map((item) => parseInt(item))
        let mark = tokens[1].split(".").map((item) => parseInt(item))
        let res = [0,0,0,0]
        let markArr = [255,254,252,248,240,224,192,128,0]
        if(ip[0] === 0 || ip[0] === 127){
            // Err++
            continue
        }
        let isErr = false
        for(let i = 0; i< 4; i++){
            if(markArr.indexOf(mark[i]) === -1) {
                isErr = true
                break
            }
            if(mark[i] < 255){
                for(let j = i + 1 ;j < 4; j++){
                    if(mark[j] !== 0){
                        isErr = true
                        break
                    }
                }
                break
            }
        }
        // 处理全0，全1
        if(mark[0] === 0 || mark[3] === 255){
            isErr = true
        }
        if(isErr){
            Err++
            continue
        }
        // console.log(ip, mark)
        // console.log(ip[0] & mark[0])
       
        for(let i = 0; i < 4; i++){
            res[i] = ip[i] & mark[i]
        }
        let priArr = [10,172,192]
        if(priArr.indexOf(res[0]) !== -1) {
            if(res[0] === 10) priv++
            if(res[0] === 172 && res[1] <= 31 && res[1] >= 16) priv++
            if(res[0] === 192 && res[1] === 168) priv++
        }
        if(res[0] <= 126 && res[0] >=1) A++
        if(res[0] <= 191 && res[0] >=128) B++
        if(res[0] <= 223 && res[0] >=192) C++
        if(res[0] <= 239 && res[0] >=224) D++
        if(res[0] <= 255 && res[0] >=240) E++
    }
    console.log(`${A} ${B} ${C} ${D} ${E} ${Err} ${priv}`)
}()
