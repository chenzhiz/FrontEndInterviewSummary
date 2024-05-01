const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let n = parseInt(line);
        let arr = new Array(n)
            .fill(0)
            .map((item, index) => new Array(n - index).fill(0));
        arr[0][0] = 1;
        for (let i = 1; i < n; i++) {
            arr[i][0] = arr[i - 1][0] + i;
        }
        for (let j = 1; j < n; j++) {
            for (let i = 0; i < n - 1; i++) {
                arr[i][j] = arr[i + 1][j - 1] + 1;
            }
        }

        for (let i = 0; i < arr.length; i++) {
            let res = "";
            for (let j = 0; j < n - i; j++) {
                if (j !== 0) {
                    res += " " + arr[i][j];
                } else {
                    res += arr[i][j];
                }
            }
            console.log(res);
        }
    }
})();
