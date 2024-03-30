/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let result = []
  let codeMap = new Map();
  codeMap.set(2, ['a', 'b', 'c'])
  codeMap.set(3, ['d', 'e', 'f'])
  codeMap.set(4, ['g', 'h', 'i'])
  codeMap.set(5, ['j', 'k', 'l'])
  codeMap.set(6, ['m', 'n', 'o'])
  codeMap.set(7, ['p', 'q', 'r', 's'])
  codeMap.set(8, ['t', 'u', 'v'])
  codeMap.set(9, ['w', 'x', 'y', 'z'])
  
  let digitsList = digits.split("").map(Number)
  
  for(let i = 0; i< digitsList.length; i++){
    if(result.length === 0){
      result = [...codeMap.get(digitsList[i])]
      continue
    }
    let templist = result.reduce((acc, item) => {
      let tempitem =  codeMap.get(digitsList[i]).map((char) => item + char)
      return [...acc, ...tempitem]
    },[])
    result = templist
  }
  return result
};

console.log(letterCombinations("2"))