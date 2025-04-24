/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null
  let root = new TreeNode(preorder[0], null, null)
  if (preorder.length === 1) {
    return root
  }
  let index = inorder.indexOf(preorder[0])
  let lnode = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  let rnode = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  root.left = lnode
  root.right = rnode
  return root
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))