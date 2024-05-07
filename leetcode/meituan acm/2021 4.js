const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 超时
void async function () {
    // Write your code here
    
    while(line = await readline()){
        let N = parseInt(line)
        line = await readline()
        let arr = line.split(" ").map((item) => parseInt(item))
        let m = arr.length
        
        const dfs = (i , j,  cur) => {
            if(i < 0 || j >= N || i >= j) return 0
            let min = 1 << 30
            if(cur === i){
              for(let u = i+1; u <= j; u++){
                let t = dfs(i + 1, j, u) + arr[cur] * arr[u]
                min = Math.min(min, t)
              }
            }
            else if(cur === j){
              for(let u = i; u <= j-1; u++){
                let t = dfs(i, j-1, u) + arr[cur] * arr[u]
                min = Math.min(min, t)
              }
              
            }
            else {
              for(let u = i; u <= cur - 1; u++){
                for(let v = cur + 1; v <= j; v++){
                  let t = dfs(i, cur - 1, u) + dfs(cur + 1, j, v) + arr[cur] * arr[u] + arr[cur] * arr[v]
                  min = Math.min(min, t)
                }
              }
            }
            return min
        }
        
        let min = 1 << 30
        for(let i = 0; i < m; i++){
          min = Math.min(min, dfs(0, m - 1,i))
        }
        console.log(min)
    }
}()