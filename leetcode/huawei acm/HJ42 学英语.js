const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 逆天题字符串处理半天
void (async function () {
    // Write your code here
    line = await readline();
    let tsn = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tsTy = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let tsTeen = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    

    const tstrans = (chr) => {
        let result = []
        if (chr[0] === "0") {
            result.push(tsn[parseInt(chr[1])])
            return result
        }
        if (chr[0] === "1") {
            result.push(tsTeen[parseInt(chr[1])])
        } else {
            result.push(tsTy[parseInt(chr[0])])
            result.push(tsn[parseInt(chr[1])])
        }
        return result
    }

    const hundredtrans = (chr) => {
        let result = []
        if (chr.length === 1) {
            result.push(tsn[parseInt(chr[0])])
            return result
        }
        if (chr.length === 2) {
            return tstrans(chr)
        }
        // 三位数
        if (chr[0] === "0") {
            return tstrans(chr.slice(1))
        } else {
            result.push(tsn[parseInt(chr[0])])
            result.push("hundred")
            if (chr[1] !== "0" || chr[2] !== "0"){
                result = [...result, "and",...tstrans(chr.slice(1))]
            }
        }
        return result
    }
    // let arr = hundredtrans("05")
    let n = 0
    let cur = line.length
    let result = []
    while(cur > 0){
        let start = cur - 3 < 0 ? 0 : cur - 3 
        substr = line.slice(start ,cur)
        if(!substr.split("").every((c) => c==="0")){
            if(n === 1) result = ["thousand",...result]
            if(n === 2) result = ["million", ...result]
            if(n === 3) result = ["billion", ...result]
            result = [...hundredtrans(substr), ...result] 
        }
        cur = start
        n++
    }
    let resStr = ""
    // console.log(result)
    for(let i = 0; i < result.length; i++){
        if(result[i] === '') continue
        if(i !== 0){
          resStr += " " + result[i]
        }else{
          resStr += result[i]
        }
        
    }
    console.log(resStr)
})();
