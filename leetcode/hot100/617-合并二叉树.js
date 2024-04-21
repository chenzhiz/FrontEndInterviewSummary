/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  const f = (n1, n2) => {
    if(!n1 && !n2) return null
    let cur = new TreeNode()
    cur.val = (n1 ? (n1.val) : 0) + (n2 ? (n2.val) : 0)
    cur.left = f(n1? n1.left: null, n2? n2.left: null)
    cur.right = f(n1? n1.right: null, n2? n2.right: null)
    return cur
  }
  const newRoot = f(root1, root2)
  return newRoot
};