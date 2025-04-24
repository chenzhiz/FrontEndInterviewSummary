/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let s = new Set()
  let nodeA = headA
  while (nodeA != null) {
    s.add(nodeA)
    nodeA = nodeA.next
  }
  let nodeB = headB
  while (nodeB) {
    if (s.has(nodeB)) {
      return nodeB
    }
    nodeB = nodeB.next
  }
  return null
}