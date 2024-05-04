const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 学习一下优先队列的包
var PriorityQueue = require('js-priority-queue');  
var queue = new PriorityQueue({  
    comparator: function(a, b) { return a - b; }  
});  
queue.queue(5);  
queue.queue(3);  
queue.queue(2);  
var lowest = queue.dequeue(); // 返回2  


var Heap = require('heap');    
var minHeap = new Heap();  
minHeap.push(1);  
minHeap.push(3);  
minHeap.push(2);  
  
var min = minHeap.pop(); // 返回1，即最小值  


// 迪杰斯特拉,算最短路径，内存超限回头用map优化，不要整组遍历会超时，就遍历那些有关联的
void (async function () {
  // Write your code here

  while ((line = await readline())) {
      let [n, m, q] = line.split(" ").map((item) => parseInt(item));
      
      let dis = new Array(n + 1).fill(1 << 30);
      let vis = new Array(n + 1).fill(false);

      let map = new Map();
      for (let i = 0; i < m; i++) {
          line = await readline();
          let [a, b, t] = line.split(" ").map((item) => parseInt(item));
          map.set(`${a}-${b}`, t);
          map.set(`${b}-${a}`, t);
      }

      line = await readline();
      let tar = line.split(" ").map((item) => parseInt(item));
     
      // 计算到 1 的dis
      dis[1] = 0;
      vis[1] = true;
      let mark = true;
      let cur = 1;
      while (mark) {
          mark = false;
          // 更新距离
          for (let i = 2; i <= n; i++) {
              if (!vis[i]) {
                  let rdis = map.get(`${cur}-${i}`) ?? -1;
                  if (rdis !== -1) {
                      dis[i] = Math.min(dis[i], rdis + dis[cur]);
                  }
              }
          }
          // 找到最小
          let min = 1 << 30;
          for (let i = 2; i <= n; i++) {
              if (!vis[i] && min > dis[i]) {
                  min = dis[i];
                  cur = i;
                  mark = true;
              }
          }
          vis[cur] = true;
      }
      
      
      let total = 0;
      for (t of tar) {
          total += dis[t] * 2;
      }
      console.log(total);
  }
})();


// 用set优化到最后还是没过艹
void (async function () {
  // Write your code here

  while ((line = await readline())) {
      let [n, m, q] = line.split(" ").map((item) => parseInt(item));
      
      let dis = new Array(n + 1).fill(1 << 30);
      // let vis = new Array(n + 1).fill(false);

      let map = new Map();
      for (let i = 0; i < m; i++) {
          line = await readline();
          let [a, b, t] = line.split(" ").map((item) => parseInt(item));
          map.set(a, [...(map.get(a) ?? []), [b, t]]);
          map.set(b, [...(map.get(b) ?? []), [a, t]]);
      }

      line = await readline();
      let tar = line.split(" ").map((item) => parseInt(item));
      
      // 计算到 1 的dis
      dis[1] = 0;
      // vis[1] = true;
      let mark = true;
      let set = new Set([...Array(n + 1).fill(0).map((_,index) => index)])
      set.delete(0)
      set.delete(1)
      let cur = 1;
      while (mark) {
          mark = false;
          // 更新距离
          let curlist = map.get(cur)
          for(item of curlist){
              dis[item[0]] = Math.min(dis[item[0]], item[1] + dis[cur])
          }

          // 找到最小
          let min = 1 << 30;
          for(let s of set){
              if(min > dis[s]){
                  min = dis[s]
                  cur = s
                  mark = true
              }
          }
          set.delete(cur)
      }
      
      let total = 0;
      for (t of tar) {
          total += dis[t] * 2;
      }
      console.log(total);
  }
})();



