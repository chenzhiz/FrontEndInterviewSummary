const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let m = new Map();
    while ((line = await readline())) {
        let sl = line.split("\\");
        let fn = sl[sl.length - 1];
        let temp = fn.split(" ");
        let fnt = temp[0].length <= 16 ? temp[0] : temp[0].slice(temp[0].length - 16);
        fnt = fnt + " " +  temp[1]
        m.set(fnt, (m.get(fnt) ?? 0) + 1);
    }
    let arr = [...m]
    // console.log(arr)
    for (let i = (arr.length - 8 < 0 ? 0 : arr.length - 8); i < arr.length; i++) {
        let temp = arr[i][0].split(" ");
        let filename = temp[0]
        let row = parseInt(temp[1]);
        console.log(`${filename} ${row} ${arr[i][1]}`);
        //E:\V1R2\product\fpgadrive.c 1325
    }
})();
