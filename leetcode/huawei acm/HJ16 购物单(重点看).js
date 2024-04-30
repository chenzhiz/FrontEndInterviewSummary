const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let line = await readline();
    let money = parseInt(line.split(" ")[0]); // 自己拥有的钱
    let sum = parseInt(line.split(" ")[1]); // 自己可以买多少物品
    let goodSatisfaction = [""]; //自己购买这件物品的满意度
    let goodIsKey = [""]; //自己购买的这件物品是不是主件
    let goodSum = [""]; //自己购买这件物品的价格

    while ((line = await readline())) {
        let line1 = line.split(" ");
        goodSum.push(parseInt(line1[0])); //每件物品的价格
        goodSatisfaction.push(parseInt(line1[1])); //每件物品的满意度
        goodIsKey.push(parseInt(line1[2])); //每件物品是否为主件
    }
    const test = (money, sum, goodSatisfaction, goodIsKey, goodSum) => {
        const dp = new Array(sum + 1)
            .fill(0)
            .map(() => new Array(money + 1).fill(0));
        //开始递推
        let res = 0;
        for (let i = 1; i <= sum; i++) {
            //横坐标逐渐增加的过程，模拟自己能买物品的数量越来越多
            for (let j = money; j >= 0; j--) {
                //纵坐标逐渐增加的过程，模拟自己的钱越来越少01背包
                //如果是正常的背包问题现在套用公式即可，但是现在添加的是否为主副件
                if (!goodIsKey[i]) {
                    //如果现在是主件
                    if (j >= goodSum[i]) {
                        const sub = []; //收集主件后的附件
                        for (let k = 1; k <= goodIsKey.length; k++) {
                            if (goodIsKey[k] == i) {
                                sub.push(k); // 这个主件有几个附件，就以1，2的形式push进数组
                            }
                        }
                        //在没有附件的情况下就是套用背包公式dp数组
                        dp[i][j] = Math.max(
                            dp[i - 1][j],
                            dp[i - 1][j - goodSum[i]] +
                                goodSatisfaction[i] * goodSum[i]
                        );
                        //之后分类讨论，因为题目说了只有1，2附件就依次写出来
                        //如果有一个附件，比较是否买
                        if (sub[0] && j >= goodSum[i] + goodSum[sub[0]]) {
                            //判断是否买不买这件物品，还是基于背包公式的else部分
                            dp[i][j] = Math.max(
                                dp[i][j],
                                dp[i - 1][j - goodSum[i] - goodSum[sub[0]]] +
                                    goodSatisfaction[i] * goodSum[i] +
                                    goodSatisfaction[sub[0]] * goodSum[sub[0]]
                            );
                        }
                        if (sub[1] && j >= goodSum[i] + goodSum[sub[1]]) {
                            //如果有两个附件，比较是否买（注意是if依次判断）
                            dp[i][j] = Math.max(
                                dp[i][j],
                                dp[i - 1][j - goodSum[i] - goodSum[sub[1]]] +
                                    goodSatisfaction[i] * goodSum[i] +
                                    goodSatisfaction[sub[1]] * goodSum[sub[1]]
                            );
                        } //如果还有空余
                        if (
                            sub.length == 2 &&
                            j >= goodSum[i] + goodSum[sub[1]] + goodSum[sub[0]]
                        ) {
                            dp[i][j] = Math.max(
                                dp[i][j],
                                dp[i - 1][
                                    j -
                                        goodSum[i] -
                                        goodSum[sub[0]] -
                                        goodSum[sub[1]]
                                ] +
                                    goodSatisfaction[i] * goodSum[i] +
                                    goodSatisfaction[sub[0]] * goodSum[sub[0]] +
                                    goodSatisfaction[sub[1]] * goodSum[sub[1]]
                            );
                        }
                        res = Math.max(res, dp[i][j]);
                    } else dp[i][j] = dp[i - 1][j]; //不要放进去
                } else dp[i][j] = dp[i - 1][j]; //不要放进去
            }
        }
        return res;
    };
    console.log(test(money, sum, goodSatisfaction, goodIsKey, goodSum));
})();
