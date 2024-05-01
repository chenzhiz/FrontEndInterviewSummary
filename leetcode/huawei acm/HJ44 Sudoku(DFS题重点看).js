const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 之前直接用行列判断填入，没考虑到可能有填不满，还是DFS保证一定能填上，二维数组复制也要注意，直接... 结果把tm地址复制过来难蚌，但是也合理
void (async function () {
    // Write your code here
    let arr = [];
    let za = [];
    let n = 0;

    const ValidExist = (x, y, v) => {
        let xb = Math.floor(x / 3) * 3;
        let yb = Math.floor(y / 3) * 3;
        let pA = [
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 0],
            [2, 1],
            [2, 2],
        ];
        for (let i = 0; i < 9; i++) {
            if (arr[x][i] === v) return false;
            if (arr[i][y] === v) return false;
            if (arr[xb + pA[i][0]][yb + pA[i][1]] === v) return false;
        }
        return true;
    };

    while ((line = await readline())) {
        let tokens = line.split(" ").map((item) => parseInt(item));
        tokens.forEach((item, index) => {
            if (item === 0) {
                za.push([n, index]);
            }
        });
        n++;
        // za.forEach
        arr.push(tokens);
    }
    let result = []
    const dfs = () => {
        if (result.length !== 0) return
        if (za.length === 0 ){
            result = arr.map((item) => [...item])
            return;
        } 
        let [x, y] = za[za.length - 1];
        for (let i = 1; i <= 9; i++) {
            if (ValidExist(x, y, i)) {
                za.pop();
                arr[x][y] = i;
                dfs();
                arr[x][y] = 0;
                za.push([x, y]);
            }
        }
    };
    dfs();

    for (line of result) {
        console.log(
            line.reduce((acc, item, index) => {
                if (index !== 0) return acc + " " + String(item);
                else return String(item);
            }, "")
        );
    }
})();
