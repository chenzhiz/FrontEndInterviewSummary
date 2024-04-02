/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let tempStack = []
  for(let i =0; i< s.length; i++){
    if(['(','{','['].includes(s[i])){
      tempStack.push(s[i])
      continue
    }
    if(s[i] === ")"){
      if(tempStack.pop() !== "(") return false
    }
    if(s[i] === "}"){
      if(tempStack.pop() !== "{") return false
    }
    if(s[i] === "]"){
      if(tempStack.pop() !== "[") return false
    }
  }
  if(tempStack.length !== 0){
    return false
  }
  return true
};

console.log(isValid("(]"))