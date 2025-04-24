
var MinStack = function () {
  this.stk = []
  this.minstk = []
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.minstk.length === 0 || val <= this.stk[this.minstk[this.minstk.length - 1]]) {
    this.minstk.push(this.stk.length)
  }
  this.stk.push(val)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stk[this.stk.length - 1]
  if (this.minstk.length > 0 && val === this.stk[this.minstk[this.minstk.length - 1]]) {
    this.minstk.pop()
  }
  this.stk.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stk[this.stk.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stk[this.minstk[this.minstk.length - 1]]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */