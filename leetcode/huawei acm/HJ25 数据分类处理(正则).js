const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 傻逼题目描述一大堆差点都看不懂了，难倒是一点不难正则秒杀
void async function () {
    // Write your code here
    line = await readline()
    let I = line.split(' ').map((item) => parseInt(item));
    line = await readline()
    let tr = line.split(' ').map((item) => parseInt(item));
    let s = new Set()
    for(let i = 1 ;i < tr.length;i++){
        s.add(tr[i])
    }
    let R = [...s].sort((a, b) => a-b)
    // console.log(R)
    let res = []
    for(let i = 0 ; i < R.length; i++){
        const regex = new RegExp(String(R[i]))
        let result = []
        for(let j = 1 ; j < I.length ; j++){
            if(regex.test(I[j])) {
                result.push([j - 1, I[j]])
            }
        }
        if(result.length !== 0){
            res.push([R[i], result])
        }
    }
    let totalNum = 0
    for(item of res){
        totalNum += 2 + item[1].length * 2
    }
    let resString = `${totalNum}`
    for(item of res){
        resString += " " + String(item[0]) + " " + String(item[1].length)
        for(sub of item[1]){
            resString += " " + sub[0] + " " + sub[1]
        }
    }
    console.log(resString)
}()

