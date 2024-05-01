const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 纯sb题目，根本不用构建链表，我倒是很好奇他如果行输入怎么构建链表
// 如果真要链表的话，可以先把排列搞过来倒着用头插法，省时省力
void async function () {
    // Write your code here
    let n = 0;
    while(line = await readline()){
        line = await readline()
        let nodeList = line.split(" ").map((item) => parseInt(item))

        line = await readline()
        let lastNumber = parseInt(line)
    
        console.log(nodeList[nodeList.length - lastNumber])
    }
    
}()
