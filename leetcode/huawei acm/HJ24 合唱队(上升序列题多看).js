const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 上升下降队列两个会超时，不用计算Max就是以当前位置为起点或者结尾的上升下降序列
void async function () {
    // Write your code here
    line = await readline()
    while(line = await readline()){
        let arr = line.split(' ').map((item) => parseInt(item));
        // console.log(arr)
        const maxUp = (ls, h) => {
            if(ls.length === 0) return 0
            let max = -1
            let count = []
            for(let i = 0; i < ls.length; i++){
                if(ls[i] < h){
                    count.push(1)
                }else{
                    count.push(0)
                }
                max = Math.max(max, count[i])
                for(let j = 0; j < i ; j++){
                    if(ls[i] > ls[j] && ls[i] < h){
                        count[i] = Math.max(count[i] , count[j] + 1)
                        max = Math.max(count[i], max)
                    }
                }
            }
            return max
        }
        const maxDown = (ls, h) => {
            if(ls.length === 0) return 0
            let max = -1
            let count = []
            for(let i = 0; i < ls.length; i++){
                if(ls[i] < h){
                    count.push(1)
                }else{
                    count.push(0)
                }
                max = Math.max(max, count[i])
                for(let j = 0; j < i ; j++){
                    if(ls[i] < ls[j] && ls[i] < h){
                        count[i] = Math.max(count[i] , count[j] + 1)
                        max = Math.max(count[i], max)
                    }
                }
            }
            return max
        }
        
        let m = arr.length
        let min = 1 << 30
        for(let i = 0 ;i < m; i++){
            let maxPeople =  maxUp(arr.slice(0,i), arr[i]) + maxDown(arr.slice(i + 1), arr[i]) + 1
            min = Math.min(min, (m - maxPeople))
        }
        console.log(min)
    }
}()

// 加深一下对上升序列的印象
void async function () {
    // Write your code here
    line = await readline()
    while(line = await readline()){
        let arr = line.split(' ').map((item) => parseInt(item));
        let left = (ls) => {
            let count = []
            for(let i = 0; i < ls.length; i++){
                count.push(1)
                for(let j = 0; j < i ; j++){
                    if(ls[i] > ls[j]){
                        count[i] = Math.max(count[i], count[j] + 1)
                    }
                }
            }
            return count
        }
        let right = (ls) => {
            let count = Array(ls.length).fill(1)
            for(let i = ls.length - 1; i>=0 ; i--){
                for(let j = i + 1; j < ls.length; j++){
                    if(ls[i] > ls[j]){
                        count[i] = Math.max(count[i], count[j] + 1)
                    }
                }
            }
            return count
        }
        
        let l = left(arr)
        let r = right(arr)

        let maxPeople = 0
        let m = arr.length
        for(let i =0; i< m; i++){
            // 重复计算要减少一个
            maxPeople = Math.max(maxPeople, (l[i] + r[i] - 1))
        }
        console.log(m - maxPeople)
    }
}()
