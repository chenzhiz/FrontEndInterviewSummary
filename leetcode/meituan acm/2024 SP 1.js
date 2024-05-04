const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 时间没过，不过想到可以用矩阵减法
void async function () {
    // Write your code here
    line = await readline()
    let rows = parseInt(line)
    const Perfect = (arr , size) => {
        if(size % 2 !== 0) return 0
        let res = 0
        for(let i = 0; i + size <= rows; i++ ){
            for(let j = 0; j + size <= rows;j++){
                let count = 0
                for(let m = 0; m < size; m++){
                    for(let n = 0; n < size; n++){
                        if(arr[i + m][j + n] === 0) count--
                        else count++
                    }
                }
                if(count === 0) res++
            }
        }
        return res
    }
    let arr = []
    while(line = await readline()){
        let nums = line.split('').map((item) => parseInt(item));
        arr.push(nums)
    }
    for(let i = 1; i <= rows; i++){
        console.log(Perfect(arr, i))
    }

}()


// IJ 写反检查一年我真的是操了
void async function () {
  // Write your code here
  line = await readline()
  let rows = parseInt(line)
  let arr = []
  while (line = await readline()) {
      let nums = line.split('').map((item) => parseInt(item));
      arr.push(nums)
  }
  let count = new Array(rows + 1).fill(0).map(() => Array(rows + 1).fill(0))
  // console.log(count)
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows; j++) {
          count[i][j] = (j - 1 >= 0 ? count[i][j - 1] : 0) + (i - 1 >= 0 ? count[i - 1][j] : 0) - ((i - 1 >= 0 && j - 1 >= 0) ? count[i - 1][j - 1] : 0) + (arr[i][j] === 1 ? 1 : 0)
      }
  }
  // console.log(count[0])
  const Perfect = (count, size) => {
      if (size % 2 !== 0) return 0
      let tar = size / 2 * size
      let pcount = 0
      for (let i = 0; i + size <= rows; i++) {
          for (let j = 0; j + size <= rows; j++) {
              let tempnum = count[i + size - 1][j + size - 1] - (i - 1 >= 0 ? count[i - 1][j + size - 1] : 0) - (j - 1 >= 0 ? count[i + size - 1][j - 1] : 0) + ((i - 1 >= 0 && j - 1 >= 0) ? count[i - 1][j - 1] : 0)
              if (tempnum === tar) {
                  pcount++
              }
          }
      }
      return pcount
  }
  for (let i = 1; i <= rows; i++) {
      console.log(Perfect(count, i))
  }
}()