const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline()
    let [n, k] = line.split(' ').map((item) => parseInt(item));
    line = await readline()
    let s = line
    let count = 0
    for(let i =0; i< s.length; i++){
        if(s[i] === "M" || s[i] === "T") count++
    }
    let res = count + k <= n ? count + k : n
    console.log(res)
}()
