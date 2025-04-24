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
var isValidBST = function (root) {
  let ans = true
  const dfs = (root) => {
    if (!root || !ans) return [0, -1]
    let [ll, lr] = dfs(root.left)
    let [rl, rr] = dfs(root.right)
    let [l, r] = [root.val, root.val]
    if (ll <= lr) {
      if (lr >= root.val) ans = false
      l = ll
    }
    if (rl <= rr) {
      if (rl <= root.val) ans = false
      r = rr
    }
    return [l, r]
  }
  dfs(root)
  return ans
}