var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

//create a count variable
var count = 0;
// enqueue(string),dequeue(),size()
//method to add to queue
queueMethods.enqueue = function(value) {
  //set key val pairs in this.storage obj
  this.storage[count] = value;
  //increment this.count variable
  count++;
};
//create a func to find the smallest num
queueMethods.smallest = function() {
  var small = count;
  for (var key in this.storage) {
    if (key < small) {
      small = key;
    }
  }
  return small;
};
//method to delete from queue
queueMethods.dequeue = function() {
  var deqe = this.storage[this.smallest()];
  delete this.storage[this.smallest()];
  return deqe;
};

//method to track size of storage
queueMethods.size = function() {
  return Object.keys(this.storage).length;
  // return count;
};
