const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let m = new Map()
    while(line = await readline()){
        let sl = line.split("\\")
        let fn = sl[sl.length - 1]
        m.set(fn, (m.get(fn) ?? 0) + 1)
    }
    let arr = [...m].sort((a,b) => b[1] - a[1])
    for(let i =0; i< arr.length && i < 8; i++){
        let temp = arr[i][0].split(" ")
        let filename = temp[0].length <= 16 ? temp[0] : (temp[0].slice(temp[0].length - 16))
        let row = parseInt(temp[1]) 
        console.log(`${filename} ${row} ${arr[i][1]}`)
        //E:\V1R2\product\fpgadrive.c 1325
    }
}()
