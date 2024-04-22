/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  // let map = new Map()
  let set = new Set()
  let cur = head
  // let cnt = 0
  while(cur!=null && !set.has(cur)){
    set.add(cur)
    cur = cur.next
  }
  console.log(set)
  if(cur)
    console.log(cur.val)
  return cur
};