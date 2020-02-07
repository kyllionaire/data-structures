class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  //push,pop,size functions
  //method to add to stack
  push(value) {
    //set key val pairs in this.storage obj
    this.storage[this.count] = value;
    //increment this.count variable
    this.count++;
  }

  //method to delete from stack
  pop() {
    //check if stack is empty
    if (this.count < 1) {
      return 0;
      //else greater than or equal to 1
    } else {
      //decrement count
      this.count--;
      var popped = this.storage[this.count];
      delete this.storage[this.count];
      return popped;
    }
  }

  //method to track size of storage
  size() {
    return Object.keys(this.storage).length;
    // return count;
  }
}

var callStack = new Stack();
