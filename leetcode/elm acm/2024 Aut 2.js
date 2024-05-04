const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 计算超时
void async function () {
    // Write your code here
    let line = await readline()
    while(line = await readline()){
        let st = line.split(":").map((item) => parseInt(item))
        line = await readline()
        let ed = line.split(":").map((item) => parseInt(item))
        line = await readline()
        let ac = line.split(":").map((item) => parseInt(item))
        
        let m1 = (ed[0] - st[0]) * 60 + (ed[1] - st[1])
        if(m1 < 0) m1 += 24*60
        

        let m2 = (ac[0] - st[0]) * 60 + (ac[1] - st[1])
        if(m2 < 0) m2 += 24*60
        if(m2 <= m1){
            console.log("No")
        }else{
            console.log("Yes")
        }
    }
}()