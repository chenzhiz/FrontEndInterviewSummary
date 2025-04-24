// 会爆内存，不先找到的话不知道路径，现在还是根据路径那一套走
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let arr = []
  const dfs = (root, path) => {
    if (root === null) return
    if (arr.length >= 2) return
    if (root === q || root === p) {
      arr.push(path)
      return
    }
    dfs(root.left, [...path, root.left])
    dfs(root.right, [...path, root.right])
  }
  dfs(root, [root])
  if (arr.length === 1) {
    return arr[0][arr[0].length - 1]
  } else {
    let s = new Set(arr[0])
    for (let i = arr[1].length - 1; i >= 0; i--) {
      if (s.has(arr[1][i])) return arr[1][i]
    }
  }
}

// 想这样不能走回头路的树，只能从底下反上来
// 递归解题，看一下思路(就是看一下p和q是否在左右两边中的任意一边，如果都在左，公共祖先节点一定在左，如果都在右公共节点在右)
// (如果在两边,由于是递归到深处，第一个两边都有的节点就是最近的公共祖先节点)
// https://doocs.github.io/leetcode/lc/236/#_1
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  return left && right ? root : left || right
}