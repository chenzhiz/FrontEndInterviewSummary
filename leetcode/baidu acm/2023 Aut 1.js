const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

//1. 小红的01串
void async function () {
    // Write your code here
    line = await readline()
    while(line = await readline()){
        let odds = 0
        let evens = 0
        for(let i = 0; i< line.length; i++){
            if(line[i] === "1") odds++
            else evens++
        }
        // console.log(`${odds}  ${evens}`)
        if(evens % 2 === 0 || odds % 2 === 0){
            console.log("Yes")
        }else{
            console.log("No")
        }
    }
}()
