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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const fn = (lnode, rnode) => {
    if (!lnode && !rnode) return true
    if (lnode && rnode && lnode.val == rnode.val) {
      return fn(lnode.left, rnode.right) && fn(lnode.right, rnode.left)
    }
    return false
  }
  return fn(root.left, root.right)
}