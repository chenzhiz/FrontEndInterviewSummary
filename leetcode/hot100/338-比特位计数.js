/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const count1 = (n) => {
    let count = 0
    while(n !== 0){
      if(n%2 != 0) count ++
      n = n >> 1
    }
    return count
  } 
  let result = []
  for(let i=0; i<=n;i++){
    result.push(count1(i))
  }
  return result
};

//i & (i - 1) 非常有意思的性质，i & (i - 1)会将最低位的1及其之后的位都变为0
function countBits(n) {
  const ans = Array(n + 1).fill(0);
  for (let i = 1; i <= n; ++i) {
      ans[i] = ans[i & (i - 1)] + 1;
  }
  return ans;
}

console.log(countBits(5))