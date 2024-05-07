/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let stack = []
  for(v of s){
    if(v === ")"){
      let t = []
      for(let i = stack.length -1; stack[i]!== "("; i--){
        t.push(stack.pop())
      }
      stack.pop()
      stack = [...stack, ...t]
    }else{
      stack.push(v)
    }
  }
  let ans = ""
  for(let i = 0; i< stack.length; i++){
    ans += stack[i]
  }
  return ans
};

reverseParentheses("(u(love)i)")