const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 所以说树的意义是什么
void async function () {
    // Write your code here
    line = await readline()
    let n = parseInt(line)
     line = await readline()
    let arr = line.split(" ").map((item) => parseInt(item))
    arr = [0, ...arr]
    // console.log(arr)
    for(let i = 0; i < n-1; i++) line = await readline()
    
    let count = 0
    for(let i = 1; i <= n; ){
      if(arr[i] !== i){
        count++
        let t = arr[i]
        let t2 = arr[t]
        arr[i] = t2
        arr[t] = t
      }else{
        i++
      }
    }
    console.log(count)
}()