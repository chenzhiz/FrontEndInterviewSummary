const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 区间删除，没过时间(可以计算从前到后的计算出的0的的个数然后在再双指针)
void async function () {
    // Write your code here
    line = await readline()
    let tokens = line.split(' ');
    let [n,k] = tokens.map((item) => parseInt(item))

    const judege = (arr) => {
        let sum = 1
        let cnt = k
        for(let i = 0; i < arr.length; i++){
            sum *= arr[i]
            while(sum % 10 === 0){
                sum /= 10
                --cnt
                if(cnt <= 0) return true
            }
        }
        return false
    }
    // console.log(n,k)
    while(line = await readline()){
        let arr = line.split(" ").map((item) => parseInt(item))
        let count = 0
        for(let i = 0; i < n; i++){
            for(let j = n ; j >= i + 1; j--){
                if(judege([...arr.slice(0,i),...arr.slice(j)])){
                    count+= (j - i)
                    break
                }
            }
        }
        console.log(count)
    }
}()
