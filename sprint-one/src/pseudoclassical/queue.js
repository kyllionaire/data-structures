var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

// enqueue(string),dequeue(),size()
Queue.prototype.enqueue = function(value) {
  //set key val pairs in this.storage obj
  this.storage[this.count] = value;
  //increment this.count variable
  this.count++;
};
//create a func to find the smallest num
Queue.prototype.smallest = function() {
  var small = this.count;
  for (var key in this.storage) {
    if (key < small) {
      small = key;
    }
  }
  return small;
};
//method to delete from stack
Queue.prototype.dequeue = function() {
  var deqe = this.storage[this.smallest()];
  delete this.storage[this.smallest()];
  return deqe;
};

//method to track size of storage
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
  // return count;
};
var callQueue = new Queue();
