const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    line = await readline();
    while ((line = await readline())) {
        let nums = line.split(" ").map((item) => parseInt(item));
        const Prime = (val) => {
            for (let i = 2; i <= Math.sqrt(val); i++) {
                if (val % i === 0) return false;
            }
            return true;
        };
        let maxcount = 0;
        let arr = [...nums];
        let mark = new Array(arr.length).fill(false);
        let count = 0
        const dfs = () => {
            maxcount = Math.max(maxcount, count)
            if(maxcount * 2 == arr.length) return;
            for (let i = 0; i < arr.length - 1; i++) {
                if (mark[i] === false) {
                    for (let j = i + 1; j < arr.length; j++) {
                        if (mark[j] === false && Prime(arr[i] + arr[j])) {
                            count += 1
                            mark[i] = true
                            mark[j] = true
                            dfs()
                            mark[j] = false
                            mark[i] = false  
                            count -= 1
                        }
                    }
                }
            }
        };
        dfs()
        console.log(maxcount)
    }
})();

// 匈牙利算法(处理两个不相交集合之间的关系)
// https://zhuanlan.zhihu.com/p/96229700
void (async function () {
    const Prime = (val) => {
        for (let i = 2; i * i <= val; i++) {
            if (val % i === 0) return false;
        }
        return true;
    };
    const match = (i) => {
        for (let j = 1; j <= N; ++j) {
            if (arr[i][j] && !vis[j]) {
                vis[j] = true;
                if (p[j] === 0 || match(p[j])) {
                    p[j] = i;
                    return true;
                }
            }
        }
        return false;
    };
    // Write your code here
    line = await readline();
    line = await readline();

    let nums = line.split(" ").map((item) => parseInt(item));
    
    let odds = [-1];
    let evens = [-1];

    for (let n of nums) {
        if (n % 2 === 0) evens.push(n);
        else odds.push(n);
    }
   
    // 左
    let M = odds.length - 1;
    // 右
    let N = evens.length - 1;
    // 右侧对应的左侧是谁
    let p = new Array(N + 1).fill(0);
    let vis = new Array(N + 1).fill(false);
    let arr = new Array(M+1).fill(0).map(() => Array(N+1).fill(false))
    for(let i = 1; i <= M; i++)
        for(let j = 1; j <= N; j++)
            arr[i][j] = Prime(odds[i] + evens[j])

    let cnt = 0;
    for (let i = 1; i <= M; i++) {
        vis = Array(N + 1).fill(false)
        if (match(i)) {
            cnt++;
        }
    }
    console.log(cnt);
})();
