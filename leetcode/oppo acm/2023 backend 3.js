const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline()
    let q = parseInt(line)
    for(let i = 0; i < q; i++){
      let s = await readline()
      let t = await readline()
      
      let swap = 0
      let dif = 0
      for(let j = 0; j < s.length - 1; j++)
        // 注意前后两个字符相同的情况，要减去这种情况
        if(!(s[j] === s[j+1]) && s[j] === t[j+1] && s[j+1] === t[j]) swap++
      for(let j = 0; j < s.length; j++)
        if(s[j] !== t[j]) dif++
      if((swap == 1 && dif === 2) || dif === 0) console.log("Yes")
      else console.log("No")
    }
}()
