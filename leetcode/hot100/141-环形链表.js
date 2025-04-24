/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let s = new Set()
  while (head !== null) {
    if (s.has(head)) return true
    s.add(head)
    head = head.next
  }
  return false
}

// 快慢指针，用O(1)的空间复杂度,慢指针循环一圈，如果中间过程快慢相遇说明有环，有环一定相遇，没环一定可以退出循环
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}