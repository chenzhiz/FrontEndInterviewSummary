class ListNode {
       val: number
       next: ListNode | null
       constructor(val?: number, next?: ListNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.next = (next===undefined ? null : next)
      }
  }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  var p1:ListNode|null = l1;
  var p2:ListNode|null = l2;
  
  var temp:number = 0
  if(p1 == null) return p2
  if(p2 == null) return p1

  // 特殊情况
  if (p1.val + p2.val == 0){
    return new ListNode(0, null)
  }
  if (p1.val + p2.val >= 10){
    temp = 1 
  }
  var head:ListNode = new ListNode((p1.val + p2.val) % 10, null)
  var currentNode = head
  p1 = p1.next
  p2 = p2.next
  while(p1!=null && p2 != null){
    currentNode.next = new ListNode((p1.val + p2.val + temp) % 10, null)
    currentNode = currentNode.next
    if(p1.val + p2.val + temp >= 10){
      temp = 1
    } else {
      temp = 0
    }
    p1 = p1.next
    p2 = p2.next
  }
  if(p1 != null){
    while(temp == 1 && p1 != null){
      currentNode.next = new ListNode((p1.val + temp) % 10, null)
      if(temp + p1.val >= 10){
        temp = 1
      } else {
        temp = 0
      }
      currentNode = currentNode.next
      p1 = p1.next
    }
    if(temp == 1){
      temp = 0
      currentNode.next = new ListNode(1 , null)
    } else {
      currentNode.next = p1
    }
  } 
  if(p2 != null){
    while(temp == 1 && p2 != null){
      currentNode.next = new ListNode((p2.val + temp) % 10, null)
      if(temp + p2.val >= 10){
        temp = 1
      } else {
        temp = 0
      }
      currentNode = currentNode.next
      p2 = p2.next
    }
    if(temp == 1){
      temp = 0
      currentNode.next = new ListNode(1 , null)
    } else {
      currentNode.next = p2
    }
  }
  if(temp == 1){
    currentNode.next = new ListNode(1 , null)
  }

  return head

  // var num1:number = 0
  // var num2:number = 0
  // var tempnum = 1
  // while(l1 != null) {
  //     num1 += l1.val * tempnum
  //     tempnum *=10
  //     l1 = l1.next
  // }
  // tempnum = 1
  // while(l2 != null) {
  //     num2 += l2.val * tempnum
  //     tempnum *=10
  //     l2 = l2.next
  // }
  // var num3:number = num1 + num2
  // if( num3 == 0){
  //   return new ListNode(0, null)
  // }
  // var preNode:ListNode | null = null
  // var head:ListNode | null = null
  // while(num3 != 0){
  //   var currentNode:ListNode
  //   if(preNode == null){
  //     head = new ListNode(num3%10, null)
  //     preNode = head
  //   } else {
  //     currentNode = new ListNode(num3%10, null)
  //     preNode.next = currentNode
  //     preNode = currentNode
  //   }
  //   num3 = Math.floor(num3 / 10)
  // }
  // return head
};