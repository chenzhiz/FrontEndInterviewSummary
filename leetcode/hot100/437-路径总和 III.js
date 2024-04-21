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
 * @param {number} targetSum
 * @return {number}
 */
// DFS 自己写的方法暴力，虽然成了但是好像时间用的不少(前缀，可以用hash表解决了)
var pathSum = function(root, targetSum) {
  let result = 0
  const dfs = (presum, node) => {
    if(!node) return
    if(node.val === targetSum) result++
    const filterList = presum.filter((item) => item + node.val === targetSum)
    console.log(presum)
    result += filterList.length
    if(node.left) dfs([...presum.map((item) => item + node.val), node.val], node.left)
    if(node.right) dfs([...presum.map((item) => item + node.val), node.val], node.right)
  }
  dfs([], root)
  return result
};

var pathSum = function(root, targetSum){
  // 用于存储当前状态下，前缀和以及其数量
  const cnt = new Map()
  // s 表示从根节点到当前节点的前缀和
  const dfs = (node, s) => {
    if (!node) {
      return 0;
    }
    s += node.val;
    // cnt.get(s - targetSum) 表示以当前节点为路径终点且路径和为 targetSum 的路径数目 从根节点到某些前缀达到 s - targetSum 数值，从那些点到当前的点就是 targetSum
    let ans = cnt.get(s - targetSum) ?? 0;
    cnt.set(s, (cnt.get(s) ?? 0) + 1);
    ans += dfs(node.left, s);
    ans += dfs(node.right, s);
    cnt.set(s, (cnt.get(s) ?? 0) - 1);
    return ans;
  }
  cnt.set(0, 1);
  return dfs(root, 0);
}

console.log()