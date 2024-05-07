const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline()
    let [n, c] = line.split(" ").map((item) => parseInt(item))

    let p = Array(10000 + 1).fill(-1)

    const find = (i) => {
        if(p[i] === -1 || p[i] === i){
            p[i] = i
            return i
        }else{
            let t = find(p[i])
            p[i] = t
            return t
        }
    }

    const union = (i, j) => {
        if(find(i) === find(j)) return 
        else{
            p[find(i)] = p[find(j)]
        }
    }

    for(let i = 0; i < n ; i++){
        line = await readline()
        let [x, y] = line.split(" ").map((item) => parseInt(item))
        union(x, y)
    }

    let fc = find(c)
    let count = 0
    console.log(p)
    for(let i = 0; i < p.length; i++){
        if(find(i) === fc) count++
    }
    console.log(count)
}()



void async function () {
  // Write your code here
  line = await readline()
  let [n, c] = line.split(" ").map((item) => parseInt(item))
  let map = new Map()
  
  for(let i = 0; i < n ; i++){
    line = await readline()
    let [x, y] = line.split(" ").map((item) => parseInt(item))
    map.set(x, [...(map.get(x) ?? []), y])
    map.set(y, [...(map.get(y) ?? []), x])
  }
  
  let count = 1
  let queue = []
  let vis = Array(10000 + 1).fill(false)

  queue.push(c)
  vis[c] = true
  
  while(queue.length !== 0){
    let t = queue.shift();
    // queue = [...queue.slice(1)];
    for(v of (map.get(t) ?? [])){
      if(!vis[v]){
        vis[v] = true
        queue.push(v)
        count++
      }
    }
  }
  console.log(count)

}()
