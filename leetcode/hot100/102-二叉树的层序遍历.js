/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = []
  let m = new Map()
  if (root === null) return []
  queue.push([root, 1])
  while (queue.length !== 0) {
    let t = queue.shift()
    m.set(t[1], [...(m.get(t[1]) ?? []), t[0].val])
    if (t[0].left) queue.push([t[0].left, t[1] + 1])
    if (t[0].right) queue.push([t[0].right, t[1] + 1])
  }
  let count = 1
  let ans = []
  while (m.get(count)) {
    ans.push(m.get(count))
    count++
  }
  return ans
}