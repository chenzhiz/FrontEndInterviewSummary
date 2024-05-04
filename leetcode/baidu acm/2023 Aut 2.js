const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 小红踏前斩
void async function () {
  // Write your code here
  line = await readline()
  while(line = await readline()){
      let nums = line.split(' ').map((item) => parseInt(item));
      let count = 0
      for(let i = nums.length - 1; i >= 2; ){
          if(nums[i] >= 3 && nums[i - 1] >= 2 && nums[i - 2] >= 1){
              let round = Math.min(Math.floor(nums[i] / 3), Math.floor(nums[i-1] / 2), Math.floor(nums[i-2] / 1))
              nums[i] -= 3 * round
              nums[i-1] -= 2 * round
              nums[i-2] -= 1 * round
              count += 5 * round
          }else{
              i--
          }
          // console.log(nums)
      }
      for(let i = 0; i < nums.length; i++){
          count += nums[i]
      }
      console.log(count)
  }
 
}()
