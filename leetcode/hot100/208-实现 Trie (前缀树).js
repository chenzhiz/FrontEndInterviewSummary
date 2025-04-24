/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode (val) {
  this.val = (val === undefined ? "" : val)
  this.childrens = Array(26).fill(null)
}

var Trie = function () {
  this.root = new TreeNode("")
  this.set = new Set()
}

function charToNumber (char) {
  const charCode = char.charCodeAt(0)
  return charCode - 'a'.charCodeAt(0)
}

function numberToChar (number) {
  let arr = 'abcdefghijklmnopqrstuvwxyz'.split("")
  return arr[number]
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root
  this.set.add(word)
  for (c of word) {
    let num = charToNumber(c)
    if (cur.childrens[num] === null) {
      cur.childrens[num] = new TreeNode(c)
    }
    cur = cur.childrens[num]
  }
}

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.set.has(word)
}

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root
  for (c of prefix) {
    if (!cur || cur.childrens[charToNumber(c)] === null) {
      return false
    }
    cur = cur.childrens[charToNumber(c)]
  }
  return true
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */



