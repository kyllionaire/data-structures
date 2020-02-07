var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  //_.extend(to, from)
  _.extend(someInstance, queueMethods);
  //return object
  return someInstance;
};

var queueMethods = {};
//create a counter variable
var count = 0;
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

//method for enqueue(string)
queueMethods.enqueue = function(string) {
  this.storage[count] = string;
  count++;
};

//method for dequeue()
queueMethods.dequeue = function() {
  var deqe = this.storage[this.smallest()];
  delete this.storage[this.smallest()];
  return deqe;
};

//method for size of queue
queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
