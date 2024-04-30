const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const parseStr = (str) => {
        const regex = /^[WASD]\d+$/
        if(regex.test(str)){
            return [str[0], parseInt(str.slice(1))]
        }else{
            return null
        }
    }

    // Write your code here
    while(line = await readline()){
        let tokens = line.split(';');
        let arr = []
        for(t of tokens){
            let res = parseStr(t)
            if(res) arr.push(res)
        }
        let x = 0;
        let y = 0;
        for(t of arr){
            if(t[0] === 'A') x -= t[1]
            if(t[0] === 'S') y -= t[1]
            if(t[0] === 'D') x += t[1]
            if(t[0] === 'W') y += t[1]
        }
        console.log(`${x},${y}`)
    }
}()
