const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// 
void (async function () {
    // Write your code here
    const isBomb = (arr) => {
        if (arr.length !== 4) return false;
        let str = arr[0];
        for (let i = 1; i < arr.length; i++) if (arr[i] !== str) return false;
        return true;
    };
    const isDJoker = (arr) => {
        if (arr.length !== 2) return false;
        if (
            (arr[0] === "joker" && arr[1] === "JOKER") ||
            (arr[1] === "joker" && arr[0] === "JOKER")
        )
            return true;
        return false;
    };
    let arr = [
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
        "2",
        "joker",
        "JOKER",
    ];
    while ((line = await readline())) {
        let tokens = line.split("-");
        let s1 = tokens[0].split(" ");
        let s2 = tokens[1].split(" ");

        if (s1.length !== s2.length) {
            if (!isBomb(s1) && !isBomb(s2) && !isDJoker(s1) && !isDJoker(s2)) {
                console.log("ERROR");
            } else {
                if (isDJoker(s1)) {
                    console.log(tokens[0]);
                    break;
                }
                if (isDJoker(s2)) {
                    console.log(tokens[1]);
                    break;
                }
                if (isBomb(s1)) {
                    if (!isBomb(s2)) {
                        console.log(tokens[0]);
                        break;
                    } else {
                        if (arr.indexOf(s1[0]) < arr.indexOf(s2[0])) {
                            console.log(tokens[1]);
                            break;
                        } else {
                            console.log(tokens[0]);
                            break;
                        }
                    }
                } else {
                    console.log(tokens[1]);
                    break;
                }
            }
        } else {
            if (arr.indexOf(s1[0]) < arr.indexOf(s2[0])) {
                console.log(tokens[1]);
                break;
            } else {
                console.log(tokens[0]);
                break;
            }
        }
    }
})();
