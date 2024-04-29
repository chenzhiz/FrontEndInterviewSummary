const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split(" ")
        let result = ""
        for(let i = arr.length - 1; i>=0; i--){
            if(i !== 0){
                result += arr[i] + " "
            }else{
                result += arr[i]
            }
        }
        console.log(result)
    }
}()
