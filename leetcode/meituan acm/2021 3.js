const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    line = await readline()
    let T = parseInt(line)
    for(let i = 0; i < T; i++){
        line = await readline()
        let N = parseInt(line)
        line = await readline()
        let sitn = line.split("").map((item) => parseInt(item))
        line = await readline()
        let M = parseInt(line)
        line = await readline()
        let l = line.split("")

  
        for(let i = 0 ; i < M; i++){
            let index = -1
            for(let j = 0; j < N; j++){
                if(sitn[j] < 2){
                    if(l[i] === "M"){
                        if(sitn[j] === 1){
                            index = j
                            break
                        }
                    }else{
                        if(sitn[j] === 0){
                            index = j
                            break
                        }
                    }
                }
            }
            if(index !== -1){
                sitn[index]++
                console.log(index + 1)
            }else{
                for(let j = 0; j < N; j++){
                    if(sitn[j] < 2){
                        sitn[j]++
                        console.log(j + 1)
                        break
                    }
                }
            }
        }
    }
    
}()





// sort 和插入都超时
void async function () {
    // Write your code here
    line = await readline()
    let T = parseInt(line)

    const find = (arr, tar) => {
        let i = 0;
        let j = arr.length
        while(i <= j){
            let mid = (i + j) >> 1
            if(mid <= tar){
                i = mid + 1
            }else{
                j = mid - 1
            }
        }
        return i
    }   

    for(let i = 0; i < T; i++){
        line = await readline()
        let N = parseInt(line)
        line = await readline()
        let sitn = line.split("").map((item) => parseInt(item))
        
        let a0 = []
        let a1 = []
        for(let i = 0; i < sitn.length; i++){
            if(sitn[i] === 0) a0.push(i)
            else if(sitn[i] === 1) a1.push(i)
        }

        line = await readline()
        let M = parseInt(line)
        line = await readline()
        let l = line.split("")

        for(let i = 0 ; i < M; i++){
            let t
            if(l[i] === "M"){
                if(a1.length !== 0){
                    t = a1.shift()
                }else{
                    t = a0.shift()
                    a1.push(t)
                }
            }else{
                if(a0.length !== 0){
                    t = a0.shift()
                    a1.splice(find(a1, t), 0, t)
                    a1.sort((a, b) => a - b)
                }else{
                    t = a1.shift()
                }
            }
            console.log(t + 1)
        }
    }
}()



// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;


void async function () {
    // Write your code here
    line = await readline()
    let T = parseInt(line)

    const find = (arr, tar) => {
        let i = 0;
        let j = arr.length
        while(i <= j){
            let mid = (i + j) >> 1
            if(mid <= tar){
                i = mid + 1
            }else{
                j = mid - 1
            }
        }
        return i
    }   

    for(let i = 0; i < T; i++){
        line = await readline()
        let N = parseInt(line)
        line = await readline()
        let sitn = line.split("").map((item) => parseInt(item))
        
        let a0 = []
        let a1 = []
        for(let i = 0; i < sitn.length; i++){
            if(sitn[i] === 0) a0.push(i)
            else if(sitn[i] === 1) a1.push(i)
        }
        line = await readline()
        let M = parseInt(line)
        line = await readline()
        let l = line.split("")

        for(let i = 0 ; i < M; i++){
            let t
            if(l[i] === "M"){
                if(a1.length !== 0){
                    t = a1.shift()
                }else{
                    t = a0.shift()
                    a1.push(t)
                }
            }else{
                if(a0.length !== 0){
                    t = a0.shift()
                    a1.splice(find(a1, t), 0, t)
                    a1.sort((a, b) => a - b)
                }else{
                    t = a1.shift()
                }
            }
            console.log(t + 1)
        }
    }
}()
