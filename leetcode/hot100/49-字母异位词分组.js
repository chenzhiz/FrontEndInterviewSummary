// 写标记mark来记录
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  const fn = (str) => {
    let arr = new Array(26).fill(0)
    let asit = "a".charCodeAt(0)
    for (let i = 0; i < str.length; i++) {
      arr[str.charCodeAt(i) - asit]++
    }
    let result = ""
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result += letters[i] + arr[i]
      }
    }
    return result
  }

  let m = new Map()

  for (let i = 0; i < strs.length; i++) {
    let mark = fn(strs[i])
    m.set(mark, [...(m.get(mark) ?? []), strs[i]])
  }
  let result = []
  for (item of m.values()) {
    result.push(item)
  }
  return result
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

