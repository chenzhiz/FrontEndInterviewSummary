const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let s = line
        let arr = []
        for(let i = 0; i < s.length; i++){
            if(s[i] <= "Z" && s[i] >= "A"){
                if(s[i] === "Z"){
                    arr.push("a")
                    continue
                } 
                let char = String.fromCharCode(s[i].charCodeAt(0) - "A".charCodeAt(0) + "a".charCodeAt(0) + 1)
                arr.push(char)
                continue
            }
            if(s[i] <= "z" && s[i] >= "a"){
                if("abc".includes(s[i])) arr.push(2) 
                if("def".includes(s[i])) arr.push(3) 
                if("ghi".includes(s[i])) arr.push(4) 
                if("jkl".includes(s[i])) arr.push(5) 
                if("mno".includes(s[i])) arr.push(6) 
                if("pqrs".includes(s[i])) arr.push(7) 
                if("tuv".includes(s[i])) arr.push(8) 
                if("wxyz".includes(s[i])) arr.push(9) 
                continue
            }
            arr.push(s[i])
        }
        console.log(arr.reduce((pre, item) => pre+item, ""))
    }
}()
