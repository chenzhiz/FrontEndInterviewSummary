const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 注意处理好边界就可以
void async function () {
    // Write your code here
    line = await readline()
    let sNum = line
    let st = 1
    let ed = 1 + sNum >= 4 ? 3 : (sNum - 1)
    let cur = 1
    
    while(line = await readline()){
        let tokens = line.split('');
        for(let i = 0; i < tokens.length; i++){
            if(tokens[i] === "U"){
                cur--
                if(cur <= 0){
                    cur = sNum
                    ed = sNum
                    st = ed - (sNum >= 4 ? 3 : (sNum - 1))
                }
                if(cur < st){
                    st = cur
                    ed = st + (sNum >= 4 ? 3 : (sNum - 1))
                }
            }
            if(tokens[i] === "D"){
                cur++
                if(cur > sNum){
                    cur = 1
                    st = 1
                    ed = 1 + (sNum >= 4 ? 3 : (sNum - 1))
                }
                if(cur > ed){
                    ed = cur
                    st = ed - (sNum >= 4 ? 3 : (sNum - 1))
                }
            }
        }
        let res = ""
        // console.log(`sNum: ${sNum}`)
        // console.log(`st:${st} ed:${ed}`)
        for(let i = st; i <= ed ; i++){
            if(i === st){
                res += String(i)
            }else{
                res += " " + String(i)
            }
        }
        console.log(res)
        console.log(cur)
    }
}()
