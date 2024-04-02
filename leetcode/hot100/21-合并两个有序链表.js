/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if(list1 === null){
    return list2
  }
  if(list2 === null){
    return list1
  }
  let head = null
  let prenode = null
  while(list1 !== null && list2 !== null){
    if(list1.val < list2.val){
      if(head === null){
        head = list1
        prenode = head
        list1 = list1.next
        continue
      }
      prenode.next = list1
      prenode = list1
      list1 = list1.next
    }else{
      if(head === null){
        head = list2
        prenode = head
        list2 = list2.next
        continue
      }
      prenode.next = list2
      prenode = list2
      list2 = list2.next
    }
  }
  if(list1!== null ){
    prenode.next = list1
  }else{
    prenode.next = list2
  }
  return head
};

