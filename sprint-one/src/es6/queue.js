class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  // enqueue(string),dequeue(),size()
  enqueue(value) {
    //set key val pairs in this.storage obj
    this.storage[this.count] = value;
    //increment this.count variable
    this.count++;
  }
  //create a func to find the smallest num
  smallest() {
    var small = this.count;
    for (var key in this.storage) {
      if (key < small) {
        small = key;
      }
    }
    return small;
  }
  //method to delete from stack
  dequeue() {
    var deqe = this.storage[this.smallest()];
    delete this.storage[this.smallest()];
    return deqe;
  }

  //method to track size of storage
  size() {
    return Object.keys(this.storage).length;
    // return count;
  }
}

var callQueue = new Queue();
