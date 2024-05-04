const rl = require("readline").createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void async function () {
  // Write your code here
  line = await readline()
  let [n, m, q] = line.split(" ").map((item) => parseInt(item))
  let map = new Map()

  for (let i = 1; i <= m; i++) {
    line = await readline()
    let [a, b] = line.split(" ").map((item) => parseInt(item))
    map.set(a, [...(map.get(a) ?? []), b])
    map.set(b, [...(map.get(b) ?? []), a])
  }
  // console.log(map)
  const friend = (st, tar) => {
    let que = []
    let vis = new Array(n + 1).fill(false)
    que.push(st)
    while (que.length !== 0) {
      let a = que.pop()
      vis[a] = true
      for (let i = 1; i <= n; i++) {
        if (!vis[i] && (map.get(a) && map.get(a).indexOf(i) !== -1)) {
          if (i === tar) return true
          vis[i] = true
          que.push(i)
        }
      }
    }
    return false
  }

  while (line = await readline()) {
    let tokens = line.split(' ')
    let [t, n1, n2] = tokens.map((item) => parseInt(item))
    if (t === 1) {
      if (map.get(n1) && map.get(n1).indexOf(n2) !== -1) {
        let list = map.get(n1)
        let index = map.get(n1).indexOf(n2)
        let newarr = [...list.slice(0, index), ...list.slice(index + 1)]
        map.set(n1, newarr)
      }
      if (map.get(n2) && map.get(n2).indexOf(n1) !== -1) {
        let list = map.get(n2)
        let index = map.get(n2).indexOf(n1)
        let newarr = [...list.slice(0, index), ...list.slice(index + 1)]
        map.set(n2, newarr)
      }
      // console.log(`--->`)
      // console.log(map)
    } else {
      if (friend(n1, n2)) {
        console.log("Yes")
      } else {
        console.log("No")
      }

    }
  }
}()

// hashset
void async function () {
  // Write your code here
  line = await readline()
  let [n, m, _] = line.split(" ").map((item) => parseInt(item))
  let set = new Set()

  for (let i = 1; i <= m; i++) {
    line = await readline()
    let [a, b] = line.split(" ").map((item) => parseInt(item))
    set.add(String(a) + "-" + String(b))
    set.add(String(b) + "-" + String(a))
  }
  const friend = (st, tar) => {
    let que = []
    let vis = new Array(n + 1).fill(false)
    que.push(st)
    while (que.length !== 0) {
      let a = que.pop()
      vis[a] = true
      for (let i = 1; i <= n; i++) {
        if (!vis[i] && set.has(String(a) + "-" + String(i))) {
          if (i === tar) return true
          vis[i] = true
          que.push(i)
        }
      }
    }
    return false
  }

  while (line = await readline()) {
    let tokens = line.split(' ')
    let [t, n1, n2] = tokens.map((item) => parseInt(item))
    if (t === 1) {
      if (set.has(String(n1) + "-" + String(n2))) {
        set.delete(String(n1) + "-" + String(n2))
        set.delete(String(n2) + "-" + String(n1))
      }
    } else {
      if (friend(n1, n2)) {
        console.log("Yes")
      } else {
        console.log("No")
      }
    }
  }
}()


// 改hashset
void async function () {
  // Write your code here
  line = await readline()
  let [n, m, q] = line.split(" ").map((item) => parseInt(item))
  let arr = Array(n + 1).fill(0).map(() => Array(n + 1).fill(false))
  let map = new map()

  for (let i = 1; i <= m; i++) {
    line = await readline()
    let [a, b] = line.split(" ").map((item) => parseInt(item))
    arr[a][b] = true
    arr[b][a] = true
  }

  const friend = (st, tar) => {
    let que = []
    let vis = new Array(n + 1).fill(false)
    que.push(st)
    while (que.length !== 0) {
      let a = que.pop()
      vis[a] = true
      for (let i = 1; i <= n; i++) {
        if (!vis[i] && arr[a][i]) {
          if (i === tar) return true
          vis[i] = true
          que.push(i)
        }
      }
    }
    return false
  }

  while (line = await readline()) {
    let tokens = line.split(' ')
    let [t, n1, n2] = tokens.map((item) => parseInt(item))
    if (t === 1) {
      arr[n1][n2] = false
      arr[n2][n1] = false
    } else {
      if (friend(n1, n2)) {
        console.log("Yes")
      } else {
        console.log("No")
      }
    }
  }
}()

