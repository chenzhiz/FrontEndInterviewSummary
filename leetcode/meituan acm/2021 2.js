const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    
    while(line = await readline()){
        let n = parseInt(line)
        line = await readline()
        let nums = line.split(' ').map((item) => parseInt(item));
        nums = [0, ...nums]
        let count = 0
        let sum1 = 0
        let sum2 = 0
        for(let i = 1; i <= n; i++){
            sum1 += i
            if(nums[i] < 1){
                sum2 += 1
                count += (1 - nums[i])
            }else{
                sum2 += nums[i]
            }
        }
        console.log(Math.abs(sum1 - sum2) + count)
    }
}()
