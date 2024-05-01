const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    // while(line = await readline()){
    //     let tokens = line.split(' ');
    //     let a = parseInt(tokens[0]);
    //     let b = parseInt(tokens[1]);
    //     console.log(a + b);
    // }
    line = await readline()
    let arr = line.split(/(\d+)|(\D+)/).filter(Boolean)
    let result = ""
    for(let i = 0;i < arr.length; i++){
        const regex = /\d+/
        if(regex.test(arr[i])){
            result += "*" + arr[i] + "*"
        }else{
            result += arr[i]
        }
    }
    console.log(result)
}()
