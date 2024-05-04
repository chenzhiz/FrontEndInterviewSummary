const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 字符集要相同，所以要加个vis
void async function () {
    // Write your code here
    
    while(line = await readline()){
      let set = new Set([...line])
      if(set.size <= 1){
          console.log(-1)
          break
      }
      let res = ""
      // 没见过的先判定
      let vis = new Set()
      for(let i = 0 ; i < line.length; i++){
          if(vis.size !== set.size){
              let mark = false
              for(s of set){
                  if(!vis.has(s) && s !== line[i]){
                      vis.add(s)
                      res += s
                      mark = true
                      break
                  }
              }
              if(mark)
                  continue
          }
          for(s of set){
              if(s !== line[i]){
                  vis.add(s)
                  res += s
                  break
              }
          }
      }
      console.log(res)
  }
}()