const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let cur = "";
        let mark = false;
        let arr = [];
        for (let i = 0; i < line.length; i++) {
            if (line[i] === " ") {
                if (mark) {
                    cur += " ";
                } else {
                    if (cur !== "") {
                        arr.push(cur);
                    }

                    cur = "";
                }
            } else if (line[i] === '"') {
                if (mark) {
                    mark = false;
                    if (cur !== "") {
                        arr.push(cur);
                    }
                    cur = "";
                } else {
                    mark = true;
                }
            } else {
                cur += line[i];
            }
        }
        if (cur !== "") {
            arr.push(cur);
        }
        console.log(arr.length);
        for (t of arr) {
            console.log(t);
        }
    }
})();
