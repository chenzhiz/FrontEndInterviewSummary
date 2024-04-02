/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let curNode = head;
  let preNode = null;
  let nodeToDelete = null;
  while(curNode != null){
    n--
    if(preNode !== null){
      preNode = preNode.next
    }
    if(nodeToDelete !== null){
      nodeToDelete = nodeToDelete.next
    }
    if(n===-1){
      preNode = head;
    }
    if(n===0){
      nodeToDelete = head;
    }
    curNode = curNode.next;
  }
  if(nodeToDelete === head){
    return head.next
  }
  
  preNode.next = nodeToDelete.next
  return head
};