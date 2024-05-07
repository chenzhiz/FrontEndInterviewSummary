/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  let n = answers.length
  let map = new Map()
  for(let i = 0; i < n; i++){
    map.set(answers[i], (map.get(answers[i]) ?? 0) + 1)
  }
  let count = 0
  for(v of map){
    if(v[0] + 1 >= v[1]) count += v[0] + 1
    else{
      while(v[1] >= v[0] + 1){
        count += v[0] + 1
        v[1] -= (v[0] + 1)
      }
      if(v[1] !== 0){
        count += v[0] + 1
      }
    }
  }
  return count
};

console.log(numRabbits([2,1,2,2,2,2,2,2,1,1]))