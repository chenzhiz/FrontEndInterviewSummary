// 互斥背包问题


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
// 看题解 https://doocs.github.io/leetcode/lc/337/#dp
// 状态转移确实难想啊树形DP，根据当前节点DP也不用想其他的了
// dp核心就是要还是不要，紧紧抓住这点
var rob = function(root) {
  // 返回两个一个是拿,另一个是不拿当前节点
  const dfs = (root) =>{
    if(!root){
      return [0,0]
    }
    let [la, lb] = dfs(root.left)
    let [ra, rb] = dfs(root.right)
    // 拿当前root ，不拿当前root
    return [root.val + lb + rb, Math.max(la, lb) + Math.max(ra, rb)]
  }
  return Math.max(...dfs(root))
};

