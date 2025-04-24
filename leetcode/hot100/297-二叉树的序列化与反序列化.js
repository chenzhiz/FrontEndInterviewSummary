/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let m1 = new Map()
  let m2 = new Map()
  let prestr = ""
  let instr = ""
  const preOrder = (root) => {
    if (!root) return
    m1.set(root.val, (m1.get(root.val) ?? 0) + 1)
    if (root.val >= 0) {
      prestr += (root.val + m1.get(root.val) * 10000) + "|"
    } else {
      prestr += (root.val - m1.get(root.val) * 10000) + "|"
    }
    preOrder(root.left)
    preOrder(root.right)
  }
  const inOrder = (root) => {
    if (!root) return
    // 记录路径顺序，避免相同数字引起的建树混乱
    m2.set(root.val, (m2.get(root.val) ?? 0) + 1)
    let t = m2.get(root.val)
    inOrder(root.left)
    if (root.val >= 0) {
      instr += (root.val + t * 10000) + "|"
    } else {
      instr += (root.val - t * 10000) + "|"
    }
    inOrder(root.right)
  }
  preOrder(root)
  prestr = prestr.substring(0, prestr.length - 1)
  inOrder(root)
  instr = instr.substring(0, instr.length - 1)
  return prestr + "@@" + instr
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  console.log(data)
  let preList = data.split("@@")[0].split("|")
  let inList = data.split("@@")[1].split("|")
  if (data === "@@") return null

  const buildTree = (preorder, inorder) => {
    if (preorder.length === 0) return null
    let root = new TreeNode(parseInt(preorder[0] % 10000), null, null)
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
  return buildTree(preList, inList)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


console.log(-101 % 100)