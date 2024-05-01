const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let n = 0;
    while(line = await readline()){
        // 加密过程
        if(n++ === 0){
            let res = ""
            for(let i = 0 ;i < line.length; i++){
                // "c".charCodeAt
                let codeindex = line[i].charCodeAt(0)
                if("0".charCodeAt(0) <= codeindex && codeindex <= "9".charCodeAt(0)){
                    if(codeindex === "9".charCodeAt(0)){
                        res+="0"
                        continue
                    }
                    res += String.fromCharCode(codeindex + 1)
                }
                else if("a".charCodeAt(0) <= codeindex && codeindex <= "z".charCodeAt(0)){
                    if(codeindex === "z".charCodeAt(0)){
                        res+="A"
                        continue
                    }
                    res += String.fromCharCode(codeindex + 1).toLocaleUpperCase()
                }
                else if("A".charCodeAt(0) <= codeindex && codeindex <= "Z".charCodeAt(0)){
                       if(codeindex === "Z".charCodeAt(0)){
                        res+="a"
                        continue
                    }
                    res +=  String.fromCharCode(codeindex + 1).toLocaleLowerCase()
                }else{
res += line[i]
                }
                
            }
            console.log(res)
        }else{
            let res = ""
            for(let i = 0 ;i < line.length; i++){
                // "c".charCodeAt
                let codeindex = line[i].charCodeAt(0)
                if("0".charCodeAt(0) <= codeindex && codeindex <= "9".charCodeAt(0)){
                    if(codeindex === "0".charCodeAt(0)){
                        res+="9"
                        continue
                    }
                    res += String.fromCharCode(codeindex - 1)
                }
                else if("a".charCodeAt(0) <= codeindex && codeindex <= "z".charCodeAt(0)){
                    if(codeindex === "a".charCodeAt(0)){
                        res+="Z"
                        continue
                    }
                    res += String.fromCharCode(codeindex - 1).toLocaleUpperCase()
                }
                else if("A".charCodeAt(0) <= codeindex && codeindex <= "Z".charCodeAt(0)){
                       if(codeindex === "A".charCodeAt(0)){
                        res+="z"
                        continue
                    }
                    res +=  String.fromCharCode(codeindex - 1).toLocaleLowerCase()
                }else{
res += line[i]
                }
                
            }
            console.log(res)
        }
    }
}()
