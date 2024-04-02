/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 下沉(堆用下沉，不用上升)
const fn2 = (marklist, current ,vaildnum, lists) =>{
  let nextnum = 1
  while(current < vaildnum){
    if(2 * current > vaildnum) break;
    nextnum = 2 * current
    // 右比左小
    if(2 * current + 1 <= vaildnum && lists[marklist[2 * current + 1]].val < lists[marklist[ 2 * current]].val) {
      nextnum = 2 * current + 1
    }
    if(lists[marklist[current]].val > lists[marklist[nextnum]].val){
      let temp = marklist[current]
      marklist[current] = marklist[nextnum]
      marklist[nextnum] = temp
      current = nextnum
    }else{
      break
    }
  }
}

var mergeKLists = function(lists) {
  if(lists.length === 0 ) return null
  let markList = [0]
  for(let i = 0; i < lists.length; i++){
    if(lists[i] !== null){
      markList.push(i)
    }
  }
  let vaildnum = markList.length - 1
  if(vaildnum === 0) return null
  if(vaildnum === 1) return lists[markList[1]]

  // 初始化列表树(注意大堆小堆都是从后往前操作的)
  for(let i = Math.floor(vaildnum/2); i >=1 ; i--){
    fn2(markList, i, vaildnum , lists)
  }
  let head = null;
  let preNode = null;
  while(vaildnum > 1){
    // 取出表头待处理最小
    let node = lists[markList[1]]
    if(head === null){
      head = node
      preNode = head;
    }else{
      preNode.next = node
      preNode = preNode.next
    }
    // 表头换到下一位
    lists[markList[1]] = node.next
    node = node.next
    if(node === null){
      temp = markList[vaildnum]
      markList[vaildnum] = markList[1]
      markList[1] = temp
      vaildnum--
    }
    fn2(markList, 1, vaildnum, lists)
  }
  // 处理最后一个列表
  preNode.next = lists[markList[1]]
  return head
};

// 堆用起来有点麻烦
// Todo 用链表两两合并(慢一些)
const mergeTwoLists = (l1, l2) =>{
  let head = new ListNode(), pre=head
  while(l1 && l2){
    if(l1.val > l2.val){
      pre.next = l2
      l2 = l2.next
    }else{
      pre.next = l1
      l1 = l1.next
    }
    pre = pre.next
  }
  pre.next = l1 ? l1 : l2
  return head.next
}

// 这个本质还不是从二分合并而是从前到后合并属于暴力
// var mergeKLists = function(lists) {
//   let len = lists.length
//   if(!len){
//     return null
//   }
//   if(len === 1){
//     return lists[0]
//   }
//   let res = mergeTwoLists(lists[0], lists[1])
//   lists.splice(0, 2, res)
//   return mergeKLists(lists)
// };

// 分治合并(最快)
var mergeKLists = function(lists) {
  let len = lists.length
  if(!len){
    return null
  }
  if(len === 1){
    return lists[0]
  }
  if(len === 2){
    return mergeTwoLists(lists[0], lists[1])
  }
  return mergeTwoLists(mergeKLists(lists.slice(0, Math.ceil(len / 2))), mergeKLists(lists.slice(Math.ceil(len / 2), lists.length)))
};