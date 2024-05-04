const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 3.小红的baidu型子串
void async function () {
    // Write your code here
    const baidu = (arr) => {
        if(arr.length !== 5) return false
        let ori = ["a","e","i","o","u"]
        let set = new Set(arr)
        if(set.size === 5 && !ori.includes(arr[0]) && ori.includes(arr[1]) && ori.includes(arr[2]) && !ori.includes(arr[3]) && ori.includes(arr[4])){
            return true
        }
        return false
    }
    while(line = await readline()){
        let s = line;
        let cnt = 0
        for(let i = 0; i + 5 <= s.length; i++){
            if(baidu(s.slice(i, i + 5))){
                cnt++
            }
        }
        console.log(cnt)
    }
}()
