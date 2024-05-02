const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 很简单的一道题，不知道为什么能排中等
void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let s = line;
        let max = -1;
        let count = 0;
        let cntStr = "";
        let arr = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] <= "9" && s[i] >= "0") {
                cntStr += s[i];
                count++;
            } else {
                if (count === max) {
                    arr.push(cntStr);
                } else if (count > max) {
                    max = count;
                    arr = [cntStr];
                }
                cntStr = "";
                count = 0;
            }
        }
        if (count !== 0) {
            if (count === max) {
                arr.push(cntStr);
            } else if (count > max) {
                max = count;
                arr = [cntStr];
            }
        }
        let resStr = ""
        for(item of arr){
            resStr += item
        }
        console.log(`${resStr},${max}`)
    }
})();
