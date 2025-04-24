function ListNode (val, key, pre, next) {
  this.val = (val === undefined ? 0 : val)
  this.pre = (pre === undefined ? null : pre)
  this.next = (next === undefined ? null : next)
  this.key = (key === undefined ? 0 : key)
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cnt = new Map()
  this.capacity = capacity
  this.nodenum = 0
  this.tail = new ListNode(0, -1, null, null)
  this.head = new ListNode(0, -1, null, this.tail)
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cnt.get(key)) {
    let node = this.cnt.get(key)
    // 表中删除节点
    let pre = node.pre
    let next = node.next
    pre.next = next
    next.pre = pre
    // 插入表头
    this.head.next.pre = node
    node.next = this.head.next
    node.pre = this.head
    this.head.next = node
    return node.val
  } else {
    return -1
  }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cnt.get(key)) {
    let node = this.cnt.get(key)
    node.val = value
    this.cnt.set(key, node)
    // 表中删除节点
    let pre = node.pre
    let next = node.next
    pre.next = next
    next.pre = pre
    // 插入表头
    this.head.next.pre = node
    node.next = this.head.next
    node.pre = this.head
    this.head.next = node
  } else {
    // 头部插入新节点
    let node = new ListNode(value, key, this.head, this.head.next)
    this.head.next.pre = node
    this.head.next = node
    if (this.nodenum < this.capacity) {
      this.nodenum++
    } else {
      // 删除最后一个节点
      let tnode = this.tail.pre
      tnode.pre.next = this.tail
      this.tail.pre = tnode.pre
      this.cnt.delete(tnode.key)
    }
    this.cnt.set(key, node)
  }

  // let node = this.cnt.get(key) ?? ListNode(value, null)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */