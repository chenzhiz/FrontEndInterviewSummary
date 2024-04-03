/**
 * @param {string} s
 * @return {number}
 */
//动态规划
var longestValidParentheses = function(s) {
  // 记录到以i-1位为结尾的最长最长有效字符的
  const n = s.length;
  const f = new Array(n + 1).fill(0);
  for(let i = 2; i <= s.length; i++){
    if(s[i-1] === ")"){
      if(s[i-2] === "("){
        f[i] = f[i-2] + 2
      }else{
        const j = i - f[i-1] - 1;
        if(j && s[j-1] === "("){
          f[i] = f[i-1] + 2 + f[j-1]
        }
      }
    }
  }
  return Math.max(...f)
};

// 栈方法(用一栈来记录，左括号的位置)
var longestValidParentheses = function(s) {
  let ans = 0;
  const stack = [-1]
  for(let i = 0; i < s.length; i++){
    if(s[i] === "("){
      stack.push(i)
    }else{
      stack.pop()
      if(stack.length === 0){
        stack.push(i)
      }else{
        ans = Math.max(ans, i - stack[stack.length - 1])
      }
    }
  }
  return ans
};


console.log(longestValidParentheses(""))