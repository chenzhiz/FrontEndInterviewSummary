const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    
    while(line = await readline()){
        // let cnt = 100
        for(let i = 0; i * 5 <= 100; i++){
            for(let j = 0; j * 3 <= 100; j++){
                if(7 * i + 4 * j === 100){
                    console.log(`${i} ${j} ${100 - i - j}`)
                }
                if(7 * i + 4 * j > 100) {
                    break
                }
            }
        }
    }
}()
