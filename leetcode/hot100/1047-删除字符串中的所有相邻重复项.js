/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  for(let i = 1; i < s.length; ){
    if(s[i] === s[i - 1]){
      s = s.slice(0, i - 1) + s.slice(i+1);
      i--
    }
    else{
      i++
    }
  }
  return s
};

// 栈应用，不要忘了
var removeDuplicates = function(s){
  let stack = []
  for(let i = 0; i < s.length; i++){
    if(stack !== 0 && stack[stack.length - 1] === s[i]){
      stack.pop()
    }else{
      stack.push(s[i])
    }
  }
  let ans = ""
  for(let i = 0; i < stack.length; i++){
    ans += stack[i]
  }
  return ans
}

console.log(removeDuplicates("abbaca"))