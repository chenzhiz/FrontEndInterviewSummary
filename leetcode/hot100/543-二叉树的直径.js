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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0
  const dfs = (root) => {
    if (!root) return -1
    let l = dfs(root.left)
    let r = dfs(root.right)
    ans = Math.max(ans, l + r + 2)
    return 1 + Math.max(l, r)
  }
  dfs(root)
  return ans
}