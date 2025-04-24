/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = []
  let node = head
  while (node !== null) {
    arr.push(node)
    node = node.next
  }

  for (let i = 0; i < (arr.length >> 1); i++) {
    if (arr[i].val !== arr[arr.length - 1 - i].val) return false
  }
  return true
}

console.log(isPalindrome([1, 2, 2, 1]))

// 快慢指针 + 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let cur = slow.next
  slow.next = null
  let pre = null
  while (cur) {
    let t = cur.next
    cur.next = pre
    pre = cur
    cur = t
  }

  while (pre) {
    if (pre.val !== head.val) {
      return false
    }
    pre = pre.next
    head = head.next
  }
  return true
}