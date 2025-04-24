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
var sortList = function (head) {
  if (head === null) return head
  let arr = []
  let node = head
  while (node !== null) {
    arr.push(node)
    node = node.next
  }
  arr.sort((a, b) => a.val - b.val)
  arr.forEach((item) => { item.next = null })
  node = arr[0]
  for (let i = 1; i < arr.length; i++) {
    node.next = arr[i]
    node = arr[i]
  }
  return arr[0]
}

// 归并
const mergeTwoLists = (l1, l2) => {
  let head = new ListNode(), pre = head
  while (l1 && l2) {
    if (l1.val > l2.val) {
      pre.next = l2
      l2 = l2.next
    } else {
      pre.next = l1
      l1 = l1.next
    }
    pre = pre.next
  }
  pre.next = l1 ? l1 : l2
  return head.next
}

var mergeKLists = function (lists) {
  let len = lists.length
  if (!len) {
    return null
  }
  if (len === 1) {
    return lists[0]
  }
  if (len === 2) {
    return mergeTwoLists(lists[0], lists[1])
  }
  return mergeTwoLists(mergeKLists(lists.slice(0, Math.ceil(len / 2))), mergeKLists(lists.slice(Math.ceil(len / 2), lists.length)))
}

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
var sortList = function (head) {
  if (head === null) return head
  let arr = []
  let node = head
  while (node !== null) {
    arr.push(node)
    node = node.next
  }
  arr.forEach((item) => { item.next = null })
  return mergeKLists(arr)
}