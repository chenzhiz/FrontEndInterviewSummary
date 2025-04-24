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
var maxPathSum = function (root) {
  let maxnum = Number.MIN_SAFE_INTEGER

  const dfs = (root) => {
    if (!root) return 0
    let left = dfs(root.left)
    let right = dfs(root.right)

    maxnum = Math.max(maxnum, root.val + (left > 0 ? left : 0) + (right > 0 ? right : 0))
    return Math.max((Math.max(left, right) + root.val), root.val)
  }
  dfs(root)
  return maxnum
}