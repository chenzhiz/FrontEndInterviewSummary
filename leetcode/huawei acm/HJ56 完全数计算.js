const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const Perfect = (number) => {
        let count = 1
        for(let i = 2; i * i <= number;i++){
            
            if(number % i === 0){
                if(i * i === number ) count += number
                else count += (i + number / i)
            }
        }
        return count === number
    }

    while(line = await readline()){
        let range = parseInt(line)
        let cnt = 0
        for(let i = 2; i <= range ; i++ ){
            if(Perfect(i)){
                // console.log(i)
                cnt++
            }
        }
        console.log(cnt)
    }
}()
