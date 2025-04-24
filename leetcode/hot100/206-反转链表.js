/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return
  let cur = head.next
  let pre = head
  pre.next = null
  while (cur !== null) {
    let t = cur.next
    cur.next = pre
    pre = cur
    cur = t
  }
  return pre
}