// 路径压缩（最快但是时间还是没过）
void (async function () {
  // Write your code here
  line = await readline();
  let [n, m, q] = line.split(" ").map((item) => parseInt(item));
  let p = new Array(n + 1).fill(-1);
  let map = new Map();

  const find = (i) => {
      if (p[i] === -1 || p[i] === i) {
          return i;
      } else {
          let t = find(p[i]);
          p[i] = t;
          return t;
      }
  };

  const union = (i, j) => {
      if (find(i) === find(j)) {
          return;
      } else {
          p[find(j)] = find(i);
      }
  };

  for (let i = 1; i <= m; i++) {
      line = await readline();
      let [a, b] = line.split(" ").map((item) => parseInt(item));
      if (find(a) !== find(b)) {
          union(a, b);
        
      }
      // set 添加
      if(map.get(a)){
        map.get(a).add(b)
      }else{
        let set = new Set()
        set.add(b)
        map.set(a, set)
      }
      if(map.get(b)){
        map.get(b).add(a)
      }else{
        let set = new Set()
        set.add(a)
        map.set(b, set)
      }
  }

  const friend = (st, tar) => {
      if (find(st) === find(tar)) return true;
      else return false;
  };

  while ((line = await readline())) {
      let tokens = line.split(" ");
      let [t, n1, n2] = tokens.map((item) => parseInt(item));
      if (t === 1) {
          if (find(n1) !== find(n2)) continue;
          else {
              if (map.get(n1)) {
                  map.get(n1).delete(n2)
                  map.get(n2).delete(n1)
              }
              
              if(map.get(n1).size === 0){
                p[n1] = -1
                let index = p.indexOf(n1)
                for(let i = 1; i <= n; i++){
                    if(p[i] === n1) p[i] = index
                }
              } 
              if(map.get(n2).size === 0){
                p[n2] = -1
                let index = p.indexOf(n2)
                for(let i = 1; i <= n; i++){
                    if(p[i] === n2) p[i] = index
                }
              } 
            //   console.log(map)
            //   console.log(p)
          }
      } else {
          if (friend(n1, n2)) {
              console.log("Yes");
          } else {
              console.log("No");
          }
      }
  }
})();



// void (async function () {
//   // Write your code here
//   line = await readline();
//   let [n, m, q] = line.split(" ").map((item) => parseInt(item));
//   let p = new Array(n + 1).fill(-1);
//   let map = new Map();

//   const find = (i) => {
//       if (p[i] === -1 || p[i] === i) {
//           return i;
//       } else {
//           let t = find(p[i]);
//           p[i] = t;
//           return t;
//       }
//   };

//   const union = (i, j) => {

//       if (find(i) === find(j)) {
//           return;
//       } else {
//           p[find(j)] = find(i);
//       }
//   };

//   for (let i = 1; i <= m; i++) {
//       line = await readline();
//       let [a, b] = line.split(" ").map((item) => parseInt(item));
//       if (find(a) !== find(b)) {
//           union(a, b);
//         //   console.log(111)
//       }
//     //   console.log(p)
//       map.set(a, [...(map.get(a) ?? []), b]);
//       map.set(b, [...(map.get(b) ?? []), a]);
//   }

//   const friend = (st, tar) => {
//     //   console.log(`st  :${find(st)}`)
//     //   console.log(`tar :${find(tar)}`)
//       if (find(st) === find(tar)) return true;
//       else return false;
//   };

//   while ((line = await readline())) {
//       let tokens = line.split(" ");
//       let [t, n1, n2] = tokens.map((item) => parseInt(item));
//       if (t === 1) {
//           if (find(n1) !== find(n2)) continue;
//           else {
//               if (map.get(n1) && map.get(n1).indexOf(n2) !== -1) {
//                   let list = map.get(n1);
//                   let index = map.get(n1).indexOf(n2);
//                   let newarr = [
//                       ...list.slice(0, index),
//                       ...list.slice(index + 1),
//                   ];
//                   map.set(n1, newarr);
//               }
//               if (map.get(n2) && map.get(n2).indexOf(n1) !== -1) {
//                   let list = map.get(n2);
//                   let index = map.get(n2).indexOf(n1);
//                   let newarr = [
//                       ...list.slice(0, index),
//                       ...list.slice(index + 1),
//                   ];
//                   map.set(n2, newarr);
//               }
//               if(map.get(n1).length === 0){
//                 p[n1] = -1
//                 let index = p.indexOf(n1)
//                 for(let i = 1; i <= n; i++){
//                     if(p[i] === n1) p[i] = index
//                 }
//               } 
//               if(map.get(n2).length === 0){
//                 p[n2] = -1
//                 let index = p.indexOf(n2)
//                 for(let i = 1; i <= n; i++){
//                     if(p[i] === n2) p[i] = index
//                 }
//               } 
//             //   console.log(map)
//             //   console.log(p)
//           }
//       } else {
//           if (friend(n1, n2)) {
//               console.log("Yes");
//           } else {
//               console.log("No");
//           }
//       }
//   }
// })();

