const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let m = new Map()
    while(line = await readline()){
        let s = line
        for(let i = 0; i< s.length; i++){
            m.set(s[i],(m.get(s[i]) ?? 0) + 1)
        }
        let arr = [...m]
        let index = -1
        for(let i= 0; i< arr.length; i++){
            if(arr[i][1] === 1){
                index = i
                break
            }
        }
        if(index !== -1){
            console.log(arr[index][0])
        }else{
            console.log(-1)
        }
    }
}()
