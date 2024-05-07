/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = []
  for(let i = 0; i< s.length; i++){
    if(s[i] === "]"){
      let t = ""
      while(stack[stack.length - 1] !== "["){
        t = stack.pop() + t
      }
      stack.pop()
      t = t.repeat(stack.pop())
      stack.push(t)
    }else if(s[i] <= "9" && s[i] >= "0"){
      let count = 0
      while(s[i] <= "9" && s[i] >= "0"){
        count *= 10
        count += parseInt(s[i])
        i++
      }
      i--
      stack.push(count)
    }else{
      stack.push(s[i])
    }
  }
  
  let ans = ""
  for(let i =0; i<stack.length; i++){
    ans += stack[i]
  }
  return ans
};

console.log(decodeString("3[a]2[bc]"))