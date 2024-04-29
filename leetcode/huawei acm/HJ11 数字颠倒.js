const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let cnt = line;
        let result = "";
        if (cnt === "0"){
           console.log("0");
        } 
        else {
            while (cnt > 0) {
                let cn = cnt % 10;
                result += String.fromCharCode(cn + "0".charCodeAt(0));
                cnt = Math.floor(cnt / 10);
            }
            console.log(result);
        }
    }
})();
