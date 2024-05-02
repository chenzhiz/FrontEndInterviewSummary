const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 辗转相除是这么写的吗？回头看看
void async function () {
    // Write your code here
    while(line = await readline()){
        let [a, b] = line.split(' ').map((item) => parseInt(item));
        let oriA = a;
        let oriB = b;
        if (a < b){
            [a, b] = [b , a] 
        }
        while(a % b !== 0){
            let t = a % b
            a = b
            b = t 
        }
        console.log(oriA / b * oriB)
    }
}()
