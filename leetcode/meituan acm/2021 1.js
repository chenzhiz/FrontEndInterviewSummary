const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let [n, x, y] = line.split(" ").map((item) => parseInt(item));
        line = await readline();

        if(n > y * 2 || n < x * 2) console.log(-1)
        let arr = line.split(" ").map((item) => parseInt(item));
        arr.sort((a, b) => a - b);
        let res = arr[n - Math.min(y , n - x) - 1];
        let mark = false;
        for (let i = n - Math.min(y , n - x); i <= n - x; i++) {
            if (arr[i] > res) {
                mark = true;
            }
        }
        if (mark) console.log(res);
        else console.log(-1);
    }
})();
