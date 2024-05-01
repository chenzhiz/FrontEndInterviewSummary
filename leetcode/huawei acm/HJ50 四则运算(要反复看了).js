const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 究极折磨，感觉心态有点不好了写到这题
void (async function () {
    // Write your code here
    line = await readline();
    let s = line;
    s = s.replace("{", "(");
    s = s.replace("[", "(");
    s = s.replace("}", ")");
    s = s.replace("]", ")");
    const getTop = (s) => {
        return s[s.length - 1];
    };

    const Priority = (chart) => {
        if (chart === "(") return 3;
        if (chart === "*" || chart === "/") return 2;
        if (chart === "+" || chart === "-") return 1;
        return 0;
    };
    let num = [];
    let opt = [];
    for (let i = 0; i < s.length; i++) {
        // console.log(num);
        // console.log(opt);
        // console.log("============================");
        if (s[i] <= "9" && s[i] >= "0") {
            let curnum = parseInt(s[i]);
            // 解决多位数
            while (i + 1 < s.length && s[i + 1] <= "9" && s[i + 1] >= "0") {
                curnum *= 10 + parseInt(s[i + 1]);
                i++;
            }
            num.push(curnum);
        } else {
            if (
                opt.length === 0 ||
                Priority(getTop(opt)) < Priority(s[i]) ||
                (getTop(opt) === "(" && s[i] !== ")")
            ) {
                // 解决负号问题，如果前面是")"或者前面的为数字，那么视为减号
                if (s[i] === "-") {
                    if (
                        i - 1 >= 0 &&
                        (s[i - 1] === ")" ||
                            (s[i - 1] <= "9" && s[i - 1] >= "0"))
                    ) {
                        opt.push(s[i]);
                        continue;
                    } else {
                        i++;
                        let curnum = parseInt(s[i]);
                        while (i + 1 < s.length && s[i + 1] <= "9" && s[i + 1] >= "0") {
                            curnum *= 10 + parseInt(s[i + 1]);
                            i++;
                        }
                        num.push(-curnum);
                        continue;
                    }
                }
                opt.push(s[i]);
                continue;
            }
            if (s[i] === ")") {
                while (opt.length !== 0 && getTop(opt) !== "(") {
                    let t = opt.pop();
                    let num1 = num.pop();
                    let num2 = num.pop();
                    if (t === "+") num.push(num2 + num1);
                    if (t === "-") num.push(num2 - num1);
                    if (t === "*") num.push(num2 * num1);
                    if (t === "/") num.push(num2 / num1);
                }
                opt.pop();
            } else {
                while (
                    opt.length !== 0 &&
                    Priority(getTop(opt)) >= Priority(s[i])
                ) {
                    let t = opt.pop();
                    if (t === "(") {
                        opt.push("(")
                        break;
                    }
                    let num1 = num.pop();
                    let num2 = num.pop();
                    if (t === "+") num.push(num2 + num1);
                    if (t === "-") num.push(num2 - num1);
                    if (t === "*") num.push(num2 * num1);
                    if (t === "/") num.push(num2 / num1);
                }
                opt.push(s[i]);
            }
        }
    }
    while (opt.length !== 0) {
        let t = opt.pop();
        let num1 = num.pop();
        let num2 = num.pop();
        if (t === "+") num.push(num2 + num1);
        if (t === "-") num.push(num2 - num1);
        if (t === "*") num.push(num2 * num1);
        if (t === "/") num.push(num2 / num1);
    }

    console.log(num[0]);
})();
