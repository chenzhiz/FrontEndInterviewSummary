const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline()
    while(line = await readline()){
        let tokens = line.split('');
        let m = new Map()
        for(t of tokens){
            m.set(t, (m.get(t) ?? 0) + 1)
        }
        let arr = [...m].sort((a,b) => b[1] - a[1])
        let result = 0
        for(let i = 0; i < arr.length; i++){
            result += (26-i) * arr[i][1]
        }
        console.log(result)
    }
}()
