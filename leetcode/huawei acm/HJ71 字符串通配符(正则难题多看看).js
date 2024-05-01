const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 正则偷鸡但是因为有几个点过不了加了
void async function () {
    // Write your code here
    line = await readline()
    let org = line
    let regStr = ""
    for(let i=0; i< line.length; i++){
        if(line[i] === "?"){
            regStr+="[0-9A-Z]"
        }else if(line[i] === "*"){
            regStr+="[0-9A-Z]*"
        }else{
            if(line[i] === "." || line[i] === "\\"){
                regStr+="\\" + line[i]
            }
            else{
              regStr+=line[i]
            }
            
        }
    }
    
    // 加锚点，使得超长度不会被匹配上
    regStr = "^" + regStr + "$"
   
    let regex = new RegExp(regStr,"i")
    while(line = await readline()){
        // 加速几个点
        if((org[0] ==="*" || org[0] ==="?" || org[0] === line[0]) 
        && (org[org.length - 1] ==="*" || org[org.length-1] ==="?" || org[org.length-1] === line[line.length-1])){
            console.log(regex.test(line))
        }else{
            console.log(false)
        }
    }
}()
